// Stacked card scroll effect
const capabilitiesList = document.querySelector('.capabilities-list');
if (capabilitiesList) {
  const cards = document.querySelectorAll('.capability');
  
  window.addEventListener('scroll', () => {
    const vpHeight = window.innerHeight;
    
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distanceFromCenter = cardCenter - vpHeight / 2;
      
      if (distanceFromCenter > 0) {
        const progress = Math.min(1, distanceFromCenter / (vpHeight * 0.6));
        card.classList.add('stacked');
        card.style.setProperty('--stack-offset', (progress * 32) + 'px');
        card.style.setProperty('--stack-tilt', progress * 8);
        card.style.setProperty('--stack-scale', progress * 100);
        card.style.setProperty('--stack-opacity', progress);
      } else {
        card.classList.remove('stacked');
        card.style.setProperty('--stack-offset', '0px');
        card.style.setProperty('--stack-tilt', 0);
        card.style.setProperty('--stack-scale', 0);
        card.style.setProperty('--stack-opacity', 0);
      }
    });
  }, { passive: true });
}
