import React, { useEffect, useRef, useState } from "react";
import TimelineItem from "./TimelineItem";

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
    const firstRowRef = useRef<HTMLDivElement>(null);
    const lastRowRef = useRef<HTMLDivElement>(null);
    const [lineHeight, setLineHeight] = useState<number | null>(null);

    useEffect(() => {
        if (firstRowRef.current && lastRowRef.current) {
            const firstRowMidpoint = firstRowRef.current.getBoundingClientRect().top + firstRowRef.current.getBoundingClientRect().height / 2;
            const lastRowMidpoint = lastRowRef.current.getBoundingClientRect().top + lastRowRef.current.getBoundingClientRect().height / 2;
            setLineHeight(lastRowMidpoint - firstRowMidpoint);
        }
    }, [])

    return (
        <>
        <div className="col-span-1 mt-10 md:mt-20">
          <h1 className="font-bold text-2xl lg:text-4xl md:text-3xl pl-5 pr-5">Experience</h1>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 sm:gap-10 mt-10 sm:mt-20 ml-5 mr-5">
          {/* Vertical line */}
          {/**we will deploy this and see if it looks good but here is original vertical line: */}
          {/* <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 z-0 opacity-30" style={{ height: '100%' }}></div> */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 z-0 opacity-30" style={{ height: `${lineHeight}px`, top: `calc(50% - ${lineHeight! / 2}px)` }}></div>
          {timeLineData.map((item, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 && <div className="hidden sm:block col-span-1"></div>}
              <div
                ref={
                  index === 0
                    ? firstRowRef
                    : index === timeLineData.length - 1
                    ? lastRowRef
                    : null
                }
                className={`col-span-2 sm:col-span-1 ${index % 2 === 1 ? "sm:justify-self-end sm:mr-10" : "sm:justify-self-start sm:ml-10"}`}
              >
                <TimelineItem
                  key={index}
                  title={item.title}
                  company={item.company}
                  description={item.description}
                  dateRange={item.dateRange}
                  index={index}
                  logoSrc={item.logoSrc}
                />
              </div>
              {index % 2 !== 0 && <div className="hidden sm:block col-span-1"></div>}
              {index < timeLineData.length - 1 && <TimelineLinesMobile />}
            </React.Fragment>
          ))}
        </div>
      </>
    );
}


export default TimelineMain;
