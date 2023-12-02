import { Link } from "react-router-dom";

// images import
import medlogo from "../assets/images/medlogo.png";
import tryMedVult from "../assets/images/try.png";
import medimage from "../assets/images/medimage.png";
import medsponsors from "../assets/images/medsponsors.png";
import secondimage from "../assets/images/secondimage.png";
import securityimage from "../assets/images/securityimage.png";
import interoperability from "../assets/images/interoperability.png";
import empowerment from "../assets/images/empowerment.png";
import dataMedVult from "../assets/images/data.png";
import compliance from "../assets/images/compliance.png";
import medichistory from "../assets/images/empowerment.png";
import viewmore from "../assets/images/viewmore.png";

const Homepage = () => {
  return (
    <div className="holder">
      <section className="firstsection">
        <nav className="first_menu">
          <h1 id="logo">
            <img src={medlogo} />
          </h1>

          <div id="page">
            <div id="bar">
              <ul>
                <li className="menu" id="menuitem1">
                  Home
                </li>
                <li className="menu" id="menuitem2">
                  About us
                </li>
                <li className="menu" id="menuitem3">
                  Services
                </li>
                <li className="menu" id="menuitem4">
                  Contact Us
                </li>
                <li className="menu" id="menuitem4">
                  <Link to="signup-doctor">Register as Doctor</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="buttons">
            <Link to="signup-patient">
              <button className="firstbutton">Register</button>
            </Link>
            <Link to="signin-patient">
              <button className="secondbutton">Sign in</button>
            </Link>
          </div>
        </nav>
      </section>

      <section>
        <div className="row">
          <div className="text">
            <h3 className="medcopy">
              A secure and Updated patients health record is our priority.
            </h3>
            <h5 className="secondcopy">
              Medvult gives you easy and secure access to all your
              <br /> medical records
            </h5>

            <div className="try">
              <img src={tryMedVult} />
            </div>
          </div>
          <div className="imageholder">
            <img src={medimage} />
          </div>
        </div>
      </section>

      <section>
        <div className="sponsorholder">
          <img src={medsponsors} />
        </div>
      </section>

      <section>
        <div className="aboutsection">
          <div className="abouttext">
            <h2 className="aboutcopy">About Us</h2>
            <h3>
              Medvult is an electronic health record website that is
              transforming healthcare with secure blockchain solutions.
              <p>
                We are revolutionizing the healthcare landscape by harnessing
                the power of blockchain to secure and streamline the storage of
                patients' medical records. And at the same time having patients
                book and attend their medical appointments online.
              </p>
              <p>
                We empower individuals with controlover their health information
                while providing healthcare providers with a seamless and secure
                means of accessing critical patient data.
              </p>
            </h3>

            <div className="read">
              <button className="readbut">Read More</button>
            </div>
          </div>

          <div className="docimage">
            <img src={secondimage} />
          </div>
        </div>

        <div className="textholderr">
          <h2 id="valuetext">The Value We Provide</h2>

          <div className="whychosefeatures">
            <div className="firstline">
              <img src={securityimage} />
              <img src={interoperability} />
              <img src={empowerment} />
            </div>
          </div>

          <div className="secondline">
            <img src={dataMedVult} />
            <img src={compliance} />
            <img src={medichistory} />
          </div>

          <div className="div-button">
            <img src={viewmore} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
