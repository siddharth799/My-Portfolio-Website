document.addEventListener('scroll', ()=>{
  const header= document.querySelector('header');
  if(window.scrollY > 0 ){
    header.classList.add('active');
    
  }else{
    header.classList.remove('active');
  }
});


function myFunction() {
  var x = document.getElementById("n");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
      x.style.display = "block";
    }
  }
  
  
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("act");
      } else {
        reveals[i].classList.remove("act");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  preventDefault()