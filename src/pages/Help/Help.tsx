import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/mode-toggle";
import InnerNav from "@/components/InnerNav";
import { images } from "@/assets/images";
import { Card, CardContent } from "@/components/ui/card";
import { verses } from "@/data/verses";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Help = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedVerse, setSelectedVerse] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

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
    AOS.init({ duration: 1000 });
  }, []);

  const handleEmotionClick = (emotion: keyof typeof verses) => {
    const verseList = verses[emotion];
    const randomVerse = verseList[Math.floor(Math.random() * verseList.length)];
    setSelectedVerse(randomVerse);
    setOpen(true); // Open dialog when an emotion is clicked
  };

  return (
    <section className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className={`top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? "sticky bg-white text-black shadow-md opacity-100 dark:bg-gray-800 dark:text-white"
            : "absolute text-black dark:bg-gray-900 dark:text-white"
        }`}
      >
        <InnerNav />
      </div>

      <div className="relative">
        <div className="relative w-full h-[115vh] md:h-[80vh] bg-cover bg-center overflow-hidden">
          <div className="absolute top-20 sm:top-0 md:top-40 lg:top-0 inset-0 flex flex-col items-center justify-center z-20 container mx-auto p-6">
            <h1 className="text-black dark:text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center">
              How are you today?
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-center mt-2 max-w-2xl dark:text-gray-300 text-gray-500">
              Choose an emotion below to receive a random Bible verse that relates to how you feel. 
              Let these verses inspire you and uplift your spirit!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full px-4 sm:px-0 max-w-4xl">
              <Dialog open={open} onOpenChange={setOpen}>
                <Card
                  onClick={() => handleEmotionClick("happy")}
                  className="flex items-center justify-center cursor-pointer hover:shadow-md dark:hover:shadow-lg border-none dark:bg-gray-800"
                >
                  <CardContent>
                    <div className="flex flex-col items-center pt-4">
                      <img src={images.happyFace} alt="Happy" className="w-16 h-16 mb-2" />
                      <span className="text-xl font-semibold dark:text-white">I'm Happy</span>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  onClick={() => handleEmotionClick("sad")}
                  className="flex items-center justify-center cursor-pointer hover:shadow-md dark:hover:shadow-lg border-none dark:bg-gray-800"
                >
                  <CardContent>
                    <div className="flex flex-col items-center pt-4">
                      <img src={images.sad} alt="Sad" className="w-16 h-16 mb-2" />
                      <span className="text-xl font-semibold dark:text-white">I'm Sad</span>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  onClick={() => handleEmotionClick("excited")}
                  className="flex items-center justify-center cursor-pointer hover:shadow-md dark:hover:shadow-lg border-none dark:bg-gray-800"
                >
                  <CardContent>
                    <div className="flex flex-col items-center pt-4">
                      <img src={images.excited} alt="Excited" className="w-16 h-16 mb-2" />
                      <span className="text-xl font-semibold dark:text-white">I'm Excited</span>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  onClick={() => handleEmotionClick("others")}
                  className="flex items-center justify-center cursor-pointer hover:shadow-md dark:hover:shadow-lg border-none dark:bg-gray-800"
                >
                  <CardContent>
                    <div className="flex flex-col items-center pt-4">
                      <img src={images.others} alt="Others" className="w-16 h-16 mb-2" />
                      <span className="text-xl font-semibold dark:text-white">I Don't Know</span>
                    </div>
                  </CardContent>
                </Card>

                {/* ShadCN Dialog Content */}
                <DialogContent className="bg-white dark:bg-gray-800">
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 dark:text-white">Bible Verse</h2>
                    <p className="text-lg mb-6 dark:text-gray-300">{selectedVerse}</p>
                    <DialogTrigger asChild>
                      <button
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                      >
                        Close
                      </button>
                    </DialogTrigger>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      <ModeToggle />
      <Footer />
    </section>
  );
};

export default Help;
