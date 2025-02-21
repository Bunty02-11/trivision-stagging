import { memo } from "react";
import StoreDetails from "./store-details";
import PropTypes from "prop-types";

const FrameComponent8 = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pt-[26px] pb-[60px]  mq480:pb-[40px] box-border max-w-full text-left text-21xl text-background-color-primary font-h4-32 ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-[60px] px-20 box-border bg-[url('/stores.jpg')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:py-[39px] mq750:px-10 mq750:box-border">
        <div className="w-[450px] flex flex-col items-start justify-start gap-10 max-w-full mq480:gap-5">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
            Stores
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 text-lg">
            <StoreDetails headingLinkFlowerHeartBra="Trivision Dubai Hills Mall" />
            <StoreDetails
              headingLinkFlowerHeartBra="Sunglass Time"
              heading3MinWidth="105px"
            />
            <StoreDetails
              headingLinkFlowerHeartBra="Trivision Dubai Festival City"
              heading3MinWidth="194px"
            />
            <StoreDetails
              headingLinkFlowerHeartBra="Trivision Dubai Mall"
              heading3MinWidth="141px"
            />
            <StoreDetails
              headingLinkFlowerHeartBra="Trivision Dubai Festival City"
              heading3MinWidth="194px"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
