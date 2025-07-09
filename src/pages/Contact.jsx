import React from 'react'
import "../style/Contact.css"
import {Button} from "../components/common/Button.jsx"

export const Contact = () => {
  return (
    <>
     <div className="contact-container">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help! Reach out with any questions or feedback.</p>
      </section>

      <section className="contact-content">
        <div className="contact-form-section">
          <h2>📬 Send a Message</h2>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
            {/* <button type="submit">Send Message</button> */}
            <Button label='Send Message'/>
          </form>
        </div>

        <div className="contact-info-section">
          <h2>📞 Contact Information</h2>
          <p><strong>Email:</strong> support@skillveda.in</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> SkillVeda HQ, Ahmedabad, Gujarat, India</p>
        </div>
      </section>
    </div>
    </>
  )
}
