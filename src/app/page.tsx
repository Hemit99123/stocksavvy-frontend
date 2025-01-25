"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/common/NavBar";
import About from "@/components/landing-page/About";
import Hero from "@/components/landing-page/Hero";
import Loading from "@/components/common/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loading for 1500ms, afterwards remove the loading state

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1
      transition={{ duration: 1.5 }} // Duration of the opacity transition
    >
      <div className="bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500 rounded-b-3xl">
        <NavBar />
        <Hero />
      </div>
      <About />
    </motion.div>
  );
}
