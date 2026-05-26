import { useEffect, useState } from "react";
import Header from "./partials/Header.jsx";
import api from "../api/axios.js";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const loadBlogDetail = async () => {
    try {
      const response = await api.get(`/blogs/${id}`);
      console.log(response.data);
      setBlog(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(id);

  useEffect(() => {
    console.log("Fetching blog...");
    loadBlogDetail();
  }, [id]);
  return (
    <>
      <div className=" bg-[#C9C5B1] h-full">
        <Header />
        <div className="container mx-auto bg-white text-center w-[800px] rounded-xl">
          <h1 className="text-[24px] font-bold bg-gray-600 text-white capitalize rounded-t-xl py-4">
            Details of {blog?.title}
          </h1>
          <div className="text-left px-4 py-8">
            <p className="text-[20px] capitalize">
              Title:{" "}
              <span className="text-[18px] text-zinc-800"> {blog?.title}</span>
            </p>
            <p className="text-[20px]">
              Image:{" "}
              <span className="text-[18px] text-zinc-800">
                <img
                  src={`http://localhost:3000/uploads/${blog?.image}`}
                  alt=""
                  className="w-[200px] h-[200px] mx-auto"
                />
              </span>
            </p>
            <div className="text-[20px]">
              Content:
              <div
                className="text-[18px] text-zinc-800"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
