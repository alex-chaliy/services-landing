import gsap from 'gsap';

export function animateHeaderOnScroll() {
  gsap.from('.app-header', {
    backgroundColor: '#0000',
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
