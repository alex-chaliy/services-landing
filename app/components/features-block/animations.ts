import gsap from 'gsap';

export function animateFeaturesOnInit() {
  gsap.fromTo(
    '.app-features-block__item',
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power2.out',
    }
  );
}
