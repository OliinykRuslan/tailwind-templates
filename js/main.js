AOS.init({
  once: true,
  disable: 'phone',
  duration: 500,
  easing: 'ease-out-cubic',
});

const clientsEl = document.querySelectorAll('.clients-carousel');
if (clientsEl.length > 0) {
  const clients = new Swiper('.clients-carousel', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    speed: 5000,
    noSwiping: true,
    noSwipingClass: 'swiper-slide',
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },    
  });
}
