"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface MoodCardProps {
  mood: {
    id: string;
    title: string;
    description: string;
    imageURL: string;
  };
  onSelect: (id: string) => void;
}

export default function MoodCard({ mood, onSelect }: MoodCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(mood.id)}
      className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${mood.imageURL})` }}
      >
      
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8">
        <div className="space-y-4">
          <h3 className="font-playfair text-3xl font-light text-white leading-tight tracking-wide">
            {mood.title}
          </h3>
          
          {/* Description - appears on hover */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="font-inter text-sm font-light text-white/90 leading-relaxed">
              {mood.description}
            </p>
          </div>

          {/* View Pairings Button - appears on hover */}
          <div
            className={`flex items-center gap-2 transition-all duration-500 ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <span className="font-inter text-sm font-light text-white tracking-wider uppercase">
              View Pairings
            </span>
            <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
