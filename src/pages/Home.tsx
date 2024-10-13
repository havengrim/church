import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Devotion from "./Devotion";
import Mission from "./Mission";
import Announcements from "./Announcements";
import Gallery from "./Gallery";
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
    <div className="relative overflow-hidden">

      <div
        className={`top-0 z-50 w-full transition-all duration-5000 ease-in-out ${
          isScrolled
            ? 'sticky bg-white text-black shadow-md opacity-100'
            : 'absolute bg-transparent text-white opacity-80'
        }`}
      >
        <Navbar />
      </div>
      <Hero />
      <AboutUs />
      <Devotion />
      <Announcements />
      <Gallery />
      <Mission />
    </div>
  );
};

export default Home;
