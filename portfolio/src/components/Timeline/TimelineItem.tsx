import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface TimelineItemProps {
    title: string;
    company: string;
    description: string;
    dateRange: string;
    index: number;
    logoSrc: string;
}


const TimelineItem: React.FC<TimelineItemProps> = ({ 
    title,
    company,
    description,
    dateRange,
    index,
    logoSrc
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);

    return (
        <div className="relative">
            {index % 2 === 0 && (
                <>

                <motion.div className="hidden sm:block absolute right-full top-1/2 transform -translate-y-1/2 w-[59px] h-0.5 bg-gray-300 z-0 opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 0.3: 0 }}>


                </motion.div>
                </>
            )}
            {index % 2 !== 0 && (
                <motion.div className="hidden sm:block absolute left-full top-1/2 transform -translate-y-1/2 w-[59px] h-0.5 bg-gray-300 z-0 opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 0.3: 0 }}></motion.div>
            )}
            <motion.div
                ref={ref}
                initial={{ opacity: 0}}
                animate={{ opacity: isInView ? 1 : 0}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-4 bg-gray-900 rounded-lg shadow-lg max-w-md z-10"
            >
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                        <img src={logoSrc} alt={`${company} logo`} className="w-8 h-8 transform scale-125" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-3">{company}</h3> 
                </div>
                <h4 className="text-lg text-gray-400">{title}</h4>
                <span className="text-gray-500">{dateRange}</span>
                <p className="text-gray-300">{description}</p>
            </motion.div>
        </div>
    );
};


export default TimelineItem
