import Image from "next/image";
import { useRef } from "react";
import Main1 from "../../components/main1";
import IdeologyBullets from "../../components/ideology-bullets";
import ProductCards from "../../components/product-cards";
import JoinWrapper from "../../components/join-wrapper";
import InstaPosts from "../../components/insta-posts";
import ProductFaqs from "../../components/product-faqs";
import Footer from "../../components/footer";
import FrameComponent1 from "../../components/frame-component1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const getServerSideProps = async ({ params }) => {
  try {
    if (!params?.slug) {
      return { notFound: true };
    }

    const res = await fetch(
      `https://apitrivsion.prismcloudhosting.com/api/products/${params?.slug}`
    );

    if (!res.ok) {
      console.error("Failed to fetch data from the API");
      return { notFound: true };
    }

    const data = await res.json();

    if (!data) {
      return { notFound: true };
    }

    return {
      props: {
        product: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data in getServerSideProps:", error);
    return { notFound: true };
  }
};

const ProductDetails = ({ product, error }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center">
      <FrameComponent1 />
      <Main1 product={product} category={product?.product?.category?.slug} />
      <section
        className="flex items-center justify-center py-20 px-10 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/video1@3x.png')" }}
      >
        <Image
          className="h-16 w-16"
          width={64}
          height={64}
          alt="Play Button"
          src="/mdiplay1.svg"
        />
      </section>
      <div className="flex flex-wrap justify-center py-10 px-5 gap-5">
        {product?.product?.product_images?.slice(1, 4).map((img, index) => (
          <IdeologyBullets
            key={index}
            ideologyBulletsMinWidth="160px"
            emptyBullets={img}
          />
        ))}
      </div>
      <section className="w-[1400px] flex flex-row items-center justify-center pt-0 px-10 pb-[60px] box-border max-w-full text-center text-21xl text-black font-h4-32">
        <div className="flex-1 flex flex-col items-center justify-center gap-10 max-w-full">
          <div className="w-[1279.5px] flex flex-row items-center justify-center">
            <h1 className="m-0 flex-1 text-inherit leading-[120%] font-medium">
              Related Products
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-4 max-w-full">
            <button
              ref={prevButtonRef}
              className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300"
            >
              <FaAngleLeft size={20} />
            </button>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevButtonRef.current;
                swiper.params.navigation.nextEl = nextButtonRef.current;
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full max-w-full"
            >
              {product?.relatedProducts?.map((relatedProduct, index) => (
                <SwiperSlide key={index}>
                  <ProductCards
                    key={index}
                    product_id={relatedProduct._id}
                    imgBackgroundImage={relatedProduct.product_images[0]}
                    productItem={relatedProduct}
                    name={relatedProduct.product_name_short}
                    brand_name={relatedProduct.brand.name}
                    price={relatedProduct.retail_price}
                    slug={relatedProduct.slug}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              ref={nextButtonRef}
              className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300"
            >
              <FaAngleRight size={20} />
            </button>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-center justify-center pb-[60px] mq480:pb-[40px] pt-0 px-10 gap-[60px] mq480:px-3 box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-[39px] mq750:box-border">
        <JoinWrapper
          joinWrapperPadding="0px 20px 0px 0px"
          joinWrapperFlex="unset"
          joinWrapperAlignSelf="unset"
          emptyPlaceholders="/8@2x.png"
          emptyPlaceholders1="/7@2x.png"
          emptyPlaceholders2="/6@2x.png"
          emptyPlaceholders3="/5@2x.png"
        />
        <ProductFaqs faqs={product?.brand?.faqs} />
        <InstaPosts />
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        iconYoutube="/icon--youtube-1.svg"
      />
    </div>
  );
};

export default ProductDetails;
