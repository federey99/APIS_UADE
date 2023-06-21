import React from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './Main'
import Login from './components/login/Login'
import Solicitudes from './components/solicitudes/Solicitudes'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
      </Routes>
    </Router>
  )
}

export default App