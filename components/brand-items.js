"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Image from "next/image";

const brandLogos = [
  { logo: "/rayBan.png" },
  { logo: "/oakley.png" },
  { logo: "/police.svg" },
  { logo: "/despada.png" },
  { logo: "/carrera.png" },
  { logo: "/police.svg" },
  { logo: "/despada.png" },
  { logo: "/carrera.png" },
];

function BrandItems() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-[60px] pb-[60px] px-20 mq480:pt-[40px] mq480:pb-[40px] mq480:px-3">
      <Swiper
        modules={[Navigation, Autoplay]} // Add Autoplay module
        spaceBetween={40}
        slidesPerView={1}
        speed={800} // Adjust speed
        autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay settings
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="w-full max-w-full"
      >
        {brandLogos.map((brand, i) => (
          <SwiperSlide
            key={i}
            className="w-auto flex items-center justify-center"
          >
            <div
              className="px-4"
              style={{
                borderRight:
                  i === brandLogos?.length - 1
                    ? "none"
                    : "2px solid rgba(0,0,0,0.1)",
              }}
            >
              <Image
                className="h-full"
                loading="lazy"
                width={180}
                height={70}
                alt={`Brand ${i}`}
                src={brand.logo}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BrandItems;
