/**
 * SMP Ahmad Dahlan Sukoharjo (ADBS) - Native JavaScript
 * Handles:
 * 1. Hero Carousel with auto-play, navigation buttons & 4 indicator dots
 * 2. Mobile Navigation Drawer Toggle
 * 3. Active Desktop Navigation on Scroll
 * 4. Header Shadow / Blur on Scroll
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. HERO CAROUSEL INTERACTIVITY
  // ==========================================
  (function initCarousel() {
    const slider = document.getElementById('hero-carousel');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const dots = slider.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');

    if (!slides.length) return;

    let current = 0;
    let timer = null;
    const intervalMs = 5000;

    function showSlide(index) {
      current = (index + slides.length) % slides.length;

      slides.forEach((slide, idx) => {
        if (idx === current) {
          slide.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
          slide.classList.add('opacity-100', 'z-10');
        } else {
          slide.classList.remove('opacity-100', 'z-10');
          slide.classList.add('opacity-0', 'pointer-events-none', 'z-0');
        }
      });

      dots.forEach((dot, idx) => {
        if (idx === (current % dots.length)) {
          dot.className = 'carousel-dot h-2.5 rounded-full transition-all duration-300 w-8 bg-white shadow-sm';
        } else {
          dot.className = 'carousel-dot h-2.5 rounded-full transition-all duration-300 w-2.5 bg-white/50 hover:bg-white/80';
        }
      });
    }

    function startTimer() {
      stopTimer();
      timer = setInterval(() => {
        showSlide(current + 1);
      }, intervalMs);
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(current - 1);
        startTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(current + 1);
        startTimer();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(idx);
        startTimer();
      });
    });

    slider.addEventListener('mouseenter', stopTimer);
    slider.addEventListener('mouseleave', startTimer);

    // Initial slide & timer start
    showSlide(0);
    startTimer();
  })();

  // ==========================================
  // 2. MOBILE MENU DRAWER TOGGLE
  // ==========================================
  (function initMobileDrawer() {
    const btn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    if (!btn || !drawer) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      drawer.classList.toggle('hidden');
    });

    const links = drawer.querySelectorAll('.mobile-nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.add('hidden');
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!drawer.contains(e.target) && !btn.contains(e.target) && !drawer.classList.contains('hidden')) {
        drawer.classList.add('hidden');
      }
    });
  })();

  // ==========================================
  // 3. ACTIVE NAV LINK ON SCROLL
  // ==========================================
  (function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#desktop-nav .nav-link');
    if (!sections.length || !navLinks.length) return;

    function onScroll() {
      let currentSectionId = '';
      const scrollPosition = window.scrollY + 160;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        if (href === currentSectionId) {
          link.classList.remove('text-on-surface-variant', 'font-medium');
          link.classList.add('text-primary', 'font-bold');
        } else {
          link.classList.remove('text-primary', 'font-bold');
          link.classList.add('text-on-surface-variant', 'font-medium');
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

});
