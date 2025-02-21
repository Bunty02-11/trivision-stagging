import { memo, useCallback, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import ImagePlaceholders from "./image-placeholders";

const FrameComponent4 = memo(({ className = "", product }) => {
  const [openIndex, setOpenIndex] = useState(null);
  //

  const onAccordionHeaderClick = useCallback((index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <>
      <section
        className={`flex flex-row items-center justify-center py-0 px-5 box-border gap-[74px] max-w-full text-left text-21xl text-black font-h4-32 mq750:gap-[37px] mq480:gap-[18px] ${className}`}
      >
        <div className="self-stretch flex flex-row mq480:flex-col items-center justify-center gap-[60px] max-w-full mq750:gap-[30px]">
          <div className="flex flex-row items-center justify-center pt-11 px-0 pb-0 box-border max-w-full mq750:pt-[29px] mq750:box-border mq750:min-w-full">
            <div className="self-stretch flex flex-col items-center justify-center gap-10 max-w-full mq750:gap-5">
              <div className="self-stretch flex flex-col items-center justify-center py-0 px-5 box-border max-w-full">
                <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] text-center max-w-full mq480:text-xl mq750:text-13xl mq750:leading-[38px] mq480:text-5xl mq480:leading-[29px] mq480:text-xl">
                  Frequently Asked Questions
                </h1>
              </div>
              <div
                className="self-stretch flex flex-col items-center justify-start text-xl"
                data-acc-group
              >
                {product?.[0]?.brand?.faqs &&
                  Array.isArray(product?.[0]?.brand?.faqs) &&
                  product[0]?.brand?.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`w-full max-w-[612px] border-gray-800 border-b-[1px] border-solid box-border flex flex-col items-start justify-start [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] ${
                        openIndex === index ? "open" : ""
                      }`}
                      data-acc-item
                    >
                      <div
                        className="w-full h-16 overflow-hidden shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border cursor-pointer"
                        data-acc-header
                        onClick={() => onAccordionHeaderClick(index)}
                      >
                        <h3 className="m-0 h-15 flex-1 relative text-inherit leading-[140%] font-medium font-[inherit] inline-block mq480:text-base mq480:leading-[22px]">
                          {faq.question}
                        </h3>
                        <Image
                          className={`h-8 w-8 relative overflow-hidden shrink-0 transform transition-transform duration-150 ${
                            openIndex === index ? "rotate-90" : ""
                          }`}
                          width={32}
                          height={32}
                          alt=""
                          src="/mynauiplus.svg"
                        />
                      </div>
                      <div
                        className={`w-full grid ${
                          openIndex === index
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        } [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base`}
                        data-acc-content
                      >
                        <div className="w-full overflow-hidden">
                          <div className="w-full flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border">
                            <div className="flex-1 relative leading-[150%] font-medium">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <Image
            className="w-full max-w-[688px] h-auto object-cover mq480:w-full"
            loading="lazy"
            width={688}
            height={656}
            alt=""
            src="/image-container@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-10 pb-[60px] mq480:pb-[40px] mq480:px-3 box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-[39px] mq750:box-border">
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
    </>
  );
});

FrameComponent4.propTypes = {
  className: PropTypes.string,
  faqs: PropTypes.array.isRequired, // Ensure faqs prop is required and is an array
};

export default FrameComponent4;
