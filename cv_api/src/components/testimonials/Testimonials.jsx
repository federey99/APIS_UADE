import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/testimonials/testimonials-1.jpg'
import AVTR2 from '../../assets/testimonials/testimonials-2.jpg'
import AVTR3 from '../../assets/testimonials/testimonials-3.jpg'
import AVTR4 from '../../assets/testimonials/testimonials-4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTR1,
    name:'Mateo Castello',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusamus quisquam natus est'
  },
  {
    avatar:AVTR2,
    name:'Valeria López',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusamus quisquam natus est'
  },
  {
    avatar:AVTR3,
    name:'Julieta Trujillo',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusamus quisquam natus est'
  },
  {
    avatar:AVTR4,
    name:'Juan Huerta',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusamus quisquam natus est'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Opiniones de los referentes</h5>
      <h2>Referencias</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt=''/>
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className="client__riview">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials