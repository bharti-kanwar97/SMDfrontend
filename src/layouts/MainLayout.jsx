import Navigation from "../layout/Navigation";
import { Outlet } from "react-router-dom";
import TopButton from "../components/TopButton.jsx";
import ScrollToTop from "../hooks/scrollToTop.js";
import Footer from "../layout/Footer.jsx";
export default function MainLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <TopButton />
      <ScrollToTop />

      <Footer />
    </>
  );
}
