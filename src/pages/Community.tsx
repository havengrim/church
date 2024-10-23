import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const Community = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container-padding">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col gap-2">
          <span
            className="uppercase font-semibold text-gray-500 dark:text-gray-400"
            data-aos="fade-up"
          >
            OUR COMMUNITY
          </span>
          <h3
            className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-700 dark:text-gray-200 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Come join our church cell group from the old to the young
          </h3>
        </div>

        <div className="grid grid-cols-2 py-24 gap-10">
            <Card
              className="flex flex-col shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:text-gray-200 border-0 rounded-xl cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://source.unsplash.com/random/400x300?chess"
                alt="Chess Club Competition"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Chess Club Competition
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Our chess club hosted a friendly competition, showcasing the strategic skills of our players.
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-4">
                
                 <Button className="rounded-xl dark:text-white">See More</Button>
                </div>
              </div>
            </Card>

            <Card
              className="flex flex-col shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:text-gray-200 border-0 rounded-xl cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://source.unsplash.com/random/400x300?chess"
                alt="Chess Club Competition"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Chess Club Competition
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Our chess club hosted a friendly competition, showcasing the strategic skills of our players.
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-4">
                
                 <Button className="rounded-xl dark:text-white">See More</Button>
                </div>
              </div>
            </Card>

        </div>

      </div>
    </section>
  );
};

export default Community;
