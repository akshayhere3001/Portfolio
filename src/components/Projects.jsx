import styles from "../style";
import { projectCards } from "../constants";
import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

const Projects = () => {
  return (
    <section
      id="projects"
      className={`${styles.paddingX} ${styles.boxWidth} ${styles.paddingY}`}
    >
      <h2
        className={`text-[24px] text-start font-bold text-blueColor my-2 tracking-wider sm:text-start`}
      >
        Portfolio
      </h2>
      <p className="text-[15px] text-textColor object-cover sm:text-[20px] sm:text-start">
        Each project is a unique piece of development 🧩
      </p>

      {/* Flex Container  */}
      {projectCards.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col card-div sm:flex-row items-center space-y-5  justify-center mt-10 p-5 sm:h-[25rem] sm:w-[60rem] sm:gap-[4rem] mx-auto border card`}
        >
          <div>
            <img
              src={item.img}
              alt="Project-Image"
              className="sm:h-[20rem] sm:w-[120rem] rounded-3xl"
            />
          </div>

          <div className="text-center ">
            <h2 className={`text-[20px]  font-bold text-textColor`}>
              {item.title}
            </h2>
            <p className="text-gray-500 my-[1rem]">{item.description}</p>
            <div className="flex items-center space-x-2 justify-center ">
              <span className="stack">{item.stack[0].first}</span>
              <span className="stack">{item.stack[0].second}</span>
            </div>

            <div className="flex flex-row items-center font-bold mt-[1.5rem]  text-textColor justify-evenly ">
              <li>
                <a
                  href={item.code[0].codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="ease-in-out duration-300 hover:text-blueColor flex items-center"
                >
                  <span className="mr-1">Code</span>
                  <FaGithub className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href={item.code[0].demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="ease-in-out duration-300 hover:text-blueColor flex items-center"
                >
                  <span className="mr-1">Live Demo</span>
                  <CiShare1 className="w-6 h-6" />
                </a>
              </li>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
