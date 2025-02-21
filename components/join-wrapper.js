import { memo, useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const JoinWrapper = memo(
  ({
    className = "",
    joinWrapperPadding,
    joinWrapperFlex,
    joinWrapperAlignSelf,
    emptyPlaceholders,
    emptyPlaceholders1,
    emptyPlaceholders2,
    emptyPlaceholders3,
  }) => {
    const joinWrapperStyle = useMemo(() => {
      return {
        padding: joinWrapperPadding,
        flex: joinWrapperFlex,
        alignSelf: joinWrapperAlignSelf,
      };
    }, [joinWrapperPadding, joinWrapperFlex, joinWrapperAlignSelf]);
    const handleSocialIcons = (path) => {
      window.open(path, "_blank", "noopener,noreferrer");
    };
    return (
      <div
        className={`flex flex-col items-start justify-start py-0 pl-0 box-border gap-10 max-w-full text-left text-21xl text-black font-h4-32 mq750:gap-5 mq480:gap-10 ${className}`}
        style={joinWrapperStyle}
      >
        <div className="self-stretch flex flex-row items-start justify-start mq480:justify-center flex-wrap content-start gap-4  max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit mq480:text-center leading-[120%] font-medium font-[inherit] inline-block min-w-[286px] max-w-full mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
            Join Us @trivision
          </h1>
          <div className="flex flex-col items-start justify-start  pt-1 px-0 pb-0 text-center text-base text-background-color-primary">
            <div
              className="self-stretch bg-black overflow-hidden flex flex-row items-start justify-start py-2 pl-6 pr-[23px] cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
              onClick={() =>
                handleSocialIcons("https://www.instagram.com/trivisionoptical/")
              }
            >
              <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[102px]">
                FOLLOW US
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-2 mq480:gap-4 mq480:grid-cols-[minmax(235px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(235px,_408px))]">
          <Image
            className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq480:w-full"
            loading="lazy"
            width={314}
            height={290}
            alt=""
            src={emptyPlaceholders}
          />
          <Image
            className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq480:w-full"
            loading="lazy"
            width={314}
            height={290}
            alt=""
            src={emptyPlaceholders1}
          />
          <Image
            className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq480:w-full"
            loading="lazy"
            width={314}
            height={290}
            alt=""
            src={emptyPlaceholders2}
          />
          <Image
            className="h-[290px] flex-1 relative max-w-[314px] overflow-hidden object-cover min-w-[289px] mq480:w-full"
            loading="lazy"
            width={314}
            height={290}
            alt=""
            src={emptyPlaceholders3}
          />
        </div>
      </div>
    );
  }
);

JoinWrapper.propTypes = {
  className: PropTypes.string,
  emptyPlaceholders: PropTypes.string.isRequired,
  emptyPlaceholders1: PropTypes.string.isRequired,
  emptyPlaceholders2: PropTypes.string.isRequired,
  emptyPlaceholders3: PropTypes.string.isRequired,

  /** Style props */
  joinWrapperPadding: PropTypes.string,
  joinWrapperFlex: PropTypes.string,
  joinWrapperAlignSelf: PropTypes.string,
};

export default JoinWrapper;
