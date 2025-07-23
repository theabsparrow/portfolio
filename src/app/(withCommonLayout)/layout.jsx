import Footer from "@/component/shared/Footer";
import Navbar from "@/component/shared/Navbar";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
