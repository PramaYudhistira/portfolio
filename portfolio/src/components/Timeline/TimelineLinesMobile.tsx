import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";


const TimelineLinesMobile: React.FC = () => {
    const lineRef = useRef<HTMLDivElement>(null);
    const isLineInView = useInView(lineRef);

    return (
        <motion.div className="md:hidden flex justify-center space-x-40"
        ref={lineRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLineInView ? 0.3 : 0 }}
        >
            <div className="md:hidden w-0.5 h-16 bg-gray-300 opacity-70"></div>
            <div className="md:hidden w-0.5 h-16 bg-gray-300 opacity-70"></div>
        </motion.div>
    );
};

export default TimelineLinesMobile;
