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
          `https://apitrivsion.prismcloudhosting.com/api/products/products/new-arrivals?category=${slug}&page=1&limit=10`
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch data for ${slug}`);
        }

        const data = await res.json();
        if (!data.newArrivals || data.newArrivals.length === 0) {
          throw new Error(`No products found for ${slug}`);
        }

        setProducts(data.newArrivals);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]); // Run the effect when slug changes

  const handleFilter = async (filters) => {
    console.log("filters::", filters);
    try {
      const response = await fetch(
        "https://apitrivsion.prismcloudhosting.com/api/filter/data/products/filter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch filtered products");
      }

      const filteredData = await response.json();
      setProducts(filteredData.products || []);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const bannerImage = slug === "Sunglasses"
    ? "/newarrivalsunglasses.webp"
    : slug === "EYEGLASSES"
      ? "/newarraivalseyeglasses.webp"
      : "/defaultBanner.jpg";

  return (
    <>
      <FrameComponent1 />
      <div className={`self-stretch h-[670px] mq750:h-[450px] overflow-hidden shrink-0 flex flex-col items-center justify-center pt-[498px] mq750:pt-[298px] px-10 pb-[60px] box-border bg-[url('/banner@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-center text-21xl text-background-color-primary font-h4-32 ${className}`}
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className="w-full bg-gray-100 flex flex-col items-center">
        <section className="w-full max-w-7xl px-5 pb-[60px] pt-[60px]">
          {products?.length == 0 ? (
            <p className="text-gray-200 text-center font-medium text-lg mq480:text-sm pt-[60px]">
              No Product Found!
            </p>
          ) : (
            <FiltersAndProducts
              product={products}
              slug={slug}
              handleFilter={handleFilter}
            />
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
        <Footer
          maskGroup="/mask-group@2x.png"
          formMargin="0"
          iconYoutube="/icon--youtube21.svg"
          itemImg="/item--img3.svg"
          itemImg1="/item--img-13.svg"
          itemImg2="/item--img-14.svg"
        />
      </div>
    </>
  );
};

export default ProductListing;
