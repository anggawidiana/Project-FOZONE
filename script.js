// script.js
// Navbar Start
const navbarLinks = document.querySelectorAll(".navbar a");

navbarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    navbarLinks.forEach((link) => link.classList.remove("active"));
    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});
//Navbar End

//Klik Kanan
document.addEventListener("contextmenu", function (e) {
  if (e.target.tagName === "IMG" && e.target.closest(".about")) {
    e.preventDefault();
  }
});
//Klik Kanan

//scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
