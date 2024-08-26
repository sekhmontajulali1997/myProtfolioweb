import {
    IoHomeOutline,
    IoSettingsOutline,
    IoBriefcaseOutline,
  } from "react-icons/io5";
  import {
    FaRegUser,
    FaRegFileAlt,
    FaRegComments,
    FaPlayCircle,
  } from "react-icons/fa";
const Header = () => {
  return (
    <>
    
   
            <ul>
              <li className="bg-[#FF014F] py-8 border-b-[1px] border-[#e7e7e751]">
                <a href="#">
                  <h1 className="text-center text-2xl  text-white">
                    DevMontaj
                  </h1>
                </a>
              </li>
              <li className="py-8 relative bg-aqua my-2 p-4 text-center list-none cursor-pointer overflow-hidden group border-b-[1px] border-[#e7e7e751]">
                <div>
                  <a
                    href="#"
                    className="text-white text-center block text-xl absolute top-1/2 left-[-100%] transform -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:left-1/2 group-hover:-translate-x-1/2 whitespace-nowrap"
                  >
                    Home
                  </a>
                </div>
                <IoHomeOutline className="text-white text-3xl m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:translate-x-[900%] whitespace-nowrap" />
              </li>
              <li className="py-8 relative bg-aqua my-2 p-4 text-center list-none cursor-pointer overflow-hidden group border-b-[1px] border-[#e7e7e751]">
                <div>
                  <a
                    href="#"
                    className="text-white text-center block text-xl absolute top-1/2 left-[-100%] transform -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:left-1/2 group-hover:-translate-x-1/2 whitespace-nowrap"
                  >
                    Services
                  </a>
                </div>
                <IoSettingsOutline className="text-white text-3xl m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:translate-x-[900%] whitespace-nowrap" />
              </li>

              <li className="py-8 relative bg-aqua my-2 p-4 text-center list-none cursor-pointer overflow-hidden group border-b-[1px] border-[#e7e7e751]">
                <div>
                  <a
                    href="#"
                    className="text-white text-center block text-xl absolute top-1/2 left-[-100%] transform -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:left-1/2 group-hover:-translate-x-1/2 whitespace-nowrap"
                  >
                    Portfolio
                  </a>
                </div>
                <IoBriefcaseOutline className="text-white text-3xl m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:translate-x-[900%] whitespace-nowrap" />
              </li>
              <li className="py-8 relative bg-aqua my-2 p-4 text-center list-none cursor-pointer overflow-hidden group border-b-[1px] border-[#e7e7e751]">
                <div>
                  <a
                    href="#"
                    className="text-white text-center block text-xl absolute top-1/2 left-[-100%] transform -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:left-1/2 group-hover:-translate-x-1/2 whitespace-nowrap"
                  >
                    About
                  </a>
                </div>
                <FaRegUser className="text-white text-3xl m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:translate-x-[900%] whitespace-nowrap" />
              </li>
              <li className="py-8 relative bg-aqua my-2 p-4 text-center list-none cursor-pointer overflow-hidden group border-b-[1px] border-[#e7e7e751]">
                <div>
                  <a
                    href="#"
                    className="text-white text-center block text-xl absolute top-1/2 left-[-100%] transform -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:left-1/2 group-hover:-translate-x-1/2 whitespace-nowrap"
                  >
                    Resume
                  </a>
                </div>
                <FaRegFileAlt className="text-white text-3xl m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:translate-x-[900%] whitespace-nowrap" />
              </li>
              <li className="py-8 relative bg-aqua my-2 p-4 text-center list-none cursor-pointer overflow-hidden group">
                <div>
                  <a
                    href="#"
                    className="text-white text-center block text-xl absolute top-1/2 left-[-100%] transform -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:left-1/2 group-hover:-translate-x-1/2 whitespace-nowrap"
                  >
                    Contact
                  </a>
                </div>
                <FaRegComments className="text-white text-3xl m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:translate-x-[900%] whitespace-nowrap" />
              </li>
              <li className="py-8 relative bg-aqua my-2 p-4 text-center list-none cursor-pointer ">
                <FaPlayCircle className="text-[#FF014F] bg-white text-5xl m-auto animate-shadow-ring rounded-full" />
              </li>
            </ul>
    
    
    </>
  )
}

export default Header