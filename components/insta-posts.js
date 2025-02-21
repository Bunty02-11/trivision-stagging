import React from "react";
import ImagePlaceholders from "../components/image-placeholders";

function InstaPosts() {
  return (
    <section className="self-stretch flex flex-col items-center justify-center box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:box-border">
      <div className="flex-1 flex flex-row items-center justify-center max-w-full [row-gap:20px] mq1250:flex-wrap">
        <ImagePlaceholders
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
    </section>
  );
}

export default InstaPosts;
