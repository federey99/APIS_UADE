import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/educacion/TituloSecundario.png'
import Certificado_Secundario from '../../assets/educacion/Certificado_Secundario.pdf'
import IMG2 from '../../assets/educacion/CCNA.png'
import Certificado_CCNA from '../../assets/educacion/CCNA.pdf'
import IMG3 from '../../assets/educacion/FirstCertificate.jpg'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi conocimiento</h5>
      <h2>Educación y Certificados</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
          <h3>Secundario terminado</h3>
          <h5>Bachiller en gestión y administración de las organizaciones.</h5>
          <h5>Instituto cultural Marianista de Buenos Aires</h5>
          <div className='portfolio__item-cta'>
          <a href={Certificado_Secundario} download="certificado_Secundario" className='btn'>Descargar</a>
          <a href={Certificado_Secundario} className='btn btn-primary' target='_blank' rel='noreferrer'>Ver</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
          </div>
          <h3>Introducción a redes CCNA1</h3>
          <h5>Universidad Argentina de la Empresa</h5>
          <div className='portfolio__item-cta'>
          <a href={Certificado_CCNA} download="certificado_CCNA" className='btn'>Descargar</a>
          <a href={Certificado_CCNA} className='btn btn-primary' target='_blank' rel='noreferrer'>Ver</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
          </div>
          <h3>First Certificate</h3>
          <h5>Cambridge English</h5>
          <div className='portfolio__item-cta'>
          <a href={IMG3} download="First_certificate" className='btn'>Descargar</a>
          <a href={IMG3} className='btn btn-primary' target='_blank' rel='noreferrer'>Ver</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio