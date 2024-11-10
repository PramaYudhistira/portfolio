"use client";

import React, { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    //track distance from top of viewport
    const [distanceFromTop, setDistanceFromTop] = useState<number | null>(null);
    
    const handleScroll = () => {
        setIsSticky(window.scrollY >= distanceFromTop!);
    };

    //when component mounts, set distanceFromTop variable from null to actual
    useEffect(() => {
        //set the distanceFromTop variable 
        if (navbarRef.current) {
            const rect = navbarRef.current.getBoundingClientRect();
            setDistanceFromTop(rect.top);
        }

    }, []);

    //when screen resolution changes, update distanceFromTop
    const updateDistanceFromTop = () => {
        if (navbarRef.current) {
            const rect = navbarRef.current.getBoundingClientRect();
            setDistanceFromTop(rect.top + window.scrollY);
        }
    }

    useEffect(() => {
        console.log("distanceFromTop updated:", distanceFromTop);

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateDistanceFromTop);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateDistanceFromTop);
        };
    }, [distanceFromTop]);

    return (
        <div
        ref={navbarRef}
        className={`w-full backdrop-blur-sm ease-in-out
            text-white p-4 transition-transform  z-50 
            transform bg-red-500 ${isSticky ? "fixed top-0 z-20" : "relative" }
        `}
        style={{
            //remove backgroundColor later after figuring out education card
            // backgroundColor: "#1a1a1a",
        }}
        >
        <nav className="flex justify-start w-full">
            <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }} className="hover:bg-slate-800 transition font-bold
            ease-in-out hover:-translate-y-1 hover:translate-y-1 hover:scale-110 
            rounded-full px-4 py-2 border border-transparent">Home</a>

            <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({top: navbarRef.current?.offsetTop, behavior: "smooth"});
            }} className="hover:bg-slate-800 transition font-bold
            ease-in-out hover:-translate-y-1 hover:translate-y-1 hover:scale-110 
            rounded-full px-4 py-2 border border-transparent">About</a>

            <a href="#" className="hover:bg-slate-800 transition font-bold
            ease-in-out hover:-translate-y-1 hover:translate-y-1 hover:scale-110 
            rounded-full px-4 py-2 border border-transparent">Experience</a>

            <a href="#" className="hover:bg-slate-800 transition font-bold
            ease-in-out hover:-translate-y-1 hover:translate-y-1 hover:scale-110 
            rounded-full px-4 py-2 border border-transparent">Projects</a>         
        </nav>
        </div>
    );
};

export default Navbar;