import { memo } from "react";
import StoreDetails from "./store-details";
import PropTypes from "prop-types";

const FrameComponent8 = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pt-[26px] pb-[60px]  mq480:pb-[40px] box-border max-w-full text-left text-21xl text-background-color-primary font-h4-32 ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-[60px] px-20 box-border bg-[url('/stores.jpg')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:py-[39px] mq750:px-10 mq750:box-border">
        <div className="w-[450px] flex flex-col items-start justify-start gap-10 max-w-full mq480:gap-5">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
            Stores
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 text-lg">
            <StoreDetails
              headingLinkFlowerHeartBra="Trivision Dubai Hills Mall"
              phone=" 058-815-5779"
              email="contact@trivisionoptical.com"
              mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0032496683366!2d55.23735117483431!3d25.10175133556101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bbec2190051%3A0x53b46088ef0a67d0!2sTrivision%20Opticals%20Dubai%20Hills%20Mall%20(%20RTA%20approved%20eye%20test%20centre%20)!5e0!3m2!1sen!2sin!4v1740637833443!5m2!1sen!2sin"
              mapLink="https://www.google.com/maps?q=Trivision+Opticals+Dubai+Hills+Mall"
            />
            <StoreDetails
              headingLinkFlowerHeartBra="Sunglass Time"
              heading3MinWidth="105px"
              phone=" 055-797-7650"
              email="contact@trivisionoptical.com"
              mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1724845823383!2d55.27637482483742!3d25.197405081693375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6937e300f733%3A0x7cf711ec0e4b269e!2sSunglass%20Time%20Dubai%20Mall%20-%20Trivision%20Opticals%20Branch!5e0!3m2!1sen!2sin!4v1740638608200!5m2!1sen!2sin"
              mapLink="https://www.google.com/maps/place/Sunglass+Time+Dubai+Mall+-+Trivision+Opticals+Branch/@25.1974051,55.2763748,17z"
            />
            <StoreDetails
              headingLinkFlowerHeartBra="Trivision Dubai Festival City"
              heading3MinWidth="194px"
              phone="052-993-3206"
              email="contact@trivisionoptical.com"
              mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0032496683366!2d55.23735117483431!3d25.10175133556101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bbec2190051%3A0x53b46088ef0a67d0!2sTrivision%20Opticals%20Dubai%20Hills%20Mall%20(%20RTA%20approved%20eye%20test%20centre%20)!5e0!3m2!1sen!2sin!4v1740637833443!5m2!1sen!2sin"
              mapLink="https://www.google.com/maps?q=Trivision+Opticals+Dubai+Hills+Mall"
            />
            <StoreDetails
              headingLinkFlowerHeartBra="Trivision Dubai Mall"
              heading3MinWidth="141px"
              phone="052-993-3208"
              email="contact@trivisionoptical.com"
              mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4258125715633!2d55.350184524838326!3d25.222579180673193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d6bce5a0d9b%3A0x9f209e7c6377eec4!2sTrivision%20Opticals%20Dubai%20Festival%20City%20(First%20Floor)!5e0!3m2!1sen!2sin!4v1740638955100!5m2!1sen!2sin"
              mapLink="https://www.google.com/maps/place/Trivision+Opticals+Dubai+Festival+City+(First+Floor)"
            />
            <StoreDetails
              headingLinkFlowerHeartBra="1st Floor, Near IKEA"
              heading3MinWidth="194px"
              phone="052-699-2846"
              email="contact@trivisionoptical.com"
              mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0032496683366!2d55.23735117483431!3d25.10175133556101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bbec2190051%3A0x53b46088ef0a67d0!2sTrivision%20Opticals%20Dubai%20Hills%20Mall%20(%20RTA%20approved%20eye%20test%20centre%20)!5e0!3m2!1sen!2sin!4v1740637833443!5m2!1sen!2sin"
              mapLink="https://www.google.com/maps?q=Trivision+Opticals+Dubai+Hills+Mall"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
