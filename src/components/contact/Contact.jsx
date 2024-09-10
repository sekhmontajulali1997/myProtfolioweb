
/* eslint-disable react/no-unescaped-entities */
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { ImHeadphones } from "react-icons/im";
const Contact = () => {
  return (
    <>
      <div className="xl:container pb-10">
        <div className="contactSection xsm:w-[100%] xl:w-[90%]  m-auto xl:px-20  ">
          {/* <h1 className="text-[200px] text-center text-white">CONTACT</h1> */}

          <div className="parentDiv grid lg:grid-cols-[60%_40%] xxxsm:gap-8 lg:gap-0 ">
            <div className="leftSide  bg-[rgba(0,0,0,.2)] xl:p-14 sm:p-16 xxxsm:p-6">
              <div className="textAre">
                <h1 className="text-white text-4xl mb-6 font-semibold">
                  {" "}
                  Let's talk?
                </h1>
                <p className=" text-[#948e8e] text-lg">
                  It's all about the humans behind a brand and those
                  experiencing it, br we're right there. In the middle
                  performance quick.
                </p>
              </div>

              <div className="formArea mt-10 ">
                <div className="mb-5 ">
                  <input type="text" className="w-full text-white bg-transparent border-[1px] border-[#6666667b] px-3 py-3 rounded-lg " placeholder="Name" />
                </div>
                <div>
                  <input  className="w-[48%] text-white bg-transparent border-[1px] border-[#6666667b] px-5 py-3 rounded-lg " type="text" placeholder="Email*" />
                  <input  className="w-[48%]  ml-[4%] text-white bg-transparent border-[1px] border-[#6666667b] px-5 py-3 rounded-lg "  type="text" placeholder="Phone" />
                </div>
                <div>
                  <textarea className="w-full mt-5 h-[200px] text-white bg-transparent border-[1px] border-[#6666667b] px-5 py-3 rounded-lg " name="" id="" placeholder="Tell Us About Project*"></textarea>
                </div>
                <div>
                  <button className=" bg-[#FF014F] text-white mt-5 rounded-[80px] lg:w-[35%] lg:py-2 lg:text-lg xsm:text-md xxxsm:w-[60%] xsm:py-2" >Send Message</button>
                </div>
              </div>
            </div>

            <div className="rightSide sm:px-8 lg:px-0 flex flex-col justify-center lg:gap-14 xxxsm:gap-4 xsm:ml-8 ">
              <div className="Email flex gap-5 items-center">
                <div className="icon p-3 bg-[#FF014F] rounded-md">
                  <FaEnvelopeOpenText className="md:text-3xl text-white "/>

                </div>
                <div className="text">
                  <h1 className="text-[#c4c2c2] md:text-2xl"> Email</h1>
                  <a href="mailto:sekhmontajulali1997@gmail.com" className="text-white sm:text-base xl:text-xl font-semibold xxxsm:text-sm ">sekhmontajulali1997@gmail.com</a>
                </div>
              </div>

              <div className="Address flex gap-5 items-center">
                <div className="icon p-3 bg-[#957811] rounded-md">
                  <LuMapPin className="  md:text-3xl text-white "/>

                </div>
                <div className="text">
                  <h1 className="text-[#c4c2c2] md:text-2xl"> Address</h1>
                  <h1 className="text-white  xl:text-xl sm:text-base xxxsm:text-sm font-semibold "> Birshibpur, Uluberia, Howrah, India</h1>
                </div>
              </div>

              <div className="Phone flex gap-5 items-center">
                <div className="icon p-3 bg-[#FF014F] rounded-md">
                  <ImHeadphones className="  md:text-3xl text-white "/>

                </div>
                <div className="text">
                  <h1 className="text-[#c4c2c2] md:text-2xl"> Phone</h1>
                  <a href="tel:+918481803761" className="sm:text-base xxxsm:text-sm text-white  xl:text-xl font-semibold ">+918481803761</a>
                </div>
              </div>


             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
