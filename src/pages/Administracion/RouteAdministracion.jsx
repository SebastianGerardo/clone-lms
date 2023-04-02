import { Outlet } from 'react-router-dom';

function DashboardAdministracion() {
  return (
      <div className="max-h-screen h-screen w-full overflow-y-auto flex flex-col">
          <Outlet />
      </div>
  );
}

export default DashboardAdministracion;
