import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deployedAddress } from "../deployedAddress";
import { useContractWrite } from "wagmi";
import healthABI from "../healthABI.json";

import logo_trans from "../assets/images/logo_trans.svg";
import Frame_2 from "../assets/images/Frame_2.png";

const DoctorSignIn = () => {
  const navigate = useNavigate();
  const [doctorSignInRec, setDoctorSignInRec] = useState({
    name: "",
    address: "",
  });

  const handleDoctorSIgnIn = (e) => {
    const { name, value } = e.target;
    setDoctorSignInRec({
      ...doctorSignInRec,
      [name]: value,
    });
  };

  // login doctor here
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: deployedAddress,
    abi: healthABI,
    functionName: "getDoctorDetails",
    args: [doctorSignInRec.address],
  });
  const handleSignInSubmit = (e) => {
    e.preventDefault();

    write?.();
  };

  useEffect(() => {
    if (data) {
      alert("Doctor logged In succesfully");
      navigate("/dashboard");
    }
  }, [data]);

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
          <input
            name="name"
            value={doctorSignInRec.name}
            onChange={handleDoctorSIgnIn}
            type="text"
            placeholder="Enter name"
          />
          <h3>Wallet Address</h3>
          <input
            name="address"
            value={doctorSignInRec.address}
            onChange={handleDoctorSIgnIn}
            type="text"
            placeholder="Enter Wallet Adress"
          />
          <div className="signin__btn">
            <button onClick={handleSignInSubmit} className="button1">
              Sign in
            </button>
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
