import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import DashboardRouter from '../pages/router/DashboardRouter'
import { PrivateRouter } from './PrivateRouter'
import Estadisticas from '../pages/Estadisticas/Estadisticas'
import Cursos from '../pages/Cursos/Cursos'
import FormAlumnoRegistro from '../pages/Administracion/pages/Formularios/Alumnos/FormAlumnoRegistro'
import DashboardAdministracion from '../pages/Administracion/RouteAdministracion'
import Administracion from '../pages/Administracion/pages/Administracion/Administracion'
import FormPadreRegistro from '../pages/Administracion/pages/Formularios/Padres/FormPadreRegistro'
import Videos from '../pages/Administracion/pages/TableVideos/Videos'
import Matricula2 from '../pages/Matricula/Matricula'
import CursoMain from '../pages/Cursos/pages/CursoMain/CursoMain'
import CursoVideo from '../pages/Cursos/pages/CursoVideo/CursoVideo'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter><DashboardRouter/></PrivateRouter>}>
            <Route path='administracion' element={<DashboardAdministracion/>}>
              <Route index element={<Administracion/>} />
                {/* CREACION DE USUARIOS */}
              <Route path='edit/alumno' element={<FormAlumnoRegistro />} />
              <Route path='edit/padre' element={<FormPadreRegistro />} />
              <Route path='edit/videos' element={<Videos />} />
            </Route>
            <Route path='estadisticas' element={<Estadisticas/>} />
            <Route path='cursos' element={<Cursos />}>
              <Route index element={<CursoMain/>} />
              <Route path='curso-info/:id' element={<CursoVideo/>} />
            </Route>
            <Route path='perfil' />
            <Route path='matricula' element={<Matricula2 />} />
            <Route path='configuracion' element={<h1>Soy la configuracion</h1>} />
        </Route>
    </Routes>
  )
}

export default AppRouter
