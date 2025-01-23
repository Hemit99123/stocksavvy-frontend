import React from 'react'
import { FaArrowRight, FaInstagram } from 'react-icons/fa'
import CTAButton from './CTAButton'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:pt-20">
        <div className="place-self-center lg:col-span-7">
            <h3 className="md:text-5xl xl:text-7xl font-bold">Financial independence exists.</h3>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 lg:text-lg pt-4">
            Stock Savvy is a financial literacy initiative that helps young and aspiring high school students learn about financial concepts such as saving/spending and provides steps to become a successful investor. 
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mb-10">
            <CTAButton 
                link="/"
                text="Get Started"
            />
            <CTAButton 
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
