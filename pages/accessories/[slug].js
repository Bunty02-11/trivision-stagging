import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Main1 from "../../components/Accessories/main1";
import IdeologyBullets from "../../components/ideology-bullets";
import ProductCards from "../../components/product-cards";
import Insta from "../../components/insta";
import Footer from "../../components/footer";
import FrameComponent1 from "../../components/frame-component1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loader from "../../components/Loader/Loader";

const SunglassesProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://apitrivsion.prismcloudhosting.com/api/accesories/slug/${slug}`
        );
        const data = await res.json();
        // console.log(data.data.product_name_long, "hi")
        if (!data.data) {
          setError("Product not found");
        } else {
          setProduct(data);
        }
      } catch (err) {
        setError("Failed to fetch product data");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!product) return null;

  //   console.log(product.data.category.name, "for")

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center">
      <FrameComponent1 />
      <Main1 product={product} />
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
      <section className="w-[1400px] flex flex-row items-center justify-center pt-0 px-10 pb-[60px] box-border max-w-full text-center text-21xl text-black font-h4-32 mq825:pb-[39px] mq825:box-border">
        <div className="flex-1 flex flex-col items-center justify-center gap-10 max-w-full mq825:gap-5">
          <div className="w-[1279.5px] flex flex-row items-center justify-center py-0 pl-[463px] pr-[464px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[115px] mq825:pr-[116px] mq825:box-border mq1410:pl-[231px] mq1410:pr-[232px] mq1410:box-border">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
              Related Products
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-4 max-w-full">
            <button
              ref={prevButtonRef}
              className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
            >
              <FaArrowLeft size={20} />
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
                    colorOptionJustifyContent="space-between"
                    next="/pending_I807:4280;491:5147"
                    next1="/pending_I807:4280;491:5150"
                    priceContainerJustifyContent="space-between"
                    iconamoonheartLight="/iconamoonheartlight1.svg"
                    sVG="/svg-11.svg"
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
              className="p-2 rounded-full bg-gray-200 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
      <Insta
        instaImages="/8@2x.png"
        instaImages1="/7@2x.png"
        instaImages2="/6@2x.png"
        instaImages3="/5@2x.png"
      />
      <Footer
        maskGroup="/mask-group@2x.png"
        iconYoutube="/icon--youtube-1.svg"
      />
    </div>
  );
};

export default SunglassesProductDetails;
