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
            <h1>SHIPPING AND DELIVERY</h1>
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-center py-0 pl-px pr-0"
            style={{ color: "black", textAlign: "left" }}
          >
            <p>
              At Trivision Opticals, we are committed to delivering your orders
              quickly and efficiently across the UAE and GCC. Below are the
              details of our shipping and delivery process:
            </p>
            <h3>Delivery Within the UAE and GCC</h3>
            <ul className="list-disc pl-5">
              <li>
                Trivision Opticals offers free shipping within the UAE and GCC
                for orders with a minimum value of 150 AED/SAR. Orders below
                this amount will incur a shipping charge.
              </li>
              <li>
                We deliver your orders straight to your doorstep across the UAE
                and GCC.
              </li>
              <li>
                Please ensure your address is correct before proceeding with
                payment. We will not be responsible for any reshipment due to
                incorrect address information provided.
              </li>
            </ul>
            <h3>Payment & Collection Options</h3>
            <ul className="list-disc pl-5">
              <li>
                You also have the option to pay online and collect your item
                from our store. Proof of identity will be required upon receipt,
                such as a valid photo ID card or a photo of your passport.
              </li>
            </ul>
            <h3>Delivery Conrmation</h3>
            <ul className="list-disc pl-5">
              <li>
                Our courier company will contact you ahead of delivery to conrm
                your availability.
              </li>
              <li>
                Please make sure that your provided contact number is correct
                and active.
              </li>
            </ul>
            <h3>Need Assistance?</h3>
            <ul className="list-disc pl-5">
              <li>
                If you have any queries regarding your order, delivery, or need
                further assistance, please don't hesitate to reach out to our
                Customer Service team at:
              </li>
              <li>
                Email:{" "}
                <a
                  style={{ color: "black", underliene: "none" }}
                  href="contact@trivisionoptical.com"
                >
                  contact@trivisionoptical.com
                </a>
              </li>
              <li>
                Phone: <a> 058-815-5795</a>
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
