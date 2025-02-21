import { memo } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const Right = memo(({ className = "", totalAmount }) => {
  const router = useRouter();
  const tax = totalAmount * 0.05; // Assuming 5% tax
  const subTotal = totalAmount - tax;


  const handleCheckoutClick = () => {
    const tabbyUrl = `https://checkout.tabby.ai/promos/product-page/installments/en/?price=${totalAmount.toFixed(
      2
    )}&currency=AED&merchant_code=TOUAE&public_key=-%20pk_test_4ab49a69-ebe0-4e50-b924-3b1ba75b7f36`;

    // Open Tabby checkout page in a new tab
    window.open(tabbyUrl, "_blank");
  };

  return (
    <div
      className={`border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[16px] px-[20px] gap-4 max-w-full text-left text-base text-black font-h4-32 rounded-lg ${className}`}
    >
      <div className="self-stretch border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-between py-2.5 px-3 gap-3 rounded-lg">
        <div className="flex-1 relative leading-[150%] font-medium">
          Subtotal
        </div>
        <div className="relative leading-[150%] font-medium">
          {subTotal.toFixed(2)} AED
        </div>
      </div>
      <div className="self-stretch border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-between py-2.5 px-3 gap-3 rounded-lg">
        <div className="flex-1 relative leading-[150%] font-medium">Tax</div>
        <div className="relative leading-[150%] font-medium">
          {tax.toFixed(2)} AED
        </div>
      </div>
      <div className="self-stretch border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-between py-2.5 px-3 gap-3 rounded-lg">
        <div className="flex-1 relative leading-[150%] font-medium">Total</div>
        <div className="relative leading-[150%] font-semibold">
          {totalAmount.toFixed(2)} AED
        </div>
      </div>
      <div
        className="self-stretch bg-black text-background-color-primary flex flex-row items-center justify-center py-2 px-3 rounded-lg cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
        onClick={handleCheckoutClick}
      >
        <div className="flex-1 relative leading-[150%] font-medium text-center">
          CHECK OUT
        </div>
      </div>
    </div>
  );
});

Right.propTypes = {
  className: PropTypes.string,
  totalAmount: PropTypes.number.isRequired,
};

export default Right;
