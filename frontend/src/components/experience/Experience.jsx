import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
    <h5>Aptitudes</h5>
    <h2>Mi Experiencia</h2>

      <div className="container experience__container">
          <div className="experience__forntend">
            <h3>Desarrollo Frontend</h3>
              <div className="experience__content">

                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experimentado</small>
                </div>
                </article>

                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermedio</small>
                </div>
                </article>

                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermedio</small>
                </div>
                </article>

                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                <small className='text-light'>Intermedio</small>
                </div>
                </article>

                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                <small className='text-light'>Experimentado</small>
                </div>
                </article>

              </div>
          </div>
          {/*Fin de FrontEnd*/}
            <div className="experience__backend">
            <h3>Desarrollo Backend</h3>
            <div className="experience__content">

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Intermedio</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>              
              <h4>Java</h4>
              <small className='text-light'>Experimentado</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>              
              <h4>Python</h4>
              <small className='text-light'>Intermedio</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>              
              <h4>SQL Server</h4>
              <small className='text-light'>Intermedio</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>              
              <h4>MySQL</h4>
              <small className='text-light'>Intermedio</small>
              </div>
              </article>
            </div>
          </div>    
        </div>
      </section>
  )
}

export default experience