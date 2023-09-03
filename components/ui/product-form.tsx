import React, { useState } from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import axios from "axios";
import { formatPrice } from "@/lib/utils";
import { toast } from "react-hot-toast";
import MyDropzone from "./Dropzone";
import { useUploadThing } from "@/lib/uploadthing";
import { useStoreModal } from "@/hooks/use-modal";

const formSchema = z.object({
  name: z.string().min(1, "Escreva o nome"),
  description: z.string().min(1, "Escreva uma descrição"),
  price: z.string(),
  files: z.array(z.custom<File>()),
});

const maskInput = (value: string) => {
  const regexp = new RegExp("^[0-9.]*$");
  if (value.includes("$")) {
    let toArr = value.split("$");
    if (toArr[1].match(regexp) && toArr[1].includes(".")) {
      if (value === "R$" || value === "R$0.00") return "";
      let nums = toArr[1].split(".");
      if (nums.length > 2) return "";
      let int = nums[0].split("");
      let decimal = nums[1].split("");
      if (value.startsWith("R$")) {
        if (toArr[1].length < 1) {
          toArr[1] = `0.0${toArr[1]}`;
          return toArr.join("$");
        } else if (nums[1].length > 2) {
          if (int[0] == "0") {
            int.shift();
          }
          int.push(decimal[0]);
          decimal.shift();
        } else if (nums[1].length < 2) {
          decimal.unshift(int[int.length - 1]);
          if (int.length === 1) int[0] = "0";
          else int.pop();
        }

        nums[0] = int.join("");
        nums[1] = decimal.join("");
        toArr[1] = nums.join(".");
        return toArr.join("$");
      }
    }
  } else {
    if (value === ".") return "";
    if (value.match(regexp)) {
      if (value === "R$") return "";
      if (value === "0") return "";
      if (value.startsWith("R$")) return value;
      return `R$0.0${value}`;
    }
  }

  return "";
};

export const ProductForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClose = useStoreModal((state) => state.onClose);

  const { startUpload } = useUploadThing("imageUploader", {});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      name: "",
      price: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    try {
      setIsLoading(true);

      const res = await startUpload(data.files);

      if (res) {
        const post = await axios.post(`/api/products`, {
          ...data,
          imageUrl: res.map((file) => file.url),
          price: formatPrice(data.price),
        });
        if (post.status === 200) toast.success("Criado com sucesso!");
      }
      form.reset();
      onClose();
    } catch (err) {
      toast.error("Algo deu errado!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex space-y-8 flex-col"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex space-x-8">
          <div className="space-y-8 flex-1">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    disabled={isLoading}
                    placeholder="Ketchup, Mostarda..."
                    {...field}
                  />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <Textarea
                    disabled={isLoading}
                    className="resize-none"
                    placeholder="Descrição do produto"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <FormField
              name="price"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço</FormLabel>
                  <Input
                    type="tel"
                    disabled={isLoading}
                    inputMode="numeric"
                    placeholder="R$0.00"
                    onChange={(e) => {
                      const { value } = e.target;
                      e.target.value = maskInput(value);
                      field.onChange(e);
                    }}
                    value={field.value}
                    ref={field.ref}
                  />
                </FormItem>
              )}
            />
            <FormMessage />
          </div>
          <FormField
            name="files"
            control={form.control}
            render={({ field }) => {
              return (
                <MyDropzone
                  setValue={form.setValue}
                  value={field.value}
                  onChange={field.onChange}
                />
              );
            }}
          />
        </div>
        <Button disabled={isLoading} className="" type="submit">
          Salvar
        </Button>
      </form>
    </Form>
  );
};
