import React from 'react'
import './solicitudes.css'
import { AiOutlineInfoCircle, AiOutlineDelete, AiOutlineCheckCircle } from 'react-icons/ai'
import Footer from '../footer/Footer'
import {Link} from 'react-router-dom'

const Solicitudes = () => {
  return (
    <div>
        <div className='titulo-solicitudes'>
            <h1>Mis Solicitudes</h1>
        </div>
        <div className='tabla-solicitudes'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Mensaje</th>
                        <th>Teléfono</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>xxxx</td>
                        <td>xxxx</td>
                        <td>xxxx</td>
                        <td>xxxx@gmail.com</td>
                        <td>Hola, quiero contactarte</td>
                        <td>xxxxxxxx</td>
                        <td>
                            <span><AiOutlineInfoCircle /></span>
                            <span><AiOutlineCheckCircle /></span>
                            <span><AiOutlineDelete /></span>
                        </td>
                    </tr>

                    <tr>
                        <td>xxxx</td>
                        <td>xxxx</td>
                        <td>xxxx</td>
                        <td>xxxx@gmail.com</td>
                        <td>Hola, quiero contactarte</td>
                        <td>xxxxxxxx</td>
                        <td>
                            <span><AiOutlineInfoCircle /></span>
                            <span><AiOutlineCheckCircle /></span>
                            <span><AiOutlineDelete /></span>
                        </td>
                    </tr>

                    <tr>
                        <td>xxxx</td>
                        <td>xxxx</td>
                        <td>xxxx</td>
                        <td>xxxx@gmail.com</td>
                        <td>Hola, quiero contactarte</td>
                        <td>xxxxxxxx</td>
                        <td>
                            <span><AiOutlineInfoCircle /></span>
                            <span><AiOutlineCheckCircle /></span>
                            <span><AiOutlineDelete /></span>
                        </td>
                    </tr>

                    <tr>
                        <td>xxxx</td>
                        <td>xxxx</td>
                        <td>xxxx</td>
                        <td>xxxx@gmail.com</td>
                        <td>Hola, quiero contactarte</td>
                        <td>xxxxxxxx</td>
                        <td>
                            <span><AiOutlineInfoCircle /></span>
                            <span><AiOutlineCheckCircle /></span>
                            <span><AiOutlineDelete /></span>
                        </td>
                    </tr>
                </tbody>
            </table>
                <Link to="/">
            <button className='btn btn-secondary'>Volver</button>
                </Link>
        </div>
    </div>
  )
}

export default Solicitudes