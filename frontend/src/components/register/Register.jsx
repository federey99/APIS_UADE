import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import register from '../../api/register.api';
import profile from "../../assets/usuario.png"
import './register.css'

const Register = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [registrado, setRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validar el campo de correo electrónico
    if (!validateEmail(email)) {
      setErrorMessage('Correo electrónico inválido');
      return;
    }

    let response = await register(name, lastname, email, password);
    console.log(response);
    sessionStorage.setItem("access-token", response.token);
    console.log('Name:', name);
    console.log('Last Name:', lastname);
    console.log('Email:', email);
    console.log('Password:', password);

    if (response.status === 201) {
      setRegister(true);
      navigate("/solicitudes");
    } else {
      setErrorMessage(response.message);
    }
  };

  useEffect(() => {
    if (registrado) {
      navigate("/solicitudes");
    }
  }, [registrado, navigate]);

  // Función de validación de correo electrónico
  const validateEmail = (email) => {
    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className='register'>
      <Link to="/">
        <button className='btn-secondary'>Volver</button>
      </Link>
      <div className='sub-register'>
        <div className='imgs'>
          <div className='container-image'>
            <img src={profile} alt="profile" className='profile' />
          </div>
        </div>
        <div>
          <h1 className="titulo-register">Sign Up</h1>
          <div className='second-input'>
            <input
              type="name"
              placeholder='Name'
              className='name'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='second-input'>
            <input
              type="lastname"
              placeholder='Last Name'
              className='lastame'
              value={lastname}
              onChange={handleLastNameChange}
            />
          </div>
          <div className='second-input'>
            <input
              type="email"
              placeholder='Email'
              className='email'
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='second-input'>
            <input
              type="password"
              placeholder='Password'
              className='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className='register-button'>
            <button type="submit" className='btn-primary' onClick={handleRegister}>Sign Up</button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;







/*const Register = async () => {

    document.getElementById('registroForm').addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita que se envíe el formulario de manera predeterminada
      
        const nombre = document.getElementById('nameInput').value;
        const apellido = document.getElementById('lastnameInput').value;
        const correo = document.getElementById('emailInput').value;
        const contraseña = document.getElementById('passwordInput').value;
      
        // Validación básica del nombre
        if (nombre.trim() === '') {
          document.getElementById('mensajeError').textContent = 'Por favor, ingresa tu nombre';
          return; // Detiene la ejecución
        }

        // Validación básica del apellido
        if (apellido.trim() === '') {
            document.getElementById('mensajeError').textContent = 'Por favor, ingresa tu apellido';
            return; // Detiene la ejecución
          }
      
        // Validación básica del correo electrónico
        if (correo.trim() === '') {
          document.getElementById('mensajeError').textContent = 'Por favor, ingresa tu correo electrónico';
          return; // Detiene la ejecución
        }
      
        // Validación básica de la contraseña
        if (contraseña.trim() === '') {
          document.getElementById('mensajeError').textContent = 'Por favor, ingresa tu contraseña';
          return; // Detiene la ejecución
        }

    })

    //--------------------------------------------------------------------------------------------------------------------

    try {
        const response = await fetch('http://localhost:8080/api/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      
        if (response.ok) {
          // Registro exitoso
          alert('Usuario registrado exitosamente');
        } else {
          // Error en el registro
          const errorMessage = await response.text();
          document.getElementById('mensajeError').textContent = errorMessage;
        }
      } catch (error) {
        console.error('Error:', error);
        document.getElementById('mensajeError').textContent = 'Error al comunicarse con el servidor';
      }

    //--------------------------------------------------------------------------------------------------------------------

    return (
      <div>
        <h2>Registro de Usuario</h2>

            <form id="registroForm">
            <input type="text" id="nameInput" placeholder="Nombre" required></input>
            <input type="text" id="lastnameInput" placeholder="Apellido" required></input>
            <input type="email" id="emailInput" placeholder="Correo electrónico" required></input>
            <input type="password" id="passwordInput" placeholder="Contraseña" required></input>
            <button type="submit">Registrarse</button>
            </form>

            <p class="message" id="mensajeError"></p>
      </div>
    )
}
  
export default Register*/