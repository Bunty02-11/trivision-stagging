"use client";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const CustomerAccount = () => {
  const [formData, setFormData] = useState({
    registerEmail: "",
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
    const { registerEmail, password } = formData;

    if (!registerEmail || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://apitrivsion.prismcloudhosting.com/api/customer/login",
        {
          registerEmail: registerEmail, // Send only the required fields
          password: password,
        }
      );

      const { token, _id } = response.data; // Extract userId from response

      // Store both token and userId in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userId", _id); // Store userId

      toast.success("Login successful!");
      setFormData({ registerEmail: "", password: "" }); // Clear the form data
      router.push(referrer || "/");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigation = () => {
    router.push("/register");
  };

  return (
    <div className="w-full relative bg-background-color-primary overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
      <ToastContainer />
      <main className="self-stretch bg-background-color-primary overflow-hidden flex flex-row items-center justify-start p-20 box-border gap-[60px] min-h-[600px] max-w-full text-left text-base text-black font-web-p3-16 lg:gap-[30px] lg:flex-wrap lg:pl-10 lg:pr-10 lg:box-border mq750:gap-[15px] mq750:pt-[52px] mq750:pb-[52px] mq750:box-border">
        <div className="flex-[0.7869] flex flex-col items-center justify-center py-[73px] px-[65px] box-border min-w-[396px] max-w-full mq750:py-[47px] mq750:px-8 mq750:box-border mq750:min-w-full">
          <div className="self-stretch flex flex-col items-center justify-center gap-8 max-w-full mq750:gap-4">
            <div className="self-stretch flex flex-col items-center justify-center gap-6 max-w-full text-13xl font-h4-32">
              <div className="self-stretch flex flex-col items-center justify-start gap-2">
                <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-medium font-[inherit] mq480:text-lgi mq480:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
                  Welcome to Trivision
                </h1>
                <div className="relative text-base leading-[150%] font-medium">
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </div>
              </div>
              <form
                className="m-0 self-stretch flex flex-col items-start justify-start gap-6 max-w-full"
                onSubmit={handleSubmit}
              >
                <input
                  style={{
                    width: "96%",
                    border: "1px solid black",
                    padding: "8px 12px",
                    fontSize: "16px",
                  }}
                  type="email"
                  name="registerEmail"
                  placeholder="Email"
                  value={formData.registerEmail}
                  onChange={handleChange}
                />
                <input
                  style={{
                    width: "96%",
                    border: "1px solid black",
                    padding: "8px 12px",
                    fontSize: "16px",
                  }}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="self-stretch flex flex-row items-start justify-start gap-4 mq750:flex-wrap">
                  <div
                    className="flex-1 border-black border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-center py-1.5 px-4 min-w-[151px] min-h-[40px] mq480:flex-1 cursor-pointer hover:bg-black hover:text-white hover:border-[1px] hover:border-solid transition-all duration-300"
                    onClick={handleNavigation}
                  >
                    <div className="flex-1 relative text-base leading-[150%] font-medium font-h4-32 text-background-color-black text-center">
                      REGISTER
                    </div>
                  </div>
                  <div className="flex-1 bg-black overflow-hidden flex flex-row items-center justify-center">
                    <button
                      type="submit"
                      className="flex-1 bg-black text-white relative text-base leading-[150%] py-2 px-4 font-medium font-colour-white font-h4-32 text-center box-border min-w-[151px] cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? "LOADING..." : "LOGIN"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Image
          className="h-[740px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[396px] mq750:min-w-full"
          loading="lazy"
          width={610}
          height={740}
          alt="Placeholder"
          src="/loginbanner.jpeg"
        />
      </main>
    </div>
  );
};

export default CustomerAccount;
