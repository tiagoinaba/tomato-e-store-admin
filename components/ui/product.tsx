import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import defaultImg from "@/assets/produtos/ketchup.jpg";

export const Product = ({
  className,
  imgSrc,
  name,
  price,
}: {
  className?: string;
  imgSrc?: StaticImageData;
  name: string;
  price: number;
}) => {
  return (
    <div
      className={cn(
        "border rounded flex-auto cursor-pointer hover:bg-red-100 p-4 transition-colors duration-500 text-center flex flex-col justify-between",
        className
      )}
    >
      <div className="relative h-3/4 rounded overflow-hidden w-full">
        <Image
          src={imgSrc ?? defaultImg}
          alt="Imagem do produto"
          fill
          style={{ objectFit: "cover", objectPosition: "0% 80%" }}
        />
      </div>
      <h3 className="text-lg font-semibold tracking-tight truncate">{name}</h3>
      <span>R${price}</span>
    </div>
  );
};
