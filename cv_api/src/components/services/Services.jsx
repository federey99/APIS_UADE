import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Habilidades - Fortalezas</h5>
      <h2>Perfil Profesional</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Diseño UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Capacidad para diseñar interfaces de usuario atractivas y centradas en el usuario utilizando herramientas de diseño gráfico y prototipado.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conocimientos de principios de diseño UI/UX, como la jerarquía visual, la usabilidad y la experiencia del usuario.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Capacidad para realizar pruebas de usabilidad y recopilar comentarios de los usuarios para mejorar continuamente el diseño.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementación de diseño responsivo para adaptar la interfaz a diferentes dispositivos y tamaños de pantalla.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conocimientos de accesibilidad web y diseño inclusivo para garantizar que la interfaz sea accesible para todos los usuarios.</p>
            </li>
          </ul>
        </article>
        {/*FIN DE UI/UX*/}

        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Web</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Desarrollo de interfaces web responsivas y amigables para el usuario utilizando HTML, CSS y JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experiencia en el uso de frameworks como React y Bootstrap para construir aplicaciones web modernas y dinámicas.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conocimientos de arquitectura web y diseño de API REST para una comunicación eficiente entre el frontend y el backend.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimización de rendimiento web, incluyendo técnicas de carga rápida y optimización de recursos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Resolución de problemas y depuración de aplicaciones web para garantizar un funcionamiento fluido y sin errores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conocimientos de SEO y buenas prácticas para mejorar la visibilidad y accesibilidad de los sitios web.</p>
            </li>
          </ul>
        </article>
        {/*FIN DE DESARROLLO WEB*/} 

        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Backend</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experiencia en la construcción de APIs y servicios web utilizando lenguajes como Node.js, Java y Python.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manejo de bases de datos relacionales como SQL Server y MySQL para el almacenamiento y la manipulación eficiente de datos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conocimientos de consultas SQL y optimización de consultas para mejorar el rendimiento de las operaciones de base de datos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integración con servicios externos y APIs de terceros para ampliar la funcionalidad de las aplicaciones y mejorar la interoperabilidad.</p>
            </li>
          </ul>
        </article>
        {/*FIN DE CREACIÓN DE CONTENIDO*/} 

      </div>
    </section>
  )
}

export default Services