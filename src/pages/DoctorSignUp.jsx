import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractWrite } from "wagmi";
import healthABI from "../healthABI.json";
import { deployedAddress } from "../deployedAddress";

import backIcon from "../assets/images/backIcon.png";

const DoctorSignUp = () => {
  const navigate = useNavigate();
  const { address } = useAccount();

  const [doctorRec, setDoctorRec] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    license: "",
    city: "",
    state: "",
    hospital: "",
    speciality: "",
  });

  const handleDoctorSIgnUp = (e) => {
    const { name, value } = e.target;
    setDoctorRec({
      ...doctorRec,
      [name]: value,
    });
  };
  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    write?.();
  };

  // adding basic doctor info here
  const { data, write } = useContractWrite({
    address: deployedAddress,
    abi: healthABI,
    functionName: "addDoctors",
    args: [
      address,
      doctorRec.first_name,
      doctorRec.last_name,
      doctorRec.dob,
      doctorRec.speciality,
      doctorRec.license,
      doctorRec.city,
      doctorRec.state,
      doctorRec.hospital,
    ],
  });

  useEffect(() => {
    if (data) {
      alert("Doctor created succesfully");
      navigate("/signin-doctor");
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center bg-purple-background-body h-screen">
      <form className=" bg-purple-background-form text-[#000] h-fit m-4 mr-10 p-10 rounded-lg shadow-2xl shadow-purple-button-first">
        <div className="flex items-center p-4">
          <Link to="/">
            <img src={backIcon} alt="back icon" />
          </Link>
          <h3 className="text-4xl mb-4 text-[#000] flex justify-center items-center flex-1">
            Doctor SignUp
          </h3>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:items-end sm:gap-3">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center">
              <ConnectButton />
            </div>
            <br />
            <div className="flex justify-center items-center flex-col gap-10 sm:flex-row">
              <div className="flex flex-col">
                <label htmlFor="">First Name:</label>
                <input
                  name="first_name"
                  value={doctorRec.first_name}
                  onChange={handleDoctorSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="Alice"
                />
                <label htmlFor="">Date Of Birth</label>
                <input
                  name="date_of_birth"
                  value={doctorRec.date_of_birth}
                  onChange={handleDoctorSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="date"
                />
                <label htmlFor="">City</label>
                <input
                  name="city"
                  value={doctorRec.city}
                  onChange={handleDoctorSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="New York"
                />
                <label htmlFor="">Name of Hospital</label>
                <input
                  name="hospital"
                  value={doctorRec.hospital}
                  onChange={handleDoctorSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="Medvult hospital"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Last Name:</label>
                <input
                  name="last_name"
                  value={doctorRec.last_name}
                  onChange={handleDoctorSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="Bob"
                />
                <label htmlFor="">License Number</label>
                <input
                  name="license"
                  value={doctorRec.license}
                  onChange={handleDoctorSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="number"
                  placeholder="123456"
                />
                <label htmlFor="">State</label>
                <input
                  name="state"
                  value={doctorRec.state}
                  onChange={handleDoctorSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="New York"
                />
                <label htmlFor="">Specialization</label>
                <input
                  name="speciality"
                  value={doctorRec.speciality}
                  onChange={handleDoctorSIgnUp}
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="Dentist"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-xs font-normal mt-4">
            Already have an account?<Link to="/signin-doctor"> Click Me</Link>
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

export default DoctorSignUp;
