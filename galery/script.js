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
  const welcomePage = document.querySelector(".welcome-page");
  const overlay = document.querySelector(".overlay");
  const closeIcon = document.getElementById("close-icon");

  // Show overlay and welcome page
  function showWelcomePage() {
    overlay.style.display = "block";
    welcomePage.style.display = "flex";
    overlay.classList.add("fadeIn");
    welcomePage.classList.add("fadeIn");
  }

  // Hide overlay and welcome page
  function hideWelcomePage() {
    welcomePage.classList.remove("fadeIn");
    overlay.classList.remove("fadeIn");
    welcomePage.classList.add("fadeOut");
    overlay.classList.add("fadeOut");
    setTimeout(function () {
      welcomePage.style.display = "none";
      overlay.style.display = "none";
      overlay.classList.remove("fadeOut");
      welcomePage.classList.remove("fadeOut");
    }); // Match the fadeOut animation duration
  }

  // Automatically hide the welcome page after 2 seconds
  setTimeout(function () {
    hideWelcomePage();
  }, 20000);

  // Add event listener to close icon
  closeIcon.addEventListener("click", function () {
    hideWelcomePage();
  });

  // Initially show the welcome page and overlay
  showWelcomePage();
});
