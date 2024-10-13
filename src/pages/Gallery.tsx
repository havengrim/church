import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for animations
    });
  }, []);

  return (
    <section className="py-24 bg-gray-800 text-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className='flex flex-col'>
          <span className="uppercase font-semibold text-gray-500 text-center" data-aos="fade-up">
            Church Gallery
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-center mb-10 mt-4" data-aos="fade-up" data-aos-delay="200">
            Latest Church Events and Announcements
          </h2>
          <p className="text-center w-full max-w-3xl mx-auto text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="400">
            Join us in celebrating the grace of God through our recent events, community services, and church announcements. Stay connected with our latest activities and spiritual milestones.
          </p>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?random=1" alt="Church Event 1" data-aos="zoom-in" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?random=2" alt="Church Event 2" data-aos="zoom-in" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?random=3" alt="Church Event 3" data-aos="zoom-in" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?random=4" alt="Church Event 4" data-aos="zoom-in" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?random=5" alt="Church Event 5" data-aos="zoom-in" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?random=6" alt="Church Event 6" data-aos="zoom-in" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?random=7" alt="Church Event 7" data-aos="zoom-in" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?random=8" alt="Church Event 8" data-aos="zoom-in" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?random=9" alt="Church Event 9" data-aos="zoom-in" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
