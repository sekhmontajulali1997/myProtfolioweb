import aboutMeImg from "../../assets/image_25.png";
import aboutBackgroundImage from "../../assets/aboutBack.png";
import mern from "../../assets/mern.png";
import wordpress from "../../assets/174881.png";
import "./About.css";
const AboutMe = () => {
  return (
    <>
      <div className="container">
        <div className="aboutSectin py-20 m-auto w-[90%] px-20 grid grid-cols-[40%_60%] gap-20">
          <div className="leftSide  flex ">
            <div className="imgSection h-full bg-cover relative ">
              <img src={ aboutBackgroundImage} alt="" />
              <img className="w-[90%] absolute -top-20 left-12  m-auto " src={aboutMeImg} alt="" />
            </div>
          </div>
          <div className="rightSide">
            <div className="about">
              <div>
                <h1 className=" gradient-text text-2xl font-semibold mb-4">
                  About Me
                </h1>
              </div>
              <div>
                <h1 className=" text-white my-5 w-[35%] text-4xl font-semibold mb-4">
                  I can develop that help people
                </h1>
              </div>
              <div className="w-[90%]">
                <p className=" text-[#a8a5a5] text-lg w-[90%]">
                  Hi, my name is Sk Montajul Ali and I began using WordPress
                  when it first began. I’ve spent most of my waking hours for
                  the last three years designing, programming and operating
                  WordPress sites. One of my specialties is taking an idea from
                  scratch and creating a full-fledged platform. I go beyond to
                  produce sites with a unique.
                </p>
              </div>

              <div className="proffesion mt-14 flex items-center gap-4">
                <div className="icon">
                  <img className="w-16" src={mern} alt="" />
                </div>
                <div className="text">
                  <h1 className="text-white text-2xl font-bold ">
                    {" "}
                    Professional Mern Stack Developer
                  </h1>
                </div>
              </div>
              <div className="proffesion mt-8 items-center  flex gap-4">
                <div className="icon">
                  <img className="w-16" src={wordpress} alt="" />
                </div>
                <div className="text">
                  <h1 className="text-white text-2xl font-bold ">
                    {" "}
                    Senior WordPress Theme Customizer{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
