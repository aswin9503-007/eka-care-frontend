import Navbar from "../Components/Homepage/Navbar";
import HeroSection from "../Components/Homepage/HeroSection";
import DoctorTool from "../Components/Homepage/DoctorTool";
import PatientApp from "../Components/Homepage/PatientApp";
import DeveloperApp from "../Components/Homepage/DeveloperApp";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DoctorTool />
      <PatientApp />
      <DeveloperApp />
    </>
  );
};

export default Homepage;