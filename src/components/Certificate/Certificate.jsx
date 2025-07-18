import { useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import axios from "axios";
import { useRef } from "react";
import certTemplate from "../../assets/Certificate.png"; // Adjust the path to your certificate template
import Leave from "../../assets/leaves1.png";

const CertificateGenerator = () => {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(null);
  const certificateRef = useRef();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://sheetdb.io/api/v1/15x9jk1ueghj7"
      );
      const data = response.data;
      const nameExists = data.some(
        (entry) => entry.name.toLowerCase() === name.toLowerCase()
      );

      if (nameExists) {
        setIsNameValid(true);
      } else {
        setIsNameValid(false);
        alert("Name not found. Please register first.");
      }
    } catch (error) {
      console.error("Error checking name:", error);
      alert("Error checking name.");
    }
  };

  return (
    <div className="flex gap-10 flex-col lg:flex-row items-center justify-center relative bg-custom-gradient min-h-screen mt-12 px-4">
      {/* Form Column */}
      <img
        loading="lazy"
        src={Leave}
        alt=""
        className="absolute top-[7rem] left-0  block "
      />
      <div className="flex flex-col w-full lg:w-1/2 max-w-md">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4 lg:py-6 text-center md:text-start">
          Volunteer <span className="text-[#E74646]">Certificate</span>
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="mb-4 p-2 border-2 border-gray-300 rounded-lg w-full"
            value={name}
            onChange={(e) => {
              handleChange(e);
              setIsNameValid(false);
            }}
            required
          />
          <button
            type="submit"
            className="bg-[#E74646] text-white px-4 py-2 rounded-lg w-full"
          >
            Generate Certificate
          </button>
        </form>
      </div>

      {/* Certificate Preview Column */}
      {isNameValid && (
        <>
          <div
            className={`flex flex-col mr-3 w-full lg:w-1/2 mt-10 lg:mt-0 items-center justify-center`}
          >
            <div
              className="relative pt-14 md:pr-4 md:pt-0 w-full h-[80%] md:h-full"
              ref={certificateRef}
            >
              <img
                loading="lazy"
                src={certTemplate}
                alt=""
                className="w-full h-full"
              />
              <div className="absolute w-full top-[50%] md:top-[40%] left-1/2 -translate-x-1/2 text-center  text-black font-semibold text-xl md:text-3xl">
                <p className="text-center certFields">{name}</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                exportComponentAsPNG(certificateRef);
              }}
              className="bg-[#E74646] text-white px-4 py-2 rounded-lg mt-4 mb-10 z-10"
            >
              Download Certificate
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CertificateGenerator;
