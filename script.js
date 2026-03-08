document.addEventListener("DOMContentLoaded", () => {

const fadeElements = document.querySelectorAll(".fade");

function checkFade() {

fadeElements.forEach((el) => {

const position = el.getBoundingClientRect().top;
const screenPosition = window.innerHeight * 0.8;

if(position < screenPosition){
el.classList.add("show");
}

});

}

window.addEventListener("scroll", checkFade);
checkFade();

});

const images = document.querySelectorAll(".work-img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-content");

images.forEach(img => {

img.addEventListener("click", () => {

modal.style.display = "flex";
modalImg.src = img.src;

});

});

modal.addEventListener("click", () => {

modal.style.display = "none";

});