import { memo, useState } from "react";
import Image from "next/image";
import H from "../Accessories/h";
import Color from "../Accessories/color";
import Extra from "../extra";
import R from "../Accessories/r";
import PropTypes from "prop-types";
import ProductImage from "../ProductImage";
import axios from "axios";

const Main1 = memo(({ className = "", product }) => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const addItem = async (product, itemType) => {
    const token = localStorage.getItem("token"); // Retrieve the token

    if (!token) {
      alert("User is not authenticated!");
      return;
    }

    const newCartItem = {
      product: product.product._id,
      quantity: quantity,
      shipping_info: itemType,
    };

    try {
      const response = await axios.post(
        "https://apitrivsion.prismcloudhosting.com/api/order/add",
        {
          user: localStorage.getItem("userId"), // Replace with actual user ID
          cart: [...cart, newCartItem],
          subTotal: calculateSubTotal(cart, newCartItem),
          shippingCost: 0, // Replace with actual shipping cost
          discount: 0, // Replace with actual discount
          total: calculateTotal(cart, newCartItem),
          paymentMethod: "YOUR_PAYMENT_METHOD", // Replace with actual payment method
          shipping_info: itemType,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Set the Bearer token in headers
            "Content-Type": "application/json",
          },
        }
      );

      alert(`Product added to ${itemType === "cart" ? "cart" : "whishlist"}!`);
      setCart([...cart, newCartItem]); // Update local cart state
    } catch (error) {
      console.error(
        `There was an error adding the product to the ${itemType === "cart" ? "cart" : "whishlist"
        }`,
        error
      );
    }
  };

  const calculateSubTotal = (cart, newCartItem) => {
    const currentSubTotal = cart.reduce(
      (total, item) => total + item.quantity * product.product.retail_price,
      0
    );
    return (
      currentSubTotal + newCartItem.quantity * product.product.retail_price
    );
  };

  const calculateTotal = (cart, newCartItem) => {
    const subTotal = calculateSubTotal(cart, newCartItem);
    const shippingCost = 0; // Replace with actual shipping cost
    const discount = 0;
    return subTotal + shippingCost - discount;
  };
