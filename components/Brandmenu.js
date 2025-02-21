import { memo } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Image from "next/image";

const BrandMenu = memo(({ className = "", brands }) => {
  const router = useRouter();

  const handleNavigation = (slug) => {
    router.push(`/brand/${slug}`);
  };

  return (
    <div
      className={`z-[9999] w-[1440px] bg-black-100 max-w-full overflow-hidden flex flex-col items-center justify-center p-10 box-border leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="self-stretch flex flex-row items-center justify-center flex-wrap content-start gap-6 max-w-full text-center text-sm text-black font-h4-32">
        <div className="flex-1 flex flex-wrap items-center justify-start gap-x-8 gap-y-1">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-[30%] flex flex-col items-start justify-start mq1280:w-[29.6%]"
            >
              <div
                className="flex flex-row items-center justify-start py-1.5 px-0 cursor-pointer"
                onClick={() => handleNavigation(brand.slug)}
              >
                <div className="relative leading-[150%] uppercase text-left font-medium cursor-pointer">
                  {brand.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-row items-center justify-center gap-4">
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

BrandMenu.propTypes = {
  className: PropTypes.string,
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BrandMenu;
