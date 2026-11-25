<?php
session_start();
require_once __DIR__ . '/db.php';

$action = $_GET['action'] ?? '';

// Serve private KTP image ONLY to authenticated admin
if ($action === 'view_ktp') {
    $pdo = getPasarPdo();
    $admin = getCurrentUser($pdo);
    if (!$admin || $admin['role'] !== 'admin') {
        http_response_code(403);
        exit('Forbidden');
    }
    $uid = (int)($_GET['user_id'] ?? 0);
    $stmt = $pdo->prepare("SELECT ktp_path FROM users WHERE id = ? LIMIT 1");
    $stmt->execute([$uid]);
    $rel = $stmt->fetchColumn();
    $full = $rel ? __DIR__ . '/uploads/ktp/' . basename($rel) : '';
    if (!$full || !is_file($full)) {
        http_response_code(404);
        exit('Not found');
    }
    $ext = strtolower(pathinfo($full, PATHINFO_EXTENSION));
    $mime = $ext === 'png' ? 'image/png' : ($ext === 'webp' ? 'image/webp' : 'image/jpeg');
    header('Content-Type: ' . $mime);
    readfile($full);
    exit;
}

header('Content-Type: application/json; charset=utf-8');

try {
    $pdo = getPasarPdo();
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
    exit;
}

$raw = file_get_contents('php://input');
$json = json_decode($raw, true);
if (!is_array($json)) $json = [];

function getCurrentUser(PDO $pdo) {
    if (empty($_SESSION['pasar_user_id'])) return null;
    $stmt = $pdo->prepare("SELECT id, npm, name, jurusan, whatsapp, role, nik, ktp_path, ktp_status, created_at FROM users WHERE id = ? LIMIT 1");
    $stmt->execute([(int)$_SESSION['pasar_user_id']]);
    $u = $stmt->fetch();
    if (!$u) return null;
    $u['has_ktp'] = !empty($u['ktp_path']);
    unset($u['ktp_path']);
    return $u;
}

function validateStudentNpm($npm) {
    if (!preg_match('/^\d{10}$/', $npm)) {
        return 'NPM harus tepat 10 digit angka (contoh: 2302050045).';
    }
    $prefix = (int)substr($npm, 0, 2);
    if ($prefix < 22 || $prefix > 26) {
        return 'Awalan NPM harus angkatan 22 sampai 26.';
    }
    $tail = (int)substr($npm, 7, 3);
    if ($tail < 1 || $tail > 200) {
        return '3 digit terakhir NPM harus antara 001 sampai 200.';
    }
    return null;
}

function saveUploadedImage($fileKey, $targetDir, $prefix) {
    if (!isset($_FILES[$fileKey]) || $_FILES[$fileKey]['error'] !== UPLOAD_ERR_OK) {
        return [null, 'File tidak ditemukan atau gagal diunggah.'];
    }
    $file = $_FILES[$fileKey];
    if ($file['size'] > 5 * 1024 * 1024) {
        return [null, 'Ukuran foto maksimal 5 MB.'];
    }
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    $extMap = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];
    if (!isset($extMap[$mime])) {
        return [null, 'Format foto harus JPG, PNG, atau WEBP.'];
    }
    if (!is_dir($targetDir)) {
        mkdir($targetDir, 0775, true);
    }
    $filename = $prefix . '_' . bin2hex(random_bytes(8)) . '.' . $extMap[$mime];
    $dest = rtrim($targetDir, '/\\') . DIRECTORY_SEPARATOR . $filename;
    if (!move_uploaded_file($file['tmp_name'], $dest)) {
        return [null, 'Gagal menyimpan file di server.'];
    }
    return [$filename, null];
}

