import { useEffect } from "react";
import Image from "next/image";

const FiltersSidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when sidebar is open
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset scroll when component unmounts
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[350px] mq480:w-[300px] h-[-webkit-fill-available] bg-white shadow-lg z-50 flex flex-col p-6 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="text-xl text-gray-200 hover:text-black cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Filter Options */}
        <div className="flex flex-col mt-4 space-y-3">
          {[
            "Brand",
            "Price",
            "Frame Colour",
            "Frame Material",
            "Frame Shape",
            "Frame Type",
            "Frame Size",
            "Frame Fit",
            "Lens Colour",
            "Available with Prescription",
          ].map((filter, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-base mq480:text-sm font-medium text-black border-b py-2 cursor-pointer hover:text-red"
            >
              <span>{filter}</span>
              <Image
                src="/arrow-drop.svg"
                alt="arrow-drop"
                width={12}
                height={12}
              />
            </div>
          ))}
        </div>

        {/* Apply & Clear Buttons */}
        <div className="mt-auto flex gap-4 pt-10">
          <button className="w-1/2 border border-gray-400 text-gray-200 py-3 rounded-md cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
            CLEAR
          </button>
          <button className="w-1/2 bg-black text-white py-3 rounded-md cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300">
            APPLY FILTERS
          </button>
        </div>
      </div>
    </>
  );
};

export default FiltersSidebar;
