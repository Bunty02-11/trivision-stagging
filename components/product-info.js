import { memo, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const ProductInfo = memo(({ className = "", products, weuiarrowFilled1 }) => {
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

  const toggleProductDetails = () => {
    setIsProductDetailsOpen(!isProductDetailsOpen);
  };
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start max-w-full text-left text-base text-black font-h4-32 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
        <div
          className="self-stretch border-gray-800 border-b-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start pt-4 px-0 pb-3.5 gap-6 max-w-full cursor-pointer"
          onClick={toggleProductDetails}
        >
          <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-[calc(100%_-_48px)]">
            Product Details
          </div>
          <Image
            className={`h-6 w-6 relative overflow-hidden shrink-0 object-contain transition-transform ${
              isProductDetailsOpen ? "rotate-180" : ""
            }`}
            width={24}
            height={24}
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        {isProductDetailsOpen && (
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start pt-0 px-0 pb-6 box-border gap-6 max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border gap-4 min-w-[408px] max-w-full mq825:min-w-full">
              <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold min-w-[150px]">
                  Brand
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {products?.brand?.name}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold min-w-[150px]">
                  Model
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {products?.model}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold min-w-[150px]">
                  Power
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {products?.power}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold min-w-[150px]">
                  Color Code
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {products?.color}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold min-w-[150px]">
                  Base Curve
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {products?.base_curve}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold min-w-[150px]">
                  Diameter
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {products?.diameter}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold min-w-[150px]">
                  Pack
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {products.pack}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold min-w-[150px]">
                  Replacement
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {products?.replacement}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold min-w-[150px]">
                  Contact_Lens Type
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {products?.contact_lens_type}
                </div>
              </div>
              {/* <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold min-w-[150px]">Lens Type</div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {product.product?.lens_type}
                </div>
              </div> */}
              {/* <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold min-w-[150px]">Lens Color</div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {product.product?.lens_color}
                </div>
              </div> */}
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[408px] max-w-full mq825:min-w-full">
              <div className="self-stretch flex flex-row items-center justify-start py-0 gap-2 mq480:pr-5 mq480:box-border mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold inline-block min-w-[150px]">
                  Product Name
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[150px]">
                  {products?.product_name_long}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full mq825:flex-wrap">
                <div className="relative leading-[150%] font-semibold">
                  Product Description
                </div>
                <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[294px] max-w-full">
                  {products?.product_description}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="self-stretch border-gray-800 border-t-[1px] border-solid border-gray-800 border-b-[1px] border-solid hidden flex-row items-center justify-between py-3.5 px-0 gap-5">
        <div className="relative leading-[150%] font-medium">
          More Information
        </div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          width={24}
          height={24}
          alt=""
          src={weuiarrowFilled1}
        />
      </div>
      <div className="self-stretch h-14 border-gray-800 border-t-[1px] border-solid border-gray-800 border-b-[1px] border-solid box-border flex flex-row items-center justify-between py-3.5 px-0 gap-5">
        <div className="relative leading-[150%] font-medium">Reviews</div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          width={24}
          height={24}
          alt=""
          src="/weuiarrowfilled-1@2x.png"
        />
      </div>
    </div>
  );
});

ProductInfo.propTypes = {
  className: PropTypes.string,
};

export default ProductInfo;
