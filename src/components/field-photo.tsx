import Image from "next/image";

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
      <div className="field-photo-frame">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}