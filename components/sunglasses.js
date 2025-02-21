import { memo } from "react";
import PropTypes from "prop-types";

const Sunglasses = memo(({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`flex-1 h-[314px] w-[314px] overflow-hidden flex flex-row items-end justify-center p-6 box-border bg-[url('/sunglasses@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-background-color-primary font-h4-32 ${className}`}
      data-property1={property1}
    >
      <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit]">
        Sunglasses
      </h2>
    </div>
  );
});

Sunglasses.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Sunglasses;
