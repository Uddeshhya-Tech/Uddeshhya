import Udayy from "../../assets/projectImg/UDAY.png";
function Uday() {
  return (
    <div>
      <img
        loading="lazy"
        src={Udayy}
        className="w-full h-[25rem] object-cover  my-5 rounded-md"
        alt=""
      />
      <div>
        <h2 className="font-bold text-xl md:text-2xl text-center my-5">
          “Education may not make a child wealthy, but it will certainly teach
          them never to go to bed hungry.”
        </h2>
        <p className="text-md mb-2">
          The “Uday” project aims to bring brightness into the lives of
          underprivileged children by imparting essential life skills and
          education. Started near Muradnagar railway station in 2010, Uday has
          expanded its reach to the Rajnagar and Ravli slums in Ghaziabad.
        </p>
        <p className="text-md mb-2">
          In the slum school initiative, Uday focuses on two main areas:
          Rajnagar and Ravli. The project&apos;s goal is to empower children
          with the knowledge and skills necessary to lead independent lives.
          Uday ensures that its teachings leave a lasting impact on their hearts
          and minds, steering them away from negative influences. The project
          strives to instill basic etiquette, good habits, honesty, and hope,
          alongside academic education.Working with the children in the slums
          brings an indescribable sense of fulfillment. Each day spent teaching
          them feels like a step toward a brighter future, not just for them but
          for the community as a whole. Seeing their eyes light up with
          understanding and curiosity is a reward in itself. The joy and
          gratitude they express make every challenge worthwhile, and their
          progress is a constant reminder of the impact education can have.
          It&apos;s incredibly heartwarming to know that we are not just
          teaching subjects but also instilling hope, confidence, and the
          foundation for a better life. To fulfill their basic needs food and
          clothes drives are arranged occassionally.
        </p>
        <p className="text-md mb-2">
          Currently, Uday impacts over 40 students in Ravli and 45+ students in
          Rajnagar annually. It prepares 10 to 15 students each year to
          transition into regular schooling, contributing to their independence
          and self-sustainability.
        </p>
        <p className="text-md mb-2">
          Additionally, under Uday there runs an evening school within the KIET
          Group of Institutions, teaching the children of mess workers and
          staff. This initiative supports approximately 30 students, helping
          them improve their skills and academic performance.
        </p>
        <h3 className="text-xl font-semibold">Our Methodology :</h3>

        <ul className="text-md mb-2">
          <li className="ml-5 flex flex-row">
            <span className="mr-1">•</span> We focus on teaching them basic good
            habits.
          </li>
          <li className="ml-5 flex flex-row">
            <span className="mr-1">•</span> We initially provide basic education
            regarding alphabets and numbers.
          </li>
          <li className="ml-5 flex flex-row">
            <span className="mr-1">•</span> We ensure they are updated with the
            dates and days daily.
          </li>
          <li className="ml-5 flex flex-row">
            <span className="mr-1">•</span> Saturdays are reserved for fun
            learning activities such as games, PT, art and craft, storytelling,
            etc.
          </li>
          <li className="ml-5 flex flex-row">
            <span className="mr-1">•</span>
            <span>
              Important days and dates are celebrated with them so they
              understand the significance of these occasions. For example, we
              celebrate Republic Day, Independence Day, Teacher&apos;s Day, etc.
              Go and have a look{" "}
              <a href="" className="text-blue-600">
                Instagram
              </a>
            </span>
          </li>
        </ul>
        <p className="text-md mb-10">
          Through these efforts, Uday is committed to uplifting society by
          providing as much assistance as possible to underprivileged children,
          ensuring they have the opportunity to build a better future for
          themselves.
        </p>
      </div>
    </div>
  );
}

export default Uday;
