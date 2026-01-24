import Navbar from "../Components/Homepage/Navbar";
import HeroSection from "../Components/Homepage/HeroSection";
import DoctorTool from "../Components/Homepage/DoctorTool";
import PatientApp from "../Components/Homepage/PatientApp";
import DeveloperApp from "../Components/Homepage/DeveloperApp";
import IndustryShowcase from "../Components/Homepage/industryShowcase";
import Partners from "../Components/Homepage/Partners";

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
    </>
  );
};

export default Homepage;