const form = document.getElementById("form-kontak");
const preview = document.getElementById("preview-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const paket = document.getElementById("paket").value;
    const topik = form.querySelector('input[name="topik"]:checked');
    const waktu = form.querySelector('input[name="waktu"]:checked');
    const pesan = document.getElementById("pesan").value.trim();

    const labelPaket = {
        rumahan: "Paket Rumahan",
        bisnis: "Paket Bisnis",
        usaha: "Paket Usaha"
    };

    const labelTopik = {
        produk: "Informasi Produk",
        kerja sama: "Kerja Sama",
        lainnya: "Lainnya"
    };

    const labelWaktu = {
        pagi: "Pagi",
        siang: "Siang",
        sore: "Sore",
        malam: "Malam"
    };

    preview.textContent =
        "PREVIEW DATA KONTAK\n\n" +
        "Nama: " + nama + "\n" +
        "Email: " + email + "\n" +
        "WhatsApp: " + whatsapp + "\n" +
        "Paket: " + (labelPaket[paket] || paket) + "\n" +
        "Topik: " + (topik ? topik.value : "-") + "\n" +
        "Waktu yang diinginkan: " +
        (waktu ? (labelWaktu[waktu.value] || waktu.value) : "-") + "\n" +
        "Pesan: " + pesan;
});