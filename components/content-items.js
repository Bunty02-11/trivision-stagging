import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const ContentItems = memo(
  ({ className = "", title, description, featuredImg, slug, key }) => {
    const router = useRouter();
    // Function to navigate to a specific route
    const handleNavigation = (path) => {
      router.push(path);
    };

    return (
      <div
        className={`w-[24.5%] h-[456px] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-4 text-left text-xl text-black font-h4-32 ${className}`}
        key={key}
      >
        <Image
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
          loading="lazy"
          width={314}
          height={314}
          alt="blog"
          src={featuredImg}
          onClick={() => handleNavigation(`/blog/${slug}`)}
        />
        <div className="self-stretch flex flex-col items-center justify-center gap-2">
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

ContentItems.propTypes = {
  className: PropTypes.string,
  emptyContent: PropTypes.string.isRequired,

  /** Style props */
  contentItemsLeft: PropTypes.string,
  contentItemsTop: PropTypes.string,
};

export default ContentItems;
