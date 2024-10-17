import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-24 dark:bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex justify-center items-center flex-col gap-2">
          <span 
            className="uppercase font-semibold text-gray-500 dark:text-gray-400" 
            data-aos="fade-up"
          >
            About Our Church
          </span>
          <h3 
            className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-700 dark:text-white text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Seek First the Kingdom of God
          </h3>
          <div className="w-full relative" data-aos="zoom-in" data-aos-delay="400">
            <img 
              src={images.aboutCover} 
              alt="An image illustrating 'Seek First the Kingdom of God'" 
              className="sm:h-[40vh] w-full mt-10 object-cover"
            />
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 mt-6">
            <p 
              className="font-normal text-base text-gray-600 dark:text-gray-300" 
              data-aos="fade-right"
              data-aos-delay="600"
            >
              At our church, we believe in putting God first in everything we do. We are a community committed to serving each other, spreading the love of Christ, and deepening our relationship with God through faith and service.
            </p>
            <p 
              className="font-normal text-base text-gray-600 dark:text-gray-300" 
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Join us as we journey together in faith, fostering a sense of belonging and purpose in our everyday lives. Through worship, prayer, and outreach, we seek to make a difference in the world, guided by the teachings of the Bible and the grace of God.
            </p>
          </div>
          <Button 
            className="rounded-full mt-10 border-2 py-5 px-8 dark:border-gray-400 dark:text-gray-300" 
            variant="outline"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
