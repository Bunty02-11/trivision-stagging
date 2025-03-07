import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const MobileSubMenu = memo(({ className = "", category }) => {
  const router = useRouter();

  const handleNavigation = (slug) => {
    router.push(`/sunglasses/${slug?.toLowerCase()}`);
  };

  const handleNavigationGender = (gender, slug) => {
    router.push(`/${gender}/${slug}`);
  };
  return (
    <div
      className={`w-[1000px] bg-background-color-primary max-w-full overflow-hidden flex flex-col items-center justify-start p-2 box-border gap-2 leading-[normal] tracking-[normal] ${className}`}
    >
      <header className="self-stretch border-gray-800 border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-0 px-0 pb-2.5 gap-4 top-[0] z-[99] sticky max-w-full text-left text-5xl text-black font-h4-32">
        <h2 className="m-0 flex-1 relative leading-[140%] text-sm font-bold inline-block max-w-full">
          SUNGLASSES
        </h2>
      </header>
      <section className="self-stretch flex flex-col items-start justify-start gap-2 text-center text-sm text-black font-h4-32">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div
              className="relative leading-[150%] text-xs uppercase cursor-pointer"
              onClick={() => handleNavigation(category[5]?.slug)}
            >
              All Sunglasses
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div className="relative leading-[150%] text-xs uppercase cursor-pointer">
              Best Sellers
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div className="relative leading-[150%] text-xs uppercase cursor-pointer">
              New Arrivals
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div
              className="relative leading-[150%] text-xs uppercase cursor-pointer"
              onClick={() => handleNavigationGender("Men", category[5]?.slug)}
            >
              For Men
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div
              className="relative leading-[150%] text-xs uppercase cursor-pointer"
              onClick={() => handleNavigationGender("Women", category[5]?.slug)}
            >
              For Women
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div
              className="relative leading-[150%] text-xs uppercase cursor-pointer"
              onClick={() => handleNavigationGender("Kids", category[5]?.slug)}
            >
              For Kids
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-4">
            <Image
              className="h-[226px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[174px]"
              loading="lazy"
              width={268}
              height={226}
              alt=""
              src="/6@2x.png"
            />
            <Image
              className="h-[226px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[174px]"
              loading="lazy"
              width={268}
              height={226}
              alt=""
              src="/menu2Img.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
});

MobileSubMenu.propTypes = {
  className: PropTypes.string,
};

export default MobileSubMenu;
