// import React from "react";
import { Card } from "@mui/joy";

import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant";

import sponsor1 from "../../assets/Partners/f6dff71c-311d-451a-a2c9-75432b130d3f(1).jpg";
import sponsor2 from "../../assets/Partners/f6dff71c-311d-451a-a2c9-75432b130d3f(2).jpg";
import sponsor3 from "../../assets/Partners/f6dff71c-311d-451a-a2c9-75432b130d3f(3).jpg";
import sponsor4 from "../../assets/Partners/f6dff71c-311d-451a-a2c9-75432b130d3f(4).jpg";
import sponsor5 from "../../assets/Partners/f6dff71c-311d-451a-a2c9-75432b130d3f(5).jpg";
import sponsor6 from "../../assets/Partners/f6dff71c-311d-451a-a2c9-75432b130d3f(6).jpg";
import sponsor7 from "../../assets/Partners/f6dff71c-311d-451a-a2c9-75432b130d3f(7).jpg";
import sponsor8 from "../../assets/Partners/f6dff71c-311d-451a-a2c9-75432b130d3f(8).jpg";
import sponsor9 from "../../assets/Partners/f6dff71c-311d-451a-a2c9-75432b130d3f(9).jpg";
import sponsor10 from "../../assets/Partners/f6dff71c-311d-451a-a2c9-75432b130d3f.jpg";
import sponsor11 from "../../assets/Partners/WhatsApp Image 2024-07-19 at 12.40.50 AM (1).jpeg";
import sponsor12 from "../../assets/Partners/WhatsApp Image 2024-07-19 at 12.40.50 AM (2).jpeg";
import sponsor13 from "../../assets/Partners/WhatsApp Image 2024-07-19 at 12.40.50 AM.jpeg";
import sponsor14 from "../../assets/Partners/WhatsApp Image 2024-07-21 at 1.50.10 AM.jpeg";
import sponsor15 from "../../assets/Partners/WhatsApp Image 2024-07-21 at 11.34.11 PM.jpeg";

// import Im from "../../assets/White-paper-texture-for-Projects.jpg";
// import "./Associations.css";

function Partners() {
  const Sponsors = [
    {
      name: "Robin Hood Army",
      image: sponsor1,
      //   position: "Title Partner",
    },
    {
      image: sponsor2,
      name: "The Save Life Foundation",
      //   position: "Edu. Partner ",
    },
    {
      image: sponsor3,
      name: "The Better India",
      //   position: "Partner",
    },
    {
      image: sponsor4,
      name: "Pahal Ek Prayas",
      //   position: "Food Partner",
    },
    {
      //   alt: "You We ",
      image: sponsor5,
      name: "U We Can Bringing Smile Foundation Trust",
      //   position: "Partner",
    },
    {
      image: sponsor6,
      name: "Goonj",
      //   position: "Team Partner",
    },
    {
      image: sponsor7,
      name: "Lions Club",
      //   position: "Event Partner",
    },
    {
      image: sponsor8,
      name: "Amrit Varsha",
      //   position: "Event Partner",
    },
    {
      image: sponsor9,
      name: "Sri Niwas Foundation",
      //   position: "Partner",
    },
    {
      image: sponsor10,
      name: "Helpers Hands",
      //   position: "Network Partner",
    },
    {
      image: sponsor11,
      name: "Help Us To Help The Child",
      //   position: "Network Partner",
    },
    {
      image: sponsor12,
      name: "Wings Of Hope",
      //   position: "Network Partner",
    },
    {
      image: sponsor13,
      name: "Light De Literacy",
      //   position: "Network Partner",
    },
    {
      image: sponsor14,
      name: "Sankalp Manav Mission Trust",
      //   position: "Network Partner",
    },
    {
      image: sponsor15,
      name: "Rotary Club",
      //   position: "Network Partner",
    },
  ];

  return (
    <section
      className="section w-[100vw] mb-0 px-10 md:px-20 pt-16"
      id="sponser"
    >
      <div className="flex justify-center items-center flex-col mt-0 mb-0 pb-0 w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInUp pb-8  w-[100%] text-center md:text-left">
          Our{" "}
          <span className="font-bold text-3xl md:text-5xl text-center text-[#E74646]">
            Collaboration
          </span>
        </h1>
        <div className="flex flex-wrap w-full justify-center md:justify-around">
          {Sponsors.map((sponsor, index) => (
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              key={index}
              className="hello mb-5 shadow-lg   transition-shadow  duration-300 hover:shadow-red-200 animate__animated animate__fadeInUp rounded-xl"
            >
              <Card
                orientation="horizontal"
                // className="p-4"
                variant="outlined"
                sx={{ width: 260, height: 100, borderRadius: 10 }}
              >
                <div className="w-[40%] h-full">
                  <img
                    loading="lazy"
                    src={sponsor.image}
                    className=" object-contain w-full h-full"
                    alt={sponsor.name}
                  />
                </div>
                <div className=" h-full w-full flex flex-col justify-center ">
                  <h2 className="text-[#ec3838] text-md font-semibold">
                    {sponsor.name}
                  </h2>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
