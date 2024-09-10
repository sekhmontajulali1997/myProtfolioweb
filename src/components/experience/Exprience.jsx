import webDevelopment from "../../assets/webdevelopment.jpg";
import webDesign from "../../assets/webdesign.jpg";
import mobileApp from "../../assets/mobileApp.jpg";
import "./Exprience.css";
const Exprience = () => {
  return (
    <>
      <div className="xl:container bg-[rgba(0,0,0,.2)] lg:py-20 xxxsm:-mt-10 lg:-mt-0 xxxsm:py-10" >
        <div className="parentDiv w-[90%] m-auto">
          <div className="headingArea text-center mb-4">
         <div className="flex gap-2 justify-center mb-3">   
            <span className="text-[#FFDD67] inline-block text-2xl"> MY </span>
            <span className=" font-semibold gradient-text  text-2xl">EXPERTISE</span></div>

            <h1 className="text-white text-5xl text font-bold"> What I Do </h1>
            <span className="bg-[#FF014F] w-3 h-[2px] inline-block  me-2"></span>
            <span className="bg-[#FF014F] w-14 h-[2px] inline-block "></span>
          </div>

          <div className="expertise grid lg:grid-cols-3 md:grid-cols-2 xxxsm:gap-10  xl:px-20 md:mt-16">


            <div className="firstDiv    ">
              <div className="icon mb-6">
                <img className="w-full" src={webDesign} alt="" />
              </div>
              <div className="tittle">
                <h1 className=" text-white mb-4 text-2xl font-semibold">Website design</h1>
              </div>
              <div className="content">
                <p className="text-[#cfe2ff] " > 
                Transform your online presence with custom, high-quality website designs tailored to your business needs. As an experienced website designer, I specialize in creating visually stunning, responsive, and user-friendly websites that engage your audience and drive results.
                </p>
              </div>
            </div>
            <div className="middleDiv  px-7 xxxsm:px-0">
            <div className="icon mb-6">
                <img className="w-full" src={webDevelopment} alt="" />
              </div>
              <div className="tittle">
                <h1 className=" text-white mb-4 text-2xl font-semibold">Website Development</h1>
              </div>
              <div className="content">
                <p className="text-[#cfe2ff] " > 
                Bring your ideas to life with professional website development that delivers seamless functionality and performance. With expertise in modern web technologies, I provide end-to-end website development solutions designed to meet your business objectives.
                </p>
              </div>
             
            </div>
            <div className="lastDiv pl-7 xxxsm:pl-0  lg:mt-0 ">
            <div className="icon mb-6">
                <img className="w-full" src={mobileApp} alt="" />
              </div>
              <div className="tittle">
                <h1 className=" text-white mb-4 text-2xl font-semibold">Mobile App Development</h1>
              </div>
              <div className="content">
                <p className="text-[#cfe2ff] " > 
                Mobile app development service Comming Soon......................................
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
