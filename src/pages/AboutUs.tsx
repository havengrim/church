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
    <section className="py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex justify-center items-center flex-col gap-2">
          <span 
            className="uppercase font-semibold text-gray-500" 
            data-aos="fade-up"
          >
            About Church
          </span>
          <h3 
            className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-700 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Seek First the Kingdom of God
          </h3>
          <div className="w-full relative" data-aos="zoom-in" data-aos-delay="400">
            <img 
              src={images.aboutCover} 
              alt="An image illustrating 'Seek First the Kingdom of God'" 
              className="sm:h-[40vh] w-full mt-6 object-cover"
            />
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 mt-6">
            <p 
              className="font-normal text-base text-gray-600" 
              data-aos="fade-right"
              data-aos-delay="600"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt officia hic praesentium deleniti corporis impedit velit sint mollitia! Perferendis, laboriosam quod provident, commodi distinctio maxime nihil adipisci neque dignissimos eius, optio minus quaerat sed iste rerum ex voluptatibus debitis consequuntur?
            </p>
            <p 
              className="font-normal text-base text-gray-600" 
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ratione nisi assumenda excepturi eos reprehenderit eius impedit dolor, veritatis, illum temporibus facilis porro in ipsum quia voluptatem sint eum consequuntur sed perferendis neque amet quam! Consequatur sint accusantium expedita rem.
            </p>
          </div>
          <Button 
            className="rounded-full mt-10 border-2 py-5 px-8" 
            variant="outline"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
