"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Css/ImageCarousel.module.css";

type ImageCarouselProps = {
  images: string[];
  alt: string;
};

export default function ImageCarousel({
  images,
  alt,
}: ImageCarouselProps) {
  const hasMultipleImages = images.length > 1;

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        loop={hasMultipleImages}
        allowTouchMove={hasMultipleImages}
        simulateTouch={true}
        touchRatio={1}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: images.length > 4,
        }}
        navigation={hasMultipleImages}
        className={styles.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`} className={styles.slide}>
            <Image
              src={image}
              alt={`${alt} - imagem ${index + 1}`}
              fill
              priority={index === 0}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}