import { memo, useMemo, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import axios from "axios";

const ProductCards = memo(
  ({
    productItem,
    name,
    brand_name,
    price,
    imgBackgroundImage,
    imageHover,
    colorOptionJustifyContent,
    next,
    next1,
    priceContainerJustifyContent,
    iconamoonheartLight,
    sVG,
    slug,
    product_id,
    title,
  }) => {
    const [cart, setCart] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    const colorOptionStyle = useMemo(() => {
      return {
        justifyContent: colorOptionJustifyContent,
      };
    }, [colorOptionJustifyContent]);

    const priceContainerStyle = useMemo(() => {
      return {
        justifyContent: priceContainerJustifyContent,
      };
    }, [priceContainerJustifyContent]);

    console.log("productItem", product_id);

    const addItem = async (product, itemType, e) => {
      e.stopPropagation(); // Stop event propagation
      const token = localStorage.getItem("token");

      if (!token) {
        alert("User is not authenticated!");
        return;
      }

      const newCartItem = {
        product: product_id,
        quantity: 1,
        shipping_info: itemType,
      };

      try {
        await axios.post(
          "https://apitrivsion.prismcloudhosting.com/api/order/add",
          {
            user: localStorage.getItem("userId"),
            cart: [...cart, newCartItem],
            subTotal: calculateSubTotal(cart, newCartItem),
            shippingCost: 0,
            discount: 0,
            total: calculateTotal(cart, newCartItem),
            paymentMethod: "YOUR_PAYMENT_METHOD",
            shipping_info: itemType,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        alert(`Product added to ${itemType === "cart" ? "cart" : "wishlist"}!`);
        setCart([...cart, newCartItem]);
      } catch (error) {
        console.error(
          `Error adding to ${itemType === "cart" ? "cart" : "wishlist"}`,
          error
        );
      }
    };

    const calculateSubTotal = (cart, newCartItem) => {
      const currentSubTotal = cart.reduce(
        (total, item) => total + item.quantity * price,
        0
      );
      return currentSubTotal + newCartItem.quantity * price;
    };

    const calculateTotal = (cart, newCartItem) => {
      const subTotal = calculateSubTotal(cart, newCartItem);
      return subTotal;
    };

    return (
      <div
        className={`group h-full bg-gray-600 flex flex-col items-center justify-start pt-0 px-3 pb-4 gap-4 text-left text-xs text-black font-h4-32`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="w-[290px] relative h-[250px] overflow-hidden shrink-0 bg-contain bg-center bg-no-repeat transition-all duration-300"
          style={{
            backgroundImage: `url(${
              isHovered && imageHover
                ? imageHover
                : imgBackgroundImage || "1.png"
            })`,
            mixBlendMode: "multiply",
          }}
        >
          <div className="absolute top-[12px] left-[calc(50%_-_57px)] flex flex-row items-center justify-center py-1 px-4">
            <div className="relative leading-[150%] font-medium">
              {title ? title : "BEST SELLER"}
            </div>
          </div>
          <div
            className="absolute top-[220px] left-[12px] w-[290px] flex flex-row items-center justify-center text-center text-gray-400"
            style={colorOptionStyle}
          >
            <Image
              className="w-[18px] relative h-[18px] overflow-hidden shrink-0 object-contain hidden"
              width={18}
              height={18}
              alt=""
              src={next}
            />
            <Image
              className="w-[18px] relative h-[18px] overflow-hidden shrink-0 object-contain hidden"
              width={18}
              height={18}
              alt=""
              src={next1}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-3 text-sm mq480:w-[240px]">
          <div className="self-stretch flex flex-row items-center justify-center text-base text-gray-400 font-oswald">
            <div className="self-stretch flex flex-row items-center justify-start text-base text-gray-400 font-oswald flex-1 relative leading-[150%] font-semibold">
              {brand_name}
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-center justify-center"
            style={priceContainerStyle}
          >
            <div className="self-stretch flex flex-row items-center justify-start flex-1 relative leading-[150%] font-medium">
              {name}
            </div>
          </div>
          <div className="flex gap-5 items-center w-full">
            <div className="flex-1 flex flex-row items-start justify-between">
              <div className="relative leading-[150%] font-medium">
                Aed {price}
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src={iconamoonheartLight}
                onClick={(e) => addItem(productItem, "wishlist", e)}
              />
              <div className="w-px relative border-gray-500 border-r-[1px] border-solid box-border h-[25px]" />
              <Image
                className="h-6 w-6 relative cursor-pointer"
                width={24}
                height={24}
                alt=""
                src={sVG}
                onClick={(e) => addItem(productItem, "cart", e)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProductCards.propTypes = {
  productItem: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  brand_name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgBackgroundImage: PropTypes.string.isRequired,
  imageHover: PropTypes.string.isRequired, // Added prop for hover image
  colorOptionJustifyContent: PropTypes.string,
  next: PropTypes.string.isRequired,
  next1: PropTypes.string.isRequired,
  priceContainerJustifyContent: PropTypes.string,
  iconamoonheartLight: PropTypes.string.isRequired,
  sVG: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  product_id: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func,
  onAddToWishlist: PropTypes.func,
};

export default ProductCards;
