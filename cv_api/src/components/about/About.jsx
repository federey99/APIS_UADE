import React from 'react'
import './about.css'
import ME from '../../assets/profile-img.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Mi Perfil Profesional</h5>
        <h2>Sobre Mi</h2>

          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About Image" />
              </div>
            </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>3+ Años</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projectos</h5>
              <small>80+ Projectos</small>
            </article>
          </div>

          <p> Me considero una persona creativa, responsable y
              proactiva. Busco expandir mi experiencia profesional
              y estoy predispuesto a aprender nuevas habilidades.
              Me entusiasma el proceso de encontrar soluciones
              efectivas a problemas y disfruto trabajar tanto en
              tareas individuales como proyectos en equipo.
          </p>

          <a href="#contact" className='btn btn-primary'>Contactame</a>
        </div>
      </div>
    </section>

  )
}

export default About