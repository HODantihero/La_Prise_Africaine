import React from 'react'
import { Box, Typography } from '@pankod/refine-mui'
import '../style/styleSheet.css'

const contactus = () => {
  return (
    <div className="contus_parent contus_bg">
      <div className="contus_item">
        <p className="title">Contact us</p>
        <p className="text">Feel free to send us an email if you have any questions.</p>
        <form className="contus_form" action="../services/contact_us.php" method='POST'>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' id='name'/>
          <label htmlFor="email">Email</label>
          <input type="text" name='email' id='email'/>
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" />
          <label htmlFor="message">Message</label>
          <textarea name="message" cols={30} rows={10}></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default contactus