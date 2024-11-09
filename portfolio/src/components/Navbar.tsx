// src/components/Navbar.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  //start of 
  useEffect(() => {
    //handleScroll function
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarTop = navbarRef.current.getBoundingClientRect().top;

        // setIsSticky(navbarTop < 0);
        // if (initialTop === null) {
        //     setInitialTop(navbarTop);
        // }

        if (navbarTop < 0 && !isSticky) {
            setIsSticky(true);
        } else if (navbarTop >= 0 && isSticky) {
            setIsSticky(false);
            // window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <div
      ref={navbarRef}
      className={`w-full backdrop-grayscale-0 text-white p-4 transition-transform ${
        isSticky ? "fixed top-0" : "absolute"
      }`}
      style={{
        backgroundColor: "#333", // Darker grey color
        top: isSticky ? 0 : "75vh", // Start at 75% of the viewport height
      }}
    >
      <nav className="flex justify-around">
        <a href="#home" className="hover:bg-indigo-500 transition ease-in-out hover:-translate-y-1 hover:translate-y-1 hover:scale-110 rounded-full px-4 py-2 border border-transparent">Home</a>
      </nav>
    </div>
  );
};

export default Navbar;