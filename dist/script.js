'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { document.querySelector('#service').value = link.dataset.service; }));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const subject = `Quote enquiry: ${values.get('service')} in ${values.get('suburb')}`;
  const body = `Hi Taylors Hill Fencing and Landscaping,\n\nI'd like to enquire about a project.\n\nName: ${values.get('name')}\nSuburb: ${values.get('suburb')}\nPhone: ${values.get('phone')}\nService: ${values.get('service')}\n\n${values.get('message')}\n\nThanks,\n${values.get('name')}`;
  const url = `mailto:thefence@y7mail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const status = form.querySelector('.form-status');
  status.hidden = false;
  status.textContent = 'Your email app should open with the enquiry ready to send. Nothing has been sent yet. If it doesn’t open, call or text 0402 064 931, or email thefence@y7mail.com.';
  window.location.href = url;
});
