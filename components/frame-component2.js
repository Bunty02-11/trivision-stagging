import { memo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FrameComponent2 = memo(({ className = "" }) => {
  const [testimonials, setTestimonials] = useState([]);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://apitrivsion.prismcloudhosting.com/api/testimonials/"
        );
        if (response.data.success) {
          setTestimonials(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (prevButtonRef.current && nextButtonRef.current) {
      // Update Swiper navigation elements after component mounted
      const swiper = document.querySelector('.swiper-container').swiper;
      swiper.params.navigation.prevEl = prevButtonRef.current;
      swiper.params.navigation.nextEl = nextButtonRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [testimonials]);

  return (
    <section
      className={`self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-[60px] box-border max-w-full text-left text-base text-background-color-primary font-h4-32 mq750:pb-[39px] mq750:box-border ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-end justify-center h-[85vh] px-20 mq480:px-5 pb-[60px] box-border bg-[url('/testimonialsImg.jpg')] bg-cover bg-no-repeat bg-center max-w-full  mq750:px-10 mq750:pb-[39px] mq750:box-border">
        <div className="flex-1 flex flex-col items-end justify-end gap-6 max-w-full">
          <div className="self-stretch relative leading-[150%] font-medium">
            Testimonials
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            className="w-full max-w-full swiper-container"
          >
            {testimonials?.map((rev, i) => (
              <SwiperSlide key={i}>
                <div className="self-stretch flex flex-col items-center justify-center gap-4 max-w-full text-13xl">
                  <blockquote className="m-0 relative leading-[130%] font-medium mq480:text-lgi mq480:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
                    {rev?.message}
                  </blockquote>
                  <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-4 max-w-full text-base">
                    <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[34px] max-w-full">
                      {rev?.name}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="flex flex-row items-center justify-center gap-2">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="h-4 w-4 cursor-pointer"
                ref={prevButtonRef}
                alt="prev. arrow"
              />
              <FontAwesomeIcon
                icon={faArrowRight}
                className="h-4 w-4 cursor-pointer"
                ref={nextButtonRef}
                alt="next arrow"
              />
            </div>
            {/* <div className="h-[25px] w-px relative border-gray-700 border-r-[1px] border-solid box-border" />
            <div className="relative leading-[150%] font-medium">View More</div> */}
          </div>
        </div>
      </div>
    </section>
  );
});

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;