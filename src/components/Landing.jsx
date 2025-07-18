import LandingImage from "../assets/right.png";
import { NavLink } from "react-router-dom";
const Landing = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-evenly items-center  lg:px-10 mt-10 h-screen overflow-x-hidden">
      <div className="w-full lg:w-[50%]  lg:px-20 text-center lg:text-left">
        <h1 className="text-5xl lg:text-7xl text-black font-bold ">
          UD<span className="text-[#E74646]">DESH</span>HYA
        </h1>
        <p className="text-2xl lg:text-3xl mt-2 lg:mt-0">
          living for a reason.
        </p>
        <div className="mt-6 lg:mt-8 flex flex-col lg:flex-row items-center lg:items-start">
          <NavLink to="/donar ">
            <button className="text-white bg-[#E74646] border-[#E74646]  border-2 px-4 mb-4 lg:mb-0 py-[0.4rem] lg:mr-4">
              Donate Now
            </button>
          </NavLink>
          <NavLink to="/volunteer">
            <button className="text-[#E74646] bg-white border-[#E74646] border-2 py-[0.4rem] px-4">
              Become a volunteer
            </button>
          </NavLink>
        </div>
      </div>
      <div className="w-full lg:w-[50%] mt-0 lg:mt-0 flex justify-center relative">
        <img
          src={LandingImage}
          alt="Landing"
          className="p-4 lg:px-10 max-w-full"
        />
        <NavLink to="/volunteer" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-1/2">
          <div className="w-full h-full"></div>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
