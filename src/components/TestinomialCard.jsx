/* eslint-disable react/prop-types */
// import Image from "../assets/Team/Rectangle 31.png";

const TestimonialCard = ({ image, name, position, description }) => {
  return (
    <div className="bg-white shadow-md shadow-gray-400 rounded-tr-3xl rounded-b-3xl p-4  md:p-5 w-[95%] md:w-[80%] lg:w-[80%] mx-auto mb-4">
      <div className="flex items-center">
        <img
          src={image}
          loading="lazy"
          className="w-10 h-10 rounded-full"
          alt="Profile"
        />
        <div className="px-4 py-2">
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="text-sm">{position}</p>
        </div>
      </div>
      <div className="text-sm mt-4">
        <p className="text-start">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
