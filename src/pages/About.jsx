import { Outlet, NavLink, Link } from "react-router-dom";
import aboutImg from "../assets/aboutImg.jpg";
import seoServices from "../assets/aboutImg1.png";
import localSEO from "../assets/localSEO.png";
import ecommerce from "../assets/ecommerce.png";
import advAnalysis from "../assets/advAnalysis.png";
import currency from "../assets/currency.png";
import marketingImg from "../assets/marketingImg.png";
import aboutImg2 from "../assets/aboutImg2.jpg";

import bg_img from "../assets/bg-04.jpg";
import papaya from "../assets/client1.png";
import organic from "../assets/client2.png";
import paper from "../assets/client3.png";
import summer from "../assets/client4.png";
import bread from "../assets/client5.png";
import wave from "../assets/client6.png";
import centerPsychological from "../assets/client7.png";
import burgeer from "../assets/client8.png";
import foodiee from "../assets/client9.png";
import bg_img2 from "../assets/bg-05.jpg";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { CgChevronDoubleRight } from "react-icons/cg";
import { useEffect } from "react";
export default function About() {
  const section1 = useInView({ triggerOnce: true });
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const stats = [
    { value: 3485, label: "Links Optimized", delay: "delay-300" },
    { value: 1281, label: "Happy Customers", delay: "delay-500" },
    { value: 4379, label: "Websites Improved", delay: "delay-700" },
    { value: 2473, label: "Active Accounts", delay: "delay-900" },
  ];
  // SEO services
  const img = useScrollReveal();
  const text = useScrollReveal();
  // custom seo services
  const seoText = useScrollReveal();
  const seotxt1 = useScrollReveal();
  const seotxt2 = useScrollReveal();
  const seotxt3 = useScrollReveal();
  const seotxt4 = useScrollReveal();
  // email marketing
  const marketText = useScrollReveal();
  const marketImg = useScrollReveal();

  // for review
  const reviewText = useScrollReveal();

  return (
    <>
      <section className="mt-[60px] sm:mt-[100px]">
        <div
          className="bg-[#333] h-auto py-[60px] sm:py-[90px] md:pt-[80px] md:pb-[80px] background-no-repeat bg-scroll bg-center bg-cover "
          style={{ backgroundImage: `url(${aboutImg})` }}
        >
          <div className="text-center lg:w-[800px] mx-4 sm:mx-30 md:mx-40 lg:mx-auto ">
            <h1 className="font-Muli font-extrabold text-[29px] sm:text-[34px] lg:text-[40px] xl:text-[48px] leading-[35px] sm:leading-[41px] lg:leading-[48px] xl:leading-[58px] text-white pb-3">
              About Shree Md Academy
            </h1>
            <p className="font-roboto font-normal text-[16px] sm:text-[18px] lg:text-[19px] xl:text-[22px] leading-[24px] sm:leading-[26px] lg:leading-[29px] xl:leading-[32px] text-white lg:w-[660px] lg:mx-auto">
              Welcome to Shree Md Academy ! Elevate Your Creativity in Web
              Design, Graphics, and Development. Unleash Your Imagination, Hone
              Skills, and Shape Your Digital Path. Join Today for a Creative
              Future.
            </p>
          </div>
        </div>
      </section>

      <div className=" py-4 my-4 xl:mx-50 lg:mx-15 md:mx-10 sm:mx-20 mx-4 ">
        <Link
          to="/"
          className="inline-block text-[#105503] font-roboto font-medium text-[16px] leading-[23px] hover:text-[#666]"
        >
          Home
        </Link>
        <CgChevronDoubleRight className="inline-block font-roboto font-medium text-[16px] leading-[23px] text-[#999]" />{" "}
        <span className=" font-roboto font-medium text-[16px] leading-[23px] text-[#999]">
         
          About Shree Md Academy
        </span>
        <hr className="mt-8 border-[#bbb]" />
      </div>

      {/* start section for SEO services */}
      <section className="">
        <div className="my-4 py-4 lg:mt-8 lg:pt-4 ">
          <div className="py-4 my-4 flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-10 xl:gap-15 xl:mx-50 lg:mx-15 md:mx-10 sm:mx-20 mx-2 ">
            <div
              ref={img.ref}
              className={`md:w-1/2 w-full md:self-center  transition-all duration-700 ease-linear ${img.show ? "translate-x-0 opacity-100 delay-200" : "-translate-x-2 sm:-translate-x-8  md:-translate-x-10 xl:-translate-x-16 opacity-0 "}`}
            >
              <img src={seoServices} alt="" className="w-[90%] h-[90%]" />
            </div>
            <div
              ref={text.ref}
              className={`mt-2 sm:mt-6 md:w-1/2 w-full  transition-all duration-700 ease-linear ${text.show ? "translate-x-0 opacity-100 delay-500" : " translate-x-2 sm:translate-x-8   md:translate-x-10 xl:translate-x-16 opacity-0"}`}
            >
              <h1 className="font-Muli font-semibold text-[26px] leading-[31px] sm:text-[29px] sm:leading-[35px] md:text-[27px] md:leading-[33px] lg:text-[30px] lg:leading-[36px] text-[#222] py-2">
                We're providing the best SEO services for your website
              </h1>
              <p className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] text-[#333] py-2">
                An enim nullam tempor sapien gravida donec pretium ipsum porta
                justo integer at odio velna vitae auctor integera congue magna
                at purus pretium ligula rutrum luctus ultrice a gravida lectus
                suscipit gestas magna suscipit luctus undo
              </p>
              <p className="font-roboto italic font-light text-[17px] leading-[25px] sm:text-[18px] sm:leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[26px] text-[#666] mt-4 sm:my-6 border-l-3 border-[#105503] pl-4">
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean magna ligula eget dolor suscipit egestas at viverra dolor
                iaculis luctus magna suscipit egestas "
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end section for SEO services */}

      {/*starting section for custom seo services  */}
      <section className=" bg-[#f8f9fb] mt-2 pt-4 ">
        <div className="my-8 py-4 ">
          <div className="xl:mx-20 lg:mx-15 md:mx-15 sm:mx-20 mx-4">
            <div
              ref={seoText.ref}
              className={`text-center transition-all duration-700 ease-linear ${seoText.show ? " translate-y-0 opacity-100 delay-300" : "translate-y-16 opacity-0"}`}
            >
              <h1 className="font-Muli font-semibold text-[28px] leading-[34px] sm:text-[32px]  md:text-[34px] md:leading-[40px] lg:text-[38px] lg:leading-[46px] xl:text-[44px] sm:leading-[38px] text-gray-900 pb-4">
                Custom SEO Services – Our Specialty
              </h1>
              <h2 className="font-roboto font-light text-[17px] leading-[25px] sm:leading-[26px] md:text-[18px] md:leading-[26px] text-zinc-500 max-w-[800px] mx-auto lg:text-[18px] lg:leading-[27px]">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta elementum massa risus
              </h2>
            </div>
            <div className="py-4 my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-around gap-4 mx-2 sm:mx-8">
              <div
                ref={seotxt1.ref}
                className={`max-w-[535px] text-center rounded-md py-10 px-7 bg-neutral-100 mx-auto md:mx-0 transition-all duration-500 ease-linear border-2 border-[#ccc] ${seotxt1.show ? " translate-y-0 opacity-100 delay-300" : "translate-y-34 opacity-0"}`}
              >
                <img src={localSEO} alt="" className="w-[80px] mx-auto py-2" />
                <h3 className="font-Muli font-semibold text-[20px]  md:text-[21px]  lg:text-[19px] text-[#222] leading-[20px] md:leading-[21px] lg:leading-[19px] py-4  ">
                  Local SEO
                </h3>
                <p className="font-roboto font-light text-[17px] sm:text-[16px] md:text-[15px] text-[#757575] leading-[25px] sm:leading-[24px] md:leading-[23px] ">
                  Porta semper lacus cursus feugiat and primis ultrice
                </p>
              </div>
              <div
                ref={seotxt2.ref}
                className={`max-w-[535px] rounded-md bg-neutral-100 text-center py-10 px-7 mx-auto md:mx-0 transition-all duration-900 ease-linear border-2 border-[#ccc] ${seotxt2.show ? " translate-y-0 opacity-100 delay-300" : "translate-y-34 opacity-0"}`}
              >
                <img src={ecommerce} alt="" className="w-[80px] mx-auto py-2" />
                <h3 className="font-Muli font-semibold text-[20px]  md:text-[21px] lg:text-[19px] text-[#222] leading-[20px] md:leading-[21px] lg:leading-[19px] py-4  ">
                  E-Commerce SEO
                </h3>
                <p className="font-roboto font-light text-[17px] sm:text-[16px] md:text-[15px] text-[#757575] leading-[25px] sm:leading-[24px] md:leading-[23px] ">
                  Porta semper lacus cursus feugiat and primis ultrice
                </p>
              </div>
              <div
                ref={seotxt3.ref}
                className={`max-w-[535px] bg-neutral-100 rounded-md text-center py-10 px-7 mx-auto md:mx-0 transition-all duration-1300 ease-linear border-2 border-[#ccc] ${seotxt3.show ? " translate-y-0 opacity-100 delay-300" : "translate-y-34 opacity-0"}`}
              >
                <img
                  src={advAnalysis}
                  alt=""
                  className="w-[80px] mx-auto py-2"
                />
                <h3 className="font-Muli font-semibold text-[20px] md:text-[21px] lg:text-[19px] text-[#222] leading-[20px]  md:leading-[21px] lg:leading-[19px] py-4  ">
                  Advanced Analytics
                </h3>
                <p className="font-roboto font-light text-[17px] sm:text-[16px] md:text-[15px] text-[#757575]  leading-[25px] sm:leading-[24px] md:leading-[23px] ">
                  Porta semper lacus cursus feugiat and primis ultrice
                </p>
              </div>
              <div
                ref={seotxt4.ref}
                className={`max-w-[535px] bg-neutral-100 rounded-md text-center py-10 px-7 mx-auto md:mx-0 transition-all duration-1700 ease-linear border-2 border-[#ccc] ${seotxt4.show ? " translate-y-0 opacity-100 delay-300" : "translate-y-34 opacity-0"}`}
              >
                <img src={currency} alt="" className="w-[80px] mx-auto py-2" />
                <h3 className="font-Muli font-semibold text-[20px] md:text-[21px] lg:text-[19px] text-[#222] leading-[20px]  md:leading-[21px] lg:leading-[19px] py-4 ">
                  PPC Management
                </h3>
                <p className="font-roboto font-light text-[17px] sm:text-[16px] md:text-[15px] text-[#757575]  leading-[25px] sm:leading-[24px] md:leading-[23px] ">
                  Porta semper lacus cursus feugiat and primis ultrice
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ending section for custom seo services */}

      {/*starting section for starting sales using seo, ppc and email marketing */}
      <section className="mt-2 sm:mt-8 pt-4">
        <div className="mx-2">
          <div className="sm:py-4 sm:my-4 flex flex-col md:flex-row gap-2  sm:gap-4 lg:gap-10 xl:gap-25 xl:mx-30 lg:mx-15 md:mx-8 sm:mx-20 mx-2">
            <div
              ref={marketText.ref}
              className={`main md:mt-0 lg:mt-20 md:w-1/2 w-full lg:py-0 pb-4 sm:pb-8  transition-all duration-700 ease-linear ${marketText.show ? "translate-x-0 opacity-100 delay-200" : "-translate-x-2 sm:-translate-x-8  md:-translate-x-10 xl:-translate-x-16 opacity-0 "}`}
            >
              <h1 className="font-Muli font-semibold text-[26px] leading-[31px] sm:text-[29px] md:text-[27px] md:leading-[33px] lg:text-[30px] xl:text-[34px] sm:leading-[35px] lg:leading-[36px]  xl:leading-[41px] text-[#222] py-6">
                Get more sales with SEO, PPC, and Email Marketing
              </h1>
              <ul className="pl-4 list-disc">
                <li className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] text-[#333] py-2">
                  Vitae auctor integer congue magna at pretium blandit porta
                  justo integer. Feugiat a ligula rutrum luctus primis ultrice
                </li>
                <li className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] text-[#333] py-2">
                  Integer congue magna at pretium purus a pretium ligula rutrum
                  and luctus risus eros dolor auctor ipsum blandit purus
                  vehicula magna luctus tempor quisque
                </li>
              </ul>
              <div className="flex sm:flex-row flex-col my-5 py-5  sm:gap-5 md:gap-2 sm:max-w-[500px]  md:w-auto w-full ">
                <div className="mb-4">
                  <h1
                    ref={section1.ref}
                    className="font-Muli font-bold text-[38px] leading-[38px] sm:text-[42px] md:text-[36px] md:leading-[36px]  text-[#105503] sm:leading-[38px] lg:text-[38px] lg:leading-[38px]"
                  >
                    {section1.inView && (
                      <CountUp
                        start={0}
                        end={4379}
                        separator=","
                        duration={5}
                      />
                    )}
                  </h1>
                  <h3 className="font-roboto tracking-wider font-medium text-[18px] text-[#333] leading-[28px] py-3 md:text-[16px] md:leading-[24px]">
                    Websites Improved
                  </h3>
                  <p className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] text-[#333] sm:leading-[25px] md:text-[15px] md:leading-[23px] ">
                    An enim nullam tempor sapien gravida donec blandit ipsum
                  </p>
                </div>
                <div className="mb-4">
                  <h1
                    ref={section1.ref}
                    className="font-Muli font-bold text-[38px] leading-[38px] sm:text-[42px] text-[#105503] md:text-[36px] md:leading-[36px] sm:leading-[38px] lg:text-[38px] lg:leading-[38px]"
                  >
                    {section1.inView && (
                      <CountUp start={0} end={99} duration={5} />
                    )}
                    %
                  </h1>
                  <h3 className="font-roboto tracking-wider font-medium text-[17px] text-[#333] leading-[28px] md:text-[16px] md:leading-[24px] py-3">
                    Customer Satisfaction
                  </h3>
                  <p className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] text-[#333] sm:leading-[25px] md:text-[15px] md:leading-[23px] ">
                    An enim nullam tempor sapien gravida donec blandit ipsum
                  </p>
                </div>
              </div>
            </div>
            <div
              ref={marketImg.ref}
              className={`image md:w-1/2 w-full md:self-center  transition-all duration-700 ease-linear ${marketText.show ? "translate-x-0 opacity-100 delay-200" : " translate-x-2 sm:translate-x-8   md:translate-x-10 xl:translate-x-16 opacity-0"}`}
            >
              <img
                src={marketingImg}
                alt=""
                className="lg:h-[600px] xl:w-[700px] lg:w-[500px] w-full md:h-[440px] sm:h-[600px] min-w-[100px] min-h-[300px] "
              />
            </div>
          </div>
        </div>
      </section>
      {/*end section for starting sales using seo, ppc and email marketing */}

      {/* section for data */}
      <section className="mt-8 pt-4">
        <div
          className="bg-[#333] h-auto py-[20px] sm:py-[70px] md:pt-[80px] md:pb-[50px] background-no-repeat bg-scroll bg-center bg-cover sm:px-[20px] md:px-[60px] lg:px-[20px]"
          style={{ backgroundImage: `url(${aboutImg2})` }}
        >
          <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 md:py-4 lg:py-10 xl:mx-40 justify-items-center sm:gap-4"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className={`
            py-2 px-2 text-center
            transition-all duration-700 ease-out
            ${inView ? `translate-y-0 opacity-100 ${item.delay}` : "translate-y-24 opacity-0"}
          `}
              >
                <h1 className="text-white font-bold text-[35px] sm:text-[46px] md:text-[38px] md:leading-[38px] lg:text-[44px] lg:leading-[44px] xl:text-[52px] leading-[52px] pb-2 md:pb-3">
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={4}
                      separator=","
                    />
                  )}
                </h1>

                <h3 className="text-white font-semibold text-[14px] sm:text-[17px] sm:leading-[17px] md:text-[16px] md:leading-[16px] lg:text-[18px] lg:leading-[18px] xl:text-[19px] leading-[25px]">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ending section for data */}

      {/* starting section for marketing */}
      <section className="mt-8 pt-4">
        <div className=" xl:mx-40 lg:mx-15 md:mx-10 sm:mx-20 mx-2">
          <div className="lg:w-[800px] mx-auto flex flex-col md:flex-row text-center justify-center lg:text-left gap-2">
            <NavLink
              to="ppc"
              className={({ isActive }) =>
                `font-roboto font-semibold text-[18px] leading-[27px] sm:text-[19px] sm:leading-[29px]  md:text-[15px] md:leading-[23px]  lg:text-[16px] lg:leading-[24px] hover:text-neutral-600 sm:mx-4 px-5 md:px-2 md:mx-2  pb-[10px] ${isActive ? "text-neutral-600 border-b-2 border-[#105503]" : " text-[#bbb]"} `
              }
            >
              Pay-Per-Click Advertising
            </NavLink>
            <NavLink
              to="socialMarketing"
              className={({ isActive }) =>
                `font-roboto font-semibold text-[18px] leading-[27px] sm:text-[19px] sm:leading-[29px]  md:text-[15px] md:leading-[23px]  lg:text-[16px] lg:leading-[24px] text-[#bbb] hover:text-neutral-600 sm:mx-4 px-5 md:px-2 md:mx-2 pb-[10px] ${isActive ? "text-neutral-600 border-b-2 border-[#105503]" : " text-[#bbb]"}`
              }
            >
              Social Media Marketing
            </NavLink>
            <NavLink
              to="seo"
              className={({ isActive }) =>
                `font-roboto font-semibold text-[18px] leading-[27px] sm:text-[19px] sm:leading-[29px]  md:text-[15px] md:leading-[23px]  lg:text-[16px] lg:leading-[24px] text-[#bbb] hover:text-neutral-600 sm:mx-4 px-5 md:px-2 md:mx-2  pb-[10px] ${isActive ? "text-neutral-600 border-b-2 border-[#105503]" : " text-[#bbb]"}`
              }
            >
              Search Engine Optimization
            </NavLink>
          </div>

          <hr className=" border-[#bbb] md:block hidden" />
        </div>
        <Outlet />
      </section>
      {/* ending section for marketing */}

      {/* starting secton for reviewing website */}
      <section
        className="mt-8 py-6"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="py-4 my-8 xl:mx-40 lg:mx-30 md:mx-5 sm:mx-20 mx-4">
          <div
            ref={reviewText.ref}
            className={`top text-center xl:mx-40 lg:mx-15 md:mx-10 sm:mx-15 mx-auto md:pb-10 pb-5 mb-2 md:mb-5 transition-all duration-700 ease-linear ${reviewText.show ? " translate-y-0 opacity-100 delay-300" : "translate-y-16 opacity-0"}`}
          >
            <h1 className="font-Muli font-semibold text-[#222] text-[28px] leading-[34px] sm:text-[32px] sm:leading-[38px] md:text-[34px] md:leading-[40px] lg:text-[38px] lg:leading-[46px] xl:text-[44px] xl:leading-[53px]  py-4">
              Reviews From Our Customers
            </h1>
            <h3 className="font-roboto font-light text-[#888] text-[17px] leading-[25px] sm:leading-[26px] md:text-[18px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] xl:text-[20px] xl:leading-[30px] pb-2 mb-4">
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero tempus, blandit posuere and ligula varius magna a
              porta elementum massa risus
            </h3>
          </div>
          <div className="bottom flex flex-col  md:flex-row gap-4 md:gap-4 lg:gap-10 xl:gap-10 xl:mx-40 lg:mx-15 sm:mx-15">
            <div
              class="elfsight-app-23d09b5b-d24d-4284-aeea-005abf26a3b1"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </section>
      {/* ending section for reviewing website */}

      {/*starting section for usedby startup  */}
      <section className="mt-8 py-6">
        <div className="py-4 my-8 xl:mx-40 lg:mx-30 md:mx-10 sm:mx-20 mx-4">
          <div className="text-center pb-8">
            <h2 className="font-roboto font-normal text-[#757575] text-[18px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[26px] lg:leading-[30px]">
              Used by startups, e-stores, web designers, and teams including:
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="w-[46%] sm:w-[30%] md:w-[32%] lg:w-[19%] py-[22px] px-[18px] mb-[7px]">
              <img
                src={papaya}
                alt=""
                className="opacity-[.85] max-w-[100%] h-auto place-self-center"
              />
            </div>
            <div className="w-[46%] sm:w-[30%] md:w-[32%] lg:w-[19%] py-[22px] px-[18px] mb-[7px]">
              <img
                src={organic}
                alt=""
                className="opacity-[.85] max-w-[100%] h-auto place-self-center"
              />
            </div>
            <div className="w-[46%] sm:w-[30%] md:w-[32%] lg:w-[19%] py-[22px] px-[18px] mb-[7px]">
              <img
                src={paper}
                alt=""
                className="opacity-[.85] max-w-[100%] h-auto place-self-center"
              />
            </div>
            <div className="w-[46%] sm:w-[30%] md:w-[32%] lg:w-[19%] py-[22px] px-[18px] mb-[7px]">
              <img
                src={summer}
                alt=""
                className="opacity-[.85] max-w-[100%] h-auto place-self-center"
              />
            </div>
            <div className="w-[46%] sm:w-[30%] md:w-[32%] lg:w-[19%] py-[22px] px-[18px] mb-[7px]">
              <img
                src={bread}
                alt=""
                className="opacity-[.85] max-w-[100%] h-auto place-self-center"
              />
            </div>
            <div className="w-[46%] sm:w-[30%] md:w-[32%] lg:w-[19%] py-[22px] px-[18px] mb-[7px]">
              <img
                src={wave}
                alt=""
                className="opacity-[.85] max-w-[100%] h-auto place-self-center"
              />
            </div>
            <div className="w-[46%] sm:w-[30%] md:w-[32%] lg:w-[19%] py-[22px] px-[18px] mb-[7px]">
              <img
                src={centerPsychological}
                alt=""
                className="opacity-[.95] max-w-[100%] h-auto place-self-center"
              />
            </div>
            <div className="w-[46%] sm:w-[30%] md:w-[32%] lg:w-[19%] py-[22px] px-[18px] mb-[7px]">
              <img
                src={burgeer}
                alt=""
                className="opacity-[.85] max-w-[100%] h-auto place-self-center"
              />
            </div>
            <div className="w-[46%] sm:w-[30%] md:w-[32%] lg:w-[19%] py-[22px] px-[18px] mb-[7px]">
              <img
                src={foodiee}
                alt=""
                className="opacity-[.85] max-w-[100%] h-auto place-self-center"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ending section for usedby startup */}

      {/* starting section for searching */}
      <section
        className="mt-8 py-[40px] lg:py-[60px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bg_img2})` }}
      >
        <div className="flex flex-col lg:flex-row align-items-center py-2 my-2 xl:mx-40 lg:mx-20 md:mx-35 sm:mx-20 mx-2">
          <div className="md:pb-4 lg:pl-2 lg:mr-8 text-center lg:text-left">
            <h3 className="font-Muli font-semibold text-white text-[30px] md:text-[32px] md:leading-[38px] xl:text-[38px] leading-[36px] xl:leading-[46px] pb-3">
              Improve your search ranking now!
            </h3>
            <p className="font-roboto font-light text-white text-[17px] sm:text-[16px] md:text-[17px] xl:text-[18px] leading-[26px] sm:leading-[24px] md:leading-[26px] xl:leading-[27px] lg:pr-[15%]">
              Donec vel sapien augue integer urna vel turpis cursus porta,
              mauris sed augue luctus dolor velna auctor congue tempus magna
              integer
            </p>
          </div>
          <div className="pt-5 pb-2 lg:pr-2 lg:ml-25 place-self-center">
            <button className="font-roboto font-bold text-white sm:text-[15px] xl:text-[17px] sm:leading-[15px] xl:leading-[17px] rounded-sm bg-[#105503] hover:text-white  py-4 px-6 w-[200px] transition duration-450  ease-in-out hover:bg-transparent hover:border-[#fff] hover:border-2 border-2 border-transparent">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
      {/* ending section for searching */}
    </>
  );
}
