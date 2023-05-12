import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Póngase en contacto</h5>
      <h2>Contácteme</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>fedrey@uade.edu.ar</h5>
            <a href="mailto:federicogabrielrey@gmail.com">Enviar un Email</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Federico Rey</h5>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Enviar correo</a>

          </article>
          
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+54 123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=1137997945"  target='_blank' rel='noreferrer'>Enviar un whatsapp</a>
          </article>
        </div>
      {/*FIN DE OPCIONES DE CONTACTO*/}
        <form action="">
          <input type="text" name='name' placeholder='Nombre completo' required />
          <input type="email" placeholder='Email' required />
          <input type="phone" placeholder='Telefono' required />
          <textarea name="messege" rows="7" placeholder='Mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact