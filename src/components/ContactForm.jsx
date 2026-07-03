import { useState } from 'react'

export default function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    mobile: '',
    location: '',
    propertyType: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('Thank you! We will contact you soon with property details.')
    setValues({
      name: '',
      mobile: '',
      location: '',
      propertyType: '',
      budget: '',
      message: '',
    })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Full Name
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
      </label>
      <label>
        Mobile Number
        <input
          name="mobile"
          value={values.mobile}
          onChange={handleChange}
          placeholder="8448844840"
          required
        />
      </label>
      <label>
        Preferred Location
        <input
          name="location"
          value={values.location}
          onChange={handleChange}
          placeholder="Uttam Nagar, Dwarka, etc."
        />
      </label>
      <label>
        Property Type
        <select
          name="propertyType"
          value={values.propertyType}
          onChange={handleChange}
          required
        >
          <option value="">Select a property type</option>
          <option value="1 BHK Flats">1 BHK Flats</option>
          <option value="2 BHK Flats">2 BHK Flats</option>
          <option value="3 BHK Flats">3 BHK Flats</option>
          <option value="Builder Floors">Builder Floors</option>
          <option value="Independent Houses">Independent Houses</option>
          <option value="Residential Plots">Residential Plots</option>
          <option value="Ready-to-Move Properties">Ready-to-Move Properties</option>
          <option value="Under-Construction Projects">Under-Construction Projects</option>
        </select>
      </label>
      <label>
        Budget
        <input
          name="budget"
          value={values.budget}
          onChange={handleChange}
          placeholder="e.g. ₹50 Lakhs - ₹1 Cr"
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us more about your requirements"
          rows="5"
        />
      </label>

      <button type="submit" className="button button-primary">
        Get Property Details
      </button>
      {status && <p className="status-message">{status}</p>}
    </form>
  )
}
