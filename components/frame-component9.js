import { memo, useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent9 = memo(({ className = "", frameHeaderPadding, logo }) => {
  const frameHeaderStyle = useMemo(() => {
    return {
      padding: frameHeaderPadding,
    };
  }, [frameHeaderPadding]);

  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-center text-xs text-background-color-primary font-h4-32 ${className}`}
      style={frameHeaderStyle}
    >
      <div className="self-stretch bg-black overflow-hidden flex flex-row items-start justify-between py-[13px] px-10 gap-5">
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          width={24}
          height={24}
          alt=""
          src="/iconamoonarrowup2@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 mq1410:w-[-1px]">
          <div className="self-stretch relative leading-[150%] font-medium mq1410:hidden">
            Sale: 20% Off - Limited Time Only
          </div>
        </div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          width={24}
          height={24}
          alt=""
          src="/iconamoonarrowup2-1@2x.png"
        />
      </div>
      <div className="flex-1 bg-whitesmoke-100 border-gray-800 border-b-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[18px] px-20 pb-4 gap-[65.9px] max-w-full text-sm text-black mq480:gap-4 mq825:gap-[33px] mq825:pl-10 mq825:pr-10 mq825:box-border">
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <Image
            className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            width={186}
            height={36}
            alt=""
            src={logo}
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[5.5px] pb-0 pl-0 pr-[9px] box-border max-w-full mq480:w-[9.6px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full mq480:hidden">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className="self-stretch relative leading-[150%] uppercase font-medium inline-block min-w-[80px]">
                FEATURED
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-3 max-w-full mq480:hidden">
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <div className="self-stretch relative leading-[150%] uppercase font-medium">
                  Brands
                </div>
              </div>
              <div className="flex-[0.8899] flex flex-row items-start justify-start py-1.5 pl-3 pr-[11px]">
                <div className="flex-1 relative leading-[150%] uppercase font-medium">
                  Sunglasses
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pl-0 pr-[11px]">
                <div className="self-stretch relative leading-[150%] uppercase font-medium inline-block min-w-[94px]">
                  Eyeglasses
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1.5 pb-0 pl-0 pr-[11px]">
                <div className="self-stretch relative leading-[150%] uppercase font-medium inline-block min-w-[112px]">
                  Contact Lens
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <div className="self-stretch relative leading-[150%] uppercase font-medium inline-block min-w-[103px]">
                  ACCESSORIES
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-red">
              <div className="self-stretch relative leading-[150%] uppercase font-medium">
                BEST VALUE
              </div>
            </div>
          </div>
        </div>
        <div className="w-44 flex flex-row items-start justify-start text-left text-smi font-inter">
          <Image
            className="h-11 w-11 relative"
            loading="lazy"
            width={44}
            height={44}
            alt=""
            src="/search4.svg"
          />
          <Image
            className="h-11 w-11 relative"
            loading="lazy"
            width={44}
            height={44}
            alt=""
            src="/account3.svg"
          />
          <Image
            className="h-11 w-11 relative"
            loading="lazy"
            width={44}
            height={44}
            alt=""
            src="/wish1.svg"
          />
          <div className="h-11 flex-1 relative">
            <Image
              className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_11px)] w-[22px] h-[22px]"
              width={22}
              height={22}
              alt=""
              src="/svg1.svg"
            />
            <a className="[text-decoration:none] absolute top-[0px] left-[28.9px] leading-[13px] text-[inherit] flex items-center w-[9px] h-[13px] min-w-[9px] z-[1]">
              0
            </a>
          </div>
        </div>
      </div>
    </header>
  );
});

FrameComponent9.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string.isRequired,

  /** Style props */
  frameHeaderPadding: PropTypes.string,
};

export default FrameComponent9;
