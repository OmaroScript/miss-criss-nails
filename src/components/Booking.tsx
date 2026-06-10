import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, CheckCircle2, Calendar, Clock, Inbox } from "lucide-react";
import { SERVICES_DATA, CALENDAR_DAYS, AVAILABLE_HOURS } from "../data";

interface BookingProps {
  selectedServiceId: string;
  onSetSelectedServiceId: (serviceId: string) => void;
}

export default function Booking({ selectedServiceId, onSetSelectedServiceId }: BookingProps) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [selectedDay, setSelectedDay] = useState<number>(9); // Día 9 por defecto
  const [selectedTime, setSelectedTime] = useState<string>("03:00 p. m.");
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // 0 = Octubre, 1 = Noviembre
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [validationError, setValidationError] = useState("");

  const months = ["OCTUBRE", "NOVIEMBRE"];

  // Pre-fill default time if none is selected
  useEffect(() => {
    if (!selectedTime) {
      setSelectedTime(AVAILABLE_HOURS[1]);
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "service") {
      onSetSelectedServiceId(value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setValidationError("Por favor escribe tu nombre.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setValidationError("Por favor escribe un correo válido.");
      return;
    }
    if (!selectedServiceId) {
      setValidationError("Por favor selecciona un servicio.");
      return;
    }

    setValidationError("");
    setIsSuccessOpen(true);
  };

  const handleCloseSuccess = () => {
    setIsSuccessOpen(false);
    setFormData({ name: "", email: "" });
  };

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId);

  return (
    <section id="booking" className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-low relative overflow-hidden">
      {/* Abstract Luxury Background Ray */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/10 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Form & Overview */}
        <div className="lg:col-span-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-label text-xs tracking-[0.4em] text-secondary font-bold block mb-4 uppercase"
          >
            Reservaciones
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-[1.05] mb-6 font-bold"
          >
            AGENDA
            <br />
            <span className="text-primary italic font-black">TU CITA</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-on-surface-variant/90 mb-12 max-w-md leading-relaxed"
          >
            Los horarios son limitados. Selecciona tu fecha, hora y datos para solicitar tu cita personalizada.
          </motion.p>

          <motion.form
            onSubmit={handleBookingSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8 glass-card p-8 md:p-10 border border-secondary/20 relative"
          >
            {validationError && (
              <div className="p-3 bg-error/10 border border-error/35 text-error text-xs font-label">
                {validationError}
              </div>
            )}

            {/* Input Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-secondary/30 focus:border-primary focus:ring-0 text-on-surface font-label text-xs tracking-wider placeholder:text-on-tertiary-fixed-variant pb-3 px-0 uppercase outline-none transition-colors"
                placeholder="TU NOMBRE"
                id="booking-name"
              />
            </div>

            {/* Input Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-secondary/30 focus:border-primary focus:ring-0 text-on-surface font-label text-xs tracking-wider placeholder:text-on-tertiary-fixed-variant pb-3 px-0 uppercase outline-none transition-colors"
                placeholder="TU CORREO"
                id="booking-email"
              />
            </div>

            {/* Pick Curated Service */}
            <div className="relative">
              <select
                name="service"
                value={selectedServiceId}
                onChange={handleInputChange}
                className="w-full bg-transparent border-0 border-b border-secondary/30 focus:border-primary focus:ring-0 text-on-surface font-label text-xs tracking-wider pb-3 px-0 appearance-none outline-none cursor-pointer uppercase"
                id="booking-service"
              >
                <option value="" disabled className="bg-surface text-on-tertiary-fixed-variant">
                  SELECCIONA UN SERVICIO
                </option>
                {SERVICES_DATA.map((service) => (
                  <option key={service.id} value={service.id} className="bg-surface text-on-surface">
                    {service.name} — {service.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Current Schedule Summary */}
            <div className="pt-4 border-t border-white/5 space-y-2">
              <div className="flex justify-between text-xs text-on-surface-variant/70 font-label uppercase">
                <span>Horario seleccionado:</span>
                <span className="text-secondary font-bold">
                  {months[currentMonthIndex]} {selectedDay}, {selectedTime}
                </span>
              </div>
              {activeService && (
                <div className="flex justify-between text-xs text-on-surface-variant/70 font-label uppercase">
                  <span>Inversión:</span>
                  <span className="text-primary font-bold">{activeService.price} ({activeService.duration})</span>
                </div>
              )}
            </div>

            {/* Submit invitation button */}
            <button
              type="submit"
              className="glow-btn w-full py-4 bg-primary text-on-primary font-label text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:bg-primary-container cursor-pointer"
            >
              SOLICITAR CITA
            </button>
          </motion.form>
        </div>

        {/* Right Column: Intricate Calendar & Hours Schedule */}
        <div className="lg:col-span-6 w-full space-y-8">
          
          {/* Interactive Month Selector */}
          <div className="glass-card p-6 md:p-8 border border-secondary/20 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-8">
              <span className="font-label text-xs font-bold tracking-[0.3em] text-on-surface">
                {months[currentMonthIndex]} 2026
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentMonthIndex((prev) => (prev === 1 ? 0 : 1))}
                  className="p-1.5 border border-secondary/20 hover:border-secondary hover:text-primary transition-colors text-secondary cursor-pointer"
                  aria-label="Mes anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentMonthIndex((prev) => (prev === 0 ? 1 : 0))}
                  className="p-1.5 border border-secondary/20 hover:border-secondary hover:text-primary transition-colors text-secondary cursor-pointer"
                  aria-label="Mes siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Etiquetas de dias de la semana */}
            <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {["D", "L", "M", "M", "J", "V", "S"].map((dayName, idx) => (
                <span key={idx} className="font-label text-xs text-on-tertiary-fixed-variant font-bold">
                  {dayName}
                </span>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2 text-center">
              {CALENDAR_DAYS.map((cal, idx) => {
                const isSelected = selectedDay === cal.day && cal.currentMonth;
                const isOtherMonth = !cal.currentMonth;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (cal.currentMonth) {
                        setSelectedDay(cal.day);
                      }
                    }}
                    disabled={isOtherMonth}
                    className={`aspect-square p-2 font-display text-sm relative flex flex-col items-center justify-center border transition-all ${
                      isOtherMonth
                        ? "text-on-tertiary-fixed-variant border-transparent cursor-not-allowed opacity-30"
                        : isSelected
                        ? "border-secondary bg-secondary/15 text-secondary font-bold scale-105"
                        : "border-transparent text-on-surface hover:text-primary hover:border-white/10 cursor-pointer"
                    }`}
                  >
                    <span>{cal.day}</span>
                    
                    {/* Pink status indicator dots for occupied/highlights as shown in mock */}
                    {!isOtherMonth && cal.busy && (
                      <span className="absolute bottom-1.5 w-1 h-1 bg-primary rounded-full shadow-[0_0_6px_var(--color-primary)] animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Luxury Hour Selector Widget */}
          <div className="glass-card p-6 md:p-8 border border-secondary/20">
            <span className="font-label text-xs font-bold tracking-[0.3em] text-on-surface block mb-6 uppercase">
              SELECCIONA HORA
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {AVAILABLE_HOURS.map((hour) => {
                const isActive = selectedTime === hour;
                return (
                  <button
                    key={hour}
                    type="button"
                    onClick={() => setSelectedTime(hour)}
                    className={`py-3 px-4 font-label text-xs tracking-wider transition-all duration-300 ${
                      isActive
                        ? "border border-primary bg-primary/10 text-primary font-bold shadow-[0_0_12px_rgba(255,172,236,0.2)]"
                        : "border border-secondary/10 hover:border-secondary/40 text-on-surface-variant hover:text-on-surface hover:bg-white/5 cursor-pointer"
                    }`}
                  >
                    {hour}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Booking Excellence Success Modal */}
      <AnimatePresence>
        {isSuccessOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-3xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="max-w-md w-full glass-card p-8 border border-secondary/30 relative text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-full animate-bounce">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
              </div>

              <span className="font-label text-xs tracking-[0.3em] text-secondary font-bold block mb-2">
                SOLICITUD ENVIADA
              </span>
              <h3 className="font-display text-3xl font-extrabold text-white uppercase tracking-tight mb-4">
                TU CITA ESTA EN PROCESO
              </h3>

              <div className="space-y-4 text-left my-6 p-4 bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3">
                  <Inbox className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="text-[10px] font-label text-on-surface-variant/60">CLIENTA</div>
                    <div className="text-sm font-body font-bold text-white uppercase">{formData.name}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="text-[10px] font-label text-on-surface-variant/60">FECHA</div>
                    <div className="text-sm font-body font-bold text-white">
                      {months[currentMonthIndex]} {selectedDay}, 2026
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="text-[10px] font-label text-on-surface-variant/60">HORA SELECCIONADA</div>
                    <div className="text-sm font-body font-bold text-white">{selectedTime}</div>
                  </div>
                </div>

                {activeService && (
                  <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-label text-secondary uppercase font-bold bg-secondary/15 px-2 py-0.5">
                      {activeService.name}
                    </span>
                    <span className="text-sm font-display text-white ml-auto font-bold">{activeService.price}</span>
                  </div>
                )}
              </div>

              <p className="font-body text-xs text-on-surface-variant/80 mb-8 leading-relaxed">
                Enviaremos la confirmacion y detalles de tu cita a <span className="text-secondary font-semibold">{formData.email}</span>. Revisa tu correo para completar el proceso.
              </p>

              <button
                onClick={handleCloseSuccess}
                className="glow-btn w-full py-4 bg-primary text-on-primary font-label text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:bg-primary-container cursor-pointer"
              >
                VOLVER AL INICIO
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
