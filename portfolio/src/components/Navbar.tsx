"use client";

import { nav } from "framer-motion/client";
import React, { useEffect, useRef, useState } from "react";


interface NavbarProps {
    experienceRef: React.RefObject<HTMLDivElement>;
}


const Navbar: React.FC<NavbarProps> = ( {experienceRef} ) => {
    const [isSticky, setIsSticky] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    //track distance from top of viewport
    const [distanceFromTop, setDistanceFromTop] = useState<number | null>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);
    
    const [distanceExperienceFromTop, setDistanceExperienceFromTop] = useState<number | null>(null);


    const updateDistanceExperienceFromTop = () => {
        if (experienceRef.current) {
            const rect = experienceRef.current.getBoundingClientRect();
            setDistanceExperienceFromTop(rect.top + window.scrollY - navbarRef.current!.offsetHeight);
        }
    }

    
    const handleScroll = () => {
        setIsSticky(window.scrollY >= distanceFromTop!);
    };


    const updateDistanceFromTop = () => {
        if (navbarRef.current) {
            const rect = navbarRef.current.getBoundingClientRect();
            if (!placeholderRef.current) {
                setDistanceFromTop(rect.top + window.scrollY);
                setIsSticky(window.scrollY >= distanceFromTop!);
            } else {
                setDistanceFromTop(placeholderRef.current.getBoundingClientRect().top + window.scrollY);
                setIsSticky(window.scrollY >= distanceFromTop!);
            }
        }
    }
    //if not sticky and then we resize, we first check if the window.scrollY >= the placeholder distance from top
    //if its greater than, setIsSticky remains truee
    //and when we scroll, we want to use the placeholder's top,  so we update the distanceFromTop variable to placeholder's top ONLY since we are beneath the placeholder

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateDistanceFromTop);
        window.addEventListener("resize", updateDistanceExperienceFromTop);
        if (navbarRef.current) {
            const rect = navbarRef.current.getBoundingClientRect();
            if (!placeholderRef.current) {
                setDistanceFromTop(rect.top + window.scrollY);
                setIsSticky(window.scrollY >= rect.top + window.scrollY);
            } else {
                setDistanceFromTop(placeholderRef.current.getBoundingClientRect().top + window.scrollY);
                setIsSticky(window.scrollY >= placeholderRef.current.getBoundingClientRect().top + window.scrollY);
            }
        }
        if (experienceRef.current) {
            const rect = experienceRef.current.getBoundingClientRect();
            setDistanceExperienceFromTop(rect.top + window.scrollY - navbarRef.current!.offsetHeight);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateDistanceFromTop);
        };
    }, [distanceFromTop]);

    return (
        <>
        <div
        ref={navbarRef}
        //note: removed backdrop-blur-sm from classlist, may need to add back
        className={`w-full backdrop-blur-sm ease-in-out
            text-white p-4 transition-transform z-50 
            transform ${isSticky ? "fixed top-0 z-20" : "relative" }
        `}
        style={{
            // backgroundColor: "var(--background)",
            borderBottom: "1px solid #333",
            borderTop: "1px solid #333"
        }}
        >
        <nav className="flex justify-around w-full">
            <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }} className="hover:bg-slate-800 transition font-bold
            ease-in-out text-sm md:text-base lg:text-xl hover:-translate-y-1 hover:translate-y-1 hover:scale-105
            rounded-full px-2 py-2 border border-transparent">Home</a>

            <a href="#" onClick={(e) => {
                e.preventDefault();
                if (distanceFromTop !== null) {
                    window.scrollTo({top: distanceFromTop, behavior: "smooth"});
                }
            }} className="hover:bg-slate-800 transition font-bold
            ease-in-out text-sm md:text-base lg:text-xl hover:-translate-y-1 hover:translate-y-1 hover:scale-105
            rounded-full px-2 py-2 border border-transparent">About</a>

            <a href="#" onClick={(e) => {
                e.preventDefault();
                console.log("test")
                if (distanceExperienceFromTop !== null) {
                    window.scrollTo({top: distanceExperienceFromTop, behavior: "smooth"});
                }
            }} className="hover:bg-slate-800 transition font-bold
            ease-in-out text-sm md:text-base lg:text-xl hover:-translate-y-1 hover:translate-y-1 hover:scale-105 
            rounded-full px-2 py-2 border border-transparent">Experience</a>

            {/* <a href="#" className="hover:bg-slate-800 transition font-bold
            ease-in-out text-sm md:text-base lg:text-xl hover:-translate-y-1 hover:translate-y-1 hover:scale-105 
            rounded-full px-2 py-2 border border-transparent">Projects</a>          */}
        </nav>
        </div>
        {/**placeholder element: */}
        {isSticky && <div ref={placeholderRef} style={{ height: navbarRef.current?.offsetHeight }} />}
        </>
    );
};

export default Navbar;