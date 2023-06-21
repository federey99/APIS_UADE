import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/fede_foto2.png'
import HeaderSocials from './HeaderSocials'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <header>
    <Link to="/login">
      <button className='btn btn-secondary'>Solicitudes</button>
    </Link>
      <div className="container header__container">
      <h5>Hola soy</h5>
      <h1>Federico Rey</h1>
      <h5 className="text-light"> Fullstack Developer</h5>
      <CTA />
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header