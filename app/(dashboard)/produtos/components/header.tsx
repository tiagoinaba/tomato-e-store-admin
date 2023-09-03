"use client";

import { Button } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/use-modal";
import React from "react";

export const Header = () => {
  const onOpen = useStoreModal((state) => state.onOpen);

  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-2xl">Produtos</h1>
      <Button onClick={onOpen}>Criar novo produto</Button>
    </div>
  );
};
