// Update copyright year dynamically
const currentYear = new Date().getFullYear();
const copyrightYearEl = document.getElementById('copyright-year');
if (copyrightYearEl) {
    if (currentYear > 2025) {
        copyrightYearEl.textContent = `2025-${currentYear}`;
    } else {
        copyrightYearEl.textContent = '2025';
    }
}

// Navigation scroll effect
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for orbs
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.orb');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        orb.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu?.querySelectorAll('a');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking a link
    mobileMenuLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Hero seed interaction - 3D Tilt & Pulse
const seedContainer = document.getElementById('hero-seed-container');
const seed = document.getElementById('hero-seed');
const pulseRing = seed?.querySelector('.pulse-ring');

if (seedContainer && seed) {
    // Desktop 3D Tilt
    seedContainer.addEventListener('mousemove', (e) => {
        const rect = seedContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation (max 15 degrees)
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        seed.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        seed.classList.add('interacting');
    });

    seedContainer.addEventListener('mouseleave', () => {
        seed.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        seed.classList.remove('interacting');
    });
    
    // Mobile/Click Pulse
    seed.addEventListener('click', (e) => {
        // Prevent default tracking on touch if needed, but mainly trigger pulse
        if (pulseRing) {
            pulseRing.classList.remove('active');
            void pulseRing.offsetWidth; // Trigger reflow
            pulseRing.classList.add('active');
        }
        
        // Add temporary interaction state
        seed.classList.add('interacting');
        setTimeout(() => {
            seed.classList.remove('interacting');
        }, 600);
    });
}

