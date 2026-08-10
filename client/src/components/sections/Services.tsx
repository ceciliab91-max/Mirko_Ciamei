import { useRef, useState, useEffect } from "react";
import {
  Lock,
  Wrench,
  Grid3x3,
  HardHat,
  Settings,
  Hammer,
} from "lucide-react";
import Card from "../ui/Card";
import { SERVICES } from "../../lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Lock,
  Wrench,
  Grid3x3,
  HardHat,
  Settings,
  Hammer,
};

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servizi" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent-red-light text-sm font-semibold tracking-widest uppercase mb-3">
            I Nostri Servizi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            Soluzioni per Ogni{" "}
            <span className="text-accent-red-light">Esigenza</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Dalla sostituzione di una serratura all'installazione di infissi su
            misura: interveniamo con competenza e rapidità.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={service.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                data-index={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card glow className="h-full group">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent-red-subtle border border-accent-red/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-accent-red/20 group-hover:scale-110">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-accent-red-light transition-transform duration-300 group-hover:rotate-6" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-red-light transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-text-muted"
                      >
                        <span className="text-accent-red mt-0.5 flex-shrink-0">
                          ▸
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Optional Service Image */}
                  {service.image && (
                    <div className="mt-4 pt-4 border-t border-dark-border">
                      <span className="inline-block text-xs font-semibold text-accent-red-light uppercase tracking-wider mb-2">
                        Protezione Certificata DiSec
                      </span>
                      <div className="relative rounded-xl overflow-hidden border border-dark-border group-hover:border-accent-red/40 transition-colors duration-300">
                        <img
                          src={service.image}
                          alt="Installazione Defender Magnetici Antiacido DiSec"
                          className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-2 left-3 right-3 text-[11px] font-medium text-text-secondary">
                          🛡️ Difesa da acido, picking, bumping & colla
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
