import { useState } from "react";
import Image from "../assets/Group.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Donar = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    alternatePhone: "",
    currentAddress: "",
    permanentAddress: "",
    branch: "",
    year: "",
    bloodGroup: "",
    college: "",
    project: "",
    heardFrom: "",
    workSpan: "",
    skills: "",
    suggestions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sheetdb.io/api/v1/5ls12jtwtihfh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          alternatePhone: "",
          currentAddress: "",
          permanentAddress: "",
          branch: "",
          year: "",
          bloodGroup: "",
          college: "",
          project: "",
          heardFrom: "",
          workSpan: "",
          skills: "",
          suggestions: "",
        });
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="mt-12 lg:mt-6 mx-4 lg:mx-0 lg:ml-20   p-4 pr-0 lg:pr-0 lg:p-10">
      <div className="flex flex-col-reverse lg:flex-row w-full justify-center items-center">
        <div className="w-full lg:w-[60%] mb-6 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold pb-4 lg:py-6 text-center md:text-start">
            Register as <span className="text-[#E74646]">Volunteer</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail ID"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="alternatePhone"
                placeholder="Alternate Phone Number"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                value={formData.alternatePhone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <textarea
                name="currentAddress"
                placeholder="Current Address"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                value={formData.currentAddress}
                onChange={handleChange}
              />
              <textarea
                name="permanentAddress"
                placeholder="Permanent Address"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                value={formData.permanentAddress}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <input
                type="text"
                name="branch"
                placeholder="Branch"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                value={formData.branch}
                onChange={handleChange}
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                value={formData.year}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <select
                name="bloodGroup"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 border-[0.1rem] bg-white border-[#E74646] rounded-lg"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              <input
                type="text"
                name="college"
                placeholder="College"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                value={formData.college}
                onChange={handleChange}
              />
            </div>
            <select
              name="project"
              className="mb-4 w-full placeholder:text-gray-500 lg:w-[80%] p-2 bg-white border-[0.1rem] border-[#E74646] rounded-lg"
              value={formData.project}
              onChange={handleChange}
            >
              <option value="">Select Project</option>
              <option value="UJAAGAR">UJAAGAR</option>
              <option value="UPHAAR">UPHAAR</option>
              <option value="UMEED">UMEED</option>
              <option value="UDAY">UDAY</option>
              <option value="BLOOD PORTAL">BLOOD PORTAL</option>
              <option value="OTHER">OTHER</option>
            </select>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <select
                name="heardFrom"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 bg-white border-[0.1rem] border-[#E74646] rounded-lg"
                value={formData.heardFrom}
                onChange={handleChange}
              >
                <option value="">Heard From</option>
                <option value="Social Media">Social Media</option>
                <option value="Faculty">Faculty</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
              <select
                name="workSpan"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[38%] p-2 bg-white border-[0.1rem] border-[#E74646] rounded-lg"
                value={formData.workSpan}
                onChange={handleChange}
              >
                <option value="">Select Work Span</option>
                <option value="1 Year">1 Year</option>
                <option value="6 Months">6 Months</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <input
              type="text"
              name="skills"
              placeholder="Your Skills (Comma Separated)"
              className="mb-4 w-full placeholder:text-gray-500 lg:w-[80%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
              value={formData.skills}
              onChange={handleChange}
            />
            <textarea
              name="suggestions"
              placeholder="Suggestions"
              className="mb-4 w-full placeholder:text-gray-500 lg:w-[80%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
              value={formData.suggestions}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-[#E74646] text-white px-4 py-4 md:py-2 my-2 rounded-lg w-full lg:w-auto"
            >
              SUBMIT YOUR APPLICATION
            </button>
          </form>
        </div>
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">
          <img loading="lazy" src={Image} alt="Donation" className="" />
        </div>
      </div>
    </div>
  );
};

export default Donar;
