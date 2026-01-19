import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Tianze Yin</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a> </li>
        <li><a href='#about'>About</a> </li>
        <li><a href='#experience'>Skills</a> </li>
        <li><a href='#services'>Experience</a> </li>
        <li><a href='#portfolio'>Projects</a> </li>
        <li><a href='#contact'>Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/tianze-yin"><BsLinkedin /></a>
        <a href="https://github.com/tianzeyin"><FaGithub /></a>
        <a href='mailto:yintz1207@gmail.com'><AiOutlineMail /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Tianze Yin. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer