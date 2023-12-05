import Sidebar from "../components/Sidebar";

import q1 from "../assets/images/q1.png";
import add_alert from "../assets/images/add_alert.png";
import lightlogo from "../assets/images/heart.png";
import searchh from "../assets/images/searchh.png";
import delphine from "../assets/images/delphine.png";
import { Link } from "react-router-dom";

const MyPatient = () => {
  return (
    <div className="secondcolumn">
      <div className="minimenu">
        <h1>My Patients</h1>
        <div>
          <div className="search__dash">
            <input type="text" placeholder="Search.." name="search" />
            <img src={searchh} alt="search icon" />
          </div>
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
        <img src={lightlogo} style={{ width: "100px", height: "100px" }} />
        <h1>Zion A. Memorial Hospital</h1>
      </div>
      <div>
        <div className="drview">
          <h3>Hi Doctor Ben</h3>
          <button className="vieww">View All</button>
        </div>
        <div className="total">
          {[...Array(12)].map((pat) => (
            <div className="pat-tot">
              <img src={delphine} alt="patient profile" />
              <p>Delphine Jones</p>
              <p>Female</p>
              <button className="viewbuttons">
                <Link to="/dashboard/patient-record">View Record</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPatient;