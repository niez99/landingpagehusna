// Simple interactive animations for the landing page

// Button hover glow effect handled by CSS, so no JS needed for that

// Scroll animation for features section
document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature-item');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  features.forEach(feature => {
    observer.observe(feature);
  });
});
