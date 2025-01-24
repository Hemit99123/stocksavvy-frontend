import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoMdPeople } from "react-icons/io";
import { MdSchool } from "react-icons/md";
import AboutItem from './common/AboutItem';
import Spacer from '../common/Spacer';
import MultipleSpacer from '../common/MultipleSpacer';
import WorkshopItem from './common/WorkshopItem';

const About = () => {
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

      <div className="lg:flex items-center justify-center lg:space-x-28 space-y-10 lg:space-y-0">
        <AboutItem
          icon={<FaChalkboardTeacher />}
          title="Workshops"
          desc="We have done many workshops in the past!"
        />
        <AboutItem
          icon={<MdSchool />}
          title="Courses"
          desc="Explore a variety of courses tailored for beginners."
        />
        <AboutItem
          icon={<IoMdPeople />}
          title="Mentorship"
          desc="Get guidance from experienced mentors in the field."
        />
      </div>
      <MultipleSpacer 
        spacerCount={4}
      />
      <div className="text-start">
        <h3 className="font-semibold text-3xl text-green-900">Accomplished Workshops...</h3>
        <WorkshopItem 
          color='#90EE90'
          title='MCMASTER'
        />
      </div>
    </div>
  );
};

export default About;
