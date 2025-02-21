import FrameComponent1 from "../components/frame-component1";
import FiltersAndProducts from "../components/Accessories/filter&product";
import JoinWrapper from "../components/join-wrapper";
import InstaPosts from "../components/insta-posts";
import Footer from "../components/footer";
import ProductFaqs from "../components/product-faqs";

export const getServerSideProps = async () => {
  try {
    const res = await fetch(
      `https://apitrivsion.prismcloudhosting.com/api/accesories/`
    );

    if (!res.ok) {
      console.error("Failed to fetch data from the API");
      return { notFound: true };
    }

    const data = await res.json();

    if (!data.data || data.data.length === 0) {
      return { notFound: true };
    }

    return {
      props: {
        products: data.data.filter((x) => x.isbest_seller === true),
      },
    };
  } catch (error) {
    console.error("Error fetching data in getServerSideProps:", error);
    return { notFound: true };
  }
};

const AccessoriesListing = ({ products }) => {
  return (
    <>
      <FrameComponent1 />
      <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border gap-[60px] mq480:gap-[40px] text-center text-base text-background-color-primary font-h4-32 mq750:gap-[40px]">
        {/* Banner Section */}
        <div className="w-full bg-[url('/accessoriesbanner.jpg')] bg-cover bg-no-repeat bg-center h-[80vh] mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq480:px-5" />
        {/* Products & Filters */}
        <section className="w-[1440px] flex flex-row items-start justify-start px-20 box-border max-w-full mq750:px-10">
          <FiltersAndProducts product={products} />
        </section>
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
    </>
  );
};

export default AccessoriesListing;
