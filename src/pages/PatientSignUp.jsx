import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAccount, useContractWrite } from "wagmi";
import healthABI from "../healthABI.json";
import { deployedAddress } from "../deployedAddress";

import backIcon from "../assets/images/backIcon.png";

const PatientSignUp = () => {
  const navigate = useNavigate();
  const { address } = useAccount();

  const [patientRec, setPatientRec] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone: "",
    age: "",
    gender: "0",
    city: "",
    state: "",
    password: "",
    confirm_password: "",
  });

  const handlePatientSIgnUp = (e) => {
    const { name, value } = e.target;
    setPatientRec({
      ...patientRec,
      [name]: value,
    });
  };

  // adding basic doctor info here
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: deployedAddress,
    abi: healthABI,
    functionName: "addPatients",
    args: [
      address,
      patientRec.first_name,
      patientRec.last_name,
      patientRec.phone,
      patientRec.dob,
      patientRec.age,
      patientRec.city,
      patientRec.state,
      patientRec.gender,
      patientRec.password,
      patientRec.confirm_password,
    ],
  });

  useEffect(() => {
    if (data) {
      alert("Patient created succesfully");
      navigate("/signin-patient");
    }
  }, [data]);

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    write?.();
  };
  return (
    <div className="flex justify-center items-center bg-purple-background-body h-screen">
      <form className=" bg-purple-background-form text-[#000] h-fit m-4 mr-10 p-10 rounded-lg shadow-2xl shadow-purple-button-first">
        <div className="flex items-center p-4">
          <Link to="/">
            <img src={backIcon} alt="back icon" />
          </Link>
          <h3 className="text-4xl mb-4 text-[#000] flex justify-center items-center flex-1">
            Patients SignUp
          </h3>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:items-end sm:gap-3">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center mb-4">
              <ConnectButton />
            </div>
            <div className="flex justify-center items-center flex-col gap-10 sm:flex-row">
              <div className="flex flex-col">
                <label htmlFor="">First Name:</label>
                <input
                  name="first_name"
                  value={patientRec.first_name}
                  onChange={handlePatientSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="John"
                />
                <label htmlFor="">D.O.B</label>
                <input
                  name="date_of_birth"
                  value={patientRec.date_of_birth}
                  onChange={handlePatientSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="date"
                />
                <label htmlFor="">Age</label>
                <input
                  name="age"
                  value={patientRec.age}
                  onChange={handlePatientSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="number"
                />
                <label htmlFor="">City</label>
                <input
                  name="city"
                  value={patientRec.city}
                  onChange={handlePatientSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="Lagos"
                />
                <label htmlFor="">Password</label>
                <input
                  name="password"
                  value={patientRec.password}
                  onChange={handlePatientSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="password"
                  placeholder="enter password"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Last Name:</label>
                <input
                  name="last_name"
                  value={patientRec.last_name}
                  onChange={handlePatientSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="Doe"
                />
                <label htmlFor="">Mobile Number</label>
                <input
                  name="phone"
                  value={patientRec.phone}
                  onChange={handlePatientSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="tel"
                  placeholder="Enter mobile number"
                />
                <label htmlFor="">Gender</label>
                <select
                  name="gender"
                  value={patientRec.gender}
                  onChange={handlePatientSIgnUp}
                  className=" rounded-lg h-12 w-80 text-left"
                >
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                </select>
                <label htmlFor="">State</label>
                <input
                  name="state"
                  value={patientRec.state}
                  onChange={handlePatientSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="Enter state"
                />
                <label htmlFor="">Confirm Password</label>
                <input
                  name="confirm_password"
                  value={patientRec.confirm_password}
                  onChange={handlePatientSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="password"
                  placeholder="reenter password"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-xs font-normal mt-4">
            Already have an account?<Link to="/signin-patient"> Click Me</Link>
          </p>
        </div>
        <button
          onClick={handleSignUpSubmit}
          className={`${
            address
              ? "bg-purple-background-body"
              : "bg-[#b0b0b0] pointer-events-none"
          } px-12 py-2 mt-8 text-[#ffffff] rounded-lg flex justify-center items-center w-full`}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default PatientSignUp;
