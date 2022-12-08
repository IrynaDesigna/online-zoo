;(function () {
  "use strict";

// PETS slider
const gap = 26;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


// POPUP
  const popOpen = document.getElementsByClassName('pop-wrap'),
        closePop = document.getElementsByClassName('pop-close-btn');

  if (window.innerWidth < 1000) {
    for (let i = 0; i < popOpen.length; i++) {
      popOpen[i].addEventListener('click', popOpenFn);
    }
  }

  if (window.innerWidth < 1000) {
    for (let i = 0; i < closePop.length; i++) {
      closePop[i].addEventListener('click', popCloseFn);
    }
  }

  function popOpenFn() {
    this.classList.toggle('open');
  }

  function popCloseFn() {
    this.parentElement.classList.add('open');
  }

  // Testimonials scroll

  const range = document.querySelector('input[type="range"]'),
        num = document.getElementsByClassName('testimonial').length,
        testimonialsContainer = document.getElementById('testimonials-container'),
        testimonialWrap = document.getElementById('testimonial-wrap');



  let position = range.value;
  console.log(position);

  var rangeScroll = function(){
    console.log(position);


    let scrollwidth = ( (testimonialWrapWidth*num) + ((num-1) * gap) )/8;

    if (position < range.value) {
      testimonialsContainer.scrollBy(scrollwidth, 0);
    }

    if (position > range.value){
      testimonialsContainer.scrollBy(0-scrollwidth, 0);
    }

    position = range.value;
    console.log(position);

  }

  let testimonialWrapWidth = testimonialWrap.offsetWidth;
  window.addEventListener("resize", e => (testimonialWrapWidth = testimonialWrap.offsetWidth));

  range.addEventListener("input", rangeScroll);




})();
