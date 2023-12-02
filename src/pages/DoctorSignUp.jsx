import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import backIcon from "../assets/images/backIcon.png";

const DoctorSignUp = () => {
  return (
    <div className="flex justify-center items-center bg-purple-background-body h-screen">
      <form
        action=""
        className=" bg-purple-background-form text-border-form h-fit m-4 mr-10 p-10 rounded-lg shadow-2xl shadow-purple-button-first"
      >
        <div className="flex items-center p-10 sm:p-5 md:p-7 lg:p-10 xl:p-14">
          <Link to="/">
            <img src={backIcon} alt="back icon" />
          </Link>
          <h3 className="text-4xl ml-32 mb-px text-[#000]">Doctor SignUp</h3>
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
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="Enter first name"
                />
                <label htmlFor="">Specialization</label>
                <input
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="date"
                />
                <label htmlFor="">City</label>
                <input
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="Enter city"
                />
                <label htmlFor="">Password</label>
                <input
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="password"
                  placeholder="enter password"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Second Name:</label>
                <input
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="Enter second name"
                />
                <label htmlFor="">License Number</label>
                <input
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="tel"
                  placeholder="Enter mobile number"
                />
                <label htmlFor="">State</label>
                <input
                  className=" rounded-lg h-12 w-80 p-4 text-left"
                  type="text"
                  placeholder="Enter state"
                />
                <label htmlFor="">Confirm Password</label>
                <input
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
            Already have an account?<Link to="/signin-doctor"> Click Me</Link>
          </p>
        </div>
        <button className="px-12 py-2 mt-8 bg-purple-background-body text-[#ffffff] rounded-lg flex justify-center items-center w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default DoctorSignUp;
