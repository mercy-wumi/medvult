import q1 from "../assets/images/q1.png";
import q2 from "../assets/images/q2.png";
import q3 from "../assets/images/q3.png";
import q4 from "../assets/images/q4.png";
import add_alert from "../assets/images/add_alert.png";
import lightlogo from "../assets/images/heart.png";
import searchh from "../assets/images/searchh.png";
import { deployedAddress } from "../deployedAddress";
import healthABI from "../healthABI.json";

import { useContext } from "react";
import { useContractRead, useAccount } from "wagmi";
import { MedVultContext } from "../context/MedVultContext";

const DoctorDashOverview = () => {
  const { address } = useAccount();
  const { patients } = useContext(MedVultContext);

  const { data, isError, isLoading } = useContractRead({
    address: deployedAddress,
    abi: healthABI,
    functionName: "getDoctorDetails",
    args: [address],
  });

  return (
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
            {data?.firstName + " " + data?.lastName}
            <br />
            {data?.specialization}
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
        <h3 style={{ fontWeight: 700, fontSize: "18px" }}>
          Hi Doctor {data?.firstName},{" "}
        </h3>
        <span>Welcome back!</span>

        <div className="total-dash">
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
  );
};

export default DoctorDashOverview;
