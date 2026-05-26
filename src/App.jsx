import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import SocialMarketing from "./subpages/SocialMarketing.jsx";
import SEO from "./subpages/SEO.jsx";
import Payperclick from "./subpages/Payperclick.jsx";
import BlogDetails from "./subpages/BlogDetails.jsx";
import CourseDetail from "./subpages/CourseDetail.jsx";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import AllBlogs from "./admin/AllBlogs.jsx";
import AddBlog from "./admin/AddBlog.jsx";
import BlogDetail from "./admin/BlogDetail.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import AllSubject from "./admin/AllSubject.jsx";
import SubjectDetail from "./admin/SubjectDetail.jsx";
import AddSubject from "./admin/AddSubject.jsx";
import UpdateSubject from "./admin/UpdateSubject.jsx";
import Updateblog from "./admin/UpdateBlog.jsx";
import AllUsers from "./admin/AllUsers.jsx";
import UserDetail from "./admin/UserDetail.jsx";
import UseCKEditor from "./UseCKEditor.jsx";
// import WhatsApp from './components/WhatsApp.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />}>
              <Route index element={<Navigate to="ppc" replace />} />
              <Route path="ppc" element={<Payperclick />} />
              <Route path="socialMarketing" element={<SocialMarketing />} />
              <Route path="seo" element={<SEO />} />
            </Route>

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/contact" element={<Contact />} />
          
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/allSubject" element={<AllSubject />} />
            <Route path='/admin/ck' element={<UseCKEditor />} />
            <Route
              path="/admin/subjectDetail/:id"
              element={<SubjectDetail />}
            />
            <Route path="/admin/addSubject" element={<AddSubject />} />
            <Route
              path="/admin/updateSubject/:id"
              element={<UpdateSubject />}
            />

            <Route path="/admin/allBlogs" element={<AllBlogs />} />
            <Route path="/admin/addBlog" element={<AddBlog />} />
            <Route path="/admin/blogDetail/:id" element={<BlogDetail />} />
            <Route path="/admin/updateBlog/:id" element={<Updateblog />} />

            <Route path="/admin/allUsers" element={<AllUsers />} />
            <Route path="/admin/userDetail/:id" element={<UserDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
