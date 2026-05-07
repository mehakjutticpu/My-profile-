// ============================
//  SARDAR RDX – Portfolio JS
// ============================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// Typed text animation
const phrases = [
  'Full Stack Developer',
  'WhatsApp Bot Builder',
  'Messenger Bot Creator',
  'Ethical Hacker & Tool Dev',
  'Social Media Automator',
  'Node.js / Python Expert'
];
let phraseIndex = 0, charIndex = 0, deleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 50 : 80);
}
type();

// Scroll reveal
const revealEls = document.querySelectorAll('.about-card, .skill-card, .spec-item, .project-card, .contact-card, .contact-form-wrap, .stat-item');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// Counter animation
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  let count = 0;
  const step = Math.max(1, Math.floor(target / 50));
  const timer = setInterval(() => {
    count += step;
    if (count >= target) { count = target; clearInterval(timer); }
    el.textContent = count;
  }, 30);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));

// Contact form -> redirect to WhatsApp
function handleForm(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[type="text"]').value;
  const contact = form.querySelectorAll('input')[1].value;
  const type = form.querySelector('select').value;
  const msg = form.querySelector('textarea').value;

  const waMsg = encodeURIComponent(
    `*New Contact from Portfolio*\n\n` +
    `*Name:* ${name}\n` +
    `*Contact:* ${contact}\n` +
    `*Project Type:* ${type || 'Not specified'}\n` +
    `*Message:* ${msg}`
  );

  window.open(`https://wa.me/923301068874?text=${waMsg}`, '_blank');

  document.getElementById('formMsg').textContent = '✅ Opening WhatsApp...';
  setTimeout(() => { document.getElementById('formMsg').textContent = ''; }, 3000);
  form.reset();
}

// ====== PARTICLE CANVAS ======
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function Particle() {
  this.x = Math.random() * W;
  this.y = Math.random() * H;
  this.vx = (Math.random() - 0.5) * 0.4;
  this.vy = (Math.random() - 0.5) * 0.4;
  this.r = Math.random() * 1.5 + 0.3;
  this.alpha = Math.random() * 0.5 + 0.1;
}

Particle.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;
  if (this.x < 0) this.x = W;
  if (this.x > W) this.x = 0;
  if (this.y < 0) this.y = H;
  if (this.y > H) this.y = 0;
};

Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(0,245,255,${this.alpha})`;
  ctx.fill();
};

const COUNT = Math.min(120, Math.floor((W * H) / 12000));
for (let i = 0; i < COUNT; i++) particles.push(new Particle());

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,245,255,${0.05 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  drawLines();
  requestAnimationFrame(animate);
}
animate();
