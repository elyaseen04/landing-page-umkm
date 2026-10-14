// ==========================================
// 1. FUNGSI PROMO (Untuk Halaman Beranda / index.html)
// ==========================================
function tampilkanPilihanPromo() {
  const wadah = document.getElementById('wadah-promo');

  // Jika elemen wadah-promo tidak ada di halaman saat ini (misal sedang di halaman kontak), hentikan fungsi agar tidak error
  if (!wadah) return;

  // Jika pilihan promo sudah ada dan sedang tampil, sembunyikan saat tombol diklik lagi (toggle)
  if (wadah.childElementCount > 0 && !wadah.classList.contains('hidden')) {
    wadah.classList.add('hidden');
    return;
  }

  // Masukkan elemen Pilihan Promo ke dalam wadah
  wadah.innerHTML = `
    <div class="box-pilihan-promo">
      <h3>🎁 Pilih Promo Kamu Hari Ini:</h3>
      <div class="list-opsi">
        <button class="btn-opsi" onclick="pilihPromo('Buy 1 Get 1 Es Kopi Susu Aren')">
          ☕ <strong>Paket Hemat:</strong> Buy 1 Get 1 Es Kopi Susu Aren
        </button>
        <button class="btn-opsi" onclick="pilihPromo('Diskon 20% Semua Variant V60')">
          🔥 <strong>Diskon 20%:</strong> Khusus Pembelian Manual Brew V60
        </button>
        <button class="btn-opsi" onclick="pilihPromo('Gratis Toast Cokelat Setiap Beli 2 Kopi')">
          🍞 <strong>Free Snack:</strong> Gratis Toast Cokelat (Min. 2 Kopi)
        </button>
      </div>
      <p id="pesan-konfirmasi" class="pesan-konfirmasi" style="display: none;"></p>
    </div>
  `;

  // Tampilkan wadah promo
  wadah.classList.remove('hidden');
}

// Fungsi ketika pengguna mengeklik salah satu tombol opsi promo
function pilihPromo(namaPromo) {
  const pesan = document.getElementById('pesan-konfirmasi');
  if (!pesan) return;
  pesan.style.display = 'block';
  pesan.innerHTML = `✅ Kamu memilih: <strong>${namaPromo}</strong>.<br>Tunjukkan pesan ini ke kasir saat memesan!`;
}


// ==========================================
// 2. FUNGSI FORM KONTAK & PREVIEW (Untuk Halaman Kontak / kontak.html)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-kontak");
  
  // Hanya jalankan kode form ini jika elemen #form-kontak benar-benar ada di halaman tersebut
  if (form) {
    const preview = document.querySelector("#preview-form");

    form.addEventListener("submit", (event) => {
      // Mencegah reload halaman
      event.preventDefault();
      
      // Mengambil data input menggunakan FormData
      const data = new FormData(form);
      
      // Menampilkan seluruh data ke area preview
      if (preview) {
        preview.textContent = [
          `Nama: ${data.get("nama")}`,
          `Email: ${data.get("email")}`,
          `WhatsApp: ${data.get("whatsapp")}`,
          `Paket: ${data.get("paket")}`,
          `Topik: ${data.get("topik")}`,
          `Waktu Kontak: ${data.get("waktu")}`,
          `Pesan: ${data.get("pesan")}`,
        ].join("\n");
      }
    });
  }
});