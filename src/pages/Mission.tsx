import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/images";
import { GoArrowRight } from "react-icons/go";


const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section className="py-24">
      <div className="container-padding">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col gap-2">
          <span 
            className="uppercase font-semibold text-gray-500" 
            data-aos="fade-up"
          >
            OUR MISSION
          </span>
          <h3 
            className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-700 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Vision and Mission about Our Church
          </h3>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16 mt-20">
          <div data-aos="fade-right">
            <h3 className="font-bold text-4xl leading-tight text-gray-700 uppercase">
              Vision
            </h3>
            <p className="text-lg mt-4 leading-relaxed">
              We aim to be a beacon of faith, offering a community where believers can grow spiritually and share the love of Christ with others. Our vision includes nurturing the soul, mind, and body through teachings that focus on personal and collective transformation in Christ.
            </p>
            <Button className="rounded-full mt-4 bg-primary p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
              Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
            </Button>
          </div>
          <div data-aos="fade-left">
            {/* Image with overlay */}
            <div className="relative group w-full h-auto rounded-lg shadow-lg overflow-hidden">
              <img src={images.vision} alt="Vision" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16 mt-20">
          <div data-aos="fade-right" className="order-2 sm:order-1">
            {/* Image with overlay */}
            <div className="relative group w-full h-auto rounded-lg shadow-lg overflow-hidden">
              <img src={images.mission} alt="Mission" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
          <div data-aos="fade-left" className="order-1 sm:order-2">
            <h3 className="font-bold text-4xl leading-tight text-gray-700 uppercase">
              Mission
            </h3>
            <p className="text-lg mt-4 leading-relaxed">
              Our mission is to bring the Gospel to life by empowering individuals to grow in their faith and serve others. We are committed to spreading the message of love, hope, and redemption, offering support to the community and engaging in missions that glorify God.
            </p>
            <Button className="rounded-full mt-4 bg-primary p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
              Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
