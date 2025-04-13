'use client'; // <— REQUIRED for client-side interactivity

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 20000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden"
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src="/images/slide1.webp"
            alt="Slide 1"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-semibold text-center px-4">
              2025 NFL Draft is Coming! 🏈
            </h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src="/images/slide2.webp"
            alt="Slide 2"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-semibold text-center px-4">
              Discover Amazing Places ✨
            </h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src="/images/slide3.webp"
            alt="Slide 3"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-semibold text-center px-4">
              Adventure Awaits 🚀
            </h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
