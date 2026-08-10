import { useState } from "react";
import ImageSlider from "../ui/ImageSlider";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Conversione a Cilindro Europeo",
    subtitle: "Da doppia mappa obsoleta a sicurezza di livello superiore",
    description:
      "Sostituzione completa di una vecchia serratura tradizionale a doppia mappa con cilindro europeo di alta sicurezza, defender di protezione in ottone e pomolo interno.",
    beforeSrc: "/gallery/serratura-prima.png",
    afterSrc: "/gallery/serratura-dopo.png",
    details: [
      "Protezione anti-bumping e anti-picking",
      "Defender sferico ad alta resistenza",
      "Finiture di pregio in ottone lucido",
    ],
  },
  {
    id: 2,
    title: "Restauro Infissi in Alluminio",
    subtitle: "Efficienza termica e isolamento acustico",
    description:
      "Sostituzione infissi deteriorati con nuovi serramenti in alluminio a taglio termico di ultima generazione.",
    beforeSrc: "",
    afterSrc: "",
    details: [
      "Isolamento termico ed acustico",
      "Vetri camera basso-emissivi",
      "Finiture moderne e resistenti",
    ],
  },
  {
    id: 3,
    title: "Ringhiera in Ferro Artigianale",
    subtitle: "Lavorazione metallica su misura",
    description:
      "Realizzazione artigianale su misura di ringhiera in ferro battuto con trattamenti antiruggine e finitura anticata.",
    beforeSrc: "",
    afterSrc: "",
    details: [
      "Disegno personalizzato",
      "Trattamento zincato antiruggine",
      "Installazione di precisione",
    ],
  },
];

function createPlaceholderSvg(text: string, isAfter: boolean): string {
  const bgColor = isAfter ? "%231a1a2e" : "%23262626";
  const accentColor = isAfter ? "%23A31D1D" : "%234A5568";
  const label = isAfter ? "DOPO — NUOVO" : "PRIMA — VECCHIO";
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect fill="${bgColor}" width="800" height="600"/>
    <rect fill="${accentColor}" x="0" y="0" width="800" height="6" opacity="0.5"/>
    <rect fill="${accentColor}" x="0" y="594" width="800" height="6" opacity="0.5"/>
    <text fill="${accentColor}" font-family="system-ui" font-size="48" font-weight="900" x="400" y="270" text-anchor="middle" opacity="0.4">${label}</text>
    <text fill="%239CA3AF" font-family="system-ui" font-size="22" x="400" y="330" text-anchor="middle" opacity="0.6">${text}</text>
    ${isAfter ? `<circle cx="400" cy="420" r="30" fill="none" stroke="${accentColor}" stroke-width="2.5" opacity="0.5"/><polyline points="388,420 398,430 416,410" fill="none" stroke="${accentColor}" stroke-width="3" opacity="0.8"/>` : `<circle cx="400" cy="420" r="30" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.3"/><text fill="${accentColor}" font-family="system-ui" font-size="24" x="400" y="428" text-anchor="middle" opacity="0.4">?</text>`}
  </svg>`)}`;
}

export default function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"sideBySide" | "slider">("sideBySide");

  const items = GALLERY_ITEMS.map((item) => ({
    ...item,
    beforeSrc: item.beforeSrc || createPlaceholderSvg(item.title, false),
    afterSrc: item.afterSrc || createPlaceholderSvg(item.title, true),
  }));

  const currentItem = items[activeIndex];

  return (
    <section id="prima-dopo" className="py-20 lg:py-28 bg-dark-surface relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent-red-light text-sm font-semibold tracking-widest uppercase mb-3">
            I Nostri Risultati
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            Confronto <span className="text-accent-red-light">Prima & Dopo</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Guarda la trasformazione dei nostri lavori: il prima e il dopo affiancati in modo chiaro ed immediato.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent mx-auto mt-6" />
        </div>

        {/* Controls Bar: Category Tabs + View Mode Toggle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-dark-border">
          {/* Gallery Category Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "bg-accent-red text-white border border-accent-red/50 shadow-lg shadow-accent-red-glow"
                    : "bg-dark-card text-text-secondary border border-dark-border hover:border-dark-border-hover hover:text-text-primary"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* View Mode Toggle Button */}
          <div className="flex items-center bg-dark-card p-1 rounded-xl border border-dark-border">
            <button
              onClick={() => setViewMode("sideBySide")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                viewMode === "sideBySide"
                  ? "bg-accent-red text-white shadow-md"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>🖼️ Vista Affiancata</span>
            </button>
            <button
              onClick={() => setViewMode("slider")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                viewMode === "slider"
                  ? "bg-accent-red text-white shadow-md"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>↔️ Cursore Interattivo</span>
            </button>
          </div>
        </div>

        {/* Content Display */}
        {viewMode === "sideBySide" ? (
          /* Side by Side Comparison Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-8">
            {/* PRIMA Card */}
            <div className="flex flex-col bg-dark-card rounded-2xl overflow-hidden border border-dark-border shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 bg-dark-surface/90 backdrop-blur-md text-text-muted text-xs font-black uppercase tracking-wider rounded-full border border-dark-border shadow-lg">
                    ❌ PRIMA
                  </span>
                </div>
                <img
                  src={currentItem.beforeSrc}
                  alt={`Prima - ${currentItem.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-dark-border/60">
                <div>
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Stato Iniziale
                  </span>
                  <h4 className="text-base font-bold text-text-secondary mt-1">
                    Prima dell'intervento
                  </h4>
                </div>
              </div>
            </div>

            {/* DOPO Card */}
            <div className="flex flex-col bg-dark-card rounded-2xl overflow-hidden border-2 border-accent-red/40 shadow-2xl shadow-accent-red/10">
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 bg-accent-red text-white text-xs font-black uppercase tracking-wider rounded-full border border-accent-red/50 shadow-lg shadow-accent-red-glow">
                    ✅ DOPO
                  </span>
                </div>
                <img
                  src={currentItem.afterSrc}
                  alt={`Dopo - ${currentItem.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-accent-red/20 bg-accent-red-subtle/20">
                <div>
                  <span className="text-xs font-semibold text-accent-red-light uppercase tracking-wider">
                    Risultato Finale
                  </span>
                  <h4 className="text-base font-bold text-text-primary mt-1">
                    Lavoro Completato
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Slider View */
          <div className="max-w-4xl mx-auto mb-8">
            <ImageSlider
              key={currentItem.id}
              beforeSrc={currentItem.beforeSrc}
              afterSrc={currentItem.afterSrc}
            />
          </div>
        )}

        {/* Project Description Details */}
        <div className="bg-dark-card p-6 md:p-8 rounded-2xl border border-dark-border max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-accent-red-light uppercase tracking-wider">
              {currentItem.subtitle}
            </span>
            <h3 className="text-xl font-bold text-text-primary mt-1 mb-2">
              {currentItem.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
              {currentItem.description}
            </p>
          </div>
          {currentItem.details && (
            <div className="flex-shrink-0 text-left bg-dark-surface p-4 rounded-xl border border-dark-border">
              <ul className="space-y-1.5 text-xs text-text-secondary">
                {currentItem.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-accent-red font-bold">✓</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
