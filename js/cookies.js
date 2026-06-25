const CONSENT_KEY = 'cb-consulting-cookie-consent';

function initCookieBanner() {
  const banner = document.getElementById('cookie-banner-card');
  const { accept: acceptBtn, decline: declineBtn, close: closeBtn } = {
    accept: document.getElementById('cookie-accept'),
    decline: document.getElementById('cookie-decline'),
    close: document.getElementById('cookie-close')
  };

  if (!banner || !acceptBtn || !declineBtn || !closeBtn) return;

  const userChoice = localStorage.getItem(CONSENT_KEY);
  
  // Only show if no prior choice
  if (!userChoice) {
    setTimeout(() => { banner.hidden = false; }, 500);
  }

  const dismiss = (choice) => {
    localStorage.setItem(CONSENT_KEY, choice);
    if (choice === 'accepted') loadGoogleAnalytics();
    banner.hidden = true;
  };

  acceptBtn.addEventListener('click', () => dismiss('accepted'));
  declineBtn.addEventListener('click', () => dismiss('declined'));
  closeBtn.addEventListener('click', () => dismiss('declined'));
}

function loadGoogleAnalytics() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VGHRJF98Z1';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-VGHRJF98Z1');
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', initCookieBanner)
  : initCookieBanner();

