"use client";

import { useEffect, useRef } from "react";
import { fieldWorkVideo } from "@/lib/field-media";

export function FieldWorkMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <figure className="field-photo">
      <video
        ref={videoRef}
        controls
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        poster={fieldWorkVideo.poster}
        width={fieldWorkVideo.width}
        height={fieldWorkVideo.height}
        aria-label={fieldWorkVideo.alt}
      >
        <source src={fieldWorkVideo.src} type={fieldWorkVideo.type} />
      </video>
      <figcaption>{fieldWorkVideo.caption}</figcaption>
    </figure>
  );
}
