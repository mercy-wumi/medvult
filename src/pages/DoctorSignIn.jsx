import logo_trans from "../assets/images/logo_trans.svg";
import Frame_2 from "../assets/images/Frame_2.png";

const DoctorSignIn = () => {
  return (
    <div className="maindiv">
      <div className="from__login">
        <div className="logo__signin">
          <img src={logo_trans} className="logoimage" />
          <p className="welcome__signin">Welcome Doctor!</p>
          <p>Please enter the required information</p>
        </div>
        <form className="form__signin">
          <h3>Full name</h3>
          <input type="text" placeholder="Entername" />
          <h3>Wallet Address</h3>
          <input type="text" placeholder="Enter Wallet Adress" />
          <div className="signin__btn">
            <button className="button1">Sign in</button>
          </div>
        </form>
        <p>
          Dont have an account?{" "}
          <a href="/signup-doctor" className="signup__opt">
            Sign up{" "}
          </a>
        </p>
      </div>
      <div className="health">
        <img src={Frame_2} alt="" className="signin__image" />
      </div>
    </div>
  );
};

export default DoctorSignIn;
