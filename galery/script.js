// const loader = document.getElementById("preloader");
// window.addEventListener("load", function () {
//   loader.style.display = "none";
//   setTimeout(function () {
//     preload.classList.add("preload-finish");
//   }, 1000);
// });

window.addEventListener("load", () => {
  const preload = document.getElementById("preloader");
  preload.style.display = "none";
  setTimeout(function () {
    preload.classList.add("preload-finish");
  }, 5000);
});
