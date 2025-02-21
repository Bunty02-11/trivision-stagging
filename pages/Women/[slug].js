import { useState, useEffect } from "react";
import FrameComponent1 from "../../components/frame-component1";
import FiltersAndProducts from "../../components/eyeglasses/filter&product";
import FrameComponent4 from "../../components/frame-component4";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

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
        <section className="w-full max-w-7xl px-5 pb-[60px] pt-[60px]">
          <FiltersAndProducts product={products} />
        </section>
        <section className="pb-[60px]">
          <FrameComponent4 product={products} />
        </section>
        <Footer maskGroup="/mask-group@2x.png" />
      </div>
    </>
  );
};

export default ProductListing;
