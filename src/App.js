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
import LoginError from './views/LoginError/LoginError'
import Breeds from './views/Breeds'
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
            <Route path="/login/error" element={<LoginError />} />
            <Route path="/breeds" element={<Breeds />} />
          </Routes>
        </Grid>
      </Router>
    </ThemeProvider>
  )
}
