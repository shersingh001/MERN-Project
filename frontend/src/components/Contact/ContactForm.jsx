import React from 'react';
import style from './ContactForm.module.css';
import contactPoster from '../../Assets/images/contact-img/contact-1.jpg';

const ContactForm = () => {
  return (
    <div className={style.container}>
      <div className={style.contact_form_wrapper}>
        <div className={style.contact_form}>
          <h2>You may also fill out the form below and we will respond as quickly as possible.</h2>
        <form method='POST'>
            <div className={style.contact_form_input}>
            <div className={style.user_info_details}>
              <input type="text" name="name" id="name" placeholder='Full Name'/>
              <input type="email" name="email" id="email" placeholder='Email Address'/>
            </div>
            <div className={style.user_message}>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
            </div>
            <div className={style.user_message_btn}>
              <input type="submit" value="Send Message" />
            </div>
            </div>
        </form>
      </div>
      <div className={style.contact_form_poster}>
        <img src={contactPoster} alt="contact-poster"/>
      </div>
      </div>
    </div>
  )
}

export default ContactForm;
