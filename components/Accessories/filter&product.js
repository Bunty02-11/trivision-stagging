import { memo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductCards from "../product-cards";
import FiltersSidebar from "../filters-sidebar";
import PropTypes from "prop-types";

const FiltersAndProducts = memo(({ className = "", product = [] }) => {
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(24);
  const [sortOption, setSortOption] = useState("date"); // Default sorting by latest

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 24);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (slug) => {
    router.push(`/accessories/${slug}`);
  };

  // Sorting logic
  const sortedProducts = [...product].sort((a, b) => {
    if (sortOption === "price") return a?.retail_price - b?.retail_price; // Low to High
    if (sortOption === "price-desc") return b?.retail_price - a?.retail_price; // High to Low
    if (sortOption === "date")
      return new Date(b?.createdAt) - new Date(a?.createdAt); // Newest first
    if (sortOption === "brand")
      return (a?.brand?.slug || "")?.localeCompare(b?.brand?.slug || ""); // Sort alphabetically, handling undefined brands
    return 0;
  });

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[120px] max-w-full text-left text-base text-black font-h4-32 mq750:gap-[60px] mq480:gap-[30px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-10 mq750:gap-5">
        <div className="self-stretch flex flex-row items-start justify-between mq480:justify-center gap-5 mq480:flex-wrap">
          <div
            className="h-10 border-black border-[1px] border-solid box-border flex flex-row items-center justify-center py-1.5 pl-4 pr-[13px] gap-2 cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0 object-contain mq480:h-4 mq480:w-4"
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/magefilter@2x.png"
            />
            <div className="relative leading-[150%] font-medium mq480:text-sm">
              All Filters
            </div>
          </div>
          {/* Sidebar Overlay (Click outside to close) */}
          {isSidebarOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar Component */}
          <FiltersSidebar
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
          <div className="flex flex-col pt-2">
            <div className="flex flex-row items-center gap-3">
              <label className="leading-[150%] font-medium mq480:text-sm">
                Sort By
              </label>
              <select
                name="orderby"
                className="border border-gray-300 rounded p-2 text-sm cursor-pointer"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="popularity">Sort by popularity</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
                <option value="brand">Sort by brand</option>
              </select>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-start gap-x-2 gap-y-6">
          {sortedProducts?.slice(0, visibleProducts).map((productItem) => {
            const firstImageUrl = productItem?.product_images[0] || "";
            return (
              <div
                key={productItem._id}
                onClick={() =>
                  handleNavigation(productItem?.slug, productItem?.category)
                }
                className="cursor-pointer"
              >
                <ProductCards
                  {...productItem}
                  product_id={productItem._id}
                  brand_name={productItem?.brand?.name}
                  name={productItem.product_name_short}
                  price={productItem.retail_price}
                  imgBackgroundImage={firstImageUrl} // ✅ Dynamically passed image URL
                  colorOptionJustifyContent="center"
                  priceContainerJustifyContent="center"
                  iconamoonheartLight="/iconamoonheartlight-2.svg"
                  sVG="/svg-3.svg"
                  slug={productItem.slug}
                  onAddToCart={(e) => e.stopPropagation()} // Stop navigation for Add to Cart
                  onAddToWishlist={(e) => e.stopPropagation()} // Stop navigation for Wishlist
                />
              </div>
            );
          })}
        </div>
        {Array.isArray(product) && visibleProducts < product.length && (
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-6 text-center text-background-color-primary">
            <div className="w-[305px] flex flex-row items-start justify-center gap-4">
              <div
                className="flex-1 bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-[23px] cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
                onClick={loadMoreProducts}
              >
                <div className="flex-1 relative leading-[150%] font-medium">
                  LOAD MORE PRODUCTS
                </div>
              </div>
              <Image
                className="h-10 w-10 relative overflow-hidden shrink-0 cursor-pointer"
                loading="lazy"
                width={40}
                height={40}
                alt=""
                src="/top.svg"
                onClick={scrollToTop}
              />
            </div>
            <div className="flex flex-row items-start justify-center text-xs text-black">
              <div className="flex-1 relative leading-[150%] font-medium">
                Showing {visibleProducts} of {product.length} Products
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

FiltersAndProducts.propTypes = {
  className: PropTypes.string,
  product: PropTypes.array.isRequired, // Ensuring `product` is an array
};

FiltersAndProducts.defaultProps = {
  product: [], // Default to an empty array if no products are provided
};

export default FiltersAndProducts;
