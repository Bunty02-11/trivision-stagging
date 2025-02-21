import { memo, useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const LocationDateInput = memo(
  ({
    className = "",
    locationDateInputAlignItems,
    findYourService,
    storeLocations,
    storeLocationsDisplay,
    storeLocationsMinWidth,
    selectService,
    selectYourLocation,
    select,
  }) => {
    const locationDateInputStyle = useMemo(() => {
      return {
        alignItems: locationDateInputAlignItems,
      };
    }, [locationDateInputAlignItems]);

    const storeLocationsStyle = useMemo(() => {
      return {
        display: storeLocationsDisplay,
        minWidth: storeLocationsMinWidth,
      };
    }, [storeLocationsDisplay, storeLocationsMinWidth]);

    return (
      <div
        className={`flex-1 flex flex-col items-center justify-start gap-4 min-w-[416px] max-w-full text-left text-xl text-black font-h4-32 mq675:min-w-full ${className}`}
        style={locationDateInputStyle}
      >
        <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-medium font-[inherit] mq450:text-base mq450:leading-[22px]">
          {findYourService}
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-3 text-sm">
          <div className="self-stretch flex flex-row items-center justify-start gap-6 mq675:flex-wrap">
            <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[200px]">
              <div className="h-4 w-4 relative rounded-81xl border-black border-[1px] border-solid box-border hidden" />
              <div
                className="relative leading-[150%] font-medium"
                style={storeLocationsStyle}
              >
                {storeLocations}
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[200px]">
              <div className="h-4 w-4 relative rounded-81xl border-black border-[1px] border-solid box-border hidden" />
              <div className="relative leading-[150%] font-medium">
                {selectService}
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-4 text-gray-400 mq675:flex-wrap">
            <div className="flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-3.5 gap-2.5 min-w-[203px]">
              <div className="flex-1 relative leading-[150%] font-medium">
                {selectYourLocation}
              </div>
              <Image
                className="h-[5px] w-2.5 relative"
                width={10}
                height={5}
                alt=""
                src="/vector7.svg"
              />
            </div>
            <div className="flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-3.5 gap-2.5 min-w-[203px]">
              <div className="flex-1 relative leading-[150%] font-medium">
                {select}
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
      </div>
    );
  }
);

LocationDateInput.propTypes = {
  className: PropTypes.string,
  findYourService: PropTypes.string,
  storeLocations: PropTypes.string,
  selectService: PropTypes.string,
  selectYourLocation: PropTypes.string,
  select: PropTypes.string,

  /** Style props */
  locationDateInputAlignItems: PropTypes.string,
  storeLocationsDisplay: PropTypes.string,
  storeLocationsMinWidth: PropTypes.string,
};

export default LocationDateInput;
