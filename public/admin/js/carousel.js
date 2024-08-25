document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelector('.carousel-slides');
    const slideCount = document.querySelectorAll('.carousel-slide').length;
    const slideWidth = document.querySelector('.carousel-slide').offsetWidth;
    let currentIndex = 0;
  
    document.querySelector('.carousel-control.next').addEventListener('click', () => {
      if (currentIndex < slideCount - 3) { // Adjust for visible slides
        currentIndex++;
        updateCarousel();
      }
    });
  
    document.querySelector('.carousel-control.prev').addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    function updateCarousel() {
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  });