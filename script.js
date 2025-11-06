const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const logoList = document.querySelector(".logo-list");
const header = document.querySelector('.header');

closeIcon.style.display = "none";

menuIcon.addEventListener("click", () => {
  logoList.classList.add("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  logoList.classList.remove("active");
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
});
