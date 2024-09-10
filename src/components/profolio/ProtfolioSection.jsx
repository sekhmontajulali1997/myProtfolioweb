import "./Protfolio.css";
import iconn from "../../assets/image_10.png";

import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
const ProtfolioSection = () => {
  const [isHover, setisHover] = useState(null);

  const protfilo = [
 
    {
      id:1,
      img:"https://ambrox-dark.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F4.jpg&w=640&q=75",
      tittle:" Ecommerce",
      
    },
    
    {
      id:2,
      img:"https://ambrox-dark.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F4.jpg&w=640&q=75",
      tittle:" Ecommerce",
      
    },
    
    {
      id:3,
      img:"https://ambrox-dark.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F4.jpg&w=640&q=75",
      tittle:" Ecommerce",
      
    },
    
    {
      id:4,
      img:"https://ambrox-dark.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F4.jpg&w=640&q=75",
      tittle:" Ecommerce",
      
    },
    {
      id:5,
      img:"https://ambrox-dark.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F4.jpg&w=640&q=75",
      tittle:" Ecommerce",
      
    },
    {
      id:6,
      img:"https://ambrox-dark.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F4.jpg&w=640&q=75",
      tittle:" Ecommerce",
      
    },
   
  ]

  return (
    <>
      <div className="xl:container lg:py-28 sm:py-20 xxxsm:py-16">
        <div className="parentDiv w-[90%] m-auto xl:px-20">
          <div className="iconArea ">
            <div className="icon relative">
              <img
                className=" absolute -top-7 -left-11 w-14"
                src={iconn}
                alt=""
              />
            </div>
            <h1 className=" gradient-text text-2xl font-semibold mb-4">
              RECENT WORK
            </h1>
          </div>

          <div className="contentArea grid gap-8 sm:grid-cols-[50%_40%]">
            <div className="leftContent ">
              <h1 className=" lg:text-4xl md:text-3xl sm:text-2xl xxsm:text-4xl xxxsm:text-xl text-white xxxsm:font-semibold md:font-bold">
                Look at my portfolio and give me your feedback
              </h1>
            </div>
            <div className="rightContent col-span-[60%] flex lg:gap-10 xxxsm:gap-4">
              <div className="counterLeft">
                <h1 className="text-white lg:text-4xl md:text-4xl sm:text-3xl xxsm:text-5xl xxxsm:text-3xl font-bold">27+</h1>
                <h1 className="text-white lg:text-2xl md:text-2xl sm:text-xl xxsm:text-xl xxxsm:text-xl font-semibold mt-2">
                  Completed Project
                </h1>
              </div>
              <div className="w-[2px] h-20 bg-white"></div>
              <div className="counterRight">
                <h1 className="text-white lg:text-4xl md:text-3xl sm:text-3xl xxsm:text-5xl xxxsm:text-3xl font-bold">94%</h1>
                <h1 className="text-white lg:text-2xl md:text-2xl sm:text-xl xxsm:text-xl xxxsm:text-xl font-semibold mt-2">
                  Positive Rating
                </h1>
              </div>
            </div>
          </div>

          <div className="protfolioArea grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            
           {
            protfilo?.map((item,index)=>{
              return(
                <div
                key={index}
                className="items overflow-hidden group"
                onMouseEnter={() => setisHover(index)}
                onMouseLeave={() => setisHover(null)}
              >
                <div className="img relative">
                  <img className="w-full" src={item.img} alt="" />
                  <div
                  className={`tittle absolute -bottom-20 left-0 bg-[#040836c8] p-4 w-full transition-all duration-500 ease-in-out ${
                    isHover === index ? 'opacity-100 translate-y-[-76px]' : 'opacity-0 translate-y-[-30px]' 
                  }`}
                >
                  <div className="grid grid-cols-[80%_20%]">
                    <h1 className="text-2xl text-white inline-block">
                      {item.tittle}
                    </h1>
                    <button>
                      <GoArrowRight className="w-11 h-11 p-2 inline-block rounded-full bg-[#FF014F] text-white " />
                    </button>
                  </div>
                </div>
                </div>
  
                
              </div>
  
              )
            })
           }
         
         
          
          </div>





        </div>
      </div>
    </>
  );
};

export default ProtfolioSection;