// console.log(product.data.category, "min")
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-[60px] px-20 box-border gap-6 max-w-full text-left text-xs text-gray-400 font-h4-32 mq480:pt-5 mq480:pb-5 mq480:box-border mq825:py-[25px] mq825:px-10 mq825:box-border mq1410:pt-[39px] mq1410:pb-[39px] mq1410:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="relative leading-[150%] font-medium">{`Home > ${product.data.category.name} > ${product.data.brand.name} > ${product.data.product_name_short}`}</div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full text-sm text-black mq825:gap-5">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1410:flex-wrap">
          <ProductImage product={product.data} />
          <div className="w-[500px] overflow-y-auto shrink-0 flex flex-col items-start justify-start relative gap-6 max-w-full mq825:min-w-full mq1410:flex-1">
            <H product={product} />
            <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-center">
              {/* <Color product={product} /> */}
              <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[296px] gap-6 text-left mq480:pr-5 mq480:box-border mq825:flex-wrap mq825:pr-[148px] mq825:box-border">
                <div className="relative leading-[150%] font-medium inline-block min-w-[30px]">
                  Size
                </div>
                <div className="flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-0.5 px-3.5 gap-2.5 min-w-[97px] min-h-[29px] text-gray-400">
                  <select className="w-full h-full border-none bg-transparent outline-none">
                    <option value="select" disabled selected>
                      Select
                    </option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
              </div>
              <div className="self-stretch border-gray-800 border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[7px] gap-3 min-h-[56px] max-w-full text-left text-xs text-gray-200 mq825:flex-wrap">
                <Image
                  className="h-10 w-[63.3px] relative rounded object-cover"
                  loading="lazy"
                  width={63}
                  height={40}
                  alt=""
                  src="/item--img4@2x.png"
                />
                <div className="flex-1 relative leading-[150%] inline-block min-w-[266px] max-w-full">
                  <span className="font-medium">
                    {`4 interest-free payments of AED 196.00. No fees. Shariah-compliant. `}
                    <span className="[text-decoration:underline]">
                      Learn more
                    </span>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-5 mq825:flex-wrap">
                <div className="w-[238px] flex flex-row items-center justify-start gap-4">
                  <div className="flex-1 border-gray-800 border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center gap-3">
                    <button
                      onClick={decreaseQuantity}
                      className="cursor-pointer"
                    >
                      <Image
                        className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Decrease"
                        src="/icroundminus@2x.png"
                      />
                    </button>
                    <div className="flex-1 relative leading-[150%] font-medium">
                      {quantity}
                    </div>
                    <button
                      onClick={increaseQuantity}
                      className="cursor-pointer"
                    >
                      <Image
                        className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                        loading="lazy"
                        width={40}
                        height={40}
                        alt="Increase"
                        src="/icroundplus@2x.png"
                      />
                    </button>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-3">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      width={24}
                      height={24}
                      alt=""
                      src="/iconamoonheartlight2.svg"
                      onClick={() => addItem(product, "whishlist")}
                    />
                    <div className="h-[25px] w-px relative border-gray-500 border-r-[1px] border-solid box-border cursor-pointer" />
                    <Image
                      className="h-6 w-6 relative cursor-pointer"
                      width={24}
                      height={24}
                      alt=""
                      src="/svg-12.svg"
                      onClick={() => addItem(product, "cart")}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-3">
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                    width={24}
                    height={24}
                    alt=""
                    src="/icon--facebook1.svg"
                  />
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                    width={24}
                    height={24}
                    alt=""
                    src="/icon--instagram1.svg"
                  />
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                    width={24}
                    height={24}
                    alt=""
                    src="/icon--x1.svg"
                  />
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                    width={24}
                    height={24}
                    alt=""
                    src="/icon--linkedin1.svg"
                  />
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                    width={24}
                    height={24}
                    alt=""
                    src="/icon--youtube3.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-10 border-black border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[167px] text-base mq825:pl-[83px] mq825:pr-[83px] mq825:box-border cursor-pointer hover:bg-black hover:text-white hover:border-[1px] hover:border-solid transition-all duration-300">
                <div className="flex-1 relative leading-[150%] font-medium">
                  SELECT YOUR LENS
                </div>
              </div>
              <div className="self-stretch bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-[140px] text-base text-background-color-primary mq480:pl-5 mq480:pr-5 mq480:box-border mq825:pl-[70px] mq825:pr-[70px] mq825:box-border cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300">
                <div className="flex-1 relative leading-[150%] font-medium">
                  FRAME ONLY, BUY IT NOW
                </div>
              </div>
            </div>
            <Extra />
            <div className="self-stretch flex flex-row items-center justify-between gap-[6.06px]">
              <div className="flex flex-row items-center justify-center py-2 px-4 gap-2">
                <Image
                  className="h-[21px] w-[29.7px] relative overflow-hidden shrink-0 object-cover"
                  width={30}
                  height={21}
                  alt=""
                  src="/solarcasebold@2x.png"
                />
                <div className="relative leading-[150%] font-medium">Case</div>
              </div>
              <div className="h-[38px] w-px relative border-gray-500 border-r-[1px] border-solid box-border" />
              <div className="flex flex-row items-center justify-center py-2 px-[15px] gap-2">
                <Image
                  className="h-[21px] w-[21px] relative overflow-hidden shrink-0 object-cover"
                  width={21}
                  height={21}
                  alt=""
                  src="/solarcasebold-1@2x.png"
                />
                <div className="relative leading-[150%] font-medium inline-block min-w-[107px]">
                  Cleaning Cloth
                </div>
              </div>
              <div className="h-[38px] w-px relative border-gray-500 border-r-[1px] border-solid box-border" />
              <div className="flex flex-row items-center justify-center py-2 px-[15px] gap-2">
                <Image
                  className="h-[21px] w-[21px] relative overflow-hidden shrink-0 object-cover"
                  width={21}
                  height={21}
                  alt=""
                  src="/solarcasebold-2@2x.png"
                />
                <div className="relative leading-[150%] font-medium">
                  Lens Cleaning Spray
                </div>
              </div>
            </div>
            <div className="absolute !m-[0] top-[160px] left-[0px] text-base leading-[150%] font-medium hidden items-center overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] z-[4]">
              {product.product_description}
            </div>
          </div>
        </div>
        <R weuiarrowFilled1="/pending_807:4251" product={product} />
      </div>
    </section>
  );
});

Main1.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
};

export default Main1;
