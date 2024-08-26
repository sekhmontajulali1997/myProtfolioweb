import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#003D63] mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footerArea py-6 flex xsm:flex-col lg:flex-row justify-between items-center">
          <div className="socialIconArea flex gap-3 mb-6 lg:mb-0">
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
          <div className="text-center lg:text-left">
            <p className="text-white text-sm sm:text-base md:text-xl">
              © 2024 DevMontaj. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
