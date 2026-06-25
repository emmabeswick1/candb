const parallaxCards = [...document.querySelectorAll('.capability')];

if (parallaxCards.length) {
  const imgSelector = '.capability-img-tall img, .capability-img-featured img, .capability-img-feature img';
  let ticking = false;

  const update = () => {
    const vh = window.innerHeight;
    parallaxCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const progress = Math.max(-1, Math.min(1, (center - vh / 2) / vh));
      const img = card.querySelector(imgSelector);
      if (img) img.style.transform = `translateY(${progress * -12}px) scale(1.08)`;
    });
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}
