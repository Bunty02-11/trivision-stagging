import { memo } from "react";
import PropTypes from "prop-types";

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

  return (
    <div
      className={`border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-start p-5 gap-6 max-w-full text-left text-base text-black font-h4-32  ${className}`}
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
      <div className="self-stretch  flex flex-row items-center justify-between gap-3">
        <div className="flex-1 relative leading-[150%] font-medium text-lg">
          Order Total
        </div>
        <div className="relative leading-[150%] font-semibold text-lg">
          {totalAmount?.toFixed(2)} AED
        </div>
      </div>
      <div
        className="self-stretch bg-black text-background-color-primary flex flex-row items-center justify-center py-2 px-3 cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
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
  subTotalAmount: PropTypes.number.isRequired,
};

export default Right;
