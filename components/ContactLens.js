import { memo, useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const ContactLensMenu = memo(({ className = "" }) => {
  const [coloredBrands, setColoredBrands] = useState([]);
  const [clearBrands, setClearBrands] = useState([]);
  const router = useRouter();

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

  //
  return (
    <div
      className={`z-[9999] w-[1440px] bg-black-100 max-w-full overflow-hidden flex flex-col items-center justify-center p-10 box-border leading-[normal] tracking-[normal] ${className}`}
    >
      {/* Main Flex Container */}
      <section className="w-full flex flex-row items-start justify-between gap-10 text-sm text-black font-h4-32">
        {/* Left Column: Brand Categories */}
        <div className="flex flex-row flex-wrap items-start justify-start gap-10 min-w-[600px]">
          {/* Colored Contact Lenses */}
          <div className="flex flex-col items-start justify-start min-w-[250px]">
            <div className="text-lg font-medium uppercase mb-2 text-center">
              COLORED CONTACT LENSES
            </div>
            {coloredBrands.map((brand, index) => (
              <div
                key={index}
                className="py-1.5 px-0 cursor-pointer"
                onClick={() => handleNavigation(brand.slug)}
              >
                <div className="relative leading-[150%] uppercase font-medium cursor-pointer">
                  {brand.name}
                </div>
              </div>
            ))}
          </div>
          {/* Clear Contact Lenses */}
          <div className="flex flex-col items-start justify-start min-w-[250px]">
            <div className="text-lg font-medium uppercase mb-2 text-center">
              CLEAR CONTACT LENSES
            </div>
            {clearBrands.map((brand, index) => (
              <div
                key={index}
                className="py-1.5 px-0 cursor-pointer"
                onClick={() => handleNavigation(brand.slug)}
              >
                <div className="relative leading-[150%] uppercase font-medium cursor-pointer">
                  {brand.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image Grid */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-row items-center justify-center gap-4">
            <Image
              className="h-[152px] w-auto relative max-w-full overflow-hidden object-cover min-w-[212px]"
              loading="lazy"
              width={326}
              height={152}
              alt=""
              src="/lens-menu1.jpg"
            />
            <Image
              className="h-[152px] w-auto relative max-w-full overflow-hidden object-cover min-w-[212px]"
              loading="lazy"
              width={326}
              height={152}
              alt=""
              src="/lens-menu2.jpg"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <Image
              className="h-[152px] w-auto relative max-w-full overflow-hidden object-cover min-w-[212px]"
              loading="lazy"
              width={326}
              height={152}
              alt=""
              src="/lens-menu3.jpg"
            />
            <Image
              className="h-[152px] w-auto relative max-w-full overflow-hidden object-cover min-w-[212px]"
              loading="lazy"
              width={326}
              height={152}
              alt=""
              src="/lens-menu4.jpg"
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
