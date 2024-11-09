// src/components/Navbar.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    //start of 
    useEffect(() => {
        //handleScroll function
        const handleScroll = () => {
        if (navbarRef.current) {
            const navbarTop = navbarRef.current.getBoundingClientRect().top;

            if (navbarTop < 0 && !isSticky) {
                setIsSticky(true);
            } else if (navbarTop >= 0 && isSticky) {
                setIsSticky(false);
            }
        }
        };

        window.addEventListener("scroll", handleScroll);

        // window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [isSticky]);//this code only runs when isSticky changes

    return (
        <div
        ref={navbarRef}
        className={`w-4/5 mx-auto backdrop-grayscale-0 
            text-white p-4 transition-transform rounded-full ${
            isSticky ? "fixed top-0 left-1/2 transform -translate-x-1/2" : 
            "absolute left-1/2 transform -translate-x-1/2"
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