import gsap from 'gsap';

export function animateHeaderOnScroll() {
  gsap.from('.app-header', {
    backgroundColor: '#0006',
    ease: 'none',
    duration: 1,

    scrollTrigger: {
      trigger: '.app-main-screen',
      toggleActions: 'play reset reverse reset',
      scrub: true,
      start: 'top top',
      end: 'bottom top',
    },
  });
}

export function animateButtonsOnInit() {
  gsap.fromTo(
    '.app-header__animated',
    {
      opacity: 0,
      x: 30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
    }
  );
}
