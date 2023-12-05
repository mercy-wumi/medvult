import grid_view from "../assets/images/grid_view.png";
import date_range from "../assets/images/date_range.png";
import medlogo from "../assets/images/medlogo.png";
import mypatientbut from "../assets/images/mypatientbut.png";
import registerbut from "../assets/images/registerbut.png";
import settings from "../assets/images/settings.png";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <a href="/">
        <img src={medlogo} alt="Medvult Logo" />
      </a>
      <ul className="view__menu">
        <li className="active-link">
          <img src={grid_view} />
          Dashboard
        </li>
        <li>
          <img src={date_range} />
          My Appointments
        </li>
        <li>
          <img src={mypatientbut} alt="patient" />
          My Patients
        </li>
        <li>
          <img src={registerbut} />
          Register Patient
        </li>
        <li>
          <img src={settings} />
          Setting
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
