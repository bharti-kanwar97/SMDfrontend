import { Link } from "react-router-dom";
import logoImg from "../assets/smd-logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="bg-white px-12 lg:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full mx-auto py-6">
        <div className=" md:px-2 md:col-span-3 lg:col-span-2">
          <img src={logoImg} alt="" className="mx-auto py-2 mb-4 " />
          <p className=" text-center font-roboto font-normal text-[16px] leading-[24px] lg:text-[16px] lg:leading-[24px] text-zinc-700">
            <FaLocationDot className="inline-block px-1 md:text-[24px] lg:text-[22px] font-bold text-[20px] leading-[24px]" />
            Shop No 2, 1st Floor, Kings Rd, Padmavati <br /> Colony, Nirman
            Nagar <br />
            NEAR MANSROVER METRO STATION <br />
            Jaipur, Rajasthan 302019
          </p>
        </div>

        <div className="sm:px-4 md:px-2 text-center sm:text-left">
          <h1 className="font-Muli font-bold text-[19px] text-zinc-900 py-3 mt-5">
            Quick Links
          </h1>
          <Link to="/about">
            <h3 className="font-roboto text-[17px] font-light pb-2 text-zinc-700">
              About Us
            </h3>{" "}
          </Link>
          <Link to="/contact">
            <h3 className="font-roboto text-[17px] font-light pb-2 text-zinc-700">
              Contact Us
            </h3>{" "}
          </Link>
          <Link to="/blog">
            <h3 className="font-roboto text-[17px] lg:text-[16px] lg:leading-[24px] font-light pb-2 text-zinc-700">
              From the Blog
            </h3>{" "}
          </Link>
        </div>
        <div className=" sm:px-4 md:px-2 text-center sm:text-left">
          <h1 className="font-Muli font-bold text-[19px] text-zinc-900 py-3 mt-5">
            Featured Services
          </h1>
          <h3 className="font-roboto text-[17px] lg:text-[16px] lg:leading-[24px] font-light pb-2 text-zinc-700">
            Digital Marketing Course
          </h3>
          <h3 className="font-roboto text-[17px] lg:text-[16px] lg:leading-[24px] font-light pb-2 text-zinc-700">
            Web Development Course
          </h3>
          <h3 className="font-roboto text-[17px] lg:text-[16px] lg:leading-[24px] font-light pb-2 text-zinc-700">
            Graphics Designing Course
          </h3>
          <h3 className="font-roboto text-[17px] lg:text-[16px] lg:leading-[24px] font-light pb-2 text-zinc-700">
            Video Editing Course
          </h3>
          <h3 className="font-roboto text-[17px] lg:text-[16px] lg:leading-[24px] font-light pb-2 text-zinc-700">
            UX/UI Designing Course
          </h3>
        </div>
        <div className=" sm:px-4 md:px-2 text-center sm:text-left">
          <h1 className="font-Muli font-bold text-[19px] text-zinc-900 py-3 mt-5">
            Featured Services
          </h1>
          <h3 className="font-roboto text-[17px] lg:text-[16px] lg:leading-[24px] font-light pb-2 text-zinc-700">
            Social Media Marketing
          </h3>
          <h3 className="font-roboto text-[17px] lg:text-[16px] lg:leading-[24px] font-light pb-2 text-zinc-700">
            Facebook Marketing
          </h3>
          <h3 className="font-roboto text-[17px] lg:text-[16px] lg:leading-[24px] font-light pb-2 text-zinc-700">
            PPC Training in Jaipur
          </h3>
          <h3 className="font-roboto text-[17px] lg:text-[16px] lg:leading-[24px] font-light pb-2 text-zinc-700">
            Graphic Design Course
          </h3>
          <h3 className="font-roboto text-[17px] lg:text-[16px] lg:leading-[24px] font-light pb-2 text-zinc-700">
            Logo Design Course
          </h3>
        </div>
      </div>

      <hr className=" bg-white text-zinc-300" />

      <div className="bg-white mx-auto lg:px-5 flex justify-between flex-col lg:flex-row py-6 px-4 lg:px-2">
        <div className="text-center lg:text-left">
          <p className="font-roboto xl:text-[18px] leading-[24px] text-[16px] font-light pb-2 text-zinc-700">
            © Copyright Shreemd Academy 2023 &nbsp;&nbsp; | &nbsp;&nbsp;{" "}
            <span className="text-zinc-900 font-semibold block sm:inline-block hover:text-[#666]">
              {" "}
              +91 9057471755{" "}
            </span>{" "}
            &nbsp;&nbsp; | &nbsp;&nbsp;{" "}
            <span className="text-zinc-900 font-semibold hover:text-[#666]">
              {" "}
              shreemdacademy@gmail.com{" "}
            </span>
          </p>
        </div>
        <div className="text-center lg:text-right">
          <a href="https://www.facebook.com/SRMDACADEMY" 
             target="_blank"
              rel="noopener noreferrer">
            <FaFacebookF className="inline-block mx-2 text-[18px] sm:text-[20px] lg:text-[18px] font-light text-zinc-500 mx-1 hover:text-blue-700" />
          </a>
          <a href="">
            <FaTwitter className="inline-block mx-2 text-[18px] sm:text-[20px] lg:text-[18px] font-light text-zinc-500 mx-1 hover:text-sky-500" />
          </a>
          <a href="/">
            <FaGooglePlusG className="inline-block mx-2 text-[18px] sm:text-[20px] lg:text-[18px] font-light text-zinc-500 mx-1 hover:text-red-800" />
          </a>
          <a href="/">
            <RiInstagramFill className="inline-block mx-2 text-[18px] sm:text-[20px] lg:text-[18px] font-light text-zinc-500 mx-1 hover:text-yellow-800" />
          </a>
        </div>
      </div>
    </>
  );
}
