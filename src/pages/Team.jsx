import Navneet from "../assets/teamIMG/Navneet Kumar Singh.jpg";
import Akhilesh from "../assets/teamIMG/Akhilesh singh.jpg";
import Shreya from "../assets/teamIMG/Shreya Khare.jpeg";
import Aanya from "../assets/teamIMG/aanya.jpeg";
import Harshit from "../assets/teamIMG/Harshit.jpg";
import Prashant from "../assets/teamIMG/Prashant Thakur.webp";
import Nandini from "../assets/teamIMG/Nandini Verma.jpg";
import Aditya from "../assets/teamIMG/Aditya Gupta.jpg";
import Aryan from "../assets/teamIMG/aryanG.jpg";
import Sarthak from "../assets/teamIMG/Sarthak goel.jpg";
import Vanshika from "../assets/teamIMG/Vanshika Chaturvedi.jpg";
import Himanshu from "../assets/teamIMG/Himanshu Kumar Sukralia.jpg";
import Gyata from "../assets/teamIMG/Gyata jain.jpg";
import Mohammad from "../assets/teamIMG/Mohammad Areeb.jpg";
import Vishwajeet from "../assets/teamIMG/Vishwajeet Singh.jpg";
import Akshita from "../assets/teamIMG/Akshita Mittal.jpg";
import Aditi from "../assets/teamIMG/Aditi Kaushik.png";
import Krishna from "../assets/teamIMG/Krishna Kumar Agrahari.png";
import Devanshi from "../assets/teamIMG/Devanshi Bansal.png";
import David from "../assets/teamIMG/David kumar.png";
import Arham from "../assets/teamIMG/Arham Ansari.jpg";
import Vaishnavi from "../assets/teamIMG/Vaishnavi Goel.jpeg";
import Mayank from "../assets/teamIMG/Mayank pal.jpg";
import Anushka from "../assets/teamIMG/Anushka Singh.jpg";
import Mridula from "../assets/teamIMG/Mridula Verma.jpg";
import Arambh from "../assets/teamIMG/Arambh.jpg";
import Shobhika from "../assets/teamIMG/Shobhika.jpg";
import Ashmit from "../assets/teamIMG/Ashmit Raj.png";
import Jagrati from "../assets/teamIMG/Jagrati patel.png";
import Amit from "../assets/teamIMG/Amit kumar.jpg";
import Kushagra from "../assets/teamIMG/Kushagra rawat.jpg";
import Asif from "../assets/teamIMG/Md Asif Raja.jpg";
import Mahi from "../assets/teamIMG/Mahi Rajput.jpg";
import Panika from "../assets/teamIMG/Panika Gupta.jpg";
import Rishabh from "../assets/teamIMG/Rishabh bharti.jpg";
import Viyapi from "../assets/teamIMG/Viyapi Tyagi.jpg";
import Akanksha from "../assets/teamIMG/Akanksha Tiwari.jpg";
import Shivang from "../assets/teamIMG/Shivang Mishra.jpeg";
import Anamika from "../assets/teamIMG/anamika.jpeg";
import Shudha from "../assets/teamIMG/Shudha.jpeg";
import Pranjal from "../assets/teamIMG/Pranjal.jpeg";
import gaurav from "../assets/teamIMG/Gaurav.jpg";
import Sampada from "../assets/teamIMG/Sampada.jpeg";
import ShreyaG from "../assets/teamIMG/ShreyaG.jpeg";
import amanKhan from "../assets/teamIMG/amanKhan.jpeg";
import TanuOjha from "../assets/teamIMG/TanuOjha.jpeg";
import pushpendra from "../assets/teamIMG/pushpendra.jpeg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Team = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  const leads = [
    {
      img: gaurav,
      name: "Gaurav Payal",
      position: "President",
    },
    {
      img: Rishabh,
      name: "Rishabh bharti",
      position: "Vice President",
    },
    {
      img: Shreya,
      name: "Shreya Khare",
      position: "Chairperson",
    },
    {
      img: Akanksha,
      name: "Akanksha Tiwari",
      position: "Secretary",
    },
    {
      img: Aanya,
      name: "Aanya",
      position: "Treasurer",
    },
    {
      img: Arambh,
      name: "Arambh Trayambak",
      position: "Core Team Head",
    },
  ];
  const members = [
    { img: amanKhan, name: "Aman Khan" },

    // **************

    { img: Navneet, name: "Navneet Kumar Singh" },
    { img: Sampada, name: "Sampada" },
    { img: Akhilesh, name: "Akhilesh singh" },
    { img: Mahi, name: "Mahi Rajput" },
    { img: Panika, name: "Panika Gupta" },
    { img: Viyapi, name: "Viyapi Tyagi" },
    { img: Shivang, name: "Shivang Mishra" },

    // **************

    { img: Harshit, name: "Harshit Vikram Prajapati" },
    { img: Aryan, name: "Aryan Gupta" },
    { img: Vanshika, name: "Vanshika Chaturvedi" },
    { img: Himanshu, name: "Himanshu Kumar Sukralia" },
    { img: Mohammad, name: "Mohammad Areeb" },
    { img: Vishwajeet, name: "Vishwajeet Singh" },
    { img: Akshita, name: "Akshita Mittal" },
    { img: David, name: "David kumar" },
    { img: Arham, name: "Arham Ansari" },
    { img: Vaishnavi, name: "Vaishnavi Goel" },
    { img: ShreyaG, name: "Shreya Gupta" },
    { img: Anushka, name: "Anushka Singh" },
    { img: Shobhika, name: "Shobhika" },
    { img: pushpendra, name: "Pushpendra" },
    { img: TanuOjha, name: "Tanu Ojha" },

    { img: Asif, name: "Md Asif Raja" },

    // **************

    { img: Sarthak, name: "Sarthak goel" },
    { img: Gyata, name: "Gyata jain" },
    { img: Aditi, name: "Aditi Kaushik" },
    { img: Nandini, name: "Nandini Verma" },
    { img: Krishna, name: "Krishna Kumar Agrahari" },
    { img: Devanshi, name: "Devanshi Bansal" },
    { img: Aditya, name: "Aditya Gupta" },
    { img: Shudha, name: "Shudha Nidhi Soni" },
    { img: Pranjal, name: "Pranjal Jaiswal" },
    { img: Prashant, name: "Prashant Thakur" },
    { img: Mayank, name: "Mayank pal" },
    { img: Mridula, name: "Mridula Verma" },
    { img: Ashmit, name: "Ashmit Raj" },
    { img: Jagrati, name: "Jagrati patel" },
    { img: Amit, name: "Amit kumar" },
    { img: Kushagra, name: "Kushagra rawat" },
    { img: Anamika, name: "Anamika Yadav" },
  ];
  return (
    <div className="pt-20 w-full   p-4 md:px-20 bg-custom-gradient" id="team">
      <h1 className="text-3xl md:text-5xl  font-bold  text-center md:text-start mb-4">
        Our <span className="text-[#E74646]">Team</span>
      </h1>
      <div>
        <div className="flex items-center justify-center w-full">
          <h1 className="text-xl md:text-2xl font-semibold border-b-2 inline-block border-b-black">
            Heads
          </h1>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-12 justify-center items-center m-6 md:m-10">
          {leads.map((lead, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <img
                loading="lazy"
                src={lead.img}
                className="rounded-md h-48 w-40 object-cover"
                alt=""
              />
              <p className="font-bold text-lg md:text-xl text-center mt-2">
                {lead.name}
              </p>
              <p className="text-center text-lg md:text-xl">{lead.position}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center w-full">
          <h1 className="text-xl md:text-2xl font-semibold border-b-2 inline-block border-b-black">
            Members
          </h1>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-12 justify-center items-center m-6 md:m-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <img
                loading="lazy"
                src={member.img}
                className="rounded-md w-40 object-cover h-48"
                alt=""
              />
              <p className="font-bold text-lg md:text-xl text-center mt-2">
                {member.name}
              </p>
              <p className="text-center text-lg md:text-xl">Member</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
