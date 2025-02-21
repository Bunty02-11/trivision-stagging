import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/navigation";

const Color = memo(({ className = "", product }) => {
  const router = useRouter();

  const handleColorClick = (slug) => {
    router.push(`/product/${slug}`);
  };

  return (
    <div
      className={`self-stretch border-gray-500 border-t-[1px] border-solid border-gray-500 border-b-[1px] border-solid box-border flex flex-col items-start justify-center py-3.5 px-0 gap-3 min-h-[128px] max-w-full text-left text-base text-black font-h4-32 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-center max-w-full">
        <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
          Color: {product.product.lens_color}
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full max-w-full"
      >
        {product.relatedProducts.map((relatedProduct, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleColorClick(relatedProduct.slug)}
            >
              <Image
                className="h-[60px] w-[60px] relative overflow-hidden shrink-0 object-contain"
                loading="lazy"
                width={60}
                height={60}
                alt={relatedProduct.frame_color}
                src={relatedProduct.product_images[0]}
              />
              <div className="mt-2">{relatedProduct.lens_color}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

Color.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    product: PropTypes.shape({
      lens_color: PropTypes.string.isRequired,
    }).isRequired,
    relatedProducts: PropTypes.arrayOf(
      PropTypes.shape({
        frame_color: PropTypes.string.isRequired,
        lens_color: PropTypes.string.isRequired,
        product_images: PropTypes.arrayOf(PropTypes.string).isRequired,
        slug: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Color;
