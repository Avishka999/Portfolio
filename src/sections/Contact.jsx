import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const socialLinks = [
    { label: 'Email', href: personalInfo.links.email ? `mailto:${personalInfo.links.email}` : '' },
    { label: 'GitHub', href: personalInfo.links.github },
    { label: 'LinkedIn', href: personalInfo.links.linkedin },
  ];
  const submit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { setError('Please complete each field before submitting.'); return; }
    setError('');
    setSubmitted(true);
    form.reset();
  };
  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-intro">
        <div className="section-kicker" data-reveal><span className="section-index">05</span><span>Contact / Your next idea starts here</span></div>
        <p className="eyebrow">Good things start with a conversation</p>
        <h2 data-reveal>Let’s build<br />something<br /><em>meaningful.</em></h2>
        <p data-reveal>Have a thoughtful challenge, an interesting idea or a team looking for a curious engineer? I’d love to hear about it.</p>
        <div className="contact-details" data-reveal>
          <div><Mail size={17} /><span>{personalInfo.links.email || 'Email address to be added'}</span></div>
          <div><MapPin size={17} /><span>{personalInfo.location}</span></div>
        </div>
        <div className="contact-socials" data-reveal>
          {socialLinks.map(({ label, href }) => href
            ? <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noreferrer'}>{label}<ArrowUpRight size={14} /></a>
            : <span key={label} aria-disabled="true">{label} <small>coming soon</small></span>)}
        </div>
      </div>
      <form className="contact-form" onSubmit={submit} noValidate data-reveal>
        <p className="contact-form-kicker">Start a project conversation</p>
        <div className="form-row">
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
        </div>
        <label>How can I help?<select name="topic" required defaultValue=""><option value="" disabled>Select a topic</option><option>Software engineering opportunity</option><option>Project collaboration</option><option>General enquiry</option></select></label>
        <label>Message<textarea name="message" rows="5" required minLength="10" placeholder="Tell me a little about it..." /></label>
        {error && <p className="form-message error">{error}</p>}
        {submitted && <p className="form-message success"><CheckCircle2 size={17} /> Thanks — your message is ready, but no email service is configured yet.</p>}
        <button className="button button-primary submit-button" type="submit">Send a message <ArrowUpRight size={16} /></button>
        <p className="form-note">This form validates your message locally. Connect an email service to enable delivery.</p>
      </form>
    </section>
  );
}
