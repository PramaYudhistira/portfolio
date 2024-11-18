import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface TimelineItemProps {
    title: string;
    company: string;
    description: string;
    dateRange: string;
    index: number;
}


const TimelineItem: React.FC<TimelineItemProps> = ({ 
    title,
    company,
    description,
    dateRange,
    index
}) => {
    return (
        <div>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{description}</p>
            <span>{dateRange}</span>
        </div>
    );
};


export default TimelineItem
