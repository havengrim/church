import Navbar from "@/components/Navbar";
import { images } from "@/assets/images";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/mode-toggle";

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

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section className="flex flex-col">
      <div
        className={`top-0 z-50 w-full transition-all duration-5000 ease-in-out ${
          isScrolled
            ? "sticky bg-white text-black shadow-md opacity-100"
            : "absolute bg-transparent text-white opacity-80"
        }`}
      >
        <Navbar />
      </div>

      <div className="relative">
        <div
          className="relative w-full h-[60vh] md:h-[60vh] bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${images.cover1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center z-20 sm:max-w-6xl sm:mx-auto">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center font-sans">
              Latest News And Announcements
            </h1>
          </div>
        </div>
      </div>

      <div className="pb-24 dark:bg-gray-900">
        <div className="container-padding">
          {/* Vision Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16 mt-20">
                <div data-aos="fade-right">
                <h3 className="font-bold text-4xl leading-tight text-gray-700 dark:text-gray-200 uppercase">
                    Gen C
                </h3>
                <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                    Dear teachers, you are all appreciated and valued. We apologize
                    for being stubborn sometimes; we are truly grateful to you for
                    being such a huge part of our journey! All our successes are
                    yours, too!
                </p>
                <Button className="rounded-full mt-4 bg-primary p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center dark:text-white">
                    Read More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
                </Button>
                </div>
                <div data-aos="fade-left">
                {/* Image with overlay */}
                <div className="relative group w-full h-auto rounded-lg shadow-lg overflow-hidden">
                    <img
                    src={images.vision}
                    alt="Vision"
                    className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16 mt-20">
                <div data-aos="fade-right" className="order-2 sm:order-1">
                {/* Image with overlay */}
                <div className="relative group w-full h-auto rounded-lg shadow-lg overflow-hidden">
                    <img
                    src={images.mission}
                    alt="Mission"
                    className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                </div>
                <div data-aos="fade-left" className="order-1 sm:order-2">
                <h3 className="font-bold text-4xl leading-tight text-gray-700 dark:text-gray-200 uppercase">
                    Prayer & Fasting
                </h3>
                <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                Church, it’s time to FAST! FAST FOR CHURCH’S REVIVAL! Join us as we come together in unity and faith to seek a deeper connection with God. Let this be a time of renewal, a time to strengthen our spirits and reflect on our purpose. 
                </p>
                <Button className="rounded-full mt-4 bg-primary p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center dark:text-white">
                    Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
                </Button>
                </div>
            </div>
            </div>
        </div>
        <ModeToggle />
      <Footer />
    </section>
  );
};

export default AnnouncementsMain;
