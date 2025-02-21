import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const P = memo(({ className = "", img }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center gap-6 max-w-full text-left text-base text-black font-h4-32 mq750:flex-wrap ${className}`}
    >
      <Image
        className="h-[172px] w-[172px] relative overflow-hidden shrink-0 object-cover"
        loading="lazy"
        width={172}
        height={172}
        alt=""
        src={img}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[338px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 text-sm text-gray-200 mq480:flex-wrap">
            <div className="relative leading-[150%] font-medium">Rayban</div>
            <div className="relative leading-[150%] font-medium text-right">
              Purchased on 20 November 2024
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-2.5 max-w-full mq750:flex-wrap">
            <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[87px] max-w-full">
              Sunglasses 01
            </div>
            <div className="relative text-sm leading-[150%] font-medium text-gray-200 text-right">
              Delivered
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center max-w-full">
            <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
              Color: Black
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center max-w-full">
            <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
              Quantity: 01
            </div>
          </div>
        </div>
        <div className="w-[66px] relative leading-[150%] font-semibold text-right flex items-center">
          Aed 160
        </div>
      </div>
    </div>
  );
});

P.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
};

export default P;
