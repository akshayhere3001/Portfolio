import { about } from "../assets";
import styles from "../style";

const About = () => {
  return (
    <section id="about">
      {/* Flex Container  */}
      <div
        className={`${styles.boxWidth} ${styles.paddingX} h-[100vh]  w-full flex flex-col sm:flex-row items-center justify-center sm:gap-20`}
      >
        <div className="relative">
          <img
            src={about}
            alt="About Image"
            className="sm:h-[23rem] sm:w-[28rem] rounded-[1.7rem]"
          />
        </div>

        <div className="mt-5 text-center  sm:text-start sm:w-1/3 ">
          <h2
            className={`text-[24px] font-bold text-blueColor my-2 tracking-wider`}
          >
            About me
          </h2>
          <p className="font-bold text-textColor mb-2 tracking-wider">
            A dedicated Front End Developer based on Vadodara, India📌
          </p>
          <p className="text-gray-500 tracking-wider text-start">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in <b> HTML, CSS, JavaScript, React, Tailwind. </b> I excel
            in <b> designing and maintaining responsive websites </b>that offer
            a smooth user experience. My expertise lies in crafting dynamic,
            engaging interfaces through writing clean and optimized code and
            utilizing cutting-edge development tools and techniques. I am also a
            team player who thrives in collaborating with cross-functional teams
            to produce outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
