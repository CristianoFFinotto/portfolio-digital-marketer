if (document.body.clientWidth >= 992) {
    gsap.from('.header', { duration: 1, yPercent: -300 });
    gsap.fromTo('.section-title__title div', { opacity: 0, yPercent: 50 }, { opacity: 1, yPercent: 0, duration: 1, stagger: 0.03 });
    gsap.fromTo('.section-details__detail:nth-child(1)', { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 1 });
    gsap.fromTo('.section-details img', { opacity: 0, xPercent: -50, yPercent: 50 }, { opacity: 1, xPercent: 0, yPercent: 0, duration: 1 });


}








