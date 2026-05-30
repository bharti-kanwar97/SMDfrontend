import { useState, useEffect } from "react";
import Header from "./partials/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Create from "./partials/Create";
import api from "../api/axios";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNav from "./partials/SideNav.jsx";
export default function AllSubject() {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/admin/subjectDetail/${id}`);
  };

  const goToUpdate = (id) => {
    navigate(`/admin/updateSubject/${id}`);
  };
  const deleteSubject = async (id) => {
    try {
      await api.delete(`/subjects/deleteSubject/${id}`);

      setSubjects((prev) => prev.filter((subject) => subject._id !== id));
    } catch (error) {
      console.log(`Error in deleting data ${error}`);
    }
  };
  const loadSubjects = async () => {
    const response = await api.get("/subjects/");
    console.log(response.data);
    setSubjects(response.data);
  };
  useEffect(() => {
    loadSubjects();
  }, []);
  return (
    <>
      <div className=" bg-[#C9C5B1] flex flex-col ">
        <div className="relative flex justify-around items-center">
          <div className="md:invisible bg-red text-[25px] px-2.5 text-[#3b0440] py-2 hover:cursor-pointer">
            <GiHamburgerMenu />
          </div>
          <Header />
          <Link to="/admin/addSubject">
            <Create />
          </Link>
        </div>

        <div className="flex flex-1 overflow-hidden gap-4">
           <div className="w-[30%] overflow-y-auto h-full">
                      <SideNav />
                    </div>
          <div className="w-full h-full overflow-y-auto">
            <table className="table-auto text-center max-w-[1200px] min-w-[600px] w-[100%] mx-auto bg-white rounded-xl shadow-xl/80">
              <thead>
                <tr className="text-2xl bg-[#3b0440] border-b-2 border-zinc-800  ">
                  <th className="py-2 px-20 text-white rounded-tl-xl">Image</th>
                  <th className="py-2 px-20 text-white">Title</th>
                  <th className="py-2 px-20 text-white rounded-tr-xl">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {subjects?.map((subject, index) => (
                  <tr
                    key={index}
                    className={`border-b-2 border-[#3b0440] hover:cursor-pointer hover:bg-[#2d2433] hover:text-white text-neutral-600 ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#d6ccde]"}`}
                  >
                    <td className="text-[18px] px-4 py-2">
                      <img
                        src={subject.subLogo}
                        className="w-[40px] h-[40px] mx-auto"
                        alt=""
                      />
                    </td>
                    <td className="text-[18px] px-4 py-2">{subject.name}</td>
                    <td className="text-[16px]  py-2">
                      <button
                        onClick={() => goToDetail(subject._id)}
                        className="bg-[#39014a] hover:bg-[#9f2bc2] text-white px-2 py-1 rounded mx-0.5 "
                      >
                        View
                      </button>
                        <button
                        onClick={() => goToUpdate(subject._id)}
                        className="bg-[#39014a] hover:bg-[#9f2bc2] text-white px-2 py-1 rounded mx-0.5 "
                      >
                       Update
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault(); // prevent form submit
                          if (
                            window.confirm(
                              "Are you sure you want to delete this blog?",
                            )
                          ) {
                            deleteSubject(subject._id);
                          }
                        }}
                        className="bg-[#39014a] hover:bg-[#9f2bc2] text-white px-2 py-1 rounded mx-0.5 "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
