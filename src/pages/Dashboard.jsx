import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="parentdiv">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
