const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

if (form) {
  const validators = {
    name: { 
      test: v => v.trim().length > 0,
      msg: 'Please enter your name'
    },
    email: { 
      test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      msg: 'Please enter a valid email address'
    }
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    let isValid = true;
    for (const [fieldId, validator] of Object.entries(validators)) {
      const input = document.getElementById(fieldId);
      const error = input.closest('.field').querySelector('.field-error');
      const ok = validator.test(input.value);

      input.classList.toggle('invalid', !ok);
      if (error) error.textContent = ok ? '' : validator.msg;
      if (!ok) isValid = false;
    }

    if (!isValid) return;

    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Collect form data
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    // Send to email via FormSubmit or similar service
    // For now, just show success (implement your backend service as needed)
    setTimeout(() => {
      form.hidden = true;
      successMsg.hidden = false;
      
      // Optional: Reset form after showing success
      setTimeout(() => {
        form.reset();
        btn.textContent = 'Send Message';
        btn.disabled = false;
      }, 3000);
    }, 900);
  });

  // Clear errors on input
  Object.keys(validators).forEach(fieldId => {
    const input = document.getElementById(fieldId);
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
      const error = input.closest('.field').querySelector('.field-error');
      if (error) error.textContent = '';
    });
  });
}
