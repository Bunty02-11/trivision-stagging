import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const Menu = memo(({ className = "", category }) => {
  const router = useRouter();

  const handleNavigation = (slug) => {
    router.push(`/sunglasses/${slug?.toLowerCase()}`);
  };

  const handleNavigationNewArrivals = (slug) => {
    router.push(`/New-Arraivals/${slug}`);
  };

  const handleNavigationBestSeller = (slug) => {
    router.push(`/Best-Seller/${slug}`);
  };

  const handleNavigationGender = (gender, slug) => {
    router.push(`/${gender}/${slug}`);
  };

  return (
    <div
      className={`w-[1000px] bg-background-color-primary max-w-full overflow-hidden flex flex-col items-center justify-start p-6 box-border gap-4 leading-[normal] tracking-[normal] ${className}`}
    >
      <header className="self-stretch border-gray-800 border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-0 px-0 pb-2.5 gap-4 top-[0] z-[99] sticky max-w-full text-left text-5xl text-black font-h4-32">
        <h2 className="m-0 flex-1 relative text-inherit leading-[140%] font-medium font-[inherit] inline-block max-w-full">
          SUNGLASSES
        </h2>
      </header>
      <section className="self-stretch flex flex-col items-start justify-start gap-6 text-center text-sm text-black font-h4-32">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div
              className="relative leading-[150%] uppercase font-medium cursor-pointer"
              onClick={() => handleNavigation(category[5]?.slug)}
            >
              ALL SUNGLASSES
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div
              className="relative leading-[150%] uppercase font-medium inline-block min-w-[105px] cursor-pointer"
              onClick={() => handleNavigationBestSeller(category[5]?.slug)}
            >
              BEST SELLERS
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div
              className="relative leading-[150%] uppercase font-medium cursor-pointer"
              onClick={() => handleNavigationNewArrivals(category[5]?.slug)}
            >
              NEW ARRIVALS
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div
              className="relative leading-[150%] uppercase font-medium cursor-pointer"
              onClick={() => handleNavigationGender("Men", category[5]?.slug)}
            >
              FOR MEN
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div
              className="relative leading-[150%] uppercase font-medium cursor-pointer"
              onClick={() => handleNavigationGender("Women", category[5]?.slug)}
            >
              FOR WOMEN
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
            <div
              className="relative leading-[150%] uppercase font-medium inline-block min-w-[71px] cursor-pointer"
              onClick={() => handleNavigationGender("Kids", category[5]?.slug)}
            >
              FOR KIDS
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

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
