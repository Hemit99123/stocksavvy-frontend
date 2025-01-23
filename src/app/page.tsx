import NavBar from "@/components/common/NavBar";
import Hero from "@/components/landing-page/Hero";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500 rounded-b-3xl">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}
