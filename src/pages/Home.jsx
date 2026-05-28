import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/graphicsImg.png";
import home1 from "../assets/home1.svg";
import graphics from "../assets/home2.svg";
import camera from "../assets/home3.svg";
import sound from "../assets/home4.svg";
import web from "../assets/home5.svg";
import webdevelop from "../assets/home6.svg";
import colorPalette from "../assets/home7.svg";
import ai from "../assets/home8.svg";
import dataChart from "../assets/home9.svg";
import mern from "../assets/home10.svg";
import pamplate from "../assets/pamplate.png";
import founderImg from "../assets/founderImg.jpg";
import map from "../assets/bg-map.png";
import digitalImg from "../assets/digital_impact.jpg";
import data from "../assets/serviceImg1.png";
import email from "../assets/serviceImg2.png";
import video from "../assets/serviceImg3.png";
import seo from "../assets/serviceImg4.png";
import ppc from "../assets/serviceImg5.png";
import message from "../assets/serviceImg6.png";
import marketing from "../assets/serviceImg7.png";
import webDesign from "../assets/serviceImg8.png";
import aiImage from "../assets/aiImg.jpg";
import bluepattern from "../assets/bluepattern.png";
import papaya from "../assets/client1.png";
import organic from "../assets/client2.png";
import paper from "../assets/client3.png";
import summer from "../assets/client4.png";
import bread from "../assets/client5.png";
import { FaCheck } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ContactForm from "../components/ContactForm";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { IoCloseSharp } from "react-icons/io5";
import Courses from "../components/Courses";

