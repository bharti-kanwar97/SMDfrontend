import { useState, useEffect } from "react";
import api from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import UseCKEditor from "../UseCKEditor.jsx";
import Header from "./partials/Header";

export default function UpdateBlog() {
  //  const [content, setContent] = useState("");
  const { id } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    image: "",
  });
  const navigate = useNavigate();
  const loadData = async () => {
    const response = await api.get(`/blogs/${id}`);
    console.log(response.data);
    setBlog(response.data);
  };
  useEffect(() => {
    loadData();
  }, [id]);

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setBlog({
      ...blog,
      [name]: files ? files[0] : value,
    });
  };
  const handleEditorChange = (name, data) => {
    setBlog((prev) => ({
      ...prev,
      [name]: data,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(blog)
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.set("content", blog.content);

    // Append only if new file selected
    if (blog.image instanceof File) {
      formData.append("image", blog.image);
    }
    try {
      const res = await api.put(`/blogs/updateblog/${id}`, formData);
      console.log(res.data);
      navigate("/admin/allBlogs");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" bg-[#C9C5B1] h-auto">
        <Header />
        <div className=" text-center max-w-[1200px] min-w-[600px] w-[100%] mx-auto bg-white rounded-xl shadow-xl/80 py-10">
          <h1 className="text-[36px] font-semibold py-4">Update Blog</h1>
          <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
            className="border-2 border-gray-200 mx-10 rounded-xl px-4 py-4 text-left
        "
          >
            <div>
              <label
                htmlFor=""
                className="text-zinc-800 font-medium text-[18px]"
              >
                Blog's Title:
              </label>
              <input
                type="text"
                name="title"
                className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg"
                value={blog.title || ""}
                onChange={handleChange}
                id=""
              />
            </div>
            <br />
            <br />
            <div>
              <label
                htmlFor=""
                className="text-zinc-800 font-medium text-[18px]"
              >
                Image:
              </label>
              <input
                type="file"
                name="image"
                id=""
                className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg"
                onChange={handleChange}
              />
              <p>
                {typeof blog.image === "string" ? blog.image : blog.image?.name}
              </p>
            </div>
            <br />
            <br />
            <div>
              <label
                htmlFor=""
                className="text-zinc-800 font-medium text-[18px]"
              >
                Blog Description:
              </label>
             
                       <UseCKEditor data={blog.content}
                        onChange={(data) => {
                              //  const data = editor.getData();
                               console.log(data);
                                setBlog((prev) => ({
      ...prev,
      content: data,
    }));
                             }} />
                        
            </div>
            <div className="text-center mt-5">
              <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded text-[18px] font-semibold">Update Blog</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
