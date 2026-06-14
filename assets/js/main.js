// Nav scroll effect
const navbar = document.getElementById('navbar');
if(navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
}

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if(menu) menu.classList.toggle('open');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Week tabs
function switchWeek(id) {
  const ids = ['w1','w2','w3','w4'];
  document.querySelectorAll('.week-tab').forEach((t,i) => {
    t.classList.toggle('active', ids[i] === id);
  });
  document.querySelectorAll('.week-panel').forEach(p => {
    p.classList.toggle('active', p.id === id);
  });
}

// Ticker duplicate for seamless loop
const ticker = document.getElementById('ticker');
if(ticker) ticker.innerHTML += ticker.innerHTML;

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
