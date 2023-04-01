import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import DashboardRouter from '../pages/DashboardRouter/DashboardRouter'
import { PrivateRouter } from './PrivateRouter'
import Administracion from '../pages/Administracion/Administracion'
import Estadisticas from '../pages/Estadisticas/Estadisticas'
import Cursos from '../pages/Cursos/Cursos'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter><DashboardRouter/></PrivateRouter>}>
            <Route index element={<Administracion/>} />
            <Route path='estadisticas' element={<Estadisticas/>} />
            <Route path='cursos' element={<Cursos />} />
            <Route path='perfil' element={<h1>Soy el perfil</h1>} />
            <Route path='matricula' element={<h1>Soy la matricula</h1>} />
            <Route path='configuracion' element={<h1>Soy la configuracion</h1>} />
        </Route>
    </Routes>
  )
}

export default AppRouter
