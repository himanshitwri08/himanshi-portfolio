import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'    
import location_icon from '../../assets/location_icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { useState } from 'react'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8a17725b-7ccd-45c7-abfb-7458a876711f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    //   console.log("Success", res);
     alert(res.message);
    }
  };

  return (
    <div>
      <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Contact Me</h1>
            <img src={theme_pattern} alt="pattern" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>If you have any questions or just want to chat, feel free to reach out!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="mail" />
                        <p>himanshitiwari960@gmail.com</p>
                    </div>
                    {/* <div className="contact-detail">
                        <img src={call_icon} alt="call" />
                        <p>+91 7668060085</p>
                    </div> */}
                    <div className="contact-detail">
                        {/* <img src={call_icon} alt="call" /> */}
                        <FontAwesomeIcon icon={faGithub} style={{ color: "#d8d8d8" }} className="contact-icon" />
                        <p>https://github.com/himanshitwri08</p>
                    </div>
                    
                    <div className="contact-detail">
                        <img src={location_icon} alt="location" />
                        <p>Uttarakhand, India</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name"> Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />
                    <label htmlFor="email"> Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required />
                    <label htmlFor="message"> Write your message here</label>
                    <textarea placeholder='Enter your message' name='message' rows="8" required></textarea>
                    <button type="submit" className="contact-submit">Send Message</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
