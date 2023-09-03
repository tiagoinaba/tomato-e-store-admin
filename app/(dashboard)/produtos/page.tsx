import { Product as PrismaProduct } from "@prisma/client";
import { Suspense, lazy } from "react";
import { Header } from "./components/header";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import Products from "./components/products";

export default async function Produtos() {
  return (
    <div className="p-6 h-full flex gap-4">
      <div className="flex-auto flex flex-col p-8 bg-white border rounded space-y-8">
        <Header />
        <Products />
      </div>
    </div>
  );
}
