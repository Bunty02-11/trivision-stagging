import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/footer";
import FrameComponent1 from "../components/frame-component1";
import axios from "axios";
import Right from "../components/CartRight";
import Loader from "../components/Loader/Loader";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          "https://apitrivsion.prismcloudhosting.com/api/order",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const cartOrders = response?.data?.filter(
          (order) => order.shipping_info === "cart"
        );

        setOrders(cartOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleQuantityChange = async (
    orderId,
    productId,
    quantity,
    boxValue,
    boxType // "right" or "left"
  ) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      // Find the current order and product details
      setOrders((prevOrders) => {
        return prevOrders.map((order) => {
          if (order._id === orderId) {
            return {
              ...order,
              cart: order.cart.map((item) => {
                if (item.product._id === productId) {
                  const existingAdditionalInfo =
                    item.additional_info && item.additional_info.length > 0
                      ? item.additional_info[0]
                      : { selectRightBox: 0, selectLeftBox: 0 };

                  const updatedAdditionalInfo = {
                    ...existingAdditionalInfo, // Preserve other fields
                    [boxType === "right" ? "selectRightBox" : "selectLeftBox"]:
                      (existingAdditionalInfo[
                        boxType === "right" ? "selectRightBox" : "selectLeftBox"
                      ] || 0) + boxValue, // Ensure update happens
                  };

                  return {
                    ...item,
                    quantity: item.quantity + quantity,
                    additional_info: [updatedAdditionalInfo], // Maintain structure
                  };
                }
                return item;
              }),
            };
          }
          return order;
        });
      });

      // API call with updated additional_info but keeping all other properties
      await axios.patch(
        `https://apitrivsion.prismcloudhosting.com/api/orders/quantity/${orderId}`,
        {
          cart: [
            {
              product: productId,
              quantity: quantity,
              additional_info: [
                {
                  selectRightBox: boxType === "right" ? boxValue : undefined, // Update only right box when right button is clicked
                  selectLeftBox: boxType === "left" ? boxValue : undefined, // Update only left box when left button is clicked
                },
              ],
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const calculateTotal = () => {
    return orders.reduce((total, order) => {
      return (
        total +
        order.cart.reduce((orderTotal, item) => {
          if (!item?.product?.retail_price) return orderTotal; // Ensure product exists

          let quantityTotal = 0;

          if (item.quantity) {
            quantityTotal += item.product.retail_price * item.quantity;
          }

          if (item?.additional_info?.[0]) {
            const { selectRightBox, selectLeftBox } = item.additional_info[0];

            if (selectRightBox) {
              quantityTotal += item.product.retail_price * selectRightBox;
            }

            if (selectLeftBox) {
              quantityTotal += item.product.retail_price * selectLeftBox;
            }
          }

          return orderTotal + quantityTotal;
        }, 0)
      );
    }, 0);
  };

  const handleRemoveOrder = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      await axios.delete(
        `https://apitrivsion.prismcloudhosting.com/api/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update state after successful deletion
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId)
      );
    } catch (error) {
      console.error("Error removing order:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-21xl text-background-color-primary font-h4-32">
        <FrameComponent1 />
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-end pt-[340px] px-[284px] pb-[60px] gap-6 bg-[url('/cartBanner.jpg')] bg-cover bg-no-repeat bg-[top] mt-[-80px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[142px] mq750:pr-[142px] mq750:pb-[39px] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[355px] pr-[354px] mq1050:pl-[177px] mq1050:pr-[177px] mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq450:text-5xl mq450:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
              Cart
            </h1>
          </div>
          <div className="relative text-base leading-[150%] font-medium">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </div>
        </div>
      </section>
      {orders?.filter((x) => x?.cart)?.length == 0 ? (
        <section className="flex flex-col justify-center items-center w-full h-[50vh]">
          <p className="text-xl text-black">Your shopping bag is empty!</p>
          <button
            className="bg-black p-4 text-white text-base cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
            onClick={() => router.push("/sunglasses/sunglasses")}
          >
            START SHOPPING
          </button>
        </section>
      ) : (
        <section className="self-stretch flex flex-row justify-between px-20 py-[60px] box-border max-w-full text-left text-base text-black font-h4-32 mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq750:pl-10 mq750:pr-10 mq750:box-border">
          <div
            className="w-97 custom-scrollbar"
            style={{
              maxHeight: "55vh",
              overflowY: "auto", // Show scrollbar only when needed
              overflowX: "hidden",
            }}
          >
            {/* Cart Item */}
            {orders &&
              orders?.map((order) =>
                order?.cart?.map((item) => (
                  <div className="p-4" key={item?.product?._id}>
                    <div className="flex items-start gap-x-6 mq480:flex-wrap">
                      {/* Product Image */}
                      <img
                        className="w-[180px] h-[180px] object-contain border-gray-500 border-[1px] border-solid"
                        alt={item && item?.product?.product_name_short}
                        src={item && item?.product?.product_images?.[3]}
                      />

                      {/* Product Info */}
                      <div className="flex-1">
                        {item?.product?.brand?.name && (
                          <p className="text-gray-200 text-start text-sm font-bold m-0">
                            {item && item?.product?.brand?.name}
                          </p>
                        )}
                        <p className="text-lg text-black text-base text-start font-medium">
                          {item && item?.product?.product_name_short}
                        </p>
                        {item?.data == "pack" && (
                          <p className="text-black text-sm text-start mt-0">
                            Pack of:{" "}
                            {item && item?.additional_info?.[0]?.pack_of}
                          </p>
                        )}
                        {item?.data == "pack" && (
                          <p className="text-black text-sm text-start mt-0">
                            Power/Sphere: {"R:"}{" "}
                            {item &&
                              item?.additional_info?.[0]?.selectRightPower}{" "}
                            {"L:"}{" "}
                            {item &&
                              item?.additional_info?.[0]?.selectLeftPower}
                          </p>
                        )}
                        {item?.product?.frame_color && (
                          <p className="text-black text-sm text-start mt-0">
                            Color: {item && item?.product?.frame_color}
                          </p>
                        )}
                        {item?.product?.gender && (
                          <p className="text-black text-sm text-start mt-0">
                            Gender: {item && item?.product?.gender}
                          </p>
                        )}
                        {item?.product?.frame_shape && (
                          <p className="text-black text-sm text-start mt-0">
                            Fit: {item && item?.product?.frame_shape}
                          </p>
                        )}

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-x-4 mt-4">
                          {item?.data == "pack" && (
                            <div className="flex items-center gap-x-4">
                              <p className="text-black text-sm text-start mt-0">
                                No. of Boxes:
                              </p>
                              <div className="flex items-center gap-x-3 border-gray-200 border-[1px] border-solid p-1">
                                <button
                                  className="border-none px-2 py-1 text-lg cursor-pointer bg-transparent"
                                  onClick={() =>
                                    handleQuantityChange(
                                      order?._id,
                                      item.product?._id,
                                      item?.quantity,
                                      -1,
                                      "right"
                                    )
                                  }
                                  disabled={
                                    item?.additional_info?.[0]
                                      ?.selectRightBox <= 1
                                  }
                                >
                                  {"-"}
                                </button>
                                <span className="px-2 text-black text-sm">
                                  {item &&
                                    item?.additional_info?.[0]?.selectRightBox}
                                </span>
                                <button
                                  className="border-none px-2 py-1 text-lg cursor-pointer bg-transparent"
                                  onClick={() =>
                                    handleQuantityChange(
                                      order?._id,
                                      item?.product._id,
                                      item?.quantity,
                                      1,
                                      "right"
                                    )
                                  }
                                >
                                  {"+"}
                                </button>
                              </div>
                              <div className="flex items-center gap-x-3 border-gray-200 border-[1px] border-solid p-1">
                                <button
                                  className="border-none px-2 py-1 text-lg cursor-pointer bg-transparent"
                                  onClick={() =>
                                    handleQuantityChange(
                                      order?._id,
                                      item.product?._id,
                                      item?.quantity,
                                      -1,
                                      "left"
                                    )
                                  }
                                  disabled={
                                    item?.additional_info?.[0]?.selectLeftBox <=
                                    1
                                  }
                                >
                                  {"-"}
                                </button>
                                <span className="px-2 text-black text-sm">
                                  {item &&
                                    item?.additional_info?.[0]?.selectLeftBox}
                                </span>
                                <button
                                  className="border-none px-2 py-1 text-lg cursor-pointer bg-transparent"
                                  onClick={() =>
                                    handleQuantityChange(
                                      order?._id,
                                      item?.product._id,
                                      item?.quantity,
                                      1,
                                      "left"
                                    )
                                  }
                                >
                                  {"+"}
                                </button>
                              </div>
                            </div>
                          )}
                          {item?.data != "pack" && (
                            <div className="flex items-center gap-x-3 border-gray-200 border-[1px] border-solid p-1">
                              <button
                                className="border-none px-2 py-1 text-lg cursor-pointer bg-transparent"
                                onClick={() =>
                                  handleQuantityChange(
                                    order?._id,
                                    item.product?._id,
                                    -1
                                  )
                                }
                                disabled={item?.quantity <= 1}
                              >
                                {"-"}
                              </button>
                              <span className="px-2 text-black text-sm">
                                {item && item?.quantity}
                              </span>
                              <button
                                className="border-none px-2 py-1 text-lg cursor-pointer bg-transparent"
                                onClick={() =>
                                  handleQuantityChange(
                                    order?._id,
                                    item?.product._id,
                                    1
                                  )
                                }
                              >
                                {"+"}
                              </button>
                            </div>
                          )}
                          {/* Favorite Button */}
                          {/* <button className="text-gray-200 bg-transparent border-gray-200 border-[1px] border-solid p-1 cursor-pointer">
                              <Image
                                className="h-7 w-7"
                                loading="lazy"
                                width={7}
                                height={7}
                                alt=""
                                src="/wish.svg"
                              />
                            </button> */}

                          {/* Remove Button */}
                          <button
                            className="text-gray-200 bg-transparent border-gray-200 border-b-[1px] border-solid p-0 cursor-pointer"
                            onClick={() => handleRemoveOrder(order?._id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      {item?.data == "pack" ? (
                        <p className="text-sm font-semibold text-black p-0">
                          AED{" "}
                          {item &&
                            item?.product?.retail_price *
                              ((item?.additional_info?.[0]?.selectRightBox ||
                                0) +
                                (item?.additional_info?.[0]?.selectLeftBox ||
                                  0) || 1)}
                        </p>
                      ) : (
                        <p className="text-sm font-semibold text-black p-0">
                          AED {console.log(item, "item")}
                          {orders && orders.total * item?.quantity}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
          </div>
          <Right className="w-1/3 ml-6" subTotalAmount={calculateTotal()} />
        </section>
      )}
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

export default Cart;
