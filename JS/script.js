//navbar on and off 
function toggleNavbar() {
  const navbar = document.querySelector('.navbar-container');
  navbar.style.display = navbar.style.display === 'none' ? 'block' : 'none';
}

//HTML с класове '.comments' и '.comments-container'
const comments = document.querySelector('.comments');
const commentContainer = document.querySelector('.comments-container');

//ширината на един слайд, като предполагаме, че са видими 3 слайда едновременно
const slideWidth = comments.clientWidth / 3;

//променлива, която ще показва текущия индекс на слайда
let currentIndex = 0;

// Функция за преминаване към следващ слайд
function nextSlide() {
  currentIndex++;
  if (currentIndex >= Math.ceil(commentContainer.children.length / 3)) {
    currentIndex = 0;
  }
  updateSlider();
}

// Функция за обновяване на слайдера
function updateSlider() {
  const offset = -currentIndex * slideWidth * 3;
  commentContainer.style.transform = `translateX(${offset}px)`;
}

// Функция за преминаване към предишен слайд
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = Math.ceil(commentContainer.children.length / 3) - 1;
  }
  updateSlider();
}

// HTML с '.prev-button' и '.next-button'
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

//бутоните за предишен и следващ слайд
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
