import { memo, useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const StoreDetails = memo(
  ({ className = "", headingLinkFlowerHeartBra, heading3MinWidth }) => {
    const heading3Style = useMemo(() => {
      return {
        minWidth: heading3MinWidth,
      };
    }, [heading3MinWidth]);

    return (
      <div
        className={`self-stretch overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-6 px-0 gap-6 text-left text-lg text-background-color-primary font-h4-32 ${className}`}
      >
        <div
          className="flex-1 relative leading-[150%] font-medium inline-block min-w-[176px]"
          style={heading3Style}
        >
          {headingLinkFlowerHeartBra}
        </div>
        <Image
          className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
          loading="lazy"
          width={27}
          height={27}
          alt=""
          src="/fluentlocation12filled.svg"
        />
        <Image
          className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
          width={27}
          height={27}
          alt=""
          src="/mdicall.svg"
        />
        <Image
          className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
          width={27}
          height={27}
          alt=""
          src="/antdesignmailfilled.svg"
        />
      </div>
    );
  }
);

StoreDetails.propTypes = {
  className: PropTypes.string,
  headingLinkFlowerHeartBra: PropTypes.string,

  /** Style props */
  heading3MinWidth: PropTypes.string,
};

export default StoreDetails;
