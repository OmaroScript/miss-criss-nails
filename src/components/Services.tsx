import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Sparkles } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const acrylicRef = useRef<HTMLDivElement>(null);
  const gelishRef = useRef<HTMLDivElement>(null);
  const isAcrylicInView = useInView(acrylicRef, { amount: 0.55 });
  const isGelishInView = useInView(gelishRef, { amount: 0.55 });

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden bg-background">
      {/* Decorative vertical lines and accents */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-secondary/5 pointer-events-none" />

      {/* Heading */}
      <div className="flex flex-col items-center mb-16 md:mb-24 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-label text-xs tracking-[0.4em] text-secondary/80 uppercase mb-3"
        >
          Servicios destacados
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-primary uppercase tracking-tighter text-center font-bold"
        >
          TÉCNICAS
          <br />
          <span className="text-white italic">A TU MEDIDA</span>
        </motion.h2>
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[1px] bg-secondary/45 mt-8"
        />
      </div>

      {/* Two Columns Offset Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Service 1: Architecture Acrylic Sculpting */}
        <motion.div
          ref={acrylicRef}
          data-scroll-active={isAcrylicInView}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 relative group cursor-pointer"
          onClick={() => onSelectService("acrylic")}
        >
          {/* Image Container with Custom Hover Reveal Grayscale to Color */}
          <div className="h-[350px] md:h-[500px] overflow-hidden relative border border-secondary/15">
            <div className="scroll-activate-overlay absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10" />
            <img
              alt="Arte de uñas acrílicas esculpidas"
              className="scroll-activate-image w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] grayscale group-hover:grayscale-0 filter contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg84_7klLvTokkJZOYKNf9Axx0JCB7knIQ01r9j2NG41GVi4_G2ocjcHibhFtpJ2DHf0FRCOB7EEW176TkTyFGzhan_NKnt18jkGFoQtk0ciTSHrD4LNAkqpfiJRCPU5YfvDhaA_dOMeYQ3Gv_P8hsQxEvIPQXEPjaTAMbOcOGARhZmpj4dfTaxCVR2-RKOCn5mwP1p_fwH9c1e6vUEtzFPkpbh6mPxu1vJCBinq1h4kUHgj47Xo4iTUsTixYl8KAve1zoXg8sJKE"
            />
          </div>

          {/* Overlapping Glass Card */}
          <div className="scroll-activate-card absolute bottom-[-30px] md:bottom-[-40px] left-4 md:left-8 right-4 md:right-auto md:w-5/6 glass-card p-6 md:p-8 border border-secondary/20 transform group-hover:translate-y-[-5px] transition-transform duration-500">
            <span className="font-label text-xs tracking-[0.25em] text-secondary font-bold block mb-2">
              01 / ARQUITECTURA
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-3 tracking-tight">
              ESCULTURA ACRÍLICA
            </h3>
            <p className="font-body text-sm md:text-base text-on-surface-variant/90 leading-relaxed mb-4">
              Perfección estructural para largos extremos, formas personalizadas y balances impecables.
            </p>
            <span className="scroll-activate-text inline-flex items-center gap-2 text-xs font-label tracking-wider text-secondary uppercase font-bold group-hover:text-primary transition-colors">
              <Sparkles className="w-3 h-3" /> ELEGIR TECNICA
            </span>
          </div>
        </motion.div>

        {/* Service 2: Endurance Gelish Finish (Offset Right) */}
        <motion.div
          ref={gelishRef}
          data-scroll-active={isGelishInView}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 lg:mt-32 mt-16 relative group cursor-pointer"
          onClick={() => onSelectService("gelish")}
        >
          {/* Image Container with Custom Hover Reveal Grayscale to Color */}
          <div className="h-[400px] md:h-[600px] overflow-hidden relative border border-secondary/15">
            <div className="scroll-activate-overlay absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10" />
            <img
              alt="Acabado gelish en unas"
              className="scroll-activate-image w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] grayscale group-hover:grayscale-0 filter brightness-95"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLXQioE4wA9-bvtHtNP7YxKLJHAOMdTtB2tCu0QMA6GZB4XN2bSASNnB5zPN4-3dTUo_s9ypd8acQ2DArg95SFH9RGE07N95gGkcYfD4UZSwdsKiN8oB9J8_oDxdmD3nJflM4rXKT9pJnSHRGiXr_517dG-cGOfF7xzqYAj4N8aO8Y_tOOveZ3EWSP2PtsY-YXIwnauJlYAGFMSPjk6sb5-3mJsrk8hBKQHZxZCithb8bgGBvRuFSLaeRs-YDi4zzqYKN-ivoEEmg"
            />
          </div>

          {/* Overlapping Glass Card on Top Right */}
          <div className="scroll-activate-card absolute top-4 md:top-8 right-[-10px] md:right-[-30px] left-4 md:left-auto md:w-11/12 glass-card p-6 md:p-8 border border-secondary/20 transform group-hover:translate-y-[-5px] transition-transform duration-500">
            <span className="font-label text-xs tracking-[0.25em] text-secondary font-bold block mb-2">
              02 / DURACIÓN
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-3 tracking-tight">
              ACABADO GELISH
            </h3>
            <p className="font-body text-sm md:text-base text-on-surface-variant/90 leading-relaxed mb-4">
              Transparencia tipo cristal, resistente y de alto brillo con detalles metálicos.
            </p>
            <span className="scroll-activate-text inline-flex items-center gap-2 text-xs font-label tracking-wider text-secondary uppercase font-bold group-hover:text-primary transition-colors">
              <Sparkles className="w-3 h-3" /> ELEGIR TECNICA
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
