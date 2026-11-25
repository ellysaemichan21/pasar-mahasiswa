<?php
function getPasarPdo() {
    static $pdo = null;
    if ($pdo !== null) return $pdo;

    $host = getenv('DB_HOST') ?: 'localhost';
    $user = getenv('DB_USER') ?: 'root';
    $pass = getenv('DB_PASS') ?: '';
    $db   = getenv('DB_NAME') ?: 'pasar_mahasiswa';

    $pdo = new PDO("mysql:host={$host};charset=utf8mb4", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `{$db}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `{$db}`");

    ensurePasarSchema($pdo);
    return $pdo;
}

function ensurePasarSchema(PDO $pdo) {
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            npm VARCHAR(10) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            name VARCHAR(120) NOT NULL,
            jurusan VARCHAR(100) DEFAULT 'Mahasiswa',
            whatsapp VARCHAR(30) DEFAULT '',
            role ENUM('student','admin') NOT NULL DEFAULT 'student',
            nik VARCHAR(20) DEFAULT NULL,
            ktp_path VARCHAR(255) DEFAULT NULL,
            ktp_status ENUM('none','pending','verified','rejected') NOT NULL DEFAULT 'none',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            code VARCHAR(32) NOT NULL UNIQUE,
            seller_id INT NULL,
            seller_name VARCHAR(120) DEFAULT 'Mahasiswa',
            seller_jurusan VARCHAR(100) DEFAULT 'Kampus',
            title VARCHAR(200) NOT NULL,
            category VARCHAR(80) NOT NULL,
            price INT NOT NULL,
            condition_label VARCHAR(60) NOT NULL DEFAULT 'Baik',
            status ENUM('Tersedia','Dipesan','Terjual','Dikembalikan') NOT NULL DEFAULT 'Tersedia',
            approval_status ENUM('pending','approved','rejected') NOT NULL DEFAULT 'pending',
            approval_reason TEXT NULL,
            is_titip_gudang TINYINT(1) NOT NULL DEFAULT 0,
            warehouse VARCHAR(160) DEFAULT NULL,
            gudang_expires_at DATETIME DEFAULT NULL,
            nego TINYINT(1) NOT NULL DEFAULT 1,
            cod TINYINT(1) NOT NULL DEFAULT 1,
            views INT NOT NULL DEFAULT 0,
            notes TEXT NULL,
            image_url TEXT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS orders (
            id INT AUTO_INCREMENT PRIMARY KEY,
            order_code VARCHAR(32) NOT NULL UNIQUE,
            buyer_id INT NOT NULL,
            buyer_name VARCHAR(120) NOT NULL,
            buyer_npm VARCHAR(10) NOT NULL,
            product_id INT NULL,
            order_type ENUM('product','service') NOT NULL DEFAULT 'product',
            item_title VARCHAR(200) NOT NULL,
            amount INT NOT NULL DEFAULT 0,
            notes TEXT NULL,
            status ENUM('Menunggu','Diproses','Selesai','Dibatalkan') NOT NULL DEFAULT 'Menunggu',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS services (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(200) NOT NULL,
            category VARCHAR(80) NOT NULL DEFAULT 'Software & OS',
            price INT NOT NULL DEFAULT 50000,
            duration VARCHAR(80) DEFAULT '1-2 Jam',
            technician VARCHAR(120) DEFAULT 'Tim IT ILKOM',
            badge VARCHAR(60) DEFAULT 'Resmi Admin',
            description TEXT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    // Seed default Admin account only (production: no fake students or fake products)
    try {
        $pdo->exec("ALTER TABLE products ADD COLUMN approval_status ENUM('pending','approved','rejected') NOT NULL DEFAULT 'pending' AFTER status");
    } catch (Exception $e) {}
    try {
        $pdo->exec("ALTER TABLE products ADD COLUMN approval_reason TEXT NULL AFTER approval_status");
    } catch (Exception $e) {}
    $userCount = (int)$pdo->query("SELECT COUNT(*) FROM users WHERE role = 'admin'")->fetchColumn();
    if ($userCount === 0) {
        $insUser = $pdo->prepare("INSERT IGNORE INTO users (npm, password_hash, name, jurusan, whatsapp, role, ktp_status) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $insUser->execute(['2200000001', password_hash('admin123', PASSWORD_DEFAULT), 'Admin Pasar Mahasiswa', 'Pengelola Kampus', '6281200000001', 'admin', 'verified']);
    }
}
