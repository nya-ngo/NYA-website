"use client";

import { useMemo, useState } from "react";
import ProjectCard from "../_components/ProjectCard";
import projectData from "../data/projects.json";

const { projects, categories } = projectData;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="w-full flex flex-col font-sans bg-[#FBF9F5] min-h-screen antialiased">
      {/* 1. TOP HEADER SECTION (Slightly darker background) */}
      <section className="w-full bg-[#F5F2EA] py-20 md:py-24 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col items-start text-left">
            {/* Eyebrow - Left aligned with single line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-9 bg-[#D95D39]"></div>
              <span className="text-[#D95D39] text-xs font-bold tracking-[0.2em] uppercase">
                Projects
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-[1.15] mb-6">
              Field-tested work, funded by trusted partners.
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-lg text-gray-600 font-light leading-relaxed">
              From watershed restoration to women’s collectives — every project
              is rooted in evidence, ownership and long-term impact.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER & GRID SECTION (Lighter background) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-12 md:py-16">
        {/* Left-aligned Category Buttons */}
        <div className="mb-12 flex flex-wrap items-center justify-start gap-4">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "bg-[#1C3F36] text-white border border-[#1C3F36] shadow-sm"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#D95D39] hover:text-[#D95D39]"
                }`}
              >
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-10 lg:grid-cols-2">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-gray-200 bg-white p-12 text-center text-gray-500 shadow-sm font-light">
              No projects found in this category yet.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
