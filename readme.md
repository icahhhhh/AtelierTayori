# 📋 Undanganku — Panduan Penggunaan

## Struktur File

```
/
├── index.html              → Dashboard utama (halaman web kamu)
├── templates-config.js     → Konfigurasi semua template
└── undangan/
    ├── sakura-garden.html  → Template pernikahan - Sakura Garden
    ├── royal-gold.html     → Template pernikahan - Royal Gold
    ├── akad-islami.html    → Template akad nikah - Islami
    ├── birthday-bash.html  → Template ulang tahun
    └── [tambah di sini]    → Template baru kamu
```

---

## 🎨 Cara Menambah Template Baru

### Step 1: Buat file HTML undangan baru
- Copy salah satu file di folder `undangan/`
- Rename sesuai nama template (contoh: `undangan/rustic-bohemian.html`)
- Edit isi undangan sesuai kebutuhan

### Step 2: Daftarkan di `templates-config.js`
Buka file `templates-config.js` dan tambahkan objek baru di akhir array:

```javascript
{
  id: 'rustic-bohemian',         // ID unik (huruf kecil, pakai strip)
  name: 'Rustic Bohemian',       // Nama tampil di dashboard
  kategori: 'pernikahan',        // Kategori: pernikahan/akad/ultah/khitan/acara
  kategoriLabel: 'Pernikahan',   // Label kategori yang ditampilkan
  subtitle: 'Undangan Pernikahan', // Subtitle di preview card
  ornament: '❁',                 // Simbol ornamen (emoji atau unicode)
  previewTitle: 'Budi & Putri',  // Nama pasangan untuk preview
  previewDate: 'Sabtu, 5 April 2025', // Tanggal untuk preview
  defaultTheme: 'terra',         // Tema default saat pertama tampil
  badge: 'Baru',                 // Badge (null jika tidak ada)
  demoFile: 'undangan/rustic-bohemian.html', // Path ke file HTML
  price: 'Rp 150.000',           // Harga
  themes: [
    { key: 'terra',  label: 'Rustic Terra',  color: '#C46A3A' },
    { key: 'sage',   label: 'Bohemian Sage', color: '#5A8A6A' },
    { key: 'ivory',  label: 'Cream Classic', color: '#8C7040' },
  ]
},
```

### Tema yang tersedia (key):
| Key | Nama | Warna |
|-----|------|-------|
| `sakura` | Sakura Pink | #C45C7A |
| `sage` | Sage Green | #5A8A6A |
| `gold` | Gold Dark | #C9A84C |
| `slate` | Slate Blue | #4A6FA3 |
| `terra` | Terra Cotta | #C46A3A |
| `ivory` | Ivory Classic | #8C7040 |

---

## 🎭 Cara Menambah Tema Warna Baru ke Template

Di setiap file HTML undangan, tema warna dikontrol lewat CSS variables.
Tambahkan selector baru di bagian atas `<style>`:

```css
body[data-tema="namabaru"] {
  --bg1: #warna1;
  --bg2: #warna2;
  --accent: #warna-utama;
  --accent2: #warna-pendukung;
  --text: #warna-teks;
  --soft: #warna-teks-soft;
  --ornament: #warna-ornamen;
  --divider: rgba(r,g,b,.3);
}
```

---

## 📂 Kategori Template

| ID | Label | Keterangan |
|----|-------|------------|
| `pernikahan` | Pernikahan | Undangan pernikahan/resepsi |
| `akad` | Akad Nikah | Khusus acara akad |
| `ultah` | Ulang Tahun | Birthday party |
| `khitan` | Khitan | Walimatul khitan |
| `acara` | Acara Umum | Event profesional/umum |

---

## 💡 Tips

- Template **Sakura Garden** cocok sebagai base untuk template baru (kode paling lengkap)
- File `templates-config.js` adalah satu-satunya file yang perlu diubah saat menambah template baru
- Semua tema warna diatur via CSS variables — mudah dikustomisasi
- Countdown otomatis berjalan saat undangan dibuka
- RSVP dan ucapan disimpan sementara di memori browser (untuk production, integrasikan dengan backend/Firebase)

---

*Dibuat dengan ♥ oleh Undanganku*