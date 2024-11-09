// src/app/page.tsx
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1>Test</h1>
      <div style={{ height: '200vh' }}> 
      {/* This div adds height to enable scrolling,
      will add actual content once i figure out how to fix this flickering issue*/}
      </div>
      <Navbar />
    </div>
  );
}