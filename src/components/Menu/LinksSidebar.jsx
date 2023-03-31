import React from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import Swal from 'sweetalert2';

const LinksSidebar = () => {

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
              navigate('/', { state: { logged: false } })
            }
          })
    }
  return (
    <section className='flex flex-col justify-between h-full text-sm'>
            {/* ADMIN */}
        <div className='flex flex-col gap-y-1'>
            <ul className="flex flex-col gap-y-2">
                {/* ADMINISTRACION */}
                <li>
                    <NavLink to={"/dashboard"} state={{ logged: true }} className={({ isActive }) => isActive ? "flex gap-2 px-5 p-3 w-full rounded-md text-white bg-blue-600" : "flex gap-2 px-5 p-3 w-full bg-transparent" } end>
                    {({ isActive }) => (
                        <>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 18V15" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='pt-1 text-center'>Administración</span>
                        </>
                    )}
                    </NavLink>
                </li>
                {/* ESTADISTICAS */}
                <li>
                    <NavLink to={"/dashboard/estadisticas"} state={{ logged: true }} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "flex gap-2 px-5 p-3 w-full rounded-md text-white bg-blue-600" : "flex gap-2 px-5 p-3 w-full bg-transparent" }>
                    {({ isActive }) => (
                        <>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 16.7399V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 5.48999V20.49" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.75 8.48999H5.5" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.5 11.49H5.5" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='pt-[0.15rem] text-center'>Estadísticas</span>
                        </>
                    )}
                    </NavLink>
                </li>
                {/* CURSOS */}
                <li>
                    <NavLink to={"/dashboard/cursos"} state={{ logged: true }} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "flex gap-2 px-5 p-3 w-full rounded-md text-white bg-blue-600" : "flex gap-2 px-5 p-3 w-full bg-transparent" }>
                    {({ isActive }) => (
                        <>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6601 10.44L20.6801 14.62C19.8401 18.23 18.1801 19.69 15.0601 19.39C14.5601 19.35 14.0201 19.26 13.4401 19.12L11.7601 18.72C7.59006 17.73 6.30006 15.67 7.28006 11.49L8.26006 7.30001C8.46006 6.45001 8.70006 5.71001 9.00006 5.10001C10.1701 2.68001 12.1601 2.03001 15.5001 2.82001L17.1701 3.21001C21.3601 4.19001 22.6401 6.26001 21.6601 10.44Z" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.06 19.39C14.44 19.81 13.66 20.16 12.71 20.47L11.13 20.99C7.15998 22.27 5.06997 21.2 3.77997 17.23L2.49997 13.28C1.21997 9.30998 2.27997 7.20998 6.24997 5.92998L7.82997 5.40998C8.23997 5.27998 8.62997 5.16998 8.99997 5.09998C8.69997 5.70998 8.45997 6.44998 8.25997 7.29998L7.27997 11.49C6.29997 15.67 7.58998 17.73 11.76 18.72L13.44 19.12C14.02 19.26 14.56 19.35 15.06 19.39Z" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.64 8.53003L17.49 9.76003" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.66 12.4L14.56 13.14" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='pt-[0.15rem] text-center'>Cursos</span>
                        </>
                    )}
                    </NavLink>
                </li>
            </ul>
              {/* MI CUENTA */}
            <div className='flex flex-col gap-y-1'>
                <span className='text-[#7882BF] text-sm'>Mi cuenta</span>
                <ul>
                {/* PERFIL */}
                <li>
                    <NavLink to={"/dashboard/perfil"} state={{ logged: true }} className={({ isActive }) => isActive ? "flex gap-2 px-5 p-3 w-full rounded-md text-white bg-blue-600" : "flex gap-2 px-5 p-3 w-full bg-transparent" } end>
                    {({ isActive }) => (
                        <>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='pt-[0.15rem] text-center'>Perfil</span>
                        </>
                    )}
                    </NavLink>
                </li>
                {/* MATRICULA */}
                <li>
                    <NavLink to={"/dashboard/matricula"} state={{ logged: true }} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "flex gap-2 px-5 p-3 w-full rounded-md text-white bg-blue-600" : "flex gap-2 px-5 p-3 w-full bg-transparent" }>
                    {({ isActive }) => (
                        <>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 7H16" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 10.5H13" stroke={isActive ? "#fff" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <span className='pt-[0.15rem] text-center'>Matrícula</span>
                        </>
                    )}
                    </NavLink>
                </li>
                </ul>
            </div>
        </div>
            {/* SISTEMA */}
        <div className='flex flex-col gap-6'>
              <span className='text-[#7882BF] text-sm'>Sistema</span>
              <ul className="flex flex-col justify-center items-center gap-y-4">
                  {/* CONFIGURACIÓN */}
                <li className="text-[#292D32] flex items-center gap-1">
                  <NavLink to={"/dashboard/configuracion"} state={{ logged: true }} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "flex gap-2 px-5 p-3 w-full rounded-md text-white bg-blue-600" : "flex gap-2 px-5 p-3 w-full bg-transparent" }>
                    {({ isActive }) => (
                      <>  
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" fill={isActive ? "#fff" : "#292D32"}/>
                        <path d="M15.21 22.1898C15 22.1898 14.79 22.1598 14.58 22.1098C13.96 21.9398 13.44 21.5498 13.11 20.9998L12.99 20.7998C12.4 19.7798 11.59 19.7798 11 20.7998L10.89 20.9898C10.56 21.5498 10.04 21.9498 9.42 22.1098C8.79 22.2798 8.14 22.1898 7.59 21.8598L5.87 20.8698C5.26 20.5198 4.82 19.9498 4.63 19.2598C4.45 18.5698 4.54 17.8598 4.89 17.2498C5.18 16.7398 5.26 16.2798 5.09 15.9898C4.92 15.6998 4.49 15.5298 3.9 15.5298C2.44 15.5298 1.25 14.3398 1.25 12.8798V11.1198C1.25 9.6598 2.44 8.4698 3.9 8.4698C4.49 8.4698 4.92 8.2998 5.09 8.0098C5.26 7.7198 5.19 7.2598 4.89 6.7498C4.54 6.1398 4.45 5.4198 4.63 4.7398C4.81 4.0498 5.25 3.4798 5.87 3.1298L7.6 2.1398C8.73 1.4698 10.22 1.8598 10.9 3.0098L11.02 3.2098C11.61 4.2298 12.42 4.2298 13.01 3.2098L13.12 3.0198C13.8 1.8598 15.29 1.4698 16.43 2.1498L18.15 3.1398C18.76 3.4898 19.2 4.0598 19.39 4.7498C19.57 5.4398 19.48 6.1498 19.13 6.7598C18.84 7.2698 18.76 7.7298 18.93 8.0198C19.1 8.3098 19.53 8.4798 20.12 8.4798C21.58 8.4798 22.77 9.6698 22.77 11.1298V12.8898C22.77 14.3498 21.58 15.5398 20.12 15.5398C19.53 15.5398 19.1 15.7098 18.93 15.9998C18.76 16.2898 18.83 16.7498 19.13 17.2598C19.48 17.8698 19.58 18.5898 19.39 19.2698C19.21 19.9598 18.77 20.5298 18.15 20.8798L16.42 21.8698C16.04 22.0798 15.63 22.1898 15.21 22.1898ZM12 18.4898C12.89 18.4898 13.72 19.0498 14.29 20.0398L14.4 20.2298C14.52 20.4398 14.72 20.5898 14.96 20.6498C15.2 20.7098 15.44 20.6798 15.64 20.5598L17.37 19.5598C17.63 19.4098 17.83 19.1598 17.91 18.8598C17.99 18.5598 17.95 18.2498 17.8 17.9898C17.23 17.0098 17.16 15.9998 17.6 15.2298C18.04 14.4598 18.95 14.0198 20.09 14.0198C20.73 14.0198 21.24 13.5098 21.24 12.8698V11.1098C21.24 10.4798 20.73 9.9598 20.09 9.9598C18.95 9.9598 18.04 9.5198 17.6 8.7498C17.16 7.9798 17.23 6.9698 17.8 5.9898C17.95 5.7298 17.99 5.4198 17.91 5.1198C17.83 4.8198 17.64 4.5798 17.38 4.4198L15.65 3.4298C15.22 3.1698 14.65 3.3198 14.39 3.7598L14.28 3.9498C13.71 4.9398 12.88 5.4998 11.99 5.4998C11.1 5.4998 10.27 4.9398 9.7 3.9498L9.59 3.7498C9.34 3.3298 8.78 3.1798 8.35 3.4298L6.62 4.4298C6.36 4.5798 6.16 4.8298 6.08 5.1298C6 5.4298 6.04 5.7398 6.19 5.9998C6.76 6.9798 6.83 7.9898 6.39 8.7598C5.95 9.5298 5.04 9.9698 3.9 9.9698C3.26 9.9698 2.75 10.4798 2.75 11.1198V12.8798C2.75 13.5098 3.26 14.0298 3.9 14.0298C5.04 14.0298 5.95 14.4698 6.39 15.2398C6.83 16.0098 6.76 17.0198 6.19 17.9998C6.04 18.2598 6 18.5698 6.08 18.8698C6.16 19.1698 6.35 19.4098 6.61 19.5698L8.34 20.5598C8.55 20.6898 8.8 20.7198 9.03 20.6598C9.27 20.5998 9.47 20.4398 9.6 20.2298L9.71 20.0398C10.28 19.0598 11.11 18.4898 12 18.4898Z" fill={isActive ? "#fff" : "#292D32"}/>
                      </svg>
                      <span className='pt-[0.15rem] text-center'>Configuración</span>
                      </>
                    )}  
                  </NavLink>
                </li>
                   {/* CERRAR SESIÓN */}
                <li>
                  <button className="flex gap-2 text-red-500" onClick={logout}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2405 22.27H15.1105C10.6705 22.27 8.5305 20.52 8.1605 16.6C8.1205 16.19 8.4205 15.82 8.8405 15.78C9.2405 15.74 9.6205 16.05 9.6605 16.46C9.9505 19.6 11.4305 20.77 15.1205 20.77H15.2505C19.3205 20.77 20.7605 19.33 20.7605 15.26V8.73998C20.7605 4.66998 19.3205 3.22998 15.2505 3.22998H15.1205C11.4105 3.22998 9.9305 4.41998 9.6605 7.61998C9.6105 8.02998 9.2605 8.33998 8.8405 8.29998C8.4205 8.26998 8.1205 7.89998 8.1505 7.48998C8.4905 3.50998 10.6405 1.72998 15.1105 1.72998H15.2405C20.1505 1.72998 22.2505 3.82998 22.2505 8.73998V15.26C22.2505 20.17 20.1505 22.27 15.2405 22.27Z" fill="#EF4444"/>
                      <path d="M14.9991 12.75H3.61914C3.20914 12.75 2.86914 12.41 2.86914 12C2.86914 11.59 3.20914 11.25 3.61914 11.25H14.9991C15.4091 11.25 15.7491 11.59 15.7491 12C15.7491 12.41 15.4091 12.75 14.9991 12.75Z" fill="#EF4444"/>
                      <path d="M5.84945 16.1001C5.65945 16.1001 5.46945 16.0301 5.31945 15.8801L1.96945 12.5301C1.67945 12.2401 1.67945 11.7601 1.96945 11.4701L5.31945 8.12009C5.60945 7.83009 6.08945 7.83009 6.37945 8.12009C6.66945 8.41009 6.66945 8.89009 6.37945 9.18009L3.55945 12.0001L6.37945 14.8201C6.66945 15.1101 6.66945 15.5901 6.37945 15.8801C6.23945 16.0301 6.03945 16.1001 5.84945 16.1001Z" fill="#EF4444"/>
                    </svg>
                    <span className='pt-[0.15rem] text-center'>Cerrar sesión</span>
                  </button>  
                </li>
              </ul>
        </div>
    </section>
  )
}

export default LinksSidebar
