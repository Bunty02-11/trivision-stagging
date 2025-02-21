"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode"; // Import Free Mode
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";

const brandLogos = [
  { logo: "/rayBan.png" },
  { logo: "/oakley.png" },
  { logo: "/police.png" },
  { logo: "/despada.png" },
  { logo: "/carrera.png" },
];

function BrandItems() {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <section className="self-stretch flex flex-col items-center justify-center pt-[60px] pb-[60px] px-10 mq480:pt-[40px] mq480:pb-[40px] mq480:px-3 box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-[39px] mq750:box-border">
      <div className="w-[1320px] flex flex-col items-center justify-center gap-10 max-w-full mq750:gap-5">
        <div className="self-stretch flex flex-row items-center justify-between gap-4 max-w-full">
          <button
            ref={prevButtonRef}
            className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
          >
            <FaAngleLeft size={20} />
          </button>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
            }}
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
          <button
            ref={nextButtonRef}
            className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
          >
            <FaAngleRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BrandItems;
