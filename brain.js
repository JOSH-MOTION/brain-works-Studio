const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.slide');
const dotContainer = document.getElementById('dot-container');
let currentIndex = 0;
const intervalDuration = 3000;
let intervalId;

function updateCarousel() {
  const newTransformValue = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + newTransformValue + ')';
}

function updateDots() {
  const dots = Array.from(dotContainer.children);
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
  updateDots();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
  updateDots();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
  updateDots();
}

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(i));
    dotContainer.appendChild(dot);
  }
}

createDots();

intervalId = setInterval(nextSlide, intervalDuration);




// Uncomment the following lines if you want to stop the automatic sliding when a button is clicked
// document.getElementById('prevButton').addEventListener('click', () => clearInterval(intervalId));
// document.getElementById('nextButton').addEventListener('click', () => clearInterval(intervalId));
