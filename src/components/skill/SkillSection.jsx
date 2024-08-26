import { useState } from "react";
import mern from "../../assets/mern.png";
import "./SkillSection.css";

const SkillSection = () => {
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
        <div className="fakeDiv py-10">
          <div className="skillSection xsm:w-[100%] xl:w-[90%] xl:px-20 m-auto relative">
            <div className="topArea absolute -top-8 left-[18%] w-[65%] m-auto">
              <div className="buttonArea flex justify-center gap-11 bg-[#012b45] py-1 border-[1px] border-[#ffffff6b] rounded-[80px]">
                <button
                  onClick={() => handleClick("bio")}
                  className={`${
                    bio
                      ? "text-white w-[260px] bg-[#FF014F] py-3 rounded-[80px] font-medium text-xl"
                      : "text-white w-[260px] transition duration-500 ease-in-out hover:bg-[#FF014F] py-3 rounded-[80px] font-medium text-xl"
                  }`}
                >
                  BIOGRAPHY
                  <span className="inline-block w-[40px] h-[2px] bg-white mx-2 -translate-y-1"></span>
                  <span className="text-xl font-bold">01</span>
                </button>
                <button
                  onClick={() => handleClick("skill")}
                  className={`${
                    skill
                      ? "text-white w-[260px] bg-[#FF014F] py-3 rounded-[80px] font-medium text-xl"
                      : "text-white w-[260px] transition duration-500 ease-in-out hover:bg-[#FF014F] py-3 rounded-[80px] font-medium text-xl"
                  }`}
                >
                  SKILLS
                  <span className="inline-block w-[40px] h-[2px] bg-white mx-2 -translate-y-1"></span>
                  <span className="text-xl font-bold">02</span>
                </button>
                <button
                  onClick={() => handleClick("education")}
                  className={`${
                    education
                      ? "text-white w-[260px] bg-[#FF014F] py-3 rounded-[80px] font-medium text-xl"
                      : "text-white w-[260px] transition duration-500 ease-in-out hover:bg-[#FF014F] py-3 rounded-[80px] font-medium text-xl"
                  }`}
                >
                  EDUCATION
                  <span className="inline-block w-[40px] h-[2px] bg-white mx-2 -translate-y-1"></span>
                  <span className="text-xl font-bold">03</span>
                </button>
              </div>
            </div>
          </div>

          <div className="contentArea h-[500px] border-[1px] border-[#ffffff6b] xsm:py-16 lg:py-28 bg-[rgba(0,0,0,.1)!important] lg:px-28 xsm:px-8 xsm:w-[100%] m-auto">
            {bio && (
              <div className="bio  grid grid-cols-2 gap-20 animate-fadeIn ">
                <div className="leftSide">
                  <div className="name flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white text-xl">Name</h1>
                    <span className="inline-block text-lg font-semibold  text-[#969191]">
                      Sk Montajul Ali
                    </span>
                  </div>
                  <div className="age flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white text-xl">Age</h1>
                    <span className="inline-block text-lg font-semibold  text-[#969191]">
                      27
                    </span>
                  </div>
                  <div className="email flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white text-xl">Email</h1>
                    <span className="inline-block text-lg font-semibold  text-[#969191]">
                      sekhmontajulali1997@gmail.com
                    </span>
                  </div>
                  <div className="whatsapp flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white text-xl">Whatsapp</h1>
                    <span className="inline-block text-lg font-semibold  text-[#969191]">
                      +918481803761
                    </span>
                  </div>
                </div>
                <div className="rightSide">
                  <div className="name flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white text-xl">Birthday</h1>
                    <span className="inline-block text-lg font-semibold  text-[#969191]">
                      Sk Montajul Ali
                    </span>
                  </div>
                  <div className="age flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white text-xl">Address</h1>
                    <span className="inline-block text-lg font-semibold  text-[#969191]">
                      27
                    </span>
                  </div>
                  <div className="email flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white text-xl">Phone</h1>
                    <span className="inline-block text-lg font-semibold  text-[#969191]">
                      +918481803761
                    </span>
                  </div>
                  <div className="whatsapp flex border-b-[1px] border-[#ffffff6b] justify-between  py-2">
                    <h1 className="text-white text-xl">Freelance</h1>
                    <span className="inline-block text-lg font-semibold  text-[#969191]">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            )}
            {skill && (
              <div className="skill grid grid-cols-[60%_40%] animate-fadeIn">
                <div className="leftSide">
                  <div className="proffesion mt-8 items-center  flex gap-4">
                    <div className="icon">
                      <img className="w-16" src={mern} alt="" />
                    </div>
                    <div className="text">
                      <h1 className=" text-2xl text-white font-semibold ">
                        BackEnd :
                      </h1>
                      <span className="text-lg text-[#FF014F]">
                        (Node, Express, MongoDb, MySQL, Prisma ORM)
                      </span>
                    </div>
                  </div>
                  <div className="proffesion mt-8 items-center  flex gap-4">
                    <div className="icon">
                      <img className="w-16" src={mern} alt="" />
                    </div>
                    <div className="text">
                      <h1 className=" text-2xl text-white font-semibold ">
                        FrontEnd :
                      </h1>
                      <span className="text-lg text-[#FF014F]">
                        (ReactJs, NextJs, Redux Toolkit, Redux Toolkit Query )
                      </span>
                    </div>
                  </div>
                  <div className="proffesion mt-8 items-center  flex gap-4">
                    <div className="icon">
                      <img className="w-16" src={mern} alt="" />
                    </div>
                    <div className="text">
                      <h1 className=" text-2xl text-white font-semibold ">
                        Wordpress :
                      </h1>
                      <span className="text-lg text-[#FF014F]">
                        (Theme customization)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rightSide">
                  <div className="proffesion mt-8 items-center  flex gap-4">
                    <div className="text">
                      <h1 className="text-3xl text-white font-bold ">90%</h1>
                      <div className="w-[300px]  h-2 rounded-[80px] bg-[#ffffff] relative">
                        <span
                          className="inline-block progress-bar  h-2 w-[98%] bg-[#FF014F] rounded-[80px] absolute top-0 left-0  "
                          style={{ "--progress-width": "90%" }}
                        >
                          {" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="proffesion mt-14 items-center  flex gap-4">
                    <div className="text">
                      <h1 className=" text-3xl text-white font-bold ">95%</h1>
                      <div className="w-[300px]  h-2 rounded-[80px] bg-[#ffffff] relative">
                        <span
                          className="inline-block progress-bar  h-2 w-[98%] bg-[#FF014F] rounded-[80px] absolute top-0 left-0  "
                          style={{ "--progress-width": "95%" }}
                        >
                          {" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="proffesion mt-14 items-center  flex gap-4">
                    <div className="text">
                      <h1 className=" text-3xl text-white font-bold ">98%</h1>
                      <div className="w-[300px]  h-2 rounded-[80px] bg-[#ffffff] relative">
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
      </div>
    </>
  );
};

export default SkillSection;
