import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen mt-16">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
