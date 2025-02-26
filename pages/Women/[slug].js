import { useState, useEffect } from "react";
import FrameComponent1 from "../../components/frame-component1";
import FiltersAndProducts from "../../components/CommonSections/common-filter-product";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import JoinWrapper from "../../components/join-wrapper";
import InstaPosts from "../../components/insta-posts";
import ProductFaqs from "../../components/product-faqs";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  const pathname = usePathname();
  const gender = pathname?.split("/")?.[1];

  useEffect(() => {
    // Ensure slug and gender are available before making the API call
    if (!slug || !gender) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://apitrivsion.prismcloudhosting.com/api/products/by-gender/${slug}/${gender}`
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch data for ${slug} - ${gender}`);
        }

        const data = await res.json();
        if (!data.products || data.products.length === 0) {
          throw new Error(`No products found for ${slug} - ${gender}`);
        }

        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, gender]); // Run the effect when slug or gender changes

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <FrameComponent1 />
      <div className="w-full bg-gray-100 flex flex-col items-center">
        <div className="w-full bg-[url('/featuredbanner.png')] bg-cover bg-no-repeat bg-center h-[80vh] mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq480:px-5" />
        <section className="w-full max-w-7xl px-5 pb-[60px] pt-[60px]">
          <FiltersAndProducts product={products} slug={slug} />
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
    </>
  );
};

export default ProductListing;
