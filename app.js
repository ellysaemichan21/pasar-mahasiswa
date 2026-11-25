/**
 * PASAR MAHASISWA — WEB APPLICATION STATE & LOGIC
 * Features: 5 Views (Home, Catalog, Detail, Titip Gudang, Dashboard)
 * Styled matching the Pasar Mahasiswa dark-navy campus aesthetic with Titip Gudang model.
 */

// 1. INITIAL SEED DATA (16 Authentic Items with Student Names & Campus Majors)
const initialProducts = [
  {
    id: 1,
    code: 'PM-261118-001',
    title: 'Macbook Air M1 8/512GB Space Gray',
    category: 'Elektronik',
    price: 10000000,
    condition: 'Baik',
    conditionBadge: 'Baik',
    status: 'Tersedia',
    warehouse: 'Gudang Utama Area Kampus (Dekat Fakultas Teknik)',
    inspectionDate: '15 Nov 2026',
    views: 87,
    nego: true,
    cod: true,
    addedDate: 'Minggu, 12 Juli 2026 (16:43)',
    seller: {
      name: 'Yonathan',
      jurusan: 'ILKOM',
      rating: '5.0 (6 ulasan)',
      ktmVerified: true
    },
    daysRemaining: 5,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      'products/item_1_viva.jpg'
    ],
    notes: 'Kondisi 95% mulus, baterai health 89%, keyboard dan port normal. Sudah lolos uji charging 2 jam di gudang. Dus & charger ada.'
  },
  {
    id: 2,
    code: 'PM-261118-002',
    title: 'Catok Curly Otomatis Maimette Wireless',
    category: 'Elektronik',
    price: 150000,
    condition: 'Cukup Baik',
    conditionBadge: 'Cukup Baik',
    status: 'Tersedia',
    warehouse: 'Gudang Transit Hub Kos Mahasiswa',
    inspectionDate: '14 Nov 2026',
    views: 61,
    nego: false,
    cod: true,
    addedDate: 'Senin, 8 Juni 2026 (10:33)',
    seller: {
      name: 'Andre',
      jurusan: 'ILKOM',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 4,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      'products/item_2_viva.jpg'
    ],
    notes: 'Pemanas berfungsi normal 100%, baterai tahan 35 menit pemakaian. Ada lecet pemakaian wajar di bodi pegangan.'
  },
  {
    id: 3,
    code: 'PM-261118-003',
    title: 'Clutch Bag Pria Anti Air Oxford Fabric',
    category: 'Fashion',
    price: 40000,
    condition: 'Sangat Baik',
    conditionBadge: 'Seperti Baru',
    status: 'Tersedia',
    warehouse: 'Gudang Transit Hub Kos Mahasiswa',
    inspectionDate: '13 Nov 2026',
    views: 36,
    nego: false,
    cod: true,
    addedDate: 'Selasa, 1 September 2026 (20:52)',
    seller: {
      name: 'Okto',
      jurusan: 'Pendidikan Bahasa Inggris',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 6,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      'products/item_3_viva.jpg'
    ],
    notes: 'Resleting lancar tanpa macet, bahan kanvas tebal tahan cipratan air. Cocok untuk simpan binder mini dan tablet kuliah.'
  },
  {
    id: 4,
    code: 'PM-261118-004',
    title: 'Buku Kumpulan Soal & Pembahasan Fisika Dasar I',
    category: 'Buku',
    price: 30000,
    condition: 'Sangat Baik',
    conditionBadge: 'Seperti Baru',
    status: 'Tersedia',
    warehouse: 'Gudang Utama Area Kampus',
    inspectionDate: '16 Nov 2026',
    views: 74,
    nego: true,
    cod: true,
    addedDate: 'Rabu, 24 Juni 2026 (18:42)',
    seller: {
      name: 'Paulus',
      jurusan: 'Pend Matematika Murni',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 5,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      'products/item_4_viva.jpg'
    ],
    notes: 'Kertas bersih bebas coretan tebal, halaman 100% lengkap. Sangat berguna untuk persiapan UTS/UAS semester awal.'
  },
  {
    id: 5,
    code: 'PM-261118-005',
    title: 'Sandal Slop Aseo Korea Estetik Size 40-41',
    category: 'Fashion',
    price: 100000,
    condition: 'Sangat Baik',
    conditionBadge: 'Baru',
    status: 'Tersedia',
    warehouse: 'Gudang Transit Hub Kos Mahasiswa',
    inspectionDate: '17 Nov 2026',
    views: 48,
    nego: true,
    cod: true,
    addedDate: 'Rabu, 10 Juni 2026 (07:57)',
    seller: {
      name: 'Andre',
      jurusan: 'PGSD',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 7,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80',
      'products/item_5_viva.jpg'
    ],
    notes: 'Baru beli di marketplace online salah pilih ukuran, belum pernah dipakai keluar sama sekali. Masih ada hangtag.'
  },
  {
    id: 6,
    code: 'PM-261118-006',
    title: 'Buku Diktat Kuliah Fisika Listrik & Magnetika',
    category: 'Buku',
    price: 41000,
    condition: 'Baik',
    conditionBadge: 'Baik',
    status: 'Tersedia',
    warehouse: 'Gudang Utama Area Kampus',
    inspectionDate: '12 Nov 2026',
    views: 59,
    nego: false,
    cod: true,
    addedDate: 'Rabu, 10 Juni 2026 (15:23)',
    seller: {
      name: 'Yonathan',
      jurusan: 'Pend Matematika Murni',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 3,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      'products/item_6_viva.jpg'
    ],
    notes: 'Buku original referensi dosen pengampu. Ada stabilo rapi pada rumus penting rangkaian RLC dan medan magnet.'
  },
  {
    id: 7,
    code: 'PM-261118-007',
    title: 'Smartwatch Redmi Watch 5 Active Display HD',
    category: 'Aksesoris',
    price: 425000,
    condition: 'Sangat Baik',
    conditionBadge: 'Baru',
    status: 'Tersedia',
    warehouse: 'Gudang Utama Area Kampus',
    inspectionDate: '17 Nov 2026',
    views: 130,
    nego: true,
    cod: true,
    addedDate: 'Kamis, 23 Juli 2026 (22:28)',
    seller: {
      name: 'Okto',
      jurusan: 'ILKOM',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 6,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      'products/item_7_viva.jpg'
    ],
    notes: 'Kondisi 99% seperti baru, fullset box magnetik charger, sensor detak jantung & sleep tracker akurat.'
  },
  {
    id: 8,
    code: 'PM-261118-008',
    title: 'Kulkas Bar Sanken 1 Pintu Mini 50 Liter',
    category: 'Elektronik',
    price: 900000,
    condition: 'Baik',
    conditionBadge: 'Baik',
    status: 'Tersedia',
    warehouse: 'Gudang Utama Area Kampus',
    inspectionDate: '10 Nov 2026',
    views: 35,
    nego: false,
    cod: true,
    addedDate: 'Selasa, 29 September 2026 (06:08)',
    seller: {
      name: 'Paulus',
      jurusan: 'Pend Ekonomi',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 2,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
      'products/item_8_viva.jpg'
    ],
    notes: 'Sangat dingin, hemat listrik (65 Watt), karet pintu rapat tanpa bocor hawa dingin. Cocok di kamar kos.'
  },
  {
    id: 9,
    code: 'PM-261118-009',
    title: 'Balenciaga City Handbag Preloved Wanita',
    category: 'Fashion',
    price: 450000,
    condition: 'Sangat Baik',
    conditionBadge: 'Seperti Baru',
    status: 'Tersedia',
    warehouse: 'Gudang Transit Hub Kos Mahasiswa',
    inspectionDate: '16 Nov 2026',
    views: 225,
    nego: true,
    cod: true,
    addedDate: 'Kamis, 15 Juli 2026 (14:15)',
    seller: {
      name: 'Andre',
      jurusan: 'Pendidikan Bahasa Inggris',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 5,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      'products/item_9_viva.jpg'
    ],
    notes: 'Bahan kulit sintetis premium tebal, tali selempang lengkap, ruang utama luas muat dompet panjang & kosmetik.'
  },
  {
    id: 10,
    code: 'PM-261118-010',
    title: 'Cooling Pad Laptop Gaming 6 Fan High Speed',
    category: 'Elektronik',
    price: 85000,
    condition: 'Cukup Baik',
    conditionBadge: 'Cukup Baik',
    status: 'Tersedia',
    warehouse: 'Gudang Utama Area Kampus',
    inspectionDate: '14 Nov 2026',
    views: 207,
    nego: false,
    cod: true,
    addedDate: 'Jumat, 3 Juli 2026 (19:40)',
    seller: {
      name: 'Yonathan',
      jurusan: 'ILKOM',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 3,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80',
      'products/item_10_viva.jpg'
    ],
    notes: 'Semua 6 kipas berputar kencang, lampu LED biru aktif, kaki penopang laptop kokoh tidak goyang.'
  },
  {
    id: 11,
    code: 'PM-261118-011',
    title: 'Kemeja PDH Mahasiswa Size L Biru Muda',
    category: 'Fashion',
    price: 120000,
    condition: 'Sangat Baik',
    conditionBadge: 'Baru',
    status: 'Tersedia',
    warehouse: 'Gudang Transit Hub Kos Mahasiswa',
    inspectionDate: '15 Nov 2026',
    views: 198,
    nego: true,
    cod: true,
    addedDate: 'Sabtu, 20 Juni 2026 (11:20)',
    seller: {
      name: 'Okto',
      jurusan: 'ILKOM',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 6,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
      'products/item_11_viva.jpg'
    ],
    notes: 'Kemeja seragam belum pernah dipakai sama sekali karena kebesaran ukuran. Bahan American Drill halus.'
  },
  {
    id: 12,
    code: 'PM-261118-012',
    title: 'Printer HP DeskJet Ink Advantage 2336 Siap Pakai',
    category: 'Aksesoris',
    price: 350000,
    condition: 'Sangat Baik',
    conditionBadge: 'Seperti Baru',
    status: 'Tersedia',
    warehouse: 'Gudang Utama Area Kampus',
    inspectionDate: '13 Nov 2026',
    views: 151,
    nego: true,
    cod: false,
    addedDate: 'Minggu, 14 Juni 2026 (13:10)',
    seller: {
      name: 'Paulus',
      jurusan: 'ILKOM',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 4,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      'products/item_12_viva.jpg'
    ],
    notes: 'Fungsi print, scan, dan copy normal 100%. Kabel power & kabel USB printer disertakan. Katrid tinta baru diganti.'
  },
  {
    id: 13,
    code: 'PM-261118-013',
    title: 'Kipas Angin Berdiri Miyako 16 Inch 3 Kecepatan',
    category: 'Perabot Kos',
    price: 130000,
    condition: 'Baik',
    conditionBadge: 'Baik',
    status: 'Tersedia',
    warehouse: 'Gudang Transit Hub Kos Mahasiswa',
    inspectionDate: '16 Nov 2026',
    views: 150,
    nego: true,
    cod: true,
    addedDate: 'Senin, 18 Mei 2026 (09:12)',
    seller: {
      name: 'Andre',
      jurusan: 'ILKOM',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 5,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1618941716939-553df3c6c278?auto=format&fit=crop&w=800&q=80',
      'products/item_13_viva.jpg'
    ],
    notes: 'Angin sangat kencang, osilasi kiri-kanan lancar tidak bersuara kasar, kabel listrik utuh tanpa sambungan.'
  },
  {
    id: 14,
    code: 'PM-261118-014',
    title: 'Electric Cooking Pot & Rice Cooker Mini Anak Kos',
    category: 'Perabot Kos',
    price: 95000,
    condition: 'Baik',
    conditionBadge: 'Baik',
    status: 'Dipesan',
    warehouse: 'Gudang Transit Hub Kos Mahasiswa',
    inspectionDate: '13 Nov 2026',
    views: 133,
    nego: true,
    cod: true,
    addedDate: 'Rabu, 27 Mei 2026 (17:45)',
    seller: {
      name: 'Okto',
      jurusan: 'PGSD',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 2,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80',
      'products/item_14_viva.jpg'
    ],
    notes: 'Kapasitas 1 liter, pemanas cepat matang untuk mie dan kukusan, lapisan teflon anti lengket terjaga.'
  },
  {
    id: 15,
    code: 'PM-261118-015',
    title: 'Kalkulator Scientific Casio FX-991EX ClassWiz Asli',
    category: 'Buku',
    price: 185000,
    condition: 'Sangat Baik',
    conditionBadge: 'Seperti Baru',
    status: 'Tersedia',
    warehouse: 'Gudang Utama Area Kampus',
    inspectionDate: '16 Nov 2026',
    views: 133,
    nego: true,
    cod: true,
    addedDate: 'Kamis, 4 Juni 2026 (14:30)',
    seller: {
      name: 'Paulus',
      jurusan: 'Pend Matematika Murni',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 6,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=800&q=80',
      'products/item_15_viva.jpg'
    ],
    notes: 'Kalkulator wajib teknik & statistik. Layar jernih beresolusi tinggi, solar panel aktif, tombol sangat responsif.'
  },
  {
    id: 16,
    code: 'PM-261118-016',
    title: 'Lenovo ThinkPad T480 Core i5 RAM 16GB SSD 256GB',
    category: 'Elektronik',
    price: 2450000,
    condition: 'Baik',
    conditionBadge: 'Baik',
    status: 'Tersedia',
    warehouse: 'Gudang Utama Area Kampus',
    inspectionDate: '11 Nov 2026',
    views: 310,
    nego: true,
    cod: true,
    addedDate: 'Jumat, 1 Mei 2026 (08:50)',
    seller: {
      name: 'Andre',
      jurusan: 'ILKOM',
      rating: 'Belum ada ulasan',
      ktmVerified: true
    },
    daysRemaining: 0,
    totalDays: 7,
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      'products/item_16_viva.jpg'
    ],
    notes: 'Laptop legendaris tahan banting. Baterai ganda normal 3-4 jam, trackpoint empuk, charger type-C original bawaan.'
  }
];

