// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";

// const BrandsFiltersSidebar = ({ isOpen, onClose, slug, onFilter }) => {
//   const [variants, setVariants] = useState({});
//   const [expandedCategories, setExpandedCategories] = useState({});
//   const [selectedFilters, setSelectedFilters] = useState({});
//   const [priceRange, setPriceRange] = useState([1, 10000]);
//   const [isPriceExpanded, setIsPriceExpanded] = useState(true);

//   {
//     console.log("selectedFilters::", selectedFilters);
//   }

//   const applyFilters = () => {
//     onFilter({
//       ...selectedFilters,
//       price_min: priceRange[0],
//       price_max: priceRange[1],
//       brand: slug,
//     });
//     onClose(); // Close sidebar after applying filters
//   };

//   const togglePriceExpand = () => {
//     setIsPriceExpanded((prev) => !prev);
//   };

//   useEffect(() => {
//     if (variants.price_range) {
//       setPriceRange([variants.price_range.min, variants.price_range.max]);
//     }
//   }, [variants.price_range]);

//   const handlePriceRangeChange = (value) => {
//     setPriceRange(value); // Update the price range dynamically
//   };
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     const fetchVariations = async () => {
//       try {
//         const response = await fetch(
//           `https://apitrivsion.prismcloudhosting.com/api/filter/brand/${slug}`
//         );
//         const data = await response.json();

//         const sortedVariants = Object.fromEntries(
//           Object.entries(data.variants || {}).map(
//             ([category, subCategories]) => {
//               if (Array.isArray(subCategories)) {
//                 return [
//                   category,
//                   [...subCategories].sort((a, b) =>
//                     isNaN(a) || isNaN(b) ? a.localeCompare(b) : a - b
//                   ),
//                 ];
//               } else if (
//                 typeof subCategories === "object" &&
//                 subCategories !== null
//               ) {
//                 return [
//                   category,
//                   Object.fromEntries(
//                     Object.entries(subCategories).map(
//                       ([subCategory, items]) => [
//                         subCategory,
//                         Array.isArray(items)
//                           ? [...items].sort((a, b) =>
//                               isNaN(a) || isNaN(b) ? a.localeCompare(b) : a - b
//                             )
//                           : items,
//                       ]
//                     )
//                   ),
//                 ];
//               }
//               return [category, subCategories];
//             }
//           )
//         );
//         setVariants(sortedVariants);
//       } catch (error) {
//         console.error("Error fetching variants:", error);
//       }
//     };

//     fetchVariations();
//   }, [slug]);

//   const toggleExpand = (category) => {
//     setExpandedCategories((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   const handleCheckboxChange = (category, value, parentCategory = null) => {
//     setSelectedFilters((prev) => {
//       let updatedFilters = { ...prev };

//       // Check if this is a nested category (e.g., "colors" → "frame_colors")
//       const categoryKey = parentCategory
//         ? `${parentCategory}_${category}`
//         : category;

//       // Ensure the category exists in the state
//       if (!updatedFilters[categoryKey]) {
//         updatedFilters[categoryKey] = [];
//       }

//       // Toggle the checkbox selection
//       if (updatedFilters[categoryKey].includes(value)) {
//         updatedFilters[categoryKey] = updatedFilters[categoryKey].filter(
//           (item) => item !== value
//         );

//         // Remove category if it's empty
//         if (updatedFilters[categoryKey].length === 0) {
//           delete updatedFilters[categoryKey];
//         }
//       } else {
//         updatedFilters[categoryKey] = [...updatedFilters[categoryKey], value];
//       }

//       return updatedFilters;
//     });
//   };

//   // const handleCheckboxChange = (category, value) => {
//   //   setSelectedFilters((prev) => {
//   //     const updatedCategory = prev[category] || [];
//   //     if (updatedCategory.includes(value)) {
//   //       return {
//   //         ...prev,
//   //         [category]: updatedCategory.filter((item) => item !== value),
//   //       };
//   //     } else {
//   //       return { ...prev, [category]: [...updatedCategory, value] };
//   //     }
//   //   });
//   // };

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={onClose}
//         />
//       )}

//       <div
//         className={`fixed top-0 left-0 w-[350px] mq480:w-[300px] h-[-webkit-fill-available] bg-white shadow-lg z-50 flex flex-col p-6 overflow-y-auto transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center border-b pb-3">
//           <h2 className="text-xl font-semibold">Filters</h2>
//           <button
//             onClick={onClose}
//             className="text-xl text-gray-200 hover:text-black cursor-pointer"
//           >
//             &times;
//           </button>
//         </div>

//         {/* Map through all valid categories dynamically */}
//         {Object.entries(variants)
//           .filter(([_, subCategories]) => {
//             if (!subCategories || typeof subCategories !== "object")
//               return false;

//             // Check if all subcategories are empty (if object) or if the main category is empty (if array)
//             return Array.isArray(subCategories)
//               ? subCategories.length > 0 // Skip if main category array is empty
//               : Object.values(subCategories).some(
//                   (items) => Array.isArray(items) && items.length > 0
//                 ); // Skip if all subcategory arrays are empty
//           })
//           .map(([category, subCategories]) => (
//             <div key={category} className="border-b py-2">
//               <div
//                 className="flex justify-between items-center text-base font-medium text-black cursor-pointer hover:text-red"
//                 onClick={() => toggleExpand(category)}
//               >
//                 <span className="capitalize">
//                   {category.replace(/_/g, " ")}
//                 </span>
//                 <Image
//                   src="/arrow-drop.svg"
//                   alt="arrow-drop"
//                   width={12}
//                   height={12}
//                   className={expandedCategories[category] ? "rotate-180" : ""}
//                 />
//               </div>

//               {expandedCategories[category] && (
//                 <div className="pl-4 mt-2 flex flex-col gap-2">
//                   {typeof subCategories === "object" &&
//                   !Array.isArray(subCategories)
//                     ? Object.entries(subCategories)
//                         .filter(
//                           ([_, items]) =>
//                             Array.isArray(items) && items.length > 0
//                         ) // ✅ Skip empty arrays
//                         .map(([subCategory, items]) => (
//                           <div key={subCategory} className="ml-2">
//                             <p className="font-semibold capitalize">
//                               {subCategory.replace(/_/g, " ")}
//                             </p>
//                             {items.map((item, idx) => (
//                               <label
//                                 key={idx}
//                                 className="flex items-center gap-2 mb-2 capitalize"
//                               >
//                                 <input
//                                   type="checkbox"
//                                   checked={
//                                     selectedFilters[subCategory]?.includes(
//                                       item
//                                     ) || false
//                                   }
//                                   onChange={() =>
//                                     handleCheckboxChange(subCategory, item)
//                                   }
//                                 />
//                                 {item}
//                               </label>
//                             ))}
//                           </div>
//                         ))
//                     : Array.isArray(subCategories) &&
//                       subCategories.length > 0 && // ✅ Skip empty arrays
//                       subCategories.map((item, idx) => (
//                         <label
//                           key={idx}
//                           className="flex items-center gap-2 capitalize"
//                         >
//                           <input
//                             type="checkbox"
//                             checked={
//                               selectedFilters[category]?.includes(item) || false
//                             }
//                             onChange={() =>
//                               handleCheckboxChange(category, item)
//                             }
//                           />
//                           {item}
//                         </label>
//                       ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         {variants.price_range && (
//           <div className="py-2">
//             <div
//               className="flex justify-between items-center text-base font-medium text-black cursor-pointer hover:text-red"
//               onClick={togglePriceExpand}
//             >
//               <span>Price Range</span>
//               <Image
//                 src="/arrow-drop.svg"
//                 alt="arrow-drop"
//                 width={12}
//                 height={12}
//                 className={isPriceExpanded ? "rotate-180" : ""}
//               />
//             </div>

//             {isPriceExpanded && (
//               <div className="pl-4 mt-3 flex flex-col gap-2">
//                 <Slider
//                   range
//                   min={variants.price_range.min || 0}
//                   max={variants.price_range.max || 100000}
//                   value={priceRange}
//                   onChange={handlePriceRangeChange}
//                   allowCross={false}
//                 />
//                 <div className="flex justify-between text-sm font-medium">
//                   <span>AED {variants.price_range.min}</span>
//                   <span>AED {variants.price_range.max}</span>
//                 </div>
//                 <div className="text-center font-semibold text-gray-200 text-sm">
//                   Selected: AED {priceRange[0]} - AED {priceRange[1]}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//         <div className="mt-auto flex gap-4 pt-10">
//           <button
//             className="w-1/2 border border-gray-400 text-gray-200 py-3 rounded-md cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
//             onClick={() => setSelectedFilters({})}
//           >
//             CLEAR
//           </button>
//           <button
//             className="w-1/2 bg-black text-white py-3 rounded-md cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
//             onClick={applyFilters}
//           >
//             APPLY FILTERS
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BrandsFiltersSidebar;

import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const BrandsFiltersSidebar = ({ isOpen, onClose, slug, onFilter }) => {
  const [variants, setVariants] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [priceRange, setPriceRange] = useState([1, 10000]);
  const [isPriceExpanded, setIsPriceExpanded] = useState(true);

  useEffect(() => {
    if (variants.price_range) {
      setPriceRange([variants.price_range.min, variants.price_range.max]);
    }
  }, [variants.price_range]);

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
          `https://apitrivsion.prismcloudhosting.com/api/filter/brand/${slug}`
        );
        const data = await response.json();

        // Remove empty categories and subcategories
        const cleanedVariants = Object.fromEntries(
          Object.entries(data.variants || {}).filter(([_, subCategories]) => {
            if (Array.isArray(subCategories)) {
              return subCategories.length > 0;
            } else if (
              typeof subCategories === "object" &&
              subCategories !== null
            ) {
              return Object.values(subCategories).some(
                (items) => items.length > 0
              );
            }
            return false;
          })
        );

        setVariants(cleanedVariants);
      } catch (error) {
        console.error("Error fetching variants:", error);
      }
    };

    fetchVariations();
  }, [slug]);

  const applyFilters = () => {
    onFilter({
      ...selectedFilters,
      price_min: priceRange[0],
      price_max: priceRange[1],
      brand: slug,
    });
    onClose();
  };

  const toggleExpand = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleCheckboxChange = (category, value, parentCategory = null) => {
    setSelectedFilters((prev) => {
      let updatedFilters = { ...prev };
      const categoryKey = parentCategory
        ? `${parentCategory}_${category}`
        : category;

      if (!updatedFilters[categoryKey]) {
        updatedFilters[categoryKey] = [];
      }

      if (updatedFilters[categoryKey].includes(value)) {
        updatedFilters[categoryKey] = updatedFilters[categoryKey].filter(
          (item) => item !== value
        );
        if (updatedFilters[categoryKey].length === 0) {
          delete updatedFilters[categoryKey];
        }
      } else {
        updatedFilters[categoryKey] = [...updatedFilters[categoryKey], value];
      }

      return updatedFilters;
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

        {/* Dynamic filter mapping (excluding empty categories) */}
        {Object.entries(variants).map(([category, subCategories]) => (
          <div key={category} className="border-b py-2">
            <div
              className="flex justify-between items-center text-base font-medium text-black cursor-pointer hover:text-red"
              onClick={() => toggleExpand(category)}
            >
              <span className="capitalize">{category.replace(/_/g, " ")}</span>
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
                      .filter(([_, items]) => items.length > 0) // ✅ Hide empty subcategories
                      .map(([subCategory, items]) => (
                        <div key={subCategory} className="ml-2">
                          <p className="font-semibold capitalize">
                            {subCategory.replace(/_/g, " ")}
                          </p>
                          {items.map((item, idx) => (
                            <label
                              key={idx}
                              className="flex items-center gap-2 mb-2 capitalize"
                            >
                              <input
                                type="checkbox"
                                checked={
                                  selectedFilters[
                                    `${category}_${subCategory}`
                                  ]?.includes(item) || false
                                }
                                onChange={() =>
                                  handleCheckboxChange(
                                    subCategory,
                                    item,
                                    category
                                  )
                                }
                              />
                              {item}
                            </label>
                          ))}
                        </div>
                      ))
                  : Array.isArray(subCategories) &&
                    subCategories.length > 0 && // ✅ Hide empty categories
                    subCategories.map((item, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-2 capitalize"
                      >
                        <input
                          type="checkbox"
                          checked={
                            selectedFilters[category]?.includes(item) || false
                          }
                          onChange={() => handleCheckboxChange(category, item)}
                        />
                        {item}
                      </label>
                    ))}
              </div>
            )}
          </div>
        ))}

        {/* Price range slider */}
        {variants.price_range && (
          <div className="py-2">
            <div
              className="flex justify-between items-center text-base font-medium text-black cursor-pointer hover:text-red"
              onClick={() => setIsPriceExpanded((prev) => !prev)}
            >
              <span>Price Range</span>
              <Image
                src="/arrow-drop.svg"
                alt="arrow-drop"
                width={12}
                height={12}
                className={isPriceExpanded ? "rotate-180" : ""}
              />
            </div>

            {isPriceExpanded && (
              <div className="pl-4 mt-3 flex flex-col gap-2">
                <Slider
                  range
                  min={variants.price_range.min || 0}
                  max={variants.price_range.max || 100000}
                  value={priceRange}
                  onChange={setPriceRange}
                  allowCross={false}
                />
                <div className="flex justify-between text-sm font-medium">
                  <span>AED {variants.price_range.min}</span>
                  <span>AED {variants.price_range.max}</span>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-auto flex gap-4 pt-10">
          <button
            // onClick={() => setSelectedFilters({})}
            onClick={() => {
              setSelectedFilters({});
              setPriceRange([
                variants?.price_range?.min || 0,
                variants?.price_range?.max || 10000,
              ]);
              onFilter({}); // Pass an empty filter object to show all products
              onClose();
            }}
            className="w-1/2 border border-gray-400 text-gray-200 py-3 rounded-md cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
          >
            CLEAR
          </button>
          <button
            onClick={applyFilters}
            className="w-1/2 bg-black text-white py-3 rounded-md cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
          >
            APPLY FILTERS
          </button>
        </div>
      </div>
    </>
  );
};

export default BrandsFiltersSidebar;
