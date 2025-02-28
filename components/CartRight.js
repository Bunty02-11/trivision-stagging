import { memo } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Right = memo(({ className = "", subTotalAmount }) => {
  const tax = subTotalAmount * 0.05; // Assuming 5% tax
  const totalAmount = subTotalAmount + tax;

  const handleCheckoutClick = () => {
    const tabbyUrl = `https://checkout.tabby.ai/promos/product-page/installments/en/?price=${totalAmount?.toFixed(
      2
    )}&currency=AED&merchant_code=TOUAE&public_key=-%20pk_test_4ab49a69-ebe0-4e50-b924-3b1ba75b7f36`;

    // Open Tabby checkout page in a new tab
    window.open(tabbyUrl, "_blank");
  };

  const handleCheckOutTabby = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("User ID not found in localStorage");
      return;
    }

    const body = {
      user: userId,
      payment_method: "tabby",
    };

    try {
      const response = await axios.post("http://localhost:5055/api/proceed/proceed-order", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Order proceeded successfully");
      // console.log("Order proceeded successfully:", response.data.configuration.available_products.installments[0].web_url);
      window.location.href = response.data.configuration.available_products.installments[0].web_url;
      // You can handle the response data as needed
    } catch (error) {
      toast.error("There was a problem with the order");
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleCheckOutStrable = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("User ID not found in localStorage");
      return;
    }

    const body = {
      user: userId,
      payment_method: "strabl",
    };

    try {
      const response = await axios.post("http://localhost:5055/api/proceed/proceed-order", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Order proceeded successfully");
      console.log("Order proceeded successfully:", response.data.data.cartId);
      window.location.href = `https://dev-checkout.strabl.io/en/?token=${response.data.data.cartId}`
      // You can handle the response data as needed
    } catch (error) {
      toast.error("There was a problem with the order");
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div
      className={`border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-start p-5 gap-6 max-w-full text-left text-base text-black font-h4-32 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-3">
        <div className="flex-1 relative leading-[150%] font-medium text-lg">
          Subtotal
        </div>
        <div className="relative leading-[150%] font-medium text-lg">
          {subTotalAmount?.toFixed(2)} AED
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-3">
        <div className="flex-1 relative leading-[150%] font-medium text-gray-200 text-base">
          Include VAT
        </div>
        <div className="relative leading-[150%] font-medium text-gray-200 text-base">
          {tax?.toFixed(2)} AED
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-3 pb-5 border-b-[1px] border-gray-800 border-solid border-box">
        <div className="flex-1 relative leading-[150%] font-medium text-lg">
          Order Total
        </div>
        <div className="relative leading-[150%] font-semibold text-lg">
          {totalAmount?.toFixed(2)} AED
        </div>
      </div>
      <div
        className="self-stretch border-[1px] border-solid border-black bg-white text-background-color-black flex flex-row items-center justify-center py-2 px-3 cursor-pointer hover:bg-black hover:text-white hover:border-[1px] hover:border-solid transition-all duration-300"
        onClick={handleCheckOutTabby}
      >
        <div className="flex-1 relative leading-[150%] font-medium text-center flex items-center justify-center">
          Pay By
          <img
            src="/tabby-logo-1.png"
            alt="Payment Method"
            className="ml-2 w-12 h-5"
          />
        </div>
      </div>
      <div
        className="self-stretch border-[1px] border-solid border-black bg-white text-background-color-black flex flex-row items-center justify-center py-2 px-3 cursor-pointer hover:bg-black hover:text-white hover:border-[1px] hover:border-solid transition-all duration-300"
        onClick={handleCheckoutClick}
      >
        <div className="flex-1 relative leading-[150%] font-medium text-center flex items-center justify-center">
          Pay By
          <img
            src="/tamara.png"
            alt="Payment Method"
            className="ml-2 w-12 h-5"
          />
        </div>
      </div>
      <div
        className="self-stretch border-[1px] border-solid border-black bg-white text-background-color-black flex flex-row items-center justify-center py-2 px-3 cursor-pointer hover:bg-black hover:text-white hover:border-[1px] hover:border-solid transition-all duration-300"
        onClick={handleCheckOutStrable}
      >
        <div className="flex-1 relative leading-[150%] font-medium text-center flex items-center justify-center">
          Pay By
          <img
            src="/strabl.png"
            alt="Payment Method"
            className="ml-2 w-12 h-5"
          />
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
});

Right.propTypes = {
  className: PropTypes.string,
  subTotalAmount: PropTypes.number.isRequired,
};

export default Right;