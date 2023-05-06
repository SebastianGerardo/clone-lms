import React from "react"
import Swal from 'sweetalert2'
import { useNavigate, NavLink } from 'react-router-dom'

export const NavLinks = ({links = []}) => {
    return (
      <>
        {
          links.length > 0 && links.map((data, index) => (
            <li key={index}>
              <NavLink to={data.to} 
              state={{ logged: true }} 
              className={({ isActive }) =>
               isActive 
                ? "flex gap-2 px-5 p-3 w-full rounded-md text-white bg-[#ef4444]" 
                : "flex gap-2 px-5 p-3 w-full bg-transparent" 
                } 
              >
              {({ isActive }) => (
                  <>
                    {React.cloneElement(data.icon, {
                      isActive
                    })}
                    <span className='pt-1 text-center'>{data.name}</span>
                  </>
              )} 
              </NavLink>
            </li>
            ))
        }
      </>
    )
  }

export const Logout = ({children}) => {
    const navigate = useNavigate();
  
    const logout = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Estás a punto de cerrar sesión...',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2563EB',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar sesión',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem('token')
              navigate('/login', { state: { logged: false } })
            }
          })
    }
  
    return (
      <div onClick={logout}>
        {children}
      </div>
    )
  }