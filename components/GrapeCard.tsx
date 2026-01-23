"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, ChevronUp } from "lucide-react";
import { Grape } from "@/lib/grapes";

interface GrapeCardProps {
  grape: Grape | null;
  onClose?: () => void;
  initialOpen?: boolean;
  onGrapeSelect?: (grapeId: string) => void;
}

export default function GrapeCard({ grape, onClose, initialOpen = false, onGrapeSelect }: GrapeCardProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  // Don't render if no grape is provided
  if (!grape) return null;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.y > threshold) {
      setIsOpen(false);
      onClose?.();
    } else if (info.offset.y < -threshold) {
      setIsOpen(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end pointer-events-none px-8">
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/40 pointer-events-auto"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? 0 : "85%" }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.2 }}
        onDragEnd={handleDragEnd}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
        }}
        className="relative w-full bg-[#F5F0E8] rounded-t-3xl shadow-2xl pointer-events-auto max-h-[90vh] overflow-hidden flex flex-col touch-pan-y"
      >
        {/* Drag Handle */}
        <div className="flex flex-col items-center pt-4 pb-3 cursor-grab active:cursor-grabbing">
          <div className="w-12 h-1.5 bg-[#8B1A1A]/30 rounded-full mb-3" />
          <button
            onClick={handleToggle}
            className="p-2 text-[#8B1A1A] hover:bg-[#8B1A1A]/10 active:bg-[#8B1A1A]/20 rounded-full transition-colors touch-manipulation"
            aria-label={isOpen ? "Minimize" : "Expand"}
          >
            <ChevronUp
              className={`h-5 w-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Header - Grape Name */}
        <div className="px-4 md:px-6 pb-4 border-b border-[#8B1A1A]/20">
          <div className="flex items-start justify-between gap-2">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B1A1A] leading-tight">
              {grape.name}
            </h1>
            {onClose && (
              <button
                onClick={handleClose}
                className="p-2 text-[#8B1A1A] hover:bg-[#8B1A1A]/10 active:bg-[#8B1A1A]/20 rounded-full transition-colors flex-shrink-0 touch-manipulation"
                aria-label="Close"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            )}
          </div>
          <p className="mt-2 font-inter text-xs md:text-sm text-[#8B1A1A]/70">
            {grape.origin}
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-6">
          {/* Polaroid-style Image */}
          <div className="mb-8 flex justify-center px-2">
            <div className="relative bg-white p-3 pb-6 shadow-[0_8px_24px_rgba(139,26,26,0.2)] max-w-xs w-full">
              {/* Image placeholder - replace with actual image */}
              <div className="aspect-square bg-gradient-to-br from-[#8B1A1A]/10 via-[#8B1A1A]/5 to-[#F5F0E8] flex items-center justify-center overflow-hidden">
                {grape.imageUrl ? (
                  <img
                    src={grape.imageUrl}
                    alt={grape.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-6">
                    <div className="text-5xl md:text-6xl mb-3">🍇</div>
                    <p className="font-playfair text-[#8B1A1A] text-base md:text-lg">
                      {grape.name}
                    </p>
                  </div>
                )}
              </div>
              {/* Polaroid bottom label */}
              <div className="mt-3 text-center border-t border-[#8B1A1A]/10 pt-3">
                <p className="font-playfair text-[#8B1A1A] text-xs md:text-sm italic">
                  {grape.name}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="font-inter text-base text-gray-800 leading-relaxed">
              {grape.description}
            </p>
          </div>

          {/* History Section */}
          <div className="mb-6 md:mb-8">
            <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#8B1A1A] mb-4 md:mb-6">
              History
            </h2>
            <div className="relative pl-6 md:pl-8">
              {/* Vertical Dashed Line */}
              <div className="absolute left-2 md:left-3 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#8B1A1A]/30" />

              {/* History Items */}
              <div className="space-y-5 md:space-y-6">
                {grape.history.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Dot on the line */}
                    <div className="absolute -left-[21px] md:-left-[29px] top-1.5 md:top-2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#8B1A1A] border-2 border-[#F5F0E8]" />

                    {/* Content */}
                    <div>
                      <div className="font-playfair text-base md:text-lg font-semibold text-[#8B1A1A] mb-1">
                        {item.year}
                      </div>
                      <p className="font-inter text-xs md:text-sm text-gray-700 leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Characteristics */}
          <div className="mb-6">
            <h3 className="font-playfair text-xl font-semibold text-[#8B1A1A] mb-3">
              Characteristics
            </h3>
            <div className="flex flex-wrap gap-2">
              {grape.characteristics.map((char, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-[#8B1A1A] text-[#F5F0E8] rounded-full text-sm font-inter"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Regions */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-[#8B1A1A] mb-3">
              Key Regions
            </h3>
            <div className="flex flex-wrap gap-2">
              {grape.regions.map((region, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-[#8B1A1A]/10 text-[#8B1A1A] border border-[#8B1A1A]/20 rounded-full text-sm font-inter"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