// 1B. INITIAL IT SERVICES DATA (Dikelola Mahasiswa Ilmu Komputer / ILKOM)
const initialServices = [
  {
    id: 1,
    title: 'Instal Ulang Windows 10 / 11 + Office Lengkap',
    category: 'Instalasi OS & Software',
    price: 50000,
    duration: '1–2 Jam',
    technician: 'Andre • ILKOM',
    rating: '4.9',
    completed: 42,
    icon: 'laptop',
    badge: 'Terlaris',
    description: 'Instalasi OS bersih bebas virus & malware. Sudah termasuk Microsoft Office lengkap (Word, Excel, PowerPoint), driver hardware terbaru, PDF reader, dan backup dokumen aman.'
  },
  {
    id: 2,
    title: 'Cleaning Kipas & Ganti Thermal Paste Laptop',
    category: 'Perawatan & Hardware',
    price: 75000,
    duration: '1–2 Jam',
    technician: 'Yonathan • ILKOM',
    rating: '5.0',
    completed: 35,
    icon: 'fan',
    badge: 'Solusi Panas',
    description: 'Solusi tepat untuk laptop cepat panas, kipas bising, dan sering mati mendadak saat nugas. Pembersihan debu heatsink & ganti pasta pendingin premium (Arctic MX-4).'
  },
  {
    id: 3,
    title: 'Install Software Kuliah (SPSS, AutoCAD, Adobe, VS Code)',
    category: 'Instalasi OS & Software',
    price: 30000,
    duration: '30–45 Menit',
    technician: 'Paulus • ILKOM',
    rating: '4.9',
    completed: 28,
    icon: 'code',
    badge: 'Kebutuhan Kuliah',
    description: 'Instalasi software praktikum & olah data skripsi terima beres. Tersedia SPSS, AutoCAD, Adobe Photoshop/Illustrator, Corel, hingga environment coding Python/VS Code.'
  },
  {
    id: 4,
    title: 'Jasa Pasang Upgrade SSD / RAM + Migrasi OS',
    category: 'Upgrade & Data',
    price: 60000,
    duration: '1–2 Jam',
    technician: 'Okto • ILKOM',
    rating: '5.0',
    completed: 19,
    icon: 'hard-drive',
    badge: 'Laptop 10x Ngebut',
    description: 'Bikin laptop lemot jadi ngebut seketika tanpa harus beli baru. Jasa bongkar pasang SSD/RAM presisi & cloning sistem Windows tanpa perlu install ulang dari nol.'
  },
  {
    id: 5,
    title: 'Troubleshooting Laptop Lemot, Blue Screen & Hapus Virus',
    category: 'Instalasi OS & Software',
    price: 45000,
    duration: '1 Jam',
    technician: 'Andre • ILKOM',
    rating: '4.8',
    completed: 31,
    icon: 'shield-alert',
    badge: 'Diagnosa Gratis',
    description: 'Diagnosa mendalam secara gratis sebelum tindakan. Pembersihan virus shortcut/malware membandel, perbaikan Blue Screen (BSOD), dan optimasi startup agar booting di bawah 15 detik.'
  }
];

// 2. APP STATE STORE
let appState = {
  currentView: 'home', // home | catalog | detail | titip | dashboard | services
  selectedItemId: 1,
  products: [],
  services: [...initialServices],
  serviceFilter: 'Semua Jasa',
  filters: {
    category: 'Semua',
    condition: 'Semua',
    status: 'Semua',
    search: '',
    sort: 'rekomendasi',
    maxPrice: 10000000
  },
  currentUser: null,
  userProfile: {
    name: 'Pengunjung',
    nim: '',
    jurusan: 'Kampus',
    kampus: 'Universitas HKBP Nommensen Pematangsiantar',
    ktmVerified: false,
    netEarnings: 0,
    activeBookings: 0
  },
  activeBookingItem: null,
  activeDecisionItem: null,
  activeServiceBooking: null,
  userBookedServices: [],
  myProducts: [],
  myOrders: []
};

// 3. UTILITY HELPERS
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
}

function showToast(title, message, isSuccess = true) {
  const toast = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');

  toastTitle.innerText = title;
  toastMessage.innerText = message;
  
  if (isSuccess) {
    toastIcon.className = "w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0";
    toastIcon.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
  } else {
    toastIcon.className = "w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0";
    toastIcon.innerHTML = '<i data-lucide="alert-circle" class="w-4 h-4"></i>';
  }

  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  lucide.createIcons();

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3500);
}

// 3B. AUTH & API SYNC HELPERS
const API_URL = 'api.php';
let authMode = 'login';

function validateNpmClient(npm) {
  if (!/^\d{10}$/.test(npm)) return 'NPM harus tepat 10 digit angka (contoh: 2302050045).';
  const prefix = parseInt(npm.slice(0, 2), 10);
  if (prefix < 22 || prefix > 26) return 'Awalan NPM harus angkatan 22 sampai 26.';
  const tail = parseInt(npm.slice(7, 10), 10);
  if (tail < 1 || tail > 200) return '3 digit terakhir NPM maksimal 200 (001–200).';
  return null;
}

function updateAuthNavUI() {
  const area = document.getElementById('navAuthArea');
  if (!area) return;
  const u = appState.currentUser;
  if (!u) {
    area.innerHTML = `
      <button onclick="openAuthModal('login')" class="px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition bg-white shadow-sm">Masuk</button>
      <button onclick="openAuthModal('register')" class="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-xs font-black text-white transition shadow-md shadow-emerald-700/20">Daftar</button>`;
  } else {
    const initial = (u.name || 'M').charAt(0).toUpperCase();
    area.innerHTML = `
      <button onclick="navigateTo('dashboard')" class="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-xs font-black text-white transition shadow-md shadow-emerald-700/20">
        <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-black text-white">${initial}</div>
        <span>${u.name.split(' ')[0]}</span>
      </button>
      <button onclick="logoutUser()" title="Keluar" class="px-2.5 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-red-500 hover:bg-red-50 transition bg-white">Keluar</button>`;
  }
}

function openAuthModal(mode = 'login') {
  switchAuthTab(mode);
  document.getElementById('authErrorMsg')?.classList.add('hidden');
  document.getElementById('authModal')?.classList.remove('hidden');
}

function closeAuthModal() {
  document.getElementById('authModal')?.classList.add('hidden');
}

function switchAuthTab(mode) {
  authMode = mode;
  const isReg = mode === 'register';
  document.getElementById('authModalTitle').textContent = isReg ? 'Daftar Akun Mahasiswa' : 'Masuk Akun Mahasiswa';
  document.getElementById('registerFields').classList.toggle('hidden', !isReg);
  document.getElementById('authName').required = isReg;
  document.getElementById('authJurusan').required = isReg;
  document.getElementById('authWa').required = isReg;
  document.getElementById('authSubmitBtn').textContent = isReg ? 'Daftar & Masuk' : 'Masuk Sekarang';
  document.getElementById('authTabLogin').className = !isReg
    ? 'py-2 rounded-lg text-xs font-extrabold bg-white text-emerald-700 shadow-sm'
    : 'py-2 rounded-lg text-xs font-extrabold text-slate-500';
  document.getElementById('authTabRegister').className = isReg
    ? 'py-2 rounded-lg text-xs font-extrabold bg-white text-emerald-700 shadow-sm'
    : 'py-2 rounded-lg text-xs font-extrabold text-slate-500';
}

