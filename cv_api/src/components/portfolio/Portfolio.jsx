import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio/portfolio-1.jpg'
import IMG2 from '../../assets/portfolio/portfolio-2.jpg'
import IMG3 from '../../assets/portfolio/portfolio-3.jpg'
import IMG4 from '../../assets/portfolio/portfolio-4.jpg'
import IMG5 from '../../assets/portfolio/portfolio-5.jpg'
import IMG6 from '../../assets/portfolio/portfolio-6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo reciente</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
          <h3>Este es un titulo de un item de portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/federey99/cv_api" className='btn'>Github</a>
          <a href="https://dribble.com/alien_pixels" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
          </div>
          <h3>Este es un titulo de un item de portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/federey99/cv_api" className='btn'>Github</a>
          <a href="https://dribble.com/alien_pixels" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
          </div>
          <h3>Este es un titulo de un item de portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/federey99/cv_api" className='btn'>Github</a>
          <a href="https://dribble.com/alien_pixels" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG4} alt="" />
          </div>
          <h3>Este es un titulo de un item de portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/federey99/cv_api" className='btn'>Github</a>
          <a href="https://dribble.com/alien_pixels" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG5} alt="" />
          </div>
          <h3>Este es un titulo de un item de portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/federey99/cv_api" className='btn'>Github</a>
          <a href="https://dribble.com/alien_pixels" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG6} alt="" />
          </div>
          <h3>Este es un titulo de un item de portfolio</h3>
          <div className='portfolio__item-cta'></div>
          <a href="https://github.com/federey99/cv_api" className='btn'>Github</a>
          <a href="https://dribble.com/alien_pixels" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio