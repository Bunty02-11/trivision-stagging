import { memo } from "react";
import PropTypes from "prop-types";

const FrameComponent5 = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[60px] mq480:pb-[40px] box-border max-w-full text-left text-21xl text-black font-h4-32 mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start gap-[60px] max-w-full mq750:gap-[30px]">
        <h1 className="m-0 w-[496px] relative text-inherit leading-[120%] font-medium font-[inherit] inline-block shrink-0 max-w-full mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
          Post Your Comment!
        </h1>
        <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[471px] max-w-full text-base mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
            <div className="self-stretch border-gray-300 border-b-[1px] border-solid box-border flex flex-row items-center justify-start pt-3 px-0 pb-2.5 max-w-full">
              <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                Name
              </div>
            </div>
            <div className="self-stretch border-gray-300 border-b-[1px] border-solid box-border flex flex-row items-center justify-start pt-3 px-0 pb-2.5 max-w-full">
              <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                Email
              </div>
            </div>
            <div className="self-stretch border-gray-300 border-b-[1px] border-solid box-border flex flex-row items-center justify-start pt-3 px-0 pb-2.5 max-w-full">
              <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                Comment
              </div>
            </div>
          </div>
          <div className="w-[185px] bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-[23px] box-border text-center text-background-color-primary">
            <div className="flex-1 relative leading-[150%] font-medium">
              POST COMMENT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
