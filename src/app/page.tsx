import NavBar from "@/components/common/NavBar";
import About from "@/components/landing-page/About";
import Hero from "@/components/landing-page/Hero";

export default function Home() {
  return (
    <div className="bg-[#e2e7f1]">
      <div className="bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500 rounded-b-3xl">
        <NavBar />
        <Hero />
      </div>
      <About />
    </div>
  );
}
