import { memo } from "react";
import ContentItems from "./content-items";
import PropTypes from "prop-types";

const Content = memo(({ className = "", blogs }) => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-10 mq750:gap-5">
      <div
        className={`self-stretch flex flex-row items-start justify-start px-20 flex-wrap content-start gap-x-2 gap-y-6}`}
      >
        {blogs?.map((x, i) => (
          <ContentItems
            title={x?.title}
            description={x?.description?.sections?.[0]?.body}
            featuredImg={x?.featured_img ? x?.featured_img : "/5-3@2x.png"}
            slug={x?.slug}
            key={i}
          />
        ))}
      </div>
      <div className="bg-black w-[183px] overflow-hidden flex flex-row items-center justify-center py-2 px-[39px] box-border whitespace-nowrap text-center text-base text-background-color-primary cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300">
        <div className="flex-1 relative leading-[150%] font-medium">
          LOAD MORE
        </div>
      </div>
    </div>
  );
});

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
