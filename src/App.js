import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Grid } from '@mui/material'

import Header from './components/Header/Header'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import UserRegister from './views/UserRegister/UserRegister'
import AttendanceRegister from './views/AttendanceRegister/AttendanceRegister'
import AnimalRegister from './views/AnimalRegister'
import BreedRegister from './views/BreedRegister'
import SpecieRegister from './views/SpecieRegister'
import TypeRegister from './views/TypeRegister'
import LoginError from './views/LoginError/LoginError'
import Breeds from './views/Relatórios/Breeds'
import Treatments from './views/Relatórios/Treatment'
import Users from './views/Relatórios/User'
import Species from './views/Relatórios/Specie'
import Types from './views/Relatórios/TypesA'
import About from './views/About'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from './global/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router>
        <Header />
        <Grid container justifyContent={'center'} marginTop="70px">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userregister" element={<UserRegister />} />
            <Route
              path="/attendanceregister"
              element={<AttendanceRegister />}
            />
            <Route path="/animalregister" element={<AnimalRegister />} />
            <Route path="/breedregister" element={<BreedRegister />} />
            <Route path="/specieregister" element={<SpecieRegister />} />
            <Route path="/typeregister" element={<TypeRegister />} />
            <Route path="/login/error" element={<LoginError />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/users" element={<Users />} />
            <Route path="/species" element={<Species />} />
            <Route path="/types" element={<Types />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Grid>
      </Router>
    </ThemeProvider>
  )
}
