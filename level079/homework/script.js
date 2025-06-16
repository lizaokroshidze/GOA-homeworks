const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

// ფუნქცია სლაიდერის განახლებისთვის
function updateSlide() {
  const slideWidth = images[0].clientWidth;
  slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

// ღილაკების მოვლენა
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateSlide();
});

// ფანჯრის გადიდებისას ზომის განახლება
window.addEventListener('resize', updateSlide);

// თავიდან ჩატვირთვისას განახლება
window.addEventListener('load', updateSlide);