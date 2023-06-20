import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Visual() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={process.env.PUBLIC_URL + './images/visual_main_01.jpg'} alt="img" /></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + './images/visual_main_02.jpg'} alt="img" /></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + './images/visual_main_03.jpg'} alt="img" /></SwiperSlide>
      
    </Swiper>
  );
};


