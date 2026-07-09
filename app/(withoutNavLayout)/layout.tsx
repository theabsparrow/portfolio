import { ReactNode } from "react";

const WithoutNavLayout = ({ children }: { children: ReactNode }) => {
  return <section>{children}</section>;
};

export default WithoutNavLayout;
