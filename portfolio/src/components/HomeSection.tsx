"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
import RINGS from "vanta/dist/vanta.rings.min";

interface HomeSectionProps {
    nameRef: React.RefObject<HTMLHeadingElement>;
};


const HomeSection: React.FC<HomeSectionProps> = ({ nameRef }) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && typeof window !== "undefined") {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor:0x0,
          color: 0x6384b6,
          color2: 0xbd20e3,
        })
      );
      // setVantaEffect(
      //   RINGS({
      //     el: vantaRef.current,
      //     THREE:THREE, 
      //     mouseControls: true,
      //     touchControls: true,
      //     gyroControls: false,
      //     minHeight: 200.00,
      //     minWidth: 200.00,
      //     scale: 1.00,
      //     scaleMobile: 1.00,
      //     color: 0x9cb67d,
      //     backgroundColor: 0x202428,
      //   })
      // );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative h-[70vh] overflow-hidden relative z-0">

      <div ref={vantaRef} className="absolute inset-0 h-full w-full" />
      {/* <Particles 
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 h-full w-full"
      /> */}

      <div className="absolute inset-0 flex flex-col md:items-center justify-center z-10">
        <div className="self-start text-left max-w-lg pl-4 md:mx-auto pr-5rem">
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-4 break-words">Prama</h2>
          <motion.h2 ref={nameRef} className="text-4xl md:text-5xl lg:text-8xl font-bold mb-4 break-words">Yudhistira</motion.h2>
          <p className="text-2xl lg:text-4xl text-left mb-4">Computer Scientist</p>
          <div className="flex space-x-4 ">
            <a href="https://github.com/PramaYudhistira" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl lg:text-5xl"/>
            </a>
            <a href="https://linkedin.com/in/pramayudhistira" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl lg:text-5xl"/>
            </a>
            {/* <a href="https://linkedin.com/in/pramayudhistira" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl lg:text-5xl"/>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomeSection;
