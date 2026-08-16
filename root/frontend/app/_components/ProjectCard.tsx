"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectData } from "./ProjectModal";

interface ProjectCardProps extends ProjectData {
  onClick?: () => void;
}

export default function ProjectCard({
  title,
  category,
  period,
  location,
  funder,
  description,
  imageSrc,
  imageAlt,
  onClick,
}: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-zinc-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#D95D39]/40 focus:outline-none focus:ring-2 focus:ring-[#D95D39]/50 flex flex-col justify-between"
    >
      <div>
        <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <div className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-xs px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-700 shadow-sm">
            {category}
          </div>

          <div className="absolute right-4 bottom-4 flex items-center gap-1 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-zinc-900 shadow-md opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span>Explore Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D95D39]" />
          </div>
        </div>

        <div className="space-y-4 p-6 sm:p-7">
          <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.24em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-medium text-[#D95D39]">{period}</span>
            {location ? <span className="truncate">{location}</span> : null}
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-zinc-900 group-hover:text-[#C1502E] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-600 font-light line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 flex flex-col gap-3">
        {funder ? (
          <div className="rounded-2xl bg-[#F5F2EA] px-4 py-2.5 text-xs text-zinc-700 flex items-center justify-between">
            <span className="text-gray-500 font-medium">Partner:</span>
            <span className="font-semibold text-zinc-900">{funder}</span>
          </div>
        ) : null}

        <div className="flex items-center justify-between text-xs font-semibold text-[#D95D39] pt-2 group-hover:underline">
          <span>Click to see full impact & outcomes</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
}

