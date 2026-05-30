import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import Header from "./partials/Header.jsx";
import Create from "./partials/Create.jsx";
import SideNav from "./partials/SideNav.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await api.get("/admin/allUsers");
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("Updated users:", users);
    loadUsers();
  }, []);
  return (
    <>
      <div className=" bg-[#C9C5B1] h-screen flex flex-col ">
        <div className="relative flex justify-around items-center">
          <div className="md:invisible bg-red text-[25px] px-2.5 text-[#3b0440] py-2 hover:cursor-pointer">
            <GiHamburgerMenu />
          </div>
          <Header />

          <Link to="/admin/addUser" className="invisible">
            <Create />
          </Link>
        </div>
        <div className="flex flex-1 overflow-hidden gap-4">
          <div className="w-[30%] h-full overflow-y-auto">
            <SideNav />
          </div>
          <div className="w-full h-full overflow-y-auto">
            <table className="table-auto text-center max-w-[1200px] min-w-[600px] w-[100%] mx-auto bg-white rounded-xl shadow-xl/80">
              <thead>
                <tr className="text-2xl bg-[#3b0440] border-b-2 border-zinc-800  ">
                  <th className="py-2 px-20 text-white rounded-tl-xl">Name</th>
                  <th className="py-2 px-20 text-white">Email</th>
                  <th className="py-2 px-20 text-white">Phone</th>
                  <th className="py-2 px-20 text-white">About</th>
                  <th className="py-2 px-20 text-white rounded-tr-xl">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.length > 0 &&
                  users?.map((user, index) => (
                    <tr
                      key={index}
                      className={`border-b-2 border-[#3b0440] hover:cursor-pointer hover:bg-[#2d2433] hover:text-white text-neutral-600 ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#d6ccde]"}`}
                    >
                      <td className="text-[18px] px-4 py-2">{user.name}</td>
                      <td className="text-[18px] px-4 py-2">{user.email}</td>
                      <td className="text-[18px] px-4 py-2">{user.phone}</td>
                      <td className="text-[18px] px-4 py-2">{user.about}</td>
                      <td className="text-[16px]  py-2">
                        <Link to={`/admin/userDetail/${user._id}`}>
                          <button className="bg-[#39014a] hover:bg-[#9f2bc2] text-white px-2 py-1 rounded ">
                            Get More Detail
                          </button>
                        </Link>
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
