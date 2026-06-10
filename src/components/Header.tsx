import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onOpenMenuCatalog: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ onOpenMenuCatalog, onScrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "SERVICIOS", target: "services" },
    { label: "GALERÍA", target: "gallery" },
    { label: "ESTUDIO", target: "studio" },
  ];

  const handleLinkClick = (target: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(target);
  };

  return (
    <>
      <nav
        id="nav-bar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out px-6 md:px-12 py-5 border-b ${
          isScrolled
            ? "bg-background/85 backdrop-blur-2xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-2xl md:text-3xl font-extrabold tracking-[-0.04em] text-primary focus:outline-none cursor-pointer"
          >
            Nails By Cris
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="font-body text-xs tracking-[0.3em] text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={onOpenMenuCatalog}
              className="font-body text-xs tracking-[0.2em] text-secondary hover:text-primary transition-colors focus:outline-none cursor-pointer uppercase"
            >
              VER CATÁLOGO
            </button>
            <button
              onClick={() => onScrollToSection("booking")}
              className="glow-btn font-body text-xs tracking-[0.2em] border border-secondary bg-primary px-6 py-3 text-on-primary font-bold uppercase transition-all duration-300 pointer-events-auto"
            >
              RESERVAR
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => onScrollToSection("booking")}
              className="font-body text-xs tracking-[0.2em] border border-secondary bg-primary px-4 py-2 text-on-primary font-bold uppercase"
            >
              CITA
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir o cerrar menú de navegación"
              className="p-2 border border-white/15 text-on-surface hover:text-primary transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Curtain Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-3xl pt-28 px-8 flex flex-col justify-between pb-12"
          >
            <div className="space-y-8 flex flex-col">
              {navLinks.map((link, index) => (
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className="font-display text-4xl text-left tracking-tight text-on-surface hover:text-primary uppercase flex items-center justify-between group py-2"
                >
                  <span className="font-bold">{link.label}</span>
                  <ArrowUpRight className="w-6 h-6 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.24 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenMenuCatalog();
                }}
                className="font-display text-4xl text-left tracking-tight text-secondary hover:text-primary uppercase flex items-center justify-between group py-2"
              >
                <span className="font-bold">CATÁLOGO</span>
                <ArrowUpRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>

            {/* Mobile Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="border-t border-secondary/15 pt-8 space-y-4"
            >
              <div className="font-display text-xl text-primary font-bold">Nails By Cris</div>
              <p className="font-body text-xs text-on-surface-variant/70 leading-relaxed">
                Arte exclusivo para uñas que expresan tu estilo con precisión.
              </p>
              <div className="flex space-x-6 pt-2">
                <a href="#" className="font-label text-xs text-secondary tracking-wider">INSTAGRAM</a>
                <a href="#" className="font-label text-xs text-on-surface-variant tracking-wider">CONTACTO</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
