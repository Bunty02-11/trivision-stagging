import { memo } from "react";
import Image from "next/image";
import LocationDateInput from "./location-date-input";
import Content2 from "./content2";
import PropTypes from "prop-types";

const BookEyeTest = memo(({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] max-w-full flex flex-col items-start justify-start leading-[normal] tracking-[normal] ${className}`}
    >
      <header className="self-stretch bg-whitesmoke-100 border-gray-800 border-b-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-between pt-[18px] px-20 pb-4 top-[0] z-[99] sticky max-w-full gap-5 text-left text-base text-black font-h4-32 mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <Image
            className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            width={186}
            height={36}
            alt=""
            src="/logo@2x.png"
          />
        </div>
        <div className="hidden flex-row items-center justify-start gap-6 max-w-full">
          <div className="relative leading-[150%] font-semibold">
            Don’t know your prescription?
          </div>
          <div className="flex flex-row items-center justify-center gap-3 text-right">
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              width={24}
              height={24}
              alt=""
            />
            <div className="relative leading-[150%] font-medium opacity-[0.6]">
              Book an Eye Test
            </div>
          </div>
        </div>
        <Image
          className="h-11 w-11 relative overflow-hidden shrink-0"
          loading="lazy"
          width={44}
          height={44}
          alt=""
          src="/basilcrossoutline.svg"
        />
      </header>
      <section className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-10 px-[60px] pb-[60px] box-border gap-6 max-w-full text-left text-21xl text-black font-h4-32 mq750:pt-[26px] mq750:px-[30px] mq750:pb-[39px] mq750:box-border">
        <div className="flex flex-col items-start justify-start gap-6 max-w-full">
          <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] mq450:text-5xl mq450:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
            Book an Eye Test
          </h1>
          <div className="relative text-base leading-[150%] font-medium hidden max-w-full">
            The Premier Opticians since 1962, delivering professional and
            personal eye care with the promise of expert aftercare for life.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full mq675:gap-5">
          <form className="m-0 self-stretch overflow-y-auto flex flex-col items-start justify-start gap-6 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-10 max-w-full mq675:gap-5">
              <LocationDateInput
                findYourService="1 - Find Your Service"
                storeLocations="Store Locations"
                selectService="Select Service"
                selectYourLocation="Select your location"
                select="Select"
              />
              <LocationDateInput
                locationDateInputAlignItems="flex-start"
                findYourService={`2 - Select Date & Time`}
                storeLocations="Date"
                storeLocationsDisplay="inline-block"
                storeLocationsMinWidth="36px"
                selectService="Time"
                selectYourLocation="Select your date"
                select="Select your time"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
              <h3 className="m-0 relative text-xl leading-[140%] font-medium font-h4-32 text-black text-left mq450:text-base mq450:leading-[22px]">
                3 - Your Details
              </h3>
              <Content2
                firstName="First Name"
                lastName="Last Name"
                vector="/pending_894:4192"
                vector1="/pending_894:4195"
              />
              <Content2
                firstName="Email"
                firstNameMinWidth="42px"
                lastName="Phone"
                lastNameDisplay="unset"
                lastNameMinWidth="unset"
                vector="/pending_897:4230"
                vector1="/pending_897:4233"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-3 max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start max-w-full mq675:gap-5">
                  <div className="flex-1 flex flex-row items-center justify-start gap-2 max-w-full">
                    <div className="h-4 w-4 relative rounded-81xl border-black border-[1px] border-solid box-border hidden" />
                    <div className="relative text-sm leading-[150%] font-medium font-h4-32 text-black text-left inline-block min-w-[92px]">
                      Date of birth
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-10 max-w-full mq675:gap-5">
                  <div className="flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-3.5 gap-2.5 min-w-[310px] max-w-full">
                    <div className="flex-1 relative text-sm leading-[150%] font-medium font-h4-32 text-gray-400 text-left inline-block max-w-[calc(100%_-_20px)]">
                      Day
                    </div>
                    <Image
                      className="h-[5px] w-2.5 relative"
                      width={10}
                      height={5}
                      alt=""
                      src="/vector-4.svg"
                    />
                  </div>
                  <div className="flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 pl-[15px] pr-3.5 gap-2.5 min-w-[310px] max-w-full">
                    <div className="flex-1 relative text-sm leading-[150%] font-medium font-h4-32 text-gray-400 text-left inline-block max-w-[calc(100%_-_20px)]">
                      Month
                    </div>
                    <Image
                      className="h-[5px] w-2.5 relative"
                      width={10}
                      height={5}
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                  <div className="flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-3.5 gap-2.5 min-w-[310px] max-w-full">
                    <div className="flex-1 relative text-sm leading-[150%] font-medium font-h4-32 text-gray-400 text-left inline-block max-w-[calc(100%_-_20px)]">
                      Year
                    </div>
                    <Image
                      className="h-[5px] w-2.5 relative"
                      width={10}
                      height={5}
                      alt=""
                      src="/vector7.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-center justify-start gap-2">
                <div className="relative rounded-81xl border-black border-[1px] border-solid" />
                <div className="relative text-sm leading-[150%] font-medium font-h4-32 text-black text-left">
                  Please send me appointment notifications by SMS
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-col items-start justify-start gap-4">
              <div className="relative text-xl leading-[140%] font-medium font-h4-32 text-black text-left mq450:text-base mq450:leading-[22px]">
                4 - Your Privacy
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="relative text-sm leading-[150%] text-black text-left">
                    <p className="m-0">
                      <span className="font-medium font-h4-32">
                        I agree that my information can be used to send me news,
                        special offers and other marketing communications via
                        e-mails, phone or postal services.
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-medium font-h4-32">(Visit </span>
                      <a
                        className="text-[inherit]"
                        href="https://www.davidclulow.com/en-uk/c/legal/legal-policies"
                        target="_blank"
                      >
                        <span className="font-medium font-h4-32">
                          <span className="[text-decoration:underline]">
                            Privacy Policy
                          </span>
                        </span>
                      </a>
                      <span className="font-medium font-h4-32">).</span>
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-4 mq450:flex-wrap">
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div className="relative rounded-81xl border-black border-[1px] border-solid" />
                    <div className="relative text-sm leading-[150%] font-medium font-h4-32 text-black text-left">
                      Yes
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div className="relative rounded-81xl border-black border-[1px] border-solid" />
                    <div className="relative text-sm leading-[150%] font-medium font-h4-32 text-black text-left">
                      No
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="relative text-sm leading-[150%] text-black text-left">
                    <p className="m-0">
                      <span className="font-medium font-h4-32">
                        I agree to the profiling of my activity to receive
                        offers based on my interest and order history.
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-medium font-h4-32">(Visit </span>
                      <a
                        className="text-[inherit]"
                        href="https://www.davidclulow.com/en-uk/c/legal/legal-policies"
                        target="_blank"
                      >
                        <span className="font-medium font-h4-32">
                          <span className="[text-decoration:underline]">
                            Privacy Policy
                          </span>
                        </span>
                      </a>
                      <span className="font-medium font-h4-32">).</span>
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-4 mq450:flex-wrap">
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div className="relative rounded-81xl border-black border-[1px] border-solid" />
                    <div className="relative text-sm leading-[150%] font-medium font-h4-32 text-black text-left">
                      Yes
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div className="relative rounded-81xl border-black border-[1px] border-solid" />
                    <div className="relative text-sm leading-[150%] font-medium font-h4-32 text-black text-left">
                      No
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[214px] bg-black overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-[39px] box-border">
              <div className="flex-1 relative text-xs leading-[150%] font-medium font-h4-32 text-background-color-primary text-center">
                BOOK APPOINTMENT
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
});

BookEyeTest.propTypes = {
  className: PropTypes.string,
};

export default BookEyeTest;
