import backgroundImage from "../../assets/full.jpg";
import AboutMe from "../../components/aboutMe/AboutMe";
import Contact from "../../components/contact/Contact";
import Exprience from "../../components/experience/Exprience";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MobileHeader from "../../components/header/MobileHeader";
import HeroSection from "../../components/heroSection/HeroSection";
import ProtfolioSection from "../../components/profolio/ProtfolioSection";
import MobileskillSection from "../../components/skill/MobileskillSection";
import SkillSection from "../../components/skill/SkillSection";

const MainPage = () => {
  return (
    <>
      <section className="mainDiv">
        <div className="parentDiv flex">
          <div className="menuArea 2xl:w-[8%] lg:w-[12%] xl:w-[12%] xxxsm:hidden bg-[#040836] fixed top-0 left-0 h-full lg:block ">
            <Header />
          </div>

          <div
            className=" contentArea xxxsm:w-[100%] 2xl:w-[92%] 2xl:ml-[8%] xl:w-[88%] lg:w-[88%] xl:ml-[12%] lg:ml-[12%]  bg-cover bg-center h-full"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="block  lg:hidden ">
              {" "}
              <MobileHeader />
            </div>

            <HeroSection />
            <Exprience />

            <ProtfolioSection />
            <AboutMe />

            <div className="xxxsm:hidden lg:block">
            <SkillSection />
            </div>
            <div className="lg:hidden">
            <MobileskillSection/>
            </div>
            
            <Contact />
            <Footer />

            
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
