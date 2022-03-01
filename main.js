let imgsend = document.querySelector(".topimg");
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  console.log(slides);
  let dots = document.querySelectorAll(".round");
  console.log(dots);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    dots[i].classList.remove("active");
    dots[slideIndex - 1].style.backgroundColor = "#e5e5e5";
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.backgroundColor = "#39425d";
  dots[slideIndex - 1].classList.add("active");
}
