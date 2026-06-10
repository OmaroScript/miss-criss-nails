import { motion } from "motion/react";
import { Sparkles, CalendarRange } from "lucide-react";

interface HeroProps {
  onOpenMenu: () => void;
  onScrollToBooking: () => void;
}

export default function Hero({ onOpenMenu, onScrollToBooking }: HeroProps) {
  return (
    <header className="relative min-h-[92vh] flex items-center justify-center pt-28 md:pt-36 pb-16 overflow-hidden">
      {/* Immersive background with slight scale zoom on mount */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-luminosity"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAE4Krs-kHJJUFrLEE5DaeCnI8_QQ9mXThprokuVL-rFJqVGBN9xJ8uBFcL8GD7Zcj1TO-VsLBKtl1YxC8rFLic-8JPtF41FLksMh224gdQIToHeeew2b324JB88GAL4QdN4btzdh30-xJSsF5Akd5hRLhkRracUeB6DYlsdsxOIe3DtU5mnXvCS0o4RY7HoA8G0eQ8tSPdt3ftawzjO2g214JndoobK7puj__kwxdJxkpU9Y6FjhS008S13dPyJEBMlBw6IcuGrpw")`,
        }}
      />

      {/* Extreme Dark Vignette & Color Glow gradients overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
      <div className="absolute top-1/4 right-1/10 w-[40rem] h-[40rem] bg-secondary/5 rounded-full filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/10 w-[40rem] h-[40rem] bg-primary/10 rounded-full filter blur-[120px] pointer-events-none z-0" />

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Editorial Headings */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-12 bg-secondary" />
            <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary">
              Nails By Cris Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-display text-5xl sm:text-7xl xl:text-8xl text-primary font-bold tracking-tighter leading-[0.9] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          >
            REALZA
            <br />
            <span className="text-white">TU ESTILO.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="font-display text-lg italic text-secondary/70 mt-6 tracking-wide hidden sm:block"
          >
            Escultura precisa · Glamour intenso · Detalles impecables
          </motion.p>
        </div>

        {/* Floating Luxury Glass card */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:col-span-5 w-full"
        >
          <div className="glass-card p-8 md:p-10 border border-secondary/25 relative">
            {/* Fine Light Cathing Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary/60" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary/60" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-label tracking-[0.2em] text-on-surface-variant/70 uppercase">
                Diseño de uñas · Arte personalizado
              </span>
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
            </div>

            <p className="font-body text-base md:text-lg text-on-surface/90 leading-relaxed mb-8">
              Arte exclusivo y de alta precisión para mujeres con estilo propio. En Nails By Cris cada set se diseña para destacar por su forma, textura y acabado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={onOpenMenu}
                className="w-full py-4 border border-secondary font-label text-xs font-bold tracking-[0.25em] text-secondary hover:bg-secondary hover:text-on-secondary transition-all duration-300 uppercase hover:scale-[1.02] cursor-pointer"
              >
                VER MENÚ
              </button>
              <button
                onClick={onScrollToBooking}
                className="glow-btn w-full py-4 bg-primary text-on-primary font-label text-xs font-bold tracking-[0.25em] transition-all duration-300 uppercase flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
              >
                <CalendarRange className="w-3.5 h-3.5" />
                RESERVAR CITA
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
