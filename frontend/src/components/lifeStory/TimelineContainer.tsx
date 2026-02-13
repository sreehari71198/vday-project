import React from 'react';
import TimelineItem from './TimelineItem';
import AnimatedPath from './AnimatedPath';
import ScrollProgressBar from './ScrollProgressBar';

interface LifeEvent {
  date: string;
  title: string;
  image: string;
  subtext: string;
}

interface TimelineContainerProps {
  data: LifeEvent[];
}

const TimelineContainer: React.FC<TimelineContainerProps> = ({ data }) => {
  return (
    <div className="relative min-h-screen py-20 px-4 md:px-0 max-w-7xl mx-auto">
      <ScrollProgressBar />
      <AnimatedPath />
      
      <div className="relative z-10 pt-10">
        {data.map((item, index) => (
          <TimelineItem 
            key={`${item.title}-${index}`}
            date={item.date}
            title={item.title}
            image={item.image}
            subtext={item.subtext}
            index={index}
            isLast={index === data.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineContainer;
