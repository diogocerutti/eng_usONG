import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import UserRegister from './views/UserRegister/UserRegister'
import AttendanceRegister from './views/AttendanceRegister/AttendanceRegister'
import LoginError from './views/LoginError/LoginError'
import Teste from './views/Teste/index'

export default function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userregister" element={<UserRegister />} />
          <Route path="/attendanceregister" element={<AttendanceRegister />} />
          <Route path="/login/error" element={<LoginError />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
      </div>
    </Router>
  )
}
