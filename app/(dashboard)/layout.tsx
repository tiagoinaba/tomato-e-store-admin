import { ModalProvider } from "@/components/providers/modal-provider";
import { SideNav } from "@/components/side-nav";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen">
      <SideNav />
      <div className="w-full h-full bg-slate-50">{children}</div>
      <ModalProvider />
    </main>
  );
}
