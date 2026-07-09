import Footer from "@/component/shared/Footer";
import Navbar from "@/component/shared/navbar/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <Navbar />
      <main className="min-h-screen lg:px-[8vw] px-2">{children}</main>
      <Footer />
    </section>
  );
};

export default CommonLayout;
