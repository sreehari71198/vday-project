import React from 'react';
import { motion } from 'framer-motion';
import FloatingDate from './FloatingDate';

interface TimelineItemProps {
  date: string;
  title: string;
  image: string;
  subtext: string;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  date, 
  title, 
  image, 
  subtext, 
  index,
  isLast 
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex items-center justify-between mb-24 w-full ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* Content Side */}
      <div className="w-full md:w-5/12 pl-12 md:pl-0">
        <div className={`flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
          
          <FloatingDate date={date} />

          <div className={`relative group ${isLast ? 'scale-105' : ''}`}>
             {/* Card Container */}
            <div className={`
              relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm
              p-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]
              ${isLast ? 'shadow-[0_0_40px_rgba(236,72,153,0.5)] border-pink-500/50 animate-pulse-slow' : ''}
            `}>
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] w-full md:w-[400px]">
                <img 
                  src={`/images/${image}`} 
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Title inside image for mobile, outside for desktop could be an option, but sticking to design */}
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-md font-serif">
                    {title}
                  </h3>
                  <p className="text-pink-200/90 text-sm md:text-base italic font-light leading-relaxed">
                    {subtext}
                  </p>
                </div>
              </div>

              {/* Special effects for last item */}
              {isLast && (
                <>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-pink-500/10 to-purple-500/10 mix-blend-overlay" />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -right-2 text-4xl"
                  >
                    ❤️
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for center line */}
      <div className="hidden md:block w-2/12" />

      {/* Empty side for layout balance */}
      <div className="hidden md:block w-5/12" />
      
      {/* Mobile connecting dot */}
      <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 border-4 border-black z-10 md:hidden shadow-[0_0_10px_rgba(236,72,153,0.8)]" />

    </motion.div>
  );
};

export default TimelineItem;
