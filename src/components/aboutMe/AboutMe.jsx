import aboutMeImg from "../../assets/image_25.png";
import aboutBackgroundImage from "../../assets/aboutBack.png";
// import mern from "../../assets/mern.png";
// import wordpress from "../../assets/174881.png";
import "./About.css";
const AboutMe = () => {
  return (
    <>
      <div className="xl:container">
        <div className="aboutSectin py-20 m-auto w-[90%] xl:px-20 grid xl:grid-cols-[50%_50%] lg:grid-cols-[40%_60%] 2xl:gap-20 lg:gap-10">
          <div className="leftSide  flex ">
            <div className="imgSection h-full bg-cover relative ">
              <img src={ aboutBackgroundImage} alt="" />
              <img className="w-[90%] absolute -top-20 left-4  m-auto " src={aboutMeImg} alt="" />
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
                <h1 className=" text-white my-5 lg:w-[55%] text-4xl font-semibold mb-4">
                  I can develop that help people
                </h1>
              </div>
              <div className="w-[90%]">
                <p className=" text-[#f9dcdc] text-lg w-[90%]">
                  Hi, my name is Sk Montajul Ali and I began using WordPress
                  when it first began. I’ve spent most of my waking hours for
                  the last three years designing, programming and operating
                  WordPress sites. One of my specialties is taking an idea from
                  scratch and creating a full-fledged platform. I go beyond to
                  produce sites with a unique.
                </p>
              </div>

              <div className="proffesion mt-14 flex items-center gap-4">
                {/* <div className="icon">
                  <img className="w-16" src={mern} alt="" />
                </div> */}
                <div className="text">
                  <h1 className="text-white text-2xl font-bold ">
                    {" "}
                    WordPress Customizer
                  </h1>
                  <p className=" text-[#f9dcdc] text-lg w-[90%]">
                  Local Clint Work experience and some fiver Project
                </p>
                </div>
              </div>
              <div className="proffesion mt-8 items-center  flex gap-4">
                {/* <div className="icon">
                  <img className="w-16" src={wordpress} alt="" />
                </div> */}
                <div className="text">
                  <h1 className="text-white text-2xl font-bold ">
                    {" "}
                    Full Stack Development Using (MERN)
                  </h1>
                  <p className=" text-[#f9dcdc] text-lg w-[90%]">
                  Backend: ( node.js, express.js, Prisma ORM, Mongoose , MongoDb, MySQL,). <br />(Front-end : TailWin css, Bootstrap, ReactJS, Next.JS)
                </p>
                </div>
              </div>
              <div className="proffesion mt-8 items-center  flex gap-4">
                {/* <div className="icon">
                  <img className="w-16" src={wordpress} alt="" />
                </div> */}
                <div className="text">
                  <h1 className="text-white text-2xl font-bold ">
                    {" "}
                    NEXT.JS Framework Experience
                  </h1>
                  <p className=" text-[#f9dcdc] text-lg  w-[90%] line-clamp-3">
                  Backend: Next.js React Framework for Development.<br /> And Bootstrap CSS Framework for design( I Also known Tailwind Css)
                </p>
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
