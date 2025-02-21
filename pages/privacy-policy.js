import { useCallback } from "react";
import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import GetInTouchContainer from "../components/get-in-touch-container";
import Content1 from "../components/content1";
import FrameComponent8 from "../components/frame-component8";
import JoinWrapper from "../components/join-wrapper";
import AccordionItem from "../components/accordion-item";
import AccordionItem1 from "../components/accordion-item1";
import ImagePlaceholders from "../components/image-placeholders";
import Footer from "../components/footer";

const Contact = () => {
  const onAccordionHeaderClick = useCallback((event) => {}, []);

  return (
    <>
      <FrameComponent1 />
      <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border gap-[34px] leading-[normal] tracking-[normal] text-center text-base text-background-color-primary font-h4-32 mq750:gap-[17px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full">
          <div className="flex-1 overflow-hidden flex flex-col items-end justify-end pt-[340px] px-[284px] pb-[60px] box-border gap-6 bg-[url('/banner1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq750:box-border mq480:pl-5 mq480:pr-5 mq480:box-border"></div>
        </div>
        <section className="w-[1440px] flex flex-col items-center justify-center pt-0 px-20 pb-[26px] box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
          <div
            className="w-[1440px] flex flex-col items-center justify-center py-0 pl-px pr-0"
            style={{ color: "black" }}
          >
            <h1>PRIVACY POLICY</h1>
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-center py-0 pl-px pr-0"
            style={{ color: "black", textAlign: "left" }}
          >
            <p>
              At Trivision Opticals, we value and respect the privacy of our
              customers. This Privacy Policy outlines how we collect, use, and
              protect your personal data when you visit our website, engage with
              us through our stores, or subscribe to our services. We are
              committed to ensuring that your personal information is secure and
              used only in the ways described below.
            </p>
            <h3>Information We Collect From You</h3>
            <ul className="list-disc pl-5">
              <li>
                Trivision Opticals collects personal information that you
                provide to us when subscribing to our newsletter, participating
                in surveys or promotions, making purchases, or contacting us
                with questions or concerns. This information may include your
                name, email address, postal address, phone number, gender,
                birthday, personal interests, and any product reviews or ratings
                you submit.
              </li>
              <li>
                Additionally, we collect certain information automatically when
                you interact with our website, such as your IP address, browser
                information, internet service provider (ISP), referring/exit
                pages, operating system, date/time stamp, clickstream data, and
                other trafc patterns and site usage data. This data helps us
                understand how customers use our website and improve your
                browsing experience.
              </li>
            </ul>
            <h3>How We Use Your Personal Data</h3>
            <ul className="list-disc pl-5">
              <li>
                We use the information we collect primarily to communicate with
                you and provide you with services. Your personal data may be
                used for the following purposes:
              </li>
              <li>
                To send you updates, newsletters, and promotional offers via
                email or SMS.
              </li>
              <li>
                To inform you about our products, services, events, and
                promotions.
              </li>
              <li>
                To administer contests, surveys, and other website features
              </li>
              <li>
                To provide you with the products or services you’ve requested,
                such as delivering prizes from contests or promotions.
              </li>
              <li>
                We use automated processing to manage and store your data and
                keep you informed about the services and promotions of Trivision
                Opticals.
              </li>
            </ul>
            <h3>Who Do We Share Information With?</h3>
            <ul className="list-disc pl-5">
              <li>
                We may share your personal information with third parties who
                provide services to support our business operations. These third
                parties are authorized to use your personal information only in
                connection with the services they perform on our behalf. We do
                not sell, trade, or rent your personal information to any third
                parties, except as described in this policy. These third-party
                services may include:
              </li>
              <li>Marketing and public relations</li>
              <li>Distribution of promotional materials</li>
              <li>Survey, sweepstakes, and contest administration</li>
              <li>Website evaluation and data analysis</li>
            </ul>
            <h3>Security of Your Information</h3>
            <ul className="list-disc pl-5">
              <li>
                At Trivision Opticals, we are committed to protecting your
                privacy. We ensure that all credit/debit card details and
                personally identiable information are not stored, sold, shared,
                rented, or leased to any third parties
              </li>
            </ul>
            <h3>Changes to This Privacy Policy</h3>
            <ul className="list-disc pl-5">
              <li>
                TThe policies outlined in this Privacy Policy may change or be
                updated periodically to meet new requirements and standards. We
                encourage you to visit this page frequently to stay updated on
                any changes. Modications will be effective immediately upon
                posting.
              </li>
            </ul>
            <h3>Legal Compliance</h3>
            <ul className="list-disc pl-5">
              <li>
                Any purchase, dispute, or claim arising from or related to this
                website shall be governed and construed in accordance with the
                laws of the UAE
              </li>
            </ul>
            <h3>How to Contact Us</h3>
            <ul className="list-disc pl-5">
              <li>
                If you have any questions or comments regarding our privacy
                policy, please feel free to contact us at:
              </li>
              <li> Phone Number: 05-58-815-5795</li>
              <li>E-mail Address: contact@trivisionoptical.com</li>
              <li>
                Business Address: Trivision Opticals Ofce 601, Icon Tower,
                Tecom, Al Barsha Heights, Dubai, U.A.E.
              </li>
            </ul>
          </div>
        </section>
        <Footer
          maskGroup="/mask-group@2x.png"
          formMargin="0"
          iconYoutube="/icon--youtube21.svg"
          itemImg="/item--img3.svg"
          itemImg1="/item--img-13.svg"
          itemImg2="/item--img-14.svg"
        />
      </div>
    </>
  );
};

export default Contact;
