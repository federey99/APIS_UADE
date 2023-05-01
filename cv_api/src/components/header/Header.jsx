import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile-img.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hola soy</h5>
      <h1>Federico Rey</h1>
      <h5 className="text-light"> Fullstack Developer</h5>
      <CTA />
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="" />
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header