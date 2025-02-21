import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const PreviewElements = memo(
  ({ className = "", title, description, featuredImg, slug }) => {
    const router = useRouter();
    // Function to navigate to a specific route
    const handleNavigation = (path) => {
      router.push(path);
    };
    return (
      <div
        className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-4 min-w-[289px] max-w-[314px] text-left text-xl text-black font-h4-32 ${className}`}
      >
        <Image
          className="self-stretch h-[314px] relative max-w-full overflow-hidden shrink-0 object-cover cursor-pointer"
          width={314}
          height={314}
          alt=""
          src={featuredImg}
          onClick={() => handleNavigation(`/blog/${slug}`)}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <h3 className="m-0 relative text-inherit leading-[150%] font-medium font-[inherit] mq480:text-base mq480:leading-[24px]">
            {title}
          </h3>
          <div className="relative text-base leading-[150%] font-medium">
            {description}
          </div>
        </div>
      </div>
    );
  }
);

PreviewElements.propTypes = {
  className: PropTypes.string,
  emptyPreview: PropTypes.string.isRequired,
};

export default PreviewElements;
