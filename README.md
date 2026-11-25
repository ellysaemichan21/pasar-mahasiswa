# Pasar Mahasiswa — Marketplace Preloved & Jasa IT Mahasiswa

> **Crafted by Solstice Studio**

Platform marketplace mahasiswa berbasis **PHP 8+, MySQL, Tailwind CSS, & JavaScript** dengan panel admin bergaya **Filament** (`/admin`), dirancang ringan tanpa ketergantungan framework berat dan siap dijalankan di WAMP/XAMPP maupun shared hosting.

---

## Fitur Utama

1. **Mode Pengunjung (Guest-First):**
   - Pengunjung dapat menjelajahi katalog, memfilter kategori, dan melihat layanan Jasa IT tanpa login otomatis.
2. **Autentikasi NPM Ketat (Sign In & Sign Up):**
   - Wajib login untuk **Membeli / Booking Barang**, **Memesan Jasa IT**, atau **Berjualan**.
   - Validasi NPM (Frontend & Backend):
     - Tepat **10 digit angka**
     - Awalan angkatan **`22` – `26`**
     - 3 digit terakhir **`001` – `200`** (contoh: `2302050045`)
3. **Verifikasi Penjual Anti-Penipuan (KTP + NIK):**
   - Penjual pertama kali wajib mengisi **NIK (16 digit)** dan mengunggah **Foto KTP**.
   - Foto KTP disimpan di folder privat `uploads/ktp/` (akses publik diblokir `.htaccess`, hanya dapat dibuka oleh Admin yang login).
4. **Opsi Titip Gudang (Opsional • Maksimal 7 Hari):**
   - Form penjualan menyediakan **checkbox opsional** *Titip di Gudang Kampus*:
     - **Tidak dicentang:** Jual Mandiri / COD langsung dengan penjual.
     - **Dicentang:** Barang dititipkan di gudang kampus dengan batas waktu otomatis **7 hari**; jika belum laku setelah 1 minggu, status ditandai untuk dikembalikan ke penjual.
5. **Moderasi Admin (Cross-Validation):**
   - Barang baru berstatus `pending` dan **tidak tampil ke publik** sebelum Admin memeriksa KTP/NIK serta menekan tombol **ACC** di dashboard `/admin`.
6. **Dashboard Admin Bergaya Filament (`/admin`):**
   - Kelola barang (filter *Titip Gudang* vs *Jual Mandiri*, pantau sisa hari titipan, ACC/Tolak tayang), verifikasi foto KTP penjual, dan kelola pesanan barang & Jasa IT.

---

## Cara Menjalankan (Setup Cepat)

### Opsi 1: WAMP / XAMPP (Direkomendasikan)
1. Pastikan **Apache** dan **MySQL** berjalan.
2. Letakkan folder ini di `www/pasarmahasiswa` (WAMP) atau `htdocs/pasarmahasiswa` (XAMPP).
3. Buka browser dan akses:
   - **Marketplace:** `http://localhost/pasarmahasiswa/`
   - **Admin Dashboard:** `http://localhost/pasarmahasiswa/admin`
   - **Solstice Studio:** `http://localhost/pasarmahasiswa/solstice`
4. Database `pasar_mahasiswa` beserta tabel `users`, `products`, dan `orders` akan **dibuat otomatis** oleh `db.php` saat pertama kali diakses.

### Opsi 2: PHP Built-in Server (CLI)
Pastikan MySQL aktif, lalu jalankan di root folder project:
```bash
php -S 127.0.0.1:8088
```
Lalu buka `http://127.0.0.1:8088/index.html` (atau `/admin.html`).

### Kredensial Admin Default
- **URL Admin:** `/admin`
- **NPM Admin:** `2200000001`
- **Kata Sandi:** `admin123`
> *Segera ganti kata sandi Admin setelah deploy ke server produksi.*

---

## Struktur Folder
- `index.html`, `app.js` — Halaman utama marketplace, katalog, detail, Jasa IT, & autentikasi NPM
- `admin.html` — Panel Admin bergaya Filament (moderasi barang, cek KTP, & pesanan)
- `api.php`, `db.php` — Backend REST API & skema database MySQL otomatis
- `solstice.html` — Halaman profil **Solstice Studio**
- `.htaccess` — Clean URLs (`/`, `/admin`, `/solstice`) & proteksi folder `uploads/ktp/`

---

Dikembangkan oleh **Solstice Studio**.
