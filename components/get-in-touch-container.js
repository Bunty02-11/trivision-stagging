import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const GetInTouchContainer = memo(({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[60px] max-w-full text-left text-21xl text-black font-h4-32 mq750:gap-[30px] mq1250:flex-wrap ${className}`}
    >
      <div className="w-[612px] flex flex-col items-start justify-start pt-[138px] mq480:pt-0 px-0 pb-0 box-border max-w-full mq750:pt-[90px] mq750:box-border mq750:min-w-full mq1250:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[354px] gap-5 mq480:gap-[219px] mq480:pr-5 mq480:box-border mq750:gap-[437px] mq750:pr-[177px] mq750:box-border">
            <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
              Get In Touch
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-base">
            <div className="relative leading-[150%] font-medium">
              At Trivision Opticals, your satisfaction is our highest priority.
              Feel free to reach out to us through any of the methods below, and
              we'll respond as soon as possible. Your feedback and inquiries are
              important to us!
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start gap-3 max-w-full">
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/fluentcall20regular.svg"
                />
                <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-[calc(100%_-_36px)]">
                  +971 58 815 5795
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-2.5 max-w-full">
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/fluentmail20regular.svg"
                />
                <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-[calc(100%_-_34px)]">
                  contact@trivisionoptical.com
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-2.5 max-w-full mq750:flex-wrap">
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/weuilocationoutlined.svg"
                />
                <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[376px] max-w-full mq480:min-w-full">{`Trivision Optical Head Office - 601, Icon Tower, Al Barsha Heights, Tecom, Dubai, UAE`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="h-[620px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[447px] mq750:min-w-full"
        loading="lazy"
        width={688}
        height={620}
        alt=""
        src="/image-container1@2x.png"
      />
    </div>
  );
});

GetInTouchContainer.propTypes = {
  className: PropTypes.string,
};

export default GetInTouchContainer;
