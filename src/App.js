import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { useLoader } from "./contexts/loader-context";
import { useNav } from "./contexts/nav-context";
import { ToastContainer } from "react-toastify";
import { HomePage, About, Projects, Blogs, Contact } from "./pages";
import { MobileNavbar, Loader, MenuIcon } from "./Components";

export default function App() {
  const { showLoader } = useLoader();
  const { showNav } = useNav();
  return (
    <>
      <MenuIcon />
      {showLoader && <Loader />}
      <ToastContainer autoClose="3000" closeOnClick="true" />
      {showNav ? (
        <MobileNavbar />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
}
