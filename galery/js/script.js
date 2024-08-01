let song = document.getElementById("song");
song.volume = 0.5;
let video = document.getElementById("video");
video.volume = 0.4;

const loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 3000); // Timeout duration in milliseconds (3000 ms = 3 seconds)
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
