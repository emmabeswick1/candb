const CONSENT_KEY = 'cb-consulting-cookie-consent';

function initCookieBanner() {
  const cookieBanner = document.getElementById('cookie-banner-card');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  const closeBtn = document.getElementById('cookie-close');

  if (!cookieBanner || !acceptBtn || !declineBtn || !closeBtn) {
    console.warn('Cookie banner elements not found');
    return;
  }

  function hideBanner() {
    cookieBanner.hidden = true;
  }

  function saveChoice(choice) {
    localStorage.setItem(CONSENT_KEY, choice);
    hideBanner();
    
    // Fire analytics only if accepted
    if (choice === 'accepted') {
      loadAnalytics();
    }
  }

  // Check if already consented
  const existingChoice = localStorage.getItem(CONSENT_KEY);
  if (existingChoice === 'accepted') {
    loadAnalytics();
  } else if (!existingChoice) {
    // Show banner if no prior choice
    setTimeout(() => {
      cookieBanner.hidden = false;
    }, 800);
  }

  // Bind button handlers
  acceptBtn.addEventListener('click', (e) => {
    e.preventDefault();
    saveChoice('accepted');
  });

  declineBtn.addEventListener('click', (e) => {
    e.preventDefault();
    saveChoice('declined');
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    saveChoice('declined');
  });

  // Escape key support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !cookieBanner.hidden) {
      saveChoice('declined');
    }
  });
}

function loadAnalytics() {
  // Google Analytics with gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VGHRJF98Z1');
  
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VGHRJF98Z1';
  document.head.appendChild(script);
}

// Wait for DOM, then initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCookieBanner);
} else {
  initCookieBanner();
}
