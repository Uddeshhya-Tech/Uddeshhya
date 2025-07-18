import logo from "../assets/logo.jpg";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col-reverse lg:flex-row lg:justify-around lg:items-start h-auto p-4 lg:p-10   bg-[#E74646] px-10 overflow-hidden max-w-full"
      >
        <div className="w-full lg:w-[50%] mb-6 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl text-white border-b-[0.1rem] border-b-slate-100 py-2 lg:py-4 mb-4">
            Contact Us
          </h1>
          <p className="text-white text-xl lg:text-3xl my-2 font-bold">
            Reach Us
          </p>
          <p className="text-white my-2 break-words whitespace-normal flex items-center gap-2">
            <CiLocationArrow1 className="text-white w-10 h-10 md:w-5 md:h-5" />
            13th KM Stone, KIET Group Of Institution, Delhi Meerut Highway,
            Ghaziabad, IN 201206
          </p>
          <p className="text-white my-2 whitespace-normal flex items-center gap-2">
            <IoMailOutline className="text-white w-5 h-5" />{" "}
            weareuddeshhya@gmail.com
          </p>
          <p className="text-white my-3 whitespace-normal">
            <span className="flex gap-2 items-center">
              <CiPhone className="text-white w-5 h-5" />
              Gaurav Payal - +91 9149744734
            </span>

            <span className="flex gap-2 items-center">
              <CiPhone className="text-white w-5 h-5" />
              Rishabh Bharti - +91 9369978401
            </span>

            <span className="flex gap-2 items-center">
              <CiPhone className="text-white w-5 h-5" />
              Shreya khare - +91 7307870804
            </span>
          </p>
        </div>
        <div>
          <h1 className="text-3xl lg:text-5xl text-white border-b-[0.1rem] border-b-slate-100 py-2 lg:py-4 mb-4">
            Links
          </h1>
          <ul className="text-white">
            <Link to="/">
              <li>&gt; About Us</li>
            </Link>
            <Link to="/projects/Uday">
              <li>&gt; Uday</li>
            </Link>
            <Link to="/projects/Umeed">
              <li>&gt; Umeed</li>
            </Link>
            <Link to="/projects/Ujagar">
              <li>&gt; Ujagar</li>
            </Link>
            <Link to="/projects/Umang">
              <li>&gt; Umang</li>
            </Link>
            <Link to="/projects/Uphar">
              <li>&gt; Uphar</li>
            </Link>
            <Link to="/projects/Ujala">
              <li>&gt; Ujala</li>
            </Link>
            <Link to="/projects/Blood%20Portal">
              <li>&gt; Blood Portal</li>
            </Link>
            <Link to="/projects/Blood%20Portal">
              <li>&gt; Register As Volunteer</li>
            </Link>
            <Link to="/certificate">
              <li>&gt; Certificate</li>
            </Link>
          </ul>
        </div>
        <div className="w-full lg:w-[30%]   flex flex-col items-center justify-center lg:justify-end p-10 lg:p-0">
          {/* <div className="bg-white w-[25%] h-[25%] p-5 lg:p-4 rounded-full"> */}
          <div className="bg-white rounded-full overflow-hidden w-24 h-24">
            <img
              loading="lazy"
              src={logo}
              alt="Logo"
              className="h-24 lg:h-24 w-24 p-2  object-contain"
            />
          </div>
          {/* </div> */}
          <div className="flex text-white justify-around mt-6 w-full">
            <NavLink
              to={"https://www.instagram.com/uddeshhya_?igsh=dHY4MzBtcm9rZTZk"}
              target="blank"
            >
              <FaInstagram className="w-8 h-8" />
            </NavLink>
            <NavLink
              to={
                "https://www.facebook.com/share/vgmNSLBA7tiqB4vn/?mibextid=qi2Omg"
              }
              target="blank"
            >
              <CiFacebook className="w-8 h-8" />
            </NavLink>
            <NavLink
              to={"https://x.com/UDDESHHYA_?t=H7DwjYxsu5RqStR0VKhq4A&s=09"}
              target="blank"
            >
              <FaXTwitter className="w-8 h-8" />
            </NavLink>
            <NavLink
              to={"https://www.linkedin.com/company/uddeshhya/"}
              target="blank"
            >
              <CiLinkedin className="w-9 h-9" />
            </NavLink>
            <NavLink
              to={"https://youtube.com/@uddeshhya?si=0om7IYq7pWZXtDVX"}
              target="blank"
            >
              <PiYoutubeLogoLight className="w-9 h-9" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-[#E74646]  lg:px-16 px-16 border-t-2 border-[#ffffff6d] items-center text-white flex flex-col md:flex-row justify-center md:justify-between py-2">
        <p className="w-full text-center md:text-start text-xs md:text-[1rem]">
          &copy;2024 Copyright: Uddeshhya. All right Reserved.
        </p>

        <p className="text-center md:text-end  text-xs md:text-[1rem] md:border-l-2 md:border-[#ffffff6d] w-full">
          Site designed & maintained by Uddeshhya
        </p>
      </div>
    </>
  );
};

export default Footer;
