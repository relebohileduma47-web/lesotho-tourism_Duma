import { useState } from 'react'
import { attractions } from '../data/attractions'

const empty = { name: '', email: '', phone: '', destination: '', visitors: '', date: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 3) e.name = 'Enter your full name (at least 3 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email, like name@example.com.'
  if (!/^\+?[0-9\s-]{7,15}$/.test(v.phone)) e.phone = 'Enter a phone number with 7 to 15 digits.'
  if (!v.destination) e.destination = 'Choose a destination.'
  const n = Number(v.visitors)
  if (!Number.isInteger(n) || n < 1 || n > 50) e.visitors = 'Enter a whole number from 1 to 50.'
  const today = new Date().toISOString().split('T')[0]
  if (!v.date) e.date = 'Choose a preferred visit date.'
  else if (v.date < today) e.date = 'Choose today or a future date.'
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters so we can help you.'
  return e
}

// Props: defaultDestination (string)
export default function EnquiryForm({ defaultDestination = '' }) {
  const [values, setValues] = useState({ ...empty, destination: defaultDestination })
  const [errors, setErrors] = useState({})
  const [sentTo, setSentTo] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: undefined })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSentTo({ name: values.name, destination: values.destination })
      setValues(empty)
    }
  }

  if (sentTo) {
    return (
      <div className="confirm" role="status">
        <h2>Enquiry sent</h2>
        <p>Thank you, {sentTo.name}. We received your enquiry about {sentTo.destination} and will reply by email.</p>
        <button className="btn btn-dark" onClick={() => setSentTo(null)}>Send another enquiry</button>
      </div>
    )
  }

  const field = (name, label, props = {}) => (
    <label className="field">
      <span>{label}</span>
      <input name={name} value={values[name]} onChange={handleChange} aria-invalid={!!errors[name]} {...props} />
      {errors[name] && <small className="error">{errors[name]}</small>}
    </label>
  )

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {field('name', 'Full name', { type: 'text', autoComplete: 'name' })}
      <div className="row">
        {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
        {field('phone', 'Phone number', { type: 'tel', autoComplete: 'tel' })}
      </div>
      <label className="field">
        <span>Destination</span>
        <select name="destination" value={values.destination} onChange={handleChange} aria-invalid={!!errors.destination}>
          <option value="">Select a destination</option>
          {attractions.map((a) => <option key={a.id} value={a.name}>{a.name}</option>)}
        </select>
        {errors.destination && <small className="error">{errors.destination}</small>}
      </label>
      <div className="row">
        {field('visitors', 'Number of visitors', { type: 'number', min: 1 })}
        {field('date', 'Preferred visit date', { type: 'date' })}
      </div>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows="4" value={values.message} onChange={handleChange} aria-invalid={!!errors.message} />
        {errors.message && <small className="error">{errors.message}</small>}
      </label>
      <button type="submit" className="btn btn-gold">Send enquiry</button>
    </form>
  )
}
