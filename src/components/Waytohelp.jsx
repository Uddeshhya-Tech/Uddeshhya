import Way from "../assets/way.jpg";
import Third from "../assets/298800_issue_closed_icon (1).png";
import Second from "../assets/Group 3.png";
import First from "../assets/10559945_volunteer_military_service_participant_icon (1).png";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../assets/slideShow/WhatsApp Image 2024-07-22 at 12.07.56 AM (1).jpeg";
import slide2 from "../assets/slideShow/WhatsApp Image 2024-07-22 at 12.07.56 AM (2).jpeg";
import slide3 from "../assets/slideShow/WhatsApp Image 2024-07-22 at 12.07.56 AM.jpeg";
import slide4 from "../assets/slideShow/WhatsApp Image 2024-07-22 at 12.07.58 AM.jpeg";
import slide5 from "../assets/slideShow/WhatsApp Image 2024-07-22 at 12.37.31 AM.jpeg";
const Waytohelp = () => {
  // const [slideShow, setSlideShow] = useState(0);
  // useEffect(() => {
  //   setInterval(() => {
  //     if (slideShow == 2) {
  //       setSlideShow(0);
  //     }
  //     setSlideShow(slideShow + 1);
  //   }, 5000);
  // }, [slideShow]);
  return (
    <div
      className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center  w-full h-auto p-6 lg:p-10 lg:pl-20 overflow-x-hidden "
      id="way-to-help"
    >
      <div className="w-full lg:w-[50%] p-4 lg:p-6">
        <h1 className="text-black   text-3xl lg:text-5xl tracking-tight font-bold border-b-[0.1rem] border-b-black py-4 lg:py-6 inline-block w-full lg:w-[80%]">
          Way to <span className="text-[#E74646]">Help</span>
        </h1>
        <NavLink to={"/volunteer"}>
          <div className="flex items-center  justify-between group mt-4 md:pr-28">
            <div className="flex justify-center items-center">
              <img
                loading="lazy"
                src={First}
                className="h-10 ml-0 m-4 md:m-4"
                alt=""
              />
              <p className="mt-0 text-lg">
                <span className="font-bold">Register as a volunteer</span>
                <br />
                Join us in making a difference.
              </p>
            </div>

            <BsArrowUpRightCircle className="w-8 h-8 text-[#E74646] md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>{" "}
        </NavLink>
        <NavLink to={"https://forms.gle/7Y7f6YJKiNpdYXD29"} target="blank">
          <div className="group flex items-center justify-between mt-4 md:pr-28">
            <div className="flex justify-center items-center">
              <img
                loading="lazy"
                src={Second}
                className="h-10 ml-0 m-4 md:m-4"
                alt=""
              />
              <p className="mt-4 text-lg">
                <span className="font-bold">Birthday for a cause</span>
                <br />
                Celebrate by supporting our mission.
              </p>
            </div>

            <BsArrowUpRightCircle className="w-8 h-8 text-[#E74646] md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </NavLink>
        <a href="#contact">
          <div className="group flex items-center justify-between mt-4 md:pr-28">
            <div className="flex justify-center items-center">
              <img
                loading="lazy"
                src={Third}
                className="h-10 ml-0 m-4 md:m-4"
                alt=""
              />
              <p className="mt-4 text-lg">
                <span className="font-bold">Raise an Issue with Us</span>
                <br />
                Report concerns; advocate for change.
              </p>
            </div>

            <BsArrowUpRightCircle className="w-8 h-8 text-[#E74646] md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </a>
      </div>
      <div className="w-full lg:w-[50%] h-full flex justify-center overflow-visible ">
        <div className="slide-container h-full  overflow-visible w-full">
          <Fade arrows={false} pauseOnHover={false} duration={3000}>
            <div className="each-fade h-[78%] w-full overflow-visible">
              <div className="image-container w-full overflow-visible p-3  h-full relative">
                <img
                  loading="lazy"
                  src={slide1}
                  className="rounded-2xl w-full h-full mt-14 mb-10 shadow-lg shadow-[#636363]"
                  alt="Ways to help"
                />
                <h1 className="z-[50] absolute bottom-2 md:bottom-5 right-5 md:right-10 text-right text-md md:text-3xl w-[15rem] md:w-[20rem] text-white font-bold">
                  Glimpses from our Village School Project
                </h1>
              </div>
            </div>
            <div className="each-fade w-full h-[78%]">
              <div className="image-container w-full p-3 h-full relative">
                <img
                  loading="lazy"
                  src={slide2}
                  className="rounded-2xl w-full h-full mt-14 mb-10 shadow-lg shadow-[#636363]"
                  alt="Ways to help"
                />
                <h1 className="z-[50] absolute bottom-2 md:bottom-5 right-5 md:right-10 text-right text-md md:text-3xl w-[15rem] md:w-[20rem] text-white font-bold">
                  Glimpses from our Village School Project
                </h1>
              </div>
            </div>
            <div className="each-fade w-full h-[78%]">
              <div className="image-container w-full p-3 h-full relative">
                <img
                  loading="lazy"
                  src={slide3}
                  className="rounded-2xl w-full h-full mt-14 mb-10 shadow-lg shadow-[#636363]"
                  alt="Ways to help"
                />
                <h1 className="z-[50] absolute bottom-2 md:bottom-5 right-5 md:right-10 text-right text-md md:text-3xl w-[15rem] md:w-[20rem] text-white font-bold">
                  Glimpses from our Village School Project
                </h1>
              </div>
            </div>
            <div className="each-fade w-full h-[78%]">
              <div className="image-container w-full p-3 h-full relative">
                <img
                  loading="lazy"
                  src={slide4}
                  className="rounded-2xl w-full h-full mt-14 mb-10 shadow-lg shadow-[#636363]"
                  alt="Ways to help"
                />
                <h1 className="z-[50] absolute bottom-2 md:bottom-5 right-5 md:right-10 text-right text-md md:text-3xl w-[15rem] md:w-[20rem] text-white font-bold">
                  Glimpses from our Village School Project
                </h1>
              </div>
            </div>
            <div className="each-fade w-full h-[78%]">
              <div className="image-container w-full h-full p-3 relative">
                <img
                  loading="lazy"
                  src={slide5}
                  className="rounded-2xl w-full h-full mt-14 mb-10 shadow-lg shadow-[#636363]"
                  alt="Ways to help"
                />
                <h1 className="z-[50] absolute bottom-2 md:bottom-5 right-5 md:right-10 text-right text-md md:text-3xl w-[15rem] md:w-[20rem] text-white font-bold">
                  Glimpses from our Village School Project
                </h1>
              </div>
            </div>
          </Fade>
        </div>
        {/* <img
          src={Way}
          className={
            "rounded-2xl w-[80%] h-[82%]  mt-14 mb-10 shadow-lg shadow-black absolute top-0"
          }
          alt="Ways to help"
        />
        <img
          src={
            "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          }
          className={
            "rounded-2xl w-[80%] mt-14 mb-10 shadow-lg shadow-black absolute top-0"
          }
          alt="Ways to help"
        />
        <img
          src={
            "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          }
          className={
            "rounded-2xl w-[80%] mt-14 mb-10 shadow-lg shadow-black absolute top-0"
          }
          alt="Ways to help"
        /> */}
      </div>
    </div>
  );
};

export default Waytohelp;
