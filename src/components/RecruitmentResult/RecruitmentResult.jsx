import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
// import "./RecruitmentResult.css";
import logo from "../../assets/logo.jpg";
// import logolight from "../../assets/navbar/black logo br.webp";
// import logodark from "../../assets/navbar/white logo br.webp";
import { color } from "framer-motion";
function RecruitmentResult() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const domains = [
    {
      competitors: [
        { name: "Abhay Sharma", branch: "CSE", year: "1", color: "bg-red-100" },
        {
          name: "Abhishek Tyagi",
          branch: "ECE",
          year: "1",
          color: "bg-red-50",
        },
        { name: "Aditya Singh", branch: "ECE", year: "1", color: "bg-red-100" },
        { name: "Antas Kumar", branch: "CSIT", year: "1", color: "bg-red-50" },
        {
          name: "Anupriya Saxena",
          branch: "CSE",
          year: "1",
          color: "bg-red-100",
        },
        {
          name: "Anushka Rajput",
          branch: "CSEAI",
          year: "1",
          color: "bg-red-50",
        },
        {
          name: "Aranav Mishra",
          branch: "CSEAI",
          year: "1",
          color: "bg-red-100",
        },
        { name: "Aryan Paswan", branch: "IT", year: "1", color: "bg-red-50" },
        { name: "Atul Anand", branch: "IT", year: "1", color: "bg-red-100" },
        { name: "Harsh Aditya", branch: "CSE", year: "1", color: "bg-red-50" },
        {
          name: "Harshit Ranjan Sharma",
          branch: "CS",
          year: "1",
          color: "bg-red-100",
        },
        { name: "Jyoti Gupta", branch: "ECE", year: "1", color: "bg-red-50" },
        { name: "Kundan Kumar", branch: "ECE", year: "1", color: "bg-red-100" },
        { name: "Naman Jadiya", branch: "CSE", year: "1", color: "bg-red-50" },
        { name: "Nidhi Chauhan", branch: "ME", year: "1", color: "bg-red-100" },
        {
          name: "Nimisha Agarwal",
          branch: "ECE",
          year: "1",
          color: "bg-red-50",
        },
        {
          name: "Rajni Gangwar",
          branch: "CSIT",
          year: "1",
          color: "bg-red-100",
        },
        { name: "Sanjay Kumar", branch: "ECE", year: "1", color: "bg-red-50" },
        {
          name: "Shefali Yadav",
          branch: "CSIT",
          year: "1",
          color: "bg-red-100",
        },
        {
          name: "Shrashti Agarwal",
          branch: "CS",
          year: "1",
          color: "bg-red-50",
        },
        {
          name: "Shreeja Kashyap",
          branch: "ECE",
          year: "1",
          color: "bg-red-100",
        },
        {
          name: "Srijan Dwivedi",
          branch: "CSE",
          year: "1",
          color: "bg-red-50",
        },
        { name: "Suraj Pal", branch: "CSIT", year: "1", color: "bg-red-100" },
        { name: "Tripti Tomar", branch: "IT", year: "1", color: "bg-red-50" },
        {
          name: "Viraj Kumar Jain",
          branch: "ME",
          year: "1",
          color: "bg-red-100",
        },
        { name: "Vishal Tyagi", branch: "ECE", year: "1", color: "bg-red-50" },
        { name: "Arya Batnam", branch: "EEE", year: "1", color: "bg-red-100" },
        { name: "Shreya", branch: "ECE", year: "1", color: "bg-red-50" },
        {
          name: "Vanshika Agarwal",
          branch: "CS",
          year: "2",
          color: "bg-red-100",
        },
        { name: "Kartik Verma", branch: "EEE", year: "2", color: "bg-red-50" },
        {
          name: "Laxmi Singh",
          branch: "CSEAI",
          year: "2",
          color: "bg-red-100",
        },
        { name: "Muskan Verma", branch: "IT", year: "2", color: "bg-red-50" },
        { name: "Nikhil Mishra", branch: "IT", year: "2", color: "bg-red-100" },
        {
          name: "Sanjana Kesari",
          branch: "Bpharma",
          year: "2",
          color: "bg-red-50",
        },
        {
          name: "Tanisha Saxena",
          branch: "Bpharma",
          year: "2",
          color: "bg-red-100",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-custom-gradient pt-24">
      <header className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div
            className={`flex items-center justify-center space-x-4 transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={logo}
              alt="Ecell Logo"
              width={100}
              height={100}
              className="transition-transform duration-300 ease-out transform hover:scale-110"
            />
            {/* <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 ">
              E-Cell
            </h1> */}
          </div>
          <p
            className={`text-2xl text-gray-600 mt-4 text-center transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Congratulations to all our selected candidates! Welcome to the
            UDDESHHYA!
          </p>
          <h2
            className={`text-4xl font-bold text-gray-800  relative inline-block mt-8 transition-opacity text-center duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Recruitment Results
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 dark:from-pink-700 dark:via-blue-700 dark:to-green-700 transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          </h2>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {domains.map((domain, domainIndex) => (
          <React.Fragment key={domain.name}>
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {domain.competitors.map((competitor, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden transition-all duration-700 ease-out hover:shadow-xl ${
                      competitor.color
                    } ${loaded ? "opacity-100" : "opacity-0"} rounded-lg p-6`}
                    style={{
                      transitionDelay: `${800 + index * 100}ms`,
                      animation: loaded
                        ? `slideIn 0.5s ease-out ${800 + index * 100}ms both`
                        : "none",
                    }}
                  >
                    <div className="pb-0">
                      <div className="flex items-center justify-center text-center space-x-4">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-800 transition-colors duration-300 ease-out ">
                            {competitor.name}
                          </h2>
                          <p className="text-lg text-gray-600 dark:text-gray-600 transition-colors duration-300 ease-out ">
                            {competitor.branch} , {competitor.year} year
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {domainIndex < domains.length - 1 && (
              <div className="w-full border-t border-gray-300 dark:border-gray-600 my-16"></div>
            )}
          </React.Fragment>
        ))}
      </main>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-center transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "2000ms" }}
      >
        <p className="text-xl text-gray-700">
          To those who didn&apos;t make it this time: Keep pushing forward! Your
          dedication and effort are commendable.<br></br>There&apos;s always a
          next opportunity waiting for you.
        </p>
      </div>
    </div>
  );
}

export default RecruitmentResult;
