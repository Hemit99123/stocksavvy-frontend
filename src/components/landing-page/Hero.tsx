import React from 'react'
import CTAButton from './CTAButton'

const Hero = () => {
  return (
    <section>
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:pt-20">
            <div className="place-self-center lg:col-span-7 px-4 sm:px-6 md:px-8">
                <h3 className="md:text-5xl xl:text-8xl text-3xl font-bold leading-tight">
                    Finance is key.
                </h3>
                <p className="mb-6 lg:mb-8 lg:text-xl pt-4 text-base">
                    Stock Savvy is a financial literacy initiative that helps young and aspiring high school students. 
                </p>
                <div className="flex space-x-2 mb-40">
                    <CTAButton 
                        isTransparent={false}
                        link="/"
                        text="Get Started"
                    />
                    <CTAButton 
                        isTransparent={true}
                        link="https://www.instagram.com/stock.savvy_/"
                        text="Instagram"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
