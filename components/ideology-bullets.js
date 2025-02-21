import { memo, useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const IdeologyBullets = memo(
  ({ className = "", ideologyBulletsMinWidth, emptyBullets, bulletPoints, bulletHeading }) => {
    const ideologyBulletsStyle = useMemo(() => {
      return {
        minWidth: ideologyBulletsMinWidth,
      };
    }, [ideologyBulletsMinWidth]);

    return (
      <div
        className={`flex-1 flex-col items-center justify-center pt-0 px-0 pb-4 box-border gap-4 min-w-[300px] max-w-full text-center text-base text-black font-h4-32 ${className}`}
        style={ideologyBulletsStyle}
      >
        <Image
          className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-contain"
          loading="lazy"
          width={400}
          height={300}
          alt=""
          src={emptyBullets}
        />
        <div className="self-stretch flex flex-col items-center justify-center">
          <h2> {bulletHeading} </h2>
          <div className="relative leading-[150%] font-medium">
            {bulletPoints}
          </div>
        </div>
      </div>
    );
  }
);

IdeologyBullets.propTypes = {
  className: PropTypes.string,
  emptyBullets: PropTypes.string.isRequired,

  /** Style props */
  ideologyBulletsMinWidth: PropTypes.string,
};

export default IdeologyBullets;
