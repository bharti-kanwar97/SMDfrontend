import { useState, useEffect } from "react";
import Header from "./partials/Header";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function SubjectDetail() {
  const { id } = useParams();
  const [subject, setSubject] = useState({});
  const loadSubjectDetail = async () => {
    try {
      const response = await api.get(`/subjects/${id}`);
      console.log(response.data);
      setSubject(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(id);

  useEffect(() => {
    console.log("Fetching blog...");
    loadSubjectDetail();
  }, [id]);
  return (
    <>
      <div className=" bg-[#C9C5B1] h-full">
        <Header />
        <div className="container mx-auto bg-white text-center w-[800px] rounded-xl">
          <h1 className="text-[24px] font-bold bg-gray-600 text-white capitalize rounded-t-xl py-4">
            Details of {subject.name}
          </h1>
          <div className="text-left px-4 py-8">
            <p className="text-[20px] capitalize">
              Course Name:
              <span className="text-[18px] text-zinc-800"> {subject.name}</span>
            </p>
            <br />
            <p className="text-[20px]">
              <span className="text-[18px] text-zinc-800">
                <img
                  src={subject.image}
                  alt=""
                  className="w-[200px] h-[200px] mx-auto"
                />
              </span>
            </p>
            <br />
            <div className="text-[20px]">
              About {subject.name}:{" "}
              <span
                className="text-[18px] text-zinc-800"
                dangerouslySetInnerHTML={{ __html: subject?.shortDesc }}
              ></span>
            </div>
            <br />
            <p className="text-[20px]">
              <span className="text-[18px] text-zinc-800">
                <img
                  src={subject.image1}
                  alt=""
                  className="w-[400px] h-[200px] mx-auto"
                />
              </span>
            </p>
            <br />
            <div className="text-[20px]"> More about {subject.name}:</div>{" "}
            <div
              className="inline-block  text-[18px] text-zinc-800"
              dangerouslySetInnerHTML={{ __html: subject?.content1 }}
            ></div>
            <br />
            <p className="text-[20px]">
              <span className="text-[18px] text-zinc-800">
                <img
                  src={subject.image2}
                  alt=""
                  className="w-[400px] h-[200px] mx-auto"
                />
              </span>
            </p>
            <br />
            <div
              className="text-[18px] text-zinc-800"
              dangerouslySetInnerHTML={{ __html: subject?.content2 }}
            ></div>
            <div><span className="text-[20px]">Duration:</span> <span className="text-[18px] text-zinc-800">{subject.duration}</span></div>
            <div><span className="text-[20px]">Projects:</span> <span className="text-[18px] text-zinc-800">{subject.projects}</span></div>
            <div><span className="text-[20px]">Students:</span> <span className="text-[18px] text-zinc-800">{subject.students}</span></div>
            <div className="text-[20px]">
              Package Information: <br />
            <div className="inline-block mr-5"><span className="text-[18px]">Start Package:</span> <span className="text-[18px] text-zinc-800">{subject.stPackage}</span></div>
            <div className="inline-block"><span className="text-[18px]">End Package:</span> <span className="text-[18px] text-zinc-800">{subject.endPackage}</span></div>

            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
