'use client';

import { useEffect, useState, type FormEvent } from 'react';

export default function QuoteForm() {
  const [service, setService] = useState('');
  const [prepared, setPrepared] = useState(false);
  useEffect(() => {
    const selectService = (event: Event) => setService((event as CustomEvent<string>).detail);
    window.addEventListener('quote-service', selectService);
    return () => window.removeEventListener('quote-service', selectService);
  }, []);

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = `Quote enquiry: ${values.get('service')} in ${values.get('suburb')}`;
    const body = `Hi Taylors Hill Fencing and Landscaping,\n\nI'd like to enquire about a project.\n\nName: ${values.get('name')}\nSuburb: ${values.get('suburb')}\nPhone: ${values.get('phone')}\nService: ${values.get('service')}\n\n${values.get('message')}\n\nThanks,\n${values.get('name')}`;
    setPrepared(true);
    window.location.href = `mailto:thefence@y7mail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form id="quote-form" onSubmit={prepareEmail}>
      <h3>Tell us about your project</h3>
      <div className="field-row">
        <label>Your name<input name="name" autoComplete="name" required placeholder="First and last name" maxLength={100} /></label>
        <label>Your suburb<input name="suburb" autoComplete="address-level2" required placeholder="e.g. Taylors Hill" maxLength={100} /></label>
      </div>
      <label>Phone number<input name="phone" type="tel" autoComplete="tel" required placeholder="Your best contact number" maxLength={30} /></label>
      <label>What can we help with?
        <select name="service" id="service" required value={service} onChange={event => setService(event.target.value)}>
          <option value="">Choose a service</option>
          <option>Timber fencing</option><option>Steel or aluminium fencing</option><option>Gates</option><option>Landscaping</option><option>Something else / not sure yet</option>
        </select>
      </label>
      <label>A little about the job<textarea name="message" rows={4} required placeholder="What do you have in mind? Include approximate measurements if you have them." maxLength={3000} /></label>
      <button className="button button-dark" type="submit">Prepare email enquiry</button>
      <p className="form-note">Opens your email app with your enquiry ready to send. You can attach photos before sending.</p>
      {prepared && <p className="form-status" role="status">Your email app should open with the enquiry ready to send. Nothing has been sent yet. If it doesn’t open, call or text 0402 064 931, or email thefence@y7mail.com.</p>}
    </form>
  );
}
