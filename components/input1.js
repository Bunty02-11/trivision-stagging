import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const Input1 = memo(({ className = "", label, vector }) => {
  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-start justify-start gap-2 text-left text-base text-black font-h4-32 ${className}`}
    >
      <div className="self-stretch relative leading-[150%] font-medium">
        {label}
      </div>
      <div className="self-stretch flex-1 border-gray-800 border-[1px] border-solid flex flex-row items-center justify-center py-1 px-4 gap-2.5 text-sm">
        <div className="relative leading-[150%] font-medium hidden opacity-[0.6]">
          Select your date
        </div>
        <Image
          className="h-[5px] w-2.5 relative hidden"
          width={10}
          height={5}
          alt=""
          src={vector}
        />
      </div>
    </div>
  );
});

Input1.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  vector: PropTypes.string.isRequired,
};

export default Input1;
