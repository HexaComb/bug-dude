import Image from "next/image";
import { fieldImageSize } from "@/lib/field-media";

type FieldPhotoProps = {
  src: string;
  alt: string;
  caption?: string;
  sizes?: string;
  preload?: boolean;
};

export function FieldPhoto({
  src,
  alt,
  caption,
  sizes = "(max-width: 800px) 100vw, 380px",
  preload = false,
}: FieldPhotoProps) {
  return (
    <figure className="field-photo">
      <Image
        src={src}
        alt={alt}
        width={fieldImageSize.width}
        height={fieldImageSize.height}
        sizes={sizes}
        preload={preload}
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
