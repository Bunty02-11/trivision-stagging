import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import FrameComponent1 from "./frame-component1";

const Banner1 = memo(({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[60px] box-border gap-[260px] bg-[url('/accountBanner.jpg')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-21xl text-background-color-primary font-h4-32 mq750:gap-[130px] mq750:pb-[39px] mq750:box-border mq480:gap-[65px] ${className}`}
    >
      <FrameComponent1 />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[872px] flex flex-col items-start justify-start gap-6 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[315px] pr-[314px] mq1050:pl-[157px] mq1050:pr-[157px] mq1050:box-border mq480:pl-5 mq480:pr-5 mq480:box-border">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq1050:text-13xl mq1050:leading-[38px] mq480:text-5xl mq480:leading-[29px]">
              My Account
            </h1>
          </div>
          <div className="relative text-base leading-[150%] font-medium">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </div>
        </div>
      </div>
    </div>
  );
});

Banner1.propTypes = {
  className: PropTypes.string,
};

export default Banner1;
