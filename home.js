// navbar

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');    
}

// start search bar code

const icon=document.querySelector('.icon');
const search=document.querySelector('.search');
icon.onclick=function(){
  search.classList.toggle('active')
  clear.classList.toggle('hide')
}
// if(search.classList==='active'){
//   clear.classList.add('hide')

// }else{
//   clear.classList.remove()
// }

// fix this codes
const clear=document.querySelector('.clear');
const searchInput=document.querySelector('#searchInput');
console.log(searchInput.value)
clear.onclick=function(){
  document.querySelector('#searchInput').value=''
}


// end of search bar code

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

// start slider code



    // Initialize Swiper 
    // <script>
      var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        loop:true
      });
    /* </script> */

// end of slider code

// --------------------------------------------------------------------
// --------------------------------------------------------------------