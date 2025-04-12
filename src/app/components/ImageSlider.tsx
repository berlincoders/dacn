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
      <Image
          src="/images/slide1.webp"
          alt="Slide 1"
          layout="fill"
          objectFit="cover"
          />
      </SwiperSlide>
      <SwiperSlide>
      <Image
          src="/images/slide2.webp"
          alt="Slide 2"
          layout="fill"
          objectFit="cover"
          />
      </SwiperSlide>
      <SwiperSlide>
      <Image
          src="/images/slide2.webp"
          alt="Slide 2"
          layout="fill"
          objectFit="cover"
          />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
