import { useState, useEffect } from "react";
import api from "../api/axios.js";
import { useParams } from "react-router-dom";
import Header from "./partials/Header.jsx";
export default function UserDetail() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const userDetail = async () => {
    const response = await api.get(`/admin/detail/${id}`);
    console.log(response.data);
    setUser(response.data);
  };

  useEffect(() => {
    userDetail();
  }, []);
  return (
    <>
      <div className="bg-[#C9C5B1] p-8 h-screen">
        <Header />
        <div className="container mx-auto bg-white text-center w-[800px] rounded-xl">
          <h1 className="text-[24px] font-bold bg-gray-600 text-white capitalize rounded-t-xl py-4">
            Details of {user.name}
          </h1>
          <div className="text-left px-4 py-8">
            <p className="text-[20px] capitalize">
              Name:{" "}
              <span className="text-[18px] text-zinc-800"> {user.name}</span>
            </p>
            <p className="text-[20px]">
              Email:{" "}
              <span className="text-[18px] text-zinc-800"> {user.email}</span>
            </p>
            <p className="text-[20px]">
              Phone:{" "}
              <span className="text-[18px] text-zinc-800"> {user.phone}</span>
            </p>
            <p className="text-[20px]">
              Title:{" "}
              <span className="text-[18px] text-zinc-800"> {user.about}</span>
            </p>
            <p className="text-[20px]">
              Message:{" "}
              <span className="text-[18px] text-zinc-800"> {user.msg}</span>
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
