import { config } from "@/config";
import { TbLocation } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { IconType } from "react-icons/lib";

export type TRoutes = {
  name: string;
  pathname: string;
};
export type TMoreButtonRoute = {
  name: string;
  description: string;
  pathname: string;
  icon: IconType;
};

export const routes: TRoutes[] = [
  { name: "Home", pathname: "/" },
  { name: "My Work", pathname: "/my-projects" },
  { name: "Blog", pathname: "/blogs" },
  { name: "My Github", pathname: `${config.my_github}` },
  { name: "Contact Me", pathname: "/contact-me" },
];
export const desktopRoutes: TRoutes[] = [
  { name: "Home", pathname: "/" },
  { name: "My Work", pathname: "/my-projects" },
  { name: "Blog", pathname: "/blogs" },
];

export const moreButtonroutes: TMoreButtonRoute[] = [
  {
    name: "My Github Profile",
    description: "Explore my projects and contributions on Github",
    pathname: `${config.my_github}`,
    icon: IoLogoGithub,
  },
  {
    name: "Contact Me",
    description: "Have any Question? Feel free to reach out to me",
    pathname: "/contact-me",
    icon: TbLocation,
  },
];
