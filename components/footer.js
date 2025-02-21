import { memo, useMemo, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

const Footer = memo(
  ({
    className = "",
    maskGroup,
    formMargin,
    iconYoutube,
    itemImg,
    itemImg1,
    itemImg2,
  }) => {
    const formStyle = useMemo(() => {
      return {
        margin: formMargin,
      };
    }, [formMargin]);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleNavigation = (path) => {
      router.push(path);
    };
    const handleSocialIcons = (path) => {
      window.open(path, "_blank", "noopener,noreferrer");
    };

    const handleChange = (e) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, email } = formData;

      if (!name || !email) {
        toast.error("Please fill in all fields.");
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          "https://apitrivsion.prismcloudhosting.com/api/settler/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to submit form.");
        }

        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
        });
      } catch (err) {
        console.error("Error:", err);
        toast.error("Submission failed. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <>
        <ToastContainer />
        <footer
          className={`self-stretch bg-black overflow-hidden flex flex-col items-center justify-start py-[60px] px-20 mq480:px-3 box-border gap-[60px] z-[11] text-left text-base text-background-color-primary font-h4-32 ${className}`}
        >
          <div className="w-full flex flex-row items-start justify-center gap-10 mq480:flex-col">
            <div className="flex-1 flex flex-row items-start justify-start gap-10 mq480:flex-col">
              <div className="overflow-hidden flex flex-col items-start justify-start">
                <Image
                  className="w-[136px] h-10 relative object-cover"
                  loading="lazy"
                  width={136}
                  height={40}
                  alt=""
                  src={maskGroup}
                />
              </div>
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-4">
                <div className="self-stretch relative leading-[150%] font-medium">
                  SHOP
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-sm">
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/featured")}
                    >
                      Featured
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/brand/blancia")}
                    >
                      Brands
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/sunglasses/sunglasses")}
                    >
                      Sunglasses
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/eyeglasses/eyeglasses")}
                    >
                      Eyeglasses
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/contact-lens/bella")}
                    >
                      Contact Lens
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/accessories")}
                    >
                      Accessories
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/best-value")}
                    >
                      Best Value
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-4">
                <div className="self-stretch relative leading-[150%] font-medium">
                  INFO
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-sm">
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/about-us")}
                    >
                      About Us
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/blog")}
                    >
                      Blogs
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      Customer Reviews
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-4">
                <div className="self-stretch relative leading-[150%] font-medium">
                  SUPPORT
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-sm">
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/contact-us")}
                    >
                      Contact Us
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      Store Location
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      Book an Eye Test
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/my-account")}
                    >
                      My Account
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[151px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-4">
                <div className="self-stretch relative leading-[150%] font-medium">
                  POLICY
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-sm cursor-pointer ">
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/shipping-delivery")}
                    >{`Shipping & Delivery`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 cursor-pointer ">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/return-policy")}
                    >{`Returns & Exchange`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 cursor-pointer">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/privacy-policy")}
                    >
                      Privacy Policy
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 cursor-pointer">
                    <div
                      className="flex-1 relative leading-[150%] font-medium cursor-pointer"
                      onClick={() => handleNavigation("/terms-conditions")}
                    >
                      Terms of Service
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-6">
              <div className="self-stretch flex flex-col items-start justify-start gap-4">
                <div className="self-stretch relative leading-[150%] font-medium">
                  STAY IN THE LOOP
                </div>
                <div className="self-stretch relative text-sm leading-[150%] font-medium">
                  Be the first to know about our exclusive offers, newest
                  collections, and latest products!
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="self-stretch flex flex-col items-start justify-start gap-4 w-full"
              >
                <div className="w-full border-background-color-primary border-[1px] border-solid flex flex-row items-center justify-start p-0">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-none outline-none leading-[250%] font-medium placeholder-white text-white"
                  />
                </div>
                <div className="w-full border-background-color-primary border-[1px] border-solid flex flex-row items-center justify-start p-0">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-none outline-none leading-[250%] font-medium placeholder-white text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border-black bg-white border-[1px] border-solid flex flex-row items-center justify-center p-2 text-center text-black cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:border-white"
                >
                  <div className="relative leading-[150%] font-medium">
                    Join
                  </div>
                </button>
              </form>
              <div className="flex flex-row items-start justify-start gap-3">
                <Image
                  className="w-6 relative h-6 overflow-hidden shrink-0 cursor-pointer"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--facebook.svg"
                  onClick={() =>
                    handleSocialIcons(
                      "https://www.facebook.com/trivisionoptical1/"
                    )
                  }
                />
                <Image
                  className="w-6 relative h-6 overflow-hidden shrink-0 cursor-pointer"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--instagram.svg"
                  onClick={() =>
                    handleSocialIcons(
                      "https://www.instagram.com/trivisionoptical/"
                    )
                  }
                />
                <Image
                  className="w-6 relative h-6 overflow-hidden shrink-0 cursor-pointer"
                  width={24}
                  height={24}
                  alt=""
                  src="/pinterest.svg"
                  onClick={() =>
                    handleSocialIcons(
                      "https://www.pinterest.com/trivisionoptical/"
                    )
                  }
                />
                {/* <Image
                className="w-6 relative h-6 overflow-hidden shrink-0 cursor-pointer"
                width={24}
                height={24}
                alt=""
                src="/icon--linkedin.svg"
              /> */}
                {/* <Image
                className="w-6 relative h-6 overflow-hidden shrink-0 cursor-pointer"
                width={24}
                height={24}
                alt=""
                src={iconYoutube}
              /> */}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-start text-sm">
            <div className="self-stretch border-background-color-primary border-t-[1px] border-solid flex flex-row items-start justify-start py-4 px-0">
              <div className="flex-1 flex flex-row items-center justify-start">
                <div className="relative leading-[150%] font-medium">
                  More information
                </div>
              </div>
              <Image
                className="w-[21px] relative h-[21px] overflow-hidden shrink-0 object-contain"
                width={21}
                height={21}
                alt=""
                src="/icon@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6">
              <div className="self-stretch relative bg-background-color-primary border-background-color-primary border-[1px] border-solid box-border h-px" />
              <div className="self-stretch flex flex-row items-center justify-between mq480:flex-col mq480:gap-6">
                <div className="flex-1 flex flex-row items-center justify-start gap-6">
                  <div className="relative leading-[150%] font-medium">
                    © 2024 Trivision Opticals
                  </div>
                  <div className="hidden flex-row items-start justify-start gap-6">
                    <div className="h-[21px] w-[98px] relative leading-[150%] font-medium inline-block">
                      Privacy Policy
                    </div>
                    <div className="h-[21px] w-[117px] relative leading-[150%] font-medium inline-block">
                      Terms of Service
                    </div>
                    <div className="h-[21px] w-[119px] relative leading-[150%] font-medium inline-block">
                      Cookies Settings
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <Image
                    className="h-6 w-[38px] relative"
                    loading="lazy"
                    width={38}
                    height={24}
                    alt=""
                    src={itemImg}
                  />
                  <Image
                    className="h-6 w-[38px] relative"
                    width={38}
                    height={24}
                    alt=""
                    src={itemImg1}
                  />
                  <Image
                    className="h-6 w-[38px] relative"
                    width={38}
                    height={24}
                    alt=""
                    src={itemImg2}
                  />
                  <Image
                    className="h-6 w-[38px] relative rounded object-cover"
                    width={38}
                    height={24}
                    alt=""
                    src="/item--img-3@2x.png"
                  />
                  <Image
                    className="h-6 w-[38px] relative rounded object-cover"
                    width={38}
                    height={24}
                    alt=""
                    src="/item--img-4@2x.png"
                  />
                  <Image
                    className="h-6 w-[38px] relative rounded object-cover"
                    width={38}
                    height={24}
                    alt=""
                    src="/item--img-5@2x.png"
                  />
                  <Image
                    className="h-6 w-[38px] relative rounded object-cover"
                    width={38}
                    height={24}
                    alt=""
                    src="/item--img-6@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
);

Footer.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string.isRequired,
  iconYoutube: PropTypes.string.isRequired,
  itemImg: PropTypes.string.isRequired,
  itemImg1: PropTypes.string.isRequired,
  itemImg2: PropTypes.string.isRequired,

  /** Style props */
  formMargin: PropTypes.string,
  footerWidth: PropTypes.string,
  footerAlignSelf: PropTypes.string,
};

export default Footer;
