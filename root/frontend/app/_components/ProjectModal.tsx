"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Building2,
  Tag,
  CheckCircle2,
  Target,
  Users2,
  Compass,
  X,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

export interface ProjectData {
  id?: string;
  title: string;
  category: string;
  period: string;
  location?: string;
  funder?: string;
  status?: string;
  description: string;
  longDescription?: string;
  beneficiaries?: string;
  approach?: string;
  objectives?: string[];
  highlights?: string[];
  imageSrc: string;
  imageAlt: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/65 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto w-full custom-scrollbar">
          {/* Hero Image Section */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-100">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt || project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 850px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Badges on Hero */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D95D39] text-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Tag className="w-3.5 h-3.5" />
                {project.category}
              </span>
              {project.status && (
                <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-md text-[#1C3F36] px-3.5 py-1 text-xs font-semibold shadow-sm">
                  {project.status}
                </span>
              )}
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 md:p-10 space-y-8 bg-white">
            {/* Title & Metadata */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-3">
                <span className="h-0.5 w-6 bg-[#D95D39]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D95D39]">
                  Project Overview
                </span>
              </div>

              <h2
                id="project-modal-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1A1A1A] leading-tight mb-5"
              >
                {project.title}
              </h2>

              {/* Quick Details Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F5F2EA] border border-gray-200/80">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Calendar className="w-4 h-4 text-[#D95D39] shrink-0" />
                  <div>
                    <span className="text-[11px] block uppercase font-medium text-gray-400">
                      Timeline
                    </span>
                    <span className="font-medium text-[#1A1A1A]">{project.period}</span>
                  </div>
                </div>

                {project.location && (
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-[#D95D39] shrink-0" />
                    <div>
                      <span className="text-[11px] block uppercase font-medium text-gray-400">
                        Location
                      </span>
                      <span className="font-medium text-[#1A1A1A]">{project.location}</span>
                    </div>
                  </div>
                )}

                {project.funder && (
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Building2 className="w-4 h-4 text-[#D95D39] shrink-0" />
                    <div>
                      <span className="text-[11px] block uppercase font-medium text-gray-400">
                        Funded By
                      </span>
                      <span className="font-medium text-[#1A1A1A]">{project.funder}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Narrative / Description */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold uppercase tracking-wider text-[#1C3F36] flex items-center gap-2">
                About the Initiative
              </h3>
              <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Target Beneficiaries & Approach */}
            {(project.beneficiaries || project.approach) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.beneficiaries && (
                  <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-xs">
                    <div className="flex items-center gap-2 text-[#1C3F36] font-semibold text-sm mb-2">
                      <Users2 className="w-4 h-4 text-[#D95D39]" />
                      <span>Target Beneficiaries</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {project.beneficiaries}
                    </p>
                  </div>
                )}

                {project.approach && (
                  <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-xs">
                    <div className="flex items-center gap-2 text-[#1C3F36] font-semibold text-sm mb-2">
                      <Compass className="w-4 h-4 text-[#D95D39]" />
                      <span>Methodology & Approach</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <div className="rounded-2xl bg-[#FBF9F5] border border-gray-200/90 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C3F36] flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-[#D95D39]" />
                  Key Objectives
                </h3>
                <ul className="space-y-3">
                  {project.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-700 font-light">
                      <span className="h-2 w-2 rounded-full bg-[#D95D39] shrink-0 mt-2" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Impact Highlights / Milestones */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="rounded-2xl bg-[#1C3F36]/5 border border-[#1C3F36]/15 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C3F36] flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3F36]" />
                  Impact & Key Achievements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-gray-200/80 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions Bar */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/donate"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full bg-[#C1502E] hover:bg-[#a64022] text-white px-6 py-3 text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Support This Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-full border border-gray-300 hover:border-gray-400 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
