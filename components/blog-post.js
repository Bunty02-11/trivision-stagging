import { memo } from "react";
import Image from "next/image";
// import ContentParagraphs from "./content-paragraphs";
import PropTypes from "prop-types";

const BlogPost = memo(({ className = "", blog }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[60px] px-10 pb-[60px] mq480:pt-[40px] mq480:pb-[40px] box-border max-w-full text-center text-base text-black font-h4-32 mq480:box-border mq750:pl-10 mq750:pr-10 mq750:box-border mq1050:pb-8 mq1050:box-border mq1250:pb-[50px] mq1250:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start gap-10 max-w-full mq750:gap-5">
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-21xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-[inherit] mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
            {blog?.title}
          </h1>
          <div className="self-stretch relative text-base leading-[150%] font-medium">
            {new Date(blog?.createdAt)?.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            - Admin
          </div>
        </div>
        <div className="self-stretch flex items-center justify-center">
          <Image
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            width={1280}
            height={400}
            alt=""
            src={blog?.main_img}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-left">
          {blog?.description?.sections?.map((sec, i) => (
            <div className="relative leading-[150%] font-medium" key={i}>
              <h3>{sec?.title}</h3>
              <p>{sec?.body}</p>
              <ol>
                {sec?.subsections?.map((subsec, ind) => (
                  <li key={ind}>
                    <h4>{subsec?.["sub-title"]}</h4>
                    <p>{subsec?.["sub-body"]}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        {/* <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-10 max-w-full mq750:gap-5 mq750:grid-cols-[minmax(300px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(300px,_520px))]">
          <ContentParagraphs emptyContent="/51@2x.png" />
          <ContentParagraphs emptyContent="/5-1@2x.png" />
          <ContentParagraphs emptyContent="/5-2@2x.png" />
        </div> */}
        <div className="self-stretch h-[73px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6">
          <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="flex flex-row items-start justify-start gap-3">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/icon--facebook1.svg"
              />
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/icon--instagram1.svg"
              />
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/icon--x1.svg"
              />
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/icon--linkedin1.svg"
              />
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/icon--youtube2.svg"
              />
            </div>
          </div>
          <div className="self-stretch h-px relative border-gray-300 border-t-[1px] border-solid box-border" />
        </div>
      </div>
    </div>
  );
});

BlogPost.propTypes = {
  className: PropTypes.string,
};

export default BlogPost;
