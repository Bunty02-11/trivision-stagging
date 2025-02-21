import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/footer";
import FrameComponent1 from "../components/frame-component1";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const Wishlist = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState([]);

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

        // let data
        const wishlistOrders = response.data.orders.filter(
          (order) => order.shipping_info === "whishlist"
        );

        setOrders(wishlistOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleAddToBag = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.put(
        `https://apitrivsion.prismcloudhosting.com/api/orders/${orderId}`,
        {
          shipping_info: "cart",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response, "Order updated");
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-21xl text-background-color-primary font-h4-32">
        <FrameComponent1 />
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-end pt-[340px] px-[284px] pb-[60px] gap-6 bg-[url('/wishlistBanner.jpg')] bg-cover bg-no-repeat bg-[top] mt-[-80px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[142px] mq750:pr-[142px] mq750:pb-[39px] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[355px] pr-[354px] mq1050:pl-[177px] mq1050:pr-[177px] mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-[inherit] mq450:text-5xl mq450:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
              Wishlist
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
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[60px] px-20 box-border max-w-full text-left text-base text-black font-h4-32 mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq750:pl-10 mq750:pr-10 mq750:box-border">
        {orders.map((order) =>
          order.cart.map((item) => (
            <div
              key={item.product._id}
              className="self-stretch bg-background-color-primary flex flex-row items-center justify-center flex-wrap content-center py-6 px-4 box-border gap-6 max-w-full"
            >
              <Image
                className="h-[226px] w-[226px] relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                width={226}
                height={226}
                alt={item.product.product_name_short}
                src={item.product.product_images[0]}
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[649px] max-w-full mq1050:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 text-gray-200 font-oswald mq450:flex-wrap">
                    <div className="relative leading-[150%] font-medium">
                      {item.product.product_name_short}
                    </div>
                    <div className="relative leading-[150%] font-medium font-h4-32 text-right">
                      Remove
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Quantity: {item.quantity}
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center max-w-full">
                    <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                      <span className="font-semibold">Color:</span>
                      <span className="font-medium">
                        {" "}
                        {item.product.frame_color}
                      </span>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center max-w-full">
                    <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                      <span className="font-semibold">{`Gender: `}</span>
                      <span className="font-medium">{item.product.gender}</span>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center max-w-full">
                    <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                      <span className="font-semibold">{`Fit: `}</span>
                      <span className="font-medium">
                        {item.product.frame_shape}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="self-stretch border-gray-800 border-t-[1px] border-solid flex flex-row items-center justify-between pt-3.5 px-0 pb-0 gap-5 text-right mq450:flex-wrap">
                  <div className="relative leading-[150%] font-semibold inline-block min-w-[66px]">
                    Aed {item.product.retail_price}
                  </div>
                  <div
                    className="bg-black overflow-hidden flex flex-row items-center justify-center py-2.5 px-[35px] text-center text-sm text-background-color-primary cursor-pointer"
                    onClick={() => handleAddToBag(order._id)}
                  >
                    <div
                      className="flex-1 relative leading-[150%] font-medium inline-block min-w-[94px]"
                      onClick={() => handleAddToBag(order._id)}
                    >
                      ADD TO BAG
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
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

export default Wishlist;
