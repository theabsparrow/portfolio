import { IconType } from "react-icons/lib";

export type TTheme = "system" | "dark" | "light";
export type TThemeItem = {
    name: string;
    icon: IconType;
    value: TTheme;
}