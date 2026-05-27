import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import api from "../api/axios";
import { useRef } from "react";
// import course from "./course.json";
export default function Courses() {
  const navigate = useNavigate();
  // to get the subjects
  const sliderRef = useRef(null);
  const [course, setCourse] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const cardWidth = sliderRef.current?.children[0]?.offsetWidth || 0;

  const gap = window.innerWidth >= 768 ? 20 : 0;
  const LoadSubjects = async () => {
    const response = await api.get(`/subjects/`);
    setCourse(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    LoadSubjects();
    //  fetch("/course.json")
    //   .then((res) => res.json())
    //   .then((result) => setCourse(result))
    //   .catch((err) => console.log(err));
 }, []);
  if (!course) return <h2>Loading...</h2>;
  const [cardPerView, setCardPerView] = useState(3);

  const updateCardPerView = () => {
    if (window.innerWidth >= 1024) {
      setCardPerView(3);
    } else if (window.innerWidth >= 768) {
      setCardPerView(2);
    } else {
      setCardPerView(1);
    }
  };
  useEffect(() => {
    updateCardPerView();
    window.addEventListener("resize", updateCardPerView);
    return () => {
      window.removeEventListener("resize", updateCardPerView);
    };
  }, []);
  const handlePrev = () => {
    setDirection(-1);
    if (index > 0) setIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    setDirection(1);
    if (index < course.length - cardPerView) setIndex((prev) => prev + 1);
  };
  return (
    <>
      <div className=" bg-[#105503] h-auto py-5 px-2 sm:pb-15 pb-8">
        <div className="max-w-[1400px] w-auto mx-auto  overflow-hidden">
          <div className="max-w-[1400px] w-auto  overflow-hidden">
            <motion.div
              ref={sliderRef}
              className="grid 
             grid-flow-col 
              auto-cols-[100%] 
              md:auto-cols-[calc((100%_-_20px)/2)]
               lg:auto-cols-[calc((100%_-_40px)/3)]
             md:gap-5
           gap-0
            "
              animate={{
                x: -(index * (cardWidth + gap)),
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              {course.map((course) => (
                <div
                  onClick={() => navigate(`/course/${course._id}`)}
                  key={course._id}
                  className="card cursor-pointer bg-cyan-50 rounded-lg text-white w-full overflow-hidden"
                >
                  <div className="relative">
                    <div className="absolute top-3 right-3 bg-[#105503] rounded-md text-white">
                      <div className="px-4 py-1 font-roboto font-semibold text-[12px] leading-[16px] ">
                        &#8377;{course.stPackage}-{course.endPackage} LPA
                      </div>
                    </div>
                  </div>
                  {/* src={`http://localhost:3000/uploads/${course.subLogo}`} */}
                  <div className="">
                    <img
                      src={course.subLogo}
                      alt=""
                      className="object-cover h-48 w-full rounded-t-lg"
                    />
                  </div>
                  <div className="px-4">
                    <div className="font-Muli font-bold text-[26px] text-[#1f2937] leading-[34px] pt-6 pb-4 text-center">
                      {course.name}
                    </div>
                    <div className="font-roboto font-normal text-[18px] leading-[26px] text-[#4b5563] pt-2 pb-5 text-justify">
                      <div
                        dangerouslySetInnerHTML={{ __html: course.shortDesc }}
                      />
                    </div>
                    <div className="flex gap-2 justify-center pb-3">
                      {/* sub divs */}
                      <div className="border-2 border-neutral-400 text-[14px] leading-[20px] font-semibold text-[#1f2937] px-2 rounded-[10px] py-1 bg-neutral-100">
                        <FiClock className="inline-block mb-0.5 text-[18px] mx-1" />
                        <span className="mt-0.5">{course.duration} months</span>
                      </div>
                      <div className="border-2 border-neutral-400 text-[14px] leading-[20px] font-semibold text-[#1f2937] px-2 rounded-[10px] py-1 bg-neutral-100">
                        <IoBookOutline className="inline-block mb-0.5 text-[18px] mx-1" />
                        <span className="mt-0.5">
                          {course.projects} Projects
                        </span>
                      </div>
                      <div className="border-2 border-neutral-400 text-[14px] leading-[20px] font-semibold text-[#1f2937] px-2 rounded-[10px] py-1 bg-neutral-100">
                        <HiUserGroup className="inline-block mb-0.5 text-[18px] mx-1" />
                        <span className="mt-0.5">
                          {course.students}+ Students
                        </span>
                      </div>
                    </div>
                    <div className="text-center py-3.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/contact");
                        }}
                        className="bg-[#105503] cursor-pointer px-10 py-3.5 text-white rounded-2xl font-roboto font-semibold text-[18px] leading-[28px]"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="text-white flex justify-center my-5">
          <div className="prev  my-7">
            <button
              onClick={handlePrev}
              className="cursor-pointer mx-5 px-2 py-2 bg-[#105503] border-2 border-white rounded-md text-[20px]"
            >
              <IoIosArrowBack className="font-semibold" />
            </button>
          </div>
          <div className="course bg-[#105503] border-2 border-white   px-10 py-3.5 text-white rounded-2xl font-roboto font-semibold text-[23px] leading-[28px] inline-block my-5">
            Course
          </div>
          <div className="next  my-7">
            <button
              onClick={handleNext}
              className="cursor-pointer mx-5 px-2 py-2 bg-[#105503] border-2 border-white  rounded-md text-[20px]"
            >
              <IoIosArrowForward className="font-semibold" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
