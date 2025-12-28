/**
 * Debounce utility function
 */
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Initialize smooth scroll for anchor links
 */
export function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = (this as HTMLAnchorElement).getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  });
}

/**
 * Initialize parallax effect for floating orbs
 */
export function initParallax(): void {
  const handleParallax = debounce(() => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.floating-orb');

    orbs.forEach((orb, index) => {
      const speed = 0.15 + index * 0.05;
      const rotation = scrolled * 0.01;
      (orb as HTMLElement).style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
    });
  }, 10);

  window.addEventListener('scroll', handleParallax, { passive: true });
}

/**
 * Initialize fade-in animations using Intersection Observer
 */
export function initFadeInAnimations(): void {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    // Skip animations for users who prefer reduced motion
    document.querySelectorAll('.fade-in').forEach((el) => {
      el.classList.add('visible');
    });
    return;
  }

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach((el) => {
    fadeObserver.observe(el);
  });
}

/**
 * Initialize all animations
 */
export function initAllAnimations(): void {
  initSmoothScroll();
  initParallax();
  initFadeInAnimations();
}
