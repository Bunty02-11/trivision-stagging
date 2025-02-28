import { memo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/navigation";

const ContactLenseColor = memo(
  ({ className = "", product, relatedProductsClr }) => {
    const router = useRouter();

    const handleColorClick = (slug) => {
      router.push(`/ContactLensesDetails/${slug}`);
    };
    console.log("relatedProducts", relatedProductsClr);

    return (
      <div
        className={`self-stretch border-gray-500 border-t-[1px] border-solid border-gray-500 border-b-[1px] border-solid box-border flex flex-col items-start justify-center py-3.5 px-0 gap-3 min-h-[128px] max-w-full text-left text-base text-black font-h4-32 ${className}`}
      >
        <div className="self-stretch flex flex-row items-center justify-center max-w-full">
          <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full capitalize">
            Color: {product?.color}
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1600: { slidesPerView: 6 },
          }}
          className="w-full max-w-full"
        >
          {relatedProductsClr?.map((relProduct, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleColorClick(relProduct?.slug)}
              >
                <Image
                  className="h-[60px] w-[60px] relative overflow-hidden shrink-0 object-contain"
                  loading="lazy"
                  width={60}
                  height={60}
                  src={relProduct?.product_images[0] || "/lenseClrImg.png"}
                  alt={relProduct?.color}
                />
                <div className="mt-2 capitalize">{relProduct?.color}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
);

export default ContactLenseColor;
