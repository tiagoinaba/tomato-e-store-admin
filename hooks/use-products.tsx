import { deleteProduct } from "@/lib/api";
import { fetcher } from "@/lib/utils";
import { Product } from "@prisma/client";
import useSWR from "swr";
import useSWRMutation from "swr";

export function useProducts() {
  const { data, isLoading, error } = useSWR("/api/products", fetcher, {
    refreshInterval: 1000,
  });

  return {
    products: data as Product[],
    isLoading,
    error,
  };
}
