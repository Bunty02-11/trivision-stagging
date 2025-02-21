import FrameComponent1 from "../../components/frame-component1";
import BlogPost from "../../components/blog-post";
import FrameComponent5 from "../../components/frame-component5";
import FrameComponent6 from "../../components/frame-component6";
import InstaPosts from "../../components/insta-posts";
import JoinWrapper from "../../components/join-wrapper";
import Footer from "../../components/footer";

// export const getServerSideProps = async ({ params }) => {
//   try {
//     const res = await fetch(
//       `https://apitrivsion.prismcloudhosting.com/api/blog/slug/${params?.slug}`
//     );

//     if (!res.ok) {
//       console.error("Failed to fetch data from the API");
//       return { notFound: true };
//     }

//     const data = await res.json();

//     if (!data.data) {
//       return { notFound: true };
//     }

//     return {
//       props: {
//         blog: data?.data,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data in getServerSideProps:", error);
//     return { notFound: true };
//   }
// };

export const getServerSideProps = async ({ params }) => {
  try {
    const [blogRes, relatedBlogsRes] = await Promise.all([
      fetch(
        `https://apitrivsion.prismcloudhosting.com/api/blog/slug/${params?.slug}`
      ),
      fetch(`https://apitrivsion.prismcloudhosting.com/api/blog`),
    ]);

    if (!blogRes.ok || !relatedBlogsRes.ok) {
      console.error("Failed to fetch data from one or both APIs");
      return { notFound: true };
    }

    const [blogData, relatedBlogsData] = await Promise.all([
      blogRes.json(),
      relatedBlogsRes.json(),
    ]);

    if (!blogData.data) {
      return { notFound: true };
    }

    return {
      props: {
        blog: blogData?.data,
        relatedBlogs:
          relatedBlogsData?.data?.filter((x) => x?.slug !== params?.slug) || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data in getServerSideProps:", error);
    return { notFound: true };
  }
};

const BlogDetails = ({ blog, relatedBlogs }) => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-center px-0 pb-0 box-border leading-[normal] tracking-[normal] mq750:gap-[17px]">
      <FrameComponent1 />
      <BlogPost blog={blog} />
      <FrameComponent5 />
      <FrameComponent6 blogs={relatedBlogs} />
      <section className="flex flex-col items-start justify-start pt-0 pb-[60px] mq480:pb-[40px] pl-5 pr-0 box-border gap-[60px] max-w-full text-left text-21xl text-black font-h4-32 mq750:gap-[30px]">
        <JoinWrapper
          joinWrapperPadding="0px 20px 0px 0px"
          joinWrapperFlex="unset"
          joinWrapperAlignSelf="unset"
          emptyPlaceholders="/8@2x.png"
          emptyPlaceholders1="/7@2x.png"
          emptyPlaceholders2="/6@2x.png"
          emptyPlaceholders3="/5@2x.png"
        />
        <InstaPosts />
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        formMargin="0"
        iconYoutube="/icon--youtube1.svg"
        itemImg="/item--img2.svg"
        itemImg1="/item--img-12.svg"
        itemImg2="/item--img-22.svg"
      />
    </div>
  );
};

export default BlogDetails;
