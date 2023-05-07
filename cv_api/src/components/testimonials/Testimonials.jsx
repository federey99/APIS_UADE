import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/testimonials/testimonials-1.jpg'
import AVTR2 from '../../assets/testimonials/testimonials-2.jpg'
import AVTR3 from '../../assets/testimonials/testimonials-3.jpg'
import AVTR4 from '../../assets/testimonials/testimonials-4.jpg'





const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className='client__name' >Juan Huerta</h5>
            <small className="client__riview">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusamus quisquam natus est,
               libero accusantium totam quis veritatis, illum, 
              vitae sequi deleniti porro aperiam aut voluptatem eaque impedit et praesentium.
            </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
            <h5 className='client__name' >Miguel Horvat</h5>
            <small className="client__riview">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusamus quisquam natus est,
               libero accusantium totam quis veritatis, illum, 
              vitae sequi deleniti porro aperiam aut voluptatem eaque impedit et praesentium.
            </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
            <h5 className='client__name' >Miguel Horvat</h5>
            <small className="client__riview">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusamus quisquam natus est,
               libero accusantium totam quis veritatis, illum, 
              vitae sequi deleniti porro aperiam aut voluptatem eaque impedit et praesentium.
            </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
            <h5 className='client__name' >Miguel Horvat</h5>
            <small className="client__riview">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusamus quisquam natus est,
               libero accusantium totam quis veritatis, illum, 
              vitae sequi deleniti porro aperiam aut voluptatem eaque impedit et praesentium.
            </small>
        </article>

      </div>
    </section>
  )
}

export default Testimonials