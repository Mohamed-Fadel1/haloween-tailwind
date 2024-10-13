
//^ ===================== menu navbar =======================
const humbergur = document.getElementById("humbergur");
const menuList = document.getElementById("menu-ul");

humbergur.addEventListener("click" , ()=>{
    menuList.classList.toggle("hidden")
})


//^================== Scroll Up ========================

const scrollup = document.getElementById("scroll-up");

window.addEventListener("scroll" , ()=>{
    if (window.scrollY >= 400) {
        scrollup.classList.remove("hidden");
        scrollup.classList.add("block");
    
    } else {
        scrollup.classList.remove("add");
        scrollup.classList.add("hidden");
        
    }
}) 

//^ ================ loader =================

const loader = document.getElementById("loader");

window.addEventListener("load" , ()=>{
  setTimeout(() => {
    loader.style.display = "none"
  }, 2000);
})

//^ ===================== Scroll Reveal =======================

ScrollReveal().reveal('.img-home', { 
    origin: 'left', 
    distance: '20px', 
    duration: 1000, 
    delay: 200,
    reset: true 
  });

  ScrollReveal().reveal('.content-home ', { 
    origin: 'right', 
    distance: '20px', 
    duration: 1000, 
    delay: 400,
    reset: true 
  });


  
  ScrollReveal().reveal('.img-about', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1000, 
    delay: 200,
    reset: true 
  });


  ScrollReveal().reveal('.content-about', { 
    origin: 'top', 
    distance: '30px', 
    duration: 1000, 
    delay: 200,
    reset: true 
  });


  ScrollReveal().reveal('.card', { 
    origin: 'bottom', 
    distance: '35px', 
    duration: 1000, 
    interval: 200,
    reset: true 
  });

  
  ScrollReveal().reveal('.card-r', { 
    origin: 'right', 
    distance: '30px', 
    duration: 1000, 
    interval: 200,
    reset: true 
  });



  ScrollReveal().reveal('.img-party ', { 
    origin: 'right', 
    distance: '25px', 
    duration: 1000, 
    interval: 200,
    reset: true 
  });



  ScrollReveal().reveal('.content-party', { 
    origin: 'bottom', 
    distance: '30px', 
    duration: 1100, 
    delay: 300,
    reset: true 
  });



  ScrollReveal().reveal('#footer1', { 
    origin: 'bottom', 
    distance: '40px', 
    duration: 1100, 
    delay: 300,
    reset: true 
  });


  ScrollReveal().reveal('.img-left', { 
    origin: 'left', 
    distance: '20px', 
    duration: 1000, 
    interval: 200,
    reset: true 
  });
  

  ScrollReveal().reveal('.img-right', { 
    origin: 'right', 
    distance: '20px', 
    duration: 1000, 
    interval: 200,
    reset: true 
  });
  
