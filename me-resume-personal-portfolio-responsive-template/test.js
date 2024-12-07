let currentIndex = 0;

function updateCarousel() {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  // Update the carousel transform
  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Move to the next slide
  currentIndex = (currentIndex + 1) % totalSlides;
}

// Set the carousel to slide every 4 seconds
setInterval(updateCarousel, 4000);
