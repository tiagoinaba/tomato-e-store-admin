import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

export const Post = ({
  img,
  description,
  className,
}: {
  img: StaticImageData;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full h-full border rounded overflow-hidden hover:bg-red-100 transition-colors duration-500",
        className
      )}
    >
      <div className="relative h-3/5">
        <Image src={img} alt="Post" fill objectFit="cover" />
      </div>
      <div className="p-4 ">
        <span className="text-xs text-muted-foreground">
          25 de agosto de 2023 às 13h46
        </span>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  );
};
