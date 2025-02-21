import { memo } from "react";
import Image from "next/image";
import H from "./h";
import Color from "./color";
import Extra from "./extra";
import R from "./r";
import PropTypes from "prop-types";

const Main = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-[60px] px-20 box-border gap-6 max-w-full text-left text-xs text-gray-400 font-h4-32 mq480:pt-5 mq480:pb-5 mq480:box-border mq825:py-[25px] mq825:px-10 mq825:box-border mq1410:pt-[39px] mq1410:pb-[39px] mq1410:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="relative leading-[150%] font-medium">{`Home > Sunglasses > Rayban > Sunglasses 01`}</div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full text-base text-black mq825:gap-5">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1410:flex-wrap">
          <Image
            className="w-[740px] relative max-h-full max-w-full mq1410:flex-1"
            loading="lazy"
            width={740}
            height={813}
            alt=""
            src="/left2.svg"
          />
          <div className="w-[500px] overflow-y-auto shrink-0 flex flex-col items-start justify-start relative gap-6 max-w-full mq825:min-w-full mq1410:flex-1">
            <H />
            <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
              <Color />
              <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[296px] gap-6 text-sm mq480:pr-5 mq480:box-border mq825:flex-wrap mq825:pr-[148px] mq825:box-border">
                <div className="relative leading-[150%] font-medium inline-block min-w-[30px]">
                  Size
                </div>
                <div className="flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-0.5 px-3.5 gap-2.5 min-w-[97px] min-h-[29px] text-gray-400">
                  <div className="flex-1 relative leading-[150%] font-medium">
                    Select
                  </div>
                  <Image
                    className="h-[5px] w-2.5 relative"
                    width={10}
                    height={5}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <div className="self-stretch border-gray-800 border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[7px] gap-3 min-h-[56px] max-w-full text-xs text-gray-200 mq825:flex-wrap">
                <Image
                  className="h-10 w-[63.3px] relative rounded object-cover"
                  loading="lazy"
                  width={63}
                  height={40}
                  alt=""
                  src="/item--img4@2x.png"
                />
                <div className="flex-1 relative leading-[150%] inline-block min-w-[266px] max-w-full">
                  <span className="font-medium">
                    {`4 interest-free payments of AED 196.00. No fees. Shariah-compliant. `}
                    <span className="[text-decoration:underline]">
                      Learn more
                    </span>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-5 text-center text-sm mq480:flex-wrap">
                <div className="w-[150px] border-gray-800 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center gap-3">
                  <Image
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    width={40}
                    height={40}
                    alt=""
                    src="/icroundminus@2x.png"
                  />
                  <div className="flex-1 relative leading-[150%] font-medium">
                    1
                  </div>
                  <Image
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    width={40}
                    height={40}
                    alt=""
                    src="/icroundplus@2x.png"
                  />
                </div>
                <div className="flex flex-row items-start justify-start gap-3">
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    width={24}
                    height={24}
                    alt=""
                    src="/icon--facebook1.svg"
                  />
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    width={24}
                    height={24}
                    alt=""
                    src="/icon--instagram1.svg"
                  />
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    width={24}
                    height={24}
                    alt=""
                    src="/icon--x1.svg"
                  />
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    width={24}
                    height={24}
                    alt=""
                    src="/icon--linkedin1.svg"
                  />
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    width={24}
                    height={24}
                    alt=""
                    src="/icon--youtube3.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-4 text-center mq825:flex-wrap">
                <div className="flex-[0.72] border-black border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-center py-1.5 px-[66px] min-w-[157px] min-h-[40px] mq480:flex-1 cursor-pointer hover:bg-black hover:text-white hover:border-[1px] hover:border-solid transition-all duration-300">
                  <div className="flex-1 relative leading-[150%] font-medium">
                    ADD TO BAG
                  </div>
                </div>
                <div className="flex-1 border-black border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-center py-1.5 px-[45px] min-w-[157px] min-h-[40px] cursor-pointer hover:bg-black hover:text-white hover:border-[1px] hover:border-solid transition-all duration-300">
                  <div className="flex-1 relative leading-[150%] font-medium">
                    ADD TO WISHLIST
                  </div>
                </div>
              </div>
              <div className="bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-[198px] text-center text-background-color-primary mq825:pl-[99px] mq825:pr-[99px] mq825:box-border cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300">
                <div className="relative leading-[150%] font-medium">
                  BUY IT NOW
                </div>
              </div>
            </div>
            <Extra />
            <div className="self-stretch flex flex-row items-center justify-between gap-[6.06px] text-sm">
              <div className="flex flex-row items-center justify-center py-2 px-4 gap-2">
                <Image
                  className="h-[21px] w-[29.7px] relative overflow-hidden shrink-0 object-cover"
                  width={30}
                  height={21}
                  alt=""
                  src="/solarcasebold@2x.png"
                />
                <div className="relative leading-[150%] font-medium">Case</div>
              </div>
              <div className="h-[38px] w-px relative border-gray-500 border-r-[1px] border-solid box-border" />
              <div className="flex flex-row items-center justify-center py-2 px-[15px] gap-2">
                <Image
                  className="h-[21px] w-[21px] relative overflow-hidden shrink-0 object-cover"
                  width={21}
                  height={21}
                  alt=""
                  src="/solarcasebold-1@2x.png"
                />
                <div className="relative leading-[150%] font-medium inline-block min-w-[107px]">
                  Cleaning Cloth
                </div>
              </div>
              <div className="h-[38px] w-px relative border-gray-500 border-r-[1px] border-solid box-border" />
              <div className="flex flex-row items-center justify-center py-2 px-[15px] gap-2">
                <Image
                  className="h-[21px] w-[21px] relative overflow-hidden shrink-0 object-cover"
                  width={21}
                  height={21}
                  alt=""
                  src="/solarcasebold-2@2x.png"
                />
                <div className="relative leading-[150%] font-medium">
                  Lens Cleaning Spray
                </div>
              </div>
            </div>
            <div className="absolute !m-[0] top-[160px] left-[0px] leading-[150%] font-medium hidden items-center overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] z-[4]">
              Return to the roots of timeless style with the Ray-Ban New
              Wayfarer Classic sunglasses. Featuring the same iconic shape as
              the original Wayfarer, this updated version presents a more
              refined fit with a smaller frame and a slightly softer eye shape
              for added comfort.
            </div>
          </div>
        </div>
        <R weuiarrowFilled1="pending_881:3540" />
      </div>
    </section>
  );
});

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
