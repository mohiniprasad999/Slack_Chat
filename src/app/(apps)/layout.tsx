import type { FC, ReactNode } from "react";
import ChatNavbar from "./chat/_components/ChatNavbar";
import ChatSidebar from "./chat/_components/ChatSidebar";

type IProps = {
  children: ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <ChatNavbar />
      <div className="flex flex-row w-full h-screen">
        <div className="w-3/12 min-w-[280px] max-w-[320px] min-h-screen pt-16 hidden lg:block overflow-y-auto">
          <ChatSidebar />
        </div>
        <div className="bg-base-100 w-full min-h-screen pt-16 overflow-y-auto">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
