import Umangg from "../../assets/projectImg/Umang (1).png";
function Umang() {
  return (
    <div>
      <img
        loading="lazy"
        src={Umangg}
        className="w-full h-[25rem] object-cover my-5 rounded-md"
        alt=""
      />
      <div>
        <h2 className="font-bold text-xl md:text-2xl text-center my-5">
          “Children are the world&apos;s most valuable resource and its best
          hope for the future.”
        </h2>
        <p className="text-md mb-2">
          Our mission is to create a nurturing environment where students can
          learn the importance of hygiene, health, and overall well-being.
        </p>
        <p className="text-md mb-2">
          Project Umang, an initiative by Uddeshhya dedicated to fostering
          healthy and happy lives among students.
        </p>
        <p className="text-md mb-2">
          Under the Unnat Bharat Abhiyan (UBA) framework, we have adopted five
          villages focusing on empowering young minds through education and
          awareness programs namely-
        </p>
        <ul className="ml-5 mb-3">
          <li>• Aslatnagar</li>
          <li>• Knauja</li>
          <li>• Dheda</li>
          <li>• Hisali</li>
          <li>• Basantpur</li>
          <li>• Sainthli</li>
        </ul>
        <h3 className="text-xl font-semibold mb-1">Our Methodology :</h3>
        <p className="text-md mb-2">
          Our approach in Project Umang is multi-faceted and community-driven.
          Here&apos;s a breakdown of how we work:
        </p>
        <h4 className="text-lg font-semibold underline mb-1">
          School Adoption and Assessment -
        </h4>
        <p className="text-md mb-2">
          <span className="font-medium mr-1 underline">Selection:</span> We
          collaborate with local authorities and the UBA to identify and adopt
          schools that will benefit the most from our intervention.
        </p>

        <p className="text-md mb-2">
          <span className="font-medium mr-1 underline">Needs Assessment:</span>{" "}
          Our team conducts thorough assessments in each school to understand
          the specific needs and challenges faced by the students.
        </p>
        <h4 className="text-lg font-semibold underline mb-1 mt-3">
          Awareness Programs and Workshops -
        </h4>
        <p className="text-md mb-2">
          <span className="font-medium mr-1 underline">Interactive Skits:</span>{" "}
          We organize engaging skits performed by our trained volunteers to
          convey crucial messages about hygiene, health, and wellness. These
          skits are designed to be relatable and memorable, making it easier for
          students to grasp important concepts.
        </p>
        <p className="text-md mb-2">
          <span className="font-medium mr-1 underline">
            Educational Workshops:
          </span>{" "}
          Alongside the skits, we conduct workshops covering topics such as
          personal hygiene, nutrition, mental health, and disease prevention.
          These sessions are interactive, encouraging students to ask questions
          and participate actively.
        </p>
        <p className="text-md mb-2">
          <span className="font-medium mr-1 underline">Follow-Up Visits:</span>{" "}
          We regularly visit the schools to monitor the progress and impact of
          our programs. This helps us identify areas for improvement and ensure
          that the practices are being implemented effectively.
        </p>
        <p className="text-md mb-2">
          <span className="font-medium mr-1 underline">
            Parental Involvement:
          </span>{" "}
          We believe that a supportive home environment is crucial for the
          success of our initiatives. Therefore, we organize meetings and
          workshops for parents to educate them about the importance of hygiene
          and health.
        </p>
        <p className="text-md mb-2">
          <span className="font-medium mr-1 underline">Local Partnerships</span>
          : We collaborate with local health professionals and organizations to
          provide additional resources and support, ensuring a comprehensive
          approach to student well-being.
        </p>
        <h4 className="text-lg font-semibold underline mb-1 mt-3">Impact</h4>
        <p className="text-md mb-10">
          Since the inception of Project Umang, we have seen a significant
          positive impact in the schools we have adopted. Students are more
          aware of hygiene practices, leading to improved health and attendance
          rates. Teachers report a more positive and engaged classroom
          environment, and parents express gratitude for the knowledge and
          resources provided.
        </p>
      </div>
    </div>
  );
}

export default Umang;
