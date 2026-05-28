import { Link, useLocation } from "react-router";
import logoImg from "../assets/smd-logo.png";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPhone } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import DropdownMenu from "../components/DropdownMenu";
import DropdownMenu2 from "../components/DropdownMenu2";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const location = useLocation();

  return (
    <>
      <div id="navi">
        <nav className="flex justify-around w-screen items-center fixed top-0 px-5 py-1 bg-white z-10 shadow-xl">
          {/* hamburgur */}
          <div className="block lg:hidden">
            <Link onClick={() => setSideMenu((prev) => !prev)}>
              <RxHamburgerMenu className="text-[22px]  my-auto text-zinc-400" />
            </Link>
          </div>
          {/* logo */}
          <div className="">
            <Link to="/">
              <img src={logoImg} alt="" className="w-25 sm:w-45" />
            </Link>
          </div>
          {/* phone Link */}
          <div className="md:hidden">
            <a href="tel:+91 9057471755">
              <FaPhone className="text-[22px] my-auto text-zinc-400" />
            </a>
          </div>
          <div className="lg:hidden md:block hidden">
            <a
              href="https://wa.me/919057471755?text=Hello%20Shreemd%20Academy,%20I%20want%20to%20know%20more%20about%20your%20courses.%20Thanks"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 mx-1 font-black text-[18px] font-Muli"
            >
              <FaPhone className="text-[22px] my-auto text-zinc-400" />
            </a>
          </div>
          <div className=" my-6 pt-4 font-roboto text-gray-800 hidden lg:block">
            <Link
              to="/"
              className="py-3 px-4 mx-1 font-medium text-[16px]"
              onClick={() => setSideMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-3 px-4 mx-1 font-medium text-[16px]"
            >
              About
            </Link>

            <Link
              onClick={() => setLocked(!locked)}
              className=" py-3 px-4 mx-1 font-medium text-[16px]"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => {
                if (locked === false) setOpen(false);
              }}
            >
              Courses <IoMdArrowDropdown className="inline-block" />
            </Link>

            <Link to="/blog" className="py-3 px-4 mx-1 font-medium text-[16px]">
              Blog
            </Link>
            <a
              href="https://wa.me/919057471755?text=Hello%20Shreemd%20Academy,%20I%20want%20to%20know%20more%20about%20your%20courses.%20Thanks"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 mx-1 font-black text-[18px] font-Muli"
            >
              {/* <FaPhoneSquareAlt className="inline-block mx-2" /> */}
              <FaSquareWhatsapp className="inline-block mx-2 text-[22px] text-[#105503] bg-white" />
              +91 9057471755
            </a>
            <Link to="/contact" className="inline-block mx-1">
              <span className="inline-flex items-center justify-center py-2 px-10 mx-1 font-medium text-[16px] bg-[#105503] text-white rounded-xs transform-gpu transition-transform duration-300 delay-150 origin-center ease-in-out hover:scale-105">
                Contact
              </span>
            </Link>
          </div>
        </nav>

        {sideMenu && (
          <DropdownMenu2
            open={open}
            setOpen={setOpen}
            sideMenu={sideMenu}
            setSideMenu={setSideMenu}
          />
        )}
        {(open || locked) && (
          <DropdownMenu
            open={open}
            setOpen={setOpen}
            setLocked={setLocked}
            setSideMenu={setSideMenu}
          />
        )}
      </div>
    </>
  );
}
