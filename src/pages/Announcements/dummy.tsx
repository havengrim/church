import Navbar from "@/components/Navbar";
import { images } from "@/assets/images";
import { useEffect, useState } from "react";

const AnnouncementsMain = () => {
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
        <div
            className="absolute top-0 w-full h-[60vh] md:h-[60vh] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${images.cover1})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-10 top-0"></div>
            <div
            className={`top-0 z-50 w-full transition-all duration-5000 ease-in-out ${
                isScrolled
                ? "sticky bg-white text-black shadow-md opacity-100"
                : "absolute bg-transparent text-white opacity-80"
            }`}
            >
            <Navbar />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center z-20 sm:max-w-4xl sm:mx-auto">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center font-sans">
            Christ the Living Hope Community Church United
            </h1>
        </div>
        </div>

        <div>
            
        </div>
    </div>
  );
};

export default AnnouncementsMain;
