function openSlideshow() { // Function to open/display the slideshow
  document.getElementById("mySlideshow").style.display = "block";
}

function closeSlideshow() { // Function to close/hide the slideshow
  document.getElementById("mySlideshow").style.display = "none";
}

var slideIndex = 1; // Establishes the slideIndex
showSlides(slideIndex);


function plusSlides(n) { // Next/Prev controls
  showSlides(slideIndex += n);
}


function currentSlide(n) { // Thumbnail  controls
  showSlides(slideIndex = n);
}

function showSlides(n) { // Displays the slides based on which one has been specified/clicked on
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("thumb");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


