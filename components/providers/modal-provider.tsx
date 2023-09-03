"use client";

import { useEffect, useState } from "react";
import { ProductModal } from "../modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ProductModal />
    </>
  );
};
