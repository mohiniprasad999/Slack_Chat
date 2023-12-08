import type { FC, ReactNode } from "react";
import type { Metadata } from "next";
import StoreProvider from "@/lib/StoreProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slac Chat",
  description: "No nonsense official chat app",
};

type IProps = {
  children: ReactNode;
};

const RootLayout: FC<IProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
