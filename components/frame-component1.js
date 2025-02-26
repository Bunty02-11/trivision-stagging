"use client";
import { memo, useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Menu from "./menu";
import EyeglassesMenu from "./eyeglassesMenu";
import BrandMenu from "./Brandmenu";
import ContactLens from "./ContactLens";
import MobileSubMenu from "./mobile-sub-menu";
import BrandsMblMenu from "./brands-mbl-menu";
import EyeGlassesMblMenu from "./eye-glasses-mbl-menu";
import ContactLensMblMenu from "./contact-lens-mbl-menu";
import axios from "axios";

const FrameComponent1 = memo(({ className = "" }) => {
  const router = useRouter();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMblSubMenuOpen, setIsMblSubMenuOpen] = useState(false);
  const [isMblBrandSubMenuOpen, setIsMblBrandSubMenuOpen] = useState(false);
  const [isMblEyeGlassesSubMenuOpen, setIsMblEyeGlassesSubMenuOpen] =
    useState(false);
  const [isMblContactLensSubMenuOpen, setIsMblContactLensSubMenuOpen] =
    useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);
  const [isContactLensMenuOpen, setIsContactLensMenuOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEyeglassesMenuOpen, setIsEyeglassesMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartList = async () => {
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
        const cartOrders = response.data.orders.filter(
          (order) => order.shipping_info === "cart"
        );

        setOrders(cartOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartList();
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
                  ...updatedAdditionalInfo, // Send updated data while keeping previous info
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

  // search func. start
  // Debounce function to limit the API calls
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Function to fetch search suggestions from the API
  const fetchSuggestions = async (query) => {
    if (!query) {
      setSearchSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://apitrivsion.prismcloudhosting.com/api/products?search=${query}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSearchSuggestions(data?.products || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Function to handle the input change and update searchQuery immediately
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedFetchSuggestions(query);
  };

  // Use debounce for the API request
  const debouncedFetchSuggestions = debounce((query) => {
    fetchSuggestions(query);
  }, 500);

  // Function to navigate to a specific route
  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = (setMenuState) => {
    setMenuState((prev) => !prev);
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isBrandMenuOpen && !event.target.closest(".brand-menu")) {
        setIsBrandMenuOpen(false);
      }
      if (
        isContactLensMenuOpen &&
        !event.target.closest(".contact-lens-menu")
      ) {
        setIsContactLensMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBrandMenuOpen, isContactLensMenuOpen]);

  useEffect(() => {
    const fetchBrandsData = async () => {
      try {
        const response = await fetch(
          "https://apitrivsion.prismcloudhosting.com/api/brands/all"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBrands(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBrandsData();
  }, []);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const response = await fetch(
          "https://apitrivsion.prismcloudhosting.com/api/category/all"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategoriesData();
  }, []);

  return (
    <header
      className={`self-stretch relative flex flex-col items-start justify-start max-w-full text-center text-xs text-background-color-primary font-h4-32 ${className}`}
    >
      <div className="self-stretch bg-black overflow-hidden flex flex-row items-start justify-between py-[13px] px-10 gap-5 z-20">
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          loading="lazy"
          width={24}
          height={24}
          alt=""
          src="/iconamoonarrowup2@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 mq1250:w-[-1px]">
          <div className="self-stretch relative leading-[150%] font-medium">
            Sale: 20% Off - Limited Time Only
          </div>
        </div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          width={24}
          height={24}
          alt=""
          src="/iconamoonarrowup2-1@2x.png"
        />
      </div>
      <div className="self-stretch flex-1 bg-whitesmoke-100 border-gray-800 border-b-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[18px] px-20 pb-4 max-w-full z-[20] text-left text-smi text-black font-inter mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex-1 flex flex-row relative items-center justify-center gap-[70.7px] max-w-full mq1410:gap-5 mq991:gap-[18px] mq750:gap-[15px]">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <Image
              className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-contain mq750:object-contain w-[186px] mq480:max-w-fit mq480:w-[100px] cursor-pointer"
              loading="lazy"
              width={186}
              height={36}
              alt=""
              src="/logo@2x.png"
              onClick={() => handleNavigation("/")}
            />
          </div>
          <div className="w-[777px] flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border max-w-full mq991:w-0 mq991:hidden">
            <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-6 text-center text-sm text-black font-h4-32 mq991:hidden">
              <div
                className="relative leading-[150%] uppercase font-medium inline-block min-w-[80px] cursor-pointer"
                onClick={() => handleNavigation("/featured")}
              >
                FEATURED
              </div>
              <div
                className="relative leading-[150%] uppercase font-medium cursor-pointer"
                onClick={() => toggleMenu(setIsBrandMenuOpen)}
              >
                Brands
              </div>
              <div
                className="relative leading-[150%] uppercase font-medium cursor-pointer"
                onClick={() => toggleMenu(setIsSidebarOpen)}
              >
                Sunglasses
              </div>
              <div
                className="relative leading-[150%] uppercase font-medium cursor-pointer"
                onClick={() => toggleMenu(setIsEyeglassesMenuOpen)}
              >
                Eyeglasses
              </div>
              <div
                className="flex-1 relative leading-[150%] uppercase font-medium inline-block cursor-pointer min-w-[112px]"
                onClick={() => toggleMenu(setIsContactLensMenuOpen)}
              >
                Contact Lens
              </div>
              <div
                className="flex-1 relative leading-[150%] uppercase font-medium inline-block min-w-[103px] cursor-pointer"
                onClick={() => handleNavigation("/accessories")}
              >
                ACCESSORIES
              </div>
              <div
                className="relative leading-[150%] uppercase font-medium text-red inline-block min-w-[90px] cursor-pointer"
                onClick={() => handleNavigation("/best-value")}
              >
                BEST VALUE
              </div>
            </nav>
          </div>
          <div className="w-44 flex flex-row items-start justify-start relative">
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="absolute left-10 top-0 w-48 h-11 px-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:border-blue-500 transition-all duration-300"
                style={{ zIndex: 2 }}
              />
            )}
            <Image
              className="h-11 w-11 cursor-pointer"
              loading="lazy"
              width={44}
              height={44}
              alt="Search"
              src="/search.svg"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <Image
              className="h-11 w-11 cursor-pointer"
              loading="lazy"
              width={44}
              height={44}
              alt=""
              src="/account.svg"
              onClick={() => {
                const token = localStorage.getItem("token");
                if (token) {
                  router.push("/my-account");
                } else {
                  router.push("/login");
                }
              }}
            />
            <Image
              className="h-11 w-11 cursor-pointer"
              loading="lazy"
              width={44}
              height={44}
              alt=""
              src="/wish.svg"
              onClick={() => {
                const token = localStorage.getItem("token");
                if (token) {
                  router.push("/wishlist");
                } else {
                  router.push("/login");
                }
              }}
            />
            <div className="h-11 w-11 flex-1 relative z-[1]">
              <Image
                className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_11px)] w-[22px] h-[22px] cursor-pointer"
                loading="lazy"
                width={22}
                height={22}
                alt=""
                src="/svg.svg"
                onClick={() => {
                  setIsCartOpen(true);
                  // const token = localStorage.getItem("token");
                  // if (token) {
                  //   router.push("/cart");
                  // } else {
                  //   router.push("/login");
                  // }
                }}
              />
              <a className="[text-decoration:none] absolute top-[0px] left-[28.9px] leading-[13px] text-[inherit] flex items-center w-[9px] h-[13px] min-w-[9px] z-[1] mq750:left-[70%] mq480:top-[5%] mq480:left-[70%]">
                {orders?.filter((x) => x?.cart)?.length == 0
                  ? "0"
                  : orders?.filter((x) => x?.cart)?.length}
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="nav_mbl_menu_btn bg-transparent cursor-pointer"
            onClick={() => toggleMenu(setIsMobileMenuOpen)}
          >
            <Image src="/menu-burger.svg" width={24} height={24} alt="Menu" />
          </button>
        </div>
      </div>
      {/* Suggestions Dropdown */}
      {searchSuggestions?.length > 0 && (
        <div
          className="absolute w-[30%] right-0 top-[100%] bg-white border border-gray-300 shadow-md rounded-md"
          style={{ zIndex: 2 }}
        >
          <ul className="max-h-60 overflow-y-auto p-0">
            {searchSuggestions?.map((product) => (
              <li
                key={product?._id}
                className="p-3 mb-2 mx-2 cursor-pointer text-sm text-black bg-gray-500"
                onClick={() => handleNavigation(`/product/${product?.slug}`)} // Navigate to product detail page
              >
                {product?.product_name_short}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-30 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-1 pb-0 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image src="/close-menu.svg" width={20} height={20} alt="Menu" />
          </button>
          <div
            className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => handleNavigation("/featured")}
          >
            Featured
          </div>
          <div
            className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => toggleMenu(setIsMblBrandSubMenuOpen)}
          >
            Brands
          </div>
          <div
            className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => toggleMenu(setIsMblSubMenuOpen)}
          >
            Sunglasses
          </div>
          <div
            className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => toggleMenu(setIsMblEyeGlassesSubMenuOpen)}
          >
            Eyeglasses
          </div>
          <div
            className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => toggleMenu(setIsMblContactLensSubMenuOpen)}
          >
            Contact Lens
          </div>
          <div
            className="cursor-pointer p-2 mb-2 text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => handleNavigation("/accessories")}
          >
            Accessories
          </div>
          <div
            className="cursor-pointer p-2  text-xs uppercase text-black text-start bg-gray-600 font-600 hover:font-bold hover:text-red"
            onClick={() => handleNavigation("/best-value")}
          >
            Best Value
          </div>
        </div>
      </div>
      {/* mobile submenu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[30] transform ${
          isMblBrandSubMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-200 hover:text-black"
            onClick={() => setIsMblBrandSubMenuOpen(false)}
          >
            Close
          </button>
          <BrandsMblMenu brands={brands} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[30] transform ${
          isMblSubMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-200 hover:text-black"
            onClick={() => setIsMblSubMenuOpen(false)}
          >
            Close
          </button>
          <MobileSubMenu category={categories} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[30] transform ${
          isMblEyeGlassesSubMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-200 hover:text-black"
            onClick={() => setIsMblEyeGlassesSubMenuOpen(false)}
          >
            Close
          </button>
          <EyeGlassesMblMenu category={categories} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[30] transform ${
          isMblContactLensSubMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-200 hover:text-black"
            onClick={() => setIsMblContactLensSubMenuOpen(false)}
          >
            Close
          </button>
          <ContactLensMblMenu brands={brands} />
        </div>
      </div>
      {/* Desktop Menus */}
      <div
        className={`fixed top-0 left-0 h-full w-[40%] bg-white shadow-lg z-[30] transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-500 hover:text-black"
            onClick={() => setIsSidebarOpen(false)}
          >
            Close
          </button>
          <Menu category={categories} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-[40%] bg-white shadow-lg z-[30] transform ${
          isEyeglassesMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-500 hover:text-black"
            onClick={() => setIsEyeglassesMenuOpen(false)}
          >
            Close
          </button>
          <EyeglassesMenu category={categories} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-10 transform ${
          isBrandMenuOpen ? "translate-y-20" : "-translate-y-full"
        } transition-transform duration-300 brand-menu`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-500 hover:text-black"
            onClick={() => setIsBrandMenuOpen(false)}
          >
            Close
          </button>
          <BrandMenu brands={brands} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-10 transform ${
          isContactLensMenuOpen ? "translate-y-20" : "-translate-y-full"
        } transition-transform duration-300 overflow-auto contact-lens-menu`}
      >
        <div className="flex flex-col p-4 h-full">
          <button
            className="self-end mb-4 p-2 text-sm text-gray-500 hover:text-black"
            onClick={() => setIsContactLensMenuOpen(false)}
          >
            Close
          </button>
          <ContactLens />
        </div>
      </div>

      {/* cart side bar */}
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-[-webkit-fill-available] w-100 mq480:w-[-webkit-fill-available] bg-white shadow-lg p-4 transform transition-transform duration-300 z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-2 border-gray-300 border-b-[1px] border-solid box-border">
          <h2 className="text-black text-base mq480:text-sm font-medium">
            {orders?.filter((x) => x?.cart)?.length == 0
              ? "EMPTY"
              : `${orders?.filter((x) => x?.cart)?.length} ITEM`}
          </h2>
          <button
            className="bg-transparent cursor-pointer"
            onClick={() => setIsCartOpen(false)}
          >
            <Image src="/close-menu.svg" width={24} height={24} alt="Menu" />
          </button>
        </div>
        <div
          className="custom-scrollbar"
          style={{
            maxHeight: "70vh",
            overflowY: "auto", // Show scrollbar only when needed
            overflowX: "hidden",
          }}
        >
          {orders?.filter((x) => x?.cart)?.length == 0 ? (
            <div
              className="flex flex-col justify-center items-center"
              style={{ margin: "8rem 0" }}
            >
              <p className="text-base text-black">
                Your shopping bag is empty!
              </p>
              <button
                className="bg-black p-3 text-white text-sm cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
                onClick={() => router.push("/sunglasses/sunglasses")}
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            <>
              {/* Cart Item */}
              {orders &&
                orders?.map((order) =>
                  order?.cart?.map((item) => (
                    <div className="p-4" key={item?.product?._id}>
                      <div className="flex items-start gap-x-6 mq480:flex-wrap">
                        {/* Product Image */}
                        <img
                          className="w-20 h-20 object-contain border-gray-500 border-[1px] border-solid"
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
                                item?.additional_info?.[0]
                                  ?.selectRightPower}{" "}
                              {"L:"}{" "}
                              {item &&
                                item?.additional_info?.[0]?.selectLeftPower}
                            </p>
                          )}
                          {item?.product?.frame_color && (
                            <p className="text-black text-sm text-start mt-0">
                              {item && item?.product?.frame_color}
                            </p>
                          )}
                          {item?.product?.gender && (
                            <p className="text-black text-sm text-start mt-0">
                              {item && item?.product?.gender}
                            </p>
                          )}
                          {item?.product?.frame_shape && (
                            <p className="text-black text-sm text-start mt-0">
                              {item && item?.product?.frame_shape}
                            </p>
                          )}
                          {item?.data == "pack" && (
                            <div className="flex items-center gap-x-4 mt-4">
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
                                      item.product?._id,
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
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-x-4 mt-4">
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
                            {/* Price */}
                            {item?.data == "pack" ? (
                              <p className="text-sm font-semibold text-black p-0">
                                AED{" "}
                                {item &&
                                  item?.product?.retail_price *
                                    ((item?.additional_info?.[0]
                                      ?.selectRightBox || 0) +
                                      (item?.additional_info?.[0]
                                        ?.selectLeftBox || 0) || 1)}
                              </p>
                            ) : (
                              <p className="text-sm font-semibold text-black p-0">
                                AED{" "}
                                {item &&
                                  item?.product?.retail_price * item?.quantity}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 w-auto p-4">
                <div
                  className="flex justify-between bg-black text-white p-4 cursor-pointer"
                  onClick={() => router.push("/cart")}
                >
                  <button className="bg-transparent p-0 text-white text-sm cursor-pointer">
                    CHECKOUT
                  </button>
                  <span className="font-semibold text-sm">
                    AED {calculateTotal()}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
});

FrameComponent1.propTypes = {
  className: PropTypes.string,
  handleNavigation: PropTypes.func.isRequired,
};

export default FrameComponent1;
