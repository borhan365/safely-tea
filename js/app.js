// Animate items
new WOW().init();

// Desktop sidebar
const menuBtn = document.getElementById('menuBtn'); 
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');

})

const cancelBtn = document.getElementById("cancelBtn"); 
cancelBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
})

const mobileMenuBtn = document.getElementById("mobileMenuBtn"); 
mobileMenuBtn.addEventListener("click", () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.add('active');
})

// Swiper slider home page product slider
var ProductSlider = new Swiper(".productSlider", {
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 10,
        },
        767: {
        slidesPerView: 2,
        spaceBetween: 10,
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 0,
        },
    }
  });