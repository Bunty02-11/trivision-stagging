import { memo, useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const ContactLensMblMenu = memo(({ className = "", brands }) => {
  const router = useRouter();

  const [coloredBrands, setColoredBrands] = useState([]);
  const [clearBrands, setClearBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://apitrivsion.prismcloudhosting.com/api/contactlens/contact-lenses/brands/category"
        );

        const data = await response.json();

        // Collect all brands and separate them into colored and clear categories
        const colored = data.colourContactLensBrands.map((brand) => ({
          name: brand,
          slug: brand.toLowerCase().replace(/\s+/g, "-"),
        }));
        const clear = data.clearContactLensBrands.map((brand) => ({
          name: brand,
          slug: brand.toLowerCase().replace(/\s+/g, "-"),
        }));

        setColoredBrands(colored);
        setClearBrands(clear);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNavigation = (slug) => {
    router.push(`/contact-lens/${slug}`);
  };

  return (
    <div
      className={`w-[1000px] bg-background-color-primary max-w-full overflow-hidden flex flex-col items-center justify-start p-2 box-border gap-2 leading-[normal] tracking-[normal] ${className}`}
    >
      <header className="self-stretch border-gray-800 border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-0 px-0 pb-2.5 gap-4 top-[0] z-[99] sticky max-w-full text-left text-5xl text-black font-h4-32">
        <h2 className="m-0 flex-1 relative leading-[140%] text-sm font-bold inline-block max-w-full">
          CONTACT LENSES
        </h2>
      </header>
      <section className="self-stretch flex flex-col items-start justify-start gap-2 text-center text-sm text-black font-h4-32">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="text-sm font-bold my-2 border-gray-800 border-b-[1px] border-solid box-border pb-2.5">
            COLORED CONTACT LENSES
          </div>
          {coloredBrands.map((brand, index) => (
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div
                key={index}
                className="relative leading-[150%] text-xs uppercase cursor-pointer"
                onClick={() => handleNavigation(brand?.slug)}
              >
                {brand?.name}
              </div>
            </div>
          ))}
          <div className="text-sm font-bold my-2 border-gray-800 border-b-[1px] border-solid box-border pb-2.5">
            CLEAR CONTACT LENSES
          </div>
          {clearBrands.map((brand, index) => (
            <div className="self-stretch flex flex-row items-center justify-start py-1.5 px-0">
              <div
                key={index}
                className="relative leading-[150%] text-xs uppercase cursor-pointer"
                onClick={() => handleNavigation(brand?.slug)}
              >
                {brand?.name}
              </div>
            </div>
          ))}
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

ContactLensMblMenu.propTypes = {
  className: PropTypes.string,
};

export default ContactLensMblMenu;
