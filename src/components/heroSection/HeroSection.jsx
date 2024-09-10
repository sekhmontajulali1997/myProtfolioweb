/* eslint-disable react/no-unescaped-entities */
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { RiYoutubeLine } from "react-icons/ri";
import banner from "../../assets/image_39.png";
import hi from "../../assets/hi.png";
import {ReactTyped} from "react-typed"; // Remove curly braces around ReactTyped

const HeroSection = () => {
  return (
    <div className="container">
      <div className="heroSection px-4 grid lg:grid-cols-[50%_50%]  lg:mt-[100px] sm:mt-[150px] xxxsm:mt-[150px]   ">
        <div className="leftArea  text-center flex flex-col gap-8 sm:mb-20   justify-center">
          <h1 className="flex lg:justify-start xxxsm:justify-center sm:text-5xl xsm:text-4xl  text-white xl:text-5xl lg:text-4xl xxsm:text-2xl xxxsm:text-xl  gap-3">
            Hey{" "}
            <span>
              <img className="w-10 " src={hi} alt="Hi" />
            </span>{" "}
            I'm Montaj{" "}
          </h1>

          <div className="lg:text-start">
            <ReactTyped
              strings={[
                "Professional Coder",
                "Full Stack Developer (Mern)",
                "CMS-(Wordpress)",
              ]}
              typeSpeed={90}
              backSpeed={80}
              loop
              className=" xl:text-3xl lg:text-2xl sm:text-3xl xxsm:text-lg md:text-3xl text-white underline decoration-2 decoration-[#FF014F]"
            />
          </div>
          <div className="lg:text-start">
          <button className="bg-[#040836] lg:w-[50%]  md:w-[50%]  2xl:text-2xl xl:text-xl lg:text-xl text-white py-3 sm:py-4 px-8 sm:px-12 rounded-3xl ">
            My Resume
          </button>
          </div>
         
        </div>

        <div className="imgArea mb-10 lg:mb-0 flex xxxsm:mt-10">
          <img
            className="w-8/12 md:w-8/12 md:translate-x-5 mx-auto lg:w-10/12 z-0"
            src={banner}
            alt="Banner"
          />

<div className="socialIconArea flex flex-col lg:justify-center  gap-3 mb-6 lg:mb-0">
          <a href="#">
            <CiFacebook className="text-white text-3xl sm:text-4xl md:text-5xl" />
          </a>
          <a href="#">
            <CiLinkedin className="text-white text-3xl sm:text-4xl md:text-5xl" />
          </a>
          <a href="#">
            <RiYoutubeLine className="text-white text-3xl sm:text-4xl md:text-5xl" />
          </a>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default HeroSection;
