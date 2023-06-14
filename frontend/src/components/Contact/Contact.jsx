import React from 'react';
import style from './Contact.module.css';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import ContactForm from './ContactForm';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <section className={style.container}>
      <div className={style.contact_wrapper}>
        <div className={style.contact_heading}>
          <h2>Contact Us</h2>
          <p>High-quality, ethically sourced products at affordable prices. If you fall in love with furniture you can always decide to buy it.</p>
        </div>
        <div className={style.contact_info}>
          <div className={style.contact_info_customer_care}>
            <hr />
            <h2>Customer Care</h2>
            <p>For questions about your order or general inquiries, email us at</p>
            <Link to={"/gmail"}>help@domain.com</Link>
          </div>
          <div className={style.contact_info_address}>
            <hr />
            <h2>Visit Our Store</h2>
            <p>Austin, Texas</p>
            <p>6391 Elgin St. Celina</p>
          </div>
          <div className={style.contact_info_social_account}>
            <hr />
            <h2>Follow Us</h2>
            <div className={style.contact_info_social_icons}>
              <Link to={"https://www.facebook.com/login/"} target='_blank' title='facebook'>
                <BsFacebook/>
              </Link>
              <Link to={"https://www.instagram.com/accounts/login/"} target="_blank" title='instagram'>
                <BsInstagram/>
              </Link>
              <Link to={"https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"} target="_blank" title='twitter'>
                <BsTwitter/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer/>
    </section>
  )
}

export default Contact;
