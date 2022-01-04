import React from "react";
import Image from "next/image";
import styled from "styled-components";
import slides from "../../static/sliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./slider.module.css";
import { lightTheme } from "../../styles/default";

import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const Slider = () => {
  return (
    <SliderContainer>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        style={{ height: "477px" }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={styles.mySlider}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.mySlide}>
            <Image
              src={slide.url}
              alt={slide.alt}
              blurDataURL={slide.url}
              quality="50"
              placeholder="blur"
              layout="fill"
              className={"image"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled.section`
  width: 50%;
  margin-top: 10px;
  .image {
    width: 346px;
    height: 477px;
  }
  @media only ${lightTheme.breakpoints.xl} {
    width: 45%;
  }
  @media only ${lightTheme.breakpoints.lg} {
    width: 39%;
  }
  @media only ${lightTheme.breakpoints.md} {
    margin-top: 100px;
    width: 80%;
  }
`;
