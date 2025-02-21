const RealProductDetails = () => {
  return <>test</>;
};

export default RealProductDetails;

// import { useCallback } from "react";
// import Image from "next/image";
// import FrameComponent9 from "../components/frame-component9";
// import Main from "../components/main";
// import IdeologyBullets from "../components/ideology-bullets";
// import ProductCards from "../components/product-cards";
// import Insta from "../components/insta";
// import AccordionItem from "../components/accordion-item";
// import AccordionItem2 from "../components/accordion-item2";
// import ImagePlaceholders from "../components/image-placeholders";
// import Footer from "../components/footer";

// const RealProductDetails = () => {
//   const onAccordionHeaderClick = useCallback((event) => {
//     const element = event.target;

//     const accItem = element.closest("[data-acc-item]") || element;
//     const accContent = accItem.querySelector("[data-acc-content]");
//     const isOpen = accItem.hasAttribute("data-acc-open");
//     const nextOuterSibling =
//       accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
//     const prevOuterSibling =
//       accItem?.previousElementSibling ||
//       accItem?.parentElement?.previousElementSibling;
//     const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
//       ? accItem?.nextElementSibling ||
//         nextOuterSibling?.querySelector("[data-acc-item]") ||
//         nextOuterSibling
//       : accItem?.previousElementSibling ||
//         prevOuterSibling?.querySelector("[data-acc-item]") ||
//         prevOuterSibling;
//     const siblingAccItem =
//       siblingContainerAccItem?.querySelector("[data-acc-item]") ||
//       siblingContainerAccItem;

//     if (!siblingAccItem) return;
//     const originalDisplay = "flex";
//     const siblingDisplay = "flex";

//     const openClasses = ["grid-rows-[1fr]"];
//     const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

//     if (isOpen) {
//       accContent?.classList.remove(...openClasses);
//       accContent?.classList.add(...closeClasses);

//       setTimeout(() => {
//         if (accItem) {
//           accItem.style.display = "none";
//           siblingAccItem.style.display = siblingDisplay;
//         }
//       }, 100);
//     } else {
//       if (accItem) {
//         accItem.style.display = "none";
//         siblingAccItem.style.display = originalDisplay;
//       }
//       const siblingAccContent =
//         siblingAccItem?.querySelector("[data-acc-content]");
//       setTimeout(() => {
//         siblingAccContent?.classList.remove(...closeClasses);
//         siblingAccContent?.classList.add(...openClasses);
//       }, 1);
//     }
//   }, []);

