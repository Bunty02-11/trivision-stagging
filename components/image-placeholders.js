import { memo, useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const ImagePlaceholders = memo(
  ({
    className = "",
    imagePlaceholdersFlex,
    imagePlaceholdersMinWidth,
    perfumeImageContainersAlignSelf,
    img,
    perfumes,
  }) => {
    const imagePlaceholdersStyle = useMemo(() => {
      return {
        flex: imagePlaceholdersFlex,
        minWidth: imagePlaceholdersMinWidth,
      };
    }, [imagePlaceholdersFlex, imagePlaceholdersMinWidth]);

    const perfumeImageContainersStyle = useMemo(() => {
      return {
        alignSelf: perfumeImageContainersAlignSelf,
      };
    }, [perfumeImageContainersAlignSelf]);

    return (
      <div
        className={`flex-1 flex flex-col items-center justify-center py-2 px-8 box-border gap-2 min-w-[240px] max-w-[320px] text-left text-xl text-black font-h4-32 ${className}`}
        style={imagePlaceholdersStyle}
      >
        <div
          className="self-stretch flex flex-row items-center justify-center py-0 pl-[87px] pr-[88px] mq480:pl-5 mq480:pr-5 mq480:box-border"
          style={perfumeImageContainersStyle}
        >
          <Image
            className="h-20 w-20 relative overflow-hidden shrink-0 object-cover"
            loading="lazy"
            width={80}
            height={80}
            alt=""
            src={img}
          />
        </div>
        <h3 className="m-0 relative text-inherit leading-[140%] font-medium font-[inherit] mq480:text-base mq480:leading-[22px]">
          {perfumes}
        </h3>
      </div>
    );
  }
);

ImagePlaceholders.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  perfumes: PropTypes.string,

  /** Style props */
  imagePlaceholdersFlex: PropTypes.string,
  imagePlaceholdersMinWidth: PropTypes.string,
  perfumeImageContainersAlignSelf: PropTypes.string,
};

export default ImagePlaceholders;
