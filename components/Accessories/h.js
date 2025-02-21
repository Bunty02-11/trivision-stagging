import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const H = memo(({ className = "", product }) => {
  //
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-3 max-w-full text-left text-base text-gray-200 font-oswald ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-2">
        <div className="self-stretch flex flex-row items-center justify-start gap-2 mq825:flex-wrap">
          <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[161px]">
            {product.data?.brand?.name}
          </div>
          <div className="flex-1 relative leading-[150%] font-medium font-h4-32 text-tomato text-right inline-block min-w-[161px]">
            Out of Stock
          </div>
        </div>
        <div className="self-stretch relative text-5xl leading-[140%] font-medium font-h4-32 text-black mq480:text-lgi mq480:leading-[27px]">
          {product.data?.product_name_short}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-2.5 max-w-full text-5xl text-black font-h4-32 mq825:flex-wrap">
        <div className="flex-1 relative leading-[140%] font-medium inline-block min-w-[77px] max-w-full mq480:text-lgi mq480:leading-[27px]">
          Aed {product.data?.retail_price}
        </div>
        <Image
          className="h-4 w-24 relative"
          loading="lazy"
          width={96}
          height={16}
          alt=""
          src="/review1.svg"
        />
      </div>
    </div>
  );
});

H.propTypes = {
  className: PropTypes.string,
};

export default H;
