import React from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './Main'
import Login from './components/login/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
