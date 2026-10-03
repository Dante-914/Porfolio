/* ============================================================
   1. HAMBURGER MENU (MOBILE)
============================================================ */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function setMenuState(isOpen) {
  hamburger.classList.toggle('active', isOpen);
  navLinks.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
}

hamburger.addEventListener('click', () => {
  setMenuState(!navLinks.classList.contains('open'));
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => setMenuState(false));
});

/* ============================================================
   2. TYPING EFFECT (HERO)
============================================================ */
const roles = [
  'Available for Projects',
  'Frontend Developer',
  'React Developer',
  'Freelance Engineer',
  'Building for the Web'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById('typedText');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeEffect() {
  if (prefersReducedMotion) {
    typedText.textContent = roles[0];
    return;
  }
  const current = roles[roleIndex];

  if (isDeleting) {
    typedText.textContent = current.substring(0, charIndex--);
  } else {
    typedText.textContent = current.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === current.length + 1) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}
typeEffect();

/* ============================================================
   3. SCROLL PROGRESS BAR
============================================================ */
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = percent + '%';
});

/* ============================================================
   4. SCROLL REVEAL IN + OUT (INTERSECTION OBSERVER)
============================================================ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.remove('exit');
    } else {
      // Element scrolled out — animate out based on direction
      if (entry.boundingClientRect.top < 0) {
        // scrolled past (above viewport)
        entry.target.classList.add('exit');
        entry.target.classList.remove('visible');
      }
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

/* ============================================================
   5. PARALLAX EFFECT (HERO PHOTO)
============================================================ */
const heroPhoto = document.querySelector('.hero-photo');

window.addEventListener('scroll', () => {
  if (prefersReducedMotion) return;
  const scrolled = window.scrollY;
  if (heroPhoto && scrolled < window.innerHeight) {
    heroPhoto.style.transform = `translateY(${scrolled * 0.15}px)`;
  }
});

/* ============================================================
   6. ACTIVE NAV LINK ON SCROLL
============================================================ */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.id;
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

/* ============================================================
   7. BACK TO TOP BUTTON
============================================================ */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   8. CONTACT FORM VALIDATION
============================================================ */
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  formSuccess.textContent = '';

  // Validation (same as before)
  if (nameInput.value.trim().length < 2) {
    document.getElementById('nameError').textContent = 'Please enter your name.';
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (messageInput.value.trim().length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  if (!valid) return;

  // Submit to Netlify
  const formData = new FormData(contactForm);
  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    });

    if (!res.ok) throw new Error('Form submission failed');

    formSuccess.textContent = 'Thanks! Your message has been sent.';
    contactForm.reset();
  } catch (err) {
    console.error(err);
    formSuccess.textContent = 'Something went wrong. Please email me directly at danieludensi@gmail.com';
  }
});

/* ============================================================
   9. FOOTER YEAR
============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================================
   10. PHOTO UPLOAD (CLICK TO CHANGE PHOTO)
============================================================ */
const photoUpload = document.getElementById('photoUpload');
const profileImg = document.getElementById('profileImg');

function triggerPhotoUpload() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      profileImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  input.click();
}

photoUpload.addEventListener('click', triggerPhotoUpload);

// Keyboard access: make the photo focusable/activatable like a real control
photoUpload.setAttribute('role', 'button');
photoUpload.setAttribute('tabindex', '0');
photoUpload.setAttribute('aria-label', 'Change profile photo');
photoUpload.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    triggerPhotoUpload();
  }
});