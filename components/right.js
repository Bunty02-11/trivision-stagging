import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const Right = memo(({ className = "" }) => {
  const router = useRouter();
  return (
    <div
      className={`w-[504px] border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-4 max-w-full text-left text-base text-black font-h4-32 lg:flex-1 mq750:min-w-full mq480:pt-5 mq480:pb-5 mq480:box-border ${className}`}
    >
      <div className="self-stretch border-gray-800 border-[1px] border-solid box-border flex flex-row items-center justify-start py-3.5 pl-4 pr-[13px] gap-3 min-h-[56px] max-w-full mq750:flex-wrap">
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          width={24}
          height={24}
          alt=""
          src="/mingcutelocationline.svg"
        />
        <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[115px] max-w-full">
          Add New Address
        </div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          width={24}
          height={24}
          alt=""
          src="/iconamoonarrowup2-21@2x.png"
        />
      </div>
      <div className="self-stretch border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-start py-3.5 px-[15px] gap-4 max-w-full">
        <div className="self-stretch flex flex-row items-center justify-center gap-2.5 max-w-full">
          <div className="flex-1 relative leading-[150%] font-semibold inline-block max-w-[calc(100%_-_34px)]">
            Lovetto Nazareth
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/icroundplus1@2x.png"
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-2">
          <div className="relative leading-[150%] font-medium">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
          <div className="relative leading-[150%] font-medium">
            support@gmail.com
          </div>
          <div className="relative leading-[150%] font-medium">
            +971 56 5000 2759
          </div>
        </div>
      </div>
      <div
        className="self-stretch bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-[190px] text-center text-background-color-primary mq480:pl-[95px] mq480:pr-[95px] mq480:box-border cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300"
        onClick={() => {
          localStorage.removeItem("token"); // Remove token from localStorage
          router.push("/"); // Redirect to home page
        }}
      >
        <div className="flex-1 relative leading-[150%] font-medium">
          LOG OUT
        </div>
      </div>
    </div>
  );
});

Right.propTypes = {
  className: PropTypes.string,
};

export default Right;
