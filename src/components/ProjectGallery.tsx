"use client";

import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  altText: string;
}

export default function ProjectGallery({ images, altText }: ProjectGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }));
  };

  const renderPlaceholder = (label: string) => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-card/25 border border-border rounded-xl aspect-video p-6 text-center text-muted">
      <ImageIcon size={32} className="mb-2 text-muted-darker animate-pulse" />
      <span className="text-xs font-semibold text-white/85">{label}</span>
      <span className="text-[10px] text-muted-darker mt-1">Image not loaded yet</span>
    </div>
  );

  return (
    <div className="w-full">
      {/* 1. Mobile Layout: Horizontal Swipeable Carousel (visible on < sm screens) */}
      <div className="block sm:hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-2">
          {images.map((img, i) => (
            <div key={i} className="min-w-full snap-center aspect-video rounded-xl overflow-hidden relative">
              {!imgErrors[i] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={img}
                  alt={`${altText} Screenshot ${i + 1}`}
                  onError={() => handleImageError(i)}
                  className="w-full h-full object-cover border border-border rounded-xl"
                />
              ) : (
                renderPlaceholder(`Screenshot ${i + 1}`)
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                activeIdx === i ? "w-4 bg-primary" : "w-1.5 bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. Tablet Layout: Vertical Stacked Images (visible on sm to lg screens) */}
      <div className="hidden sm:flex lg:hidden flex-col gap-6">
        {images.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden aspect-video relative">
            {!imgErrors[i] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img}
                alt={`${altText} Screenshot ${i + 1}`}
                onError={() => handleImageError(i)}
                className="w-full h-full object-cover border border-border rounded-xl"
              />
            ) : (
              renderPlaceholder(`Screenshot ${i + 1}`)
            )}
          </div>
        ))}
      </div>

      {/* 3. Desktop Layout: Primary Showcase with Thumbnails (visible on lg and up) */}
      <div className="hidden lg:flex flex-col gap-4">
        {/* Active Display */}
        <div className="rounded-xl overflow-hidden aspect-video relative">
          {!imgErrors[activeIdx] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={images[activeIdx]}
              alt={`${altText} Primary Display`}
              onError={() => handleImageError(activeIdx)}
              className="w-full h-full object-cover border border-border rounded-xl"
            />
          ) : (
            renderPlaceholder(`Showcase Image ${activeIdx + 1}`)
          )}
        </div>

        {/* Thumbnails Row */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, i) => {
            const isActive = activeIdx === i;
            return (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`rounded-lg overflow-hidden aspect-video transition-all relative border ${
                  isActive ? "border-primary ring-2 ring-primary/25 scale-[1.01]" : "border-border hover:border-muted"
                }`}
              >
                {!imgErrors[i] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={img}
                    alt={`${altText} Thumbnail ${i + 1}`}
                    onError={() => handleImageError(i)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-card/10">
                    <ImageIcon size={18} className="text-muted-darker" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
