import q1 from "../assets/images/q1.png";
import q2 from "../assets/images/q2.png";
import q3 from "../assets/images/q3.png";
import q4 from "../assets/images/q4.png";
import settings from "../assets/images/settings.png";
import add_alert from "../assets/images/add_alert.png";
import lightlogo from "../assets/images/heart.png";
import grid_view from "../assets/images/grid_view.png";
import date_range from "../assets/images/date_range.png";
import medlogo from "../assets/images/medlogo.png";

import mypatientbut from "../assets/images/mypatientbut.png";
import registerbut from "../assets/images/registerbut.png";
import searchh from "../assets/images/searchh.png";

const DoctorDashOverview = () => {
  return (
    <div className="parentdiv">
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
            <img src={date_range} className="icon" />
            My Appointments
          </li>
          <li>
            <img src={mypatientbut} alt="patient" />
            My Patients
          </li>
          <li>
            <img src={registerbut} className="icon" />
            Register Patient
          </li>
          <li>
            <img src={settings} className="icon" />
            Setting
          </li>
        </ul>
      </div>
      <div className="secondcolumn">
        <div className="minimenu">
          <h1>Overview</h1>

          <div className="search__dash">
            <input type="text" placeholder="Search.." name="search" />
            <img src={searchh} alt="search icon" />
          </div>

          <div className="lastrow">
            <img src={add_alert} className="img1" />
            <img src={q1} className="img2" />
            <h4 className="drb">
              {" "}
              Dr. Ben
              <br />
              dentist
            </h4>
          </div>
        </div>
        <div id="light">
          <img
            src={lightlogo}
            style={{ width: "100px", height: "100px" }}
            alt="logo"
          />
          <h1>Zion A. Memorial Hospital</h1>
        </div>
        <div>
          <h3 style={{ fontWeight: 700, fontSize: "18px" }}>Hi Doctor Ben, </h3>
          <span>Welcome back!</span>

          <div className="total">
            <div className="tot">
              <img src="" />
              Total Patients
              <br />
              <br />
              3000
            </div>
            <div className="tot">
              New Patients
              <br />
              <br />
              30
            </div>
            <div className="tot ">
              Todays appointment
              <br />
              <br />
              15
            </div>
          </div>
          <h3 className="h3">Appointment Activity</h3>
        </div>
        <table className="table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>Gender</td>
              <td>Date</td>
              <td>Time</td>
              <td>Reason</td>
            </tr>
            <tr>
              <td className="profile__dash">
                <img alt="" src={q1} className="jane" />
                Jane Doe
              </td>
              <td>Female</td>
              <td>2/11/2023</td>
              <td>9.00am</td>
              <td>Fever</td>
            </tr>
            <tr>
              <td className="profile__dash">
                <img alt="" src={q3} className="jane" /> Jane Doe
              </td>
              <td>Female</td>
              <td>2/11/2023</td>
              <td>9.00am</td>
              <td>Fever</td>
            </tr>
            <tr>
              <td className="profile__dash">
                <img alt="" src={q2} className="jane" />
                Jane Doe
              </td>
              <td>Female</td>
              <td>2/11/2023</td>
              <td>9.00am</td>
              <td>Fever</td>
            </tr>
            <tr>
              <td className="profile__dash">
                <img alt="" src={q4} className="jane" />
                Jane Doe
              </td>
              <td>Female</td>
              <td>2/11/2023</td>
              <td>9.00am</td>
              <td>Fever</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorDashOverview;
