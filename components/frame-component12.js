import { memo, useCallback } from "react";
import Image from "next/image";
import JoinWrapper from "./join-wrapper";
import AccordionItem from "./accordion-item";
import AccordionItem2 from "./accordion-item2";
import ImagePlaceholders from "./image-placeholders";
import PropTypes from "prop-types";

const FrameComponent12 = memo(({ className = "" }) => {
  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openClasses = ["grid-rows-[1fr]"];
    const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

    if (isOpen) {
      accContent?.classList.remove(...openClasses);
      accContent?.classList.add(...closeClasses);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        siblingAccContent?.classList.remove(...closeClasses);
        siblingAccContent?.classList.add(...openClasses);
      }, 1);
    }
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-center justify-center max-w-full text-left text-21xl text-black font-h4-32 ${className}`}
    >
      <div className="flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[74px] max-w-full mq480:gap-[18px] mq750:gap-[37px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[30px]">
          <JoinWrapper
            joinWrapperPadding="0px 20px 0px 0px"
            joinWrapperFlex="unset"
            joinWrapperAlignSelf="unset"
            emptyPlaceholders="/8@2x.png"
            emptyPlaceholders1="/7@2x.png"
            emptyPlaceholders2="/6@2x.png"
            emptyPlaceholders3="/5@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start gap-[60px] max-w-full mq750:gap-[30px] mq1280:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border max-w-full mq750:pt-[29px] mq750:box-border mq750:min-w-full mq1280:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
                <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border max-w-full">
                  <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] inline-block max-w-full mq480:text-xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
                    Frequently Asked Questions
                  </h1>
                </div>
                <div
                  className="self-stretch flex flex-col items-start justify-start text-xl"
                  data-acc-group
                >
                  <AccordionItem />
                  <div
                    className="w-[612px] h-16 border-gray-800 border-b-[1px] border-solid box-border hidden flex-col items-start justify-start [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                    data-acc-item
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <div className="w-[612px] h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-0 box-border gap-6">
                      <h3 className="m-0 h-7 flex-1 relative text-inherit leading-[140%] font-medium font-[inherit] inline-block mq480:text-base mq480:leading-[22px]">
                        Question text goes here
                      </h3>
                      <Image
                        className="h-8 w-8 relative overflow-hidden shrink-0"
                        width={32}
                        height={32}
                        alt=""
                        src="/mynauiplus-1.svg"
                      />
                    </div>
                    <div className="w-[720px] hidden flex-row items-start justify-start pt-0 px-0 pb-6 box-border text-base font-p3-16">
                      <div className="flex-1 relative leading-[150%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat. Aenean
                        faucibus nibh et justo cursus id rutrum lorem imperdiet.
                        Nunc ut sem vitae risus tristique posuere.
                      </div>
                    </div>
                    <div className="relative text-[transparent] hidden" />
                    <div className="absolute w-0 h-0" />
                  </div>
                  <AccordionItem2 />
                  <div
                    className="w-[612px] h-52 border-gray-800 border-b-[1px] border-solid box-border hidden flex-col items-start justify-start [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
                    data-acc-item
                    data-acc-open
                  >
                    <div
                      className="w-[612px] h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-0 box-border gap-6 cursor-pointer"
                      data-acc-header
                      onClick={onAccordionHeaderClick}
                    >
                      <h3 className="m-0 h-7 flex-1 relative text-inherit leading-[140%] font-medium font-[inherit] inline-block mq480:text-base mq480:leading-[22px]">
                        Question text goes here
                      </h3>
                      <Image
                        className="h-8 w-8 relative overflow-hidden shrink-0"
                        loading="lazy"
                        width={32}
                        height={32}
                        alt=""
                        src="/mynauiplus.svg"
                      />
                    </div>
                    <div
                      className="w-[612px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                      data-acc-content
                    >
                      <div className="w-[612px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                        <div className="w-[612px] h-36 flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border">
                          <div className="h-[120px] flex-1 relative leading-[150%] font-medium inline-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique. Duis cursus, mi quis viverra ornare, eros
                            dolor interdum nulla, ut commodo diam libero vitae
                            erat. Aenean faucibus nibh et justo cursus id rutrum
                            lorem imperdiet. Nunc ut sem vitae risus tristique
                            posuere.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative text-[transparent] hidden" />
                    <div className="absolute w-0 h-0" />
                  </div>
                  <AccordionItem2 />
                  <div
                    className="w-[612px] h-52 border-gray-800 border-b-[1px] border-solid box-border hidden flex-col items-start justify-start [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
                    data-acc-item
                    data-acc-open
                  >
                    <div
                      className="w-[612px] h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-0 box-border gap-6 cursor-pointer"
                      data-acc-header
                      onClick={onAccordionHeaderClick}
                    >
                      <h3 className="m-0 h-7 flex-1 relative text-inherit leading-[140%] font-medium font-[inherit] inline-block mq480:text-base mq480:leading-[22px]">
                        Question text goes here
                      </h3>
                      <Image
                        className="h-8 w-8 relative overflow-hidden shrink-0"
                        loading="lazy"
                        width={32}
                        height={32}
                        alt=""
                        src="/mynauiplus.svg"
                      />
                    </div>
                    <div
                      className="w-[612px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                      data-acc-content
                    >
                      <div className="w-[612px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                        <div className="w-[612px] h-36 flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border">
                          <div className="h-[120px] flex-1 relative leading-[150%] font-medium inline-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique. Duis cursus, mi quis viverra ornare, eros
                            dolor interdum nulla, ut commodo diam libero vitae
                            erat. Aenean faucibus nibh et justo cursus id rutrum
                            lorem imperdiet. Nunc ut sem vitae risus tristique
                            posuere.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative text-[transparent] hidden" />
                    <div className="absolute w-0 h-0" />
                  </div>
                  <AccordionItem2 />
                  <div
                    className="w-[612px] h-52 border-gray-800 border-b-[1px] border-solid box-border hidden flex-col items-start justify-start [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
                    data-acc-item
                    data-acc-open
                  >
                    <div
                      className="w-[612px] h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-0 box-border gap-6 cursor-pointer"
                      data-acc-header
                      onClick={onAccordionHeaderClick}
                    >
                      <h3 className="m-0 h-7 flex-1 relative text-inherit leading-[140%] font-medium font-[inherit] inline-block mq480:text-base mq480:leading-[22px]">
                        Question text goes here
                      </h3>
                      <Image
                        className="h-8 w-8 relative overflow-hidden shrink-0"
                        loading="lazy"
                        width={32}
                        height={32}
                        alt=""
                        src="/mynauiplus.svg"
                      />
                    </div>
                    <div
                      className="w-[612px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                      data-acc-content
                    >
                      <div className="w-[612px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                        <div className="w-[612px] h-36 flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border">
                          <div className="h-[120px] flex-1 relative leading-[150%] font-medium inline-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique. Duis cursus, mi quis viverra ornare, eros
                            dolor interdum nulla, ut commodo diam libero vitae
                            erat. Aenean faucibus nibh et justo cursus id rutrum
                            lorem imperdiet. Nunc ut sem vitae risus tristique
                            posuere.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative text-[transparent] hidden" />
                    <div className="absolute w-0 h-0" />
                  </div>
                </div>
                <div className="bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-[23px] text-center text-base text-background-color-primary cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300">
                  <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[84px]">
                    READ ALL
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="h-[656px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[447px] mq750:min-w-full"
              width={688}
              height={656}
              alt=""
              src="/image-container@2x.png"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-0 pl-0 pr-5 box-border max-w-full [row-gap:20px] mq1280:flex-wrap">
          <ImagePlaceholders
            imagePlaceholdersFlex="unset"
            imagePlaceholdersMinWidth="unset"
            perfumeImageContainersAlignSelf="unset"
            img="/img1@2x.png"
            perfumes="100% Authentic Products"
          />
          <ImagePlaceholders
            imagePlaceholdersFlex="unset"
            imagePlaceholdersMinWidth="unset"
            perfumeImageContainersAlignSelf="unset"
            img="/img-1@2x.png"
            perfumes="Secure Payment"
          />
          <ImagePlaceholders
            imagePlaceholdersFlex="unset"
            imagePlaceholdersMinWidth="unset"
            perfumeImageContainersAlignSelf="unset"
            img="/img-2@2x.png"
            perfumes="Free Shipping"
          />
          <ImagePlaceholders
            imagePlaceholdersFlex="unset"
            imagePlaceholdersMinWidth="unset"
            perfumeImageContainersAlignSelf="unset"
            img="/img-3@2x.png"
            perfumes="1 Year Warranty"
          />
        </div>
      </div>
    </section>
  );
});

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
