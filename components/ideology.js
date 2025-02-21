import { memo } from "react";
import IdeologyBullets from "./ideology-bullets";
import PropTypes from "prop-types";

const Ideology = memo(({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start py-[60px] px-20 box-border gap-10 max-w-full z-[1] text-center text-21xl text-black font-h4-32 mq750:gap-5 mq750:py-[39px] mq750:px-10 mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center max-w-full mq480:gap-[109px] mq750:gap-[219px] mq1280:gap-[437px]">
        <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] inline-block max-w-full mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
          Our Ideology Behind Our Products
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-10 max-w-full text-base mq750:gap-5 mq750:grid-cols-[minmax(300px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(300px,_520px))]">
        <IdeologyBullets
          ideologyBulletsMinWidth="300px"
          emptyBullets="/5-1@2x.png"
          bulletHeading="Self-Expression and Confidence"
          bulletPoints=" Eyewear is more than vision correction; it’s about showcasing your true self. We offer iconic luxury eyewear that empowers customers to express their unique style."
        />
        <IdeologyBullets
          ideologyBulletsMinWidth="300px"
          emptyBullets="/5-1@2x.png"
          bulletHeading="Quality You Can Trust"
          bulletPoints="We source our eyewear from trusted manufacturers passionate about craftsmanship. Every product undergoes rigorous checks to ensure durability and comfort."
        />
        <IdeologyBullets
          ideologyBulletsMinWidth="300px"
          emptyBullets="/5-2@2x.png"
          bulletHeading="Customer Satisfaction at the Core"
          bulletPoints="Your satisfaction is our priority. We aim to make shopping effortless and enjoyable, ensuring you find eyewear that complements your vision, style, and lifestyle."
        />
      </div>
    </div>
  );
});

Ideology.propTypes = {
  className: PropTypes.string,
};

export default Ideology;
