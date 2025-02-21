import { useCallback } from "react";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import ProductCards from "../components/product-cards";
import JoinWrapper from "../components/join-wrapper";
import AccordionItem from "../components/accordion-item";
import AccordionItem2 from "../components/accordion-item2";
import ImagePlaceholders from "../components/image-placeholders";
import Footer from "../components/footer";

const SunglassesListing = () => {
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
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-[50px] px-0 pb-0 box-border gap-[34px] leading-[normal] tracking-[normal] text-center text-21xl text-background-color-primary font-h4-32 mq750:gap-[17px]">
      <FrameComponent
        logo="/logo@2x.png"
        search="/search1.svg"
        sVG="/svg1.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-end pt-[340px] px-[284px] pb-[60px] box-border gap-6 bg-[url('/banner1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq750:box-border mq480:pl-5 mq480:pr-5 mq480:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[322px] mq1100:pl-[161px] mq1100:pr-[161px] mq1100:box-border mq480:pl-5 mq480:pr-5 mq480:box-border">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq750:text-13xl mq750:leading-[38px] mq480:text-5xl mq480:leading-[29px]">
              Sunglasses
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
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-20 pb-[26px] box-border max-w-full text-left text-base text-black font-h4-32 mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[120px] max-w-full mq750:gap-[60px] mq480:gap-[30px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-10 mq750:gap-5">
            {/* <div className="self-stretch flex flex-row items-start justify-between gap-5 mq480:flex-wrap">
              <div className="h-10 border-black border-[1px] border-solid box-border flex flex-row items-center justify-center py-1.5 pl-4 pr-[13px] gap-2">
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0 object-contain mq480:h-4 mq480:w-4"
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/magefilter@2x.png"
                />
                <div className="relative leading-[150%] font-medium mq480:text-sm">
                  All Filters
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-2">
                  <div className="relative leading-[150%] font-medium mq480:text-sm">
                    Sort By
                  </div>
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0 object-contain mq480:h-5 mq480:w-5"
                    width={24}
                    height={24}
                    alt=""
                    src="/iconamoonarrowup2light@2x.png"
                  />
                </div>
              </div>
            </div> */}
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-2 gap-y-6">
              <ProductCards
                imgBackgroundImage="url('/img@3x.png')"
                colorOptionJustifyContent="space-between"
                next="/pending_I782:2487;491:5147"
                next1="/pending_I782:2487;491:5150"
                priceContainerJustifyContent="space-between"
                iconamoonheartLight="/iconamoonheartlight21.svg"
                sVG="/svg-13.svg"
              />
              <ProductCards
                imgBackgroundImage="url('/img@3x.png')"
                colorOptionJustifyContent="center"
                next="/pending_I782:2488;491:5147"
                next1="/pending_I782:2488;491:5150"
                priceContainerJustifyContent="center"
                iconamoonheartLight="/iconamoonheartlight21.svg"
                sVG="/svg-13.svg"
              />
              <ProductCards
                imgBackgroundImage="url('/img@3x.png')"
                colorOptionJustifyContent="center"
                next="/pending_I782:2489;491:5147"
                next1="/pending_I782:2489;491:5150"
                priceContainerJustifyContent="center"
                iconamoonheartLight="/iconamoonheartlight21.svg"
                sVG="/svg-13.svg"
              />
              <ProductCards
                imgBackgroundImage="url('/img@3x.png')"
                colorOptionJustifyContent="center"
                next="/pending_I782:2490;491:5147"
                next1="/pending_I782:2490;491:5150"
                priceContainerJustifyContent="center"
                iconamoonheartLight="/iconamoonheartlight21.svg"
                sVG="/svg-13.svg"
              />
              <ProductCards
                imgBackgroundImage="url('/img@3x.png')"
                colorOptionJustifyContent="center"
                next="/pending_I782:2492;491:5147"
                next1="/pending_I782:2492;491:5150"
                priceContainerJustifyContent="center"
                iconamoonheartLight="/iconamoonheartlight21.svg"
                sVG="/svg-13.svg"
              />
              <ProductCards
                imgBackgroundImage="url('/img@3x.png')"
                colorOptionJustifyContent="center"
                next="/pending_I782:2493;491:5147"
                next1="/pending_I782:2493;491:5150"
                priceContainerJustifyContent="center"
                iconamoonheartLight="/iconamoonheartlight21.svg"
                sVG="/svg-13.svg"
              />
              <ProductCards
                imgBackgroundImage="url('/img@3x.png')"
                colorOptionJustifyContent="center"
                next="/pending_I782:2494;491:5147"
                next1="/pending_I782:2494;491:5150"
                priceContainerJustifyContent="center"
                iconamoonheartLight="/iconamoonheartlight21.svg"
                sVG="/svg-13.svg"
              />
              <ProductCards
                imgBackgroundImage="url('/img@3x.png')"
                colorOptionJustifyContent="center"
                next="/pending_I782:2495;491:5147"
                next1="/pending_I782:2495;491:5150"
                priceContainerJustifyContent="center"
                iconamoonheartLight="/iconamoonheartlight21.svg"
                sVG="/svg-13.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-6 text-center text-background-color-primary">
              <div className="w-[305px] flex flex-row items-start justify-center gap-4">
                <div className="flex-1 bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-[23px] cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300">
                  <div className="flex-1 relative leading-[150%] font-medium">
                    LOAD MORE PRODUCTS
                  </div>
                </div>
                <Image
                  className="h-10 w-10 relative overflow-hidden shrink-0"
                  loading="lazy"
                  width={40}
                  height={40}
                  alt=""
                  src="/top.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-center text-xs text-black">
                <div className="flex-1 relative leading-[150%] font-medium">
                  Showing 08 Products
                </div>
              </div>
            </div>
          </div>
          <JoinWrapper
            joinWrapperPadding="unset"
            joinWrapperFlex="unset"
            joinWrapperAlignSelf="stretch"
            emptyPlaceholders="/8@2x.png"
            emptyPlaceholders1="/7@2x.png"
            emptyPlaceholders2="/6@2x.png"
            emptyPlaceholders3="/5@2x.png"
          />
        </div>
      </section>
      <section className="flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[74px] max-w-full text-left text-21xl text-black font-h4-32 mq750:gap-[37px] mq480:gap-[18px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[60px] max-w-full mq750:gap-[30px] mq1280:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border max-w-full mq750:pt-[29px] mq750:box-border mq750:min-w-full mq1280:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border max-w-full">
                <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] inline-block max-w-full mq750:text-13xl mq750:leading-[38px] mq480:text-xl mq480:leading-[29px]">
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
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
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
            loading="lazy"
            width={688}
            height={656}
            alt=""
            src="/image-container@2x.png"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border max-w-full [row-gap:20px] mq1280:flex-wrap">
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
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        formMargin="0"
        iconYoutube="/icon--youtube-1.svg"
        itemImg="/item--img41.svg"
        itemImg1="/item--img-15.svg"
        itemImg2="/item--img-25.svg"
      />
    </div>
  );
};

export default SunglassesListing;
