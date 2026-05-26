import { use, useState } from "react";
import Header from "./partials/Header";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import UseCKEditor from "../UseCKEditor.jsx";
import api from "../api/axios";
import {useNavigate} from 'react-router-dom'
export default function AddSubject() {
  const [content, setContent] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
    const navigate = useNavigate();
  // SUBMIT THE FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    

    formData.append("name", e.target.elements.name.value);
    formData.append("stPackage", e.target.elements.stPackage.value);
    formData.append("endPackage", e.target.elements.endPackage.value);
    formData.append("duration", e.target.elements.duration.value);
    formData.append("students", e.target.elements.students.value);
    formData.append("projects", e.target.elements.projects.value);
    formData.set("shortDesc", content);
    formData.set("content1", content1);
    formData.set("content2", content2);

    formData.append("subLogo", e.target.subLogo.files[0]);
    formData.append("image1", e.target.image1.files[0]);
    formData.append("image2", e.target.image2.files[0]);
    try {
      const res = await api.post("/subjects/addSubject", formData);
      console.log(res.data);
        e.target.reset();
      setContent('');
      setContent1('');
      setContent2('');
      navigate('/admin/allSubject')
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className=" bg-[#C9C5B1] h-auto">
        <Header />
        <div className=" text-center max-w-[1200px] min-w-[600px] w-[100%] mx-auto bg-white rounded-xl shadow-xl/80 py-10">
          <h1 className="text-[36px] font-semibold py-4">Add Subject</h1>
          <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
            className="border-2 border-gray-200 mx-10 rounded-xl px-4 py-4 text-left
        "
          >
            {/* <!-- htmlFor Subject Name --> */}
            <label
              htmlFor="title"
              className="text-zinc-800 font-medium text-[18px]"
            >
              Suject Name: &nbsp;&nbsp;
            </label>
            <input
              type="text"
              name="name"
              id="title"
              placeholder="Title"
              className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg"
            />
            <br /> <br />
            {/* <!-- Subject Logo --> */}
            <label
              htmlFor="image"
              className="text-zinc-800 font-medium text-[18px]"
            >
              Subject Logo: &nbsp;&nbsp;
            </label>
            <input
              type="file"
              name="subLogo"
              className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg"
            />{" "}
            <br /> <br />
            {/* <!--add Suject's Description  --> */}
            <label
              htmlFor="editor"
              className="text-zinc-800 font-medium text-[18px]"
            >
              Short Description: &nbsp;&nbsp;
            </label>
             <UseCKEditor data={content}
                       onChange={(event, editor) => {
                              const data = editor.getData();
                              console.log(data);
                              setContent(data);
                            }} />
            <div>
              {/* <UseCKEditor /> */}
            </div>
            <br /> <br />
            {/* <!-- Subject Image1 --> */}
            <label
              htmlFor="image"
              className="text-zinc-800 font-medium text-[18px]"
            >
              Subject Image: &nbsp;&nbsp;
            </label>
            <input
              type="file"
              name="image1"
              className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg"
            />
            <br /> <br />
            {/* <!--add Suject's Content1  --> */}
            <label
              htmlFor="editor"
              className="text-zinc-800 font-medium text-[18px]"
            >
              Subject Description: &nbsp;&nbsp;
            </label>
             <UseCKEditor data={content1}
                       onChange={(event, editor) => {
                              const data = editor.getData();
                              console.log(data);
                              setContent1(data);
                            }} />
            <br /> <br />
            {/* <!-- Subject Image2 --> */}
            <label
              htmlFor="image"
              className="text-zinc-800 font-medium text-[18px]"
            >
              Subject Image: &nbsp;&nbsp;
            </label>
            <input
              type="file"
              name="image2"
              className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg"
            />
            {/* <!--add Subject's Content2  --> */}
            <label
              htmlFor="editor"
              className="text-zinc-800 font-medium text-[18px]"
            >
              Subject Description: &nbsp;&nbsp;
            </label>
           <UseCKEditor data={content2}
                     onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log(data);
                            setContent2(data);
                          }} /> <br /><br />
            <div>
              <label htmlFor="duration" className="text-zinc-800 font-medium text-[18px]">Duration of Course</label>
              <input type="text"
              name="duration"
              id="duration"
               placeholder="Duration" 
               className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg mr-5" />
            </div> <br /> <br />
            <div>
              <label htmlFor="package" className="text-zinc-800 font-medium text-[18px]">Package Information:</label> <br />
              <input type="text"
              name="stPackage"
              id="package"
              placeholder="Start package"
              className=" py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg mr-5"
              />
               <input type="text"
                name="endPackage"
                 id="package"
                placeholder="End package"
                className=" py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg" />
            </div><br /><br />
            <div>
              <label htmlFor="totalprojects"  className="text-zinc-800 font-medium text-[18px]">Total Projects</label>
              <input type="text"
               name="projects"
                id="totalprojects"
                 placeholder="Total Projects"
                  className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg" />
            </div>
            <div>
              <label htmlFor="totalSt">Total Students</label>
              <input type="text"
              name="students"
              id="totalSt"
              placeholder="Total Students"
               className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg" />
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
