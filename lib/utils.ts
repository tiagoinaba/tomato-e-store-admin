import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice: (data: string) => number = (price: string) => {
  if (price.startsWith("R$")) {
    return parseFloat(price.split("$")[1]);
  }
  return +price;
};

export const fetcher = (
  ...args: [input: RequestInfo | URL, init?: RequestInit | undefined]
) => fetch(...args).then((res) => res.json());
