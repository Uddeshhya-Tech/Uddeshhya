import { NavLink } from "react-router-dom";
import Bloodd from "../../assets/projectImg/Blood Portal (1).png";
function BloodPortal() {
  return (
    <div>
      <img
        loading="lazy"
        src={Bloodd}
        className="w-full h-[25rem] object-fit md:object-cover my-5 rounded-md"
        alt=""
      />
      <div>
        <h2 className="font-bold text-xl md:text-2xl text-center my-5">
          “Your little efforts can give others second chance to live life.”.
        </h2>
        <p className="text-md mb-2">
          At Blood Portal, we believe in the power of humanity to save lives.
          Our mission is simple yet profound: to ensure that no one suffers due
          to a lack of blood during emergencies. We are dedicated to connecting
          those in urgent need with willing donors swiftly and efficiently.
        </p>

        <h3 className="text-xl font-semibold">Our Methodology :</h3>
        <p className="text-md mb-2">
          We understand the critical nature of blood requirements during
          emergencies. Our approach is designed to minimize response time and
          maximize impact:
        </p>
        <div>
          <p className="text-md mb-2">
            <span className="font-medium mr-1 underline">
              Urgent Request Handling :
            </span>
            As soon as we receive a blood request, our team springs into action,
            utilizing our extensive database to locate compatible donors
            immediately.
          </p>
          <p className="text-md mb-2">
            <span className="font-medium mr-1 underline">
              Rapid Mobilization :
            </span>
            We don&apos;t just stop at finding donors. We coordinate and
            accompany them to hospitals, ensuring the blood reaches the patients
            in time.
          </p>
          <p className="text-md mb-2">
            <span className="font-medium mr-1 underline">
              Comprehensive Support :
            </span>
            From the initial request to the final transfusion, our team is with
            you every step of the way, providing updates and support to ensure a
            smooth and stress-free process.
          </p>
        </div>
        <h3 className="text-xl font-semibold">How We Work:-</h3>
        <div>
          <p className="text-md mb-2">
            <span className="font-medium mr-1 underline">Connect :</span>
            Families and hospitals in need of blood reach out to us through our
            user-friendly platform. Match: We quickly match the request with
            potential donors from our extensive network.
          </p>
          <p className="text-md mb-2">
            <span className="font-medium mr-1 underline">Coordinate:</span>Our
            dedicated team coordinates with the donor and the hospital to
            arrange a timely donation.
          </p>
          <p className="text-md mb-2">
            <span className="font-medium mr-1 underline">Accompany:</span> We
            accompany donors to the hospital, ensuring the donation process is
            smooth and efficient.
          </p>
        </div>
        <p className="text-md mb-2">
          Under our project Blood portal we have succesfully donated more than
          500 units of blood since the project has started.
        </p>
        <h3 className="text-xl font-semibold :-">
          Join Us in Making a Difference
        </h3>
        <p className="text-md mb-2">
          Whether you are a potential donor or someone in need, Blood Portal is
          here to bridge the gap. Your contribution, no matter how small, can
          make a life-saving difference.
        </p>
        <h3 className="text-xl font-semibold">Be a Hero Today</h3>
        <p className="text-md  mb-10">
          Donate blood, save lives. Join Blood Portal and become a part of our
          life-saving mission. Together, we can ensure that no one has to face a
          blood shortage alone.
        </p>
      </div>
      <div className="w-full flex justify-center mb-10">
        <NavLink to="/donar">
          <button className="text-white bg-[#E74646] border-[#E74646]  border-2 px-4 mb-4 lg:mb-0 py-[0.4rem] lg:mr-4">
            Blood Portal
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default BloodPortal;
