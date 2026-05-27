import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { useParams } from "react-router-dom";
import aboutImg from "../assets/aboutImg.jpg";
import { CgChevronDoubleRight } from "react-icons/cg";
import api from "../api/axios";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  const loadSubjectDetail = async () => {
    try {
      const response = await api.get(`/subjects/${id}`);
      console.log(response.data.subjects);
      setCourse(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadSubjectDetail();
  }, [id]);
  if (!course) return <h2>Loading...</h2>;
  return (
    <>
      <section className="mt-[60px] sm:mt-[100px]">
        <div
          className="bg-[#333] h-auto py-[60px] sm:py-[90px] md:pt-[80px] md:pb-[80px] lg:py-[110px] background-no-repeat bg-scroll bg-center bg-cover "
          style={{ backgroundImage: `url(${aboutImg})` }}
        >
          <div className="text-center md:w-[600px] lg:w-[800px] mx-8 sm:mx-15  md:mx-auto ">
            <h1 className="font-Muli font-extrabold text-[29px] sm:text-[34px] lg:text-[40px] xl:text-[48px] leading-[35px] sm:leading-[41px] lg:leading-[48px] xl:leading-[58px] text-white pb-3">
              {course.name} Course
            </h1>
            <p className="font-roboto font-normal text-[16px] sm:text-[18px] lg:text-[19px] xl:text-[22px] leading-[24px] sm:leading-[26px] lg:leading-[29px] xl:leading-[32px] text-white lg:w-[660px] lg:mx-auto">
              Amazing content that builds trust with your audience will generate
              the organic traffic and targeted users you’re looking for
            </p>
          </div>
        </div>
      </section>

      <div className=" py-4 my-4 xl:mx-50 lg:mx-15 md:mx-10 sm:mx-20 mx-8 ">
        <Link
          to="/"
          className="inline-block text-[#105503] font-roboto font-medium text-[16px] leading-[23px] hover:text-[#666]"
        >
          Home{" "}
        </Link>{" "}
        <CgChevronDoubleRight className="inline-block font-roboto font-medium text-[16px] leading-[23px] text-[#999]" />{" "}
        <span className=" font-roboto font-medium text-[16px] leading-[23px] text-[#999]">
          {" "}
          About Shree Md Academy
        </span>
        <hr className="mt-8 border-[#bbb]" />
      </div>
      <section className=" mt-4 sm:mt-10 md:mt-15 lg:mt-25 mb-5">
        <div className="flex md:flex-row flex-col gap-10 md:gap-4 lg:gap-15 xl:gap-6 xl:mx-40 lg:mx-10 md:mx-8 sm:mx-10 mx-8 ">
          <div className={`md:w-1/2 w-full mx-0 lg:mt-6`}>
            <h1 className="font-Muli font-black text-[#222] text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] xl:leading-[24px] leading-[19px] py-2 uppercase">
              {course?.name}
            </h1>{" "}
            <br />
            <img
              src={course?.image1}
              alt=""
              className="w-full h-[250px] sm:h-[280px] lg:h-[300px]"
            />
            <h2 className="font-roboto font-light text-[#000] text-[17px] leading-[25px] py-4">
              <div dangerouslySetInnerHTML={{ __html: course.content1 }} />
            </h2>
          </div>
          <div
            className={`shadow-2xl hidden md:block md:w-1/2 w-full md:self-center md:mt-6`}
          >
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="mt-4 sm:mt-6  md:mt-15 lg:mt-15 mb-3 lg:mb-10 py-4 sm:py-10 md:py-8 lg:py-16 bg-gray-50">
        <div className="flex md:flex-row flex-col gap-10 md:gap-4 lg:gap-15 xl:gap-6 xl:mx-40 lg:mx-10 md:mx-8 sm:mx-10 mx-8 ">
          <div className={`md:w-1/2 w-full mx-0 `}>
            <img
              src={course?.image2}
              alt=""
              className="w-full h-[250px] sm:h-[280px] lg:h-[300px]"
            />
          </div>
          <div className={`image md:w-1/2 w-full`}>
            <h2 className="font-roboto font-light text-[#000] text-[17px] leading-[25px] py-4 inline-block">
              <div dangerouslySetInnerHTML={{ __html: course.content2 }} />
            </h2>
          </div>
        </div>
      </section>
      {/* This section using for mobile devices */}
      <section className="  mt-8 mb-5 py-4 bg-gray-50 sm:mx-10 mx-8 block md:hidden ">
        <ContactForm />
      </section>
    </>
  );
}
