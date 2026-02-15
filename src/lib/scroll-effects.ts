/**
 * Scroll-based immersion effects
 * Creates smooth UI evolution as user scrolls
 */

interface ScrollConfig {
  parallaxElements?: string;
  fadeElements?: string;
  scaleElements?: string;
  rotateElements?: string;
}

/**
 * Initialize all scroll-based effects
 */
export function initScrollEffects(config: ScrollConfig = {}): void {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Show all elements immediately for accessibility
    document.querySelectorAll('.scroll-fade, .scroll-scale, .scroll-slide').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
    });
    return;
  }

  initParallaxScroll(config.parallaxElements);
  initFadeOnScroll(config.fadeElements);
  initScaleOnScroll(config.scaleElements);
  initProgressiveReveal();
  initHeroParallax();
  initNavbarTransition();
}

/**
 * Parallax scrolling for background elements
 */
function initParallaxScroll(selector = '.parallax'): void {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) return;

  let ticking = false;

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;

          elements.forEach((el, index) => {
            const speed = parseFloat((el as HTMLElement).dataset.speed || '0.5');
            const yPos = scrolled * speed * (index % 2 === 0 ? 1 : -1);
            (el as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
          });

          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

/**
 * Fade in elements as they enter viewport
 */
function initFadeOnScroll(selector = '.scroll-fade'): void {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseFloat(el.dataset.delay || '0');

          setTimeout(() => {
            el.classList.add('is-visible');
          }, delay * 1000);

          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Scale elements as they enter viewport
 */
function initScaleOnScroll(selector = '.scroll-scale'): void {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-scaled');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Progressive reveal for staggered animations
 */
function initProgressiveReveal(): void {
  const groups = document.querySelectorAll('.reveal-group');

  groups.forEach((group) => {
    const children = group.querySelectorAll('.reveal-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('is-revealed');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(group);
  });
}

/**
 * Hero section parallax with scale and opacity
 */
function initHeroParallax(): void {
  const hero = document.querySelector('.hero-parallax');
  const heroContent = document.querySelector('.hero-content');

  if (!hero || !heroContent) return;

  let ticking = false;

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const heroHeight = (hero as HTMLElement).offsetHeight;
          const progress = Math.min(scrolled / heroHeight, 1);

          // Fade out and scale down hero content as user scrolls
          const opacity = 1 - progress * 1.5;
          const scale = 1 - progress * 0.15;
          const translateY = scrolled * 0.4;

          (heroContent as HTMLElement).style.opacity = String(Math.max(opacity, 0));
          (heroContent as HTMLElement).style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;

          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

/**
 * Navbar background transition on scroll
 */
function initNavbarTransition(): void {
  const nav = document.querySelector('nav');

  if (!nav) return;

  let ticking = false;

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;

          if (scrolled > 100) {
            nav.classList.add('nav-scrolled');
          } else {
            nav.classList.remove('nav-scrolled');
          }

          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

/**
 * Smooth scroll to section
 */
export function smoothScrollTo(target: string | HTMLElement, offset = 0): void {
  const element = typeof target === 'string' ? document.querySelector(target) : target;

  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
}
