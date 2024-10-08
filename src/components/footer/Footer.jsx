import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#003D63]">
      <div className="container mx-auto px-4">
        <div className="footerArea py-3 grid sm:grid-cols-2 gap-4 ">
          <div className="socialIconArea flex  sm:justify-start xxxsm:justify-center items-center gap-3">
            <a href="#" aria-label="Facebook">
              <CiFacebook className="text-white text-2xl sm:text-3xl md:text-4xl" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <CiLinkedin className="text-white text-2xl sm:text-3xl md:text-4xl" />
            </a>
            <a href="#" aria-label="YouTube">
              <RiYoutubeLine className="text-white text-2xl sm:text-3xl md:text-4xl " />
            </a>
          </div>
          <div className="text-center flex sm:justify-end xxxsm:justify-center items-center ">
            <p className="text-white text-sm sm:text-base md:text-xl ">
              © 2024 DevMontaj. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
