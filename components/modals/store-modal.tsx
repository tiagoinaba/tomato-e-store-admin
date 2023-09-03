"use client";

import { useStoreModal } from "@/hooks/use-modal";
import { Modal } from "../ui/modal";
import { z } from "zod";
import { ProductForm } from "../ui/product-form";

export const ProductModal = () => {
  const { isOpen, onClose } = useStoreModal();

  return (
    <Modal
      title="Criar produto"
      description="Crie um novo produto"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ProductForm />
    </Modal>
  );
};
