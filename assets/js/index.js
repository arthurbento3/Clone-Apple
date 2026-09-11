document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('tvSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (slider && prevBtn && nextBtn) {
    const cardWidth = 870;


    nextBtn.addEventListener('click', () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    });

    prevBtn.addEventListener('click', () => {
      if (slider.scrollLeft <= 10) {
        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});