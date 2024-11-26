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
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);

    return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50}}//why is y: 50 
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="p-4 bg-gray-900 rounded-lg shadow-lg max-w-md"
        >
            <div>
            <h3 className="text-xl font-bold text-white">{company}</h3> 
            </div>
            <h4 className="text-lg text-gray-400">{title}</h4>
            <span className="text-gray-500">{dateRange}</span>
            <p className="text-gray-300">{description}</p>
        </motion.div>
    );
};


export default TimelineItem
