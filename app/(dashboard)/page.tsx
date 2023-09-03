"use client";

import postImage1 from "@/assets/heinz-post-1.jpg";
import postImage2 from "@/assets/heinz-post-2.jpg";
import postImage3 from "@/assets/heinz-post-3.jpg";
import mostarda from "@/assets/produtos/mostarda.webp";
import AdminBarChart from "@/components/ui/AdminBarChart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Post } from "@/components/ui/post";
import { Product } from "@/components/ui/product";
import { useProducts } from "@/hooks/use-products";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    img: postImage1,
    text: "Enjoou do snack de sempre? A dica pra dar aquele up é finalizar com a minha nova Mostarda Brown. Experimenta aí e depois me conta o que achou! #NinguémFazMelhor",
  },
  {
    img: postImage2,
    text: "Sua terça-feira merece um jantarzinho especial com o meu Barbecue SIM! Comenta aqui a sua combinação favorita com ele. #NinguémFazMelhor",
  },
  {
    img: postImage3,
    text: "🚨 URGENTE 🚨 A notícia que não sai da boca do povo (literalmente): minha Maionese foi eleita a número 1 do Brasil pelo @paladar @estadao. E você, já comprovou? #NinguémFazMelhor",
  },
];

export default function Home() {
  const { products, isLoading, error } = useProducts();
  return (
    <div className="p-6 h-full flex gap-4">
      <div className="h-full bg-white w-1/2 rounded-lg shadow border transition-colors duration-500 hover:bg-red-50 p-4 flex gap-4 flex-col">
        <h1 className="text-xl font-bold text-card-foreground">Vendas</h1>
        <div className="h-[50%] flex flex-col gap-4 -ml-6">
          <h2 className="flex gap-2 items-baseline font-bold text-3xl ml-6">
            R$673,00{" "}
            <Badge className="bg-green-500 hover:bg-green-600">
              <span className="flex text-sm items-center -ml-1 text-white">
                <TriangleUpIcon />
                +5.47%
              </span>
            </Badge>
          </h2>
          <AdminBarChart />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 flex-auto gap-4">
          <div className="hover:bg-red-100 transition-colors duration-500 border shadow-sm rounded p-4 flex flex-col">
            <h3 className="font-bold text-muted-foreground">Faturamento</h3>
            <h2 className="font-bold text-3xl my-auto">R$1000,00</h2>
          </div>
          <div className="hover:bg-red-100 transition-colors duration-500 border shadow-sm rounded p-4 flex flex-col">
            <h3 className="font-bold text-muted-foreground">Custos</h3>
            <h2 className="font-bold text-3xl my-auto">R$327,00</h2>
          </div>
          <div className="hover:bg-red-100 transition-colors duration-500 border shadow-sm rounded p-4 flex flex-col">
            <h3 className="font-bold text-muted-foreground">Total de vendas</h3>
            <h2 className="font-bold text-3xl my-auto">292</h2>
          </div>
          <div className="hover:bg-red-100 transition-colors duration-500 border shadow-sm rounded p-4 flex flex-col">
            <h3 className="font-bold text-muted-foreground">Nº de clientes</h3>
            <h2 className="font-bold text-3xl my-auto">168</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <div className="h-[50%] rounded-lg shadow border transition-colors duration-500 hover:bg-red-50 p-4 flex gap-4 flex-col self-start">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Feed</h1>
            <Button className="h-8 w-8" size={"icon"} variant={"default"}>
              <PlusCircle />
            </Button>
          </div>
          <div className="flex flex-col h-full">
            <div className="flex flex-auto gap-2">
              <Post img={posts[1].img} description={posts[1].text} />
              <Post img={posts[2].img} description={posts[2].text} />
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow border transition-colors duration-500 hover:bg-red-50 p-4 flex gap-4 flex-col flex-auto">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Produtos</h1>
            <Link
              href={"/produtos"}
              className="hover:text-red-500 text-muted-foreground transition-colors"
            >
              ver todos
            </Link>
          </div>
          <div className="flex gap-2 h-full">
            {products &&
              products.map(({ imageUrl, ...rest }) => (
                <Product imgUrl={JSON.parse(imageUrl)[0]} {...rest} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
