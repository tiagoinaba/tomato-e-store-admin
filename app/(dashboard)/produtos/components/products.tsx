"use client";

import { fetcher } from "@/lib/utils";
import { Product } from "./product";
import useSWR from "swr";
import { Product as PrismaProduct } from "@prisma/client";
import { useProducts } from "@/hooks/use-products";
import { Skeleton } from "@/components/ui/skeleton";

const Products = () => {
  const { products, error, isLoading } = useProducts();
  return (
    <div className="grid flex-auto grid-cols-4 grid-rows-2 gap-2">
      {isLoading ? (
        <>
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
          <Skeleton className="w-full h-full rounded" />
        </>
      ) : (
        products &&
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imgUrl={JSON.parse(product.imageUrl)[0]}
          />
        ))
      )}
    </div>
  );
};

export default Products;
