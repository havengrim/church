import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { GoArrowRight } from "react-icons/go";
import Navbar from '@/components/Navbar';
import { images } from '@/assets/images';

function Hero() {
  return (
    <div className="relative top-0 w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Swiper background slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper absolute inset-0 top-0 z-0"
        style={{ height: '100%', zIndex: 0 }}
        grabCursor={true}
      >
        <SwiperSlide
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${images.cover4})`,
            height: '100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${images.cover2})`,
            height: '100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${images.cover3})`,
            height: '100%',
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${images.cover4})`,
            height: '100%',
          }}
        ></SwiperSlide>
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10 top-0"></div>

      {/* Navbar */}
      <Navbar className="relative inset-x-0 top-0 z-50" />

      {/* Static text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 sm:max-w-4xl sm:mx-auto">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center font-sans">
          Christ the Living Hope Community Church United
        </h1>
        {/* Paragraph is hidden on mobile */}
        <p className="hidden md:block text-white text-lg sm:text-xl md:text-lg font-light text-center mt-4 max-w-lg sm:max-w-2xl px-4">
          A place where faith, hope, and love unite. Join us as we journey together in Christ’s love and serve our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button className="rounded-full bg-primary p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center dark:text-white">
            Join Us <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
          </Button>
          <Button className="bg-white text-gray-800 p-4 sm:p-8 text-base sm:text-lg rounded-full flex items-center justify-center dark:hover:bg-gray-200">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
