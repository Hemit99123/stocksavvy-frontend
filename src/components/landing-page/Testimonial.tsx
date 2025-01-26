import React from 'react';
import Header from './common/Header';
import TestimonialCard from './common/TestimonialCard';
import { TestimonialCardProps } from '@/types/testimonial';

const Testimonial = () => {
  const testimonials: TestimonialCardProps[] = [
    {
      color: 'yellow',
      text: 'The interface is easy to use and intuitive. All the information provided is very clear. As my first credit card experience, I 100% recommend them!',
      name: 'Azure F.',
      date: 'May 2024',
    },
    {
      color: 'cyan',
      text: 'The interface is easy to use and intuitive. All the information provided is very clear. As my first credit card experience, I 100% recommend them!',
      name: 'Azure F.',
      date: 'May 2024',
    },
    {
      color: 'green',
      text: 'The interface is easy to use and intuitive. All the information provided is very clear. As my first credit card experience, I 100% recommend them!',
      name: 'Azure F.',
      date: 'May 2024',
    },
  ];

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
