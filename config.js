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
    defaultTheme: 'terra',
    badge: null,
    demoFile: 'undangan/rustic-floral.html',
    price: 'Rp 150.000',
    themes: [
      { key: 'terra',   label: 'Rustic Terra',   color: '#C46A3A' },
      { key: 'sage',    label: 'Garden Sage',    color: '#5A8A6A' },
      { key: 'ivory',   label: 'Linen Ivory',    color: '#8C7040' },
      { key: 'sakura',  label: 'Dusty Rose',     color: '#C45C7A' },
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

  // ── TEMPLATE 8: Event Profesional ──
  {
    id: 'event-profesional',
    name: 'Event Profesional',
    kategori: 'acara',
    kategoriLabel: 'Acara Umum',
    subtitle: 'Undangan Acara',
    ornament: '◈',
    previewTitle: 'Annual Gala Night\n2025',
    previewDate: 'Jumat, 12 Desember 2025',
    defaultTheme: 'gold',
    badge: null,
    demoFile: 'undangan/event-profesional.html',
    price: 'Rp 125.000',
    themes: [
      { key: 'gold',    label: 'Black Gold',     color: '#C9A84C' },
      { key: 'slate',   label: 'Corporate Blue', color: '#4A6FA3' },
      { key: 'sage',    label: 'Nature Green',   color: '#5A8A6A' },
    ]
  },

  // ══════════════════════════════════════════════
  // TAMBAHKAN TEMPLATE BARU DI BAWAH INI
  // Salin template di atas dan sesuaikan!
  // ══════════════════════════════════════════════

];