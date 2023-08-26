import { Button } from "@/components/ui/button";
import { Post } from "@/components/ui/post";
import { Plus, PlusCircle } from "lucide-react";
import postImage1 from "@/assets/heinz-post-1.jpg";
import postImage2 from "@/assets/heinz-post-2.jpg";
import postImage3 from "@/assets/heinz-post-3.jpg";
import AdminBarChart from "@/components/ui/AdminBarChart";

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
  return (
    <div className="p-6 h-full flex gap-4">
      <div className="h-full bg-white w-[50%] rounded-lg shadow border transition-colors duration-500 hover:bg-red-50 p-4 flex gap-4 flex-col">
        <h1 className="text-xl font-bold">Vendas</h1>
        <div className="h-[50%]">
          <AdminBarChart />
        </div>
      </div>
      <div className="h-full w-[50%] rounded-lg shadow border transition-colors duration-500 hover:bg-red-50 p-4 flex gap-4 flex-col">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-lg">Feed</h1>
          <Button className="h-8 w-8" size={"icon"} variant={"default"}>
            <PlusCircle />
          </Button>
        </div>
        <div className="flex flex-col flex-auto gap-2">
          <Post className="" img={posts[0].img} description={posts[0].text} />
          <div className="flex gap-2">
            <Post img={posts[1].img} description={posts[1].text} />
            <Post img={posts[2].img} description={posts[2].text} />
          </div>
        </div>
      </div>
    </div>
  );
}
