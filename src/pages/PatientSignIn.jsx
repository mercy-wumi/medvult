import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { deployedAddress } from "../deployedAddress";
import { useContractWrite } from "wagmi";
import healthABI from "../healthABI.json";
import { MedVultContext } from "../context/MedVultContext";

import logo_trans from "../assets/images/logo_trans.svg";
import signinpatient from "../assets/images/signin-patient.png";

const PatientSignIn = () => {
  const { patients, setPatients } = useContext(MedVultContext);
  const navigate = useNavigate();
  const [patientSignInRec, setPatientSignInRec] = useState({
    name: "",
    address: "",
  });

  const handlePatientSIgnIn = (e) => {
    const { name, value } = e.target;
    setPatientSignInRec({
      ...patientSignInRec,
      [name]: value,
    });
  };
  // login doctor here
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: deployedAddress,
    abi: healthABI,
    functionName: "getPatientDetails",
    args: [patientSignInRec.address],
  });
  const handleSignInSubmit = (e) => {
    e.preventDefault();

    write?.();
  };

  useEffect(() => {
    if (data) {
      setPatients({
        ...patients,
        data,
      });
      alert("Patient logged In succesfully");
      navigate("/dashboard");
    }
  }, [data]);

  console.log(patients);

  return (
    <div className="maindiv">
      <div className="from__login">
        <div className="logo__signin">
          <img src={logo_trans} className="logoimage" />
          <p className="welcome__signin">Welcome Patient!</p>
          <p>Please enter the required information</p>
        </div>
        <form className="form__signin">
          <h3>Full name</h3>
          <input
            name="name"
            value={patientSignInRec.name}
            onChange={handlePatientSIgnIn}
            type="text"
            placeholder="Enter name"
          />
          <h3>Wallet Address</h3>
          <input
            name="address"
            value={patientSignInRec.address}
            onChange={handlePatientSIgnIn}
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
          <a href="/signup-patient" className="signup__opt">
            Sign up{" "}
          </a>
        </p>
      </div>
      <div className="health">
        <img src={signinpatient} alt="" className="signin__image" />
      </div>
    </div>
  );
};

export default PatientSignIn;
