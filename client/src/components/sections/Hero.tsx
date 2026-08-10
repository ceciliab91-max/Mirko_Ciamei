import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, ChevronDown, ShieldCheck, Award, FileCheck2, Wrench } from "lucide-react";
import Button from "../ui/Button";
import {
  PHONE_NUMBER_RAW,
  WHATSAPP_URL,
} from "../../lib/constants";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 circuit-pattern opacity-40" />

      {/* Red gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-red/3 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-red-subtle border border-accent-red/20 mb-6">
              <Wrench className="w-4 h-4 text-accent-red-light" />
              <span className="text-sm font-medium text-accent-red-light">
                Competenza • Affidabilità • Soluzioni su Misura
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6">
              <span className="text-text-primary">Sicurezza,</span>
              <br />
              <span className="metallic-text">Competenza,</span>
              <br />
              <span className="text-text-primary">
                Soluzioni{" "}
                <span className="text-accent-red-light">su Misura</span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
              Servizi professionali per installazione serrature di sicurezza, infissi, zanzariere e manutenzioni su misura.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                variant="primary"
                size="lg"
                href={`tel:${PHONE_NUMBER_RAW}`}
                icon={<Phone className="w-5 h-5" />}
              >
                Richiedi Preventivo
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                href={WHATSAPP_URL}
                icon={<MessageCircle className="w-5 h-5" />}
              >
                Chatta su WhatsApp
              </Button>
            </div>

            {/* Inline Value Metrics Bar */}
            <div className="pt-4 border-t border-dark-border grid grid-cols-3 gap-3 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-red-light flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-text-primary">100% Lavori Garantiti</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-accent-red-light flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-text-primary">Preventivi Gratuiti</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <Award className="w-5 h-5 text-accent-red-light flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-text-primary">Artigiano Qualificato</span>
              </div>
            </div>
          </div>

          {/* Right: Sleek Showcase Container (NO FLOATING BADGES) */}
          <div
            className={`hidden lg:flex flex-col items-center justify-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Main Showcase Container */}
            <div className="relative w-full max-w-md bg-dark-card border border-dark-border rounded-3xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-red/10 via-transparent to-chrome-dark/10 rounded-3xl pointer-events-none" />
              
              {/* Logo Box */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-accent-red/30 bg-dark shadow-[0_0_40px_rgba(139,0,0,0.25)] transition-all duration-500 hover:border-accent-red hover:shadow-[0_0_60px_rgba(163,29,29,0.4)]">
                <img
                  src="/logo.svg"
                  alt="MC Servizi Logo Identity"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Showcase Footer Metrics */}
              <div className="mt-6 pt-4 border-t border-dark-border/80 flex items-center justify-between text-xs font-semibold text-chrome-light">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent-red-light" />
                  Serrature & Infissi
                </span>
                <span className="text-dark-border">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent-red-light" />
                  Zanzariere
                </span>
                <span className="text-dark-border">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent-red-light" />
                  Carpenteria
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#servizi"
          className="flex flex-col items-center gap-1 text-text-muted hover:text-text-secondary transition-colors"
          aria-label="Scorri verso il basso"
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Scopri
          </span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
