import { useState } from "react";
import FrameComponent1 from "../components/frame-component1";
import FiltersAndProducts from "../components/filters-and-products";
import JoinWrapper from "../components/join-wrapper";
import InstaPosts from "../components/insta-posts";
import ProductFaqs from "../components/product-faqs";
import Footer from "../components/footer";

export const getServerSideProps = async ({ params }) => {
  try {
    const res = await fetch(
      `https://apitrivsion.prismcloudhosting.com/api/products`
    );

    if (!res.ok) {
      console.error("Failed to fetch data from the API");
      return { notFound: true };
    }

    const data = await res.json();

    if (!data.products || data.products.length === 0) {
      return { notFound: true };
    }

    return {
      props: {
        initialProducts: data?.products?.filter((x) => x?.is_bestvalue == true),
      },
    };
  } catch (error) {
    console.error("Error fetching data in getServerSideProps:", error);
    return { notFound: true };
  }
};

const BestValueListing = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);

  const handleFilter = async (filters) => {
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
      setProducts(filteredData?.products || []);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };
  return (
    <>
      <FrameComponent1 />
      <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border gap-[34px] text-center text-base text-background-color-primary font-h4-32 mq750:gap-[17px]">
        {/* Banner Section */}
        <div
          className={`self-stretch h-[670px] mq750:h-[450px] overflow-hidden shrink-0 flex flex-col items-center justify-center pt-[498px] mq750:pt-[298px] px-10 pb-[60px] box-border bg-[url('/banner@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-center text-21xl text-background-color-primary font-h4-32`}
        />

        {/* Products & Filters */}
        {products?.length == 0 ? (
          <p className="text-gray-200 text-center font-medium text-lg mq480:text-sm">
            No Product Found!
          </p>
        ) : (
          <section className="w-[1440px] flex flex-row items-start justify-start px-20 pb-[26px] pt-[60px] box-border max-w-full mq750:px-10">
            <FiltersAndProducts
              product={products}
              handleFilter={handleFilter}
            />
          </section>
        )}

        <section className="self-stretch flex flex-col items-center justify-center pt-0 px-10 gap-[60px] mq480:px-3 box-border relative max-w-full text-center text-21xl text-black font-h4-32 mq750:pb-[39px] mq750:box-border">
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

        {/* Footer */}
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

export default BestValueListing;
