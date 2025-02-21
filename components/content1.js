import { memo, useState } from "react";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";

const Content1 = memo(({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, company, email, phone, subject, message } = formData;

    if (!name || !company || !email || !phone || !subject || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://apitrivsion.prismcloudhosting.com/api/contact/",
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
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
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
      <div
        className={`w-[1300px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-10 max-w-full text-center text-21xl text-black font-h4-32 mq750:gap-5 ${className}`}
      >
        <h1 className="m-0 w-[421px] relative text-inherit leading-[120%] font-medium font-[inherit] inline-block max-w-full mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
          We Are Here To Help
        </h1>
        <form
          onSubmit={handleSubmit}
          className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-left text-base"
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full bg-transparent pb-2"
                value={formData.name}
                onChange={handleChange}
                // className="flex-1 border-b-[1px] border-gray-300 box-border p-2 outline-none"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full bg-transparent pb-2"
                value={formData.company}
                onChange={handleChange}
                // className="flex-1 border-b-[1px] border-gray-300 box-border p-2 outline-none"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full bg-transparent pb-2"
                value={formData.phone}
                onChange={handleChange}
                // className="flex-1 border-b-[1px] border-gray-300 box-border p-2 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full bg-transparent pb-2"
                value={formData.email}
                onChange={handleChange}
                // className="flex-1 border-b-[1px] border-gray-300 box-border p-2 outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full bg-transparent pb-2"
              value={formData.subject}
              onChange={handleChange}
              // className="self-stretch border-b-[1px] border-gray-300 box-border p-2 outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full h-full resize-none bg-transparent"
              value={formData.message}
              onChange={handleChange}
              // className="self-stretch border-b-[1px] border-gray-300 box-border p-2 outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-5 cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "SEND"}
          </button>
        </form>
      </div>
    </>
  );
});

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
