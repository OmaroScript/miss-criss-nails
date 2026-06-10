import { useRef, useState, MouseEvent } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_DATA } from "../data";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_DATA.length);
    }
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Caption Header */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <span className="font-label text-xs tracking-[0.4em] text-secondary/80 uppercase mb-3 text-center">
            Portafolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary uppercase tracking-tighter text-center font-bold">
            LA
            <br />
            <span className="text-white italic">GALERÍA</span>
          </h2>
          <div className="w-[1px] h-16 bg-secondary/45 mt-8" />
        </div>

        {/* Gallery Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {GALLERY_DATA.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onOpen={() => setActiveImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Deluxe Lightbox Carousel Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 p-3 border border-secondary/20 hover:border-secondary text-white hover:text-primary hover:bg-white/5 transition-colors z-50 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-3 border border-secondary/10 hover:border-secondary text-white hover:text-primary rounded-none transition-colors z-50 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-3 border border-secondary/10 hover:border-secondary text-white hover:text-primary rounded-none transition-colors z-50 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full flex flex-col items-center relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square max-h-[70vh] border border-secondary/40 overflow-hidden">
                <img
                  src={GALLERY_DATA[activeImageIndex].image}
                  alt={GALLERY_DATA[activeImageIndex].title}
                  className="w-full h-full object-cover filter contrast-110"
                />
              </div>

              {/* Caption Metadata */}
              <div className="text-center mt-6 max-w-lg">
                <span className="font-label text-xs tracking-[0.3em] text-secondary font-bold uppercase block mb-2">
                  {GALLERY_DATA[activeImageIndex].technique}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-white font-extrabold uppercase">
                  {GALLERY_DATA[activeImageIndex].title}
                </h3>
                <p className="font-body text-xs text-on-surface-variant/70 mt-2">
                  COLECCIÓN NAILS BY CRIS · PORTAFOLIO DE ESTUDIO
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onOpen: () => void;
}

function GalleryCard({ item, index, onOpen }: GalleryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      data-scroll-active={isInView}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={onOpen}
      className="relative aspect-square group cursor-pointer overflow-hidden border border-secondary/15"
    >
      <img
        src={item.image}
        alt={item.title}
        className="scroll-activate-image w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
      />

      <div className="scroll-activate-border-secondary absolute inset-0 border border-secondary/10 pointer-events-none group-hover:border-secondary/30 transition-colors duration-700 m-2" />
      <div className="scroll-activate-border-primary absolute inset-0 border border-transparent pointer-events-none group-hover:border-primary/20 transition-colors duration-700 m-4" />

      <div className="scroll-activate-gallery-overlay absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-10">
        <span className="font-label text-[10px] text-secondary tracking-widest font-bold uppercase mb-1">
          {item.technique}
        </span>
        <h3 className="font-display text-xl text-white font-semibold flex items-center justify-between">
          <span>{item.title}</span>
          <Maximize2 className="w-4 h-4 text-secondary hover:text-primary transition-colors" />
        </h3>
      </div>
    </motion.div>
  );
}
