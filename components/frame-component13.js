import { memo, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import ContactLensImage from "../components/ContactLensImage";
import axios from "axios";
import { useRouter } from "next/navigation";

const FrameComponent13 = memo(({ className = "", product }) => {
  const router = useRouter();
  const [selectedPack, setSelectedPack] = useState(null);
  const [selectedEye, setSelectedEye] = useState("right");
  const [rightEyePower, setRightEyePower] = useState("");
  const [leftEyePower, setLeftEyePower] = useState("");
  const [rightEyeBoxes, setRightEyeBoxes] = useState(1);
  const [leftEyeBoxes, setLeftEyeBoxes] = useState(1);
  const [differentPowers, setDifferentPowers] = useState(false);

  const [cart, setCart] = useState([]);

  console.log("selectedPack", selectedPack);

  const handleRadioChange = (event) => {
    setSelectedPack(event.target.value);
  };

  const handleEyeChange = (event) => {
    setSelectedEye(event.target.value);
  };

  const addItem = async (product, itemType) => {
    const token = localStorage.getItem("token"); // Retrieve the token

    if (!token) {
      alert("User is not authenticated!");
      return;
    }

    const newCartItem = {
      product: product?._id,
      quantity: selectedPack,
      data: "pack",
      shipping_info: itemType,
      additional_info: [
        {
          selectEye: selectedEye,
          selectLeftPower: leftEyePower,
          selectRightPower: rightEyePower,
          selectRightBox: rightEyeBoxes,
          selectLeftBox: leftEyeBoxes,
        },
      ],
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
      (total, item) => total + item.quantity * product.retail_price,
      0
    );
    return currentSubTotal + newCartItem.quantity * product.retail_price;
  };

  const calculateTotal = (cart, newCartItem) => {
    const subTotal = calculateSubTotal(cart, newCartItem);
    const shippingCost = 0; // Replace with actual shipping cost
    const discount = 0;
    return subTotal + shippingCost - discount;
  };

  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-[60px] px-20 box-border gap-6 max-w-full text-left text-xs text-gray-400 font-h4-32 mq480:pt-5 mq480:pb-5 mq480:box-border mq825:py-[25px] mq825:px-10 mq825:box-border mq1410:pt-[39px] mq1410:pb-[39px] mq1410:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="relative leading-[150%] font-medium">{`Home > ${product?.category?.name} > ${product?.brand?.name} > ${product.product_name_short}`}</div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full text-sm text-black mq825:gap-5">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1410:flex-wrap">
          {/* <Image
            className="h-[813px] flex-1 relative max-w-full overflow-hidden min-w-[481px] mq750:min-w-full"
            loading="lazy"
            width={740}
            height={813}
            alt=""
            src="/left.svg"
          /> */}
          <ContactLensImage product={product} />
          <div className="w-[500px] hidden flex-row items-start justify-start gap-4 max-w-full text-center mq750:flex-wrap">
            <div className="flex-1 border-gray-800 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-center py-1.5 px-10 min-w-[157px]">
              <div className="relative leading-[150%] font-medium">
                Without Power
              </div>
            </div>
            <div className="flex-1 border-black border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-center py-1.5 px-10 min-w-[157px]">
              <div className="relative leading-[150%] font-medium">
                With Power
              </div>
            </div>
          </div>
          <div className="w-[500px] flex flex-col items-start justify-start gap-4 max-w-full mq750:min-w-full mq1250:flex-1">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-gray-200 font-oswald">
              <div className="flex-1 flex flex-col items-start justify-start gap-3 max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 mq750:flex-wrap">
                    <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[161px]">
                      {product.brand.name}
                    </div>
                    <div className="flex-1 relative leading-[150%] font-medium font-h4-32 text-tomato text-right inline-block min-w-[161px]">
                      Out of Stock
                    </div>
                  </div>
                  <h1 className="m-0 self-stretch relative text-13xl leading-[130%] font-medium font-h4-32 text-black mq480:text-lgi mq480:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
                    {product.product_name_short}
                  </h1>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-2.5 max-w-full text-5xl text-black font-h4-32 mq750:flex-wrap">
                  <div className="flex-1 relative leading-[140%] font-medium inline-block min-w-[75px] max-w-full mq480:text-lgi mq480:leading-[27px]">
                    Aed {product.retail_price}
                  </div>
                  <Image
                    className="h-4 w-24 relative"
                    loading="lazy"
                    width={96}
                    height={16}
                    alt=""
                    src="/review.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-sm">
              <div className="self-stretch h-[53px] border-gray-500 border-t-[1px] border-solid border-gray-500 border-b-[1px] border-solid box-border overflow-x-auto shrink-0 flex flex-row items-center justify-start py-3.5 px-0 gap-6 mq480:gap-2">
                <div className="w-[101px] mq480:w-[60px] relative leading-[150%] font-medium inline-block">
                  Pack
                </div>
                <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[77px] mq480:pr-0 gap-2">
                  <div className="flex flex-row items-center">
                    <input
                      type="radio"
                      name="pack"
                      value="30"
                      checked={selectedPack === "30"}
                      onChange={handleRadioChange}
                      className="h-4 w-4 relative rounded-81xl border-black border-[1px] border-solid box-border"
                      id="pack30"
                    />
                    <label
                      htmlFor="pack30"
                      className="ml-2 relative leading-[150%] font-medium"
                    >
                      Pack of 30
                    </label>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="flex flex-row items-center">
                    <input
                      type="radio"
                      name="pack"
                      value="90"
                      checked={selectedPack === "90"}
                      onChange={handleRadioChange}
                      className="h-4 w-4 relative rounded-81xl border-black border-[1px] border-solid box-border"
                      id="pack90"
                    />
                    <label
                      htmlFor="pack90"
                      className="ml-2 relative leading-[150%] font-medium inline-block min-w-[76px]"
                    >
                      Pack of 90
                    </label>
                  </div>
                </div>
              </div>
              <div className="self-stretch border-gray-500 border-t-[1px] border-solid border-gray-500 border-b-[1px] border-solid box-border flex flex-col items-start justify-start py-3.5 px-0 gap-4 max-w-full">
                <div className="self-stretch relative text-base leading-[150%] font-semibold">
                  Select Your Prescription
                </div>
                {/* Eye Selection */}
                <div className="self-stretch flex flex-row items-center justify-start gap-6 max-w-full mq750:flex-wrap">
                  <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[19px]">
                    Eye
                  </div>
                  <div className="w-[376px] flex flex-row items-center justify-start gap-6 max-w-full mq480:flex-wrap">
                    {differentPowers && (
                      <>
                        <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[114px]">
                          Left
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start gap-2 min-w-[114px]">
                          Right
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {/* Power Selection */}
                <div className="self-stretch flex flex-row items-center justify-start gap-6 max-w-full mq750:flex-wrap">
                  <div className="relative leading-[150%] font-medium">Power/Sphere</div>
                  <div className="flex-1 flex flex-row items-center justify-start gap-4 min-w-[244px] max-w-full text-gray-400 mq480:flex-wrap">
                    {/* Right Eye Power */}
                    <div className="flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-0.5 px-3.5 gap-2.5 min-w-[117px] min-h-[29px]">
                      <select
                        value={rightEyePower}
                        onChange={(e) => setRightEyePower(e.target.value)}
                        className="flex-1 border-none text-center bg-transparent"
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="-1.00">-1.00</option>
                        <option value="-1.50">-1.50</option>
                        <option value="-2.00">-2.00</option>
                      </select>
                    </div>

                    {/* Left Eye Power (Shown Only When Checkbox is Checked) */}
                    {differentPowers && (
                      <div className="flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-0.5 px-3.5 gap-2.5 min-w-[117px] min-h-[29px]">
                        <select
                          value={leftEyePower}
                          onChange={(e) => setLeftEyePower(e.target.value)}
                          className="flex-1 border-none text-center bg-transparent"
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="-1.00">-1.00</option>
                          <option value="-1.50">-1.50</option>
                          <option value="-2.00">-2.00</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Number of Boxes */}
                <div className="self-stretch flex flex-row items-center justify-start gap-6 max-w-full mq750:flex-wrap">
                  <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[66px]">
                    No. of Boxes
                  </div>
                  <div className="w-[376px] flex flex-row items-center justify-start gap-4 max-w-full text-center text-gray-400 mq480:flex-wrap">
                    {/* Right Eye Boxes */}
                    <div className="flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-0.5 pl-[15px] pr-3.5 gap-2.5 min-w-[117px] min-h-[29px]">
                      <button
                        type="button"
                        onClick={() => setRightEyeBoxes(Math.max(0, rightEyeBoxes - 1))}
                        className="h-[12px] w-[12px] relative shrink-0 flex items-center justify-center"
                      >
                        <Image width={12} height={12} alt="" src="/vector-2.svg" />
                      </button>
                      <div className="flex-1 relative leading-[150%] font-medium text-center">
                        {rightEyeBoxes}
                      </div>
                      <button
                        type="button"
                        onClick={() => setRightEyeBoxes(rightEyeBoxes + 1)}
                        className="h-[12px] w-[12px] relative shrink-0 flex items-center justify-center"
                      >
                        <Image width={12} height={12} alt="" src="/vector-3.svg" />
                      </button>
                    </div>

                    {/* Left Eye Boxes (Shown Only When Checkbox is Checked) */}
                    {differentPowers && (
                      <div className="flex-1 border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-center py-0.5 pl-[15px] pr-3.5 gap-2.5 min-w-[117px] min-h-[29px]">
                        <button
                          type="button"
                          onClick={() => setLeftEyeBoxes(Math.max(0, leftEyeBoxes - 1))}
                          className="h-[12px] w-[12px] relative shrink-0 flex items-center justify-center"
                        >
                          <Image width={12} height={12} alt="" src="/vector-2.svg" />
                        </button>
                        <div className="flex-1 relative leading-[150%] font-medium text-center">
                          {leftEyeBoxes}
                        </div>
                        <button
                          type="button"
                          onClick={() => setLeftEyeBoxes(leftEyeBoxes + 1)}
                          className="h-[12px] w-[12px] relative shrink-0 flex items-center justify-center"
                        >
                          <Image width={12} height={12} alt="" src="/vector-3.svg" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Checkbox for Two Different Powers */}
                <div className="flex flex-row items-start justify-start gap-2">
                  <input
                    type="checkbox"
                    checked={differentPowers}
                    onChange={(e) => setDifferentPowers(e.target.checked)}
                    className="w-4 h-4 relative rounded-81xl border-black border-[1px] border-solid box-border"
                  />
                  <div className="relative leading-[150%] font-medium">
                    I need two different powers
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-4 max-w-full text-center">
              <div className="self-stretch border-gray-800 border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[7px] gap-3 min-h-[56px] max-w-full text-left text-xs text-gray-200 mq750:flex-wrap">
                <Image
                  className="h-10 w-[63.3px] relative rounded object-cover"
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
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 gap-3 text-sm mq480:flex-wrap mq480:justify-center">
                <div className="border-gray-800 border-[1px] border-solid overflow-x-auto hidden flex-row items-center justify-center gap-3">
                  <Image
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <div className="relative leading-[150%] font-medium">1</div>
                  <Image
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--facebook1.svg"
                />
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--instagram1.svg"
                />
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--x1.svg"
                />
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--linkedin1.svg"
                />
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--youtube3.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-4 mq750:flex-wrap mq480:flex-col">
                <div
                  className="flex-[0.7133] mq480:w-full border-black border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-1.5 pl-[68px] pr-[65px] min-w-[157px] min-h-[40px] mq480:flex-1 cursor-pointer hover:bg-black hover:text-white hover:border-[1px] hover:border-solid transition-all duration-300"
                  onClick={() => addItem(product, "cart")}
                >
                  <div className="flex-1 relative leading-[150%] font-medium">
                    ADD TO BAG
                  </div>
                </div>
                <div
                  className="flex-1 border-black mq480:w-full border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-1.5 px-[45px] min-w-[157px] min-h-[40px] cursor-pointer hover:bg-black hover:text-white hover:border-[1px] hover:border-solid transition-all duration-300"
                  onClick={() => addItem(product, "whishlist")}
                >
                  <div className="flex-1 relative leading-[150%] font-medium">
                    ADD TO WISHLIST
                  </div>
                </div>
              </div>
              <div className="bg-black overflow-hidden mq480:w-full flex flex-row items-center justify-center py-2 pl-[199px] pr-[198px] text-background-color-primary mq480:pl-5 mq480:pr-5 mq480:box-border mq750:pl-[99px] mq750:pr-[99px] mq750:box-border cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300">
                <div className="relative leading-[150%] font-medium">
                  BUY IT NOW
                </div>
              </div>
            </div>
            <div className="self-stretch border-gray-500 border-t-[1px] border-solid border-gray-500 border-b-[1px] border-solid box-border flex flex-row items-start justify-start py-3.5 px-0 gap-2 min-h-[88px] max-w-full text-sm mq750:flex-wrap">
              <div className="w-[500px] overflow-hidden shrink-0 hidden flex-row items-center justify-start gap-2 max-w-full">
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
                  width={24}
                  height={24}
                  alt=""
                  src="/img2@2x.png"
                />
                <div className="relative leading-[150%] font-medium">
                  Gift wrapping and customization
                </div>
              </div>
              <div className="h-14 w-6 relative">
                <Image
                  className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden object-cover"
                  width={24}
                  height={24}
                  alt=""
                  src="/img-11@2x.png"
                />
                <Image
                  className="absolute top-[32px] left-[0px] w-6 h-6 overflow-hidden object-cover"
                  width={24}
                  height={24}
                  alt=""
                  src="/img-21@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border min-w-[304px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
                  <div className="relative leading-[150%] font-medium">
                    Free shipping on all orders
                  </div>
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Guaranteed delivery within 48 hours in Dubai.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[37px] w-[500px] hidden flex-row items-center justify-between gap-[6.06px] max-w-full text-sm">
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
            <div className="w-px relative border-gray-500 border-r-[1px] border-solid box-border" />
            <div className="flex flex-row items-center justify-center py-2 px-4 gap-2">
              <Image
                className="h-[21px] w-[21px] relative overflow-hidden shrink-0 object-cover"
                width={21}
                height={21}
                alt=""
                src="/solarcasebold-1@2x.png"
              />
              <div className="relative leading-[150%] font-medium">
                Cleaning Cloth
              </div>
            </div>
            <div className="w-px relative border-gray-500 border-r-[1px] border-solid box-border" />
            <div className="flex flex-row items-center justify-center py-2 px-4 gap-2">
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
        </div>
      </div>
    </section>
  );
});

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
