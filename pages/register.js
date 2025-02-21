"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CustomerAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [referrer, setReferrer] = useState("/");
  const router = useRouter();

  useEffect(() => {
    if (router.query.referrer) {
      setReferrer(router.query.referrer);
    }
  }, [router.query.referrer]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, phone, name } = formData;

    if (!name || !phone || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://apitrivsion.prismcloudhosting.com/api/customer/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to submit form.");
      }

      const { token } = response.data;
      localStorage.setItem("token", token);

      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        password: "",
      });
      // Redirect to the referrer page or default to home page
      router.push(referrer || "/");
    } catch (err) {
      console.error("ERR", err);
      toast.error("Submission failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    router.push(referrer);
  };

  return (
    <div className="w-full relative bg-background-color-primary overflow-hidden flex flex-col items-center justify-start">
      <ToastContainer />
      <main className="self-stretch bg-background-color-primary overflow-hidden flex flex-row items-center justify-start p-20 gap-[60px] min-h-[900px] max-w-full text-left text-base text-black font-web-p3-16 lg:gap-[30px] lg:flex-wrap lg:p-10 mq750:gap-[15px] mq750:py-[52px]">
        <div className="flex-[0.7869] flex flex-col items-center justify-center py-[73px] px-[65px] box-border min-w-[396px] max-w-full mq750:py-[47px] mq750:px-8 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-center justify-center gap-8 max-w-full mq750:gap-4">
            <div className="self-stretch hidden flex-col items-center justify-center gap-2">
              <div className="self-stretch h-1 relative rounded-[50px] bg-whitesmoke-200 overflow-hidden">
                <div className="absolute h-full top-0 bottom-0 left-0 bg-olivedrab w-[120px]" />
              </div>
              <div className="relative leading-[150%]">Step 1/3</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-6 max-w-full text-13xl font-h4-32">
              <div className="self-stretch flex flex-col items-center justify-start gap-2">
                <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-medium">
                  Welcome to Trivision
                </h1>
                <div className="relative text-base leading-[150%] font-medium">
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </div>
              </div>
              <form
                className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full"
                onSubmit={handleSubmit}
              >
                {["name", "email", "phone", "password", "verify_password"].map(
                  (field, index) => (
                    <input
                      key={index}
                      type={
                        field.includes("password")
                          ? "password"
                          : field === "email"
                          ? "email"
                          : "text"
                      }
                      name={field}
                      placeholder={field
                        .replace("_", " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                      value={formData[field]}
                      onChange={handleChange}
                      style={{
                        width: "96%",
                        border: "1px solid black",
                        padding: "8px 12px",
                        fontSize: "16px",
                      }}
                    />
                  )
                )}
                <div className="self-stretch flex flex-row items-start justify-start gap-4 mq750:flex-wrap">
                  <button
                    type="button"
                    className="flex-1 border-black border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-center py-1.5 px-4 min-w-[151px] min-h-[40px] cursor-pointer hover:bg-black hover:text-white hover:border-[1px] hover:border-solid transition-all duration-300"
                    onClick={handleBack}
                  >
                    <span className="relative text-base leading-[150%] font-medium text-background-color-black text-center">
                      BACK
                    </span>
                  </button>
                  <div className="flex-1 bg-black overflow-hidden flex flex-row items-center justify-center">
                    <button
                      type="submit"
                      className="flex-1 bg-black text-white relative text-base leading-[150%] py-2 px-4 font-medium font-h4-32 text-center box-border min-w-[151px] cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? "LOADING..." : "REGISTER"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Image
          className="h-[740px] flex-1 relative max-w-full object-cover min-w-[396px] mq750:min-w-full"
          loading="lazy"
          width={610}
          height={740}
          alt="Placeholder Image"
          src="/registerbanner.jpeg"
        />
      </main>
    </div>
  );
};

export default CustomerAccount;
