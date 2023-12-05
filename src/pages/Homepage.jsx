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
import viewmore from "../assets/images/viewmore.png";
import medichistory from "../assets/images/empowerment.png";
import iphone from "../assets/images/iphone.png";
import macbook from "../assets/images/macbook.png";
import demoo from "../assets/images/demoo.png";

const Homepage = () => {
  return (
    <div className="first">
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
              <a href="/signup-patient"><img src={tryMedVult} /></a>
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

      <div className="Mainpage">
        <div>
          <p className="why">Why Choose Us</p>
        </div>
        <div className="general">
          <div className="lpmain">
            <div className="lappac">
              <img src={macbook} className="macbook" />
            </div>
            <div className="iPhonepac">
              <img src={iphone} className="mainiphone" />
            </div>
          </div>

          <div className="vertmain">
            <p className="num">01</p>
            <div className="vertical-line"></div>
            <p className="num">02</p>
            <div className="vertical-line"></div>
            <p className="num">03</p>
            {/* <div className="vertical-line"></div> */}
          </div>

          <div className="aboutmed">
            <h4>
              <b>2000+ Registered Hospitals and patients</b>
              <p>
                We have have successfully <br />
                onboarded more than 2000
                <br /> hospitals/ patients for our <br />
                services.{" "}
              </p>
            </h4>

            <h4>
              <b>
                Easy and quick response to update <br />
                patients record
              </b>
              <p>
                Doctors get to update patient record so it <br />
                can be viewed in real time
              </p>
            </h4>

            <h4>Health record security</h4>
            <h4>
              Blockchain encryption ensures the highest
              <br />
              level of data security, protecting patients <br />
              from unauthorized access.
            </h4>
          </div>
        </div>

        <div className="started">
          <button className="getstarted"><a href="/signup-doctor">Get started</a></button>
        </div>

        <div className="recbox">
          <div className="min"></div>
          <h1>
            See How Medvult is making Doctors <br />
            and Patients life easier
          </h1>

          <div className="watch">
            <button className="circlebutton">
              <img src={demoo} className="vidicon" />
            </button>
            <h4>Watch Video</h4>
          </div>
        </div>
        <div className="subandbut">
          <h3 className="Subscribe">Subscribe to our Newsletter</h3>
          <input
            type="text"
            placeholder="Enter your Email Address"
            className="sub__input"
          />
          <button className="form-btn">Subscribe</button>
        </div>

        <div className="lastdiv">
          <img src={medlogo} className="logo" />
          <div>
            <ul>
              <p>Product</p>
              <li>
                <a href="#">Medication</a>
              </li>
              <li>
                <a href="#">Appointment</a>
              </li>
              <li>
                <a href="#">Nutrition</a>
              </li>
              <li>
                <a href="#">Nutrition</a>
              </li>
              <li>
                <a href="#">Custom Webhooks</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <p>Services</p>
              <li>
                <a href="#">Create record</a>
              </li>
              <li>
                <a href="#">View health record</a>
              </li>
              <li>
                <a href="#">Update health record</a>
              </li>
              <li>
                <a href="#">Book appointment</a>
              </li>
              <li>
                <a href="#">DAta security</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <p>About Us</p>
              <li>
                <a href="#">Medvult medics</a>
              </li>
              <li>
                <a href="#">contact address</a>
              </li>
              <li>
                <a href="#">Clinics</a>
              </li>
              <li>
                <a href="#">Subscribers</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <p>Contact</p>
              <li>
                <a href="#">+23487690345678</a>
              </li>
              <li>
                <a href="#">Info@medvult,com</a>
              </li>
              <li>
                <a href="#">54 jones close porthacourt</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer">
          <p>
            Developed with love by{" "}
            <a href="#" className="code">
              Medvulsgroup
            </a>{" "}
            © 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
