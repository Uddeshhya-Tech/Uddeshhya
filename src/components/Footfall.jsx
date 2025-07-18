import { useNavigate } from "react-router-dom";

const Footfall = () => {
  const history = useNavigate();
  return (
    <div className="flex flex-col   lg:flex-row bg-[#E74646] mx-4 lg:mx-24 p-6  lg:p-4 h-auto lg:h-36 rounded-3xl justify-evenly items-center overflow-x-hidden">
      <div
        onClick={() => history("/projects")}
        className="border-b-2 lg:border-b-0 lg:border-r-2 border-white lg:p-10 w-full lg:w-[25%] text-white flex flex-col items-center md:items-start  py-4 lg:py-0 px-4 lg:px-10 lg:h-24 cursor-pointer"
      >
        <h1 className="text-4xl lg:text-5xl">8</h1>
        <p className="text-center">running projects</p>
      </div>

      <div
        onClick={() => history("/projects/Umang")}
        className="border-b-2 lg:border-b-0 lg:p-10 lg:border-r-2 border-white w-full lg:w-[25%] text-white flex flex-col items-center md:items-start py-4 lg:py-0 px-4 lg:px-10 lg:h-24 cursor-pointer"
      >
        <h1 className="text-4xl lg:text-5xl">5</h1>
        <p className="text-center">village schools</p>
      </div>

      <div
        onClick={() => history("/projects/Uday")}
        className="border-b-2 lg:border-b-0 lg:p-10 lg:border-r-2 border-white w-full lg:w-[25%] text-white flex flex-col items-center md:items-start py-4 lg:py-0 px-4 lg:px-10 lg:h-24 cursor-pointer"
      >
        <h1 className="text-4xl lg:text-5xl">20</h1>
        <p className="text-center">evening school students</p>
      </div>

      <div
        onClick={() => history("/projects/Umeed")}
        className="border-b-2 lg:border-b-0 lg:p-10 lg:border-r-2 border-white w-full lg:w-[25%] text-white flex flex-col items-center md:items-start py-4 lg:py-0 px-4 lg:px-10 lg:h-24 cursor-pointer"
      >
        <h1 className="text-4xl lg:text-5xl">10</h1>
        <p className="text-center">night school students</p>
      </div>

      <div
        onClick={() => history("/projects/Uday")}
        className="w-full lg:w-[25%] text-white lg:p-10 flex flex-col items-center md:items-start py-4 lg:py-0 px-4 lg:px-10 lg:h-24 cursor-pointer"
      >
        <h1 className="text-4xl lg:text-5xl">120</h1>
        <p className="text-center">students in slum school</p>
      </div>
    </div>
  );
};

export default Footfall;
