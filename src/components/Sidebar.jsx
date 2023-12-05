import { useState } from "react";
import { Link } from "react-router-dom";

import grid_view from "../assets/images/grid_view.png";
import date_range from "../assets/images/date_range.png";
import medlogo from "../assets/images/medlogo.png";
import mypatientbut from "../assets/images/mypatientbut.png";
import registerbut from "../assets/images/registerbut.png";
import settings from "../assets/images/settings.png";

const Sidebar = () => {
  const [sideMenu, setSideMenu] = useState("dashboard");
  return (
    <div className="side-bar">
      <a href="/">
        <img src={medlogo} alt="Medvult Logo" />
      </a>
      <ul className="view__menu">
        <Link to="/dashboard">
          <li
            className={`${sideMenu === "dashboard" && "active-link"}`}
            onClick={() => setSideMenu("dashboard")}
          >
            <img src={grid_view} />
            Dashboard
          </li>
        </Link>
        <Link to="/dashboard">
          <li
            className={`${sideMenu === "appointment" && "active-link"}`}
            onClick={() => setSideMenu("appointment")}
          >
            <img src={date_range} />
            My Appointments
          </li>
        </Link>
        <Link to="/dashboard/my-patient">
          <li
            className={`${sideMenu === "mypatient" && "active-link"}`}
            onClick={() => setSideMenu("mypatient")}
          >
            <img src={mypatientbut} alt="patient" />
            My Patients
          </li>
        </Link>
        <Link to="/signup-patient">
          <li
            className={`${sideMenu === "registerPat" && "active-link"}`}
            onClick={() => setSideMenu("registerPat")}
          >
            <img src={registerbut} />
            Register Patient
          </li>
        </Link>
        <Link to="/dashboard">
          <li
            className={`${sideMenu === "setting" && "active-link"}`}
            onClick={() => setSideMenu("setting")}
          >
            <img src={settings} />
            Setting
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
