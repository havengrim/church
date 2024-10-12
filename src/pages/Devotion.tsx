import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Devotion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section className="py-24 bg-gray-800 text-gray-50">
      <div className="container-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Reflection Text */}
          <div className="flex flex-col gap-5" data-aos="fade-up">
            <span className="uppercase font-semibold text-gray-500">Reflection</span>
            <span className="font-bold text-3xl sm:text-4xl lg:text-7xl leading-tight text-gray-300">
              God's Word Today
            </span>
          </div>
          
          {/* Bible Verse */}
          <div className="flex flex-col justify-center items-end" data-aos="fade-left">
            <blockquote className="sm:text-right text-left">
              <p className="text-xl sm:text-2xl lg:text-3xl italic text-gray-300">
                "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters." 
              </p>
              <span className="block mt-4 text-gray-500">- Psalm 23:1-2 (ESV)</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devotion;
