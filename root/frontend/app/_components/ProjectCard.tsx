import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  period: string;
  location?: string;
  funder?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ProjectCard({
  title,
  category,
  period,
  location,
  funder,
  description,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-700 shadow-sm">
          {category}
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.24em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>{period}</span>
          {location ? <span>{location}</span> : null}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h3>
        <p className="text-sm leading-7 text-zinc-600">{description}</p>
        {funder ? (
          <div className="rounded-3xl bg-zinc-100 px-4 py-3 text-sm text-zinc-700">
            <span className="font-semibold">Funder:</span> {funder}
          </div>
        ) : null}
      </div>
    </article>
  );
}
