var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
});

var swiper = new Swiper(".FlashdealSwiper", {
    pagination: {
        el: ".swiper-pagination",
      },
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    
});


var swiper = new Swiper(".HotDealsSwiper", {
   
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //   },
    
});

var swiper = new Swiper(".TopDealsSwiper", {
    
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    
});




// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}