// import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestinomialCard";
import Pratibha from "../assets/Testinomial/Pratibha.jpg";
import Manoj from "../assets/Testinomial/Manoj.jpg";
import Satish from "../assets/376236985.jpg";
import Shailesh from "../assets/Testinomial/Shailesh.jpg";

const testimonials = [
  {
    image: Manoj,
    name: "Dr. Manoj Goel",
    position: "Joint Director",
    description:
      "I wholeheartedly commend Uddeshhya for their unwavering dedication and applaud our students for their selfless contributions. Their efforts exemplify the true spirit of community service and embody the values we strive to instill in our institution. I am proud to support it.",
  },
  {
    image: Shailesh,
    name: "Dr. Shailesh Tiwari",
    position: "Additional Director",
    description:
      "As a Director-In-Charge, I am continually impressed by the dedication and hard work of Uddeshhya and our students in their community service initiatives. Their actions exemplify the true meaning of solidarity and humanitarianism that we aspire to instill in our students.",
  },
  {
    image: Satish,
    name: "Dr. Anurag Gupta",
    position: "Dean Student Welfare",
    description:
      "I am immensely proud to endorse the commendable efforts of Uddeshhya, an NGO driven by our dedicated students. Uddeshhya's mission to bring positive change in society through education and community support has been nothing short of inspiring.",
  },
  {
    image: Pratibha,
    name: "Dr. Pratibha Kumari",
    position: "Faculty Coordinator",
    description:
      "I deeply admire Uddeshhya for their tireless commitment to serving the community. Our students' altruistic efforts demonstrate the essence of compassion and civic duty that we aim to nurture within our institution. I am honored to endorse their noble cause.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides to show based on your preference
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 md:p-10 text-center lg:text-start my-10">
      <h1 className="text-3xl text-center md:text-right md:text-4xl lg:text-5xl font-bold pb-4 lg:py-6 px-0 md:px-12">
        Our <span className="text-[#E74646]">Testimonial</span>
      </h1>
      <div className="px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              position={testimonial.position}
              description={testimonial.description}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
