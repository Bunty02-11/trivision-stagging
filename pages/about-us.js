import FrameComponent1 from "../components/frame-component1";
import FrameComponent11 from "../components/frame-component11";
import FrameComponent10 from "../components/frame-component10";
import Ideology from "../components/ideology";
import JoinWrapper from "../components/join-wrapper";
import FaqComponentHome from "../components/faq-component-home";
import InstaPosts from "../components/insta-posts";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start px-0 pb-0 box-border leading-[normal] tracking-[normal] mq750:gap-[17px]">
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-[26px] box-border max-w-full text-center text-21xl text-background-color-primary font-h4-32">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-end pt-[340px] px-[284px] pb-[60px] box-border gap-6 bg-[url('/aboutBanner.jpg')] bg-cover bg-no-repeat bg-[top] max-w-full mq480:pl-5 mq480:pr-5 mq480:box-border mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq750:box-border">
          <div className="w-full max-w-[1200px] flex flex-row items-center justify-center items-start justify-start py-0 px-[341px] mq480:pl-5 mq480:pr-5 mq480:box-border mq1100:pl-[170px] mq1100:pr-[170px] mq1100:box-border">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
              About Us
            </h1>
          </div>
          <div className="relative text-base leading-[150%] font-medium">
            Founded in 2008, Trivision Opticals’ journey started with a small
            kiosk at the Mall of the Emirates. We have been on a mission to
            provide both UAE and GCC with the finest high-end and luxury brand
            eyewear. Over the past 16 years, we’ve expanded and partnered with
            well-known shopping malls in the region to cater to more customers
            with an excellent choice of luxury eyewear. Since then, we’ve become
            a go-to destination for renowned fashion and sports brands, and
            iconic luxury labels.
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[26px] box-border max-w-full">
        <FrameComponent11 />
      </section>
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[26px] box-border max-w-full text-left text-5xl text-background-color-primary font-h4-32 mq750:pl-10 mq750:pr-10 mq750:box-border ">
        <div className="flex-1 flex flex-row items-center justify-center flex-wrap content-start gap-10 max-w-full mq750:gap-5">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-end pt-[243px] pb-10 pl-10 pr-5 box-border gap-4 bg-[url('/mission@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[403px] max-w-full mq480:pt-[158px] mq480:pb-[26px] mq480:box-border mq750:min-w-full">
            <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-lgi mq480:leading-[23px]">
              Mission
            </h2>
            <div className="w-[540px] relative text-base leading-[150%] font-medium flex items-center max-w-full">
              At Trivision Opticals, we firmly believe eyewear is more than just
              a necessity; it’s a reflection of individuality. Our mission is to
              provide the finest eyewear brands that promote self-expression,
              and help customers view the world with confidence, clarity, and
              sophistication.
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-end pt-[243px] pb-10 pl-10 pr-5 box-border gap-4 bg-[url('/vision@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[403px] max-w-full mq480:pt-[158px] mq480:pb-[26px] mq480:box-border mq750:min-w-full">
            <h2 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-lgi mq480:leading-[23px]">
              Vision
            </h2>
            <div className="w-[540px] relative text-base leading-[150%] font-medium flex items-center max-w-full">
              Trivision Opticals’ vision is to be the leading destination for
              branded and luxury eyewear and to create a world where fashion
              meets function for every face we serve. We aim to boost everyone’s
              confidence through premium eyewear, setting a new standard for
              excellence.
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[26px] box-border max-w-full">
        <FrameComponent10 />
        <Ideology />
      </section>
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-10 pb-[60px] gap-[60px] mq480:pb-[40px] mq480:px-3 box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-[39px] mq750:box-border">
        <JoinWrapper
          joinWrapperPadding="0px 20px 0px 0px"
          joinWrapperFlex="unset"
          joinWrapperAlignSelf="unset"
          emptyPlaceholders="/8@2x.png"
          emptyPlaceholders1="/7@2x.png"
          emptyPlaceholders2="/6@2x.png"
          emptyPlaceholders3="/5@2x.png"
        />
        <FaqComponentHome />
        <InstaPosts />
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        formMargin="unset"
        iconYoutube="/icon--youtube-1.svg"
        itemImg="/item--img-14.svg"
        itemImg1="/item--img-16.svg"
        itemImg2="/item--img-26.svg"
      />
    </div>
  );
};

export default About;
