/**
 * ============================================================
 * TEMPLATES CONFIG — Tambah template baru di sini!
 * ============================================================
 * 
 * Cara menambah template baru:
 * 1. Buat file HTML undangan (contoh: undangan-modern.html)
 * 2. Copy salah satu objek template di bawah
 * 3. Ganti semua field sesuai template barumu
 * 4. Tambahkan ke array TEMPLATES_CONFIG
 * ============================================================
 */

window.TEMPLATES_CONFIG = [

  // ── TEMPLATE 1: Sakura Garden ──
  {
    id: 'sakura-garden',
    name: 'Sakura Garden',
    kategori: 'pernikahan',
    kategoriLabel: 'Pernikahan',
    subtitle: 'Undangan Pernikahan',
    ornament: '✿',
    previewTitle: 'Rizky & Amelia',
    previewDate: 'Sabtu, 14 Juni 2025',
    defaultTheme: 'sakura',
    badge: 'Populer',
    demoFile: 'undangan/sakura-garden.html',
    price: 'Rp 150.000',
    themes: [
      { key: 'sakura',  label: 'Sakura Pink',   color: '#C45C7A' },
      { key: 'sage',    label: 'Sage Green',     color: '#5A8A6A' },
      { key: 'ivory',   label: 'Ivory Classic',  color: '#8C7040' },
      { key: 'slate',   label: 'Slate Blue',     color: '#4A6FA3' },
      { key: 'terra',   label: 'Terra Cotta',    color: '#C46A3A' },
      { key: 'gold',    label: 'Gold Dark',      color: '#C9A84C' },
    ]
  },

  // ── TEMPLATE 2: Royal Gold ──
  {
    id: 'royal-gold',
    name: 'Royal Gold',
    kategori: 'pernikahan',
    kategoriLabel: 'Pernikahan',
    subtitle: 'Undangan Pernikahan',
    ornament: '♦',
    previewTitle: 'Ahmad & Siti',
    previewDate: 'Minggu, 22 Agustus 2025',
    defaultTheme: 'gold',
    badge: 'Premium',
    demoFile: 'undangan/royal-gold.html',
    price: 'Rp 200.000',
    themes: [
      { key: 'gold',    label: 'Royal Gold',     color: '#C9A84C' },
      { key: 'sakura',  label: 'Rose Pink',      color: '#C45C7A' },
      { key: 'sage',    label: 'Forest Green',   color: '#5A8A6A' },
      { key: 'slate',   label: 'Navy Blue',      color: '#4A6FA3' },
    ]
  },

  // ── TEMPLATE 3: Rustic Floral ──
  {
    id: 'rustic-floral',
    name: 'Rustic Floral',
    kategori: 'pernikahan',
    kategoriLabel: 'Pernikahan',
    subtitle: 'Undangan Pernikahan',
    ornament: '❀',
    previewTitle: 'Dimas & Nadia',
    previewDate: 'Jumat, 10 Oktober 2025',
    defaultTheme: 'sage',
    badge: null,
    demoFile: 'undangan/rustic-floral.html',
    price: 'Rp 150.000',
    themes: [
      { key: 'terracotta',   label: 'Rustic Terra',   color: '#7A3E31' },
      { key: 'sage',    label: 'Garden Sage',    color: '#4A5D4E' },
      { key: 'mocha',   label: 'Choco Mocha',    color: '##5C4A3D' },
    ]
    },

  // ── TEMPLATE 4: Akad Islami ──
  {
    id: 'akad-islami',
    name: 'Akad Islami',
    kategori: 'akad',
    kategoriLabel: 'Akad Nikah',
    subtitle: 'Undangan Akad Nikah',
    ornament: '☽',
    previewTitle: 'Fajar & Rahma',
    previewDate: "Ahad, 3 Januari 2026",
    defaultTheme: 'gold',
    badge: null,
    demoFile: 'undangan/akad-islami.html',
    price: 'Rp 150.000',
    themes: [
      { key: 'gold',    label: 'Gold Dark',      color: '#C9A84C' },
      { key: 'sage',    label: 'Sage Hijau',     color: '#5A8A6A' },
      { key: 'ivory',   label: 'Krem Klasik',    color: '#8C7040' },
      { key: 'slate',   label: 'Biru Langit',    color: '#4A6FA3' },
    ]
  },

  // ── TEMPLATE 5: Elegant Minimalist ──
  {
    id: 'elegant-minimalist',
    name: 'Elegant Minimalist',
    kategori: 'pernikahan',
    kategoriLabel: 'Pernikahan',
    subtitle: 'Wedding Invitation',
    ornament: '—',
    previewTitle: 'Kevin & Olivia',
    previewDate: 'Saturday, May 17, 2025',
    defaultTheme: 'ivory',
    badge: 'Baru',
    demoFile: 'undangan/elegant-minimalist.html',
    price: 'Rp 175.000',
    themes: [
      { key: 'ivory',   label: 'Off White',      color: '#8C7040' },
      { key: 'slate',   label: 'Soft Blue',      color: '#4A6FA3' },
      { key: 'gold',    label: 'Champagne',      color: '#C9A84C' },
      { key: 'sakura',  label: 'Blush Pink',     color: '#C45C7A' },
    ]
  },

  // ── TEMPLATE 6: Birthday Bash ──
  {
    id: 'birthday-bash',
    name: 'Birthday Celebration',
    kategori: 'ultah',
    kategoriLabel: 'Ulang Tahun',
    subtitle: 'Undangan Ulang Tahun',
    ornament: '🎂',
    previewTitle: 'Happy 17th Birthday\nZahira',
    previewDate: 'Selasa, 25 November 2025',
    defaultTheme: 'sakura',
    badge: null,
    demoFile: 'undangan/birthday-bash.html',
    price: 'Rp 100.000',
    themes: [
      { key: 'sakura',  label: 'Pink Fun',       color: '#C45C7A' },
      { key: 'slate',   label: 'Blue Cool',      color: '#4A6FA3' },
      { key: 'gold',    label: 'Gold Luxury',    color: '#C9A84C' },
      { key: 'terra',   label: 'Orange Warm',    color: '#C46A3A' },
    ]
  },

  // ── TEMPLATE 7: Khitan Modern ──
  {
    id: 'khitan-modern',
    name: 'Khitan Modern',
    kategori: 'khitan',
    kategoriLabel: 'Khitan',
    subtitle: 'Undangan Walimatul Khitan',
    ornament: '☽',
    previewTitle: 'Muhammad Rafi',
    previewDate: 'Sabtu, 7 Desember 2025',
    defaultTheme: 'slate',
    badge: null,
    demoFile: 'undangan/khitan-modern.html',
    price: 'Rp 100.000',
    themes: [
      { key: 'slate',   label: 'Biru Elegan',   color: '#4A6FA3' },
      { key: 'gold',    label: 'Gold Premium',   color: '#C9A84C' },
      { key: 'sage',    label: 'Hijau Segar',    color: '#5A8A6A' },
    ]
  },


  // ── TEMPLATE 8: Background Video ──
  {
    id: 'background-video',         // ID unik (huruf kecil, pakai strip)
    name: 'Background Video',       // Nama tampil di dashboard
    kategori: 'pernikahan',        // Kategori: pernikahan/akad/ultah/khitan/acara
    kategoriLabel: 'Pernikahan',   // Label kategori yang ditampilkan
    subtitle: 'Undangan Pernikahan', // Subtitle di preview card
    ornament: '❁',                 // Simbol ornamen (emoji atau unicode)
    previewTitle: 'Budi & Putri',  // Nama pasangan untuk preview
    previewDate: 'Sabtu, 5 April 2025', // Tanggal untuk preview
    defaultTheme: 'terra',         // Tema default saat pertama tampil
    badge: 'Baru',                 // Badge (null jika tidak ada)
    demoFile: 'undangan/background-video.html', // Path ke file HTML
    price: 'Rp 150.000',           // Harga
    themes: [
      { key: 'terra',  label: 'Rustic Terra',  color: '#C46A3A' },
      { key: 'sage',   label: 'Bohemian Sage', color: '#5A8A6A' },
      { key: 'ivory',  label: 'Cream Classic', color: '#8C7040' },
      { key: 'sakura', label: 'Blush Pink',    color: '#C45C7A' },
      { key: 'terra',  label: 'Orange Warm',   color: '#C46A3A' },
      { key: 'gold',   label: 'Gold Luxury',   color: '#C9A84C' },
    ]
  },
  


  // ══════════════════════════════════════════════
  // TAMBAHKAN TEMPLATE BARU DI BAWAH INI
  // Salin template di atas dan sesuaikan!
  // ══════════════════════════════════════════════

];
