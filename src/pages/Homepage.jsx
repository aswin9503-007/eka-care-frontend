import Navbar from "../Components/Homepage/Navbar";
import HeroSection from "../Components/Homepage/HeroSection";
import DoctorTool from "../Components/Homepage/DoctorTool";
import PatientApp from "../Components/Homepage/PatientApp";
import DeveloperApp from "../Components/Homepage/DeveloperApp";
import IndustryShowcase from "../Components/Homepage/industryShowcase";
import Partners from "../Components/Homepage/Partners";
import AboutUs from "../Components/Homepage/AboutUs";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DoctorTool />
      <PatientApp />
      <DeveloperApp />
      <IndustryShowcase />
      <Partners />
      <AboutUs />

    </>
  );
};

export default Homepage;