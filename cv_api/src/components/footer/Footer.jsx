import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer id='footer'>
    <a href="#" className='footer__logo'>FEDERICO REY</a>

    <ul className='permalinks'>
      <li> <a href="#">Home</a> </li>
      <li> <a href="#about">Sobre Mi</a> </li>
      <li> <a href="#experience">Experiencia</a> </li>
      <li> <a href="#services">Servicios</a> </li>
      <li> <a href="#portfolio">Portfolio</a> </li>
      <li> <a href="#testimonials">Referencias</a> </li>
      <li> <a href="#contact">Contacto</a> </li>
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><IoLogoTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Proyectos de Federico Rey. Todos los derechos reservados.</small>
    </div>
    </footer>
  )
}

export default Footer