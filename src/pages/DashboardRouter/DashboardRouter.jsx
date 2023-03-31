// Icons
import { Outlet } from "react-router-dom";
import Header from "../../components/Menu/Header";
import Sidebar from "../../components/Menu/Sidebar";

function DashboardRouter() {
  return (
      <div className="flex items-start">
        <Sidebar />

        <div className="max-h-screen h-screen w-full overflow-y-auto flex flex-col">
            <Header />

              <Outlet />

        </div>
      </div>
  );
}

export default DashboardRouter;
