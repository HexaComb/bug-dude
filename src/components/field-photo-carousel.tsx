"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FieldPhoto } from "@/components/field-photo";

type FieldPhotoItem = {
  src: string;
  alt: string;
  caption?: string;
};

type FieldPhotoCarouselProps = {
  photos: readonly FieldPhotoItem[];
  ariaLabel: string;
};

const DESKTOP_VISIBLE = 3;
const AUTO_ADVANCE_MS = 6000;

function getVisibleCount(): number {
  if (typeof window === "undefined") return DESKTOP_VISIBLE;
  return window.matchMedia("(max-width: 800px)").matches ? 1 : DESKTOP_VISIBLE;
}

export function FieldPhotoCarousel({ photos, ariaLabel }: FieldPhotoCarouselProps) {
  const [visibleCount, setVisibleCount] = useState(DESKTOP_VISIBLE);
  const [pageIndex, setPageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const pageCount = Math.max(1, Math.ceil(photos.length / visibleCount));
  const clampedPageIndex = Math.min(pageIndex, pageCount - 1);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    const updateVisibleCount = () => {
      setVisibleCount(getVisibleCount());
      setPageIndex(0);
    };
    updateVisibleCount();
    mediaQuery.addEventListener("change", updateVisibleCount);
    return () => mediaQuery.removeEventListener("change", updateVisibleCount);
  }, []);

  const goToPage = useCallback(
    (nextPage: number) => {
      setPageIndex((nextPage + pageCount) % pageCount);
    },
    [pageCount],
  );

  useEffect(() => {
    if (!autoPlay || pageCount <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setPageIndex((current) => (Math.min(current, pageCount - 1) + 1) % pageCount);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [autoPlay, pageCount]);

  const pauseAutoPlay = () => setAutoPlay(false);
  const resumeAutoPlay = () => setAutoPlay(true);

  const start = clampedPageIndex * visibleCount;
  const visiblePhotos = photos.slice(start, start + visibleCount);

  return (
    <section
      className="field-photo-carousel"
      aria-label={ariaLabel}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      onFocusCapture={pauseAutoPlay}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          resumeAutoPlay();
        }
      }}
    >
      <div
        className="field-photo-carousel-track"
        data-slot-count={visiblePhotos.length}
        aria-live="polite"
      >
        {visiblePhotos.map((photo) => (
          <FieldPhoto
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            caption={photo.caption}
            sizes={
              visibleCount === 1
                ? "(max-width: 800px) 100vw, 360px"
                : "(max-width: 800px) 100vw, 33vw"
            }
          />
        ))}
      </div>

      {pageCount > 1 ? (
        <div className="field-photo-carousel-controls">
          <button
            type="button"
            className="field-photo-carousel-button"
            onClick={() => goToPage(clampedPageIndex - 1)}
            aria-label="Show previous field photos"
          >
            <ChevronLeft size={20} aria-hidden />
          </button>
          <p className="field-photo-carousel-status">
            <span className="sr-only">Photo set </span>
            {clampedPageIndex + 1} of {pageCount}
          </p>
          <button
            type="button"
            className="field-photo-carousel-button"
            onClick={() => goToPage(clampedPageIndex + 1)}
            aria-label="Show next field photos"
          >
            <ChevronRight size={20} aria-hidden />
          </button>
        </div>
      ) : null}
    </section>
  );
}