//   return (
//     <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
//       <FrameComponent9 logo="/logo@2x.png" />
//       <Main />
//       <section className="overflow-hidden flex flex-row items-start justify-start py-[218px] px-[688px] bg-[url('/video1@3x.png')] bg-cover bg-no-repeat bg-[top] mq480:pl-5 mq480:pr-5 mq480:box-border mq825:py-[142px] mq825:px-[344px] mq825:box-border">
//         <Image
//           className="h-16 w-16 relative rounded-81xl overflow-hidden shrink-0"
//           loading="lazy"
//           width={64}
//           height={64}
//           alt=""
//           src="/mdiplay1.svg"
//         />
//       </section>
//       <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full mq825:pb-[39px] mq825:box-border">
//         <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start py-[60px] px-20 box-border gap-10 max-w-full mq825:gap-5 mq825:py-[39px] mq825:px-10 mq825:box-border">
//           <IdeologyBullets
//             ideologyBulletsMinWidth="160px"
//             emptyBullets="/53@2x.png"
//           />
//           <IdeologyBullets
//             ideologyBulletsMinWidth="160px"
//             emptyBullets="/5-11@2x.png"
//           />
//           <IdeologyBullets
//             ideologyBulletsMinWidth="160px"
//             emptyBullets="/5-21@2x.png"
//           />
//         </div>
//       </div>
//       <section className="w-[1400px] flex flex-row items-start justify-start pt-0 px-10 pb-[60px] box-border max-w-full text-center text-21xl text-black font-h4-32 mq825:pb-[39px] mq825:box-border">
//         <div className="flex-1 flex flex-col items-end justify-start gap-10 max-w-full mq825:gap-5">
//           <div className="w-[1279.5px] flex flex-row items-start justify-end py-0 pl-[463px] pr-[464px] box-border max-w-full mq480:pl-5 mq480:pr-5 mq480:box-border mq825:pl-[115px] mq825:pr-[116px] mq825:box-border mq1410:pl-[231px] mq1410:pr-[232px] mq1410:box-border">
//             <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
//               Related Products
//             </h1>
//           </div>
//           <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-4 max-w-full">
//             <div className="flex flex-col items-start justify-start pt-[175.5px] px-0 pb-0">
//               <Image
//                 className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
//                 loading="lazy"
//                 width={24}
//                 height={24}
//                 alt=""
//                 src="/next-1@2x.png"
//               />
//             </div>
//             <div className="flex-1 flex flex-row items-start justify-center gap-2 min-w-[832px] max-w-full lg:flex-wrap lg:justify-center lg:grid-cols-[repeat(2,_minmax(235px,_408px))] lg:min-w-full mq480:grid-cols-[minmax(235px,_1fr)]">
//               <ProductCards
//                 next="/pending_I589:2154;491:5147"
//                 next1="/pending_I589:2154;491:5150"
//                 iconamoonheartLight="/iconamoonheartlight1.svg"
//                 sVG="/svg-11.svg"
//               />
//               <ProductCards
//                 imgBackgroundImage="url('/img@3x.png')"
//                 colorOptionJustifyContent="center"
//                 next="/pending_I589:2155;491:5147"
//                 next1="/pending_I589:2155;491:5150"
//                 priceContainerJustifyContent="center"
//                 iconamoonheartLight="/iconamoonheartlight1.svg"
//                 sVG="/svg-11.svg"
//               />
//               <ProductCards
//                 imgBackgroundImage="url('/img@3x.png')"
//                 colorOptionJustifyContent="center"
//                 next="/pending_I589:2156;491:5147"
//                 next1="/pending_I589:2156;491:5150"
//                 priceContainerJustifyContent="center"
//                 iconamoonheartLight="/iconamoonheartlight1.svg"
//                 sVG="/svg-11.svg"
//               />
//               <ProductCards
//                 imgBackgroundImage="url('/img@3x.png')"
//                 colorOptionJustifyContent="center"
//                 next="/pending_I589:2157;491:5147"
//                 next1="/pending_I589:2157;491:5150"
//                 priceContainerJustifyContent="center"
//                 iconamoonheartLight="/iconamoonheartlight1.svg"
//                 sVG="/svg-11.svg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <Image
//         className="w-6 h-6 absolute !m-[0] right-[40px] bottom-[2232.5px] overflow-hidden shrink-0 object-contain"
//         width={24}
//         height={24}
//         alt=""
//         src="/next-2@2x.png"
//       />
//       <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[74px] box-border max-w-full text-left text-21xl text-black font-h4-32 mq825:pb-[31px] mq825:box-border mq1410:pb-12 mq1410:box-border">
//         <Insta
//           instaImages="/8@2x.png"
//           instaImages1="/7@2x.png"
//           instaImages2="/6@2x.png"
//           instaImages3="/5@2x.png"
//         />
//         <div className="flex flex-row items-start justify-start gap-[60px] max-w-full lg:flex-wrap mq825:gap-[30px]">
//           <div className="flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border max-w-full lg:flex-1 mq825:pt-[29px] mq825:box-border mq825:min-w-full">
//             <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full mq825:gap-5">
//               <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border max-w-full">
//                 <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] inline-block max-w-full mq480:text-5xl mq480:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
//                   Frequently Asked Questions
//                 </h1>
//               </div>
//               <div
//                 className="self-stretch flex flex-col items-start justify-start text-xl"
//                 data-acc-group
//               >
//                 <AccordionItem />
//                 <div
//                   className="w-[612px] h-16 border-gray-800 border-b-[1px] border-solid box-border hidden flex-col items-start justify-start [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
//                   data-acc-item
//                   data-acc-header
//                   onClick={onAccordionHeaderClick}
//                 >
//                   <div className="w-[612px] h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-0 box-border gap-6">
//                     <h3 className="m-0 h-7 flex-1 relative text-inherit leading-[140%] font-medium font-[inherit] inline-block mq480:text-base mq480:leading-[22px]">
//                       Question text goes here
//                     </h3>
//                     <Image
//                       className="h-8 w-8 relative overflow-hidden shrink-0"
//                       width={32}
//                       height={32}
//                       alt=""
//                       src="/mynauiplus-1.svg"
//                     />
//                   </div>
//                   <div className="w-[720px] hidden flex-row items-start justify-start pt-0 px-0 pb-6 box-border text-base font-p3-16">
//                     <div className="flex-1 relative leading-[150%]">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Suspendisse varius enim in eros elementum tristique. Duis
//                       cursus, mi quis viverra ornare, eros dolor interdum nulla,
//                       ut commodo diam libero vitae erat. Aenean faucibus nibh et
//                       justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
//                       risus tristique posuere.
//                     </div>
//                   </div>
//                   <div className="relative text-[transparent] hidden" />
//                   <div className="absolute w-0 h-0" />
//                 </div>
//                 <AccordionItem2 />
//                 <div
//                   className="w-[612px] h-52 border-gray-800 border-b-[1px] border-solid box-border hidden flex-col items-start justify-start [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
//                   data-acc-item
//                   data-acc-open
//                 >
//                   <div
//                     className="w-[612px] h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-0 box-border gap-6 cursor-pointer"
//                     data-acc-header
//                     onClick={onAccordionHeaderClick}
//                   >
//                     <h3 className="m-0 h-7 flex-1 relative text-inherit leading-[140%] font-medium font-[inherit] inline-block mq480:text-base mq480:leading-[22px]">
//                       Question text goes here
//                     </h3>
//                     <Image
//                       className="h-8 w-8 relative overflow-hidden shrink-0"
//                       loading="lazy"
//                       width={32}
//                       height={32}
//                       alt=""
//                       src="/mynauiplus.svg"
//                     />
//                   </div>
//                   <div
//                     className="w-[612px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
//                     data-acc-content
//                   >
//                     <div className="w-[612px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
//                       <div className="w-[612px] h-36 flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border">
//                         <div className="h-[120px] flex-1 relative leading-[150%] font-medium inline-block">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Suspendisse varius enim in eros elementum
//                           tristique. Duis cursus, mi quis viverra ornare, eros
//                           dolor interdum nulla, ut commodo diam libero vitae
//                           erat. Aenean faucibus nibh et justo cursus id rutrum
//                           lorem imperdiet. Nunc ut sem vitae risus tristique
//                           posuere.
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="relative text-[transparent] hidden" />
//                   <div className="absolute w-0 h-0" />
//                 </div>
//                 <AccordionItem2 />
//                 <div
//                   className="w-[612px] h-52 border-gray-800 border-b-[1px] border-solid box-border hidden flex-col items-start justify-start [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
//                   data-acc-item
//                   data-acc-open
//                 >
//                   <div
//                     className="w-[612px] h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-0 box-border gap-6 cursor-pointer"
//                     data-acc-header
//                     onClick={onAccordionHeaderClick}
//                   >
//                     <h3 className="m-0 h-7 flex-1 relative text-inherit leading-[140%] font-medium font-[inherit] inline-block mq480:text-base mq480:leading-[22px]">
//                       Question text goes here
//                     </h3>
//                     <Image
//                       className="h-8 w-8 relative overflow-hidden shrink-0"
//                       loading="lazy"
//                       width={32}
//                       height={32}
//                       alt=""
//                       src="/mynauiplus.svg"
//                     />
//                   </div>
//                   <div
//                     className="w-[612px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
//                     data-acc-content
//                   >
//                     <div className="w-[612px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
//                       <div className="w-[612px] h-36 flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border">
//                         <div className="h-[120px] flex-1 relative leading-[150%] font-medium inline-block">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Suspendisse varius enim in eros elementum
//                           tristique. Duis cursus, mi quis viverra ornare, eros
//                           dolor interdum nulla, ut commodo diam libero vitae
//                           erat. Aenean faucibus nibh et justo cursus id rutrum
//                           lorem imperdiet. Nunc ut sem vitae risus tristique
//                           posuere.
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="relative text-[transparent] hidden" />
//                   <div className="absolute w-0 h-0" />
//                 </div>
//                 <AccordionItem2 />
//                 <div
//                   className="w-[612px] h-52 border-gray-800 border-b-[1px] border-solid box-border hidden flex-col items-start justify-start [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
//                   data-acc-item
//                   data-acc-open
//                 >
//                   <div
//                     className="w-[612px] h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-0 box-border gap-6 cursor-pointer"
//                     data-acc-header
//                     onClick={onAccordionHeaderClick}
//                   >
//                     <h3 className="m-0 h-7 flex-1 relative text-inherit leading-[140%] font-medium font-[inherit] inline-block mq480:text-base mq480:leading-[22px]">
//                       Question text goes here
//                     </h3>
//                     <Image
//                       className="h-8 w-8 relative overflow-hidden shrink-0"
//                       loading="lazy"
//                       width={32}
//                       height={32}
//                       alt=""
//                       src="/mynauiplus.svg"
//                     />
//                   </div>
//                   <div
//                     className="w-[612px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
//                     data-acc-content
//                   >
//                     <div className="w-[612px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
//                       <div className="w-[612px] h-36 flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border">
//                         <div className="h-[120px] flex-1 relative leading-[150%] font-medium inline-block">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Suspendisse varius enim in eros elementum
//                           tristique. Duis cursus, mi quis viverra ornare, eros
//                           dolor interdum nulla, ut commodo diam libero vitae
//                           erat. Aenean faucibus nibh et justo cursus id rutrum
//                           lorem imperdiet. Nunc ut sem vitae risus tristique
//                           posuere.
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="relative text-[transparent] hidden" />
//                   <div className="absolute w-0 h-0" />
//                 </div>
//               </div>
//               <div className="bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-[23px] text-center text-base text-background-color-primary">
//                 <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[84px]">
//                   READ ALL
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Image
//             className="h-[656px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[447px] z-[1] mq825:min-w-full"
//             loading="lazy"
//             width={688}
//             height={656}
//             alt=""
//             src="/image-container@2x.png"
//           />
//         </div>
//       </section>
//       <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[34px] box-border max-w-full mq825:pl-10 mq825:pr-10 mq825:box-border">
//         <div className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1410:flex-wrap">
//           <ImagePlaceholders
//             imagePlaceholdersFlex="1"
//             imagePlaceholdersMinWidth="240px"
//             perfumeImageContainersAlignSelf="stretch"
//             img="/img1@2x.png"
//             perfumes="100% Authentic Products"
//           />
//           <ImagePlaceholders
//             imagePlaceholdersFlex="0.6602"
//             imagePlaceholdersMinWidth="240px"
//             perfumeImageContainersAlignSelf="stretch"
//             img="/img-1@2x.png"
//             perfumes="Secure Payment"
//           />
//           <ImagePlaceholders
//             imagePlaceholdersFlex="0.5625"
//             imagePlaceholdersMinWidth="240px"
//             perfumeImageContainersAlignSelf="stretch"
//             img="/img-2@2x.png"
//             perfumes="Free Shipping"
//           />
//           <ImagePlaceholders
//             imagePlaceholdersFlex="0.6133"
//             imagePlaceholdersMinWidth="240px"
//             perfumeImageContainersAlignSelf="stretch"
//             img="/img-3@2x.png"
//             perfumes="1 Year Warranty"
//           />
//         </div>
//       </section>
//       <Footer
//         maskGroup="/mask-group@2x.png"
//         formMargin="0"
//         iconYoutube="/icon--youtube-1.svg"
//         itemImg="/item--img41.svg"
//         itemImg1="/item--img-15.svg"
//         itemImg2="/item--img-25.svg"
//       />
//     </div>
//   );
// };

// export default RealProductDetails
