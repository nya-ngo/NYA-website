"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export interface GalleryPhoto {
  src: string;
  caption: string;
  description: string;
}

export interface GalleryCategory {
  title: string;
  photos: GalleryPhoto[];
}

interface Props {
  categories: GalleryCategory[];
}

export default function GalleryGrid({ categories }: Props) {
  const [lightbox, setLightbox] = useState<{
    photo: GalleryPhoto;
    index: number;
    categoryIndex: number;
  } | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        const cat = categories[lightbox.categoryIndex];
        const next = (lightbox.index + 1) % cat.photos.length;
        setLightbox({ ...lightbox, photo: cat.photos[next], index: next });
      }
      if (e.key === "ArrowLeft") {
        const cat = categories[lightbox.categoryIndex];
        const prev = (lightbox.index - 1 + cat.photos.length) % cat.photos.length;
        setLightbox({ ...lightbox, photo: cat.photos[prev], index: prev });
      }
    },
    [lightbox, categories]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const openPhoto = (photo: GalleryPhoto, index: number, categoryIndex: number) => {
    setLightbox({ photo, index, categoryIndex });
  };

  const closePhoto = () => setLightbox(null);

  const totalInCategory = lightbox
    ? categories[lightbox.categoryIndex].photos.length
    : 0;

  return (
    <>
      {categories.map((cat, catIdx) => (
        <div key={cat.title} className="gallery-category">

          {/* Red dash + uppercase title */}
          <div className="gallery-category-title">
            <span>{cat.title}</span>
          </div>

          <div className="gallery-grid">
            {cat.photos.map((photo, photoIdx) => (
              <button
                key={photo.src + photoIdx}
                id={`gallery-card-${catIdx}-${photoIdx}`}
                aria-label={`Open photo: ${photo.caption}`}
                className="gallery-card"
                onClick={() => openPhoto(photo, photoIdx, catIdx)}
                style={{ background: "none", border: "none", padding: 0, textAlign: "left" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="gallery-card-caption">{photo.caption}</div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Lightbox */}
      {lightbox && (
        <div
          id="gallery-lightbox"
          className="lightbox-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) closePhoto(); }}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${lightbox.photo.caption}`}
        >
          <div className="lightbox-modal">
            <button
              id="gallery-lightbox-close"
              className="lightbox-close"
              onClick={closePhoto}
              aria-label="Close photo"
            >
              ✕
            </button>

            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
              <Image
                src={lightbox.photo.src}
                alt={lightbox.photo.caption}
                fill
                sizes="800px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div className="lightbox-body">
              <p className="lightbox-caption-title">{lightbox.photo.caption}</p>
              <p className="lightbox-caption">{lightbox.photo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
