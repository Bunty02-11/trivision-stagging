import { memo } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const Banner = memo(({ className = "" }) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <section
      className={`self-stretch h-[670px] mq750:h-[450px] overflow-hidden shrink-0 flex flex-col items-center justify-center pt-[498px] mq750:pt-[298px] px-10 pb-[60px] box-border bg-[url('/banner@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-center text-21xl text-background-color-primary font-h4-32 ${className}`}
    >
      <div className="h-28 w-full flex flex-col items-center justify-center gap-6">
        <h1 className="m-0 text-inherit leading-[120%] font-medium text-center mq750:text-5xl">
          Premium Sunglasses
        </h1>
        <div
          className="w-[145px] h-10 bg-background-color-primary flex items-center justify-center py-2 px-6 box-border text-base text-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => handleNavigation("/Sunglasses/Sunglasses")}
        >
          <div className="h-6 leading-[150%] font-medium flex items-center justify-center  mq750:text-sm">
            SHOP NOW
          </div>
        </div>
      </div>
    </section>
  );
});

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
