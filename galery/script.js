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
    }, 2000); // Waktu tampil preloader
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const welcome = document.querySelector(".welcome-page");

  setTimeout(function () {
    welcome.style.animation = "fadeOut 1s ease-out";
    setTimeout(function () {
      welcome.style.display = "none";
    }, 1000); // Match the fadeOut animation duration
  }, 6000); // Duration before the welcome message starts to disappear
});
