import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import DashboardRouter from '../pages/DashboardRouter/DashboardRouter'
import { PrivateRouter } from './PrivateRouter'
import Administracion from '../pages/Administracion/Administracion'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter><DashboardRouter/></PrivateRouter>}>
            <Route index element={<Administracion/>} />
            <Route path='estadisticas' element={<h1>Soy el curso</h1>} />
            <Route path='cursos' element={<h1>Soy la estadistica</h1>} />
            <Route path='perfil' element={<h1>Soy el perfil</h1>} />
            <Route path='matricula' element={<h1>Soy la matricula</h1>} />
        </Route>
    </Routes>
  )
}

export default AppRouter
