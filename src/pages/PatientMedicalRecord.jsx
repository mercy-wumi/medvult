import grid_view from "../assets/images/grid_view.png";
import date_range from "../assets/images/date_range.png";
import mypatientbut from "../assets/images/mypatientbut.png";
import registerbut from "../assets/images/registerbut.png";
import settings from "../assets/images/settings.png";
import q1 from "../assets/images/q1.png";
import add_alert from "../assets/images/add_alert.png";
import editbut from "../assets/images/editbut.png";
import heart from "../assets/images/heart.png";
import medlogo from "../assets/images/medlogo.png";
import searchh from "../assets/images/searchh.png";

const PatientMedicalRecord = () => {
  return (
    <div className="secondcolumn">
      <div className="minimenu">
        <h1>My Patients</h1>

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
        <img src={heart} style={{ width: "100px", height: "100px" }} />
        <h1>Zion A. Memorial Hospital</h1>
      </div>
      <div>
        <div className="drview">
          <h3>Patients Medical Record</h3>
        </div>
        <div className="personal">
          <h4>Personal Information</h4>

          <div className="editt">
            <img src={editbut} className="editbutton" />
            <h5>Edit</h5>
          </div>
        </div>

        <div>
          <table>
            <tr>
              <th>
                Prepared for<p>Delphine Stone</p>
              </th>
              <th>
                Date of birth: <p>12/07/1987</p>
              </th>
            </tr>
            <tr>
              <td className="borderr">
                City: <p>Lagos</p>
              </td>
              <td className="borderr">
                Phone number<p>08121345678</p>
              </td>
            </tr>
            <tr>
              <td className="borderr">
                Address: <p>Federal Houing building</p>
              </td>
              <td className="borderr">
                Gender<p>Feamle</p>
              </td>
            </tr>
            <tr>
              <td className="borderr">
                Email address:<p>Elenagbemi@gmail,com</p>
              </td>
              <td className="borderr">
                Weight<p>67kg</p>
              </td>
            </tr>
            <tr>
              <td className="borderr">
                Marital Status<p>Married</p>
              </td>
              <td className="borderr">
                Height<p>167cm</p>
              </td>
            </tr>
          </table>
        </div>

        <div className="emergency">
          <h4>In Case of Emergency</h4>
        </div>

        <div className="emergencyy">
          <div>
            <div>
              {" "}
              <strong>Name: </strong>
              <p> Adam Smith</p>
              <p>
                {" "}
                <strong>Phone Number:</strong>
              </p>
              <p>08056345678</p>
            </div>
          </div>

          <div>
            <div>
              {" "}
              <strong>Address:</strong> <p> Federal Housing building</p>
              <p>
                <strong>Relationship:</strong>
              </p>
              <p>Father</p>
            </div>
          </div>
        </div>

        <div className="tab">
          <div className="tab1">
            <h4>Medication</h4>
            <table>
              <tr>
                <td>
                  Date:<p>02/10/2022</p>
                </td>
                <td>
                  Medication name:<p>Terbutaline (Bricanly)</p>
                </td>
              </tr>
              <tr>
                <td>
                  Refill:<p>Yes</p>
                </td>
                <td>
                  Prescriber:<p>Dr Ken Benjamin</p>
                </td>
              </tr>
              <tr>
                <td>
                  Instruction: <p>2 dose, twice dailys</p>
                </td>
              </tr>
            </table>
          </div>

          <div className="tab2">
            <h4>Immunization</h4>
            <table>
              <tr>
                <td>
                  Name: <p>Telanus & Diptheria toxoids</p>
                </td>
              </tr>
              <tr>
                <td>
                  Type and Base<p>Intramuscular imjection</p>
                </td>
              </tr>
              <tr>
                <td>
                  Value<p>50 mcg</p>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div>
          <h4>Recommendation</h4>
        </div>

        <div className="retext">
          <table>
            <tr>
              <td>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duisAmet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit offi
              </td>
            </tr>
          </table>
        </div>

        <div className="transfercon">
          <button className="transfer">Transfer record</button>
        </div>

        <div className="updatecon">
          <button className="update">Update record</button>
        </div>
      </div>
    </div>
  );
};

export default PatientMedicalRecord;
