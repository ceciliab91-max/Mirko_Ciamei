import { Shield, Clock, Award, ThumbsUp, Zap, CheckCircle2 } from "lucide-react";

const VALUES = [
  {
    icon: Shield,
    title: "Competenza",
    description: "Anni di esperienza nel settore della sicurezza e delle installazioni.",
  },
  {
    icon: ThumbsUp,
    title: "Affidabilità",
    description: "Lavoro garantito, materiali certificati e massima trasparenza.",
  },
  {
    icon: Zap,
    title: "Rapidità",
    description: "Interventi tempestivi e assistenza rapida per ogni tua esigenza.",
  },
  {
    icon: Award,
    title: "Garanzia",
    description: "Ogni intervento è coperto da garanzia su manodopera e materiali.",
  },
];

const CERTIFICATIONS = [
  "Cilindri europei certificati EN 1303",
  "Materiali conformi alle normative UE",
  "Assicurazione professionale RC",
  "Preventivi gratuiti e tempi certi",
];

export default function About() {
  return (
    <section id="chi-sono" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent-red-light text-sm font-semibold tracking-widest uppercase mb-3">
            Chi Sono
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            L'Artigiano della{" "}
            <span className="text-accent-red-light">Sicurezza</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Passione, professionalità e dedizione al servizio del cliente.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Craftsman Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-dark-border bg-dark-card aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Placeholder visual with professional styling */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-chrome-dark to-dark-border flex items-center justify-center mb-6 border-2 border-dark-border">
                  <Shield className="w-16 h-16 text-accent-red" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  MC Servizi
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  Fabbro Artigiano & Specialista Sicurezza
                </p>
                <div className="flex items-center gap-2 text-accent-red-light">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">15+ Anni di Esperienza</span>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent-red/40 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent-red/40 rounded-br-2xl" />
            </div>

            {/* Experience counter badge */}
            <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-accent-red text-white rounded-2xl p-5 shadow-lg red-glow">
              <div className="text-3xl font-black leading-none">15+</div>
              <div className="text-xs font-medium mt-1 opacity-90">Anni di<br />Esperienza</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-text-secondary leading-relaxed text-lg mb-8">
              Da oltre 15 anni mi dedico alla sicurezza delle abitazioni e delle
              attività commerciali con la stessa passione del primo giorno. Ogni
              serratura sostituita, ogni infisso installato, ogni manutenzione
              su misura è per me un'opportunità di dimostrare che la qualità
              artigianale italiana non è solo un ricordo.
            </p>
            <p className="text-text-secondary leading-relaxed mb-10">
              Utilizzo esclusivamente materiali certificati e le più moderne
              tecniche di installazione, garantendo un risultato impeccabile e
              duraturo. La vostra sicurezza è la mia priorità.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-dark-card border border-dark-border hover:border-dark-border-hover transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-red-subtle flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-accent-red-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm mb-1">
                      {value.title}
                    </h4>
                    <p className="text-text-muted text-xs leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="p-5 rounded-xl bg-dark-surface border border-dark-border">
              <h4 className="font-bold text-text-primary text-sm mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-accent-red" />
                Certificazioni & Garanzie
              </h4>
              <ul className="space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
