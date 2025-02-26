import { useState, useEffect } from "react";
import FrameComponent1 from "../../components/frame-component1";
import FiltersAndProducts from "../../components/CommonSections/common-filter-product";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import JoinWrapper from "../../components/join-wrapper";
import InstaPosts from "../../components/insta-posts";
import ProductFaqs from "../../components/product-faqs";

const ProductListing = ({className = ""}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    // Ensure slug and gender are available before making the API call
    if (!slug) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://apitrivsion.prismcloudhosting.com/api/products/products/best-sellers?category=${slug}&page=1&limit=10`
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch data for ${slug}`);
        }

        const data = await res.json();
        if (!data.bestSellers || data.bestSellers.length === 0) {
          throw new Error(`No products found for ${slug}`);
        }

        setProducts(data.bestSellers);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]); // Run the effect when slug changes

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const bannerImage = slug === "Sunglasses"
    ? "/bestsellersunglasses.webp"
    : slug === "EYEGLASSES"
      ? "/bestsellereyeglasses.webp"
      : "/defaultBanner.jpg";

  return (
    <>
      <FrameComponent1 />
      <div className={`self-stretch h-[670px] mq750:h-[450px] overflow-hidden shrink-0 flex flex-col items-center justify-center pt-[498px] mq750:pt-[298px] px-10 pb-[60px] box-border bg-[url('/banner@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-center text-21xl text-background-color-primary font-h4-32 ${className}`}
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className="w-full bg-gray-100 flex flex-col items-center">
        <section className="w-full max-w-7xl px-5 pb-[60px] pt-[60px]">
          {products.length > 0 ? (
            <FiltersAndProducts product={products} slug={slug} />
          ) : (
            <p className="text-center text-gray-600">No products available</p>
          )}
        </section>
        <section className="self-stretch flex flex-col items-center justify-center pt-0 px-5 pb-[60px] gap-[60px] mq480:px-3 box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-[39px] mq750:box-border">
          <JoinWrapper
            joinWrapperPadding="0px 20px 0px 0px"
            joinWrapperFlex="unset"
            joinWrapperAlignSelf="unset"
            emptyPlaceholders="/8@2x.png"
            emptyPlaceholders1="/7@2x.png"
            emptyPlaceholders2="/6@2x.png"
            emptyPlaceholders3="/5@2x.png"
          />
          <ProductFaqs faqs={products?.[0]?.brand?.faqs} />
          <InstaPosts />
        </section>
        <Footer maskGroup="/mask-group@2x.png" />
      </div>
      <style jsx>{`
        .responsive-banner {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 100%;
          padding-top: 30%; /* 16:9 Aspect Ratio */
        }
        @media (max-width: 1050px) {
          .responsive-banner {
            padding-top: 25%;
          }
        }

        @media (max-width: 750px) {
          .responsive-banner {
            padding-top: 20%;
          }
        }

        @media (max-width: 480px) {
          .responsive-banner {
            padding-top: 30%;
          }
        }
      `}</style>
    </>
  );
};

export default ProductListing;
