import React from "react";
import paypal from "../assets/paypalmarketingImg.png";
export default function Payperclick() {
  return (
    <div>
      <div className="py-4 my-8 flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-10 xl:gap-25 xl:mx-40 lg:mx-15 md:mx-10 sm:mx-20 mx-4">
        <div className="left md:w-1/2 w-full md:self-center">
          <img
            src={paypal}
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
          <ul className="pl-4 list-disc mb-4">
            <li className="font-roboto font-light text-[#333] text-[17px] leading-[25px] py-2 sm:text-[16px] sm:leading-[24px]">
              Integer congue magna at pretium purus pretium ligula rutrum and
              luctus risus eros dolor auctor ipsum blandit purus vehicula magna
              and luctus tempor quisque integer congue magna
            </li>
            <li className="font-roboto font-light text-[#333] text-[17px] leading-[25px] py-2 sm:text-[16px] sm:leading-[24px]">
              Sagittis congue augue egestas volutpat egestas magna donec ociis
              et magnis ipsum porta justo integer velna purus
            </li>
          </ul>
          <button className="btn font-roboto font-bold text-[16px] leading-[16px] py-[14px] px-[26px] text-[#333] background-transparent border-[2px] border-[#ccc] rounded-md hover:bg-[#105503] hover:text-white hover:border-none mt-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
