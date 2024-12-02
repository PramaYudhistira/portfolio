"use client";

import React, { useEffect, useRef, useState } from "react";


//TODO: I have too much OCD... when you refresh, and you refresh when you are below the sticky point, of course the flipping navbar 
//     is not fricking under there until you scroll. 
//     naturally you fix this by setting isSticky at the useEffect with the dependency of distanceFromTop, but then you get this flicker where its at the top fiurst,
//     and then it gets to the original place in the dom tree... so like sticky, then not sticky (Refer to line 51)
const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    //track distance from top of viewport
    const [distanceFromTop, setDistanceFromTop] = useState<number | null>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);
    
    const handleScroll = () => {
        setIsSticky(window.scrollY >= distanceFromTop!);
    };

    //when component mounts, set distanceFromTop variable from null to actual
    useEffect(() => {
        //set the distanceFromTop variable 
        if (navbarRef.current) {
            const rect = navbarRef.current.getBoundingClientRect();
            setDistanceFromTop(rect.top + window.scrollY);
        }

    }, []);

    //when screen resolution changes, update distanceFromTop
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

            <a href="#" className="hover:bg-slate-800 transition font-bold
            ease-in-out text-sm md:text-base lg:text-xl hover:-translate-y-1 hover:translate-y-1 hover:scale-105 
            rounded-full px-2 py-2 border border-transparent">Experience</a>

            <a href="#" className="hover:bg-slate-800 transition font-bold
            ease-in-out text-sm md:text-base lg:text-xl hover:-translate-y-1 hover:translate-y-1 hover:scale-105 
            rounded-full px-2 py-2 border border-transparent">Projects</a>         
        </nav>
        </div>
        {/**this is to add a placeholder so elements below dont depend on navbar
         * top element when it is sticky since being sticky essentially removes
         * the element from the document flow
         */}
        {isSticky && <div ref={placeholderRef} style={{ height: navbarRef.current?.offsetHeight }} />}
        </>
    );
};

export default Navbar;