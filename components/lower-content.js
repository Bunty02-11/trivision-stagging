import { memo } from "react";
import JoinWrapper from "./join-wrapper";
import ImagePlaceholders from "./image-placeholders";
import PropTypes from "prop-types";

const LowerContent = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-center justify-center pt-0 px-20 pb-[34px] box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-[94px] max-w-full mq480:gap-[23px] mq750:gap-[47px]">
        <JoinWrapper
          joinWrapperPadding="unset"
          joinWrapperFlex="unset"
          joinWrapperAlignSelf="stretch"
          emptyPlaceholders="/8@2x.png"
          emptyPlaceholders1="/7@2x.png"
          emptyPlaceholders2="/6@2x.png"
          emptyPlaceholders3="/5@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq1250:flex-wrap">
          <ImagePlaceholders
            imagePlaceholdersFlex="1"
            imagePlaceholdersMinWidth="240px"
            perfumeImageContainersAlignSelf="stretch"
            img="/img1@2x.png"
            perfumes="100% Authentic Products"
          />
          <ImagePlaceholders
            imagePlaceholdersFlex="0.6602"
            imagePlaceholdersMinWidth="240px"
            perfumeImageContainersAlignSelf="stretch"
            img="/img-1@2x.png"
            perfumes="Secure Payment"
          />
          <ImagePlaceholders
            imagePlaceholdersFlex="0.5625"
            imagePlaceholdersMinWidth="240px"
            perfumeImageContainersAlignSelf="stretch"
            img="/img-2@2x.png"
            perfumes="Free Shipping"
          />
          <ImagePlaceholders
            imagePlaceholdersFlex="0.6133"
            imagePlaceholdersMinWidth="240px"
            perfumeImageContainersAlignSelf="stretch"
            img="/img-3@2x.png"
            perfumes="1 Year Warranty"
          />
        </div>
      </div>
    </section>
  );
});

LowerContent.propTypes = {
  className: PropTypes.string,
};

export default LowerContent;
