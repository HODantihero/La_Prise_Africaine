import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nw7es8g', 'template_fspl72t', form.current, 'ALFPnTOq0pwhSuqeF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contus_parent contus_bg">
    <div className="contus_item">
      <p className="title">Contact us</p>
      <p className='alert'>
        *service not yet available, please send an email manually
        <br></br>my email is "dc@lapriseafricaine.com" .
      </p>
      <p className="text">Feel free to send us an email if you have any questions.</p>
      <form className="contus_form" ref={form} onSubmit={sendEmail}>
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
    /*<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>*/
  );
};

export default Contactus