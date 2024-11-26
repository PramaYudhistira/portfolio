import React from "react";
import TimelineItem from "./TimelineItem";


const timeLineData = [
    {
        title: "DCGPU Software Intern | Full-Time",
        company: "AMD",
        description: "Worked in the firmware automation solution team to help firmware developers automate their testing process for the MI300 GPUs",
        dateRange:"Aug. 2024 - Dec. 2024",
        icon: "not yet implemented"
    },
    {
        title: "Database Developer Intern | Full-Time",
        company: "WebstaurantStore, subsidiary of Clark Associates",
        description: "Developed, fixed, and maintained stored procedures and our database",
        dateRange: "May 2024 - Aug. 2024",
        icon: "not yet implemented"
    },
    {
        title:"Software Engineer Intern | Full-Time",
        company: "Incident IQ",
        description: "Worked on the customer facing issues and helped develop tests and new features where my code reached 10,000,000 users",
        dateRange: "May 2023 - Aug. 2023",
        icon: "not yet implemented"
    }
]


const TimelineMain: React.FC = () => {
    return (
        <div className="flex flex-col space-y-4">
            <h1>TEst</h1>
            {timeLineData.map((item, index) => (
                <TimelineItem
                key={index}
                title={item.title}
                company={item.company}
                description={item.description}
                dateRange={item.dateRange}
                index={index}
                /> 
            ))}
        </div>
    );
}


export default TimelineMain;
