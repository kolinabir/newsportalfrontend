import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen mt-16">{children}</div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default CommonLayout;
