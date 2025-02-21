import FrameComponent1 from "../components/frame-component1";
import FiltersAndProducts from "../components/eyeglasses/filter&product";
import FrameComponent4 from "../components/frame-component4";
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
        products: data?.products?.filter((x) => x?.is_bestvalue == true),
      },
    };
  } catch (error) {
    console.error("Error fetching data in getServerSideProps:", error);
    return { notFound: true };
  }
};

const BestValueListing = ({ products }) => {
  return (
    <>
      <FrameComponent1 />
      <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border gap-[34px] text-center text-base text-background-color-primary font-h4-32 mq750:gap-[17px]">
        {/* Banner Section */}
        <div className="w-full bg-[url('/featuredbanner.png')] bg-cover bg-no-repeat bg-center h-[80vh] mq750:pt-[221px] mq750:px-[142px] mq750:pb-[39px] mq480:px-5" />
        {/* Products & Filters */}
        <section className="w-[1440px] flex flex-row items-start justify-start px-20 pb-[26px] pt-[60px] box-border max-w-full mq750:px-10">
          <FiltersAndProducts product={products} />
        </section>

        {/* Additional Component */}
        <FrameComponent4 product={products} />

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
