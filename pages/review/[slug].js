import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";

const SelectYourLens = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async (slug, token) => {
      try {
        const response = await axios.get(
          `https://apitrivsion.prismcloudhosting.com/api/selectlens/by-product-slug/${slug}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send token in headers
              "Content-Type": "application/json",
            },
          }
        );
        setProduct(response.data);
      } catch (error) {
        console.error(
          "Error fetching product data:",
          error.response?.data?.message || error.message
        );
      }
    };

    const token = localStorage.getItem("token"); // Get token from localStorage

    if (!token) {
      console.error("Unauthorized: No token found!");
      return; // Stop execution if no token
    }

    if (slug) {
      fetchData(slug, token);
    }
  }, [slug]);

  // Helper function to get prescription details
  const getPrescriptionDetails = () => {
    if (product?.prescription) {
      const hasImageUrl = product.prescription.some(
        (prescription) => prescription.image_url
      );
      if (hasImageUrl) {
        return "Prescription Uploaded";
      } else {
        return "Entered Manually";
      }
    }
    return "Entered Manually";
  };

  const addItemToCart = async (e) => {
    e.stopPropagation(); // Stop the click event from propagating
    const token = localStorage.getItem("token"); // Retrieve the token
    const userId = localStorage.getItem("userId"); // Retrieve the user ID

    if (!token) {
      alert("User is not authenticated!");
      return;
    }

    const newCartItem = {
      product: product.product_id._id,
      quantity: 1,
      shipping_info: "cart",
    };

    try {
      const response = await axios.post(
        "https://apitrivsion.prismcloudhosting.com/api/order/add",
        {
          user: userId,
          cart: [...cart, newCartItem],
          subTotal: calculateSubTotal([...cart, newCartItem]),
          shippingCost: 0, // Replace with actual shipping cost
          discount: 0, // Replace with actual discount
          total: calculateTotal([...cart, newCartItem]),
          paymentMethod: "YOUR_PAYMENT_METHOD", // Replace with actual payment method
          shipping_info: "cart",
          additional_info: product._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Set the Bearer token in headers
            "Content-Type": "application/json",
          },
        }
      );

      alert("Product added to cart!");
      setCart([...cart, newCartItem]); // Update local cart state
      router.push("/cart"); // Navigate to the cart page
    } catch (error) {
      console.error("There was an error adding the product to the cart", error);
    }
  };

  const calculateSubTotal = (cart) => {
    return cart.reduce(
      (total, item) => total + item.quantity * product.product_id.retail_price,
      0
    );
  };

  const calculateTotal = (cart) => {
    const subTotal = calculateSubTotal(cart);
    const shippingCost = 0; // Replace with actual shipping cost
    const discount = 0; // Replace with actual discount
    return subTotal + shippingCost - discount;
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleNavigationToProduct = (slug) => {
    router.push(`/prescriptionForm/${slug}`);
  };

  return (
    <div className="w-full relative flex flex-col items-center justify-center text-left text-base text-black font-p3-16">
      <div className="self-stretch relative bg-whitesmoke-100 border-gray-200 border-b-[1px] border-solid box-border h-20 overflow-hidden shrink-0">
        <div className="absolute top-[18px] left-[1316px] flex flex-row items-end justify-center"></div>
        <div className="absolute top-[calc(50%-_12px)] left-[calc(50%+_107.5px)] flex flex-row items-center justify-start gap-6">
          <div className="relative leading-[150%] font-semibold">
            Don’t know your prescription?
          </div>
          <div className="flex flex-row items-center justify-center gap-3 text-right">
            <Image
              className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0.6]"
              width={24}
              height={24}
              alt=""
              src="/iconoir_eye-solid.png"
            />
            <div className="relative [text-decoration:underline] leading-[150%] font-medium opacity-[0.6]">
              Book an Eye Test
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%-_18px)] left-[calc(50%-_740px)] flex flex-row items-center justify-start gap-4">
          {product && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-6 h-6 cursor-pointer"
              onClick={() =>
                handleNavigationToProduct(
                  product.product_id.slug,
                  product.product_id.category
                )
              }
            />
          )}
          <Image
            className="w-[185.6px] h-9 object-cover cursor-pointer"
            width={186}
            height={36}
            alt=""
            src="/logo@2x.png"
            onClick={() => handleNavigation("/")}
          />
        </div>
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-[calc(50%-_18px)] right-[20px] w-6 h-6 cursor-pointer"
          onClick={() => handleNavigation("/")}
        />
      </div>
      <div className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-center pt-10 px-[60px] pb-[60px] gap-6 text-center text-xs text-gray-300">
        <div className="self-stretch flex flex-row items-center justify-center gap-4">
          <div className="relative leading-[150%] font-medium ">Lens Type</div>
          <div className="w-[401px] relative border-black border-t-[1px] border-solid box-border h-px" />
          <div className="relative leading-[150%] font-medium">Lens</div>
          <div className="w-[401px] relative border-black border-t-[1px] border-solid box-border h-px" />
          <div className="relative leading-[150%] font-medium text-black">
            Review
          </div>
        </div>
        {product && product.product_id.product_images.length > 0 && (
          <div className="w-[1280px] flex flex-col items-center justify-center text-left text-base text-black">
            <div className="self-stretch flex flex-row items-start justify-start gap-10">
              <div className="self-stretch w-[482px] flex flex-row items-start justify-start">
                <Image
                  className="w-[482px] relative h-[382px] object-contain"
                  width={482}
                  height={382}
                  alt={product?.product_id.product_name_long}
                  src={product.product_id.product_images[3]}
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-end gap-6">
                <div className="self-stretch flex flex-col items-start justify-start gap-4">
                  <div className="self-stretch flex flex-col items-start justify-center gap-2">
                    <div className="self-stretch flex flex-row items-start justify-start gap-2">
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        {product?.product_id.product_name_long}
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        AED {product?.total}
                      </div>
                    </div>
                    <div className="relative text-sm leading-[150%] font-medium">
                      {product?.product_id.product_name_long}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-center gap-2">
                    <div className="self-stretch flex flex-row items-start justify-start gap-2">
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        Lens Type
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        AED {product.additional_info[0].price}
                      </div>
                    </div>
                    <div className="relative text-sm leading-[150%] font-medium">
                      {" "}
                      {product.additional_info[0].lensType}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-center gap-2">
                    <div className="self-stretch relative leading-[150%] font-semibold">
                      Prescription
                    </div>
                    <div className="self-stretch relative text-sm leading-[150%] font-medium">
                      {getPrescriptionDetails()}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-center gap-2">
                    <div className="self-stretch flex flex-row items-start justify-start gap-2">
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        Total
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        AED {product?.total}
                      </div>
                    </div>
                    {/* <div className="self-stretch flex flex-row items-start justify-start gap-2.5 text-sm">
                                            <div className="flex-1 relative leading-[150%] font-medium">Include VAT</div>
                                            <div className="relative leading-[150%] font-medium text-right">AED{product.total * 0.05}</div>
                                        </div> */}
                  </div>
                </div>
                <div
                  className="w-[379px] bg-black h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-10 box-border text-center text-white cursor-pointer"
                  onClick={addItemToCart}
                >
                  <div className="relative leading-[150%] font-medium">
                    ADD TO BAG
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectYourLens;
