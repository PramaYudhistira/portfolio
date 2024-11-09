import Navbar from "../components/Navbar";
import WelcomeCard from "@/components/WelcomeCard";
import EducationCard from "@/components/EducationCard";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col items-center justify-between h-full"> 
          <WelcomeCard />
      </div>
      <Navbar />
      {/* <div className="flex flex-col items-center justify-center mt-4">
        <EducationCard />
      </div> */}
      <div style={{ height: '200vh' }}></div> {/* Added div to enable scrolling */}
    </div>
  );
}