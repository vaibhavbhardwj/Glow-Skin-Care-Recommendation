// Smooth scrolling for nav links
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight section on hover
document.querySelectorAll('.sector').forEach(section => {
  section.addEventListener('mouseenter', () => {
    section.style.backgroundColor = '#f0f8ff';
    section.style.transition = 'background-color 0.3s ease';
  });
  section.addEventListener('mouseleave', () => {
    section.style.backgroundColor = 'transparent';
  });
});


// Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.sector').forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});
