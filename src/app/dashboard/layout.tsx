"use client"

import Sidebar from "@/components/Sidebar";
import { GlobalStyle } from "@/lib/globalStyle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle/>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
