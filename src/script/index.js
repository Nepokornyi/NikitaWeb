let slideIndexLeft = 1;
showSlidesLeft(slideIndexLeft);

function plusSlidesLeft(n) {
  showSlidesLeft(slideIndexLeft += n);
}

function currentSlideLeft(n) {
  showSlidesLeft(slideIndexLeft = n);
}

function showSlidesLeft(n) {
  let i;
  let slides = document.getElementsByClassName("myLeftSlides");
  let dots = document.getElementsByClassName("leftDot");
  if (n > slides.length) {slideIndexLeft = 1}    
  if (n < 1) {slideIndexLeft = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexLeft-1].style.display = "block";  
  dots[slideIndexLeft-1].className += " active";
}

// --------------------------------






// --------------------------------

let slideIndexRight = 1;
showSlidesRight(slideIndexRight);

function plusSlidesRight(n) {
  showSlidesRight(slideIndexRight += n);
}

function currentSlideRight(n) {
  showSlidesRight(slideIndexRight = n);
}

function showSlidesRight(n) {
  let i;
  let slides = document.getElementsByClassName("myRightSlides");
  let dots = document.getElementsByClassName("rightDot");
  if (n > slides.length) {slideIndexRight = 1}    
  if (n < 1) {slideIndexRight = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexRight-1].style.display = "block";  
  dots[slideIndexRight-1].className += " active";
}


