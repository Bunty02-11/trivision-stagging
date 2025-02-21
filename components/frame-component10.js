import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent10 = memo(({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[60px] max-w-full text-left text-21xl text-black font-h4-32 mq750:gap-[30px] mq1100:flex-wrap ${className}`}
    >
      <div className="w-[612px] flex flex-col items-start justify-start pt-[146px] px-0 pb-0 box-border max-w-full mq750:pt-[95px] mq750:box-border mq750:min-w-full mq1100:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          <div className="self-stretch flex flex-row items-start justify-start mq480:gap-[437px]">
            <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
              Meet Our Founder
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 text-base">
            <div className="relative leading-[150%] font-medium">
              Trivision Opticals was founded in 2008 with the idea of
              transforming eyewear shopping into an experience of luxury, style,
              and innovation. The founder’s vision was to bring iconic brands to
              the region while maintaining a focus on quality and personal
              service. Today, Trivision Opticals stands as a testament to that
              vision, inspiring self-expression through every pair of glasses we
              provide.
            </div>
            {/* <div className="relative leading-[150%] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div> */}
          </div>
        </div>
      </div>
      <Image
        className="h-[620px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[447px] mq750:min-w-full"
        width={688}
        height={620}
        alt=""
        src="/image-container-1@2x.png"
      />
    </div>
  );
});

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
