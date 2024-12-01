import React, { useEffect, useRef } from "react";
import TimelineItem from "./TimelineItem";
import { motion, useInView, useAnimation } from "framer-motion";
import TimelineLinesMobile from "./TimelineLinesMobile";


const timeLineData = [
    {
        title: "DCGPU Software Intern | Full-Time",
        company: "AMD",
        description: "Worked in the firmware automation solution team to help firmware developers automate their testing process for the MI300 GPUs",
        dateRange:"Aug. 2024 - Dec. 2024",
        icon: "not yet implemented",
        logoSrc:"/amd_logo.svg"
    },
    {
        title: "Database Developer Intern | Full-Time",
        company: "WebstaurantStore",
        description: "Developed, fixed, and maintained stored procedures and our database",
        dateRange: "May 2024 - Aug. 2024",
        icon: "not yet implemented",
        logoSrc: "/wss_logo_new.svg"
    },
    {
        title:"Software Engineer Intern | Full-Time",
        company: "Incident IQ",
        description: "Worked on the customer facing issues and helped develop tests and new features where my code reached 10,000,000 users",
        dateRange: "May 2023 - Aug. 2023",
        icon: "not yet implemented",
        logoSrc: "/iiq_logo.svg"
    }
]


const TimelineMain: React.FC = () => {
    const lineRef = useRef<HTMLDivElement>(null);
    const isLineInView = useInView(lineRef);

    useEffect(() => {
        console.log(isLineInView);
    }, [isLineInView]);
    

    return (
        <>
            <div className="col-span-1 mt-10 md:mt-20">
                <h1 className="font-bold text-2xl lg:text-4xl md:text-3xl pl-5 pr-5">Experience</h1>
            </div>
            <div className="flex items-center justify-center flex-col sm:space-y-4 mt-10 md:mt-20 ml-5 mr-5 space-y-0">
                {timeLineData.map((item, index) => (
                    <React.Fragment key={index}>
                        <TimelineItem
                        key={index}
                        title={item.title}
                        company={item.company}
                        description={item.description}
                        dateRange={item.dateRange}
                        index={index}
                        logoSrc={item.logoSrc}
                        />
                        {index < timeLineData.length - 1 && (
                            <TimelineLinesMobile />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}


export default TimelineMain;
