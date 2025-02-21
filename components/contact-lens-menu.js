import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const ContactLensMenu = memo(({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-whitesmoke-100 max-w-full overflow-hidden flex flex-col items-center justify-start p-10 box-border leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-6 max-w-full text-center text-sm text-black font-h4-32">
        <div className="flex-1 flex flex-row items-start justify-start min-w-[434px] max-w-full [row-gap:20px] mq554:min-w-full mq614:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[217px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium">
                COLORED CONTACT LENSES
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium">
                BRAND 1
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium">
                BRAND 2
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium">
                BRAND 3
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium inline-block min-w-[69px]">
                BRAND 4
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium">
                BRAND 5
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[217px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium">
                CLEAR CONTACT LENSES
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium">
                BRAND 1
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium">
                BRAND 2
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium">
                BRAND 3
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium inline-block min-w-[69px]">
                BRAND 4
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div className="relative leading-[150%] uppercase font-medium">
                BRAND 5
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[434px] max-w-full mq554:min-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq614:flex-wrap">
            <Image
              className="h-[152px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[212px]"
              loading="lazy"
              width={326}
              height={152}
              alt=""
              src="/rectangle-55@2x.png"
            />
            <Image
              className="h-[152px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[212px]"
              loading="lazy"
              width={326}
              height={152}
              alt=""
              src="/rectangle-56@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full mq614:flex-wrap">
            <Image
              className="h-[152px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[212px]"
              loading="lazy"
              width={326}
              height={152}
              alt=""
              src="/rectangle-55-1@2x.png"
            />
            <Image
              className="h-[152px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[212px]"
              loading="lazy"
              width={326}
              height={152}
              alt=""
              src="/rectangle-56-1@2x.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
});

ContactLensMenu.propTypes = {
  className: PropTypes.string,
};

export default ContactLensMenu;
