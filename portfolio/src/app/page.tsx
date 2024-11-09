import Navbar from "../components/Navbar";
import WelcomeCard from "@/components/WelcomeCard";
import EducationCard from "@/components/EducationCard";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-between h-full"> 
            <WelcomeCard />
        </div>
        <Navbar />
        {/* <div className="flex flex-col items-center justify-center mt-4">
          <EducationCard />
        </div> */}
        <div style={{ height: '200vh' }}></div> {/* Added div to enable scrolling */}
      </div>
    </div>
  );
  }