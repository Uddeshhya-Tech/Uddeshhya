import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Image from "../assets/Group 10.png";
import { useLocation } from "react-router-dom";

const Donar = () => {
  const { pathname } = useLocation();
  const [disable, setDisable] = useState(0);
  const formRef1 = useRef(); // Ref for donor form
  const formRef2 = useRef(); // Ref for blood request form

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    bloodGroup: "",
    date: "",
    address: "",
  });

  const [isDonorForm, setIsDonorForm] = useState(true);
  const [bloodRequestData, setBloodRequestData] = useState({
    name: "",
    bloodGroup: "",
    phoneNumber: "",
    pinCode: "",
    dob: "",
    requestFor: "",
    requirement: "",
    units: "",
    needByDate: "",
    timing: "",
    address: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBloodRequestChange = (e) => {
    setBloodRequestData({
      ...bloodRequestData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit1 = (e) => {
    setDisable(1);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zsuqctd",
        "template_qawbzgf",
        formRef1.current,
        "UXDYEK58DaimsmIzC"
      )
      .then(
        (result) => {
          alert("Form submitted successfully!");
          setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            bloodGroup: "",
            date: "",
            address: "",
          });
          setDisable(0);
        },
        (error) => {
          alert("Error submitting form: " + error.text);
          setDisable(0);
        }
      );
  };

  const handleSubmit2 = (e) => {
    setDisable(1);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zsuqctd",
        "template_jeace04",
        formRef2.current,
        "UXDYEK58DaimsmIzC"
      )
      .then(
        (result) => {
          alert("Form submitted successfully!");
          setBloodRequestData({
            name: "",
            bloodGroup: "",
            phoneNumber: "",
            pinCode: "",
            dob: "",
            requestFor: "",
            requirement: "",
            units: "",
            needByDate: "",
            timing: "",
            address: "",
            reason: "",
          });
          setDisable(0);
        },
        (error) => {
          alert("Error submitting form: " + error.text);
          setDisable(0);
        }
      );
  };

  return (
    <div className="mt-6 mx-0 lg:mx-0 lg:ml-20 p-4 px-0 lg:pr-0 lg:p-10">
      <div className="flex flex-col-reverse lg:flex-row w-full justify-center items-center">
        <div className="w-full lg:w-[60%] mb-6 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold pb-4 lg:py-6 text-center md:text-start">
            Blood <span className="text-[#E74646]">Donation</span>
          </h1>
          <div className="flex flex-row md:flex-col lg:flex-row mb-6">
            <button
              onClick={() => setIsDonorForm(true)}
              className={`px-2 flex flex-col justify-center items-center w-[95%] lg:w-[27%] py-2 mb-2 lg:mb-0 lg:mr-2 `}
            >
              Register as a Donor
              <span
                className={`w-full h-[2px] ${
                  isDonorForm ? "bg-[#E74646] " : "bg-transparent"
                }`}
              ></span>
            </button>
            <button
              onClick={() => setIsDonorForm(false)}
              className={`px-2 flex flex-col justify-center items-center w-[95%] lg:w-[27%] py-2`}
            >
              Request for Blood
              <span
                className={`w-full h-[2px] ${
                  !isDonorForm ? "bg-[#E74646]" : " bg-transparent"
                }`}
              ></span>
            </button>
          </div>

          <form
            onSubmit={handleSubmit1}
            className={`mr-4 px-5 w-full ${
              isDonorForm
                ? "flex flex-col justify-center items-center md:items-start"
                : "hidden"
            }`}
            ref={formRef1}
          >
            <>
              <input
                type="text"
                name="fullName"
                className="mb-4 w-full lg:w-[80%] p-2 border-[0.1rem] border-[#E74646] placeholder:text-gray-500 rounded-lg"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="mb-4 w-full lg:w-[80%] placeholder:text-gray-500 p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                placeholder="Your E-Mail ID"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="phoneNumber"
                className="mb-4 w-full lg:w-[80%] placeholder:text-gray-500 p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                placeholder="Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <div className="flex w-full lg:w-[80%] flex-col lg:flex-row justify-between">
                <select
                  name="bloodGroup"
                  className="mb-4 w-full bg-white placeholder:text-gray-500 lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  required
                >
                  <option value="" className="text-gray-500">
                    Select Blood Group
                  </option>
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
                  name="date"
                  className="mb-4  w-full placeholder:text-gray-500 lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg text-black bg-white"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Date of Birth"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  required
                />
              </div>
              <textarea
                name="address"
                className="mb-4 w-full placeholder:text-gray-500 lg:w-[80%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </>
            <button
              type="submit"
              disabled={disable}
              className={`text-white cursor-auto px-4 py-4 md:py-2 my-2 rounded-lg w-full  bg-[#E74646] disabled:bg-[#e74646c1] disabled:cursor-not-allowed lg:w-[45%]`}
            >
              SUBMIT YOUR APPLICATION
            </button>
          </form>
          <form
            onSubmit={handleSubmit2}
            className={`mr-4 w-full px-5 ${
              isDonorForm
                ? "hidden"
                : "flex flex-col justify-center items-center md:items-start"
            }`}
            ref={formRef2}
          >
            {" "}
            <>
              <div className="w-full lg:w-[80%] flex lg:flex-row flex-col justify-between">
                <input
                  type="text"
                  name="name"
                  className="mb-2  placeholder:text-gray-500 w-full lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                  placeholder="Patient Name"
                  value={bloodRequestData.name}
                  onChange={handleBloodRequestChange}
                  required
                />
                <select
                  name="bloodGroup"
                  className="mb-2  bg-white w-full placeholder:text-gray-500 lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                  value={bloodRequestData.bloodGroup}
                  onChange={handleBloodRequestChange}
                  required
                >
                  <option value="">Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="w-full lg:w-[80%] flex lg:flex-row flex-col  justify-between">
                <input
                  type="number"
                  name="pinCode"
                  className="mb-2  w-full placeholder:text-gray-500 lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                  placeholder="Pin Code"
                  value={bloodRequestData.pinCode}
                  onChange={handleBloodRequestChange}
                  required
                />

                <input
                  type="number"
                  name="dob"
                  className="mb-2  placeholder:text-gray-500 w-full lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                  placeholder="Age"
                  value={bloodRequestData.dob}
                  onChange={handleBloodRequestChange}
                  min={0}
                  required
                />
              </div>
              {/* <input
                type="text"
                name="dob"
                className="mb-2  w-full placeholder:text-gray-500 lg:w-[40%] p-2 border-[0.1rem] border-[#E74646] rounded-lg text-black bg-white"
                placeholder="Date of Birth"
                value={bloodRequestData.dob}
                onChange={handleBloodRequestChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                required
              /> */}
              <div className="w-full lg:w-[80%] flex lg:flex-row flex-col  justify-between">
                <input
                  type="text"
                  name="requestFor"
                  className="mb-2  w-full placeholder:text-gray-500 lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                  placeholder="Attendee Name"
                  value={bloodRequestData.requestFor}
                  onChange={handleBloodRequestChange}
                  required
                />
                <input
                  type="number"
                  name="phoneNumber"
                  className="mb-2  w-full placeholder:text-gray-500 lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                  placeholder="Attendee Phone Number"
                  value={bloodRequestData.phoneNumber}
                  onChange={handleBloodRequestChange}
                  required
                />
              </div>
              <div className="w-full lg:w-[80%] flex lg:flex-row flex-col  justify-between">
                <select
                  name="requirement"
                  className="mb-2  w-full placeholder:text-gray-500 lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg bg-white"
                  value={bloodRequestData.requirement}
                  onChange={handleBloodRequestChange}
                  required
                >
                  <option value="" disabled>
                    Select Requirement
                  </option>
                  <option value="Blood">Blood</option>
                  <option value="Platelets">Platelets</option>
                  <option value="Plasma">Plasma</option>
                </select>
                <input
                  type="number"
                  name="units"
                  className="mb-2  w-full placeholder:text-gray-500 lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                  placeholder="Number of Units"
                  value={bloodRequestData.units}
                  onChange={handleBloodRequestChange}
                  required
                  min={1}
                />
              </div>
              <div className="w-full lg:w-[80%] flex lg:flex-row flex-col  justify-between">
                <input
                  type="text"
                  name="needByDate"
                  className="mb-2  w-full placeholder:text-gray-500 lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg text-black bg-white"
                  placeholder="Need By Date"
                  value={bloodRequestData.needByDate}
                  onChange={handleBloodRequestChange}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  required
                />
                <select
                  name="timing"
                  className="mb-2  w-full placeholder:text-gray-500 lg:w-[48%] p-2 border-[0.1rem] border-[#E74646] rounded-lg bg-white"
                  value={bloodRequestData.timing}
                  onChange={handleBloodRequestChange}
                  required
                >
                  <option value="" disabled>
                    Select Timing
                  </option>
                  <option value="Immediate">Immediate</option>
                  <option value="Within 2-3 Days">Within 2-3 Days</option>
                  <option value="Within 1 Week">Within 1 Week</option>
                </select>
              </div>
              <textarea
                name="address"
                className="mb-2 md:mr-4 w-full placeholder:text-gray-500 lg:w-[80%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                placeholder="Hospital Address"
                value={bloodRequestData.address}
                onChange={handleBloodRequestChange}
                required
              />
              <textarea
                name="reason"
                className="mb-2 md:mr-4 w-full placeholder:text-gray-500 lg:w-[80%] p-2 border-[0.1rem] border-[#E74646] rounded-lg"
                placeholder="Reason"
                value={bloodRequestData.reason}
                onChange={handleBloodRequestChange}
              />
            </>
            <button
              type="submit"
              disabled={disable}
              className={`text-white cursor-auto px-4 py-4 md:py-2 my-2 rounded-lg w-full lg:w-[45%] bg-[#E74646] disabled:bg-[#e74646c1] disabled:cursor-not-allowed `}
            >
              SUBMIT YOUR APPLICATION
            </button>
          </form>
        </div>
        <div className="lg:w-[50%] mb-4 lg:mb-0">
          <img
            loading="lazy"
            src={Image}
            alt="Group 10"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Donar;
