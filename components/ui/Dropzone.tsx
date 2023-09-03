import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UseFormSetValue } from "react-hook-form";

type DropzoneProps = {
  className?: string;
  onChange: (...event: any[]) => void;
  value: File[];
  setValue: UseFormSetValue<any>;
};

export default function MyDropzone({
  className,
  onChange,
  value,
  setValue,
}: DropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue("files", acceptedFiles);
      setFiles((prev) => [
        ...prev,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    },
    [setValue]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);

  return (
    <div className="flex flex-1 flex-col gap-2">
      <div
        {...getRootProps({
          className: "border rounded outline-primary p-8",
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Solte as imagens aqui...</p>
        ) : (
          <p>Arraste imagens para cá, ou clique para selecioná-las</p>
        )}
      </div>
      <div className="flex-auto grid grid-cols-2 rounded border gap-1 p-1">
        {files.map((file) => (
          <div key={file.preview} className="relative">
            <Image
              src={file.preview}
              onLoad={() => URL.revokeObjectURL(file.preview)}
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
