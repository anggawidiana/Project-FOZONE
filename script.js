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
// Navbar End

// Klik Kanan
document.addEventListener("contextmenu", function (e) {
  if (e.target.tagName === "IMG" && e.target.closest(".about")) {
    e.preventDefault();
  }
});
// Klik Kanan

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Form submission with loading spinner and success alert
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyTEOYswkhbarAtTH4VVWJ3v34JQJzSY9I-n-0cuOjtaoEyZUE9OGHF0tFnBcBs-tT-rA/exec";
const form = document.forms["fozone-contact-form"];
const submitButton = form.querySelector("button[type=submit]");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Add loading spinner
  submitButton.disabled = true;
  submitButton.classList.add("loading");
  submitButton.innerHTML = ' <div class="loading-spinner"></div>';

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Form submission successful
      console.log("Success!", response);
      alert("Form successfully submitted!");
      form.reset();
    })
    .catch((error) => {
      // Form submission failed
      console.error("Error!", error.message);
      alert("There was an error submitting the form. Please try again.");
    })
    .finally(() => {
      // Remove loading spinner
      submitButton.disabled = false;
      submitButton.classList.remove("loading");
      submitButton.innerHTML = "Send";
    });
});

const navLinks = document.querySelectorAll(".navbar-nav li a");

// Add a click event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Uncheck the checkbox to close the menu
    document.getElementById("check").checked = false;
  });
});
