import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import UserRegister from './views/UserRegister/UserRegister';

export default function App() {
   return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/userregister" element={<UserRegister/>} />        
        </Routes> 
      </div>
    </Router>
   );
}