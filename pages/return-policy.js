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
            <h1>RETURNS AND EXCHANGE</h1>
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-center py-0 pl-px pr-0"
            style={{ color: "black", textAlign: "left" }}
          >
            <p>
              At TriVision Opticals, we are dedicated to making sure you are
              fully satised with your purchase. We understand that sometimes
              things don't go as expected, which is why we've created a
              straightforward and transparent returns and exchange process.
              Please take a moment to review our policy to ensure a seamless
              return experience.
            </p>
            <h3>Return Eligibility</h3>
            <ul className="list-disc pl-5">
              <li>
                To initiate a return, the item must meet all of the following
                conditions:
              </li>
            </ul>
            <h3>Return Conrmation: </h3>
            <ul className="list-disc pl-5">
              <li>
                Before sending back any items, you must rst receive a return
                conrmation. To request this conrmation, please complete and
                submit our online return form. This step is crucial in ensuring
                that we can process your return efciently.
              </li>
            </ul>
            <h3>Time Frame:</h3>
            <ul className="list-disc pl-5">
              <li>
                Returns must be initiated within 7 days from the date we accept
                your return request. We encourage you to act promptly to ensure
                a hassle-free return experience.
              </li>
            </ul>
            <h3>Original Packaging:</h3>
            <ul className="list-disc pl-5">
              <li>
                All items must be returned in their original packaging. This
                ensures that the items are protected during transport and arrive
                back in our facility in good condition.
              </li>
            </ul>
            <h3>Unused Condition:</h3>
            <ul className="list-disc pl-5">
              <li>
                The item must be unused, clean, and free from any damage.
                Unfortunately, items showing signs of wear or use cannot be
                accepted for return. We encourage you to try on eyewear
                carefully to ensure you’re making the right choice.
              </li>
            </ul>
            <h3>Complete Set:</h3>
            <ul className="list-disc pl-5">
              <li>
                When returning an item, please ensure that all parts,
                accessories, and documentation that were originally included
                with the product are included in the return package. This helps
                us process your return more efciently.
              </li>
            </ul>
            <h3>Shipment Notication:</h3>
            <ul className="list-disc pl-5">
              <li>
                It is essential to notify us on the same day you ship back the
                item. If possible, please conrm the tracking number so we can
                monitor the return’s progress.
              </li>
            </ul>
            <h3>Inspection and Acceptance</h3>
            <ul className="list-disc pl-5">
              <li>
                Upon receipt of your returned item, our team will conduct a
                thorough inspection to ensure it complies with all return
                conditions. If the item does not meet the outlined criteria, we
                will not be able to accept the return. In such cases, you will
                have the option to request the return of the item in its
                original condition at your expense within 7 days of our
                notication.
              </li>
            </ul>
            <h3>Exchanges</h3>
            <ul className="list-disc pl-5">
              <li>
                Exchanges can only be processed once we have received and
                inspected the returned item. To request an exchange, please
                follow the return process outlined above. Once we conrm that
                your return meets all conditions, we will facilitate the
                exchange. Please note that exchanges may take additional time
                based on availability.
              </li>
            </ul>
            <h3>Exchanges</h3>
            <ul className="list-disc pl-5">
              <li>
                Exchanges can only be processed once we have received and
                inspected the returned item. To request an exchange, please
                follow the return process outlined above. Once we conrm that
                your return meets all conditions, we will facilitate the
                exchange. Please note that exchanges may take additional time
                based on availability.
              </li>
            </ul>
            <h3>Important Note on Lenses</h3>
            <ul className="list-disc pl-5">
              <li>
                If you are returning a frame, please be aware that the lenses
                are not refundable. However, if you wish to change the color of
                the frame, we can adapt the existing lenses to t the new frame,
                provided that the frame is the same size. This ensures you get
                the most out of your purchase while maintaining your vision
                needs.
              </li>
            </ul>
            <h3>Shipping Costs</h3>
            <ul className="list-disc pl-5">
              <li>
                Please note that all shipping costs associated with the return
                are the responsibility of the customer. This means you will need
                to cover the costs for sending the item back to us. We do not
                charge any restocking fees at TriVision Opticals, making our
                returns process as customer-friendly as possible.
              </li>
            </ul>
            <h3>Final Conditions</h3>
            <ul className="list-disc pl-5">
              <li>
                We cannot issue refunds for returns that do not meet all specied
                conditions. Instead, you will have the opportunity to reclaim
                the item in the same condition it was received at your cost
                within 7 days of our notication. This policy ensures that we
                maintain high standards of quality and service for all our
                customers.
              </li>
            </ul>
            <h3>Processing Time</h3>
            <ul className="list-disc pl-5">
              <li>
                Once we receive a return that complies with our policy, we will
                process your request within 3 business days. Please note that
                any refunds or exchanges will only be processed through the
                original method of payment. Depending on your bank or credit
                card provider, your account should be credited within
                approximately 15 days from the date of the return.
              </li>
            </ul>
            <h3>Customer Support</h3>
            <ul className="list-disc pl-5">
              <li>
                We appreciate your understanding and cooperation in adhering to
                these guidelines, as they help us maintain a high standard of
                quality and service for all our customers. For any questions or
                further assistance, please don’t hesitate to reach out to our
                customer service team. We are here to help and ensure that your
                experience with Trivision Optical is a positive one.
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
