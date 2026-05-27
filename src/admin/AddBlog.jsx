import { useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
import UseCKEditor from "../UseCKEditor.jsx";
import Header from "./partials/Header";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";
import '../style.css'
export default function AddBlog() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
     formData.append("title", title);
formData.append("content", content);
formData.append("image", image);


    try {
      const res = await api.post("blogs/addblog", formData);
      console.log(res.data);
      e.target.reset();
      setContent("");
      navigate("/admin/allBlogs");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" bg-[#C9C5B1] h-screen">
        <Header />
        <div className=" text-center max-w-[1200px] min-w-[600px] w-[100%] mx-auto bg-white rounded-xl shadow-xl/80 py-10">
          <h1 className="text-[36px] font-semibold py-4">Create Blog</h1>
          <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
            className="border-2 border-gray-200 mx-10 rounded-xl px-4 py-4 text-left
        "
          >
            {/* <!-- htmlFor title --> */}
            <label
              htmlFor="title"
              className="text-zinc-800 font-medium text-[18px]"
            >
              Blog Title: &nbsp;&nbsp;
            </label>
            <input
              type="text"
              name="title"
              id="title"
               value={title}
          onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg"
            />{" "}
            <br /> <br />
            {/* <!-- Blog Image --> */}
            <label
              htmlFor="image"
              className="text-zinc-800 font-medium text-[18px]"
            >
              Blog Image: &nbsp;&nbsp;
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg"
            />
            {/* 
           <!--Content  --> */}
            <label
              htmlFor="editor1"
              className="text-zinc-800 font-medium text-[18px]"
            >
              Blog Description: &nbsp;&nbsp;
            </label>
            {/* <textarea name="content" id="editor1" placeholder="Description" rows="5"></textarea> */}
            {/* <div>
              <CKEditor
                editor={ClassicEditor}
                data={content}
                config={{
                  toolbar: [
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "bulletedList",
                    "numberedList",
                    "|",
                    "link",
                    "blockQuote",
                    "insertTable",
                    "imageUpload",
                    "undo",
                    "redo",
                  ],
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContent(data);
                }}
              />
            </div> */}
            <div>
          <UseCKEditor 
          data={content}
    
           onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log(data);
                  setContent(data);
                }} />
            </div>
            <div className="text-center mt-5">
              <button
                type="submit"
                className="bg-blue-800 text-white px-4 py-2 rounded text-[18px] font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
