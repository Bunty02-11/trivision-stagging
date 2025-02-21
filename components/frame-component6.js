import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PreviewElements from "./preview-elements";
import PropTypes from "prop-types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Import icons

const FrameComponent6 = memo(({ className = "", blogs }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[60px] mq480:pb-[40px] box-border max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-14 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
        <div className="self-stretch flex flex-row items-center justify-start py-0 mq480:pl-5 mq480:pr-5 mq480:box-border mq750:box-border mq1250:box-border">
          <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
            Related Blogs
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-4 max-w-full">
          {/* Custom Arrow Buttons */}
          <button
            ref={prevButtonRef}
            className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
          >
            <FaAngleLeft size={20} />
          </button>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full max-w-full"
          >
            {blogs?.map((x, i) => (
              <SwiperSlide key={i}>
                <PreviewElements
                  title={x?.title}
                  description={x?.description?.sections?.[0]?.body}
                  featuredImg={
                    x?.featured_img ? x?.featured_img : "/5-3@2x.png"
                  }
                  slug={x?.slug}
                />
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
        {/* <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-4 max-w-full text-left text-xl">
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/next1@2x.png"
          />
          <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[832px] max-w-full mq480:grid-cols-[minmax(235px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(235px,_408px))] mq1050:min-w-full mq1250:flex-wrap">
            <PreviewElements emptyPreview="/5-3@2x.png" />
            <PreviewElements emptyPreview="/5-4@2x.png" />
            <PreviewElements emptyPreview="/5-3@2x.png" />
            <PreviewElements emptyPreview="/5-4@2x.png" />
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
            width={24}
            height={24}
            alt=""
            src="/next-11@2x.png"
          />
        </div> */}
      </div>
    </section>
  );
});

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
