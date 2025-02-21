import Image from "next/image";
import FrameComponent3 from "../components/frame-component3";
import FiltersAndProducts from "../components/filters-and-products";
import FrameComponent4 from "../components/frame-component4";
import Footer from "../components/footer";

const ProductListing = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-[50px] px-0 pb-0 box-border gap-[34px] leading-[normal] tracking-[normal] text-center text-base text-background-color-primary font-h4-32 mq750:gap-[17px]">
      <FrameComponent3 />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full">
        <div className="flex-1 overflow-hidden flex flex-col items-end justify-end pt-[340px] px-[284px] pb-[60px] box-border gap-6 bg-[url('/banner1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq750:box-border mq480:pl-5 mq480:pr-5 mq480:box-border">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-px pr-0">
            <Image
              className="h-12 w-[92.5px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={93}
              height={48}
              alt=""
              src="/rayban-logosvg.svg"
            />
          </div>
          <div className="relative leading-[150%] font-medium">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-20 pb-[26px] box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
        <FiltersAndProducts />
      </section>
      <FrameComponent4 />
      <Footer
        maskGroup="/mask-group@2x.png"
        formMargin="0"
        iconYoutube="/icon--youtube21.svg"
        itemImg="/item--img3.svg"
        itemImg1="/item--img-13.svg"
        itemImg2="/item--img-23.svg"
      />
    </div>
  );
};

export default ProductListing;
