import React from "react";
import CTAButton from "./CTAButton";
import MultipleSpacer from "../common/Spacers/MultipleSpacer";

const Hero = () => {
  return (
    <div className="lg:pt-16 lg:ml-32 text-center lg:text-start mb-8 text-gray-900">
      <h3 className="md:text-6xl xl:text-9xl text-4xl font-black leading-tight ">
        Finance is key.
      </h3>
      <p className="mb-6 lg:mb-8 text-base md:text-xl lg:text-2xl pt-4 p-10 lg:p-0">
        StockSavvy is a financial literacy initiative that helps young and
        aspiring high school students.
      </p>
      <div className="flex space-x-2 justify-center lg:justify-start">
        <CTAButton 
          isTransparent={false} 
          link="/platform" 
          text="Get Started" 
        />
        <CTAButton
          isTransparent={true}
          link="https://www.instagram.com/stock.savvy_/"
          text="Instagram"
        />
      </div>
      <MultipleSpacer spacerCount={5} />
    </div>
  );
};

export default Hero;
