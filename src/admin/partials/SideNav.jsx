import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <>
      <div>
        <div className=" bg-[#C9C5B1] max-h-screen overflow-y-scroll">
          <ul>
            <Link
              to="/admin/dashboard"
              className="w-full hover:cursor-pointer text-white text-center"
            >
              <li className="bg-[#4F4D46] px-10 my-[1px]  hover:bg-[#BAB095] py-4  ">
                Dashboard
              </li>
            </Link>
            <Link
              to="/admin/allUsers"
              className="w-full hover:cursor-pointer text-white text-center"
            >
              <li className="bg-[#4F4D46] px-10 my-[1px]  hover:bg-[#BAB095] py-4 ">
                Users
              </li>
            </Link>

            <Link
              to="/admin/allBlogs"
              className="w-full hover:cursor-pointer text-white text-center"
            >
              <li className="bg-[#4F4D46] px-10 my-[1px]  hover:bg-[#BAB095] py-4 ">
                Blogs
              </li>
            </Link>

            <Link
              to="/admin/allSubject"
              className="text-white rounded my-[1px]  text-center"
            >
              <li className="bg-[#4F4D46] hover:bg-[#BAB095] py-4 px-10 ">
                Courses
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
