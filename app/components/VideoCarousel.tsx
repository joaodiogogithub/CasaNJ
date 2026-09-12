"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Css/VideoCarousel.module.css";

const videos = [
  {
    src: "/videos/video1.mp4",
    href: "/products/1",
  },
  {
    src: "/videos/video2.mp4",
    href: "/products/2",
  },
  {
    src: "/videos/video3.mp4"
  },

  {
    src: "/videos/video4.mp4"
  }
];

export default function VideoCarousel() {
  return (
    <section className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={0}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.href || index}>
            <a href={video.href} className={styles.cardLink}>
              <div className={styles.card}>
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className={styles.video}
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}