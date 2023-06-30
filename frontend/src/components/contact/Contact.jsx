import React, {useState, useEffect} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import contacts from '../../api/contacts.api';
import {Link, useNavigate} from 'react-router-dom'

const Contact = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();
  const [contactado, setContact] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleContact = async (e) => {
    e.preventDefault();

    let response = await contacts(nombre,apellido,email,telefono,mensaje);
    console.log(response);
    sessionStorage.setItem("access-token", response.token);
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Email:', email);
    console.log('Telefono:', telefono);
    console.log('Mensaje:', mensaje);

    if (response.status === 201) {
      setContact(true);
      navigate("/solicitudes");
    } else {
      setErrorMessage(response.message);
    }
  };

  useEffect(() => {
    if (contactado) {
      navigate("/solicitudes");
    }
  }, [contactado, navigate]);

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
          <input type="text" name='name' placeholder='Nombre' value={nombre} onChange={handleNombreChange} required />
          <input type="text" name='name' placeholder='Apellido' value={apellido} onChange={handleApellidoChange} required />
          <input type="email" placeholder='Email' value={email} onChange={handleEmailChange} required />
          <input type="phone" placeholder='Teléfono' value={telefono} onChange={handleTelefonoChange} required />
          <textarea name="messege" rows="7" placeholder='Mensaje' value={mensaje} onChange={handleMensajeChange} required></textarea>
          <button type='submit' className='btn btn-primary' onClick={handleContact}>Enviar Mensaje</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </section>
  )
}

export default Contact