async function handleAuthSubmit(e) {
  e.preventDefault();
  const errEl = document.getElementById('authErrorMsg');
  errEl.classList.add('hidden');
  const npm = document.getElementById('authNpm').value.trim();
  const password = document.getElementById('authPass').value;

  const npmErr = validateNpmClient(npm);
  if (npmErr) {
    errEl.textContent = npmErr;
    errEl.classList.remove('hidden');
    return;
  }

  const payload = { npm, password };
  if (authMode === 'register') {
    payload.name = document.getElementById('authName').value.trim();
    payload.jurusan = document.getElementById('authJurusan').value.trim();
    payload.whatsapp = document.getElementById('authWa').value.trim();
  }

  const res = await fetch(`${API_URL}?action=${authMode}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!data.success) {
    errEl.textContent = data.message || 'Gagal autentikasi.';
    errEl.classList.remove('hidden');
    return;
  }

  appState.currentUser = data.user;
  appState.userProfile = {
    name: data.user.name,
    nim: data.user.npm,
    jurusan: data.user.jurusan || 'Mahasiswa',
    kampus: 'Universitas HKBP Nommensen Pematangsiantar',
    ktmVerified: data.user.ktp_status === 'verified',
    netEarnings: 0,
    activeBookings: 0
  };
  closeAuthModal();
  await loadMyActivity();
  updateAuthNavUI();
  showToast('Berhasil Masuk!', `Selamat datang, ${data.user.name} (${data.user.npm}).`);
  renderView();
}

async function logoutUser() {
  await fetch(`${API_URL}?action=logout`);
  appState.currentUser = null;
  updateAuthNavUI();
  if (appState.currentView === 'dashboard') appState.currentView = 'home';
  showToast('Keluar Berhasil', 'Kamu sekarang berada dalam mode pengunjung.');
  renderView();
}

async function loadProductsFromApi() {
  try {
    const res = await fetch(`${API_URL}?action=get_products`);
    const data = await res.json();
    if (data.success && Array.isArray(data.products)) {
      appState.products = data.products.map(p => ({
        id: Number(p.id),
        code: p.code,
        title: p.title,
        category: p.category,
        price: Number(p.price),
        condition: p.condition_label || 'Baik',
        conditionBadge: p.condition_label || 'Baik',
        status: p.status,
        isTitipGudang: Number(p.is_titip_gudang) === 1,
        warehouse: Number(p.is_titip_gudang) === 1 ? (p.warehouse || 'Gudang Utama Area Kampus') : 'Jual Mandiri (COD Penjual)',
        inspectionDate: Number(p.is_titip_gudang) === 1 ? 'Titip Gudang (Maks 7 Hari)' : 'COD Langsung Penjual',
        views: Number(p.views || 0),
        nego: Number(p.nego) === 1,
        cod: Number(p.cod) === 1,
        seller: {
          name: p.seller_name || 'Mahasiswa',
          jurusan: p.seller_jurusan || 'Kampus',
          ktmVerified: p.seller_ktp_status === 'verified'
        },
        daysRemaining: p.days_remaining !== null ? Number(p.days_remaining) : 7,
        totalDays: 7,
        images: [p.image_url || 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'],
        notes: p.notes || ''
      }));
    }
  } catch (e) {}
}

async function loadMyActivity() {
  if (!appState.currentUser) {
    appState.myProducts = [];
    appState.myOrders = [];
    return;
  }
  try {
    const res = await fetch(`${API_URL}?action=my_activity`);
    const data = await res.json();
    if (data.success) {
      appState.myProducts = (data.my_products || []).map(p => ({
        id: Number(p.id),
        code: p.code,
        title: p.title,
        category: p.category,
        price: Number(p.price),
        status: p.status,
        approvalStatus: p.approval_status || 'pending',
        approvalReason: p.approval_reason || '',
        isTitipGudang: Number(p.is_titip_gudang) === 1,
        warehouse: p.warehouse || 'Jual Mandiri / COD',
        daysRemaining: p.gudang_expires_at ? Math.max(0, Math.ceil((new Date(p.gudang_expires_at) - Date.now()) / 86400000)) : 7
      }));
      appState.myOrders = data.my_orders || [];
    }
  } catch (e) {}
}

async function initApp() {
  try {
    const meRes = await fetch(`${API_URL}?action=me`);
    const meData = await meRes.json();
    if (meData.loggedIn && meData.user) {
      appState.currentUser = meData.user;
      appState.userProfile = {
        name: meData.user.name,
        nim: meData.user.npm,
        jurusan: meData.user.jurusan || 'Mahasiswa',
        kampus: 'Universitas HKBP Nommensen Pematangsiantar',
        ktmVerified: meData.user.ktp_status === 'verified',
        netEarnings: 0,
        activeBookings: 0
      };
    }
  } catch (e) {}
  await loadProductsFromApi();
  await loadMyActivity();
  updateAuthNavUI();
  renderView();
}

// 4. NAVIGATION ROUTER
function navigateTo(viewName, itemId = null) {
  appState.currentView = viewName;
  if (itemId) {
    appState.selectedItemId = itemId;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderView();
}

function filterByCategory(category) {
  if (category === 'Jasa IT' || category.includes('Jasa')) {
    navigateTo('services');
    return;
  }
  appState.filters.category = category;
  const select = document.getElementById('headerCategorySelect');
  if (select) select.value = category;
  navigateTo('catalog');
}

function handleSearch() {
  const val = document.getElementById('globalSearchInput').value;
  appState.filters.search = val;
  navigateTo('catalog');
}

// 5. VIEW RENDERERS
function renderView() {
  const container = document.getElementById('app-container');
  if (!container) return;

  switch (appState.currentView) {
    case 'home':
      container.innerHTML = getHomeViewHTML();
      break;
    case 'catalog':
      container.innerHTML = getCatalogViewHTML();
      break;
    case 'detail':
      container.innerHTML = getDetailViewHTML();
      break;
    case 'titip':
      container.innerHTML = getTitipGudangViewHTML();
      break;
    case 'dashboard':
      container.innerHTML = getDashboardViewHTML();
      break;
    case 'services':
      container.innerHTML = getServicesViewHTML();
      break;
    default:
      container.innerHTML = getHomeViewHTML();
  }

  // Refresh icons
  lucide.createIcons();
}

// ==========================================
// VIEW 1: BERANDA (HOME)
// ==========================================
function getHomeViewHTML() {
  const temuanMenarik = appState.products.slice(0, 8);
  const palingBanyakDilihat = [...appState.products].sort((a, b) => b.views - a.views).slice(0, 8);
  const totalBarang = appState.products.length;

  return `
    <!-- HERO SECTION (Exact VivaThrift Layout with Seamless Wide Campus Background) -->
    <section class="relative w-full overflow-hidden border-b border-[#E5DFD5] bg-[#FAF7F2] min-h-[460px] lg:min-h-[520px] flex items-center">
      
      <!-- WIDE CAMPUS PANORAMA BACKGROUND -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <img src="hero_campus_wide.jpg" alt="Kampus Pasar Mahasiswa" class="w-full h-full object-cover object-right sm:object-center">
        <!-- Soft gradient mask for crystal-clear text readability on left -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent lg:via-[#FAF7F2]/75"></div>
      </div>

      <!-- CONTENT WRAPPER -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- LEFT HERO CONTENT (Col-span-7) -->
          <div class="lg:col-span-7 space-y-5 max-w-xl">
            
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-emerald-300 text-emerald-900 text-xs font-bold shadow-sm backdrop-blur">
              <i data-lucide="graduation-cap" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>DARI MAHASISWA, UNTUK MAHASISWA &bull; NOMMENSEN SIANTAR</span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Temukan <span class="bg-[#86efac]/80 text-emerald-950 font-black px-2.5 py-0.5 rounded-xl shadow-sm">Barang Preloved</span> Berkualitas di Sekitar Kampus!
            </h1>

            <p class="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Marketplace tepercaya khusus mahasiswa aktif. Jual beli buku kuliah, gadget, pakaian praktikum, hingga perlengkapan kos dengan mudah dan aman lewat sistem <strong>Titip Gudang Terverifikasi</strong>!
            </p>

            <!-- ACTION CTAs -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <button onclick="navigateTo('catalog')" class="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm transition shadow-lg shadow-emerald-700/20 flex items-center gap-2">
                <i data-lucide="compass" class="w-4 h-4"></i>
                <span>Mulai Jelajah Barang</span>
              </button>

              <button onclick="navigateTo('titip')" class="px-6 py-3 rounded-2xl bg-white/95 hover:bg-white border border-[#E5DFD5] text-slate-800 font-extrabold text-sm transition flex items-center gap-2 shadow-sm hover:border-emerald-400 backdrop-blur">
                <i data-lucide="archive" class="w-4 h-4 text-emerald-600"></i>
                <span>Jual / Titip Barang Kos</span>
              </button>
            </div>

            <!-- TRUST STATS -->
            <div class="grid grid-cols-3 gap-4 pt-6 max-w-lg border-t border-[#E5DFD5]/80">
              <div>
                <p class="text-2xl font-black text-emerald-800">430+</p>
                <p class="text-xs text-slate-600 font-bold">Mahasiswa Terdaftar</p>
              </div>
              <div>
                <p class="text-2xl font-black text-teal-800">${totalBarang} Unit</p>
                <p class="text-xs text-slate-600 font-bold">Barang di Gudang</p>
              </div>
              <div>
                <p class="text-2xl font-black text-amber-700">100%</p>
                <p class="text-xs text-slate-600 font-bold">Inspeksi Fisik</p>
              </div>
            </div>

          </div>

          <!-- RIGHT: FLOATING BADGES DIRECTLY OVER CAMPUS BACKGROUND (Col-span-5) -->
          <div class="lg:col-span-5 relative flex flex-col sm:flex-row items-center justify-end gap-5 lg:gap-8 pr-2 lg:pr-8">
            
            <!-- FLOATING CIRCLE BADGE 1: 430 MAHASISWA TERDAFTAR -->
            <div class="flex flex-col items-center justify-center w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-white/95 border-2 border-emerald-300 shadow-2xl backdrop-blur text-center p-3 hover:scale-105 transition transform">
              <div class="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center mb-1">
                <i data-lucide="users" class="w-4 h-4 text-emerald-700"></i>
              </div>
              <span class="text-xl lg:text-2xl font-black text-slate-900 leading-none">430</span>
              <span class="text-[9px] font-black text-slate-500 uppercase tracking-tighter mt-1 leading-tight">Mahasiswa<br>Terdaftar</span>
            </div>

            <!-- FLOATING CIRCLE BADGE 2: 100 BARANG TERSEDIA -->
            <div class="flex flex-col items-center justify-center w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-white/95 border-2 border-teal-300 shadow-2xl backdrop-blur text-center p-3 hover:scale-105 transition transform">
              <div class="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center mb-1">
                <i data-lucide="shopping-bag" class="w-4 h-4 text-teal-700"></i>
              </div>
              <span class="text-xl lg:text-2xl font-black text-slate-900 leading-none">100+</span>
              <span class="text-[9px] font-black text-slate-500 uppercase tracking-tighter mt-1 leading-tight">Barang<br>Tersedia</span>
            </div>

          </div>

        </div>
      </div>
    </section>

    
    <!-- CATEGORY PILLS BAR (Quick Filters & Highlighted Jasa IT Pill) -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
      <div class="p-3 rounded-2xl bg-white border border-[#E5DFD5] shadow-sm flex items-center gap-2 overflow-x-auto">
        <span class="text-xs font-bold text-slate-400 pl-2 shrink-0">Kategori:</span>
        <button onclick="filterByCategory('Semua')" class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 text-xs font-bold shrink-0 transition">Semua Barang</button>
        <button onclick="navigateTo('services')" class="px-4 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-black shrink-0 transition shadow-sm hover:bg-emerald-700 flex items-center gap-1.5 animate-pulse">
          <i data-lucide="wrench" class="w-3.5 h-3.5"></i>
          <span>🛠️ Jasa IT & Laptop (ILKOM)</span>
        </button>
        <button onclick="filterByCategory('Elektronik')" class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 text-xs font-bold shrink-0 transition">Elektronik</button>
        <button onclick="filterByCategory('Perabot Kos')" class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 text-xs font-bold shrink-0 transition">Perabot Kos</button>
        <button onclick="filterByCategory('Buku')" class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 text-xs font-bold shrink-0 transition">Buku Kuliah</button>
        <button onclick="filterByCategory('Fashion')" class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 text-xs font-bold shrink-0 transition">Fashion Preloved</button>
      </div>
    </div>


    <!-- SECTION: CARA KERJA TITIP GUDANG (Pastel Milk Card Layout) -->
    <section class="py-12 border-b border-[#E5DFD5] bg-[#F4EFE6]/70">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span class="text-xs font-extrabold text-emerald-700 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">Model Konsinyasi Modern</span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900">Cara Kerja Layanan Titip Gudang</h2>
          <p class="text-xs sm:text-sm text-slate-600">Jual barang kos saat lulus atau pindahan kini lebih tenang, mudah, dan bebas tipu-tipu.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Step 1 -->
          <div class="p-6 rounded-3xl bg-white border border-[#E5DFD5] hover:border-emerald-400 transition shadow-sm space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-base border border-emerald-300">
              1
            </div>
            <h3 class="text-base font-bold text-slate-900">Ajukan & Titip ke Gudang</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Isi data barang dan bawa ke gudang transit kos kampus. <strong>Gratis biaya penyimpanan untuk 7 hari pertama (Rp 0)</strong>.
            </p>
            <div class="text-[11px] text-emerald-700 font-bold flex items-center gap-1.5 pt-1">
              <i data-lucide="shield" class="w-3.5 h-3.5"></i> Terverifikasi KTM Mahasiswa
            </div>
          </div>

          <!-- Step 2 -->
          <div class="p-6 rounded-3xl bg-white border border-[#E5DFD5] hover:border-teal-400 transition shadow-sm space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-black text-base border border-teal-300">
              2
            </div>
            <h3 class="text-base font-bold text-slate-900">Dicek & Dipasarkan Tim</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Tim mengecek fungsi fisik, memotret dengan jujur, dan memajang di etalase web dengan badge <strong>✓ Sudah Diperiksa</strong>.
            </p>
            <div class="text-[11px] text-teal-700 font-bold flex items-center gap-1.5 pt-1">
              <i data-lucide="camera" class="w-3.5 h-3.5"></i> Deskripsi & minus transparan
            </div>
          </div>

          <!-- Step 3 -->
          <div class="p-6 rounded-3xl bg-white border border-[#E5DFD5] hover:border-amber-400 transition shadow-sm space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-base border border-amber-300">
              3
            </div>
            <h3 class="text-base font-bold text-slate-900">Terjual & Terima Saldo</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Saat barang terjual, dana cair dipotong komisi 10%. Jika belum laku setelah 7 hari, bebas <strong>perpanjang atau ambil kembali</strong>.
            </p>
            <div class="text-[11px] text-amber-700 font-bold flex items-center gap-1.5 pt-1">
              <i data-lucide="wallet" class="w-3.5 h-3.5"></i> Saldo langsung cair ke e-wallet/rekening
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 1: TEMUAN MENARIK -->
    <section class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <i data-lucide="compass" class="w-4 h-4"></i>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900">Temuan Menarik di Sekitar Kampus</h2>
        </div>
        <button onclick="navigateTo('catalog')" class="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
          <span>Lihat Semua (${totalBarang})</span>
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- PRODUCT CARDS GRID (8 ITEMS IN 4 COLUMNS) -->
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        ${temuanMenarik.map(item => getProductCardHTML(item)).join('')}
      </div>
    </section>

    <!-- SECTION 2: PALING BANYAK DILIHAT -->
    <section class="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
            <i data-lucide="eye" class="w-4 h-4"></i>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900">Paling Banyak Dilihat Mahasiswa</h2>
        </div>
        <button onclick="navigateTo('catalog')" class="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 transition bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-200">
          <span>Lihat Selengkapnya</span>
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- PRODUCT CARDS GRID (8 ITEMS SORTED BY VIEWS) -->
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        ${palingBanyakDilihat.map(item => getProductCardHTML(item)).join('')}
      </div>

      
    <!-- SECTION: LAYANAN JASA IT & LAPTOP TERLARIS (Home Section Integration) -->
    <section class="py-12 bg-gradient-to-b from-[#F7F3EB]/60 to-[#FAF7F2] border-t border-b border-[#E5DFD5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-[11px] font-black mb-2 shadow-sm">
              <i data-lucide="cpu" class="w-3.5 h-3.5 text-emerald-700"></i>
              <span>DIVISI KHUSUS &bull; MAHASISWA ILMU KOMPUTER (ILKOM)</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Layanan Jasa IT & Laptop Terlaris</h2>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Laptop lemot, error, atau butuh software praktikum? Dikerjakan langsung oleh mahasiswa ILKOM terpercaya dengan tarif ramah kantong.
            </p>
          </div>

          <button onclick="navigateTo('services')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs transition shadow-md shadow-emerald-700/20 shrink-0 self-start md:self-auto">
            <span>Lihat Semua Jasa IT (5)</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- 3 HIGHLIGHTED IT SERVICES CARDS -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${appState.services.slice(0, 3).map(service => getServiceCardHTML(service, true)).join('')}
        </div>

      </div>
    </section>


      <!-- CALLOUT BANNER FOR DORM MOVING OUT -->
      <div class="mt-14 p-8 rounded-3xl bg-gradient-to-r from-emerald-100/90 via-emerald-50 to-teal-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div class="space-y-1.5 text-center sm:text-left">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-800 text-[10px] font-bold">
            <i data-lucide="sparkles" class="w-3 h-3"></i> Solusi Lulusan & Pindahan Kos
          </div>
          <h4 class="text-lg font-black text-slate-900">Mau Lulus atau Pindahan Kos Akhir Semester Ini?</h4>
          <p class="text-xs sm:text-sm text-slate-600 max-w-xl">Jangan biarkan mejamu, kipas angin, atau buku terbengkalai. Titipkan ke Pasar Mahasiswa sekarang, kami rawat dan carikan pembeli!</p>
        </div>
        <button onclick="navigateTo('titip')" class="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shrink-0 transition flex items-center gap-2 shadow-md shadow-emerald-700/20">
          <i data-lucide="archive" class="w-4 h-4"></i>
          <span>Titip Jual Barang Kos</span>
        </button>
      </div>
    </section>
  `;
}

// PRODUCT CARD COMPONENT (Matching Pasar Mahasiswa Dark Card)
// PRODUCT CARD COMPONENT (Exact Pasar Mahasiswa Dark Card Layout)
// PRODUCT CARD COMPONENT (Pastel Green & Milk White Card Layout)
function getProductCardHTML(item) {
  const isAvailable = item.status === 'Tersedia';
  const isReserved = item.status === 'Dipesan';
  const isSold = item.status === 'Terjual';

  let statusBadge = '';
  if (isAvailable) {
    statusBadge = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Tersedia</span>`;
  } else if (isReserved) {
    statusBadge = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">Dipesan</span>`;
  } else {
    statusBadge = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200">Terjual</span>`;
  }

  return `
    <div class="card-milk rounded-2xl overflow-hidden transition flex flex-col group">
      
      <!-- Top Image with Overlaid Badges -->
      <div class="relative h-44 sm:h-48 overflow-hidden bg-slate-100 cursor-pointer select-none" onclick="navigateTo('detail', ${item.id})">
        <img src="${item.images[0]}" onerror="if(this.src!='${item.images[1]}'){this.src='${item.images[1]}';}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        
        <!-- Top Badges Row (Nego, COD, Wishlist) -->
        <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <div class="flex items-center gap-1.5">
            ${item.nego ? `
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black bg-white/95 text-emerald-800 border border-emerald-300 shadow-sm backdrop-blur">
                <i data-lucide="users" class="w-2.5 h-2.5 text-emerald-600"></i>
                <span>Nego</span>
              </span>
            ` : ''}
            ${item.cod ? `
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black bg-white/95 text-teal-800 border border-teal-300 shadow-sm backdrop-blur">
                <i data-lucide="map-pin" class="w-2.5 h-2.5 text-teal-600"></i>
                <span>COD</span>
              </span>
            ` : ''}
          </div>
          <button onclick="event.stopPropagation(); showToast('Favorit', 'Disimpan ke wishlist kamu')" class="w-7 h-7 rounded-full bg-white/90 text-slate-500 hover:text-red-500 flex items-center justify-center pointer-events-auto transition shadow-sm hover:scale-110">
            <i data-lucide="heart" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <!-- Condition Pill (Bottom Left) -->
        <div class="absolute bottom-2.5 left-2.5">
          <span class="px-2 py-0.5 rounded-lg text-[9px] font-bold bg-white/80 backdrop-blur text-slate-900 shadow-sm">
            ${item.conditionBadge}
          </span>
        </div>

        <!-- Views and Category Tag (Bottom Right) -->
        <div class="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 text-[9px] text-slate-900">
          <div class="flex items-center gap-1 bg-white/70 px-2 py-0.5 rounded-lg backdrop-blur shadow-sm">
            <i data-lucide="eye" class="w-3 h-3 text-slate-700"></i>
            <span>${item.views}</span>
          </div>
          <span class="bg-emerald-800/90 text-slate-900 border border-emerald-700/60 px-2 py-0.5 rounded-lg font-bold backdrop-blur shadow-sm hidden xs:inline-block">
            ${item.category}
          </span>
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-3.5 flex-1 flex flex-col justify-between space-y-2.5 bg-white">
        
        <div>
          <!-- Title -->
          <h3 onclick="navigateTo('detail', ${item.id})" class="text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-700 line-clamp-1 cursor-pointer transition leading-snug">
            ${item.title}
          </h3>

          <!-- Bold Pastel/Emerald Price -->
          <p class="text-base sm:text-lg font-black text-emerald-700 mt-1">
            ${formatRupiah(item.price)}
          </p>
        </div>

        <!-- Seller Profile & Department Snippet -->
        <div class="pt-2 border-t border-[#EFECE6] text-[10px] space-y-1">
          <div class="flex items-center gap-1.5 text-slate-800">
            <div class="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-[9px] font-bold text-emerald-700 shrink-0">
              <i data-lucide="user" class="w-2.5 h-2.5"></i>
            </div>
            <span class="font-bold truncate">${item.seller.name}</span>
          </div>
          
          <p class="text-slate-500 truncate pl-5 -mt-0.5 text-[9px]">${item.seller.jurusan}</p>
          
          <div class="flex items-center justify-between pl-5 pt-0.5">
            <div class="flex items-center gap-1 text-slate-500 text-[9px]">
              <i data-lucide="star" class="w-2.5 h-2.5 text-amber-500 fill-amber-500"></i>
              <span>${item.seller.rating || 'Belum ada ulasan'}</span>
            </div>
            ${statusBadge}
          </div>
        </div>

        <!-- Added Date & Titip Gudang Badge -->
        <div class="pt-1.5 border-t border-[#EFECE6] flex items-center justify-between text-[9px] text-slate-400">
          <span class="truncate">Ditambahkan ${item.addedDate || 'Baru'}</span>
          <span class="text-emerald-700 font-bold shrink-0">✓ Titip Gudang</span>
        </div>

        <!-- Action Button -->
        <button onclick="navigateTo('detail', ${item.id})" class="w-full py-2 rounded-xl bg-[#F5F2EA] hover:bg-emerald-600 hover:text-white text-slate-700 font-bold text-xs transition text-center mt-1 flex items-center justify-center gap-1 border border-[#E5DFD5] hover:border-emerald-600 shadow-sm">
          <span>Lihat Detail</span>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>

      </div>

    </div>
  `;
}

// ==========================================
// VIEW 2: KATALOG BARANG (CATALOG & SEARCH)
// ==========================================
function getCatalogViewHTML() {
  const { category, condition, status, search, sort, maxPrice } = appState.filters;

  // Filter items
  let filtered = appState.products.filter(item => {
    if (category !== 'Semua' && item.category !== category) return false;
    if (condition !== 'Semua' && item.condition !== condition) return false;
    if (status !== 'Semua' && item.status !== status) return false;
    if (search && !item.title.toLowerCase().includes(search.toLowerCase()) && !item.category.toLowerCase().includes(search.toLowerCase())) return false;
    if (item.price > maxPrice) return false;
    return true;
  });

  // Sort
  if (sort === 'termurah') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'termahal') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'terbaru') {
    filtered.sort((a, b) => b.id - a.id);
  }

  const categories = ['Semua', 'Elektronik', 'Perabot Kos', 'Buku', 'Aksesoris'];

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      <!-- HEADER BREADCRUMB -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5DFD5]">
        <div>
          <h1 class="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <span>Katalog Barang Preloved Kos</span>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">${filtered.length} Tersedia</span>
          </h1>
          <p class="text-xs text-slate-400 mt-1">Barang kos siap survei & ambil di gudang transit kampus.</p>
        </div>

        <!-- Active Filter Indicator -->
        <div class="flex items-center gap-2 text-xs">
          <span class="text-slate-400">Urutkan:</span>
          <select id="sortSelect" onchange="updateCatalogFilter('sort', this.value)" class="bg-[#F4EFE6] border border-[#E5DFD5] text-slate-800 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-600">
            <option value="rekomendasi" ${sort === 'rekomendasi' ? 'selected' : ''}>Rekomendasi</option>
            <option value="termurah" ${sort === 'termurah' ? 'selected' : ''}>Harga Terendah</option>
            <option value="termahal" ${sort === 'termahal' ? 'selected' : ''}>Harga Tertinggi</option>
            <option value="terbaru" ${sort === 'terbaru' ? 'selected' : ''}>Paling Baru</option>
          </select>
        </div>
      </div>

      <!-- MAIN LAYOUT: SIDEBAR FILTER + GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- SIDEBAR CONTROLS (col-span-3) -->
        <aside class="lg:col-span-3 space-y-5">
          <div class="p-5 rounded-2xl bg-white border border-[#E5DFD5] space-y-5 sticky top-20">
            
            <div class="flex items-center justify-between pb-3 border-b border-[#E5DFD5]">
              <span class="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <i data-lucide="sliders-horizontal" class="w-3.5 h-3.5 text-emerald-700"></i> Filter Barang
              </span>
              <button onclick="resetFilters()" class="text-[11px] text-emerald-700 hover:underline">Reset</button>
            </div>

            <!-- Category Filter -->
            <div class="space-y-2">
              <label class="text-xs font-bold text-slate-700 block">Kategori</label>
              <div class="space-y-1">
                ${categories.map(cat => `
                  <button onclick="updateCatalogFilter('category', '${cat}')" class="w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition flex items-center justify-between ${category === cat ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'text-slate-600 hover:bg-[#F4EFE6] hover:text-slate-900'}">
                    <span>${cat}</span>
                    <span class="text-[10px] opacity-75">${cat === 'Semua' ? appState.products.length : appState.products.filter(p => p.category === cat).length}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Condition Filter -->
            <div class="space-y-2 pt-2 border-t border-[#E5DFD5]">
              <label class="text-xs font-bold text-slate-700 block">Kondisi Fisik</label>
              <select onchange="updateCatalogFilter('condition', this.value)" class="w-full bg-white border border-[#E5DFD5] text-xs text-slate-800 rounded-lg p-2 focus:outline-none focus:border-emerald-600">
                <option value="Semua" ${condition === 'Semua' ? 'selected' : ''}>Semua Kondisi</option>
                <option value="Sangat Baik" ${condition === 'Sangat Baik' ? 'selected' : ''}>Sangat Baik / Seperti Baru</option>
                <option value="Baik" ${condition === 'Baik' ? 'selected' : ''}>Baik (Pemakaian Wajar)</option>
                <option value="Cukup Baik" ${condition === 'Cukup Baik' ? 'selected' : ''}>Cukup Baik</option>
              </select>
            </div>

            <!-- Status Filter -->
            <div class="space-y-2 pt-2 border-t border-[#E5DFD5]">
              <label class="text-xs font-bold text-slate-700 block">Status Ketersediaan</label>
              <select onchange="updateCatalogFilter('status', this.value)" class="w-full bg-white border border-[#E5DFD5] text-xs text-slate-800 rounded-lg p-2 focus:outline-none focus:border-emerald-600">
                <option value="Semua" ${status === 'Semua' ? 'selected' : ''}>Semua Status</option>
                <option value="Tersedia" ${status === 'Tersedia' ? 'selected' : ''}>Hanya yang Tersedia</option>
                <option value="Dipesan" ${status === 'Dipesan' ? 'selected' : ''}>Sedang Dipesan / Cek Fisik</option>
              </select>
            </div>

            <!-- Titip Gudang Info Pill -->
            <div class="p-3 rounded-xl bg-emerald-100/40 border border-emerald-300/40 text-[11px] text-emerald-800 space-y-1">
              <div class="font-bold flex items-center gap-1">
                <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Jaminan Inspeksi Gudang
              </div>
              <p class="text-slate-400 text-[10px]">Semua barang sudah diuji kelayakannya sebelum tampil di sini.</p>
            </div>

          </div>
        </aside>

        <!-- PRODUCT GRID (col-span-9) -->
        <div class="lg:col-span-9 space-y-6">
          ${filtered.length === 0 ? `
            <div class="p-12 text-center rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
              <i data-lucide="package-search" class="w-12 h-12 text-slate-600 mx-auto"></i>
              <h3 class="text-base font-bold text-slate-900">Tidak ada barang yang cocok</h3>
              <p class="text-xs text-slate-400">Coba ubah kata kunci pencarian atau reset filter kategori.</p>
              <button onclick="resetFilters()" class="px-4 py-2 rounded-lg bg-emerald-600 text-slate-900 text-xs font-bold hover:bg-emerald-700 transition">Reset Filter</button>
            </div>
          ` : `
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              ${filtered.map(item => getProductCardHTML(item)).join('')}
            </div>
          `}
        </div>

      </div>

    </div>
  `;
}

function updateCatalogFilter(key, value) {
  appState.filters[key] = value;
  renderView();
}

function resetFilters() {
  appState.filters = {
    category: 'Semua',
    condition: 'Semua',
    status: 'Semua',
    search: '',
    sort: 'rekomendasi',
    maxPrice: 10000000
  };
  const globalInput = document.getElementById('globalSearchInput');
  if (globalInput) globalInput.value = '';
  renderView();
}

// ==========================================
// VIEW 3: DETAIL BARANG (ITEM DETAIL & BOOKING)
// ==========================================
function getDetailViewHTML() {
  const item = appState.products.find(p => p.id === appState.selectedItemId) || appState.products[0];
  const isAvailable = item.status === 'Tersedia';

  return `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <!-- BACK BUTTON -->
      <button onclick="navigateTo('catalog')" class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-900 transition">
        <i data-lucide="arrow-left" class="w-4 h-4"></i>
        <span>Kembali ke Katalog Barang</span>
      </button>

      <!-- TWO-COLUMN DETAIL CARD -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-8">
        
        <!-- LEFT: PHOTO GALLERY (Col-span-7) -->
        <div class="lg:col-span-7 space-y-4">
          <!-- Main Hero Image -->
          <div class="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-white border border-[#E5DFD5]">
            <img id="detailMainPhoto" src="${item.images[0]}" onerror="if(this.src!='${item.images[1]}'){this.src='${item.images[1]}';}" alt="${item.title}" class="w-full h-full object-cover">
            
            <div class="absolute top-3 left-3 flex items-center gap-1.5">
              <span class="px-2.5 py-1 rounded-xl text-xs font-bold bg-white/95 backdrop-blur text-emerald-800 border border-emerald-300 shadow-sm flex items-center gap-1.5">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i> Sudah Diperiksa Tim Gudang
              </span>
            </div>

            <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-900/80 backdrop-blur text-white shadow-sm">
              Kode: ${item.code}
            </div>
          </div>

          <!-- Thumbnails -->
          ${item.images.length > 1 ? `
            <div class="flex items-center gap-3">
              ${item.images.map((img, idx) => `
                <button onclick="document.getElementById('detailMainPhoto').src = '${img}'" class="w-20 h-20 rounded-xl overflow-hidden border border-[#E5DFD5] hover:border-cyan-500 focus:border-emerald-600 transition shrink-0 bg-white">
                  <img src="${img}" class="w-full h-full object-cover">
                </button>
              `).join('')}
            </div>
          ` : ''}

          <!-- INSPECTION GUARANTEE ACCORDION -->
          <div class="p-4 rounded-xl bg-white/80 border border-[#E5DFD5] space-y-2 text-xs">
            <div class="flex items-center gap-2 text-emerald-400 font-bold">
              <i data-lucide="check-circle-2" class="w-4 h-4"></i>
              <span>Catatan Pemeriksaan Fisik Gudang (${item.inspectionDate})</span>
            </div>
            <p class="text-slate-700 leading-relaxed">${item.notes}</p>
          </div>
        </div>

        <!-- RIGHT: DETAILS & ACTION BOX (Col-span-5) -->
        <div class="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          <div class="space-y-4">
            
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-300">${item.category}</span>
              <span class="text-xs text-slate-400 font-medium">Kondisi: <strong class="text-slate-800">${item.conditionBadge}</strong></span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">${item.title}</h1>
            
            <div class="p-4 rounded-2xl bg-white/90 border border-[#E5DFD5]">
              <span class="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Harga Jual Preloved</span>
              <p class="text-3xl font-black text-emerald-700 mt-0.5">${formatRupiah(item.price)}</p>
              <p class="text-[11px] text-emerald-400 font-medium mt-1">✓ Bebas Ongkir (Sistem COD / Ambil di Gudang Kampus)</p>
            </div>

            <!-- LOCATION & TIMELINE -->
            <div class="space-y-2.5 text-xs text-slate-700 border-t border-[#E5DFD5] pt-4">
              <div class="flex items-start gap-2">
                <i data-lucide="map-pin" class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5"></i>
                <div>
                  <span class="font-bold text-slate-900">Lokasi Penyimpanan:</span>
                  <p class="text-slate-400">${item.warehouse}</p>
                </div>
              </div>

              <div class="flex items-start gap-2">
                <i data-lucide="clock" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                <div>
                  <span class="font-bold text-slate-900">Masa Penitipan Aktif:</span>
                  <p class="text-slate-400">${item.daysRemaining} hari tersisa dari kuota 7 hari awal</p>
                </div>
              </div>

              <div class="flex items-start gap-2">
                <i data-lucide="user-check" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                <div>
                  <span class="font-bold text-slate-900">Penjual Terverifikasi:</span>
                  <p class="text-slate-400">${item.seller.name} (${item.seller.jurusan}) &bull; KTM Valid</p>
                </div>
              </div>
            </div>

          </div>

          <!-- BOOKING ACTION BOX -->
          <div class="space-y-3 pt-4 border-t border-[#E5DFD5]">
            ${isAvailable ? `
              <button onclick="openBookingModal(${item.id})" class="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm transition shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>Pesan Barang & Jadwalkan Cek Gudang</span>
              </button>
              <p class="text-[11px] text-center text-slate-500">
                Barang akan dikunci selama 24 jam untukmu agar tidak dibeli orang lain.
              </p>
            ` : item.status === 'Dipesan' ? `
              <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-1">
                <p class="text-xs font-black text-amber-800">Barang Sedang Dipesan untuk Cek Fisik</p>
                <p class="text-[11px] text-amber-700">Calon pembeli sedang dalam jadwal survei ke gudang kampus.</p>
              </div>
            ` : `
              <div class="p-4 rounded-2xl bg-[#F4EFE6] border border-[#E5DFD5] text-center">
                <p class="text-xs font-black text-slate-500">Barang Ini Sudah Terjual</p>
              </div>
            `}
          </div>

        </div>

      </div>

    </div>
  `;
}

function openBookingModal(itemId) {
  if (!appState.currentUser) {
    showToast('Login Diperlukan', 'Masuk dengan NPM terlebih dahulu untuk membeli atau booking barang.', false);
    openAuthModal('login');
    return;
  }
  const item = appState.products.find(p => p.id === itemId);
  if (!item) return;

  appState.activeBookingItem = item;
  const modal = document.getElementById('bookingModal');
  const preview = document.getElementById('modalItemPreview');
  const bName = document.getElementById('buyerName');
  const bPhone = document.getElementById('buyerPhone');
  if (bName && appState.currentUser) bName.value = appState.currentUser.name;
  if (bPhone && appState.currentUser?.whatsapp) bPhone.value = appState.currentUser.whatsapp;

  preview.innerHTML = `
    <img src="${item.images[0]}" onerror="if(this.src!='${item.images[1]}'){this.src='${item.images[1]}';}" class="w-12 h-12 rounded-lg object-cover bg-white">
    <div class="flex-1 text-xs">
      <h4 class="font-bold text-slate-900 line-clamp-1">${item.title}</h4>
      <p class="text-emerald-700 font-extrabold">${formatRupiah(item.price)}</p>
      <p class="text-[10px] text-slate-400">Lokasi: ${item.warehouse}</p>
    </div>
  `;

  // Set default date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toISOString().split('T')[0];
  const dateInput = document.getElementById('bookingDate');
  if (dateInput) dateInput.value = dateStr;

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeBookingModal() {
  document.getElementById('bookingModal').classList.add('hidden');
  appState.activeBookingItem = null;
}

async function confirmBooking(e) {
  e.preventDefault();
  const item = appState.activeBookingItem;
  if (!item) return;

  const buyerName = document.getElementById('buyerName').value;
  const buyerPhone = document.getElementById('buyerPhone').value;
  const bookingDate = document.getElementById('bookingDate').value;
  const bookingTime = document.getElementById('bookingTime').value;

  const res = await fetch(`${API_URL}?action=create_order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      order_type: 'product',
      product_id: item.id,
      item_title: item.title,
      amount: item.price,
      notes: `WA: ${buyerPhone} | Jadwal: ${bookingDate} (${bookingTime})`
    })
  });
  const data = await res.json();
  if (!data.success) {
    showToast('Gagal Booking', data.message || 'Silakan masuk terlebih dahulu.', false);
    return;
  }

  item.status = 'Dipesan';
  closeBookingModal();
  showToast('Booking Berhasil!', `${item.title} (${data.order_code}) berhasil dipesan atas nama ${buyerName}.`);
  renderView();
}

// ==========================================
// VIEW 4: TITIP GUDANG (CONSIGNMENT SUBMISSION)
// ==========================================
function toggleTitipWarehouse(checked) {
  const wrap = document.getElementById('titipWarehouseWrap');
  if (wrap) wrap.classList.toggle('hidden', !checked);
}

function getTitipGudangViewHTML() {
  const u = appState.currentUser;
  const needKtp = !u || !u.has_ktp;
  return `
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <!-- HEADER -->
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <span class="text-xs font-bold text-emerald-700 uppercase tracking-widest">Pasar Mahasiswa &bull; Penjualan Aman</span>
        <h1 class="text-3xl font-black text-slate-900">Formulir Jual Barang Mahasiswa</h1>
        <p class="text-xs sm:text-sm text-slate-500">
          Jual mandiri (COD kampus) atau centang opsi <strong>Titip Gudang (maks. 7 hari)</strong> jika ingin dititipkan di gudang kampus.
        </p>
      </div>

      ${!u ? `
      <div class="max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
        <div class="text-xs text-amber-900 font-semibold">Kamu belum masuk. Silakan masuk dengan NPM (angkatan 22–26) untuk mulai berjualan.</div>
        <button onclick="openAuthModal('login')" class="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-black">Masuk / Daftar NPM</button>
      </div>` : ''}

      <!-- TWO-COLUMN LAYOUT -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- LEFT: THE FORM (Col-span-7) -->
        <div class="lg:col-span-7 bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-8 space-y-5">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <i data-lucide="edit-3" class="w-4 h-4 text-emerald-700"></i>
            <span>Informasi Barang Dijual</span>
          </h3>

          <form id="consignmentForm" onsubmit="handleConsignmentSubmit(event)" class="space-y-4">
            
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Nama Barang *</label>
              <input type="text" id="titipNama" required placeholder="Contoh: Rice Cooker Miyako 0,6 L / Meja Lipat Kos" class="w-full bg-slate-50 border border-[#E5DFD5] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-emerald-600">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Kategori Barang *</label>
                <select id="titipKategori" required class="w-full bg-slate-50 border border-[#E5DFD5] rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600">
                  <option value="Perabot Kos">Perabot Kos</option>
                  <option value="Elektronik">Elektronik</option>
                  <option value="Buku">Buku Kuliah</option>
                  <option value="Fashion">Fashion / Preloved</option>
                  <option value="Aksesoris">Aksesoris</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Harga Jual (Rp) *</label>
                <input type="number" id="titipHarga" required placeholder="Contoh: 120000" class="w-full bg-slate-50 border border-[#E5DFD5] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-emerald-600">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Kondisi Barang *</label>
              <select id="titipKondisi" required class="w-full bg-slate-50 border border-[#E5DFD5] rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600">
                <option value="Seperti Baru">Sangat Baik / Seperti Baru</option>
                <option value="Baik">Baik (Ada lecet wajar)</option>
                <option value="Cukup Baik">Cukup Baik (Berfungsi normal)</option>
              </select>
            </div>

            <!-- OPTIONAL TITIP GUDANG CHECKBOX -->
            <div class="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 space-y-3">
              <label class="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" id="titipCheck" onchange="toggleTitipWarehouse(this.checked)" class="mt-0.5 w-4 h-4 accent-emerald-600 rounded">
                <div class="text-xs">
                  <span class="font-extrabold text-emerald-950 block">Titip di Gudang Kampus (Opsional)</span>
                  <span class="text-slate-600">Centang hanya jika ingin menitipkan barang di gudang kami. Batas waktu maksimal <strong>1 minggu (7 hari)</strong>; jika belum terjual dalam 1 minggu, barang dikembalikan ke penjual.</span>
                </div>
              </label>
              <div id="titipWarehouseWrap" class="hidden pt-2 border-t border-emerald-200/70">
                <label class="block text-xs font-bold text-slate-700 mb-1">Pilih Lokasi Gudang Penyerahan</label>
                <select id="titipGudang" class="w-full bg-white border border-emerald-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600">
                  <option value="Gudang Utama Area Kampus">Gudang Utama Area Kampus</option>
                  <option value="Gudang Transit Hub Kos Mahasiswa">Gudang Transit Hub Kos Mahasiswa</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Catatan Kejujuran &amp; Minus Barang *</label>
              <textarea id="titipCatatan" rows="3" required placeholder="Tuliskan secara jujur jika ada minus (contoh: ada goresan kecil di samping, kabel original)." class="w-full bg-slate-50 border border-[#E5DFD5] rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-emerald-600"></textarea>
            </div>

            <!-- ANTI-FRAUD KTP + NIK SECTION -->
            ${needKtp ? `
            <div class="p-4 rounded-2xl border border-amber-300 bg-amber-50/70 space-y-3">
              <div class="flex items-center gap-2 text-xs font-extrabold text-amber-900">
                <i data-lucide="shield-alert" class="w-4 h-4 text-amber-600"></i>
                <span>Verifikasi Penjual Anti-Penipuan (Wajib Upload KTP)</span>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">NIK Sesuai KTP (16 Digit) *</label>
                <input type="text" id="ktpNikInput" maxlength="16" inputmode="numeric" required placeholder="Contoh: 127201xxxxxxxxxx" class="w-full bg-white border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs font-mono focus:outline-none focus:border-emerald-600">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Upload Foto KTP (Jelas &amp; Terbaca) *</label>
                <input type="file" id="ktpUploadInput" accept="image/jpeg,image/png,image/webp" required class="w-full bg-white border border-amber-200 rounded-xl px-3 py-2 text-xs">
                <p class="text-[10px] text-amber-800 mt-1">Foto KTP disimpan aman dan hanya dapat dilihat oleh Admin untuk cek NIK anti-penipuan.</p>
              </div>
            </div>` : `
            <div class="p-3.5 rounded-2xl border border-emerald-200 bg-emerald-50 text-xs text-emerald-800 font-bold flex items-center gap-2">
              <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
              <span>KTP &amp; NIK sudah terlampir (Status: ${u.ktp_status === 'verified' ? 'Terverifikasi' : 'Menunggu Cek Admin'}).</span>
            </div>`}

            <!-- PRODUCT PHOTO UPLOAD -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Unggah Foto Barang</label>
              <input type="file" id="fileUploadHelper" accept="image/jpeg,image/png,image/webp" class="w-full bg-slate-50 border border-[#E5DFD5] rounded-xl px-3 py-2.5 text-xs">
            </div>

            <div class="pt-2">
              <button type="submit" class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm transition shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2">
                <i data-lucide="check" class="w-4 h-4"></i>
                <span>Terbitkan Barang Sekarang</span>
              </button>
            </div>

          </form>
        </div>

        <!-- RIGHT: BMC TRANSPARENCY & RULES (Col-span-5) -->
        <div class="lg:col-span-5 space-y-4">
          
          <div class="p-6 rounded-3xl bg-white border border-[#E5DFD5] space-y-4">
            <h4 class="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <i data-lucide="check-square" class="w-4 h-4 text-emerald-400"></i>
              <span>Barang yang Bisa Dititipkan</span>
            </h4>
            <ul class="space-y-2 text-xs text-slate-700">
              <li class="flex items-center gap-2">
                <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i>
                <span>Elektronik berfungsi aman (kipas, rice cooker, laptop, setrika)</span>
              </li>
              <li class="flex items-center gap-2">
                <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i>
                <span>Perabot kos ringkas (meja lipat, rak sepatu, kursi)</span>
              </li>
              <li class="flex items-center gap-2">
                <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i>
                <span>Buku perkuliahan resmi & modul praktikum</span>
              </li>
            </ul>
            <p class="text-[11px] text-slate-400 italic border-t border-[#E5DFD5] pt-3">
              *Kami menolak barang ilegal, barang curian, atau peralatan rusak berat yang membahayakan.
            </p>
          </div>

          <!-- 7-DAY EXPIRY RULE TRANSPARENCY CARD (Pastel Warm Theme) -->
          <div class="p-6 rounded-3xl bg-amber-50/80 border border-amber-200 space-y-3.5 shadow-sm">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <h4 class="text-sm font-black text-amber-900">Biaya Jelas & Transparan Sejak Awal</h4>
            </div>

            <div class="space-y-2 text-xs">
              <div class="flex items-center justify-between p-3 rounded-2xl bg-white border border-amber-200/60 shadow-sm">
                <span class="text-slate-700 font-bold">Penitipan 7 Hari Pertama:</span>
                <span class="text-emerald-700 font-black">Rp 0 (GRATIS)</span>
              </div>
              <div class="flex items-center justify-between p-3 rounded-2xl bg-white border border-amber-200/60 shadow-sm">
                <span class="text-slate-700 font-bold">Biaya Layanan Saat Terjual:</span>
                <span class="text-slate-900 font-black">10% dari Harga Jual</span>
              </div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white/90 border border-amber-200/80 text-[11px] text-amber-950 leading-relaxed shadow-sm">
              <strong class="text-amber-900 font-bold">Ketentuan Jika Lewat 7 Hari:</strong><br>
              Jika barang belum laku dalam 7 hari, kamu bebas memilih:
              <ul class="list-disc list-inside mt-1 space-y-0.5 text-slate-700">
                <li>Perpanjang masa titip (Rp 15.000 / minggu)</li>
                <li>Ambil kembali barang dari gudang tanpa biaya denda</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
}

async function handleConsignmentSubmit(e) {
  e.preventDefault();
  if (!appState.currentUser) {
    showToast('Login Diperlukan', 'Masuk dengan NPM terlebih dahulu untuk berjualan.', false);
    openAuthModal('login');
    return;
  }

  const fd = new FormData();
  fd.append('title', document.getElementById('titipNama').value.trim());
  fd.append('category', document.getElementById('titipKategori').value);
  fd.append('price', document.getElementById('titipHarga').value);
  fd.append('condition_label', document.getElementById('titipKondisi').value);
  fd.append('notes', document.getElementById('titipCatatan').value.trim());
  const isTitip = document.getElementById('titipCheck')?.checked ? '1' : '0';
  fd.append('is_titip_gudang', isTitip);
  if (isTitip === '1') {
    fd.append('warehouse', document.getElementById('titipGudang').value);
  }

  const nikEl = document.getElementById('ktpNikInput');
  const ktpEl = document.getElementById('ktpUploadInput');
  if (nikEl && ktpEl) {
    fd.append('nik', nikEl.value.trim());
    if (ktpEl.files[0]) fd.append('ktp_photo', ktpEl.files[0]);
  }

  const prodPhoto = document.getElementById('fileUploadHelper');
  if (prodPhoto && prodPhoto.files[0]) {
    fd.append('product_photo', prodPhoto.files[0]);
  }

  const res = await fetch(`${API_URL}?action=create_product`, { method: 'POST', body: fd });
  const data = await res.json();
  if (!data.success) {
    showToast('Gagal Menerbitkan', data.message || 'Periksa kembali form.', false);
    return;
  }

  if (data.user) {
    appState.currentUser = data.user;
    updateAuthNavUI();
  }
  await loadProductsFromApi();
  await loadMyActivity();
  showToast('Barang Terbit!', data.message);
  navigateTo('dashboard');
}

// ==========================================
// VIEW 5: DASHBOARD PENJUAL ("RUANG PENJUAL")
// ==========================================
function getDashboardViewHTML() {
  const sellerItems = appState.myProducts || [];
  const pendingCount = sellerItems.filter(i => i.approvalStatus === 'pending').length;
  const approvedItems = sellerItems.filter(i => i.approvalStatus === 'approved');
  const rejectedItems = sellerItems.filter(i => i.approvalStatus === 'rejected');

  const totalDititipkan = sellerItems.length;
  const totalTersedia = sellerItems.filter(i => i.status === 'Tersedia' && i.approvalStatus === 'approved').length;
  const totalDipesan = sellerItems.filter(i => i.status === 'Dipesan').length;

  // Check for 7-day alert item (item with daysRemaining <= 0)
  const expiredItem = sellerItems.find(i => i.isTitipGudang && i.daysRemaining <= 0);

  return `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <!-- SELLER HEADER -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DFD5]">
        <div>
          <span class="text-xs font-bold text-emerald-700 uppercase tracking-widest">Profil &amp; Ruang Penjual</span>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Halo, ${appState.userProfile.name} (${appState.userProfile.nim || '-'}).</h1>
          <p class="text-xs text-slate-500">Pantau status peninjauan Admin, notifikasi persetujuan/penolakan, &amp; masa simpan 7 hari.</p>
        </div>

        <button onclick="navigateTo('titip')" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 transition flex items-center gap-2 shadow-lg">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Jual Barang Baru</span>
        </button>
      </div>

      <!-- SELLER MODERATION NOTIFICATIONS -->
      ${pendingCount > 0 ? `
        <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
          <i data-lucide="clock" class="w-5 h-5 text-amber-600 shrink-0 mt-0.5"></i>
          <div>
            <strong class="block text-sm">Ada ${pendingCount} barang sedang ditinjau Admin</strong>
            <span>Data barang dan verifikasi KTP kamu sedang diperiksa oleh Admin. Barang akan otomatis tayang di marketplace setelah disetujui.</span>
          </div>
        </div>` : ''}

      ${rejectedItems.map(r => `
        <div class="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 text-xs text-red-900">
          <i data-lucide="x-circle" class="w-5 h-5 text-red-600 shrink-0 mt-0.5"></i>
          <div>
            <strong class="block text-sm">Pengajuan Ditolak: ${r.title} (${r.code})</strong>
            <span><strong>Alasan Admin:</strong> ${r.approvalReason || 'Data atau foto belum memenuhi syarat.'}</span>
          </div>
        </div>`).join('')}

      ${approvedItems.length > 0 ? `
        <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-xs text-emerald-900">
          <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"></i>
          <div>
            <strong class="block text-sm">${approvedItems.length} barang telah disetujui Admin &amp; tayang!</strong>
            <span>Barangmu sudah tampil di etalase publik Pasar Mahasiswa.</span>
          </div>
        </div>` : ''}

      <!-- 7-DAY EXPIRY ALERT BANNER (CRITICAL FEATURE) -->
      ${expiredItem ? `
        <div class="p-5 rounded-3xl bg-amber-50 border border-amber-300 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div class="flex items-center gap-3.5">
            <div class="w-11 h-11 rounded-2xl bg-amber-200 text-amber-800 flex items-center justify-center shrink-0 border border-amber-300">
              <i data-lucide="alert-triangle" class="w-5 h-5 text-amber-700"></i>
            </div>
            <div>
              <h4 class="text-sm font-black text-amber-950">Tenggat Penitipan 7 Hari Berakhir Hari Ini!</h4>
              <p class="text-xs text-amber-800 mt-0.5">
                Barang titipanmu <strong>${expiredItem.title} (${expiredItem.code})</strong> telah mencapai batas 7 hari masa simpan gratis. Tentukan langkah berikutnya.
              </p>
            </div>
          </div>

          <button onclick="openDecisionModal(${expiredItem.id})" class="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs shrink-0 transition flex items-center gap-1.5 shadow-md shadow-amber-700/20">
            <span>Tinjau Penitipan</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      ` : ''}

      <!-- 4 KPI SUMMARY STAT CARDS -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="p-4 rounded-2xl bg-white border border-[#E5DFD5] space-y-1">
          <span class="text-xs text-slate-400 font-medium">Total Dititipkan</span>
          <p class="text-2xl font-black text-slate-900">${totalDititipkan} <span class="text-xs font-normal text-slate-400">Unit</span></p>
        </div>

        <div class="p-4 rounded-2xl bg-white border border-[#E5DFD5] space-y-1">
          <span class="text-xs text-slate-400 font-medium">Aktif Tersedia</span>
          <p class="text-2xl font-black text-emerald-400">${totalTersedia} <span class="text-xs font-normal text-slate-400">Unit</span></p>
        </div>

        <div class="p-4 rounded-2xl bg-white border border-[#E5DFD5] space-y-1">
          <span class="text-xs text-slate-400 font-medium">Sedang Dipesan</span>
          <p class="text-2xl font-black text-amber-400">${totalDipesan} <span class="text-xs font-normal text-slate-400">Unit</span></p>
        </div>

        <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-1 shadow-sm">
          <span class="text-xs text-emerald-800 font-bold">Hasil Bersih Penjualan</span>
          <p class="text-2xl font-black text-emerald-800">${formatRupiah(appState.userProfile.netEarnings)}</p>
        </div>

      </div>

      <!-- CONSIGNED ITEMS MANAGEMENT TABLE -->
      <div class="bg-white border border-[#E5DFD5] rounded-3xl overflow-hidden shadow-xl">
        <div class="p-5 border-b border-[#E5DFD5] flex items-center justify-between">
          <h3 class="text-sm font-extrabold text-slate-900 flex items-center gap-2">
            <i data-lucide="package" class="w-4 h-4 text-emerald-700"></i>
            <span>Daftar Barang Titipan Anda</span>
          </h3>
          <span class="text-xs text-slate-400">Auto-update setiap pemeriksaan fisik</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-[#E5DFD5] text-[11px] font-bold text-slate-400 bg-white/60">
                <th class="py-3.5 px-4">Barang</th>
                <th class="py-3.5 px-4">Harga Jual</th>
                <th class="py-3.5 px-4">Masa 7 Hari</th>
                <th class="py-3.5 px-4">Status</th>
                <th class="py-3.5 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/80">
              ${sellerItems.map(item => {
                const daysPercent = Math.max(0, Math.min(100, (item.daysRemaining / 7) * 100));
                const isUrgent = item.daysRemaining <= 1;

                return `
                  <tr class="hover:bg-[#F4EFE6]/40 transition">
                    <td class="py-3.5 px-4">
                      <div class="flex items-center gap-3">
                        <img src="${item.images[0]}" onerror="if(this.src!='${item.images[1]}'){this.src='${item.images[1]}';}" class="w-10 h-10 rounded-lg object-cover bg-white border border-[#E5DFD5] shrink-0">
                        <div>
                          <p class="font-bold text-slate-900 line-clamp-1">${item.title}</p>
                          <p class="text-[10px] text-slate-400">${item.code} &bull; ${item.category}</p>
                        </div>
                      </div>
                    </td>

                    <td class="py-3.5 px-4 font-bold text-emerald-700">
                      ${formatRupiah(item.price)}
                    </td>

                    <td class="py-3.5 px-4">
                      <div class="w-32 space-y-1">
                        <div class="flex items-center justify-between text-[10px]">
                          <span class="${isUrgent ? 'text-amber-400 font-bold' : 'text-slate-400'}">
                            ${item.daysRemaining > 0 ? `${item.daysRemaining} Hari Lagi` : 'Tenggat Habis'}
                          </span>
                          <span class="text-slate-500">7 Hari</span>
                        </div>
                        <div class="w-full h-1.5 rounded-full bg-[#F4EFE6] overflow-hidden">
                          <div class="h-full rounded-full ${isUrgent ? 'bg-amber-400' : 'bg-emerald-500'}" style="width: ${daysPercent}%"></div>
                        </div>
                      </div>
                    </td>

                    <td class="py-3.5 px-4">
                      ${item.status === 'Tersedia' ? `
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">Tersedia</span>
                      ` : item.status === 'Dipesan' ? `
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-400 border border-amber-800">Dipesan</span>
                      ` : `
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F4EFE6] text-slate-400">Terjual</span>
                      `}
                    </td>

                    <td class="py-3.5 px-4 text-right">
                      ${item.daysRemaining <= 0 ? `
                        <button onclick="openDecisionModal(${item.id})" class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold text-[11px] hover:bg-amber-500 hover:text-slate-950 transition">
                          Tinjau (7 Hari)
                        </button>
                      ` : `
                        <button onclick="navigateTo('detail', ${item.id})" class="px-2.5 py-1 rounded-lg bg-[#F4EFE6] text-slate-700 hover:text-slate-900 hover:bg-slate-700 font-semibold text-[11px] transition">
                          Lihat
                        </button>
                      `}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

      </div>

      <!-- IT SERVICES ORDERS SECTION (Dipesan Mahasiswa) -->
      <div class="bg-white border border-[#E5DFD5] rounded-3xl overflow-hidden shadow-sm mt-6">
        <div class="p-5 border-b border-[#E5DFD5] flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <i data-lucide="wrench" class="w-4 h-4 text-emerald-700"></i>
            </div>
            <div>
              <h3 class="text-sm font-extrabold text-slate-900">Riwayat Booking Jasa IT & Servis Laptop</h3>
              <p class="text-[11px] text-slate-400">Pemesanan servis yang ditangani divisi mahasiswa ILKOM</p>
            </div>
          </div>
          <button onclick="navigateTo('services')" class="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
            <span>+ Pesan Jasa Baru</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <div class="p-5">
          ${appState.userBookedServices.length === 0 ? `
            <div class="text-center py-6 space-y-2">
              <i data-lucide="laptop" class="w-8 h-8 text-slate-300 mx-auto"></i>
              <p class="text-xs text-slate-500 font-bold">Belum ada tiket servis aktif</p>
              <p class="text-[11px] text-slate-400 max-w-sm mx-auto">Butuh install ulang Windows, cleaning kipas, atau install software kuliah? Pesan langsung dari anak ILKOM.</p>
              <button onclick="navigateTo('services')" class="mt-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-sm inline-flex items-center gap-1.5">
                <i data-lucide="wrench" class="w-3.5 h-3.5"></i>
                <span>Lihat Layanan Jasa IT</span>
              </button>
            </div>
          ` : `
            <div class="divide-y divide-[#EFECE6]">
              ${appState.userBookedServices.map(b => `
                <div class="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div class="space-y-0.5">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">${b.code}</span>
                      <h4 class="font-bold text-slate-900">${b.serviceTitle}</h4>
                    </div>
                    <p class="text-[11px] text-slate-500">Laptop: <strong>${b.laptopModel}</strong> &bull; Teknisi: <strong>${b.technician}</strong></p>
                    <p class="text-[11px] text-slate-400">Jadwal: ${b.date} (${b.time}) &bull; Metode: ${b.deliveryMethod}</p>
                  </div>
                  <div class="text-right shrink-0">
                    <p class="font-black text-emerald-700 text-sm">${formatRupiah(b.price)}</p>
                    <span class="inline-block mt-0.5 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">Menunggu Pengerjaan</span>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>



    </div>
  `;
}

function openDecisionModal(itemId) {
  const item = appState.products.find(p => p.id === itemId);
  if (!item) return;

  appState.activeDecisionItem = item;
  const modal = document.getElementById('decisionModal');
  const info = document.getElementById('decisionItemInfo');

  info.innerHTML = `
    <div class="p-3 bg-[#F4EFE6] rounded-xl border border-[#E5DFD5] mb-3 space-y-1">
      <p class="font-bold text-slate-900 text-xs">${item.title}</p>
      <p class="text-[11px] text-slate-400">Kode: ${item.code} &bull; Harga: <strong class="text-emerald-700">${formatRupiah(item.price)}</strong></p>
      <p class="text-[11px] text-amber-300 font-medium">Masa penitipan gratis 7 hari pertama telah habis.</p>
    </div>
  `;

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeDecisionModal() {
  document.getElementById('decisionModal').classList.add('hidden');
  appState.activeDecisionItem = null;
}

function executeExtendStorage() {
  const item = appState.activeDecisionItem;
  if (!item) return;

  item.daysRemaining = 7; // add 7 days
  closeDecisionModal();
  showToast('Penitipan Diperpanjang!', `Masa simpan ${item.title} diperpanjang +7 hari (Biaya: Rp 15.000).`);
  renderView();
}

function executeScheduleRetrieval() {
  const item = appState.activeDecisionItem;
  if (!item) return;

  item.status = 'Dijadwalkan Ambil';
  closeDecisionModal();
  showToast('Pengambilan Dijadwalkan', `Silakan ambil barang di ${item.warehouse} pada jam operasional.`);
  renderView();
}

function showRulesModal() {
  alert('Ketentuan Titip Gudang:\\n1. 7 Hari Pertama: Gratis (Rp 0)\\n2. Komisi Layanan saat Terjual: 10%\\n3. Lewat 7 Hari: Perpanjang Rp 15.000/minggu atau ambil kembali barang tanpa denda.');
}


// ==========================================
// VIEW 6: JASA IT & LAPTOP MAHASISWA (ILKOM)
// ==========================================

function getServiceCardHTML(service, isFeatured = false) {
  return `
    <div class="card-milk rounded-3xl p-6 bg-white flex flex-col justify-between space-y-4 hover:border-emerald-400 transition group shadow-sm hover:shadow-lg hover:shadow-emerald-950/5 relative overflow-hidden">
      
      <!-- Top Badges -->
      <div class="flex items-center justify-between gap-2">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
          ${service.category}
        </span>
        ${service.badge ? `
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shadow-sm">
            <i data-lucide="sparkles" class="w-3 h-3 text-amber-600"></i>
            <span>${service.badge}</span>
          </span>
        ` : ''}
      </div>

      <!-- Service Title & Description -->
      <div class="space-y-2">
        <h3 class="text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-700 transition leading-snug">
          ${service.title}
        </h3>
        <p class="text-xs text-slate-600 leading-relaxed">
          ${service.description}
        </p>
      </div>

      <!-- Execution Spec Pills -->
      <div class="pt-2 border-t border-[#EFECE6] flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
        <div class="flex items-center gap-1 bg-[#F4EFE6] px-2.5 py-1 rounded-xl">
          <i data-lucide="clock" class="w-3.5 h-3.5 text-emerald-700"></i>
          <span>Estimasi: <strong>${service.duration}</strong></span>
        </div>
        <div class="flex items-center gap-1 bg-[#F4EFE6] px-2.5 py-1 rounded-xl">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-teal-700"></i>
          <span>COD / Titip Gudang</span>
        </div>
      </div>

      <!-- Technician & Rating Snippet -->
      <div class="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center shadow-sm">
            <i data-lucide="user-check" class="w-4 h-4"></i>
          </div>
          <div>
            <p class="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">Teknisi Terverifikasi</p>
            <p class="text-xs font-black text-slate-900">${service.technician}</p>
          </div>
        </div>

        <div class="text-right">
          <div class="flex items-center gap-1 text-xs font-black text-amber-600 justify-end">
            <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
            <span>${service.rating}</span>
          </div>
          <p class="text-[10px] text-slate-500">${service.completed} Laptop Selesai</p>
        </div>
      </div>

      <!-- Price & Order Action Button -->
      <div class="pt-2 border-t border-[#EFECE6] flex items-center justify-between gap-3">
        <div>
          <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Biaya Jasa</span>
          <p class="text-xl font-black text-emerald-700">${formatRupiah(service.price)}</p>
        </div>

        <button onclick="openItBookingModal(${service.id})" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition shadow-md shadow-emerald-700/20 flex items-center gap-1.5 shrink-0 hover:scale-105 transform">
          <i data-lucide="wrench" class="w-3.5 h-3.5"></i>
          <span>Pesan Jasa</span>
        </button>
      </div>

    </div>
  `;
}

function getServicesViewHTML() {
  const currentCategory = appState.serviceFilter || 'Semua Jasa';
  const filterList = ['Semua Jasa', 'Instalasi OS & Software', 'Perawatan & Hardware', 'Upgrade & Data'];

  let filteredServices = appState.services;
  if (currentCategory !== 'Semua Jasa') {
    filteredServices = appState.services.filter(s => s.category === currentCategory);
  }

  return `
    <div class="space-y-8 pb-16">
      
      <!-- HERO BANNER JASA IT (Matching Green Pastel & Milk White Theme) -->
      <section class="relative bg-gradient-to-b from-[#F7F3EB] via-[#FAF7F2] to-[#FAF7F2] border-b border-[#E5DFD5] pt-10 pb-12 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <!-- Left Info -->
            <div class="max-w-2xl space-y-4">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-black shadow-sm">
                <i data-lucide="cpu" class="w-3.5 h-3.5 text-emerald-700"></i>
                <span>SPESIALISASI ANAK ILKOM &bull; HARGA MAHASISWA &bull; CEPAT & AMAN</span>
              </div>

              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Laptop Lemot, Error, atau Butuh Install Ulang? <span class="bg-[#86efac]/80 text-emerald-950 font-black px-2.5 py-0.5 rounded-xl shadow-sm">Serahkan ke Anak Ilkom.</span>
              </h1>

              <p class="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Layanan perbaikan software & perawatan hardware laptop transparan, cepat, dan aman. Bebas khawatir data pribadi bocor. Bisa COD langsung di area kampus (kantin / perpus) atau titip unit lewat pos gudang kami.
              </p>

              <!-- Action Pills -->
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <button onclick="document.getElementById('servicesListSection').scrollIntoView({ behavior: 'smooth' })" class="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition shadow-md shadow-emerald-700/20 flex items-center gap-2">
                  <i data-lucide="wrench" class="w-4 h-4"></i>
                  <span>Pilih Layanan Servis</span>
                </button>

                <button onclick="openItOfferModal()" class="px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-[#E5DFD5] text-slate-800 font-extrabold text-xs transition flex items-center gap-2 shadow-sm hover:border-emerald-400">
                  <i data-lucide="plus-circle" class="w-4 h-4 text-emerald-600"></i>
                  <span>+ Tawarkan Jasa IT-mu (Anak ILKOM)</span>
                </button>
              </div>
            </div>

            <!-- Right Guarantees Badge Card -->
            <div class="w-full lg:max-w-sm p-6 rounded-3xl bg-white border border-[#E5DFD5] shadow-lg shadow-emerald-950/5 space-y-4">
              <div class="flex items-center gap-2 pb-3 border-b border-[#EFECE6]">
                <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
                  <i data-lucide="shield-check" class="w-4 h-4 text-emerald-700"></i>
                </div>
                <div>
                  <h4 class="text-xs font-black text-slate-900">Garansi Servis Mahasiswa</h4>
                  <p class="text-[10px] text-slate-500">Standar Kejujuran Divisi IT ILKOM</p>
                </div>
              </div>

              <div class="space-y-3 text-xs text-slate-700">
                <div class="flex items-start gap-2.5">
                  <i data-lucide="lock" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <p><strong>Privasi 100% Terjaga:</strong> Tidak ada intip data pribadi, foto, atau dokumen rahasia.</p>
                </div>
                <div class="flex items-start gap-2.5">
                  <i data-lucide="badge-percent" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <p><strong>Tarif Ramah Kantong:</strong> Jauh lebih hemat 50-70% dibanding servis mall luar.</p>
                </div>
                <div class="flex items-start gap-2.5">
                  <i data-lucide="clock" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <p><strong>Bisa Ditunggu:</strong> Install ulang & cleaning bisa ditunggu sambil ngopi di kantin.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- SERVICES CONTENT CONTAINER -->
      <div id="servicesListSection" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- FILTER PILLS -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DFD5]">
          <div class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            ${filterList.map(f => `
              <button onclick="filterServices('${f}')" class="px-4 py-2 rounded-2xl text-xs font-black transition shrink-0 ${currentCategory === f ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20' : 'bg-white border border-[#E5DFD5] text-slate-600 hover:border-emerald-300 hover:text-emerald-700'}">
                ${f}
              </button>
            `).join('')}
          </div>

          <span class="text-xs text-slate-500 font-bold shrink-0">Menampilkan ${filteredServices.length} Layanan IT Aktif</span>
        </div>

        <!-- SERVICES CARDS GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filteredServices.map(service => getServiceCardHTML(service)).join('')}
        </div>

        <!-- BOTTOM CALLOUT: KONSULTASI MASALAH LAPTOP -->
        <div class="p-8 rounded-3xl bg-gradient-to-r from-emerald-100/90 via-emerald-50 to-teal-50 border border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div class="space-y-1.5 text-center sm:text-left">
            <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-900">
              <i data-lucide="help-circle" class="w-3 h-3"></i> Belum Yakin Laptopmu Kenapa?
            </span>
            <h4 class="text-lg font-black text-slate-900">Konsultasi & Diagnosa Kerusakan Gratis</h4>
            <p class="text-xs sm:text-sm text-slate-600 max-w-xl">
              Tanyakan dulu keluhan laptopmu ke tim teknisi ILKOM via WhatsApp. Kami bantu cek apakah masalah ada di software, harddisk lemot, atau pasta kering sebelum kamu pesan.
            </p>
          </div>

          <button onclick="openItBookingModal(5)" class="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shrink-0 transition shadow-md shadow-emerald-700/20 flex items-center gap-2">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span>Konsultasi Diagnosa Gratis</span>
          </button>
        </div>

      </div>

    </div>
  `;
}

function filterServices(category) {
  appState.serviceFilter = category;
  renderView();
}

// 7. IT BOOKING MODALS LOGIC
function openItBookingModal(serviceId) {
  if (!appState.currentUser) {
    showToast('Login Diperlukan', 'Masuk dengan NPM terlebih dahulu untuk memesan jasa IT.', false);
    openAuthModal('login');
    return;
  }
  const service = appState.services.find(s => s.id === serviceId) || appState.services[0];
  appState.activeServiceBooking = service;
  const cName = document.getElementById('itClientName');
  const cPhone = document.getElementById('itClientPhone');
  const cMajor = document.getElementById('itClientMajor');
  if (cName && appState.currentUser) cName.value = appState.currentUser.name;
  if (cPhone && appState.currentUser?.whatsapp) cPhone.value = appState.currentUser.whatsapp;
  if (cMajor && appState.currentUser?.jurusan) cMajor.value = appState.currentUser.jurusan;

  const modal = document.getElementById('itBookingModal');
  const preview = document.getElementById('modalItServicePreview');

  preview.innerHTML = `
    <div class="flex items-center justify-between">
      <div class="space-y-0.5">
        <span class="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">${service.category}</span>
        <h4 class="text-sm font-black text-slate-900">${service.title}</h4>
        <p class="text-[11px] text-slate-500">Estimasi: ${service.duration} &bull; Teknisi: <strong>${service.technician}</strong></p>
      </div>
      <div class="text-right">
        <span class="text-[10px] text-slate-400 font-bold block">Biaya Jasa</span>
        <span class="text-base font-black text-emerald-700">${formatRupiah(service.price)}</span>
      </div>
    </div>
  `;

  // Set default tomorrow date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById('itBookingDate');
  if (dateInput) dateInput.value = tomorrow.toISOString().split('T')[0];

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeItBookingModal() {
  document.getElementById('itBookingModal').classList.add('hidden');
}

async function confirmItBooking(e) {
  e.preventDefault();
  const service = appState.activeServiceBooking;
  if (!service) return;

  const name = document.getElementById('itClientName').value;
  const phone = document.getElementById('itClientPhone').value;
  const major = document.getElementById('itClientMajor').value;
  const laptop = document.getElementById('itLaptopModel').value;
  const complaint = document.getElementById('itComplaintDetails').value;
  const delivery = document.querySelector('input[name="itDeliveryMethod"]:checked')?.value || 'COD Kampus';
  const date = document.getElementById('itBookingDate').value;
  const time = document.getElementById('itBookingTime').value;

  const res = await fetch(`${API_URL}?action=create_order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      order_type: 'service',
      item_title: service.title,
      amount: service.price,
      notes: `Laptop: ${laptop} | ${delivery} | ${date} (${time}) | WA: ${phone} | ${complaint}`
    })
  });
  const data = await res.json();
  if (!data.success) {
    showToast('Login Diperlukan', data.message || 'Silakan masuk terlebih dahulu.', false);
    return;
  }

  const bookingCode = data.order_code;

  const bookingRecord = {
    code: bookingCode,
    serviceTitle: service.title,
    price: service.price,
    clientName: name,
    clientPhone: phone,
    clientMajor: major,
    laptopModel: laptop,
    complaint: complaint,
    deliveryMethod: delivery,
    date: date,
    time: time,
    technician: service.technician,
    createdAt: new Date().toLocaleTimeString('id-ID')
  };

  appState.userBookedServices.push(bookingRecord);
  appState.userProfile.activeBookings = (appState.userProfile.activeBookings || 0) + 1;

  closeItBookingModal();

  // Show Digital Receipt Ticket Modal
  const ticketModal = document.getElementById('itTicketModal');
  const details = document.getElementById('ticketDetailsContainer');

  details.innerHTML = `
    <div class="pb-2 border-b border-[#E5DFD5] flex items-center justify-between">
      <span class="text-[11px] text-slate-500 font-bold">KODE TIKET:</span>
      <span class="font-black text-emerald-800 text-sm tracking-wider">${bookingCode}</span>
    </div>

    <div class="space-y-1.5 pt-1">
      <p class="font-black text-slate-900 text-xs">${service.title}</p>
      <div class="flex items-center justify-between text-[11px] text-slate-600">
        <span>Teknisi Pengampu:</span>
        <strong class="text-slate-900">${service.technician}</strong>
      </div>
      <div class="flex items-center justify-between text-[11px] text-slate-600">
        <span>Pemesan:</span>
        <strong class="text-slate-900">${name} (${major})</strong>
      </div>
      <div class="flex items-center justify-between text-[11px] text-slate-600">
        <span>Laptop:</span>
        <strong class="text-slate-900">${laptop}</strong>
      </div>
      <div class="flex items-center justify-between text-[11px] text-slate-600">
        <span>Metode:</span>
        <strong class="text-emerald-700">${delivery}</strong>
      </div>
      <div class="flex items-center justify-between text-[11px] text-slate-600">
        <span>Jadwal:</span>
        <strong class="text-slate-900">${date} (${time})</strong>
      </div>
      <div class="pt-2 border-t border-[#E5DFD5] flex items-center justify-between text-xs font-black">
        <span>Total Biaya Jasa:</span>
        <span class="text-emerald-700 text-sm">${formatRupiah(service.price)}</span>
      </div>
    </div>
  `;

  ticketModal.classList.remove('hidden');
  lucide.createIcons();

  showToast('Booking Jasa Berhasil!', `Kode Tiket: ${bookingCode}. Teknisi ${service.technician} siap membantu.`);
}

function closeItTicketModal() {
  document.getElementById('itTicketModal').classList.add('hidden');
}

// 8. IT SERVICE OFFERING MODAL LOGIC (CS Students)
function openItOfferModal() {
  document.getElementById('itOfferModal').classList.remove('hidden');
  lucide.createIcons();
}

function closeItOfferModal() {
  document.getElementById('itOfferModal').classList.add('hidden');
}

function handleOfferServiceSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('offerTitle').value;
  const category = document.getElementById('offerCategory').value;
  const price = parseInt(document.getElementById('offerPrice').value) || 50000;
  const duration = document.getElementById('offerDuration').value;
  const technician = document.getElementById('offerTechnician').value;
  const description = document.getElementById('offerDescription').value;

  const newService = {
    id: Date.now(),
    title: title,
    category: category,
    price: price,
    duration: duration,
    technician: technician,
    rating: '5.0',
    completed: 1,
    icon: 'wrench',
    badge: 'Jasa Baru',
    description: description
  };

  appState.services.unshift(newService);
  closeItOfferModal();
  showToast('Jasa IT Diterbitkan!', `Layanan "${title}" telah tayang di marketplace.`);
  
  if (appState.currentView === 'services') {
    renderView();
  }
}


// 6. INITIALIZE ON DOM READY
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
