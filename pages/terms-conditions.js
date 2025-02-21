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
            <h1>TERMS AND CONDITIONS</h1>
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
            <h3>Terms 1.0 Electronic Communications</h3>
            <ul className="list-disc pl-5">
              <li>
                When you visit this Site, or send us emails, you are
                communicating with us electronically. You consent to receive
                communications from us electronically. We will communicate with
                you by email or by posting notices on this Site. You agree that
                all agreements, notices, disclosures, and other communications
                that we provide to you electronically satisfy any legal
                requirement that such communication be in writing.
              </li>
            </ul>
            <h3>Terms 2.0 Copyrights</h3>
            <ul className="list-disc pl-5">
              <li>
                Images of people, places, and/or products posted on this Site
                are either the property of Trivision Optical “The Company”, or
                are used herein with express permission of Trivision Optical.
                Unless otherwise noted, all content included on this Site,
                including images, illustrations, designs, icons, photographs,
                video clips, and written and other materials, is the property of
                Trivision Optical or its vendors, partners, or afliates. Any
                unauthorized use of any content or materials on this Site is
                strictly prohibited and may violate copyright and trademark laws
                and/or the laws of privacy, publicity, and/or communications
                regulations and statutes. Any use of the materials or content on
                this Site can be made only with the prior written and express
                authorization of Trivision Optical. For further information on
                how you may obtain authorization to use any materials or content
                on this Site, please contact the Company at the “Contact Us”
                section of this Site.
              </li>
            </ul>
            <h3>Terms 3.0 Trademarks</h3>
            <ul className="list-disc pl-5">
              <li>
                All trademarks and service marks and their respective designs
                and/or logos on this Site are trademarks or registered
                trademarks of Trivision Optical. Those trademarks may not be
                copied, imitated or used, in whole or in part, without the prior
                written permission of Trivision Optical. In addition, all page
                headers, custom graphics, button icons, and scripts are
                trademarks of the Company, and may not be copied, imitated, or
                used, in whole or in part, without the prior written permission
                of the Company.
              </li>
              <li>
                All other trademarks, registered trademarks, product names and
                company names or logos used in this Site are the property of
                their respective owners. You may not use any trademarks, service
                marks or intellectual property of the Company or its afliates,
                nor may you place any meta tags or any other “hidden text”
                utilizing the Company’s or its afliate’s names, trademarks, or
                product names without our express written consent.
              </li>
            </ul>
            <h3>Terms 4.0 License and Site Access</h3>
            <ul className="list-disc pl-5">
              <li>
                We grant you a limited license to make personal use only of the
                Site. Such grant does not include, without limitation:
              </li>
              <li>
                {" "}
                any resale or commercial use of this Site or any of the contents
                of this Site;
              </li>
              <li>
                modication, adaptation, translation, reverse engineering,
                disassembly or conversion into human readable form any of the
                contents of this Site not intended to be so read, including use
                of or directly viewing the underlying HTML or other code from
                this Site except as interpreted and displayed in a web browser;
              </li>
              <li>
                {" "}
                copying, imitating, mirroring, reproducing, distributing,
                publishing, downloading, displaying, performing, posting or
                transmitting any of the contents of this Site (including any
                Company trademarks) in any form or by any means, including, but
                not limited to, electronic, mechanical, photocopying, recording
                or otherwise;
              </li>
              <li>
                the collection and use of any product listings or descriptions;
              </li>
              <li>
                making derivative uses of the Site and any of the contents of
                the Site; or
              </li>
              <li>
                use of any data mining, bots, spiders, automated tools or
                similar data gathering and extraction methods, directly or
                indirectly, on the contents of the Site or to collect any
                information from the Site or any other user of the Site.
              </li>
            </ul>
            <h3>Terms 5.0 Hyperlinks</h3>
            <ul className="list-disc pl-5">
              <li>
                Trivision Optical makes no claim or representation regarding,
                and accepts no responsibility for, the quality, content, nature
                or reliability of web sites accessible by hyperlink from this
                Site, or web sites linking to this Site.
              </li>
            </ul>
            <h3>
              Terms 6.0 Disclaimer of Warranties and Limitation of Liability
            </h3>
            <ul className="list-disc pl-5">
              <li>
                This site and all contents of the site are provided on an “as
                is” basis without warranties of any kind, either express or
                implied the company disclaims any and all warranties of any
                kind, either express or implied, including without limitation
                implied and/or express warranties of title, merchantability,
                tness for a particular purpose and non-infringement with respect
                to the site and materials, content, services and products on
                this site.
              </li>
              <li>
                The company makes no representations or warranties that this
                site and/or its contents are accurate, complete, reliable,
                current or error-free. The company is not responsible for
                typographical errors or omissions relating to pricing, text,
                photography or any other contents on this site. The company
                makes no representations or warranties that this site or its
                server(s) are free of viruses or other harmful components.
              </li>
              <li>
                The foregoing disclaimers apply even if the company or its
                authorized representatives have been advised of the possibility
                of any damages arising out of or related in any way to this site
                and/or its contents. By using this site you expressly agree that
                all use you may make of this site, including all use of
                associated content, data or software distributed by, downloaded
                or accessed from or through this site, is made solely at your
                own risk.
              </li>
              <li>
                In no event shall the company, subsidiaries or afliates be
                liable for any direct, special, punitive, exemplary, indirect or
                consequential damages, or any other damages of any kind,
                including but not limited to loss of use, loss of prots, or loss
                of data.
              </li>
            </ul>
            <h3>Terms 7.0 Site Policies, Modication and Severability</h3>
            <ul className="list-disc pl-5">
              <li>
                We reserve the right to make changes to this Site, our Privacy
                Statement, and these Site Terms at any time. If any of these
                Site Terms shall be deemed invalid, void, or for any reason
                unenforceable, that term shall be deemed severable and shall not
                affect the validity and enforceability of any remaining term or
                condition.
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
