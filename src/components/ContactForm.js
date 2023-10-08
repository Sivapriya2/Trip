import React from 'react'
import './ContactForm.css'


const ContactForm = () => {
    return (
    <div className='form-container'>
      <h1>Send Message to Us</h1>
      <form>
         <input type="text" name="Name" placeholder="Enter your Name" />
         <input placeholder='Enter EmailID' type='email' name="Email" required />
         <input placeholder='Write a subject here' type='text' name="Subject" required/>
         <textarea placeholder='Message' rows='4' name="Message" required></textarea>
         <button type="submit" >Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
