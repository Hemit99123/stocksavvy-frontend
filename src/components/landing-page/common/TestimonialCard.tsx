import React from 'react'
import { TestimonialCardProps } from '@/types/testimonial';

const TestimonialCard: React.FC<TestimonialCardProps> = ({ color, text, name, date }) => {
    return (
      <div 
        className={`bg-${color}-200 relative p-6 rounded-lg w-96 h-96 flex flex-col justify-center items-center text-center`}
      >
        {/* Sticky note effect */}
        <div className="absolute top-0 -right-0.5 transform">
          <img 
            src={`/images/post-it-tips/${color}.png`}
            alt="Sticky note corner"
            className="h-12 w-12"
          />
        </div>
  
        {/* Review text */}
        <p className="mb-4 text-gray-800">
          {text}
        </p>
  
        {/* Reviewer details */}
        <div className="absolute bottom-4 left-6">
          <p className="font-bold text-gray-800">{name}</p>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>
    );
  };
  
export default TestimonialCard