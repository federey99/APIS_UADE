import React from 'react'
import './about.css'
import ME from '../../assets/profile-img2.jpeg'
import {FaAward} from 'react-icons/fa'
import {BiMap} from 'react-icons/bi'
import {FaLanguage} from 'react-icons/fa'


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
              <small style={{ display: 'block' }}>3+ Años</small>
              <small style={{ display: 'block' }}>Finnegans SA </small>
            </article>

            <article className="about__card">
              <BiMap className='about__icon'/>
              <h5>Localidad</h5>
              <small >Buenos Aires, Argentina</small>
            </article>

            <article className="about__card">
              <FaLanguage className='about__icon'/>
              <h5>Idiomas</h5>
              <small style={{ display: 'block' }}>Español - Nativo</small>
              <small style={{ display: 'block' }}>Inglés - Avanzado</small>
            </article>
          </div>

          <p> Mi enfoque principal es el desarrollo de aplicaciones utilizando tecnologías modernas 
          y mejores prácticas de la industria. Tengo un sólido conocimiento de lenguajes de 
          programación como Java, Python y JavaScript, así como de frameworks y bibliotecas 
          populares como Spring, Django y React.
          Tengo un sólido conocimiento técnico, habilidades de diseño y arquitectura, 
          experiencia en metodologías ágiles y una pasión por la resolución de problemas. 
          Estoy entusiasmado por seguir creciendo profesionalmente y 
          enfrentar nuevos desafíos en el campo del desarrollo de software.
          </p>

          <a href="#contact" className='btn btn-primary'>Contactame</a>
        </div>
      </div>
    </section>

  )
}

export default About