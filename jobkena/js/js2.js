function btn1_1(){
    document.querySelector(".btn1-1").classList.toggle("active3");
    document.querySelector(".btn1-2").classList.remove("active3");
    
  }
  function btn1_2(){
    document.querySelector(".btn1-2").classList.toggle("active3");
    document.querySelector(".btn1-1").classList.remove("active3");
    
  }
  
  function btn2_1(){
    document.querySelector(".btn2-1").classList.toggle("active3");
    document.querySelector(".btn2-2").classList.remove("active3");
    document.querySelector(".btn2-3").classList.remove("active3");
    document.querySelector(".btn2-4").classList.remove("active3");

    
  }
  function btn2_2(){
    document.querySelector(".btn2-2").classList.toggle("active3");
    document.querySelector(".btn2-1").classList.remove("active3");
    document.querySelector(".btn2-3").classList.remove("active3");
    document.querySelector(".btn2-4").classList.remove("active3");

    
  }
  function btn2_3(){
    document.querySelector(".btn2-3").classList.toggle("active3");
    document.querySelector(".btn2-2").classList.remove("active3");
    document.querySelector(".btn2-1").classList.remove("active3");
    document.querySelector(".btn2-4").classList.remove("active3");

    
  }
  
  function btn2_4(){
    document.querySelector(".btn2-4").classList.toggle("active3");
    document.querySelector(".btn2-1").classList.remove("active3");
    document.querySelector(".btn2-3").classList.remove("active3");
    document.querySelector(".btn2-2").classList.remove("active3");

    
  }
  function seemore(){
    document.querySelector(".item-see").classList.toggle("show");
    document.querySelector(".item-see2").classList.toggle("show");
    document.querySelector(".item-see1").classList.toggle("show");
    document.querySelector(".item-see3").classList.toggle("show");
    document.querySelector(".item-see4").classList.toggle("show");
    document.querySelector(".main-sp-2-left-content").classList.toggle("width");
    var seemorebtn1=document.getElementById(seemorebtn);
    seemorebtn1.innerHTML="Thu Gọn"
    

    
  }
  
  function openCity(cityName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.color = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
    elmnt.style.color = "#fff";
  
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();