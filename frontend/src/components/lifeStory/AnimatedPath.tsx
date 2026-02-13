import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedPath: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 pointer-events-none z-0">
      {/* Background static line */}
      <div className="absolute top-0 left-0 w-full h-full bg-pink-900/20 rounded-full" />
      
      {/* Animated glowing line */}
      <motion.div 
        style={{ height }}
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.6)]"
      />
      
      {/* Moving particle at the tip */}
      <motion.div 
        style={{ top: height }}
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10"
      />
    </div>
  );
};

export default AnimatedPath;
