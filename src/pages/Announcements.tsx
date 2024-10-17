import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "@/components/ui/card";

const Announcements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="">
      <section className="py-24 dark:bg-gray-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-center items-center flex-col gap-2">
            <span
              className="uppercase font-semibold text-gray-500 dark:text-gray-400"
              data-aos="fade-up"
            >
              Announcements
            </span>
            <h3
              className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-700 dark:text-white text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our Latest News and Events
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-16 mt-20">
            {/* News Card 1 */}
            <Card
              className="flex flex-col shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:text-gray-200"
              data-aos="fade-up"
            >
              <img
                src="https://source.unsplash.com/random/400x300?volleyball"
                alt="Exciting Volleyball Match"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Exciting Volleyball Match
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Our students showcased their skills during an exhilarating volleyball match last week.
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h8m-4 4h4m-2 6H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6z"
                    />
                  </svg>
                  <span>September 20, 2024</span>
                </div>
              </div>
            </Card>

            {/* News Card 2 */}
            <Card
              className="flex flex-col shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:text-gray-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="https://source.unsplash.com/random/400x300?basketball"
                alt="Basketball Tournament Highlights"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Basketball Tournament Highlights
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Our basketball team displayed incredible teamwork and spirit during the recent tournament.
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h8m-4 4h4m-2 6H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6z"
                    />
                  </svg>
                  <span>September 18, 2024</span>
                </div>
              </div>
            </Card>

            {/* News Card 3 */}
            <Card
              className="flex flex-col shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:text-gray-200"
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h8m-4 4h4m-2 6H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6z"
                    />
                  </svg>
                  <span>September 15, 2024</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Announcements;
