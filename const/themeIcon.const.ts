import { TThemeItem } from "@/types/navbar.types";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { TiDeviceDesktop } from "react-icons/ti";

export const themeIcon: TThemeItem[] = [
  { name: "System", icon: TiDeviceDesktop, value: "system" },
  { name: "Dark", icon: MdOutlineDarkMode, value: "dark" },
  { name: "Light", icon: MdOutlineLightMode, value: "light" },
];
