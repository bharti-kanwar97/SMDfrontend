import {useState, useEffect} from 'react'
import api from '../api/axios'
import Header from './partials/Header'
import {useParams, useNavigate} from 'react-router-dom'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import UseCKEditor from "../UseCKEditor.jsx";
export default function UpdateSubject() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [subject, setSubject] = useState({
    name: "",
    subLogo: "",
    duration: "",
    projects: "",
    students: "",
    stPackage: "",
    endPackage: "",
    image1: "",
    image2:"",
    shortDesc: "",
    content1: "",
    content2: ""
  });
  const fetchSubject = async () => {
    try{
       const response = await api.get(`/subjects/${id}`);
       console.log(response.data);
       setSubject(response.data)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    fetchSubject();

  },[id])

  const handleChange = (e) => {
    const {name, value, files} = e.target;
    setSubject({
      ...subject,
      [name]: files ? files[0] : value
    })
     console.log(e.target.files[0].name);
  }
  const handleEditorChange = (name, data) => {
  setSubject((prev) => ({
    ...prev,
    [name]: data,
  }));
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(subject).forEach((key) => {
      formData.append(key, subject[key]);
    })
    try{
      const res = await api.put(`/subjects/updateSubject/${id}`, formData);
      console.log(res.data);
      navigate('/admin/allSubject'); 
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className=" bg-[#C9C5B1] h-auto">
      <Header />
      <div className=" text-center max-w-[1200px] min-w-[600px] w-[100%] mx-auto bg-white rounded-xl shadow-xl/80 py-10">
      <h1 className="text-[36px] font-semibold py-4">Update Subject</h1>
      <form onSubmit={handleSubmit}
       method="POST"
        encType="multipart/form-data"
          className="border-2 border-gray-200 mx-10 rounded-xl px-4 py-4 text-left
        ">
        <div>
 <label htmlFor="subName"  className="text-zinc-800 font-medium text-[18px]">Subject Name:</label>
        <input type="text"
        name="name"
         id="subName"
         value={subject.name || ""}
          placeholder='enter name'
          onChange={handleChange}
           className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg" />
        </div> 
        <br /><br />
        <div>
          <label htmlFor="logo" className="text-zinc-800 font-medium text-[18px]">Subject Logo:</label>
          <input type="file"
           name="subLogo"
            id="logo"
            onChange={handleChange}
              className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg" />
          <p>
  {typeof subject.subLogo === "string"
    ? subject.subLogo
    : subject.subLogo?.name}
</p>
        </div>
       <br /><br />
       <div>
        <label htmlFor="subDur"  className="text-zinc-800 font-medium text-[18px]">Subject's Duration:</label>
        <input type="text"
         name="duration"
          id="subDur"
          value={subject.duration || ""}
          onChange= {handleChange}
            className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg mr-5" />
       </div>
       <br /><br />
       <div>
        <label htmlFor="projectNo"  className="text-zinc-800 font-medium text-[18px]">Number of Projects:</label>
        <input type="text"
         name="projects"
          id="projectNo"
          value={subject.projects || ""}
          onChange={handleChange}
            className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg mr-5" />
       </div>
       <br /><br />
       <div>
        <label htmlFor="enrollSt" className="text-zinc-800 font-medium text-[18px]">Enrolled Students:</label>
        <input type="text"
         name="students"
        id="enrollSt"
        value={subject.students || ""}
        onChange={handleChange}
          className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg mr-5" />
       </div>
       <br /><br />
       <div>
        <label htmlFor="packageInfo" className="text-zinc-800 font-medium text-[18px]">Package's Information:</label>
        <input type="text" name="stPackage" id="packageInfo" value={subject.stPackage || ""} onChange={handleChange}  className=" py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg mr-5" />
        <input type="text" name="endPackage" id="" value={subject.endPackage || ""} onChange={handleChange}  className=" py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg mr-5" />
       </div>
       <br /><br />
       <div>
        <label htmlFor="" className="text-zinc-800 font-medium text-[18px]">Subject Image:</label>
        <input type="file"
         name="image1"
          id=""
          onChange={handleChange}
          className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg" />
     <p>
  {typeof subject.image1 === "string"
    ? subject.image1
    : subject.image1?.name}
</p>
       </div>
       <br /><br />
       <div>
        <label htmlFor="" className="text-zinc-800 font-medium text-[18px]">Subject Image 2:</label>
        <input type="file"
         name="image2"
          id=""
          onChange={handleChange}
          className="w-full py-1 px-2 mt-0.5 border-2 border-gray-300 rounded-lg" />
        <p>
  {typeof subject.image2 === "string"
    ? subject.image2
    : subject.image2?.name}
</p>
       </div>
       <br /><br />
       <div>
        <label htmlFor="" className="text-zinc-800 font-medium text-[18px]">Short Description of Subject:</label>
        {/* <CKEditor
        editor={ClassicEditor}
        data={subject.shortDesc || ""}
        onChange={(event, editor) => {
           const data = editor.getData();
           handleEditorChange("shortDesc", data);
        }} /> */}
            <UseCKEditor data={subject.shortDesc || ""}
                                onChange={(event, editor) => {
                                       const data = editor.getData();
                                       console.log(data);
                                       handleEditorChange("shortDesc", data);
                                     }} />
       </div>
       <br /><br />
       <div>
        <label htmlFor="" className="text-zinc-800 font-medium text-[18px]">Detail of Subject:</label>
        {/* <CKEditor
        editor={ClassicEditor}
        data={subject.content1 || ""}
        onChange={(event, editor) => {
            const data = editor.getData();
            handleEditorChange("content1", data)
        }} /> */}
        <UseCKEditor data={subject.content1 || ""}
                                onChange={(event, editor) => {
                                       const data = editor.getData();
                                       console.log(data);
                                         handleEditorChange("content1", data)
                                     }} />
       </div>
       <br /><br />
       <div>
        <label htmlFor="" className="text-zinc-800 font-medium text-[18px]">Detail 2 of Subject:</label>
        {/* <CKEditor
        editor={ClassicEditor}
        data={subject.content2 || ""} 
        onChange={(event, editor) => {
      const data = editor.getData();
      handleEditorChange("content2",data);
        }} /> */}
         <UseCKEditor data={subject.content2 || ""}
                                onChange={(event, editor) => {
                                       const data = editor.getData();
                                       console.log(data);
                                         handleEditorChange("content2",data);
                                     }} />
       </div>
       <br /><br />
       <div className="text-center mt-5">
        <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded text-[18px] font-semibold">Update</button>
       </div>
      </form>

      </div>
    </div>
  )
}
