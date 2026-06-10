import { motion, AnimatePresence } from "motion/react";
import { X, Clock, Sparkles } from "lucide-react";
import { ServiceItem } from "../types";
import { SERVICES_DATA } from "../data";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceId: string) => void;
}

export default function MenuModal({ isOpen, onClose, onSelectService }: MenuModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-3xl overflow-y-auto p-4 md:p-8"
        >
          {/* Main Container */}
          <motion.div
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative w-full max-w-4xl bg-surface-container-low border border-secondary/20 p-6 md:p-12 overflow-hidden rounded-none"
          >
            {/* Elegant Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div>
                <span className="font-label text-xs tracking-[0.3em] text-secondary">
                  NAILS BY CRIS / CATÁLOGO
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-primary uppercase font-bold tracking-tighter mt-2">
                  LA COLECCION
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Cerrar catálogo"
                className="p-3 border border-secondary/20 hover:border-secondary transition-colors text-on-surface hover:text-primary outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Magazine Table of Contents Style Menu */}
            <div className="space-y-10 relative z-10">
              {SERVICES_DATA.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 items-start"
                >
                  {/* Large Serif Number */}
                  <div className="col-span-1">
                    <span className="font-display text-4xl md:text-5xl text-on-surface/10 group-hover:text-primary/30 transition-colors font-bold block leading-none">
                      {service.number}
                    </span>
                  </div>

                  {/* Service info & Dotted Leader Line */}
                  <div className="col-span-11 w-full">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="font-body font-bold text-lg md:text-xl tracking-tight text-on-surface group-hover:text-primary transition-colors uppercase">
                          {service.name}
                        </span>
                        <span className="font-label text-[10px] bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 font-bold uppercase tracking-wider">
                          {service.category}
                        </span>
                      </div>
                      
                      {/* Dotted Leader Line */}
                      <div className="hidden md:block flex-grow mx-4 border-b border-dotted border-secondary/30 group-hover:border-primary/50 transition-colors" />

                      <div className="font-display text-2xl text-secondary group-hover:text-primary transition-colors font-semibold self-end md:self-auto">
                        {service.price}
                      </div>
                    </div>

                    <p className="font-body text-sm md:text-base text-on-surface-variant/80 mt-2 max-w-2xl leading-relaxed">
                      {service.description}
                    </p>

                    {/* Metadata & CTAs */}
                    <div className="flex items-center justify-between mt-4 pb-6 border-b border-white/5">
                      <div className="flex items-center gap-2 text-xs text-on-surface-variant/60 font-label">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{service.duration}</span>
                      </div>

                      <button
                        onClick={() => onSelectService(service.id)}
                        className="flex items-center gap-1.5 font-label text-xs tracking-wider text-secondary hover:text-primary uppercase font-semibold transition-colors group-hover:underline"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        RESERVAR SERVICIO
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-12 text-center relative z-10">
              <p className="font-body text-xs text-on-surface-variant/50">
                Los precios son base y pueden variar según largo, diseño, materiales y complejidad del trabajo personalizado.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
