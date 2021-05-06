
// slideShow testinomial and cars
var slideIndex = 1;
showSlides(slideIndex,'cars');
showSlides(slideIndex, "testinomial");

function plusSlides(n,slide) {
  showSlides((slideIndex += n),slide);
}


function showSlides(n,slide) {
  var i;
  if(slide == "cars"){
      var slides = document.querySelectorAll(".item");
  }
  if(slide == "testinomial"){
      var slides = document.querySelectorAll(".testinomial");
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}


// slideShow press
var pressSlideIndex = 1

function pressSlide(n, slide) {
  showPress((pressSlideIndex += n), slide);
}

function showPress(n,slide){
  var i;
  var slides = document.querySelectorAll(".pressSlide");
  if(n>slides.length){
    pressSlideIndex = slides.length;
  }
  if (n < 1) {
    pressSlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if(slide === "rightToLeft"){
    slides[pressSlideIndex - 1].classList.add("rightToLeft");
  }else{
    slides[pressSlideIndex - 1].classList.add("leftToRight");
  }
  slides[pressSlideIndex - 1].style.display = "block";
  setTimeout(() => {
    if(slide === "rightToLeft"){
      slides[pressSlideIndex - 1].classList.remove("rightToLeft");
    }else{
      slides[pressSlideIndex - 1].classList.remove("leftToRight");
    }
    
  }, 1000);
}
showPress(pressSlideIndex, "rightToLeft");
