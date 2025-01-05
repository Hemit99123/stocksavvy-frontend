import CTAButton from "@/components/landing-page/CTAButton";
import Image from "next/image";
import { FaInstagram, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="place-self-center lg:col-span-7">
            <div className="max-w-2xl mb-4 font-extrabold tracking-tight">
              <h1 className="text-4xl md:text-5xl xl:text-6xl">A future...</h1>
              <h3 className="text-green-800 md:text-3xl xl:text-4xl font-bold">where financial indepedence exists</h3>
            </div>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 lg:text-lg">
              Stock Savvy is a financial literacy initiative that helps young and aspiring high school students learn about financial concepts such as saving/spending and provides steps to become a successful investor. 
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <CTAButton 
                icon={FaArrowRight}
                link="https://www.instagram.com/stock.savvy_/"
                text="Get Started"
              />
              <CTAButton 
                icon={FaInstagram}
                link="https://www.instagram.com/stock.savvy_/"
                text="Instagram"
              />
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/images/hero-section.jpg"
              alt="Hero image showcasing digital products and branding"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
