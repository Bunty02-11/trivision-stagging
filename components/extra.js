import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const Extra = memo(({ className = "" }) => {
  return (
    <div
      className={`self-stretch border-gray-500 border-t-[1px] border-solid border-gray-500 border-b-[1px] border-solid box-border flex flex-col items-start justify-start py-3.5 px-0 gap-2 min-h-[88px] max-w-full text-left text-sm text-black font-h4-32 ${className}`}
    >
      <div className="overflow-hidden flex flex-row items-center justify-start py-0 pl-0 pr-[277px] gap-2 mq480:pr-5 mq480:box-border mq825:pr-[138px] mq825:box-border">
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
          width={24}
          height={24}
          alt=""
          src="/img-11@2x.png"
        />
        <div className="relative leading-[150%] font-medium">
          Free shipping on all orders
        </div>
      </div>
      <div className="self-stretch overflow-hidden hidden flex-row items-center justify-start gap-2">
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
          width={24}
          height={24}
          alt=""
          src="/img2@2x.png"
        />
        <div className="relative leading-[150%] font-medium">
          Gift wrapping and customization
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-2 max-w-full">
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
          width={24}
          height={24}
          alt=""
          src="/img-21@2x.png"
        />
        <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-[calc(100%_-_32px)]">
          Guaranteed delivery within 48 hours in Dubai.
        </div>
      </div>
    </div>
  );
});

Extra.propTypes = {
  className: PropTypes.string,
};

export default Extra;
