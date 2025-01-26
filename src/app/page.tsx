"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/common/NavBar";
import About from "@/components/landing-page/About";
import Hero from "@/components/landing-page/Hero";
import Loading from "@/components/common/Loading";
import { getLoadingState, setLoadingState as setLoadingStateCookies } from "@/lib/loading";
import Mission from "@/components/landing-page/Mission";
import Testimonial from "@/components/landing-page/Testimonial";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLoadingUI = async () => {
      let state = await getLoadingState();

      if (state === null) {
        setLoadingStateCookies("true"); 
        state = "true"

        setIsLoading(true);
        const timer = setTimeout(() => {
          setIsLoading(false); // Hide loading after 1500ms
        }, 1500);

        // Clean up the timer on unmount
        return () => clearTimeout(timer);
      } else if (state == "true") {
        setLoadingStateCookies("false"); 
      }
    };

    handleLoadingUI();
  }, []); // Only run on mount

  // Only show the loading screen if isLoading is true
  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.div
      className="bg-[#f7f7f7]"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1
      transition={{ duration: 1.5 }} // Duration of the opacity transition
    >
      <div className="bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500 rounded-b-3xl">
        <NavBar />
        <Hero />
      </div>
      <About />
      <Mission />
      <Testimonial />
    </motion.div>
  );
}

export default Home;