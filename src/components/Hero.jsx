import { profile } from "../assets";
import styles from "../style";
import { techStack } from "../constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className={`${styles.paddingX} ${styles.boxWidth}  `}>
      {/* Flex Container  */}
      <div className="flex flex-col-reverse gap-10 mt-[3rem] sm:mt-[5rem]  items-center justify-center sm:gap-40 sm:flex sm:flex-row">
        <div className="flex flex-col items-center sm:items-start justify-center">
          <h2
            className={`${styles.heading2} text-center sm:text-start mt-[1.5rem] mb-[1.5rem]`}
          >
            Front End React <br className="sm:block hidden" />
            Developer 👋
          </h2>
          <p className={`${styles.paragraph} text-center`}>
            Hi, I&apos;m{" "}
            <span className="text-gray-500"> Akshay Vishwakarma. </span> A
            Passionate frontend developer
            <br className="hidden sm:block" />
            specializing in crafting captivating web experiences with React.
            <p className="sm:hidden text-gray-500">
              Take a moment to explore my featured projects and see how I
              combine creativity and technology to make the web a more engaging
              place.
            </p>
          </p>
          <ul className="flex space-x-2 mt-[.8rem] mb-[2.5rem]">
            <li>
              <a
                href="https://github.com/akshayhere3001"
                target="_blank"
                className="text-textColor text-[30px] mr-10 ease-in-out duration-300 hover:text-blueColor"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/akshay-vishwakarma-1b1b66237/"
                target="_blank"
                rel="noreferrer"
                className="text-textColor text-[30px] ease-in-out duration-300 hover:text-blueColor"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <img
            src={profile}
            alt="Profile-Image"
            className="profile-img h-[280px] w-[280px] sm:h-[350px] sm:w-[350px]"
          />
        </div>
      </div>

      {/* Tech Stack section  */}
      <div
        className={`flex items-center  flex-wrap  justify-center mx-auto mt-[3rem] mb-[5rem] `}
      >
        <h2 className={`mb-4 sm:mb-0 font-bold text-textColor tracking-wide`}>
          {" "}
          <span className="sm:hidden"> |</span>&nbsp; &nbsp; Tech Stack&nbsp;
          &nbsp; | &nbsp;
        </h2>
        <ul className="flex flex-wrap items-center justify-center ">
          {techStack.map((item) => (
            <li key={item.id} className={`logos sm:mr-5 my-3 mx-3`}>
              <img
                src={item.language}
                title={item.title}
                className={`h-[34px] w-[34px]`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
