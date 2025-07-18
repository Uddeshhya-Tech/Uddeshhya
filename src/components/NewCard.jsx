/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import uday from "../assets/projectImg/uday.jpeg";
import umeed from "../assets/projectImg/umeed.jpeg";
import ujagar from "../assets/projectImg/ujagar.jpeg";
import umang from "../assets/projectImg/umang.jpeg";
import uphar from "../assets/projectImg/uphar.jpeg";
import ujala from "../assets/projectImg/ujala.jpeg";
import blood from "../assets/projectImg/blood.jpeg";
const Card = ({ projects }) => {
  const card = [
    {
      image: uday,
      name: "Uday",
      description:
        "The “Uday” project aims to bring brightness into the lives of underprivileged children by imparting essential life skills and education. Started near Muradnagar railway",
    },
    {
      image: umeed,
      name: "Umeed",
      description:
        "“UMEED” which lighten up the hopes of our mess workers who want to study but couldn’t do it due to lack of resources and uncertain circumstances or conditions. This",
    },
    {
      image: ujagar,
      name: "Ujagar",
      description:
        "Project Ujagar, spearheaded by Team UDDESHHYA, is a comprehensive initiative aimed at addressing and raising awareness about various social issues. Through a series",
    },
    {
      image: umang,
      name: "Umang",
      description:
        " Our mission is to create a nurturing environment where students can learn the importance of hygiene, health, and overall well-being. Project Umang, an initiative by",
    },
    {
      image: uphar,
      name: "Uphar",
      description:
        "The UPHAAR Project aims to bring smiles to people’s faces and help those in need by giving them happiness. It focuses on spreading joy and providing support",
    },
    {
      image: ujala,
      name: "Ujala",
      description:
        "Ujala means light. Just as the sun spreads its rays, books play a vital role in our lives and spread knowledge. They guide us from darkness to light, like the first ray of",
    },
    {
      image: blood,
      name: "Blood Portal",
      description:
        "At “Blood Portal”, we believe in the power of humanity to save lives. Our mission is simple yet profound: to ensure that no one suffers due to a lack of blood during emergencies",
    },
  ];

  const filteredCards = card.filter(
    (c) => c.name.toLowerCase() === projects.toLowerCase()
  );

  return (
    // <div className="bg-white m-4 rounded-3xl p-4 md:p-6 shadow-md shadow-gray-300 bg-custom-gradient">
    //   <div>
    //     <img src={First} className="w-full h-auto" alt="" />
    //   </div>
    //   <div>
    //     <h1 className="text-[#E74646] my-2 font-bold">UJAAGAR</h1>
    //     <p className="text-sm my-3">
    //       For the healthy development of a country, it is very necessary to
    //       fight the social evils and taboos that still exist in our world.
    //       Keeping this agenda i...Read More
    //     </p>
    //   </div>
    // </div>
    <>
      {filteredCards.map((filteredCard, index) => (
        <div
          key={index}
          className="bg-white m-4 rounded-3xl p-4 md:p-6 shadow-md shadow-gray-300 bg-custom-gradient"
        >
          <div>
            <img
              loading="lazy"
              src={filteredCard.image}
              className="w-full h-[140px] object-cover rounded-lg "
              alt={filteredCard.name}
            />
          </div>
          <div>
            <h1 className="text-[#E74646] my-2 font-bold">
              {filteredCard.name.toUpperCase()}
            </h1>
            <p className="text-sm my-3">
              {filteredCard.description || "No description available."}{" "}
              <NavLink to={`/projects/${filteredCard.name}`}>
                <span className="cursor-pointer text-blue-500">
                  Read More...
                </span>
              </NavLink>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
