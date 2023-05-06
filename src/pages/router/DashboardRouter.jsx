import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Waveform } from '@uiball/loaders';
import Header from '../../components/Menu/Header';
import Sidebar from '../../components/Menu/Sidebar';

function DashboardRouter() {
  const [lastLocation, setLastLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      if (lastLocation) {
        navigate(lastLocation, {
          state: {
            logged: true,
          },
        });
      } else {
        navigate('/dashboard/administracion', {
          state: {
            logged: true,
          },
        });
      }
    } else {
      setLastLocation(location.pathname);
    }
  }, [location]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);

  }, []);

  return (
    <div className="flex justify-center items-center">
      <Sidebar />
      <div className="max-h-screen h-screen w-full overflow-y-auto flex flex-col">
        <Header />
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Waveform size={35} color={'#ef4444'} />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default DashboardRouter;
