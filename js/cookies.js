const CONSENT_KEY = 'cb-consulting-cookie-consent';

// Initialize cookie banner on page load
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  const closeBtn = document.getElementById('cookie-close');

  if (!banner) return;

  // Check if user already made a choice
  const choice = localStorage.getItem(CONSENT_KEY);
  
  if (choice === 'accepted') {
    // Load GA if previously accepted
    loadAnalytics();
  } else if (!choice) {
    // Show banner after 500ms on first visit
    setTimeout(() => {
      banner.removeAttribute('hidden');
    }, 500);
  }

  // Accept button
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem(CONSENT_KEY, 'accepted');
      loadAnalytics();
      banner.setAttribute('hidden', '');
    });
  }

  // Decline button
  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem(CONSENT_KEY, 'declined');
      banner.setAttribute('hidden', '');
    });
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      localStorage.setItem(CONSENT_KEY, 'declined');
      banner.setAttribute('hidden', '');
    });
  }
});

function loadAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VGHRJF98Z1');
  
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VGHRJF98Z1';
  document.head.appendChild(script);
}
