import Navbar from "../components/Navbar";
import WelcomeCard from "@/components/WelcomeCard";
import EducationCard from "@/components/EducationCard";
import BackgroundVideo from "@/components/BackgroundVideo";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  return (
    <div id="main-page">
      <HomeSection />
      <Navbar />
      <div style={{
        height: "200vh",
      }}></div>
    </div>
  );
  }