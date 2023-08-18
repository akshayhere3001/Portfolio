import { FaGithub, FaLinkedin } from "react-icons/fa";

const d = new Date().getFullYear();
const Footer = () => {
  return (
    <section id="footer">
      <div className="w-full h-[180px] flex flex-col items-center justify-center sm:flex-row sm:justify-evenly space-y-5 mx-auto text-primary sm:relative">
        <h2 className="text-[16px] font-bold  sm:absolute sm:left-14 sm:text-[20px]">
          Copyright &copy; <span>{d}</span>. All rights are reserved
        </h2>

        <ul className="flex space-x-2 sm:absolute sm:right-14">
          <li>
            <a
              href="https://github.com/akshayhere3001"
              target="_blank"
              rel="noreferrer"
              className="text-primary text-[25px]  ease-in-out duration-300 hover:text-blueColor"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/akshay-vishwakarma-1b1b66237/"
              target="_blank"
              rel="noreferrer"
              className="text-primary text-[25px] ease-in-out duration-300 hover:text-blueColor"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
