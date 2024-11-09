import Navbar from "../components/Navbar";
import WelcomeCard from "@/components/WelcomeCard";
import EducationCard from "@/components/EducationCard";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <div className="relative z-10">
        <div className="flex flex-col items-center"> 
          <WelcomeCard />
        </div>
        <Navbar />

        <EducationCard />

        {/*the div below is just a placeholder to show off 
        the navbar */}
        <div className="w-64 h-64" style={{
          marginTop: "500rem"
        }}></div>
      </div>
    </div>
  );
  }