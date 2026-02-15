/**
 * Premium UI Effects - Optimized for Performance
 * Uses GPU-accelerated transforms and throttled events
 */

/**
 * Cursor Glow/Spotlight Effect
 * Creates a soft glow that follows the mouse
 */
export function initCursorGlow(): void {
  // Skip on mobile
  if ('ontouchstart' in window || window.innerWidth < 768) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let animating = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!animating) {
      animating = true;
      requestAnimationFrame(animate);
    }
  }, { passive: true });

  function animate() {
    const speed = 0.12;
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;

    glow.style.transform = `translate3d(${currentX - 200}px, ${currentY - 200}px, 0)`;

    if (Math.abs(mouseX - currentX) > 0.1 || Math.abs(mouseY - currentY) > 0.1) {
      requestAnimationFrame(animate);
    } else {
      animating = false;
    }
  }
}

/**
 * Magnetic Button Effect - Optimized
 * Buttons subtly pull toward the cursor
 */
export function initMagneticButtons(): void {
  if ('ontouchstart' in window) return;

  const buttons = document.querySelectorAll('.magnetic');

  buttons.forEach((btn) => {
    const button = btn as HTMLElement;
    button.style.willChange = 'transform';

    button.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = (e.clientX - centerX) * 0.2;
      const moveY = (e.clientY - centerY) * 0.2;
      button.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    }, { passive: true });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate3d(0, 0, 0)';
    }, { passive: true });
  });
}

/**
 * 3D Card Tilt Effect - Optimized
 * Cards tilt based on mouse position with reduced intensity
 */
export function initCardTilt(): void {
  if ('ontouchstart' in window) return;

  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach((card) => {
    const cardEl = card as HTMLElement;
    cardEl.style.willChange = 'transform';

    let rafId: number | null = null;

    cardEl.addEventListener('mousemove', (e: MouseEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const rect = cardEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Reduced tilt intensity for smoother feel
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        rafId = null;
      });
    }, { passive: true });

    cardEl.addEventListener('mouseleave', () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      cardEl.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }, { passive: true });
  });
}

/**
 * Text Split & Reveal Animation
 * Splits text into characters and animates them in
 */
export function initTextReveal(): void {
  const elements = document.querySelectorAll('.text-reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const text = el.textContent || '';
          const chars = text.split('');

          el.innerHTML = chars
            .map(
              (char, i) =>
                `<span class="char" style="animation-delay: ${i * 0.03}s">${char === ' ' ? '&nbsp;' : char}</span>`
            )
            .join('');

          el.classList.add('revealed');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Word-by-word reveal for subtitles
 */
export function initWordReveal(): void {
  const elements = document.querySelectorAll('.word-reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const words = el.textContent?.split(' ') || [];

          el.innerHTML = words
            .map(
              (word, i) =>
                `<span class="word" style="animation-delay: ${i * 0.08}s">${word}</span>`
            )
            .join(' ');

          el.classList.add('revealed');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Shimmer effect for buttons
 */
export function initShimmer(): void {
  const elements = document.querySelectorAll('.shimmer');

  elements.forEach((el) => {
    const shimmer = document.createElement('div');
    shimmer.className = 'shimmer-effect';
    (el as HTMLElement).appendChild(shimmer);
  });
}

/**
 * Smooth section transitions on scroll
 */
export function initSectionTransitions(): void {
  const sections = document.querySelectorAll('.section-transition');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '-10% 0px -10% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * Initialize all premium effects
 */
export function initAllPremiumEffects(): void {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    initCursorGlow();
    initMagneticButtons();
    initCardTilt();
    initTextReveal();
    initWordReveal();
    initShimmer();
    initSectionTransitions();
  }
}
