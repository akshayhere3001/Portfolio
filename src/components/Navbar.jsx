import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between  py-6 navbar">
      <h1 className="font-poppins text-[25px] font-bold text-textColor cursor-pointer">
        Akshay.dev
      </h1>

      <ul className="sm:flex hidden">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } font-poppins tracking-wider text-[18px] text-textColor font-bold ease-in-out duration-300 hover:text-blueColor`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu  */}
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-secondary border-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-[1]`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                className={`font-poppins font-normal cursor-pointer text-[16px]  
            ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} text-textColor`}
                key={nav.id}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={() => setToggle(false)}
                  className="text-textColor"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
