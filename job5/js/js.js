
        var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("demo");
          var captionText = document.getElementById("caption");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active1", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active1";
          captionText.innerHTML = dots[slideIndex-1].alt;
        }
function fun1(){
    document.getElementById("black-color").style.border="2px solid red";
    document.getElementById("red-color").style.border="2px solid #fff";
}
function fun2(){
    document.getElementById("red-color").style.border="2px solid red";
    document.getElementById("black-color").style.border="2px solid #fff";
}