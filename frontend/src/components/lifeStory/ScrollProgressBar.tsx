import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 h-48 w-1 bg-white/10 rounded-full overflow-hidden z-50 hidden md:block">
      <motion.div 
        style={{ scaleY: scrollYProgress }}
        className="w-full h-full bg-pink-500 origin-top"
      />
    </div>
  );
};

export default ScrollProgressBar;