switch ($action) {
    case 'me':
        $user = getCurrentUser($pdo);
        echo json_encode(['success' => true, 'loggedIn' => $user !== null, 'user' => $user]);
        break;

    case 'register':
        $npm = trim($json['npm'] ?? '');
        $password = (string)($json['password'] ?? '');
        $name = trim($json['name'] ?? '');
        $jurusan = trim($json['jurusan'] ?? 'Mahasiswa');
        $whatsapp = trim($json['whatsapp'] ?? '');

        if ($err = validateStudentNpm($npm)) {
            echo json_encode(['success' => false, 'message' => $err]);
            exit;
        }
        if (strlen($password) < 6) {
            echo json_encode(['success' => false, 'message' => 'Kata sandi minimal 6 karakter.']);
            exit;
        }
        if ($name === '') {
            echo json_encode(['success' => false, 'message' => 'Nama lengkap wajib diisi.']);
            exit;
        }

        $chk = $pdo->prepare("SELECT id FROM users WHERE npm = ? LIMIT 1");
        $chk->execute([$npm]);
        if ($chk->fetch()) {
            echo json_encode(['success' => false, 'message' => 'NPM ini sudah terdaftar. Silakan masuk.']);
            exit;
        }

        $stmt = $pdo->prepare("INSERT INTO users (npm, password_hash, name, jurusan, whatsapp, role) VALUES (?, ?, ?, ?, ?, 'student')");
        $stmt->execute([$npm, password_hash($password, PASSWORD_DEFAULT), $name, $jurusan, $whatsapp]);
        $_SESSION['pasar_user_id'] = (int)$pdo->lastInsertId();
        echo json_encode(['success' => true, 'user' => getCurrentUser($pdo)]);
        break;

    case 'login':
        $npm = trim($json['npm'] ?? '');
        $password = (string)($json['password'] ?? '');
        if (!preg_match('/^\d{10}$/', $npm)) {
            echo json_encode(['success' => false, 'message' => 'Format NPM harus 10 digit angka.']);
            exit;
        }
        $stmt = $pdo->prepare("SELECT * FROM users WHERE npm = ? LIMIT 1");
        $stmt->execute([$npm]);
        $row = $stmt->fetch();
        if (!$row || !password_verify($password, $row['password_hash'])) {
            echo json_encode(['success' => false, 'message' => 'NPM atau kata sandi salah.']);
            exit;
        }
        if ($row['role'] === 'student') {
            if ($err = validateStudentNpm($npm)) {
                echo json_encode(['success' => false, 'message' => $err]);
                exit;
            }
        }
        $_SESSION['pasar_user_id'] = (int)$row['id'];
        echo json_encode(['success' => true, 'user' => getCurrentUser($pdo)]);
        break;

    case 'logout':
        unset($_SESSION['pasar_user_id']);
        echo json_encode(['success' => true]);
        break;

    case 'get_products':
        $stmt = $pdo->query("
            SELECT p.*, u.ktp_status AS seller_ktp_status
            FROM products p
            INNER JOIN users u ON p.seller_id = u.id
            WHERE u.ktp_status = 'verified' AND p.approval_status = 'approved'
            ORDER BY p.id DESC
        ");
        $rows = $stmt->fetchAll();
        foreach ($rows as &$r) {
            $r['id'] = (int)$r['id'];
            $r['price'] = (int)$r['price'];
            $r['is_titip_gudang'] = (int)$r['is_titip_gudang'];
            $r['nego'] = (int)$r['nego'];
            $r['cod'] = (int)$r['cod'];
            $r['views'] = (int)$r['views'];
            if ($r['is_titip_gudang'] === 1 && !empty($r['gudang_expires_at'])) {
                $diffSec = strtotime($r['gudang_expires_at']) - time();
                $r['days_remaining'] = max(0, (int)ceil($diffSec / 86400));
                $r['is_expired'] = $diffSec <= 0;
            } else {
                $r['days_remaining'] = null;
                $r['is_expired'] = false;
            }
        }
        echo json_encode(['success' => true, 'products' => $rows]);
        break;

    case 'create_product':
        $user = getCurrentUser($pdo);
        if (!$user) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Silakan masuk terlebih dahulu untuk berjualan.']);
            exit;
        }

        $title = trim($_POST['title'] ?? '');
        $category = trim($_POST['category'] ?? 'Perabot Kos');
        $price = (int)($_POST['price'] ?? 0);
        $condition = trim($_POST['condition_label'] ?? 'Baik');
        $notes = trim($_POST['notes'] ?? '');
        $isTitip = isset($_POST['is_titip_gudang']) && $_POST['is_titip_gudang'] == '1' ? 1 : 0;
        $warehouse = $isTitip ? trim($_POST['warehouse'] ?? 'Gudang Utama Area Kampus') : null;
        $nego = isset($_POST['nego']) && $_POST['nego'] == '0' ? 0 : 1;

        if ($title === '' || $price <= 0) {
            echo json_encode(['success' => false, 'message' => 'Nama barang dan harga jual wajib diisi.']);
            exit;
        }

        // KTP + NIK verification check (required if user hasn't uploaded KTP yet)
        if (!$user['has_ktp'] || empty($user['nik'])) {
            $nik = preg_replace('/\D/', '', $_POST['nik'] ?? '');
            if (strlen($nik) !== 16) {
                echo json_encode(['success' => false, 'message' => 'NIK wajib 16 digit untuk verifikasi penjual anti-penipuan.']);
                exit;
            }
            [$ktpFile, $ktpErr] = saveUploadedImage('ktp_photo', __DIR__ . '/uploads/ktp', 'ktp_' . $user['npm']);
            if ($ktpErr) {
                echo json_encode(['success' => false, 'message' => 'Foto KTP wajib diunggah: ' . $ktpErr]);
                exit;
            }
            $updUser = $pdo->prepare("UPDATE users SET nik = ?, ktp_path = ?, ktp_status = 'pending' WHERE id = ?");
            $updUser->execute([$nik, $ktpFile, $user['id']]);
        }

        // Optional product photo upload
        $imageUrl = 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80';
        if (isset($_FILES['product_photo']) && $_FILES['product_photo']['error'] === UPLOAD_ERR_OK) {
            [$prodFile, $prodErr] = saveUploadedImage('product_photo', __DIR__ . '/uploads/products', 'prod');
            if ($prodErr) {
                echo json_encode(['success' => false, 'message' => 'Foto barang: ' . $prodErr]);
                exit;
            }
            $imageUrl = 'uploads/products/' . $prodFile;
        }

        $code = 'PM-' . date('ymd') . '-' . strtoupper(substr(bin2hex(random_bytes(2)), 0, 4));
        $expiresAt = $isTitip ? date('Y-m-d H:i:s', strtotime('+7 days')) : null;
        $approvalStatus = 'pending';

        $stmt = $pdo->prepare("
            INSERT INTO products (code, seller_id, seller_name, seller_jurusan, title, category, price, condition_label, status, approval_status, is_titip_gudang, warehouse, gudang_expires_at, nego, cod, views, notes, image_url)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'Tersedia', ?, ?, ?, ?, ?, 1, 1, ?, ?)
        ");
        $stmt->execute([
            $code, $user['id'], $user['name'], $user['jurusan'],
            $title, $category, $price, $condition, $approvalStatus,
            $isTitip, $warehouse, $expiresAt, $nego, $notes, $imageUrl
        ]);

        echo json_encode([
            'success' => true,
            'message' => 'Barang & data KTP diterima! Menunggu verifikasi Admin sebelum tayang di marketplace.',
            'user' => getCurrentUser($pdo)
        ]);
        break;

    case 'create_order':
        $user = getCurrentUser($pdo);
        if (!$user) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Silakan masuk terlebih dahulu untuk membeli atau memesan jasa.']);
            exit;
        }
        $orderType = ($json['order_type'] ?? 'product') === 'service' ? 'service' : 'product';
        $productId = !empty($json['product_id']) ? (int)$json['product_id'] : null;
        $itemTitle = trim($json['item_title'] ?? '');
        $amount = (int)($json['amount'] ?? 0);
        $notes = trim($json['notes'] ?? '');

        if ($itemTitle === '') {
            echo json_encode(['success' => false, 'message' => 'Item pesanan tidak valid.']);
            exit;
        }

        $orderCode = ($orderType === 'service' ? 'SRV-' : 'ORD-') . date('ymd') . '-' . strtoupper(substr(bin2hex(random_bytes(2)), 0, 4));
        $stmt = $pdo->prepare("INSERT INTO orders (order_code, buyer_id, buyer_name, buyer_npm, product_id, order_type, item_title, amount, notes, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'Menunggu')");
        $stmt->execute([$orderCode, $user['id'], $user['name'], $user['npm'], $productId, $orderType, $itemTitle, $amount, $notes]);

        if ($orderType === 'product' && $productId) {
            $pdo->prepare("UPDATE products SET status = 'Dipesan' WHERE id = ? AND status = 'Tersedia'")->execute([$productId]);
        }

        echo json_encode(['success' => true, 'order_code' => $orderCode]);
        break;

    case 'my_activity':
        $user = getCurrentUser($pdo);
        if (!$user) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            exit;
        }
        $pStmt = $pdo->prepare("SELECT * FROM products WHERE seller_id = ? ORDER BY id DESC");
        $pStmt->execute([$user['id']]);
        $oStmt = $pdo->prepare("SELECT * FROM orders WHERE buyer_id = ? ORDER BY id DESC");
        $oStmt->execute([$user['id']]);
        echo json_encode(['success' => true, 'my_products' => $pStmt->fetchAll(), 'my_orders' => $oStmt->fetchAll()]);
        break;

    case 'admin_login':
        $npm = trim($json['npm'] ?? '');
        $password = (string)($json['password'] ?? '');
        $stmt = $pdo->prepare("SELECT * FROM users WHERE npm = ? AND role = 'admin' LIMIT 1");
        $stmt->execute([$npm]);
        $row = $stmt->fetch();
        if (!$row || !password_verify($password, $row['password_hash'])) {
            echo json_encode(['success' => false, 'message' => 'Kredensial Admin tidak valid.']);
            exit;
        }
        $_SESSION['pasar_user_id'] = (int)$row['id'];
        echo json_encode(['success' => true, 'user' => getCurrentUser($pdo)]);
        break;

    case 'admin_overview':
        $admin = getCurrentUser($pdo);
        if (!$admin || $admin['role'] !== 'admin') {
            http_response_code(403);
            echo json_encode(['success' => false, 'message' => 'Akses khusus Admin.']);
            exit;
        }
        $products = $pdo->query("SELECT * FROM products ORDER BY id DESC")->fetchAll();
        foreach ($products as &$p) {
            if ((int)$p['is_titip_gudang'] === 1 && !empty($p['gudang_expires_at'])) {
                $diff = strtotime($p['gudang_expires_at']) - time();
                $p['days_remaining'] = max(0, (int)ceil($diff / 86400));
                $p['is_expired'] = $diff <= 0;
            } else {
                $p['days_remaining'] = null;
                $p['is_expired'] = false;
            }
        }
        $users = $pdo->query("SELECT id, npm, name, jurusan, whatsapp, role, nik, ktp_path, ktp_status, created_at FROM users ORDER BY id DESC")->fetchAll();
        foreach ($users as &$u) {
            $u['has_ktp'] = !empty($u['ktp_path']);
            unset($u['ktp_path']);
        }
        $orders = $pdo->query("SELECT * FROM orders ORDER BY id DESC")->fetchAll();
        echo json_encode(['success' => true, 'products' => $products, 'users' => $users, 'orders' => $orders]);
        break;

    case 'admin_verify_ktp':
        $admin = getCurrentUser($pdo);
        if (!$admin || $admin['role'] !== 'admin') { http_response_code(403); exit; }
        $uid = (int)($json['user_id'] ?? 0);
        $status = in_array($json['ktp_status'] ?? '', ['verified', 'rejected', 'pending'], true) ? $json['ktp_status'] : 'verified';
        $pdo->prepare("UPDATE users SET ktp_status = ? WHERE id = ?")->execute([$status, $uid]);
        echo json_encode(['success' => true]);
        break;

    case 'admin_update_product':
        $admin = getCurrentUser($pdo);
        if (!$admin || $admin['role'] !== 'admin') { http_response_code(403); exit; }
        $pid = (int)($json['id'] ?? 0);
        if (!empty($json['delete'])) {
            $pdo->prepare("DELETE FROM products WHERE id = ?")->execute([$pid]);
        } elseif (!empty($json['approval_status'])) {
            $appStatus = in_array($json['approval_status'], ['pending', 'approved', 'rejected'], true) ? $json['approval_status'] : 'pending';
            $pdo->prepare("UPDATE products SET approval_status = ? WHERE id = ?")->execute([$appStatus, $pid]);
        } else {
            $status = in_array($json['status'] ?? '', ['Tersedia', 'Dipesan', 'Terjual', 'Dikembalikan'], true) ? $json['status'] : 'Tersedia';
            $pdo->prepare("UPDATE products SET status = ? WHERE id = ?")->execute([$status, $pid]);
        }
        echo json_encode(['success' => true]);
        break;

    case 'admin_update_order':
        $admin = getCurrentUser($pdo);
        if (!$admin || $admin['role'] !== 'admin') { http_response_code(403); exit; }
        $oid = (int)($json['id'] ?? 0);
        $status = in_array($json['status'] ?? '', ['Menunggu', 'Diproses', 'Selesai', 'Dibatalkan'], true) ? $json['status'] : 'Menunggu';
        $pdo->prepare("UPDATE orders SET status = ? WHERE id = ?")->execute([$status, $oid]);
        echo json_encode(['success' => true]);
        break;

    default:
        echo json_encode(['success' => false, 'message' => 'Unknown action']);
}
