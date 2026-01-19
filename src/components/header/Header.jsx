import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/tianze_good.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello, I am</h5>
        <h1>Tianze Yin</h1>
        <h5 className='text-light'>Computer Engineering Student</h5>
        <CTA></CTA>
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header