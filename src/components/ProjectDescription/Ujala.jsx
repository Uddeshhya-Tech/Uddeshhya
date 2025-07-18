import Ujalaa from "../../assets/projectImg/Ujala (4).png";
function Ujala() {
  return (
    <div>
      <img
        loading="lazy"
        src={Ujalaa}
        className="w-full h-[25rem] object-cover md:object-fit my-5 rounded-md"
        alt=""
      />
      <div>
        <h2 className="font-bold text-xl md:text-2xl text-center my-5">
          “Ujala, like a ray of dawn, dispels the shadows of night, bringing
          clarity and hope with its gentle, yet unwavering light.”.
        </h2>
        <p className="text-md mb-2">
          “Ujala” means light. Just as the sun spreads its rays, books play a
          vital role in our lives and spread knowledge. They guide us from
          darkness to light, like the first ray of dawn dispelling the night’s
          darkness. Books illuminate our minds, foster new thoughts and
          understanding, and inspire us to move forward in the right direction.
          The light of books enriches our lives, showing us the path to reach
          new heights.
        </p>
        <p className="text-md mb-2">
          With this thought in mind, our team has embarked on an initiative to
          establish libraries in the government schools we have adopted.
          Recognizing that books are a treasure trove of knowledge, we aim to
          make them accessible to every student. Books are our best friends,
          guiding us through life&apos;s complexities and offering wisdom and
          insight. By creating these libraries, we hope to inspire young minds,
          fostering a love for reading and learning. Books teach us invaluable
          lessons, open up new worlds, and ignite our imagination. They are the
          foundation of education, helping students develop critical thinking
          and creativity. Through this initiative, we aspire to nurture a
          generation of well-informed, enlightened individuals who can
          contribute meaningfully to society. By providing these resources, we
          are investing in the future, ensuring that every child has the
          opportunity to grow and succeed.
        </p>
        <p className="text-md mb-10">
          Under the Unnat Bharat Abhiyan (UBA) framework, we have adopted five
          villages focusing on empowering young minds through education and
          awareness programs namely-Aslatnagar, Kanauja, Dheda, Hisali,
          Basantpur and Sainthli.
        </p>
      </div>
    </div>
  );
}

export default Ujala;
