import React from 'react';
import Header from './common/Header';
import TestimonialCard from './common/TestimonialCard';
import {testimonials} from '@/data/testimonial'

const Testimonial = () => {

  return (
    <div className="mt-16 text-center">
      <Header 
        smalltext="Our members"
        title="Hear from our members"
      />
      <p className="mt-4 font-light">Real stories vouching for the value gained from StockSavvy.</p>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            color={testimonial.color}
            text={testimonial.text}
            name={testimonial.name}
            date={testimonial.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
