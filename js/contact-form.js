// Contact form validation
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

if (form) {
  const rules = {
    name: { test: v => v.trim().length > 0, msg: 'Name required' },
    email: { test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Valid email required' }
  };

  const validate = () => {
    let ok = true;
    Object.entries(rules).forEach(([id, rule]) => {
      const input = document.getElementById(id);
      const error = input.closest('.field').querySelector('.field-error');
      const valid = rule.test(input.value);
      
      input.classList.toggle('invalid', !valid);
      if (error) error.textContent = valid ? '' : rule.msg;
      if (!valid) ok = false;
    });
    return ok;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;

    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      form.hidden = true;
      successMsg.hidden = false;
    }, 900);
  });

  // Clear errors on input
  Object.keys(rules).forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      const field = document.getElementById(id).closest('.field');
      field.querySelector('input').classList.remove('invalid');
      const error = field.querySelector('.field-error');
      if (error) error.textContent = '';
    });
  });
}
