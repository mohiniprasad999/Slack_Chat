import TopNavbar from "@/components/TopNavbar";
import type { FC, ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </>
  );
};

export default Layout;
