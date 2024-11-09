import Navbar from "../components/Navbar";
import WelcomeCard from "@/components/WelcomeCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div style={{ height: '200vh' }}> 
        <WelcomeCard />
      </div>
      <Navbar />
    </div>
  );
}