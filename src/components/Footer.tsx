export default function Footer() {
  const links = ["INSTAGRAM", "PRIVACIDAD", "TÉRMINOS", "CONTACTO", "PRENSA"];

  return (
    <footer className="bg-surface-container-lowest border-t border-secondary/20 py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Absolute faint backdrop ambient color */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10">
        
        {/* Left Side: Large Transparent Logo & Copyright */}
        <div className="lg:col-span-6 space-y-8">
          <div className="font-display text-7xl md:text-8xl font-black text-on-surface opacity-5 tracking-tighter leading-none select-none">
            NAILS
          </div>
          <p className="font-label text-[10px] text-on-tertiary-fixed-variant font-bold tracking-widest">
            © {new Date().getFullYear()} NAILS BY CRIS. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>

        {/* Right Side: Editorial navigation links aligned */}
        <div className="lg:col-span-6 flex flex-wrap gap-x-8 gap-y-4 lg:justify-end items-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => e.preventDefault()}
              className="font-label text-xs font-bold text-on-tertiary-fixed-variant hover:text-primary transition-colors tracking-widest uppercase"
            >
              {link}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
