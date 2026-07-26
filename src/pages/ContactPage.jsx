import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted('Thank you — your inquiry has been received. We will be in touch shortly.');
  };

  return (
    <div className="page-shell">
      <section className="section booking-section">
        <div>
          <p className="eyebrow">Book your celebration</p>
          <h2>Let’s create something memorable together.</h2>
          <p>Share a little about your date, style, and vision and we will send a tailored proposal your way.</p>
          <div className="contact-info">
            <span>hello@feyizinoevents.com</span>
            <span>+234 810 000 0000</span>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <input type="text" placeholder="Event date" />
          <textarea rows="4" placeholder="Tell us about your celebration"></textarea>
          <button className="btn btn-primary" type="submit">Send inquiry</button>
          {submitted ? <p className="success">{submitted}</p> : null}
        </form>
      </section>
    </div>
  );
}
