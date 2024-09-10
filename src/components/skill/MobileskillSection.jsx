import { useState } from "react";

const MobileskillSection = () => {
  const [bio, setBio] = useState(true);
  const [skill, setSkill] = useState(false);
  const [education, setEducation] = useState(false);

  const handleClick = (section) => {
    setBio(false);
    setSkill(false);
    setEducation(false);

    switch (section) {
      case "bio":
        setBio(true);
        break;
      case "skill":
        setSkill(true);
        break;
      case "education":
        setEducation(true);
        break;
      default:
        setBio(true);
    }
  };
  return (
    <>
      <div className="container">
        <div className="buttonArea py-10 flex flex-col items-center gap-5">
          <div className="bioBtn">
            <button
              onClick={() => handleClick("bio")}
              className={`${
                bio
                  ? "text-white xxxsm:w-[300px]   bg-[#FF014F] py-3 rounded-[80px] font-medium  xxsm:text-xl sm:text-sm xxxsm:text-xl"
                  : "text-white  xxxsm:w-[300px]   transition duration-500 ease-in-out hover:bg-[#FF014F] py-3  rounded-[80px] font-medium xxsm:text-xl  sm:text-sm xxxsm:text-xl"
              }`}
            >
              BIOGRAPHY
              <span className="inline-block w-[40px] h-[2px] bg-white mx-2 -translate-y-1"></span>
              <span className="lg:text-xl font-bold xxxsm:text-xs">01</span>
            </button>
          </div>
          <div className="skillBtn">
            <button
              onClick={() => handleClick("skill")}
              className={`${
                skill
                  ? "text-white  xxxsm:w-[300px]   bg-[#FF014F] py-3 px-3 rounded-[80px] font-medium xxsm:text-xl sm:text-sm xxxsm:text-xs"
                  : "text-white  xxxsm:w-[300px]  transition duration-500 ease-in-out hover:bg-[#FF014F] py-3 rounded-[80px] font-medium xxsm:text-xl sm:text-sm xxxsm:text-xs"
              }`}
            >
              SKILLS
              <span className="inline-block w-[40px]  h-[2px] bg-white mx-2 -translate-y-1"></span>
              <span className="lg:text-xl font-bold">02</span>
            </button>
          </div>
          <div className="educationBtn">
            <button
              onClick={() => handleClick("education")}
              className={`${
                education
                  ? "text-white  xxxsm:w-[300px]   bg-[#FF014F] py-3 rounded-[80px] font-medium xxsm:text-xl sm:text-sm xxxsm:text-xs"
                  : "text-white  xxxsm:w-[300px]   transition duration-500 ease-in-out hover:bg-[#FF014F] py-3 rounded-[80px] font-medium xxsm:text-xl sm:text-sm xxxsm:text-xs"
              }`}
            >
              EDUCATION
              <span className="inline-block w-[40px]  h-[2px] bg-white mx-2 -translate-y-1"></span>
              <span className="lg:text-xl font-bold">03</span>
            </button>
          </div>
        </div>
       
        <div className="contentArea border-[1px] border-[#ffffff6b] py-16  bg-[rgba(0,0,0,.1)!important]  xsm:w-[100%] m-auto">
            {bio && (
              <div className="bio px-2  grid sm:grid-cols-2 gap-10  animate-fadeIn ">
                <div className="leftSide">
                  <div className="name flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white sm:text-xl">Name</h1>
                    <span className="inline-block sm:text-lg font-semibold  text-[#969191]">
                      Sk Montajul Ali
                    </span>
                  </div>
                  <div className="age flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white sm:text-xl">Age</h1>
                    <span className="inline-block sm:text-lg font-semibold  text-[#969191]">
                      27
                    </span>
                  </div>
                  <div className="email flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white sm:text-xl">Email</h1>
                    <span className="inline-block sm:text-lg font-semibold  text-[#969191]">
                      sekhmontajulali1997@gmail.com
                    </span>
                  </div>
                  <div className="whatsapp flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white sm:text-xl">Whatsapp</h1>
                    <span className="inline-block sm:text-lg font-semibold  text-[#969191]">
                      +918481803761
                    </span>
                  </div>
                </div>
                <div className="rightSide">
                  <div className="name flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white sm:text-xl">Birthday</h1>
                    <span className="inline-block sm:text-lg font-semibold  text-[#969191]">
                      Sk Montajul Ali
                    </span>
                  </div>
                  <div className="age flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white sm:text-xl">Address</h1>
                    <span className="inline-block sm:text-lg font-semibold  text-[#969191]">
                      27
                    </span>
                  </div>
                  <div className="email flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white sm:text-xl">Phone</h1>
                    <span className="inline-block sm:text-lg font-semibold  text-[#969191]">
                      +918481803761
                    </span>
                  </div>
                  <div className="whatsapp flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white sm:text-xl">Freelance</h1>
                    <span className="inline-block sm:text-lg font-semibold  text-[#969191]">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            )}
            {skill && (
              <div className="skill grid lg:grid-cols-[50%_50%]  px-10 gap-10  animate-fadeIn">
                <div className="leftSide ">
                  <div className="proffesion mt-8 ">
                    {/* <div className="icon">
                      <img className="w-16" src={mern} alt="" />
                    </div> */}
                    <div className="text">
                      <h1 className=" text-2xl text-white font-semibold ">
                      NEXT.JS Framework Experience:
                      </h1>
                      <span className="text-lg text-[#FF014F]">
                        (Next.js React Framework for Development. And Bootstrap CSS Framework for design( I Also known Tailwind Css ))
                      </span>
                    </div>
                  </div>
                  <div className="proffesion mt-8 items-center  flex gap-4">
                    {/* <div className="icon">
                      <img className="w-16" src={mern} alt="" />
                    </div> */}
                    <div className="text">
                      <h1 className=" text-2xl text-white font-semibold ">
                      Full Stack Development Using (MERN):
                      </h1>
                      <span className="text-lg text-[#FF014F]">
                       (Backend: ( node.js, express.js, Prisma ORM, Mongoose , MongoDb, MySQL. (Front-end : TailWin css, Bootstrap, ReactJS, Next.JS) ))
                      </span>
                    </div>
                  </div>
                  <div className="proffesion mt-8 items-center  flex gap-4">
                    {/* <div className="icon">
                      <img className="w-16" src={mern} alt="" />
                    </div> */}
                    <div className="text">
                      <h1 className=" text-2xl text-white font-semibold ">
                      Wordpress Customizer:
                      </h1>
                      <span className="text-lg text-[#FF014F]">
                        (Local Clint Work experience and some fiver Project)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rightSide">
                  <div className="proffesion lg:mt-8 items-center  flex gap-4">
                    <div className="text">
                      <h1 className="text-3xl text-white font-bold ">90%</h1>
                      <div className="lg:w-[300px] xxxsm:w-[350%] h-2 rounded-[80px] bg-[#ffffff] relative">
                        <span
                          className="inline-block progress-bar  h-2 w-[98%] bg-[#FF014F] rounded-[80px] absolute top-0 left-0  "
                          style={{ "--progress-width": "90%" }}
                        >
                          {" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="proffesion lg:mt-14 xxxsm:mt-4 items-center  flex gap-4">
                    <div className="text">
                      <h1 className=" text-3xl text-white font-bold ">95%</h1>
                      <div className="w-[300px]  xxxsm:w-[350%]  h-2 rounded-[80px] bg-[#ffffff] relative">
                        <span
                          className="inline-block progress-bar  h-2 w-[98%] bg-[#FF014F] rounded-[80px] absolute top-0 left-0  "
                          style={{ "--progress-width": "95%" }}
                        >
                          {" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="proffesion lg:mt-14 xxxsm:mt-4 items-center  flex gap-4">
                    <div className="text">
                      <h1 className=" text-3xl text-white font-bold ">98%</h1>
                      <div className="w-[300px] xxxsm:w-[350%] h-2 rounded-[80px] bg-[#ffffff] relative">
                        <span
                          className="inline-block progress-bar  h-2 w-[98%] bg-[#FF014F] rounded-[80px] absolute top-0 left-0  "
                          style={{ "--progress-width": "98%" }}
                        >
                          {" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {education && (
              <div className="education text-white text-3xl text-center animate-fadeIn">
                No content found
              </div>
            )}
          </div>


        
      </div>
    </>
  );
};

export default MobileskillSection;
