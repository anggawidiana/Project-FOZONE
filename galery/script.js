document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("preloader");

  // Simpan dalam variabel dan tambahkan event listener
  window.addEventListener("load", function () {
    // Delay untuk menunggu gambar dan elemen lainnya dimuat
    setTimeout(function () {
      loader.style.opacity = 0; // Tambahkan efek fade-out
      setTimeout(function () {
        loader.style.display = "none"; // Sembunyikan preloader setelah efek fade-out
      }, 500); // Waktu delay untuk efek fade-out
    }, 3000); // Waktu tampil preloader
  });
});
