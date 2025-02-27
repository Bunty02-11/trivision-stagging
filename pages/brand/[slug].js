import { useState } from "react";
import FrameComponent1 from "../../components/frame-component1";
import FiltersAndProducts from "../../components/brand/filters-and-products";
import JoinWrapper from "../../components/join-wrapper";
import InstaPosts from "../../components/insta-posts";
import Footer from "../../components/footer";
import ProductFaqs from "../../components/product-faqs";

export const getServerSideProps = async ({ params }) => {
  try {
    if (!params?.slug) {
      return { notFound: true };
    }

    const res = await fetch(
      `https://apitrivsion.prismcloudhosting.com/api/products/brand/${params?.slug}`
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
        initialProducts: data.products,
        slug: params?.slug,
      },
    };
  } catch (error) {
    console.error("Error fetching data in getServerSideProps:", error);
    return { notFound: true };
  }
};

const BrandsListing = ({ initialProducts, slug }) => {
  const [products, setProducts] = useState(initialProducts);

  const handleFilter = async (filters) => {
    try {
      // If filters are empty, reset to initial products
      if (Object.keys(filters).length === 0) {
        setProducts(initialProducts);
        return;
      }

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
      <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border gap-[60px] mq480:gap-[40px] text-center text-base text-background-color-primary font-h4-32 mq750:gap-[40px]">
        {/* Banner Section */}
        <div
          className="w-full responsive-banner"
          style={{
            backgroundImage: `url(${
              products[0]?.brand?.brand_logo || "/brandBanner.jpg"
            })`,
          }}
        />
        {/* Info Section */}
        <section className="w-[1440px] flex flex-col items-center justify-center px-20 box-border max-w-full mq750:px-10 mq480:px-5">
          <div
            className="self-stretch flex flex-col items-center justify-center text-left p-0 m-0 mb-5"
            style={{ color: "black" }}
          >
            <h1 className="mq480:text-base mq480:text-center p-0 m-0">
              {products[0]?.brand?.title || "Special Title"}
            </h1>
          </div>
          <div
            className="self-stretch flex flex-col items-center justify-center text-left p-0 m-0"
            style={{ color: "black" }}
          >
            <p className="mq480:text-base mq480:text-center p-0 m-0">
              {products[0]?.brand?.content || "Special Title"}
            </p>
          </div>
        </section>
        {/* Products & Filters */}
        {products?.length == 0 ? (
          <p className="text-gray-200 text-center font-medium text-lg mq480:text-sm">
            No Product Found!
          </p>
        ) : (
          <section className="w-[1440px] flex flex-row items-start justify-start px-20 box-border max-w-full mq750:px-10">
            <FiltersAndProducts
              product={products}
              slug={slug}
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
        <Footer
          maskGroup="/mask-group@2x.png"
          formMargin="0"
          iconYoutube="/icon--youtube21.svg"
          itemImg="/item--img3.svg"
          itemImg1="/item--img-13.svg"
          itemImg2="/item--img-14.svg"
        />
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

export default BrandsListing;
