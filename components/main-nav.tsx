"use client";
import { cn } from "@/lib/utils";
import {
  GanttChartSquare,
  LayoutDashboard,
  PackageSearch,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import React from "react";

export const MainNav = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      active: pathname === "/",
      label: "Dashboard",
      icon: (className: string) => <LayoutDashboard className={className} />,
    },
    // {
    //   href: "/pedidos",
    //   active: pathname === "/pedidos",
    //   label: "Pedidos",
    //   icon: (className: string) => <GanttChartSquare className={className} />,
    // },
    {
      href: "/produtos",
      active: pathname === "/produtos",
      label: "Produtos",
      icon: (className: string) => <PackageSearch className={className} />,
    },
    // {
    //   href: "/preferencias",
    //   active: pathname === "/preferencias",
    //   label: "Preferências",
    //   icon: (className: string) => <Settings className={className} />,
    // },
  ];

  return (
    <div className="flex-col flex my-auto space-y-6">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "font-medium transition-colors hover:text-primary flex items-center",
            route.active
              ? "text-primary dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.icon("w-5 h-5 mr-2")}
          {route.label}
        </Link>
      ))}
    </div>
  );
};
