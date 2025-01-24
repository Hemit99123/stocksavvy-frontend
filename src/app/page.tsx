"use client"

import { useState, useEffect } from "react";
import NavBar from "@/components/common/NavBar";
import About from "@/components/landing-page/About";
import Hero from "@/components/landing-page/Hero";
import Loading from "@/components/common/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Show loading for 500ms, afterwards remove the loading state

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);
  */

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500 rounded-b-3xl">
        <NavBar />
        <Hero />
      </div>
      <About />
    </div>
  );
}
