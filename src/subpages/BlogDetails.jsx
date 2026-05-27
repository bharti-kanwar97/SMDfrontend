import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CgChevronDoubleRight } from "react-icons/cg";
import api from "../api/axios.js";
export default function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const loadBlogDetail = async () => {
    try {
      const response = await api.get(`/blogs/${id}`);
      console.log(response.data);
      setBlog(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadBlogDetail();
  }, [id]);

  if (!blog) return <h2>Loading...</h2>;

  return (
    <>
      <div className="mt-[140px] sm:mt-[100px]  py-4 xl:mx-50 lg:mx-15 md:mx-10 sm:mx-20 mx-8 ">
        <Link
          to="/"
          className="inline-block text-[#105503] font-roboto font-medium text-[16px] leading-[23px] hover:text-[#666]"
        >
          Home
        </Link>
        <CgChevronDoubleRight className="inline-block font-roboto font-medium text-[16px] leading-[23px] text-[#999]" />{" "}
        <span className=" font-roboto font-medium text-[16px] leading-[23px] text-[#999]">
          <Link
            to="/blog"
            className="inline-block text-[#105503] font-roboto font-medium text-[16px] leading-[23px] hover:text-[#666]"
          >
            Our Blog
          </Link>
          <CgChevronDoubleRight className="inline-block font-roboto font-medium text-[16px] leading-[23px] text-[#999]" />{" "}
          {blog.title}
        </span>
        <hr className="mt-8 border-[#bbb]" />
      </div>
      <section className="">
        <div className="my-2  xl:gap-30 xl:mx-70 lg:mx-10 md:mx-20 sm:mx-15 mx-8 pt-8 md:pt-16 pb-24 ">
          <h1 className="font-Muli font-semibold text-[40px] leading-[48px] text-[#222] text-center">
            {blog.title}
          </h1>
          <h3 className="font-Muli font-normal text-[#333] text-[18px] leading-[26px] text-center pb-4">
            Posted by <span className="font-bold text-black">Smd</span> on{" "}
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h3>
          <img
            src={blog.image}
            alt=""
            className="mt-8 h-[400px] md:h-[600px] w-full  border-2 border-neutral-200 rounded-2xl"
          />
          <div className="font-roboto text-[#333] text-[18px] leading-[27px] sm:text-[16px] sm:leading-[24px] font-light text-justify">
   
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </div>
      </section>
    </>
  );
}
