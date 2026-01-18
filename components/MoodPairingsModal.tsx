"use client";

import { X, Wine, UtensilsCrossed } from "lucide-react";
import { Mood } from "@/lib/moods";
import { IoIosWine } from "react-icons/io";

interface MoodPairingsModalProps {
  mood: Mood;
  onClose: () => void;
}

export default function MoodPairingsModal({ mood, onClose }: MoodPairingsModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background rounded-sm border border-primary/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-accent/60 hover:text-accent transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div
          className="relative h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${mood.imageURL})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/50 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-8">
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white tracking-wide mb-3">
              {mood.title}
            </h2>
            <p className="font-inter text-base font-light text-white/90 max-w-2xl">
              {mood.description}
            </p>
          </div>
        </div>

        {/* Pairings Content */}
        <div className="p-8 md:p-12 space-y-8">
          <div className="text-center space-y-3">
            <h3 className="font-playfair text-3xl font-light text-primary tracking-wide">
              Suggested Pairings
            </h3>
            <div className="mx-auto h-px w-24 bg-secondary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mood.pairings.map((pairing, index) => (
              <div
                key={index}
                className="border border-primary/20 bg-white/30 rounded-sm p-6 space-y-4 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <IoIosWine className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-playfair text-xl font-medium text-primary mb-1">
                      {pairing.wine}
                    </h4>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="rounded-full bg-secondary/20 p-2">
                        <UtensilsCrossed className="h-4 w-4 text-secondary" />
                      </div>
                      <span className="font-inter text-base font-light text-accent">
                        {pairing.food}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
