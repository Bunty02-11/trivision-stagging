import Image from "next/image";
import FrameComponent1 from "../../components/frame-component1";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

const SelectYourLens = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [product, setProduct] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState([]);

  useEffect(() => {
    // Check for token in local storage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
        console.log("Product data fetched:", response);
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
      console.log("Fetching data for slug:", slug); // Log the slug
      fetchData(slug, token);
    }
  }, [slug]);

  const handleNavigation = () => {
    router.push("/login"); // Replace with your actual route
  };

  const addSelectLens = async (lensType) => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage

      if (!token) {
        alert("Unauthorized: No token found.");
        return;
      }

      const id = product._id;
      const lensPrice =
        lensType === "Single Vision Lenses"
          ? 610
          : lensType === "Computer Lenses"
            ? 750
            : 0;

      // Creating lens data
      const lensData = {
        lensType,
        price: lensPrice,
      };

      // Update additional info
      const updatedAdditionalInfo = [...additionalInfo, lensData];
      setAdditionalInfo(updatedAdditionalInfo);

      // Calculate new total
      const newTotal = product.product_id.retail_price + lensPrice;

      // Prepare data payload
      const data = {
        product_id: product.product_id._id,
        product_slug: product.product_id.slug,
        additional_info: updatedAdditionalInfo,
        user_info: { user_id: localStorage.getItem("userId") },
        subTotal: product.product_id.retail_price,
        prescription: [],
        total: newTotal, // Updated total
        lens_info: "2",
      };

      // Send update request to backend
      const response = await axios.put(
        `https://apitrivsion.prismcloudhosting.com/api/selectlens/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in headers
            "Content-Type": "application/json",
          },
        }
      );

      // Determine redirection path

      // Determine redirection path
      const slug = product.product_id.slug;
      let redirectPath = (lensType === "Single Vision Lenses" || lensType === "Computer Lenses")
        ? `/prescription/${slug}`
        : `/review/${slug}`;

      // Perform the redirection with query parameters
      if (redirectPath) {
        router.push({
          pathname: redirectPath,
          query: { slug }, // Pass slug as a query parameter
        });
      }

      console.log("Updated Total:", newTotal);
    } catch (error) {
      console.error("Error:", error.response?.data?.message || error.message);
    }
  };

  const handleNavigationToHome = (path) => {
    router.push(path);
  };

  const handleNavigationToProduct = (slug) => {
    router.push(`/product/${slug}`);
  }


  return (
    <div className="w-full relative flex flex-col items-start justify-start text-left text-base text-black font-p5-12">
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
            console.log(product.product_id.slug, ),
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-6 h-6 cursor-pointer"
              onClick={() =>
                handleNavigationToProduct(product.product_id.slug, product.product_id.category) 
              }
            />
          )}
          <Image
            className="w-[185.6px] h-9 object-cover cursor-pointer"
            width={186}
            height={36}
            alt=""
            src="/logo@2x.png"
            onClick={() => handleNavigationToHome("/")}
          />
        </div>
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-[calc(50%-_18px)] right-[20px] w-6 h-6 cursor-pointer"
          onClick={() => handleNavigationToHome("/")}
        />
      </div>
      <div className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-10 px-[60px] pb-[60px] gap-6 text-center text-xs text-gray-300">
        <div className="self-stretch flex flex-row items-center justify-center gap-4">
          <div className="relative leading-[150%] font-medium text-black">
            Lens Type
          </div>
          <div className="w-[401px] relative border-black border-t-[1px] border-solid box-border h-px" />
          <div className="relative leading-[150%] font-medium">Lens</div>
          <div className="w-[401px] relative border-black border-t-[1px] border-solid box-border h-px" />
          <div className="relative leading-[150%] font-medium">Review</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center text-left text-base text-black">
          <div className="self-stretch flex flex-row items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center gap-4">
              {product && (
                <>
                  <Image
                    className="self-stretch relative max-w-full overflow-hidden h-[382px] shrink-0 object-contain"
                    width={482}
                    height={382}
                    alt=""
                    src={product.product_id.product_images[3]}
                  />
                  <div className="self-stretch flex flex-col items-start justify-center gap-2">
                    <div className="self-stretch flex flex-row items-start justify-start gap-2">
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        Model
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        AED {product.product_id.retail_price}
                      </div>
                    </div>
                    <div className="relative text-sm leading-[150%] font-medium">
                      {product.product_id.product_name_short}
                    </div>
                  </div>
                  <div className="self-stretch border-gray-400 border-t-[1px] border-solid flex flex-col items-start justify-center pt-4 px-0 pb-0 gap-2">
                    <div className="self-stretch flex flex-row items-start justify-start gap-2">
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        Total
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        AED {product.total}
                      </div>
                    </div>
                    {/* <div className="self-stretch flex flex-row items-start justify-start gap-2.5 text-sm">
                      <div className="flex-1 relative leading-[150%] font-medium">
                        Include VAT
                      </div>
                      <div className="relative leading-[150%] font-medium text-right">
                        AED {product.total * 0.05}
                      </div>
                    </div> */}
                  </div>
                </>
              )}
            </div>
            <div className="self-stretch overflow-y-auto flex flex-col items-center justify-start gap-6 text-xl">
              <div className="self-stretch relative leading-[140%] font-medium">
                Lens Type
              </div>
              <div className="flex-1 flex flex-row items-center justify-start gap-6 text-sm">
                <div className="w-[250px] h-[396px] bg-whitesmoke-200 flex flex-col items-start justify-start gap-4">
                  <Image
                    className="self-stretch relative max-w-full overflow-hidden h-[150px] shrink-0 object-cover"
                    width={250}
                    height={150}
                    alt=""
                    src="/5.png"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-3">
                    <div className="self-stretch flex flex-col items-center justify-center py-0 px-2 gap-2">
                      <div className="self-stretch relative leading-[150%] font-medium">
                        Single Vision Lenses
                      </div>
                      <div className="self-stretch relative text-xs leading-[150%]">
                        Recommended for prescriptions only
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                      <div className="flex-1 relative leading-[150%] font-medium flex items-center h-[21px]">
                        From AED 610.00
                      </div>
                    </div>
                    <div className="self-stretch relative text-xs leading-[180%]">
                      <ul className="m-0 font-inherit text-inherit pl-4">
                        <li className="mb-0">
                          Targeted Vision Correction —near, intermediate, or
                          distance
                        </li>
                        <li className="mb-0">Crystal-Clear Clarity</li>
                        <li>All-Day Comfort</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    onClick={() => addSelectLens("Single Vision Lenses")}
                    className="self-stretch bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-10 text-center text-xs text-white cursor-pointer"
                  >
                    <div className="relative leading-[150%] font-medium">
                      SELECT
                    </div>
                  </div>
                </div>
                <div className="w-[250px] h-[396px] bg-whitesmoke-200 flex flex-col items-start justify-start gap-4">
                  <Image
                    className="self-stretch relative max-w-full overflow-hidden h-[150px] shrink-0 object-cover"
                    width={250}
                    height={150}
                    alt=""
                    src="/6.png"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-3">
                    <div className="self-stretch flex flex-col items-center justify-center py-0 px-2 gap-2">
                      <div className="self-stretch relative leading-[150%] font-medium">
                        Computer Lenses
                      </div>
                      <div className="self-stretch relative text-xs leading-[150%]">
                        No prescriptions required
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                      <div className="flex-1 relative leading-[150%] font-medium flex items-center h-[21px]">
                        From AED 750.00
                      </div>
                    </div>
                    <div className="self-stretch relative text-xs leading-[180%]">
                      <ul className="m-2 font-inherit text-inherit pl-4">
                        <li className="mb-1">Blue Light Filtering</li>
                        <li className="mb-1">Enhanced Visual Comfort</li>
                        <li>Relaxed vision while using digital devices</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    onClick={() => addSelectLens("Computer Lenses")}
                    className="self-stretch bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-10 text-center text-xs text-white cursor-pointer"
                  >
                    <div className="relative leading-[150%] font-medium">
                      SELECT
                    </div>
                  </div>
                </div>
                <div className="w-[250px] h-[396px] bg-whitesmoke-200 flex flex-col items-start justify-start gap-4">
                  <Image
                    className="self-stretch relative max-w-full overflow-hidden h-[150px] shrink-0 object-cover"
                    width={250}
                    height={150}
                    alt=""
                    src="/7.png"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-3">
                    <div className="self-stretch flex flex-col items-center justify-center py-0 px-2 gap-2">
                      <div className="self-stretch relative leading-[150%] font-medium">
                        Frame Only
                      </div>
                      <div className="self-stretch relative text-xs leading-[150%]">
                        No prescriptions required
                      </div>
                    </div>
                    <div className="w-[250px] hidden flex-row items-center justify-center py-0 px-2 box-border">
                      <div className="flex-1 relative leading-[150%] font-medium flex items-center h-[21px]">
                        From AED 610.00
                      </div>
                    </div>
                    <div className="self-stretch relative text-xs leading-[180%]">
                      <ul className="m-0 font-inherit text-inherit pl-4">
                        <li className="mb-0">Modern and trendy frames</li>
                        <li className="mb-0">
                          Constructed from high-quality materials
                        </li>
                        <li>Available in various shapes and colors</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    onClick={() => addSelectLens("Frame Only")}
                    className="self-stretch bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-10 text-center text-xs text-white cursor-pointer"
                  >
                    <div className="relative leading-[150%] font-medium">
                      SELECT
                    </div>
                  </div>
                </div>
              </div>
              {!isLoggedIn && (
                <div className="rounded-lg bg-black overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-10 text-center text-base text-white">
                  <div className="relative leading-[150%]">
                    <span className="font-medium">
                      <span
                        className="[text-decoration:underline] cursor-pointer"
                        onClick={handleNavigation}
                      >
                        Sign in here
                      </span>{" "}
                      to access your saved eyeglasses prescriptions.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectYourLens;
