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

// Respect the user's OS "reduce motion" setting for pointer-driven motion.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Parallax effect for orbs
const parallaxOrbs = document.querySelectorAll('.orb');
document.addEventListener('mousemove', (e) => {
    if (prefersReducedMotion) return;
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    parallaxOrbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        // Use the independent `translate` property (not `transform`) so this parallax
        // composes with each orb's keyframe `transform` animation (float/pulse) and with
        // orb-3's translate(-50%,-50%) centering, instead of overwriting them.
        orb.style.translate = `${mouseX * speed}px ${mouseY * speed}px`;
    });
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu?.querySelectorAll('a');

if (mobileMenuBtn && mobileMenu) {
    const closeMobileMenu = () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active', isOpen);
        mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mobileMenuLinks?.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    // Close menu on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
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
        if (prefersReducedMotion) return;
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
        // Clear the inline transform (rather than pinning an identity transform) so the
        // ambient float-seed keyframe animation resumes instead of freezing after first hover.
        seed.style.transform = '';
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

// Nav σ mark: static while the hero σ loop is on screen, animated once it scrolls
// out of view — the hero animation "hands off" to the nav mark so only one σ loops
// at a time. Implemented by swapping the <img> between the static and animated SVGs.
const navLogoMark = document.querySelector('.logo .logo-icon');
const heroSeedForNav = document.getElementById('hero-seed');
if (navLogoMark && heroSeedForNav && 'IntersectionObserver' in window && !prefersReducedMotion) {
    const NAV_STATIC = 'assets/images/sigma-mark.svg';
    const NAV_ANIMATED = 'assets/images/sigma-mark-animated.svg';
    // Preload + decode the animated variant so the first swap is flicker-free.
    new Image().src = NAV_ANIMATED;
    let navIsAnimated = false;
    const navMarkObserver = new IntersectionObserver((entries) => {
        const heroVisible = entries[0].isIntersecting;
        if (!heroVisible && !navIsAnimated) {
            navLogoMark.src = NAV_ANIMATED;
            navIsAnimated = true;
        } else if (heroVisible && navIsAnimated) {
            navLogoMark.src = NAV_STATIC;
            navIsAnimated = false;
        }
    }, { threshold: 0 });
    navMarkObserver.observe(heroSeedForNav);
}

