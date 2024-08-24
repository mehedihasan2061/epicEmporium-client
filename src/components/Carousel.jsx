// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgimg1 from "../assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";
import bgimg2 from "../assets/c-d-x-PDX_a_82obo-unsplash.jpg";
import bgimg3 from "../assets/fernando-andrade-potCPE_Cw8A-unsplash.jpg";
import bgimg4 from "../assets/nataliya-melnychuk-51sGDpm5S78-unsplash.jpg";

export default function Carousel() {
  return (
    <div className="container  py-2 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="A camera is a device that captures light and records it as an image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Immerse yourself in crystal-clear audio with our state-of-the-art headphones."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Indulge in the art of fragrance with our signature perfume, crafted to capture the essence of elegance and individuality"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg4}
            text="Discover the ultimate solution for fresh, clear, and glowing skin with our gentle face wash"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
