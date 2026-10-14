// ==========================================
// 1. FUNGSI PROMO (Untuk Halaman Beranda)
// ==========================================
function tampilkanPilihanPromo() {
  const wadah = document.getElementById('wadah-promo');
  if (!wadah) return;

  if (wadah.childElementCount > 0 && !wadah.classList.contains('hidden')) {
    wadah.classList.add('hidden');
    return;
  }

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
  wadah.classList.remove('hidden');
}

function pilihPromo(namaPromo) {
  const pesan = document.getElementById('pesan-konfirmasi');
  if (!pesan) return;
  pesan.style.display = 'block';
  pesan.innerHTML = `✅ Kamu memilih: <strong>${namaPromo}</strong>.<br>Tunjukkan pesan ini ke kasir saat memesan!`;
}

// ==========================================
// 2. FUNGSI FORM KONTAK & PREVIEW
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-kontak");
  const preview = document.querySelector("#preview-form");

  if (form && preview) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Mencegah reload halaman

      // Ambil nilai dari setiap input
      const nama = form.querySelector("#nama")?.value || "";
      const email = form.querySelector("#email")?.value || "";
      const whatsapp = form.querySelector("#whatsapp")?.value || "";
      const paket = form.querySelector("#paket")?.value || "";
      
      const topikEl = form.querySelector('input[name="topik"]:checked');
      const topik = topikEl ? topikEl.value : "-";

      const waktuEl = form.querySelector('input[name="waktu"]:checked');
      const waktu = waktuEl ? waktuEl.value : "-";

      const pesan = form.querySelector("#pesan")?.value || "";

      // Masukkan ke dalam teks preview
      preview.textContent = 
        `Nama: ${nama}\n` +
        `Email: ${email}\n` +
        `WhatsApp: ${whatsapp}\n` +
        `Paket: ${paket}\n` +
        `Topik: ${topik}\n` +
        `Waktu Kontak: ${waktu}\n` +
        `Pesan: ${pesan}`;
    });
  }
});