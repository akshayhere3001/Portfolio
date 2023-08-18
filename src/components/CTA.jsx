import styles from "../style";

import { FaMapLocationDot } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa";

const CTA = () => {
  return (
    <section id="contact">
      {/* Flex Container  */}
      <div
        className={`${styles.paddingX} ${styles.paddingY} ${styles.boxWidth} flex flex-col items-start sm:items-center  justify-center`}
      >
        <h2
          className={`text-[24px] text-center font-bold text-blueColor my-2 tracking-wider sm:text-start`}
        >
          Contact
        </h2>
        <p className="text-[15px] text-textColor object-cover sm:text-[20px] sm:text-start tracking-wide">
          Let&apos;s work Together, Get in Touch!👇
        </p>
        <div className="space-y-5 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-14 sm:mt-10 mx-auto">
          <div className="flex items-start justify-start mt-[2rem]  sm:mt-0 space-x-5">
            <li className="logos">
              <FaMapLocationDot className="text-blueColor text-[20px] sm:text-[24px]" />
            </li>
            <div>
              <h2
                className={`text-[20px] text-start font-bold text-textColor tracking-wider sm:text-start`}
              >
                Location
              </h2>
              <a
                href="#"
                className="text-[12px] text-gray-500 hover:text-blueColor  sm:text-[16px] sm:text-start tracking-wider"
              >
                Vadodara, India
              </a>
            </div>
          </div>

          <div className="flex items-start justify-start mt-[2rem]  sm:mt-0 space-x-5">
            <li className="logos">
              <FaEnvelopeOpenText className="text-blueColor text-[20px] sm:text-[24px]" />
            </li>
            <div>
              <h2
                className={`text-[20px] text-start font-bold text-textColor tracking-wider sm:text-start`}
              >
                Gmail
              </h2>
              <a
                href="mailto: akshayvishwakarma512@gmail.com"
                className="text-[12px] text-gray-500 hover:text-blueColor  sm:text-[16px] sm:text-start tracking-wider"
              >
                akshayvishwakarma512@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
