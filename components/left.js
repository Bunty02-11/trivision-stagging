import { memo } from "react";
import Image from "next/image";
import P from "./p";
import PropTypes from "prop-types";

const Left = memo(({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-6 min-w-[465px] max-w-full text-left text-5xl text-black font-h4-32 mq750:min-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-center gap-2.5 max-w-full mq750:flex-wrap">
        <h2 className="m-0 flex-1 relative text-inherit leading-[140%] font-semibold font-[inherit] inline-block min-w-[132px] max-w-full mq480:text-lgi mq480:leading-[27px]">
          Order History
        </h2>
        <div className="flex flex-row items-start justify-center gap-2 text-base">
          <div className="relative leading-[150%] font-medium">Sort By</div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
            width={24}
            height={24}
            alt=""
            src="/iconamoonarrowup2light@2x.png"
          />
        </div>
      </div>
      <P img="/img21@2x.png" />
      <P img="/img21@2x.png" />
      <P img="/img21@2x.png" />
      <P img="/img21@2x.png" />
    </div>
  );
});

Left.propTypes = {
  className: PropTypes.string,
};

export default Left;
