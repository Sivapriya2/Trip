import './Footer.css'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
            <h1>Trip</h1>
            <p>Choose your Destination</p>
        </div>
        <div>
            <a><i class='bx bxl-facebook'></i></a>
            <a><i class='bx bxl-instagram'></i></a>    
            <a><i class='bx bxl-whatsapp'></i></a>  
            <a><i class='bx bxl-twitter'></i></a>
        </div>
      </div>

      <div className='bottom'>
        <div>
            <h4>Project</h4>
            <a href='/'>Changelog</a>
            <a href='/'>Status</a>
            <a href='/'>License</a>
            <a href='/'>All versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href='/'>GitHub</a>
            <a href='/'>Issues</a>
            <a href='/'>Project</a>
            <a href='/'>Twitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href='/'>Support</a>
            <a href='/'>Troubleshooting</a>
            <a href='/'>Contact Us</a>
        </div>
        <div>
            <h4>Others</h4>
            <a href='/'>Terms of Service</a>
            <a href='/'>Privacy Policy</a>
            <a href='/'>License</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
