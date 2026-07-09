

import AboutMe from "@/component/home/AboutMe.tsx/AboutMe";
import Banner from "@/component/home/banner/Banner";
import ContactComponent from "@/component/home/contactComponent/ContactComponent";
import MySkills from "@/component/home/mySkills/MySkills";
import RecentProject from "@/component/home/recentProject/RecentProject";



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
