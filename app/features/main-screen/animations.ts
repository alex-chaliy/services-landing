import gsap from 'gsap';

export function animateHeadingOnInit() {
  gsap.fromTo(
    '.app-main-screen__heading-1',
    {
      xPercent: -250,
      opacity: 0,
      scale: 3,
    },
    {
      scale: 1,
      xPercent: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 0.8,
    }
  );

  gsap.from('.app-main-screen__heading-1', {
    skewX: '-45deg',
    ease: 'elastic',
    duration: 1,
    delay: 0.3,
  });
}

export function animateHeadingsOnScroll() {
  gsap.to('.app-main-screen__heading-1', {
    left: '-500%',
    ease: 'none',
    duration: 1,

    scrollTrigger: {
      trigger: '.app-main-screen__sprite-2',
      start: 'top top',
      toggleActions: 'play none reverse none',
      scrub: true,
    },
  });

  gsap.fromTo(
    '.app-main-screen__heading-2',
    {
      yPercent: 55,
      opacity: 0,
    },
    {
      yPercent: -100,
      opacity: 1,
      ease: 'expo.out',
      duration: 1,

      scrollTrigger: {
        trigger: '.app-main-screen__sprite-2',
        start: 'top top',
        toggleActions: 'play pause reverse pause',
        scrub: true,
      },
    }
  );
}

export function animateActionButtonOnInit() {
  gsap.fromTo(
    '.app-main-screen__action-button',
    {
      x: 50,
      y: -50,
      rotateZ: '45deg',
      opacity: .05,
      scale: .5,
    },
    {
      x: 0,
      y: 0,
      rotateZ: '0deg',
      opacity: 1,
      scale: 1,
      ease: 'expo.in',
      duration: .8,
      delay: .2,
    }
  );
}
