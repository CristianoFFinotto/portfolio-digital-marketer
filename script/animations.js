if (document.body.clientWidth >= 992) {
    gsap.from('.header', { duration: 1, y: '-300%', ease: 'bounce' });
    gsap.from('.section-title', { duration: 2, x: '-100%', ease: 'bounce' });
    gsap.fromTo('.section-details__detail:nth-child(1)', { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 1 });
}








