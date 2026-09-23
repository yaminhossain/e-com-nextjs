import { cn } from "@/utils/helper";
import Image from "next/image";
import React from "react";

interface IProductImageProps {
  className?: string;
  src: string;
}

function ProductImage({
  className,
  src,
}: IProductImageProps) {
  return (
    <div
      className={cn(
        "relative h-72 w-72 rounded-2xl bg-product-img aspect-square",
        className,
      )}
    >
      <Image
        src={src}
        fill
        alt="product-image"
        className="object-center object-contain"
      />
    </div>
  );
}

export default ProductImage;
