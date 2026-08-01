"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
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
    <main className="bg-[#f8f2ea] py-14 text-zinc-900">
      <section className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl space-y-5 text-center pb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9c5d2f]">
            Projects
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Field-tested work, funded by trusted partners.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            From watershed restoration to women’s collectives — every project is rooted in evidence,
            ownership and long-term impact.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`group inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                  isActive
                    ? "bg-[#0f3f35] text-white border border-[#0f3f35] shadow-lg shadow-slate-300"
                    : "bg-white text-zinc-700 border border-zinc-200 hover:border-orange-500 hover:text-orange-600 hover:bg-white"
                }`}
              >
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))
          ) : (
            <div className="col-span-full rounded-[28px] border border-zinc-200 bg-white p-12 text-center text-zinc-600 shadow-sm">
              No projects found in this category yet.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
