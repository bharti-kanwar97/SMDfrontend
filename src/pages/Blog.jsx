import { useState, useEffect } from "react";
import blog_bg from "../assets/blogbgImg.jpg";
import blog_bg2 from "../assets/blogbgImg2.jpg";
import { Link } from "react-router-dom";
import { CgChevronDoubleRight } from "react-icons/cg";
import api from "../api/axios.js";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const loadBlogs = async () => {
    try {
      const response = await api.get("/blogs/");
      console.log(response.data);
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadBlogs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate();

    // function to add st, nd, rd, th
    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    const suffix = getOrdinal(day);

    return { day, suffix, month, year };
  };

  return (
    <>
      <section className="pt-[60px] sm:mt-[100px]">
        <div
          className="h-[800px] py-10 bg-no-repeat bg-scroll bg-center bg-cover h-auto sm:pt-[40px] sm:pb-[40px] md:pt-[50px] md:pb-[40px] lg:pt-[80px] lg:pb-[50px] "
          style={{ backgroundImage: `url(${blog_bg})` }}
        >
          <div className="text-center lg:w-[600px] mx-3 sm:mx-24 md:mx-40 lg:mx-20 lg:mx-auto py-7 sm:py-12">
            <h1 className="font-Muli font-bold text-[40px]  lg:text-[40px] xl:text-[48px] leading-[48px] sm:leading-[48px] lg:leading-[48px] xl:leading-[58px] text-white ">
              From The Blog
            </h1>
            <p className="font-roboto font-normal  text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[22px] leading-[24px] sm:leading-[25px] md:leading-[26px] lg:leading-[29px] xl:leading-[32px] text-white pt-2">
              The latest news from Shreemdacademy and also latest Internet
              marketing and web design strategies and techniques
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-8 xl:px-50 lg:px-15 md:px-10 sm:px-20 px-8 ">
        <Link
          to="/"
          className="inline-block text-[#105503] font-roboto font-medium text-[16px] leading-[23px] hover:text-[#666]"
        >
          Home{" "}
        </Link>{" "}
        <CgChevronDoubleRight className="inline-block font-roboto font-medium text-[16px] leading-[23px] text-[#999]" />{" "}
        <span className=" font-roboto font-medium text-[16px] leading-[23px] text-[#999]">
          Our Blog
        </span>
        <hr className="mt-8 border-[#bbb]" />
      </div>
      {/* start section for blog md:w-[350px] */}
      <section className="bg-gray-50 py-10 sm:py-5 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10 lg:gap-15 xl:gap-30 xl:mx-40 lg:mx-10 md:mx-25 sm:mx-30 mx-2 pt-4 md:pt-16 pb-24 ">
          {blogs.map((blog) => {
            const d = formatDate(blog.createdAt);
            return (
              <Link to={`/blog/${blog._id}`} key={blog._id} className="">
                <div
                  key={blog._id}
                  className="content w-auto sm:w-full lg:min-w-[200px] lg:max-w-[350px] bg-white border-gray-300 border-[1px] rounded-lg hover:shadow-lg/30 hover:transition-all hover:duration-400 hover:-translate-y-2 hover:ease-in-out hover:cursor-pointer duration-400 ease-in-out"
                >
                  <img
                    src={blog.image}
                    alt=""
                    className="w-auto min-w-full h-auto max-h-[300px] sm:w-full md:w-[250px] md:h-[200px] sm:h-[220px] lg:w-fit lg:h-[200px] mx-auto  rounded-t-lg"
                  />
                  <h1 className="font-Muli font-medium text-[#333] hover:text-[#858585] text-[24px] leading-[29px] pt-5 pb-3 px-4">
                    {blog.title}
                  </h1>
                  <div className="font-roboto font-light text-[#333] text-[16px] leading-[24px] line-clamp-4 pt-2 px-4">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                  </div>
                  <h3 className="font-roboto font-medium text-[#aaa] text-[16px] leading-[16px] pt-3 pb-5 px-4">
                    Smd- {d.day}
                    <sup>{d.suffix}</sup>
                    {d.month} {d.year}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section
        className=" py-[40px] lg:py-[60px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${blog_bg2})` }}
      >
        <div className="flex flex-col lg:flex-row align-items-center justify-between py-2 my-2 xl:mx-40 lg:mx-30 md:mx-10 sm:mx-25 mx-2">
          <div className="md:pb-4 lg:pl-2 text-center self-center lg:text-left md:w-[70%] lg:min-w-[580px] lg:max-w-[650px] w-full">
            <h3 className="font-Muli font-semibold text-white text-[30px] xl:text-[38px] leading-[36px] xl:leading-[46px] pb-3">
              Unlock Your Creative Potential
            </h3>
            <p className="font-roboto font-light text-white text-[17px] sm:text-[16px] md:text-[17px] xl:text-[18px] leading-[26px] sm:leading-[24px] md:leading-[26px] xl:leading-[27px] lg:pr-[80px] ">
              Enroll Now in Our Web Design and Development Course! Learn to
              Craft Stunning Websites from Scratch. Turn Your Passion into a
              Profession. Get Started Today
            </p>
          </div>
          <div className="pt-5 pb-2 lg:pr-2 xl:ml-25 self-center md:w-[30%] lg:ml-0">
            <button className="font-roboto font-bold text-white sm:text-[15px] xl:text-[17px] sm:leading-[15px] xl:leading-[17px] rounded-sm bg-[#105503] hover:text-white px-4 py-2 sm:py-4 sm:px-6 w-[200px] transition duration-450  ease-in-out hover:bg-transparent hover:border-[#fff] hover:border-2 border-2 border-transparent">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
