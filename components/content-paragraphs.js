import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const ContentParagraphs = memo(({ className = "", emptyContent }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-4 min-w-[300px] max-w-full text-center text-base text-black font-h4-32 ${className}`}
    >
      <Image
        className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        width={400}
        height={400}
        alt=""
        src={emptyContent}
      />
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="relative leading-[150%] font-medium">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent
        </div>
      </div>
    </div>
  );
});

ContentParagraphs.propTypes = {
  className: PropTypes.string,
  emptyContent: PropTypes.string.isRequired,
};

export default ContentParagraphs;
