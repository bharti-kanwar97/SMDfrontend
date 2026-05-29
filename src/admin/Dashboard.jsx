import React from "react";
import Header from "./partials/Header.jsx";
import SideNav from "./partials/SideNav.jsx";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <div className="h-screen overflow-auto ">
        <Header />
        <div className="flex gap-8 bg-[#EDE8D0] h-screen">
          <div className="w-[30%]">
            <SideNav />
          </div>
          <div className="h-screen w-full bg-[#EDE8D0] px-10 py-10">
            <div className="flex gap-5 justify-left ">
              <Link to="/admin/allUsers">
                <div className="w-[250px]  h-[250px] text-center py-[75px] bg-white rounded-md text-[24px] font-semibold hover:cursor-pointer hover:transition-all hover:translate-y-3 hover:shadow-xl/30 hover:duration-500 hover:delay-200 hover:ease-in-out ease-in-out">
                  Users
                </div>{" "}
              </Link>
              <Link to="/admin/allBlogs">
                <div className="w-[250px]  h-[250px] text-center py-[75px] bg-white rounded-md text-[24px] font-semibold hover:cursor-pointer hover:transition-all hover:translate-y-3 hover:shadow-xl/30 hover:duration-500 hover:delay-200 hover:ease-in-out ease-in-out">
                  Blogs
                </div>
              </Link>
              <Link to="/admin/allSubject">
                {" "}
                <div className="w-[250px]  h-[250px] text-center py-[75px] bg-white rounded-md text-[24px] font-semibold hover:cursor-pointer hover:transition-all hover:translate-y-3 hover:shadow-xl/30 hover:duration-500 hover:delay-200 hover:ease-in-out ease-in-out">
                  Subjects
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
