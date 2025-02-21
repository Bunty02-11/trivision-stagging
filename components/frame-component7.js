import { memo } from "react";
import JoinWrapper from "./join-wrapper";
import PropTypes from "prop-types";

const FrameComponent7 = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[60px] box-border max-w-full mq480:pb-[39px] mq480:box-border mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      <JoinWrapper
        joinWrapperPadding="unset"
        joinWrapperFlex="1"
        joinWrapperAlignSelf="unset"
        emptyPlaceholders="/8@2x.png"
        emptyPlaceholders1="/7@2x.png"
        emptyPlaceholders2="/6@2x.png"
        emptyPlaceholders3="/5@2x.png"
      />
    </section>
  );
});

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
