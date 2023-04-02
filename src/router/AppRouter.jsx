import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import DashboardRouter from '../pages/router/DashboardRouter'
import { PrivateRouter } from './PrivateRouter'
import Estadisticas from '../pages/Estadisticas/Estadisticas'
import Cursos from '../pages/Cursos/Cursos'
import FormAlumno from '../pages/Formularios/AlumnoRegistro/FormAlumno'
import DashboardAdministracion from '../pages/Administracion/RouteAdministracion'
import Administracion from '../pages/Administracion/components/Administracion'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter><DashboardRouter/></PrivateRouter>}>
            <Route path='administracion' element={<DashboardAdministracion/>}>
              <Route index element={<Administracion/>} />
                {/* CREACION DE USUARIOS */}
              <Route path='create/alumno' element={<FormAlumno />} />
            </Route>
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
