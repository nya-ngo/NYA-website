import React from "react";
import { Check } from "lucide-react";

interface ProgrammeProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
  isReversed: boolean;
}

export default function WhatWeDo({
  id,
  title,
  description,
  features,
  image,
  icon,
  isReversed,
}: ProgrammeProps) {
  const resolvedIcon = icon?.includes(".") ? icon : `${icon}.svg`;

  return (
    <div
      className={`flex flex-col gap-12 lg:gap-24 items-center ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-3xl shadow-sm aspect-[4/3]"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="w-10 h-10 mb-6 text-[#c25934]">
          <img
            src={resolvedIcon}
            alt={`${title} icon`}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-[#c25934]"></div>
          <span className="text-sm font-semibold tracking-widest text-[#c25934] uppercase">
            Programme {id}
          </span>
        </div>

        <h3 className="text-3xl lg:text-4xl font-serif text-gray-800 mb-6">
          {title}
        </h3>

        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          {description}
        </p>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <Check className="w-5 h-5 text-gray-800 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