import '../style.css';
export default function Home() {
  const [open, setOpen] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // visible 50% before triggering
  });
  const section1 = useInView({ triggerOnce: true });
  const section2 = useInView({ triggerOnce: true });
  // for founder
  const img = useScrollReveal();
  const text = useScrollReveal();
  // for map animation
  const mapText = useScrollReveal();
  const mapImg = useScrollReveal();

  // for AI animation
  const aiImg = useScrollReveal();
  const aiText = useScrollReveal();
  // for drive and sales animation
  const driveImg = useScrollReveal();
  const driveText = useScrollReveal();
  // for exploring services
  const exploreText1 = useScrollReveal();
  const exploreText2 = useScrollReveal();

  // for tracking records
  const trackText = useScrollReveal();
  const trackText2 = useScrollReveal();

  // for contact
  const contactText1 = useScrollReveal();
  const contactText2 = useScrollReveal();
  const contactText3 = useScrollReveal();

  // for course
  const courseText = useScrollReveal();

  return (
    <>
      <section className="relative">
        {/* Background image */}
        <img
          src={homeImg}
          alt=""
          className="fixed inset-0 w-full h-full object-cover -z-10"
        />

        {/* BOTTOM CUT SHAPE */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 sm:block hidden"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,120 
         C360,60 1080,60 1440,120 
         L1440,120 
         L0,120 Z"
          ></path>
        </svg>

        {/* Content (normal flow)   min-w-6xl*/}
        <div className="pt-[80px] sm:pt-[130px] flex justify-center flex-col lg:flex-row md:gap-10 lg:gap-4 xl:mx-20 lg:mx-10 md:mx-20 sm:mx-32 mx-2  pb-6 sm:pb-24">
          <div className="pt-4 sm:pt-10 xl:pr-8 lg:max-w-[600px] xl:max-w-3xl w-full">
            {/* your text content */}
            <div className="flex flex-col md:flex-row mx-auto justify-center items-center">
              <h1 className="text-white text-[30px] sm:text-[40px] sm:leading-[48px] md:text-[36px] md:leading-[42px] lg:text-[40px] lg:leading-[48px] font-Muli leading-tight sm:font-semibold font-bold text-center md:text-left inline-block">
                <img
                  src={home1}
                  alt=""
                  className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] xl:w-[40px] xl:h-[40px] inline-block"
                  draggable="false"
                  role="img"
                />
                &nbsp; Start Your Journey With Us Unlock Your Potential With Our
                Professional Courses And Life Time Placement.
              </h1>
            </div>

            <div className=" text-white pt-4 pb-1 lg:py-4 text-center lg:text-left lg:text-[18px] lg:leading-[28px] xl:text-[19px] xl:leading-[29px]">
              <img
                src={graphics}
                alt=""
                className="inline-block w-[20px] h-[20px] "
              />
              <h2 className="inline-block font-roboto text-[17px] md:text-[19px] leading-8 font-[300]">
                {" "}
                &nbsp;Graphic Design&nbsp;
              </h2>
              <img
                src={camera}
                alt=""
                className="w-[20px] h-[20px] inline-block"
              />
              <h2 className="inline-block font-roboto text-[17px] md:text-[19px] leading-8 font-[300]">
                &nbsp;Video Editing&nbsp;
              </h2>
              <img
                src={sound}
                alt=""
                className="w-[20px] h-[20px] inline-block"
              />
              <h2 className="inline-block font-roboto text-[17px] md:text-[19px] leading-8 font-[300]">
                &nbsp;Digital Marketing&nbsp;
              </h2>
              <img
                src={web}
                alt=""
                className="w-[20px] h-[20px] inline-block"
              />
              <h2 className="inline-block font-roboto text-[17px] md:text-[19px] leading-8 font-[300]">
                &nbsp;Website Design&nbsp;
              </h2>
              <img
                src={webdevelop}
                alt=""
                className="w-[20px] h-[20px] inline-block"
              />
              <h2 className="inline-block font-roboto text-[17px] md:text-[19px] leading-8 font-[300]">
                &nbsp; Web Development&nbsp;
              </h2>
              <img
                src={colorPalette}
                alt=""
                className="w-[20px] h-[20px] inline-block"
              />
              <h2 className="inline-block font-roboto text-[17px] md:text-[19px] leading-8">
                &nbsp;UI/UX Design&nbsp;
              </h2>
              <img src={ai} alt="" className="w-[20px] h-[20px] inline-block" />
              <h2 className="inline-block font-roboto text-[17px] md:text-[19px] leading-8 font-[300]">
                &nbsp;Artificial Intelligence (AI)&nbsp;
              </h2>
              <img
                src={dataChart}
                alt=""
                className="w-[20px] h-[20px] inline-block"
              />
              <h2 className="inline-block font-roboto text-[17px] md:text-[19px] leading-8 font-[300]">
                &nbsp;Data Science&nbsp;
              </h2>
              <img
                src={mern}
                alt=""
                className="w-[20px] h-[20px] inline-block"
              />
              <h2 className="inline-block font-roboto text-[17px] md:text-[19px] leading-8 font-[300]">
                &nbsp;MERN Stack Development Take the first step today — learn,
                earn, grow, and build your future with us!
              </h2>
            </div>

            <div className="md:py-4 py-2 text-center lg:text-left">
              <Link
                to="/contact"
                className="text-white font-roboto text-[17px] border-2 border-transparent font-bold px-5 py-2 rounded-sm bg-[#105503] transition duration-450  ease-in-out hover:bg-transparent hover:border-white hover:border-2"
              >
                Enroll Now
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl mt-8 ">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* start section for courses */}
      <section className="courses bg-white ">
        <div className="xl:mx-40 lg:mx-20 md:mx-20 sm:mx-30 mx-2">
          <div
            ref={courseText.ref}
            className={`text-center transition-all duration-700 ease-out ${courseText.show ? " translate-y-0 opacity-100 delay-300" : "translate-y-8 opacity-0"}`}
          >
            <h3 className="font-Muli font-bold text-[14px] leading-[22px] sm:leading-[24px] text-[#517082] uppercase tracking-widest sm:py-6 pt-6 pb-3">
              Market Insight Mastery
            </h3>
            <h1 className="font-Muli font-semibold text-[28px] leading-[34px] sm:text-[32px]  md:text-[34px] md:leading-[40px] lg:text-[38px] lg:leading-[46px] xl:text-[44px] sm:leading-[38px] xl:leading-[53px] text-gray-900 pb-4">
              We Offer Technical Courses in Jaipur for High-Demand Careers.
            </h1>
            <h2 className="mb-5 font-roboto font-light text-[17px] leading-[25px] sm:text-[17px] sm:leading-[26px] md:text-[18px]  md:leading-[26px] lg:leading-[27px] xl:text-[20px] xl:leading-[30px] text-zinc-500 max-w-[850px] mx-auto">
              Technology is growing very fast, and job roles are also changing.
              Today, companies need people with technical skills. Our programs
              help you understand how real work happens in different fields.
              Each course focuses on practical tasks so you can build useful
              skills step by step and move toward better career opportunities.
            </h2>
          </div>
        </div>
        <div>
          <Courses />
        </div>
      </section>
      {/* end section for courses */}

      {/*start section about founder */}
      <section className="bg-zinc-100 mx-auto sm:py-20 py-8   ">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-10 xl:gap-25 xl:mx-40 lg:mx-20 md:mx-10 sm:mx-30 mx-2 ">
          <div
            ref={img.ref}
            className={`md:w-1/2 w-full self-center  transition-all duration-700 ease-out ${img.show ? "translate-x-0 opacity-100 delay-200" : "-translate-x-2 sm:-translate-x-8  md:-translate-x-10 xl:-translate-x-16 opacity-0"}`}
          >
            <img src={pamplate} alt="" className=" md:mt-[100px] lg:mt-[5px]" />
          </div>
          <div
            ref={text.ref}
            className={`mt-10 sm:mt-20 md:w-1/2 w-full  transition-all duration-700 ease-out ${text.show ? "translate-x-0 opacity-100 delay-200" : " translate-x-2 sm:translate-x-8   md:translate-x-10   xl:translate-x-16 opacity-0"}`}
          >
            <h3 className="font-Muli font-bold text-[14px] text-[#517082] uppercase tracking-widest leading-[22px]">
              Welcome to SRMD Academy
            </h3>
            <h1 className="font-Muli font-semibold text-[26px] leading-[31px]  sm:text-[29px] sm:leading-[35px]  md:text-[27px] lg:text-[30px] lg:leading-[36px] xl:text-[34px] md:leading-[33px] xl:leading-[41px]  text-[#222] py-3 sm:py-8">
              We Are Providing You The Best Lifetime E-Commerce Based Earning
              Platform Placement
            </h1>
            <p className="font-roboto text-[16px] sm:leading-[24px] lg:text-[16px] lg:leading-[24px] xl:text-[17px] md:leading-[24px] xl:leading-[25px] font-light text-[#333] pb-4">
              In Graphic Design, Video Editing, Digital Marketing, Website
              Design, Website Development, UI UX Design, Artificial
              Intelligence, Data Science, Full Stack Institutions.
            </p>
            <div className="profile flex gap-4">
              <img
                src={founderImg}
                alt=""
                className="w-[100px] h-[100px] rounded-full"
              />
              <div className="pl-6 self-center">
                <h2 className="font-Muli font-normal text-[18px] sm:leading-[22px] md:leading-[21px] xl:leading-[22px] text-[#222]">
                  Nisha Diwan
                </h2>
                <h3 className="font-roboto font-bold text-[17px] sm:leading-[25px] md:text-[15px] leading-[23px] text-[#333]">
                  Founder of SRMD Academy
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section about founder */}

      {/* start section about map */}
      <section
        className="sm:pb-10 h-[800px] py-10  bg-[#105503] bg-no-repeat bg-scroll bg-center bg-cover h-auto "
        style={{ backgroundImage: `url(${map})` }}
      >
        <div className=" flex flex-col md:flex-row md:gap-8 lg:gap-8 xl:gap-20  xl:mx-30 lg:mx-10 md:mx-10 sm:mx-30 mx-2 ">
          <div
            ref={mapText.ref}
            className={`main flex-1 md:mt-10 lg:mt-20 md:w-1/2 w-full   transition-all duration-700 ease-out ${mapText.show ? "translate-x-0 opacity-100 delay-200" : "-translate-x-2 sm:-translate-x-8  md:-translate-x-10 xl:-translate-x-16 opacity-0"}`}
          >
            <h3 className="font-Muli font-bold text-[14px] text-white leading-[22px] uppercase tracking-widest">
              📈Benefits to Society
            </h3>
            <h1 className="font-Muli font-semibold text-[34px] leading-[41px] sm:text-[29px] sm:leading-[35px] md:text-[27px] md:leading-[33px] lg:text-[30px] lg:leading-[36px] xl:text-[34px] xl:leading-[41px]  text-white py-2 sm:py-6">
              Social Impact
            </h1>
            <ul className="list-disc pl-5 md:w-auto lg:w-[500px] w-full">
              <li className="font-roboto  py-1 tracking-wider list-item text-[17px] sm:text-[16px] sm:leading-[24px] md:text-[16px] md:leading-[24px] xl:text-[17px] xl:leading-[25px] text-white leading-[25px] font-light">
                Reducing unemployment rate
              </li>
              <li className="font-roboto py-1 tracking-wider list-item text-[17px] sm:text-[16px] sm:leading-[24px] md:text-[16px] md:leading-[24px] xl:text-[17px] xl:leading-[25px] text-white leading-[25px] font-light">
                Promoting digital skills
              </li>
              <li className="font-roboto py-1 tracking-wider list-item text-[17px] sm:text-[16px] sm:leading-[24px] md:text-[16px] md:leading-[24px] xl:text-[17px] xl:leading-[25px] text-white leading-[25px] font-light">
                Supporting the student economy
              </li>
              <li className="font-roboto py-1 tracking-wider list-item text-[17px] sm:text-[16px] sm:leading-[24px] md:text-[16px] md:leading-[24px] xl:text-[17px] xl:leading-[25px] text-white leading-[25px] font-light">
                Encouraging entrepreneurship Empowering youth is the key to a
                stronger tomorrow.
              </li>
            </ul>
            <div className="flex md:flex-row flex-col my-5 py-5  gap-5 md:w-auto lg:w-[500px] w-full ">
              <div className="mb-4 text-center sm:text-left">
                <h1
                  ref={section1.ref}
                  className="font-Muli font-bold text-[42px] text-white leading-[38px]  overflow-hidden sm:text-[41px] sm:leading-[41px] md:text-[36px] md:leading-[36px] lg:text-[38px] lg:leading-[38px] xl:text-[42px] xl:leading-[42px]"
                >
                  {section1.inView && (
                    <CountUp
                      start={0}
                      end={3445}
                      separator={","}
                      duration={5}
                    />
                  )}
                </h1>

                <h3 className="font-roboto tracking-wider font-medium text-[17px] text-white leading-[10px] sm:text-[18px] sm:leading-[26px] md:text-[16px] md:leading-[24px] xl:text-[17px] xl:leading-[25px] pt-4 pb-2 ">
                  Websites Improved
                </h3>
                <p className="font-roboto font-light text-[17px] text-white leading-[25px]  sm:text-[18px] sm:leading-[26px] md:text-[15px] md:leading-[23px] lg:leading-[22px]">
                  An enim nullam tempor sapien gravida donec blandit ipsum
                </p>
              </div>
              <div className="mb-4 text-center sm:text-left">
                <h1
                  ref={section1.ref}
                  className="font-Muli font-bold text-[42px] text-white leading-[38px] overflow-hidden sm:text-[41px] sm:leading-[41px] md:text-[36px] md:leading-[36px] lg:text-[38px] lg:leading-[38px]  xl:text-[42px] xl:leading-[42px]"
                >
                  {section1.inView && (
                    <CountUp start={0} end={99} suffix="%" duration={5} />
                  )}
                </h1>
                <h3 className="font-roboto tracking-wider font-medium text-[17px] sm:text-[18px] sm:leading-[26px] text-white leading-[10px] sm:leading-[28px] md:text-[16px] md:leading-[24px] xl:text-[17px] xl:leading-[25px] pt-4 pb-2 ">
                  Customer Satisfaction
                </h3>
                <p className="font-roboto font-light text-[17px] text-white leading-[25px] sm:text-[18px] sm:leading-[26px]  md:text-[15px] md:leading-[23px] lg:leading-[22px]">
                  An enim nullam tempor sapien gravida donec blandit ipsum
                </p>
              </div>
            </div>
          </div>
          <div
            ref={mapImg.ref}
            className={`image flex-1 md:w-1/2 w-full self-center  transition-all duration-700 ease-out ${mapImg.show ? "translate-x-0 opacity-100 delay-200" : "translate-x-2 sm:translate-x-8   md:translate-x-10  xl:translate-x-16 opacity-0"}`}
          >
            <img
              src={digitalImg}
              alt=""
              className="lg:h-[600px] xl:w-[700px] lg:w-[500px] md:w-[400px] md:h-[500px] sm:w-full sm:h-[600px] min-w-[100px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* end section about map */}

      {/* start section about exploring services */}
      <section className="services bg-white sm:pb-10  py-8">
        <div className={`xl:mx-30 lg:mx-20 md:mx-10 sm:mx-25 mx-2`}>
          <div
            ref={exploreText1.ref}
            className={`text-center transition-all duration-700 ease-out ${exploreText1.show ? " translate-y-0 opacity-100 delay-300" : "translate-y-8 opacity-0"}`}
          >
            <h3 className="font-Muli font-bold text-[14px] leading-[22px] text-[#517082] uppercase tracking-widest py-4 sm:py-6">
              Explore Our Services
            </h3>
            <h1 className="font-Muli font-semibold text-[28px] leading-[34px] sm:text-[32px]  md:text-[34px] md:leading-[40px] lg:text-[38px] lg:leading-[46px] xl:text-[44px] xl:leading-[53px] sm:leading-[38px] text-gray-900 pb-4">
              SEO Management & Strategy Services
            </h1>
            <h2 className="font-roboto font-light text-[17px] leading-[25px] sm:leading-[26px] md:text-[18px]  md:leading-[26px] lg:leading-[27px] xl:text-[20px] xl:leading-[30px] text-zinc-500 max-w-[800px] mx-auto">
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero tempus, blandit posuere and ligula varius magna a
              porta elementum massa risus
            </h2>
          </div>
          <div
            ref={exploreText2.ref}
            className={`grid grid-cols-1 md:grid-cols-2 py-10 gap-4 transition-all duration-700 ease-out ${exploreText2.show ? "translate-y-0 opacity-100 delay-600" : "translate-y-8 opacity-100"}`}
          >
            <div className="flex lg:flex-row flex-col text-center md:text-left pb-8 md:pb-0">
              <img
                src={data}
                alt=""
                className="lg:w-[65px] lg:h-[65px] w-[90px] h-[110px] xl:w-[85px] xl:h-[85px] pb-5 mx-auto md:ml-8 "
              />
              <div className="md:pl-8">
                <h2 className="font-Muli font-semibold text-[20px] leading-[24px] sm:text-[22px] sm:leading-[27px] md:leading-[26px] lg:text-[19px] lg:leading-[23px] xl:text-[22px] xl:leading-[26px] text-[#222] pb-5">
                  Advanced Analytics Review
                </h2>
                <p className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading--[25px] text-[#757575]">
                  Maecenas gravida nunc vehicula magna luctus tempor quisque
                  laoreet turpis at augue, viverra and augue eget dictum tempor.
                  Pulvinar porta blandit posuere vehicula imperdiet varius undo
                  viverra rutrum dignissim
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col text-center md:text-left  pb-8 md:pb-0">
              <img
                src={email}
                alt=""
                className="lg:w-[65px] lg:h-[65px] w-[90px] h-[110px] xl:w-[85px] xl:h-[85px] pb-5 mx-auto md:ml-8 "
              />
              <div className="md:pl-8">
                <h2 className="font-Muli font-semibold text-[20px] leading-[24px] sm:text-[22px] sm:leading-[27px] md:leading-[26px] lg:text-[19px] lg:leading-[23px] xl:text-[22px] xl:leading-[26px]  text-[#222] pb-5">
                  Email Marketing Campaigns
                </h2>
                <p className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading--[25px] text-[#757575]">
                  Maecenas gravida nunc vehicula magna luctus tempor quisque
                  laoreet turpis at augue, viverra and augue eget dictum tempor.
                  Pulvinar porta blandit posuere vehicula imperdiet varius undo
                  viverra rutrum dignissim
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col text-center md:text-left  pb-8 md:pb-0">
              <img
                src={video}
                alt=""
                className="lg:w-[65px] lg:h-[65px] w-[90px] h-[110px]  xl:w-[85px] xl:h-[85px] pb-5 mx-auto md:ml-8"
              />
              <div className="md:pl-8">
                <h2 className="font-Muli font-semibold text-[20px] leading-[24px] sm:text-[22px] sm:leading-[27px] md:leading-[26px] lg:text-[19px] lg:leading-[23px] xl:text-[22px] xl:leading-[26px]  text-[#222] pb-5">
                  Video Marketing
                </h2>
                <p className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading--[25px] text-[#757575]">
                  Maecenas gravida nunc vehicula magna luctus tempor quisque
                  laoreet turpis at augue, viverra and augue eget dictum tempor.
                  Pulvinar porta blandit posuere vehicula imperdiet varius undo
                  viverra rutrum dignissim
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col text-center md:text-left  pb-8 md:pb-0">
              <img
                src={seo}
                alt=""
                className="lg:w-[65px] lg:h-[65px] w-[90px] h-[110px] xl:w-[85px] xl:h-[85px] mx-auto pb-5 md:ml-8"
              />
              <div className="md:pl-8">
                <h2 className="font-Muli font-semibold text-[20px] leading-[24px] sm:text-[22px] sm:leading-[27px] md:leading-[26px] lg:text-[19px] lg:leading-[23px] xl:text-[22px] xl:leading-[26px]  text-[#222] pb-5">
                  Search Engine Optimization (SEO)
                </h2>
                <p className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading--[25px] text-[#757575]">
                  Maecenas gravida nunc vehicula magna luctus tempor quisque
                  laoreet turpis at augue, viverra and augue eget dictum tempor.
                  Pulvinar porta blandit posuere vehicula imperdiet varius undo
                  viverra rutrum dignissim
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col  text-center md:text-left pb-8 md:pb-0">
              <img
                src={ppc}
                alt=""
                className="lg:w-[65px] lg:h-[65px] w-[90px] h-[110px] xl:w-[85px] xl:h-[85px] pb-5 mx-auto  md:ml-8"
              />
              <div className="md:pl-8">
                <h2 className="font-Muli font-semibold text-[20px] leading-[24px] sm:text-[22px] sm:leading-[27px] md:leading-[26px]  lg:text-[19px] lg:leading-[23px] xl:text-[22px] xl:leading-[26px]  text-[#222] pb-5">
                  Pay Per Click (PPC)
                </h2>
                <p className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading--[25px] text-[#757575]">
                  Maecenas gravida nunc vehicula magna luctus tempor quisque
                  laoreet turpis at augue, viverra and augue eget dictum tempor.
                  Pulvinar porta blandit posuere vehicula imperdiet varius undo
                  viverra rutrum dignissim
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col  text-center md:text-left  pb-8 md:pb-0">
              <img
                src={message}
                alt=""
                className="lg:w-[65px] lg:h-[65px] w-[90px] h-[110px] xl:w-[85px] xl:h-[85px] pb-5 mx-auto  md:ml-8"
              />
              <div className="md:pl-8">
                <h2 className="font-Muli font-semibold text-[20px] leading-[24px] sm:text-[22px] sm:leading-[27px] md:leading-[26px] lg:text-[19px] lg:leading-[23px] xl:text-[22px] xl:leading-[26px]  text-[#222] pb-5">
                  Strategy and Analytics Consulting
                </h2>
                <p className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading--[25px] text-[#757575]">
                  Maecenas gravida nunc vehicula magna luctus tempor quisque
                  laoreet turpis at augue, viverra and augue eget dictum tempor.
                  Pulvinar porta blandit posuere vehicula imperdiet varius undo
                  viverra rutrum dignissim
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col  text-center md:text-left  pb-8 md:pb-0">
              <img
                src={marketing}
                alt=""
                className="lg:w-[65px] lg:h-[65px] w-[90px] h-[110px] xl:w-[85px] xl:h-[85px] pb-5 mx-auto  md:ml-8"
              />
              <div className="md:pl-8">
                <h2 className="font-Muli font-semibold text-[20px] leading-[24px] sm:text-[22px] sm:leading-[27px] md:leading-[26px] lg:text-[19px] lg:leading-[23px] xl:text-[22px] xl:leading-[26px]   text-[#222] pb-5">
                  Content Marketing
                </h2>
                <p className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading--[25px] text-[#757575]">
                  Maecenas gravida nunc vehicula magna luctus tempor quisque
                  laoreet turpis at augue, viverra and augue eget dictum tempor.
                  Pulvinar porta blandit posuere vehicula imperdiet varius undo
                  viverra rutrum dignissim
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col  text-center md:text-left  pb-8 md:pb-0">
              <img
                src={webDesign}
                alt=""
                className="lg:w-[65px] lg:h-[65px] w-[90px] h-[110px] xl:w-[85px] xl:h-[85px] pb-5 mx-auto md:ml-8"
              />
              <div className="md:pl-8">
                <h2 className="font-Muli font-semibold text-[20px] leading-[24px] sm:text-[22px] sm:leading-[27px] md:leading-[26px] lg:text-[19px] lg:leading-[23px] xl:text-[22px] xl:leading-[26px] text-[#222] pb-5">
                  Website Design & Development
                </h2>
                <p className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading--[25px] text-[#757575]">
                  Maecenas gravida nunc vehicula magna luctus tempor quisque
                  laoreet turpis at augue, viverra and augue eget dictum tempor.
                  Pulvinar porta blandit posuere vehicula imperdiet varius undo
                  viverra rutrum dignissim
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section about exploring services */}

      {/* start section about AI exploring */}
      <section className="ai sm:py-20 py-12  bg-gray-100">
        <div className="flex md:flex-row flex-col gap-10 md:gap-8 lg:gap-15 xl:gap-30 xl:mx-40 lg:mx-10 md:mx-10 sm:mx-16 mx-2 ">
          <div
            ref={aiImg.ref}
            className={`self-center image md:w-1/2 w-full transition-all duration-700 ease-out ${aiImg.show ? "translate-x-0 opacity-100 delay-200" : "-translate-x-2 sm:-translate-x-8  md:-translate-x-10 xl:-translate-x-16 opacity-0"}`}
          >
            <img src={aiImage} alt="" className="w-full" />
          </div>
          <div
            ref={aiText.ref}
            className={`md:w-1/2 w-full mx-0 lg:mt-6  transition-all duration-700 ease-out ${aiText.show ? "translate-x-0 opacity-100 delay-200" : "translate-x-2 sm:translate-x-8   md:translate-x-10 xl:translate-x-16 opacity-0"}`}
          >
            <h2 className="font-Muli font-bold text-[14px] leading-[22px] text-[#517082] tracking-wider uppercase mb-3 sm:mb-4 md:mb-6">
              Get Your Next Level
            </h2>
            <h4 className="font-Muli font-semibold text-[29px] leading-[35px] md:text-[27px] lg:text-[30px] lg:leading-[36px] xl:text-[34px]   xl:leading-[41px] text-[#222]  mb-3 sm:mb-4 md:mb-6 md:leading-[33px]">
              <img src={home1} alt="" className="w-[30px] inline-block" />
              AI-Based E-Commerce System with Affiliate Program
              <img src={webdevelop} alt="" className="w-[30px] inline-block" />
              Step Toward Employment Empowerment
            </h4>
            <p className="font-roboto font-light text-[16px] leading-[24px] md:text-[16px] lg:text-[17px] lg:leading-[25px] text-[#333]">
              An innovative e-commerce platform like Amazon and Flipkart, but
              powered by Artificial Intelligence.
            </p>
            <ul className="py-4">
              <li className="font-roboto font-bold text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading-[25px] text-[#333] px-2">
                <FaCheck className="text-green-800 inline-block px-1 py-1 text-[24px]" />
                Seamless shopping experience
              </li>
              <li className="font-roboto font-bold text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading-[25px] text-[#333] px-2">
                <FaCheck className="text-green-800 inline-block px-1 py-1 text-[24px]" />
                Smart product recommendations.
              </li>
              <li className="font-roboto font-bold text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading-[25px] text-[#333] px-2">
                <FaCheck className="text-green-800 inline-block px-1 py-1 text-[24px]" />
                Efficient customer support using AI 🧠+ 🛒= Smarter Shopping!
              </li>
            </ul>
            <button className="font-roboto font-bold text-[17px] leading-[17px] sm:text-[15px] sm:leading-[15px] hover:text-[#333] text-white bg-[#105503] px-6 py-4 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-md tracking-wide my-3 md:my-4 lg:my-6  transition duration-450  ease-in-out hover:bg-transparent hover:border-[#333] hover:border-2 border-2 border-transparent">
              Get A Free SEO Analysis
            </button>
          </div>
        </div>
      </section>
      {/* end section about AI exploring */}

      {/* start section for tracking */}
      <section className="tracking bg-white sm:pb-20  py-8">
        <div className="xl:mx-40 lg:mx-20 md:mx-10 sm:mx-24 mx-2">
          <div
            ref={trackText.ref}
            className={`text-center transition-all duration-700 ease-out ${trackText.show ? "translate-y-0 opacity-100 delay-200" : "translate-y-16 opacity-0"}`}
          >
            <h3 className="font-Muli font-bold text-[14px] leading-[22px] text-[#517082] uppercase tracking-widest py-6">
              Plannig For The Future
            </h3>
            <h1 className="font-Muli font-semibold text-[28px] sm:text-[32px]  md:text-[34px] md:leading-[40px] lg:text-[38px] lg:leading-[46px] xl:text-[44px] xl:leading-[53px] leading-[34px] sm:leading-[38px] text-gray-900 pb-4">
              Our Track Record Of Success
            </h1>
            <h2 className="font-roboto font-light text-[17px] leading-[25px] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[26px] lg:leading-[27px] xl:text-[20px] xl:leading-[30px] text-zinc-500 max-w-[800px] mx-auto">
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero tempus, blandit posuere and ligula varius magna a
              porta elementum massa risus
            </h2>
          </div>
          <div
            ref={trackText2.ref}
            className={`flex md:flex-row flex-col justify-around gap-3 md:gap-5 mt-8 sm:mt-20 transition-all duration-700 ease-out ${trackText2.show ? "translate-y-0 opacity-100 delay-400" : "translate-y-16 opacity-0"}`}
          >
            <div className="max-w-[500px] text-center rounded-md py-10 sm:py-15 px-14 sm:px-20 md:px-[15px] bg-neutral-100 mx-auto md:mx-0">
              <h1
                ref={section2.ref}
                className="font-Muli font-bold text-[46px] sm:text-[48px] md:text-[38px] lg:text-[44px] lg:leading-[44px] xl:text-[48px] text-[#105503] leading-[46px] sm:leading-[48px]  md:leading-[38px] xl:leading-[48px]"
              >
                {section2.inView && (
                  <CountUp start={0} end={3485} separator={","} duration={5} />
                )}
              </h1>
              <h3 className="font-Muli font-bold text-[20px]  md:text-[16px] lg:text-[18px] lg:leading-[18px] xl:text-[19px] text-[#757575] leading-[20px] md:leading-[16px] xl:leading-[19px] pt-4 pb-2 ">
                Links Optimized
              </h3>
              <p className="font-roboto font-light text-[17px] sm:text-[16px] md:text-[15px] text-[#757575] leading-[25px] sm:leading-[24px] md:leading-[23px]  lg:leading-[22px]">
                Sagittis congue augue egestas and egestas magna ociis
              </p>
            </div>
            <div className="max-w-[500px] rounded-md bg-neutral-100 text-center py-10 sm:py-15 px-14 sm:px-20 md:px-[15px] mx-auto md:mx-0">
              <h1
                ref={section2.ref}
                className="font-Muli font-bold text-[46px] sm:text-[48px] md:text-[38px] lg:text-[44px] lg:leading-[44px]  xl:text-[48px] text-[#105503] leading-[46px] sm:leading-[48px]  md:leading-[38px] xl:leading-[48px] "
              >
                {section2.inView && (
                  <CountUp start={0} end={2287} separator={","} duration={5} />
                )}
              </h1>
              <h3 className="font-Muli font-bold text-[20px]  md:text-[16px] lg:text-[18px] lg:leading-[18px]  xl:text-[19px] text-[#757575] leading-[20px] md:leading-[16px] xl:leading-[19px] pt-4 pb-2 ">
                Websites Improved
              </h3>
              <p className="font-roboto font-light text-[17px] sm:text-[16px] md:text-[15px] text-[#757575] leading-[25px] sm:leading-[24px] md:leading-[23px] lg:leading-[22px] ">
                Sagittis congue augue egestas and egestas magna ociis
              </p>
            </div>
            <div className="max-w-[500px] bg-neutral-100 rounded-md text-center py-10 sm:py-15 px-14 sm:px-20 md:px-[15px] mx-auto md:mx-0">
              <h1
                ref={section2.ref}
                className="font-Muli font-bold text-[46px] sm:text-[48px] md:text-[38px] lg:text-[44px] lg:leading-[44px]  xl:text-[48px] text-[#105503] leading-[46px] sm:leading-[48px]  md:leading-[38px] xl:leading-[48px]"
              >
                {section2.inView && (
                  <CountUp start={0} end={4379} separator={","} duration={5} />
                )}
              </h1>
              <h3 className="font-Muli font-bold text-[20px] md:text-[16px] lg:text-[18px] lg:leading-[18px]  xl:text-[19px] text-[#757575] leading-[20px]  md:leading-[16px] xl:leading-[19px] pt-4 pb-2 ">
                Happy Customers
              </h3>
              <p className="font-roboto font-light text-[17px] sm:text-[16px] md:text-[15px] text-[#757575]  leading-[25px] sm:leading-[24px] md:leading-[23px] lg:leading-[22px] ">
                Sagittis congue augue egestas and egestas magna ociis
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* start div used by  max-w-[800px] lg:max-w-[1000px]  */}
      <section className="bg-white sm:pb-15 py-10">
        <div
          className="bg-[#4c47a1] h-full sm:pt-[40px] md:pt-[80px] py-[30px] background-no-repeat bg-scroll bg-center bg-cover object-cover"
          style={{ backgroundImage: `url(${bluepattern})` }}
        >
          <div className="container w-full mx-auto">
            <h2 className=" font-roboto font-normal text-[18px] sm:text-[20px]  leading-[26px] sm:leading-[30px] md:text-[18px] md:leading-[26px] lg:leading-[27px] text-center text-[#bbb] mb-5  mt-0 pt-5">
              Used by startups, e-stores, web designers, and teams including:
            </h2>
            <div className="grid md:grid-cols-5 grid-cols-3 justify-around mx-auto mb-[15px] gap-2 sm:gap-5 ">
              <div className="w-[50px] sm:w-[90px] md:w-[130px] lg:w-[150px] mb-[20px] mx-auto">
                <img src={papaya} alt="" className="overflow-clip w-full" />
              </div>
              <div className="w-[50px] sm:w-[90px] md:w-[130px] lg:w-[150px] mb-[20px] mx-auto">
                <img src={organic} alt="" className="overflow-clip w-full" />
              </div>
              <div className="w-[50px] sm:w-[90px] md:w-[130px] lg:w-[150px] mb-[20px] mx-auto">
                <img src={paper} alt="" className="overflow-clip w-full" />
              </div>
              <div className="w-[50px] sm:w-[90px] md:w-[130px] lg:w-[150px] mb-[20px] mx-auto">
                <img src={summer} alt="" className="overflow-clip w-full" />
              </div>
              <div className="w-[50px] sm:w-[90px] md:w-[130px] lg:w-[150px] mb-[20px] mx-auto">
                <img src={bread} alt="" className="overflow-clip w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end div used by */}

      {/* section for drive sales and leads */}
      <section className="bg-white sm:pb-20 py-10">
        <div className="flex md:flex-row flex-col gap-4 sm:gap-10 md:gap-8 lg:gap-15 xl:gap-30 xl:mx-40 lg:mx-10 md:mx-10 sm:mx-20 mx-2 ">
          <div
            ref={driveText.ref}
            className={`main lg:mt-20 flex-1 lg:w-1/2 w-full lg:py-0 sm:pb-8 pb-4 transition-all duration-700 ease-out ${driveText.show ? "translate-x-0 opacity-100 delay-200" : "-translate-x-2 sm:-translate-x-8  md:-translate-x-10 xl:-translate-x-16 opacity-0"}`}
          >
            <h3 className="font-Muli font-bold text-[14px] text-[#517082] leading-[22px] uppercase tracking-widest pt-3">
              Drive Sales & Leads
            </h3>
            <h1 className="font-Muli font-semibold text-[26px] leading-[31px] sm:text-[29px] md:text-[27px] md:leading-[33px] lg:text-[30px] xl:text-[34px] sm:leading-[35px] lg:leading-[36px]  xl:leading-[41px] text-[#222] py-6">
              Our SEO plans will help you to dominate the search engines
            </h1>
            <p className="text-[17px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] font-roboto font-light lg:leading-[24px] xl:leading-[25px] text-[#333] mb-[12px]">
              Velna iaculis odio auctor integer congue and impedit magna viverra
              dolor vitae donec mauris lectus laoreet gestas neque undo luctus
              feugiat. Justo integer at odio velna vitae
            </p>
            <p className="text-[17px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] font-roboto font-light leading-[25px] text-[#333] mb-[10px]">
              Integer congue magna at pretium purus pretium ligula at rutrum
              luctus risus eros dolor auctor ipsum blandit luctus purus vehicula
              magna a tempor. Quisque vel laoreet turpis and cubilia augue.
              Sagittis congue augue egestas volutpat egestas magna
            </p>
            <button className="font-roboto font-bold text-[15px] lg:text-[17px] leading-[15px] lg:leading-[17px] hover:text-[#333] text-white bg-[#105503] px-6 py-4 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-md tracking-wide my-3 md:my-4 lg:my-6 transition duration-450  ease-in-out hover:bg-transparent hover:border-[#333] hover:border-2 border-2 border-transparent">
              Our Pricing Packages
            </button>
          </div>
          <div
            ref={driveImg.ref}
            className={`image md:w-1/2 w-full  transition-all duration-700 ease-out ${driveImg.show ? "translate-x-0 opacity-100 delay-200" : " translate-x-2 sm:translate-x-8   md:translate-x-10  xl:translate-x-16 opacity-0"}`}
          >
            <img
              src={digitalImg}
              alt=""
              className="lg:h-full w-[full] md:h-[500px] sm:h-[600px] min-w-[100px] min-h-[300px]"
            />
          </div>
        </div>
      </section>
      {/* section for drive sales and leads */}

      {/* starting section for video */}
      <section className=" bg-[#283034]">
        <div className="flex  py-12  flex flex-col md:flex-row md:gap-1 lg:gap-10 xl:gap-20 xl:mx-34 lg:mx-30 md:mx-10 sm:mx-15 mx-2 ">
          <div className="w-full md:w-1/2 py-2 sm:px-4 px-1 mt-[8%]">
            <h1 className="font-Muli font-semibold text-[29px] leading-[35px] sm:text-[32px] sm:leading-[38px] lg:text-[26px] lg:leading-[31px] xl:text-[32px] xl:leading-[38px]  text-white py-3">
              They are always forthcoming, coming up with good solutions for us
              to improve processes
            </h1>
            <p className="font-roboto font-light text-white text-[17px]  leading-[25px] sm:text-[16px] sm:leading-[24px] xl:text-[17px] xl:leading-[25px] pb-5 text-justify">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              integer at odio velna vitae auctor integer congue magna at pretium
              purus pretium ligula rutrum luctus risus ultrice luctus in ligula
              blandit congue magna
            </p>
            <div className="profile flex flex-row sm:gap-4 gap-3 px-1">
              <img
                src={founderImg}
                alt=""
                className="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] rounded-full"
              />
              <div className="px-2">
                <h2 className="font-Muli font-normal text-[18px] md:leading-[21px] lg:leading-[22px] text-white">
                  Nisha Diwan
                </h2>
                <h3 className="font-roboto font-bold text-[17px] md:text-[15px] leading-[23px] text-white">
                  Founder of SRMD Academy
                </h3>
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-1/2 py-2 sm:px-4 px-2 text-center md:self-center ">
            <button
              onClick={() => setOpen(true)}
              className="mx-auto sm:mx-[20%] my-[20%] sm:my-[15%] md:mx-[15%] md:my-[5%] lg:mx-[35%] lg:my-[35%] cursor-pointer"
            >
              <div className="relative mx-auto mt-[22%] w-[110px] h-[110px] flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-60 transition-all duration-400 delay-400 ease-linear animate-ping"></span>
                <div className="relative bg-[#105503] rounded-full w-[110px] h-[110px] flex items-center justify-center">
                  <IoMdPlay className="text-white w-[70px] h-[70px] px-2 py-1" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
      {/* ending section for video */}

      {/* start section for address */}
      {/* <section className="bg-white">
        <div className="flex  py-12 justify-between flex-col lg:flex-row xl:mx-40 lg:mx-15 md:mx-10 sm:mx-20 mx-2 ">
          <div className="flex flex-col md:flex-row lg:flex-col lg:w-1/4 mb-3 sm:mb-10 md:gap-5">
            <div
              ref={contactText1.ref}
              className={`py-3 transition-all duration-700 ease-out ${contactText1.show ? "translate-y-0 opacity-100 delay-200" : "translate-y-16 opacity-0"}`}
            >
              <h1 className="font-Muli font-bold text-[20px] sm:text-[22px] md:text-[19px] md:leading-[23px] leading-[24px] sm:leading-[26px] lg:leading-[23px] text-[#222]">
                Our Location:
              </h1>
              <h3 className="font-roboto font-light text-[18px] leading-[27px] md:text-[16px] md:leading-[24px] xl:text-[18px] xl:leading-[27px] text-[#757575] pt-5 md:max-w-[300px]">
                Shop No 2, 1st Floor, Kings Rd, Padmavti Colony, Nirman Nagar
                NEAR MANSROVER METRO STATION Jaipur, Rajasthan 302019
              </h3>
            </div>
            <div
              ref={contactText2.ref}
              className={`py-3 transition-all duration-700 ease-out ${contactText2.show ? "translate-y-0 opacity-100 delay-400" : "translate-y-16 opacity-0"}`}
            >
              <h1 className="font-Muli font-bold text-[20px] sm:text-[22px] md:text-[19px] md:leading-[23px] leading-[24px] sm:leading-[26px] lg:leading-[23px] text-[#222]">
                Contact Phones:
              </h1>
              <h3 className="font-roboto font-light text-[18px] leading-[27px] md:text-[16px] md:leading-[24px] xl:text-[18px] xl:leading-[27px]   text-[#757575] pt-5">
                Phone: +91 9090100517
              </h3>
              <h3 className="font-roboto font-light text-[18px] leading-[27px] md:text-[16px] md:leading-[24px] xl:text-[18px] xl:leading-[27px]   text-[#757575]">
                Phone : +91 9057369119
              </h3>
            </div>
            <div
              ref={contactText3.ref}
              className={`py-3 transition-all duration-700 ease-out ${contactText3.show ? "translate-y-0 opacity-100 delay-600" : "translate-y-16 opacity-0"}`}
            >
              <h1 className="font-Muli font-bold text-[20px] sm:text-[22px] md:text-[19px] leading-[24px] sm:leading-[26px] md:text-[19px] md:leading-[23px]  lg:leading-[23px] text-[#222]">
                Office Hours:
              </h1>
              <h3 className="font-roboto font-light text-[18px] leading-[27px] md:text-[16px] md:leading-[24px] xl:text-[18px] xl:leading-[27px]   text-[#757575] pt-5">
                Mon - Sat: 9:00am - 7:00pm
              </h3>
              <h3 className="font-roboto font-light text-[18px] leading-[27px] md:text-[16px] md:leading-[24px] xl:text-[18px] xl:leading-[27px]   text-[#757575]">
                Sunday: Closed
              </h3>
            </div>
          </div>
          <div className="md:w-full lg:w-2/3 shadow-lg/40">
            <ContactForm />
          </div>
        </div>
      </section> */}
      {/* end section for address */}

      {/* start section for graphics design */}
      <section className="">
        <div
          className="bg-[#4c47a1] h-auto md:h-[400px] py-[60px] sm:pt-[100px]  background-no-repeat bg-scroll bg-center bg-cover w-full mx-auto "
          style={{ backgroundImage: `url(${bluepattern})` }}
        >
          <div className=" pt-9 sm:py-8 md:py-6 py-3 text-center mx-2  sm:mx-10  md:mx-20 max-w-[1100px] lg:mx-auto">
            <h1 className="font-Muli font-normal text-[28px] md:text-[34px] lg:text-[38px] xl:text-[44px] leading-[34px] md:leading-[40px] lg:leading-[46px] xl:leading-[53px] text-white mb-[15px]">
              Unleash your creativity in{" "}
              <span className="font-extrabold">Graphic Design</span>, using
              powerful tools to bring your imagination to life.
            </h1>
            <h3 className="font-roboto font-light text-[17px] leading-[25px] sm:text-[16px] md:text-[18px] lg:text-[21px] xl:text-[22px] sm:leading-[23px] md:leading-[28px] lg:leading-[31px] xl:leading-[34px] text-white mb-[20px]">
              Experience an Authentic Graphic Design Learning Journey
            </h3>
            <Link
              to="/contact"
              className="py-3 px-12 mx-1 font-roboto font-bold text-[16px] bg-[#105503] text-white rounded-sm transition duration-450  ease-in-out hover:bg-transparent hover:border-[#fff] hover:border-2 border-2 border-transparent"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* end section for graphics design */}

      {/* video model */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <IoCloseSharp />
          </button>
          {/* video box */}
          <div className="w-[90%] max-w-3xl aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/0gv7OC9L2s8"
              className="w-full h-full"
              title="Video"
              allow="autoplay;encrypted-media"
              allowFullScreen
              frameborder="0"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
