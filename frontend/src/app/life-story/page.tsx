'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import TimelineContainer from '@/components/lifeStory/TimelineContainer';
import lifeStoryData from '@/data/lifeStoryData.json';

export default function LifeStoryPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-pink-500/30 overflow-x-hidden">
      
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-pink-900/20 to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-pink-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-20 pb-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 mb-4"
          >
            Our Life Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-pink-200/60 text-lg italic"
          >
            Every moment with you is a memory I cherish
          </motion.p>
        </header>

        {/* Timeline */}
        <TimelineContainer data={lifeStoryData} />

        {/* Bottom Navigation */}
        <div className="py-20 flex justify-center pb-32">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/home')}
            className="group relative px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-medium tracking-wide overflow-hidden shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              Back to Home ❤️
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>
      </div>
    </main>
  );
}
