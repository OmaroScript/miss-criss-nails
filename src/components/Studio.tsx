import { motion } from "motion/react";
import { ShieldCheck, Music, Wine, Sun } from "lucide-react";

export default function Studio() {
  const experiences = [
    {
      icon: <Wine className="w-5 h-5 text-secondary" />,
      title: "ATENCION PREMIUM",
      description: "Bebidas de cortesía y un ambiente cómodo para que disfrutes cada parte de tu cita."
    },
    {
      icon: <Music className="w-5 h-5 text-secondary" />,
      title: "AMBIENTE RELAJANTE",
      description: "Música seleccionada para crear una experiencia tranquila y acorde a tu mood."
    },
    {
      icon: <Sun className="w-5 h-5 text-secondary" />,
      title: "LUZ DE DETALLE",
      description: "Iluminación pensada para apreciar el color real, el brillo y cada acabado de tus uñas."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
      title: "HIGIENE PROFESIONAL",
      description: "Procesos de esterilización cuidadosos y productos seleccionados para un servicio confiable."
    },
  ];

  return (
    <section id="studio" className="py-24 md:py-32 px-6 md:px-12 bg-background relative overflow-hidden border-t border-white/5">
      {/* Absolute floating accent grids */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-secondary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left column: Space mood overview text */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-label text-xs tracking-[0.4em] text-secondary font-bold block uppercase">
            El estudio Nails By Cris
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase font-bold leading-[1.05]">
            EL
            <br />
            <span className="text-primary italic font-black">ESTUDIO</span>
          </h2>

          <div className="w-12 h-[2px] bg-secondary my-6" />

          <p className="font-body text-base text-on-surface-variant/90 leading-relaxed">
            Nails By Cris es un espacio de diseño de uñas donde cada servicio se trabaja con detalle, técnica y estilo. Nuestro estudio está pensado para que vivas una experiencia cómoda, cuidada y enfocada en el resultado que quieres lucir.
          </p>

          <p className="font-body text-sm text-on-surface-variant/60 leading-relaxed italic">
            "Creemos que las manos hablan de tu estilo: su forma, color y acabado pueden transformar por completo tu imagen." - Nails By Cris
          </p>
        </div>

        {/* Right column: Curated space amenities grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="glass-card p-6 md:p-8 border border-white/5 hover:border-secondary/20 transition-all duration-300"
            >
              <div className="p-3 bg-secondary/5 border border-secondary/15 w-fit rounded-none mb-4">
                {exp.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight mb-2">
                {exp.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-on-surface-variant/80 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
