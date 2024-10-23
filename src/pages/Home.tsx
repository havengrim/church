import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Devotion from "./Devotion";
import Mission from "./Mission";
import Announcements from "./Announcements";
import Gallery from "./Gallery";
import { ModeToggle } from "@/components/mode-toggle";
import Community from "./Community";
import Footer from "@/components/Footer";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar Section */}
      <div
        className={`top-0 z-50 w-full transition-all duration-5000 ease-in-out ${
          isScrolled
            ? 'sticky bg-white text-black shadow-md opacity-100'
            : 'absolute bg-transparent text-white opacity-80'
        }`}
      >
        <Navbar />
      </div>
      
      {/* Content Wrapper */}
      <div className="overflow-hidden">
        <Hero />
        <AboutUs />
        <Devotion />
        <Announcements />
        <Gallery />
        <Mission />
        <Community />
        <Footer />
      </div>

      {/* Mode Toggle */}
      <ModeToggle />
    </div>
  );
};

export default Home;
