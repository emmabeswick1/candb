document.documentElement.classList.add('js-reveal');

document.addEventListener('DOMContentLoaded', () => {
  const sectionMedia = [...document.querySelectorAll('.about-image, .approach-image')];
  const capList = document.querySelector('.capabilities-list');
  const cards = capList ? [...capList.querySelectorAll('.capability')] : [];

  const revealAll = () => {
    sectionMedia.forEach(el => el.classList.add('animate-in'));
    cards.forEach(c => c.classList.add('reveal'));
  };

  if (!('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  const mediaObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  sectionMedia.forEach(el => mediaObserver.observe(el));

  if (capList) {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach(c => c.classList.add('reveal'));
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cardObserver.observe(capList);
  }

  setTimeout(revealAll, 2500);
});
