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
      delay: 0.7,
    }
  );

  gsap.from('.app-main-screen__heading-1', {
    skewX: '-45deg',
    ease: 'elastic',
    duration: 1,
    delay: 1,
  });
}

export function animateActionButtonOnInit() {
  gsap.fromTo(
    '.app-main-screen__action-button',
    {
      x: 50,
      y: -50,
      rotateZ: '45deg',
      opacity: 0.05,
      scale: 0.5,
    },
    {
      x: 0,
      y: 0,
      rotateZ: '0deg',
      opacity: 1,
      scale: 1,
      ease: 'expo.in',
      duration: 0.8,
      delay: 0.3,
    }
  );
}

export function loopAnimationButtonCallNow() {
  gsap.fromTo(
    '.app-main-screen__action-button--call-now',
    {
      y: 10,
    },
    {
      y: -20,
      ease: 'expo.in',
      duration: 1,
      delay: 2,
      repeat: -1,
      yoyo: true,
    }
  );
}

export function animateActionBoxOnInit() {
  gsap.fromTo(
    '.app-main-screen__action-box',
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: 'bounce.out',
      duration: 1,
      delay: 0.5,
    }
  );
}

export function animatePlumberOnInit() {
  gsap.fromTo(
    '.app-main-screen__plumber',
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: 'bounce.out',
      duration: 1,
      delay: 0.8,
    }
  );
}

export function animatePlumberOnScroll() {
  gsap.fromTo(
    '.app-main-screen__plumber, .app-main-screen__action-box',
    {
      x: 0,
    },
    {
      x: 1000,
      ease: 'none',
      duration: 1,

      scrollTrigger: {
        trigger: '.app-main-screen',
        toggleActions: 'play reset reverse reset',
        scrub: true,
        start: 'top top',
        end: 'bottom top',
      },
    }
  );
}