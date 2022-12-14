import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaTwitter } from 'react-icons/fa'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_me0jfjg', 'template_mwmosps', form.current, 'QgbIYSLquY8PrqQho')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>julien.esterbet@gmail.com</h5>
            <a href="mailto:learncryptosharecrypto@gmail.com" target='_blank' rel="noreferrer">Send A Message</a>
          </article>
          <article className='contact__option'>
            <FaTwitter className='contact__option-icon' />
            <h4>twitter</h4>
            <h5>Julien Esbt Crypto</h5>
            <a href="https://twitter.com/JulienEsbtCrypt" target='_blank' rel="noreferrer">Send A Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Email</button>
        </form>
      </div>
    </section>
  )
}

export default Contact