"use client"

import React, { useState, useRef, MouseEvent } from 'react';
import AboutItem from './common/AboutItem';
import MultipleSpacer from '../common/MultipleSpacer';
import WorkshopItem from './common/WorkshopItem';
import { workshopItems } from '@/data/workshop';
import { aboutItems } from '@/data/about';

const About: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLUListElement | null>(null);

  // Function to handle mouse down (start of drag)
  const handleMouseDown = (e: MouseEvent<HTMLUListElement>): void => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.clientX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  // Function to handle mouse move (during drag)
  const handleMouseMove = (e: MouseEvent<HTMLUListElement>): void => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.clientX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Function to handle mouse up (end of drag)
  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  return (
    <div className="text-center px-4">
      {/* Header with gradient lines */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <h2 className="text-sm lg:text-lg font-medium text-green-600">Built for students, by students</h2>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      </div>

      {/* Main content container */}
      <div className="max-w-5xl mx-auto mb-8">
        <h3 className="text-4xl font-semibold">What is StockSavvy about?</h3>
        <p className="text-gray-600 text-lg mt-4">
          StockSavvy is a financial literacy initiative that helps young and aspiring high school students learn about economic concepts such as saving and spending, teaches investment strategies, and provides steps to becoming a successful investor.
        </p>
      </div>

      {/* About section mapped from array */}
      <ul className="lg:flex items-center justify-center lg:space-x-28 space-y-10 lg:space-y-0">
        {aboutItems.map((item, index) => (
          <li key={index}>
            <AboutItem
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          </li>
        ))}
      </ul>

      <MultipleSpacer 
        spacerCount={4}
      />

      {/* Workshops section mapped from array */}
      <div className="text-start">
        <h3 className="font-semibold text-3xl text-green-900">Workshops Completed:</h3>

        {/* Scrollable container for workshops */}
        <ul
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-5 py-4 no-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // To stop dragging if mouse leaves the area
        >
          {workshopItems.map((workshop, index) => (
            <li key={index}>
              <WorkshopItem 
                img={workshop.img}
                title={workshop.title}
                fontColor={workshop.fontColor}
              />
            </li>
          ))}
        </ul>
        
        <MultipleSpacer 
          spacerCount={3}
        />
      </div>
    </div>
  );
};

export default About;
