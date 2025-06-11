window.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.embla');

  carousels.forEach((emblaRoot) => {

    const viewport = emblaRoot.querySelector('.embla__viewport')
    const container = viewport.querySelector('.embla__container')
  
    const viewportWidth = viewport.offsetWidth
    const containerWidth = container.scrollWidth
    const needsCarousel = containerWidth > viewportWidth

    if (!viewport || !needsCarousel) return;

    const embla = EmblaCarousel(viewport, {
      loop: false,
      align: 'start',
      dragFree: true,
      speed: 10,
      dragThreshold: 1
      /* containScroll: 'trimSnaps' */
    });

    console.log('Embla init, slides:', embla.slideNodes().length);
  });
});