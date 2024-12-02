import Navbar from "../components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import HomeAboutWrapper from "@/components/HomeAboutWrapper";


export default function Home() {
  return (
    <div id="main-page">
      <HomeAboutWrapper />
      <div style={{
        height: "50px",
      }}></div>
    </div>
  );
};
