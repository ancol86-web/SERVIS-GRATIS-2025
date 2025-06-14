// Menampilkan notifikasi sambutan saat halaman selesai dimuat
window.addEventListener('load', function () {
  alert("Selamat datang di Service Gratis BSO Bengkel HMDM ITS!");
});

// Fungsi untuk menampilkan informasi tambahan ketika tombol diklik
function showMoreInfo() {
  const info = `
- Servis Mobil dan Motor GRATIS 
- Cuci motor GRATIS
- Konsultasi mesin dengan teknisi berpengalaman
Lokasi: ITS Kampus Teknik Mesin
Jadwal: 13 - 14 SEPTEMBER 2025
  `;
  alert(info);
}

// Fungsi validasi formulir pendaftaran
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Validasi input kosong
  if (name === "" || phone === "") {
    alert("Mohon lengkapi semua data sebelum submit!");
    return false;
  }

  // Validasi format nomor HP (hanya angka dan panjang 9-15 digit)
  const phoneRegex = /^[0-9]{9,15}$/;
  if (!phoneRegex.test(phone)) {
    alert("Nomor HP tidak valid! Masukkan hanya angka dengan panjang 9-15 digit.");
    return false;
  }

  // Jika lolos semua validasi
  alert("Form berhasil dikirim. Sampai jumpa di lokasi!");
  return true;
}
