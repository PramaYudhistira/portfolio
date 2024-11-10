"use client";

import React, { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    const initialNavbarOffset = useRef<number | null>(null);
    
    const handleScroll = () => {
        if (initialNavbarOffset.current !== null) {
            if (window.scrollY > initialNavbarOffset.current) {
                setIsSticky(true);
            } else if (window.scrollY <= initialNavbarOffset.current) {
                setIsSticky(false);
            }
        }
    };

    useEffect(() => {
        if (navbarRef.current) {
            initialNavbarOffset.current = navbarRef.current.offsetTop;
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
        ref={navbarRef}
        className={`w-full mx-auto backdrop-blur-sm ease-in-out
            text-white p-4 transition-transform  left-1/2 -translate-x-1/2 z-20 
            transform ${isSticky ? "fixed top-0" : "absolute" }
        `}
        style={{
            //remove backgroundColor later after figuring out education card
            // backgroundColor: "#1a1a1a",
            top: isSticky ? 0 : "75vh",
        }}
        >
        <nav className="flex justify-start space-x-4">
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