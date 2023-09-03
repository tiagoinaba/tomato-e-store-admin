import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import defaultImg from "@/assets/produtos/ketchup.jpg";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

export const Product = ({
  className,
  imgUrl,
  name,
  price,
  id,
}: {
  className?: string;
  imgUrl?: string;
  name: string;
  price: number;
  id?: string;
}) => {
  return (
    <div
      className={cn(
        "border rounded cursor-pointer hover:bg-red-100 p-4 transition-colors duration-500 text-center flex flex-col justify-between relative",
        className
      )}
    >
      {id && (
        <Button
          className="absolute top-0 right-0 z-10 hover:bg-primary"
          size={"icon"}
        >
          <XIcon className="w-4 h-4" />
        </Button>
      )}
      <div className="relative h-3/4 rounded overflow-hidden w-full">
        <Image
          src={imgUrl ?? defaultImg}
          alt="Imagem do produto"
          fill
          style={{ objectFit: "cover" }}
          sizes={"lg"}
        />
      </div>
      <h3 className="text-lg font-semibold tracking-tight truncate">{name}</h3>
      <span>R${price}</span>
    </div>
  );
};
