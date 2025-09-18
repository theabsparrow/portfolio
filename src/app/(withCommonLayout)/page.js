import AboutMe from "@/component/aboutMe/AboutMe";
import Banner from "@/component/banner/Banner";
import ContactComponent from "@/component/contact/ContactComponent";
import MySkills from "@/component/mySkills/MySkills";
import RecentProject from "@/component/recentProject/RecentProject";

export const metadata = {
  title: "Home - Abul Bashar",
  description:
    "The home page of Abul Bashar where skills and description about life and professional life is included here.",
};
const Home = () => {
  return (
    <section className=" space-y-8 lg:space-y-16">
      <Banner />
      <AboutMe />
      <RecentProject />
      <MySkills />
      <ContactComponent />
    </section>
  );
};

export default Home;
