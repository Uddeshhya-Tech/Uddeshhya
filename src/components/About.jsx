import Leave from "../assets/leaves1.png";

const About = () => {
  return (
    <div className="relative">
      <img
        src={Leave}
        alt=""
        loading="lazy"
        className="absolute top-[-7rem] left-0 hidden lg:block "
      />
      {/* <img
        src={Leave}
        alt=""
        className="block lg:hidden top-[-7rem] w-[40%] "
      /> */}
      <div className="p-6 lg:p-10 text-center  " id="about">
        <h1 className="text-4xl lg:text-5xl font-bold pb-4 lg:py-6">
          About <span className="text-[#E74646]">Uddeshhya</span>
        </h1>
        <p className="font-bold text-sm">Registered under Society Acts 1860</p>
        <p className="font-bold text-sm mb-4 lg:mb-6">
          Registration No: 1719/2017-18
        </p>
        <p className="text-sm tracking-tight font-semibold md:px-14">
          On 4th Oct 2010, Uddeshhya was founded by highly motivated students of
          KIET to provide a helping hand to deprived individuals. Our college
          KIET has been supportive of our work for the upliftment of society.
          Uddeshhya envisions a society where everyone lives with basic
          necessities and helps students of the institute into people who
          understand that happiness lies in sharing and living for others. KIET
          provides every form of help to its various projects. As Pablo Picasso
          said, &quot;The meaning of life is to find your gift. The purpose of
          life is to give it away&quot;. What can be a better certificate than
          being the reason for someone else’s happiness? We welcome all willing
          institutes to collaborate with us. Every possible help and guidance
          shall be given to institutes who want to establish on society welfares
          1860 with registration number 1719/2017-18.
        </p>
      </div>
    </div>
  );
};

export default About;
