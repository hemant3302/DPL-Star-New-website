import { useState } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div id="ct-ok" style={{ display: 'block' }}>
        <h3 style={{ marginBottom: '10px' }}>Message received.</h3>
        <p style={{ color: 'var(--muted-light)' }}>Our team will get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form id="ct-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Name</label>
        <input type="text" required placeholder="Your full name" />
      </div>
      <div className="field">
        <label>Email</label>
        <input type="email" required placeholder="you@company.com" />
      </div>
      <div className="field">
        <label>Phone</label>
        <input type="tel" placeholder="+91" />
      </div>
      <div className="field">
        <label>What are you storing, and how much?</label>
        <textarea rows="5" placeholder="e.g. 1,00,000 L raw water for a municipal project in Bihar"></textarea>
      </div>
      <button className="btn btn-p" type="submit">Submit enquiry</button>
      <p className="form-note">This form is a design prototype and doesn't send data yet.</p>
    </form>
  )
}
