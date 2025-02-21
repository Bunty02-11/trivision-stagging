import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "../../components/frame-component1";
import FrameComponent13 from "../../components/frame-component13";
import ProductInfo from "../../components/product-info";
import Insta from "../../components/insta";
import Footer from "../../components/footer";
import Loader from "../../components/Loader/Loader";

const ClearContactLensDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://apitrivsion.prismcloudhosting.com/api/contactlens/contact-lenses/${slug}`
        );
        const data = await res.json();
        setProduct(data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <Loader />;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start text-left text-base text-black font-h4-32">
      <FrameComponent1 />
      <FrameComponent13 products={product} />
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-10 pb-[60px] box-border text-center text-21xl text-black">
        <ProductInfo products={product} weuiarrowFilled1="/pending_807:4251" />
      </section>
      <section className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[74px]">
        <Insta
          instaImages="/8@2x.png"
          instaImages1="/7@2x.png"
          instaImages2="/6@2x.png"
          instaImages3="/5@2x.png"
        />
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        formMargin="0"
        iconYoutube="/icon--youtube-1.svg"
        itemImg="/item--img41.svg"
        itemImg1="/item--img-15.svg"
        itemImg2="/item--img-25.svg"
      />
    </div>
  );
};

export default ClearContactLensDetails;
