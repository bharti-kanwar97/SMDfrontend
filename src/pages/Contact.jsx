import React from "react";
import { Link } from "react-router-dom";
import bg_img1 from "../assets/contactImg.png";
import ContactForm from "../components/ContactForm";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CgChevronDoubleRight } from "react-icons/cg";
export default function Contact() {
  // for contact
  const contactText1 = useScrollReveal();
  const contactText2 = useScrollReveal();
  const contactText3 = useScrollReveal();
  return (
    <>
      <section className="mt-[60px] sm:mt-[100px]">
        <div>
          <img
            src={bg_img1}
            alt=""
            className=" h-[230px] sm:h-[400px] md:h-[300px] w-[100%] lg:h-[350px]"
          />
        </div>
      </section>

      <div className="py-4 my-4 xl:mx-50 lg:mx-15 md:mx-10 sm:mx-20 mx-8 ">
        <Link
          to="/"
          className="inline-block text-[#105503] font-roboto font-medium text-[16px] leading-[23px] hover:text-[#666]"
        >
          Home{" "}
        </Link>{" "}
        <CgChevronDoubleRight className="inline-block font-roboto font-medium text-[16px] leading-[23px] text-[#999]" />{" "}
        <span className=" font-roboto font-medium text-[16px] leading-[23px] text-[#999]">
          Contact Us
        </span>
        <hr className="mt-8 border-[#bbb]" />
      </div>
      {/* start section for address */}
      <section className="mt-10 mb-5">
        <div className="flex  py-4 my-8 flex justify-between flex-col lg:flex-row xl:mx-50 lg:mx-30 md:mx-30 sm:mx-20 mx-4 ">
          <div className="lg:w-1/4 lg:h-[400px] mb-3 md:mb-10 lg:mb-0 order-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 md:gap-6 lg:gap-0">
            <div
              ref={contactText1.ref}
              className={`py-3 transition-all duration-700 ease-linear ${contactText1.show ? "translate-y-0 opacity-100 delay-200" : "translate-y-16 opacity-0"}`}
            >
              <h1 className="font-Muli font-bold text-[20px] sm:text-[22px] md:text-[19px] leading-[24px] sm:leading-[26px] lg:leading-[23px] text-[#222]">
                Our Location:
              </h1>
              <h3 className="font-roboto font-light text-[18px] leading-[27px] md:text-[16px] md:leading-[24px] text-[#757575] pt-5">
                Shop No 2, 1st Floor, Kings Rd, Padmavti Colony, Nirman Nagar
                NEAR MANSROVER METRO STATION Jaipur, Rajasthan 302019
              </h3>
            </div>
            <div
              ref={contactText2.ref}
              className={`py-3 transition-all duration-700 ease-linear ${contactText2.show ? "translate-y-0 opacity-100 delay-400" : "translate-y-16 opacity-0"}`}
            >
              <h1 className="font-Muli font-bold text-[20px] sm:text-[22px] md:text-[19px] leading-[24px] sm:leading-[26px] lg:leading-[23px] text-[#222]">
                Contact Phones:
              </h1>
              <h3 className="font-roboto font-light text-[18px] leading-[27px] md:text-[16px] md:leading-[24px] text-[#757575] pt-5">
                Phone: +91 9090100517
              </h3>
              <h3 className="font-roboto font-light text-[18px] leading-[27px] md:text-[16px] md:leading-[24px] text-[#757575]">
                Phone : +91 9057471755
              </h3>
            </div>
            <div
              ref={contactText3.ref}
              className={`py-3 transition-all duration-700 ease-linear ${contactText3.show ? "translate-y-0 opacity-100 delay-600" : "translate-y-16 opacity-0"}`}
            >
              <h1 className="font-Muli font-bold text-[20px] sm:text-[22px] md:text-[19px] leading-[24px] sm:leading-[26px] lg:leading-[23px] text-[#222]">
                Office Hours:
              </h1>
              <h3 className="font-roboto font-light text-[18px] leading-[27px] md:text-[16px] md:leading-[24px] text-[#757575] pt-5">
                Mon - Sat: 9:00am - 7:00pm
              </h3>
              <h3 className="font-roboto font-light text-[18px] leading-[27px] md:text-[16px] md:leading-[24px] text-[#757575]">
                Sunday: Closed
              </h3>
            </div>
          </div>
          <div className="mb-6 sm:mb-0 md:w-full lg:w-2/3 order-1 shadow-xl/30 md:mb-20">
            <ContactForm />
          </div>
        </div>
      </section>
      {/* end section for address */}

      {/* start section for location  */}
      <section className="">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.8110827623327!2d75.74898628995979!3d26.88162892129889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e612e4f0d4688e5%3A0x247e59ac7114ecbc!2sShree%20Multiple%20%26%20Development%20Academy!5e0!3m2!1sen!2sin!4v1769705081253!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      {/* end section for location  */}
    </>
  );
}
