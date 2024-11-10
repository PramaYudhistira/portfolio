import Navbar from "../components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div id="main-page">
      <HomeSection />
      <Navbar />
      <AboutSection />
      <div style={{
        height: "200vh",
      }}></div>
    </div>
  );
};
