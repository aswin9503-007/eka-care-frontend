import Navbar from "../Components/Homepage/Navbar";
import HeroSection from "../Components/Homepage/HeroSection";
import DoctorTool from "../Components/Homepage/DoctorTool";
import PatientApp from "../Components/Homepage/PatientApp";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DoctorTool />
      <PatientApp />
    </>
  );
};

export default Homepage;