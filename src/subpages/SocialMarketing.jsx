import React from "react";
import socialmarketing from "../assets/socialmarketingImg.png";
import { FaCheck } from "react-icons/fa";
export default function SocialMarketing() {
  return (
    <div>
      <div className="py-4 my-8 flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-10 xl:gap-25 xl:mx-40 lg:mx-15 md:mx-10 sm:mx-20 mx-4">
        <div className="left md:w-1/2 w-full md:self-center">
          <img
            src={socialmarketing}
            alt=""
            className="lg:h-[600px] xl:w-[700px] lg:w-[500px] w-full md:h-[440px] sm:h-[600px] min-w-[100px] min-h-[300px] "
          />
        </div>
        <div className="right  md:mt-0 lg:mt-20 md:w-1/2 w-full lg:py-0 pb-8">
          <h1 className="font-Muli font-semibold text-[26px] leading-[31px] sm:text-[29px] sm:leading-[35px] md:text-[27px] md:leading-[33px] text-[#222] py-6">
            We will help your business achieve predictable growth
          </h1>
          <p className="font-roboto font-light text-[#333] text-[17px] leading-[25px] sm:text-[16px] sm:leading-[24px]">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            integer at odio velna vitae auctor integer congue magna at pretium
            purus pretium ligula rutrum and luctus risus ultrice
          </p>
          <ul className=" mb-4 py-2.5">
            <li className="font-roboto font-bold text-[#333] text-[17px] leading-[25px] py-0.5 sm:text-[16px] sm:leading-[24px]">
              <FaCheck className="text-[#757575] inline-block px-1 py-1 text-[24px] mr-1" />
              Vitae auctor integer congue magna at pretium
            </li>
            <li className="font-roboto font-bold text-[#333] text-[17px] leading-[25px] py-0.5 sm:text-[16px] sm:leading-[24px]">
              <FaCheck className="text-[#757575] inline-block px-1 py-1 text-[24px] mr-1" />
              Integer congue magna and pretium purus ligula
            </li>
            <li className="font-roboto font-bold text-[#333] text-[17px] leading-[25px] py-0.5 sm:text-[16px] sm:leading-[24px]">
              <FaCheck className="text-[#757575] inline-block px-1 py-1 text-[24px] mr-1" />
              Sagittis congue augue egestas volutpat egestas
            </li>
          </ul>
          <button className="btn font-roboto font-bold text-[16px] leading-[16px] py-[14px] px-[26px] hover:text-[#333] hover:bg-transparent hover:border-[2px] hover:border-[#333] rounded-md bg-[#105503] text-white cursor-pointer mt-3">
            Our Case Studies
          </button>
        </div>
      </div>
    </div>
  );
}
