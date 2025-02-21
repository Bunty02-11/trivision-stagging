import FrameComponent1 from "../components/frame-component1";
import GetInTouchContainer from "../components/get-in-touch-container";
import Content1 from "../components/content1";
import FrameComponent8 from "../components/frame-component8";
import JoinWrapper from "../components/join-wrapper";
import Footer from "../components/footer";
import InstaPosts from "../components/insta-posts";
import FaqComponentHome from "../components/faq-component-home";

const Contact = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border leading-[normal] tracking-[normal] mq750:gap-[17px]">
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full text-center text-21xl text-background-color-primary font-h4-32">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-end pt-[340px] px-[284px] pb-[60px] box-border gap-6 bg-[url('/contactbanner.jpg')] bg-cover bg-no-repeat bg-center max-w-full mq480:pl-5 mq480:pr-5 mq480:box-border mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[324px] pr-[323px] mq480:pl-5 mq480:pr-5 mq480:box-border mq1050:pl-[162px] mq1050:pr-[161px] mq1050:box-border">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
              Contact Us
            </h1>
          </div>
          <div className="relative text-base leading-[150%] font-medium">
            Have questions or need assistance? Get in touch with us for any
            concerns regarding our products and services. We're here to help!
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-start pt-[60px] px-5 pb-[60px] mq480:pt-[40px] mq480:pb-[40px] box-border gap-[60px] mq480:gap-[40px] max-w-full mq750:gap-[30px]">
        <GetInTouchContainer />
        <Content1 />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
        <div className="flex justify-center items-center w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1271655317496!2d55.17148827592758!3d25.097556335728335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bac767bf47d%3A0xf30549b870e11ae9!2sTrivision%20Opticals%20-%20Head%20Office!5e0!3m2!1sen!2sin!4v1738838821919!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="border-0 rounded-lg shadow-lg max-w-[8000px] w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <FrameComponent8 />
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
        iconYoutube="/icon--youtube1.svg"
        itemImg="/item--img1.svg"
        itemImg1="/item--img-11.svg"
        itemImg2="/item--img-21.svg"
      />
    </div>
  );
};

export default Contact;
