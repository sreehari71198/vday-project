'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MEMORY_IMAGES = [
  '/images/evidelum_kodukkanm.jpg',
  '/images/Holi_day_mar_14.JPG',
  '/images/life_story15.JPG',
  '/images/life_story30.jpg',
  '/images/life_story34.JPG',
  '/images/life_story36.JPG',
  '/images/life_story45.JPG',
  '/images/life_story55.jpg',
];

const ROTATIONS = [-3, 2, -1, 4, -2, 3, -4, 1];

export default function MemoryWall() {
  return (
    <div className="mt-16 w-full">
      <h2 className="text-2xl font-serif text-white/80 text-center mb-8 italic">
        "Little moments, big memories..."
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 pb-20">
        {MEMORY_IMAGES.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative group"
            style={{
              rotate: ROTATIONS[index % ROTATIONS.length],
            }}
          >
            {/* The Photo Card */}
            <div className="relative bg-white p-3 pb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                  src={src}
                  alt="Memory"
                  fill
                  className="object-cover filter sepia-[0.2]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              
              {/* Tape Effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-10 bg-white/40 backdrop-blur-sm shadow-sm rotate-3 border-l border-r border-white/60" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
