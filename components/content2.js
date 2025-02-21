import { memo, useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const Content2 = memo(
  ({
    className = "",
    firstName,
    firstNameMinWidth,
    lastName,
    lastNameDisplay,
    lastNameMinWidth,
    vector,
    vector1,
  }) => {
    const firstNameStyle = useMemo(() => {
      return {
        minWidth: firstNameMinWidth,
      };
    }, [firstNameMinWidth]);

    const lastNameStyle = useMemo(() => {
      return {
        display: lastNameDisplay,
        minWidth: lastNameMinWidth,
      };
    }, [lastNameDisplay, lastNameMinWidth]);

    return (
      <div
        className={`self-stretch flex flex-col items-start justify-start gap-3 max-w-full text-left text-sm text-black font-h4-32 ${className}`}
      >
        <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-10 max-w-full mq675:gap-5">
          <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[416px] max-w-full mq675:min-w-full">
            <div className="h-4 w-4 relative rounded-81xl border-black border-[1px] border-solid box-border hidden" />
            <div
              className="relative leading-[150%] font-medium inline-block min-w-[80px]"
              style={firstNameStyle}
            >
              {firstName}
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[416px] max-w-full mq675:min-w-full">
            <div className="h-4 w-4 relative rounded-81xl border-black border-[1px] border-solid box-border hidden" />
            <div
              className="relative leading-[150%] font-medium inline-block min-w-[78px]"
              style={lastNameStyle}
            >
              {lastName}
            </div>
          </div>
        </div>
        <div className="self-stretch h-10 flex flex-row items-center justify-start gap-10 max-w-full mq675:gap-5">
          <div className="self-stretch flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-1 px-4 gap-2.5 max-w-full mq675:min-w-full">
            <div className="relative leading-[150%] font-medium hidden opacity-[0.6]">
              Select your date
            </div>
            <Image
              className="h-[5px] w-2.5 relative hidden"
              width={10}
              height={5}
              alt=""
              src={vector}
            />
          </div>
          <div className="self-stretch flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-1 px-4 gap-2.5 max-w-full mq675:min-w-full">
            <div className="relative leading-[150%] font-medium hidden opacity-[0.6]">
              Select your time
            </div>
            <Image
              className="h-[5px] w-2.5 relative hidden"
              width={10}
              height={5}
              alt=""
              src={vector1}
            />
          </div>
        </div>
      </div>
    );
  }
);

Content2.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  vector: PropTypes.string.isRequired,
  vector1: PropTypes.string.isRequired,

  /** Style props */
  firstNameMinWidth: PropTypes.string,
  lastNameDisplay: PropTypes.string,
  lastNameMinWidth: PropTypes.string,
};

export default Content2;
