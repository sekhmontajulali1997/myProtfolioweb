import webDevelopment from "../../assets/image_21.png";
import "./Exprience.css";
const Exprience = () => {
  return (
    <>
      <div className="container bg-[rgba(0,0,0,.2)] py-20 " >
        <div className="parentDiv w-[90%] m-auto">
          <div className="headingArea text-center mb-4">
         <div className="flex gap-2 justify-center mb-3">   
            <span className="text-[#FFDD67] inline-block text-2xl"> MY </span>
            <span className=" font-semibold gradient-text  text-2xl">EXPERTISE</span></div>

            <h1 className="text-white text-5xl text font-bold"> What I Do </h1>
            <span className="bg-[#FF014F] w-3 h-[2px] inline-block  me-2"></span>
            <span className="bg-[#FF014F] w-14 h-[2px] inline-block "></span>
          </div>

          <div className="expertise flex justify-center px-20 gap-5 mt-20">
            <div className="firstDiv  ">
              <div className="icon mb-16">
                <img className="w-32" src={webDevelopment} alt="" />
              </div>
              <div className="tittle">
                <h1 className=" text-white mb-4 text-2xl font-semibold">Website design</h1>
              </div>
              <div className="content">
                <p className="text-[#cfe2ff] " > 
                  Continue indulged speaking the was horrible for domestic
                  position. Seeing get rather her you not esteem men settle is
                  genius take excuse the constructions.
                </p>
              </div>
            </div>
            <div className="middleDiv border-x-[1px] px-7 border-[#cfe2ff4a]">
            <div className="icon mb-16">
                <img className="w-32" src={webDevelopment} alt="" />
              </div>
              <div className="tittle">
                <h1 className=" text-white mb-4 text-2xl font-semibold">Website design</h1>
              </div>
              <div className="content">
                <p className="text-[#cfe2ff] " > 
                  Continue indulged speaking the was horrible for domestic
                  position. Seeing get rather her you not esteem men settle is
                  genius take excuse the constructions.
                </p>
              </div>
             
            </div>
            <div className="lastDiv">
            <div className="icon mb-16">
                <img className="w-32" src={webDevelopment} alt="" />
              </div>
              <div className="tittle">
                <h1 className=" text-white mb-4 text-2xl font-semibold">Website design</h1>
              </div>
              <div className="content">
                <p className="text-[#cfe2ff] " > 
                  Continue indulged speaking the was horrible for domestic
                  position. Seeing get rather her you not esteem men settle is
                  genius take excuse the constructions.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exprience;
