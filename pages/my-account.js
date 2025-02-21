import Image from "next/image";
import Banner1 from "../components/banner1";
import Left from "../components/left";
import Right from "../components/right";
import Footer from "../components/footer";


const MyAccount = () => {
  
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-xs text-background-color-primary font-h4-32">
      <Banner1 />
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[60px] px-20 box-border max-w-full mq1050:pt-[39px] mq1050:pb-[39px] mq1050:box-border mq750:py-[25px] mq750:px-10 mq750:box-border">
        <div className="self-stretch flex flex-row items-start justify-center gap-[60px] max-w-full lg:flex-wrap mq750:gap-[30px]">
          <Left />
          <Right />
        </div>
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        formMargin="unset"
        iconYoutube="/icon--youtube-1.svg"
        itemImg="/item--img5.svg"
        itemImg1="/item--img-17.svg"
        itemImg2="/item--img-27.svg"

      />
    </div>
  );
};

export default MyAccount;
