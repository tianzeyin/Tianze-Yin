import React from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1s657yl', 'template_24mg37b', form.current, 'bBoplKa8Fdi6P_NK2')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>yintz1207@gmail.com</h5>
            <a href='mailto:yintz1207@gmail.com' target='_blank'>send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>@tianze-yin</h5>
            <a href='https://linkedin.com/in/tianze-yin' target='_blank'>view profile</a>
          </article>
          <article className='contact__option'>
            <FaGithub className='contact__option-icon' />
            <h4>GitHub</h4>
            <h5>tianzeyin</h5>
            <a href='https://github.com/tianzeyin' target='_blank'>view profile</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='email' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact