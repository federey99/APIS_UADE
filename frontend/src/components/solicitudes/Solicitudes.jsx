import React from 'react'
import './solicitudes.css'
import { AiOutlineInfoCircle, AiOutlineDelete, AiOutlineCheckCircle } from 'react-icons/ai'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'

import solicitudes from '../../api/solicitudes.api';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Solicitudes = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // Realizar la solicitud GET una vez que el componente se haya montado
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await solicitudes();

            // Generar un ID aleatorio para cada fila de la tabla
            const contactsData = response.map((contact) => ({ ...contact, rowId: uuidv4() }));

            // Actualizar el estado con los contactos obtenidos
            setContacts(contactsData);
        } catch (error) {
            console.error('Error al obtener los contactos:', error);
        }
    };

    return (
        <div>
            <div className='titulo-solicitudes'>
                <h1>Mis Solicitudes</h1>
            </div>
            <Link to="/">
                <button className='btn btn-secondary'>Log Out</button>
            </Link>
            <div className='tabla-solicitudes'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th className='mensajes'>Mensaje</th>
                            <th>Teléfono</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={contact.rowId}>
                                <td>{index + 1}</td>
                                <td>{contact.nombre}</td>
                                <td>{contact.apellido}</td>
                                <td>{contact.email}</td>
                                <td>{contact.mensaje}</td>
                                <td>{contact.telefono}</td>
                                <td>
                                    <span><AiOutlineInfoCircle /></span>
                                    <span><AiOutlineCheckCircle /></span>
                                    <span><AiOutlineDelete /></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer></Footer> 
        </div>
        
    )
}

export default Solicitudes