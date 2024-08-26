import { RxHamburgerMenu, RxCrossCircled } from "react-icons/rx";
import "./MobileHeader.css";
import { useState } from "react";

const MobileHeader = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      
        <div className="mobileHeader  sm:px-20 xxsm:px-6 xxxsm:px-3  py-6 fixed w-full bg-white ">
          <div className="parentDiv grid grid-cols-[40%_60%]">
            <div className="leftSide relative">
              <div className="icon">
                <RxHamburgerMenu
                  onClick={() => setModal(true)}
                  className="text-3xl cursor-pointer"
                />
              </div>

              <div
                className={`menu p-4 w-[500px] transition-all duration-500 transform absolute -top-6 -left-20 bg-[#ffffff] ${
                  modal ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
              >
                <div className="icon flex justify-between items-center my-4">
                  <div className="logo">
                    <h1 className="text-3xl xxsm:text-lg">Dev Montaj</h1>
                  </div>
                  <div className="crossIcon">
                    <button>
                      <RxCrossCircled
                        onClick={() => setModal(false)}
                        className="text-3xl cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Expertise</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rightSide">
              <div className="logo">
                <h1 className="text-2xl">DevMontaj</h1>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default MobileHeader;
