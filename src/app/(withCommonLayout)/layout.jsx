import Footer from "@/component/shared/Footer";
import Navbar from "@/component/shared/Navbar";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen lg:px-[8vw] px-2">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
