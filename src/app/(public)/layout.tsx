import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner />
      <Navbar />
      {children}
    </>
  );
}
