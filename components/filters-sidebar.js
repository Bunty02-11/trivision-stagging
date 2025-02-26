import { useEffect, useState } from "react";
import Image from "next/image";

const FiltersSidebar = ({ isOpen, onClose }) => {
  const [variants, setVariants] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const fetchVariations = async () => {
      try {
        const response = await fetch(
          "https://apitrivsion.prismcloudhosting.com/api/filter/data/products/variants"
        );
        const data = await response.json();
        setVariants(data.variants || {});
      } catch (error) {
        console.error("Error fetching variants:", error);
      }
    };

    fetchVariations();
  }, []);

  const toggleExpand = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prev) => {
      const updatedCategory = prev[category] || [];
      if (updatedCategory.includes(value)) {
        return {
          ...prev,
          [category]: updatedCategory.filter((item) => item !== value),
        };
      } else {
        return { ...prev, [category]: [...updatedCategory, value] };
      }
    });
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-[350px] mq480:w-[300px] h-[-webkit-fill-available] bg-white shadow-lg z-50 flex flex-col p-6 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="text-xl text-gray-200 hover:text-black cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Map through all valid categories dynamically */}
        {Object.entries(variants)
          .filter(([_, subCategories]) => {
            if (!subCategories || typeof subCategories !== "object")
              return false;

            // Check if all subcategories are empty (if object) or if the main category is empty (if array)
            return Array.isArray(subCategories)
              ? subCategories.length > 0 // Skip if main category array is empty
              : Object.values(subCategories).some(
                  (items) => Array.isArray(items) && items.length > 0
                ); // Skip if all subcategory arrays are empty
          })
          .map(([category, subCategories]) => (
            <div key={category} className="border-b py-2">
              <div
                className="flex justify-between items-center text-base font-medium text-black cursor-pointer hover:text-red"
                onClick={() => toggleExpand(category)}
              >
                <span className="capitalize">
                  {category.replace(/_/g, " ")}
                </span>
                <Image
                  src="/arrow-drop.svg"
                  alt="arrow-drop"
                  width={12}
                  height={12}
                  className={expandedCategories[category] ? "rotate-180" : ""}
                />
              </div>

              {expandedCategories[category] && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  {typeof subCategories === "object" &&
                  !Array.isArray(subCategories)
                    ? Object.entries(subCategories)
                        .filter(
                          ([_, items]) =>
                            Array.isArray(items) && items.length > 0
                        ) // ✅ Skip empty arrays
                        .map(([subCategory, items]) => (
                          <div key={subCategory} className="ml-2">
                            <p className="font-semibold capitalize">
                              {subCategory.replace(/_/g, " ")}
                            </p>
                            {items.map((item, idx) => (
                              <label
                                key={idx}
                                className="flex items-center gap-2 mb-2"
                              >
                                <input
                                  type="checkbox"
                                  checked={
                                    selectedFilters[subCategory]?.includes(
                                      item
                                    ) || false
                                  }
                                  onChange={() =>
                                    handleCheckboxChange(subCategory, item)
                                  }
                                />
                                {item}
                              </label>
                            ))}
                          </div>
                        ))
                    : Array.isArray(subCategories) &&
                      subCategories.length > 0 && // ✅ Skip empty arrays
                      subCategories.map((item, idx) => (
                        <label key={idx} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={
                              selectedFilters[category]?.includes(item) || false
                            }
                            onChange={() =>
                              handleCheckboxChange(category, item)
                            }
                          />
                          {item}
                        </label>
                      ))}
                </div>
              )}
            </div>
          ))}
        {/* {variants.price_range && (
          <div className="border-b py-2">
            <div className="flex justify-between items-center text-base font-medium text-black">
              <span>Price Range</span>
            </div>
            <div className="pl-4 mt-2 flex flex-col gap-2">
              <span>
                ${variants.price_range.min} - ${variants.price_range.max}
              </span>
            </div>
          </div>
        )} */}
        <div className="mt-auto flex gap-4 pt-10">
          <button
            className="w-1/2 border border-gray-400 text-gray-200 py-3 rounded-md cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
            onClick={() => setSelectedFilters({})}
          >
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
