"use client";
import React, { useState, useEffect, useMemo } from "react";
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


interface HomeSectionProps {
    nameRef: React.RefObject<HTMLHeadingElement>;
};


const HomeSection: React.FC<HomeSectionProps> = ({ nameRef }) => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);
      const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
      };
    
      const options: ISourceOptions = useMemo(
        () => ({
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          background: {
            color: {
              value: "#0a0a0a",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
            //   onClick: {
            //     enable: true,
            //     mode: "push",
            //   },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                default: OutMode.out,
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 120,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }),
        [],
      );

    return (
        <div className="relative h-[70vh] overflow-hidden relative z-0">
            <Particles 
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="absolute inset-0 h-full w-full"
            />

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
