// ============================================================
// MC Servizi — Centralized Configuration & Data
// ============================================================

// ── Contact Information ──────────────────────────────────────
export const PHONE_NUMBER = "+39 393 224 21850";
export const PHONE_NUMBER_RAW = "+3939322421850";
export const WHATSAPP_NUMBER = "+3939322421850";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Salve, vorrei richiedere un preventivo per un intervento. Potete contattarmi?"
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
export const EMAIL_ADDRESS = "info@mcservizi.it";

// ── Navigation Links ─────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi Sono", href: "#chi-sono" },
  { label: "Prima/Dopo", href: "#prima-dopo" },
  { label: "Recensioni", href: "#recensioni" },
  { label: "Contatti", href: "#contatti" },
] as const;

// ── Services Data ────────────────────────────────────────────
export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "serrature",
    icon: "Lock",
    title: "Serrature & Sicurezza",
    description:
      "Sostituzione cilindro europeo, installazione defender magnetici antiacido e protezione totale contro le tecniche di scasso.",
    features: [
      "Cilindri europei ad alta sicurezza",
      "Installazione defender magnetici antiacido (DiSec)",
      "Protezione anti-picking, anti-bumping e anti-acido",
      "Conversione serrature tradizionali a doppia mappa",
    ],
    image: "/defender-antiacido.jpg",
  },
  {
    id: "riparazioni",
    icon: "Wrench",
    title: "Riparazioni Veloci",
    description:
      "Interventi rapidi su porte, tapparelle, cancelli e serramenti di ogni tipo.",
    features: [
      "Riparazione porte interne ed esterne",
      "Tapparelle e avvolgibili",
      "Cancelli manuali e automatici",
      "Serramenti in alluminio e PVC",
    ],
  },
  {
    id: "zanzariere",
    icon: "Grid3x3",
    title: "Zanzariere",
    description:
      "Installazione, riparazione e sostituzione su misura di zanzariere per ogni tipo di infisso.",
    features: [
      "Zanzariere a rullo e plissettate",
      "Misure personalizzate",
      "Riparazione reti danneggiate",
      "Sostituzione completa",
    ],
  },
  {
    id: "installazioni",
    icon: "HardHat",
    title: "Installazioni",
    description:
      "Montaggio professionale di infissi termici, grate di sicurezza e portoni blindati.",
    features: [
      "Infissi termici ad alta efficienza",
      "Grate e inferriate su misura",
      "Portoni blindati certificati",
      "Porte interne e scorrevoli",
    ],
  },
  {
    id: "manutenzioni",
    icon: "Settings",
    title: "Manutenzioni Generali",
    description:
      "Interventi periodici e straordinari per privati, condomini e attività commerciali.",
    features: [
      "Manutenzione programmata",
      "Interventi straordinari",
      "Assistenza condomini",
      "Contratti di manutenzione",
    ],
  },
  {
    id: "metalliche",
    icon: "Hammer",
    title: "Lavorazioni Metalliche",
    description:
      "Carpenteria metallica su misura: ringhiere, cancelli, strutture e lavori artigianali.",
    features: [
      "Ringhiere e parapetti",
      "Cancelli e recinzioni",
      "Strutture metalliche",
      "Lavori su disegno",
    ],
  },
];

// ── Testimonials ─────────────────────────────────────────────
export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marco R.",
    rating: 5,
    text: "Intervento rapidissimo per la sostituzione del cilindro europeo. Professionale e competente, ha risolto il problema in meno di un'ora. Consigliatissimo!",
    service: "Serrature & Sicurezza",
    date: "Gennaio 2026",
    verified: true,
  },
  {
    id: 2,
    name: "Giulia T.",
    rating: 5,
    text: "Ho fatto installare le zanzariere su misura in tutta casa. Lavoro impeccabile, materiali di qualità e prezzi onesti. Tornerò sicuramente.",
    service: "Zanzariere",
    date: "Marzo 2026",
    verified: true,
  },
  {
    id: 3,
    name: "Antonio M.",
    rating: 5,
    text: "Chiamato per un intervento rapido alla porta bloccata. È arrivato in poco tempo e ha risolto tutto con grande professionalità. Servizio eccellente!",
    service: "Serrature & Sicurezza",
    date: "Febbraio 2026",
    verified: true,
  },
  {
    id: 4,
    name: "Laura B.",
    rating: 4,
    text: "Ottimo lavoro di manutenzione sulle tapparelle del mio appartamento. Puntuale, preciso e molto cortese. Raccomando vivamente.",
    service: "Riparazioni",
    date: "Aprile 2026",
    verified: true,
  },
  {
    id: 5,
    name: "Francesco D.",
    rating: 5,
    text: "Ha realizzato una ringhiera in ferro su misura per il mio balcone. Design elegante e installazione perfetta. Artigiano vero!",
    service: "Lavorazioni Metalliche",
    date: "Maggio 2026",
    verified: true,
  },
  {
    id: 6,
    name: "Chiara N.",
    rating: 5,
    text: "Sostituzione infissi con modelli termici di ultima generazione. Casa più calda d'inverno e bollette ridotte. Investimento ripagato!",
    service: "Installazioni",
    date: "Giugno 2026",
    verified: true,
  },
];

// ── Working Hours ────────────────────────────────────────────
export interface WorkingHour {
  day: string;
  hours: string;
  emergency?: boolean;
}

export const WORKING_HOURS: WorkingHour[] = [
  { day: "Lunedì - Venerdì", hours: "08:00 - 19:00" },
  { day: "Sabato", hours: "08:00 - 13:00" },
  { day: "Domenica", hours: "Su appuntamento" },
];

// ── Service Options for Contact Form ─────────────────────────
export const SERVICE_OPTIONS = [
  "Serrature & Sicurezza",
  "Riparazioni Veloci",
  "Zanzariere",
  "Installazioni Infissi",
  "Manutenzioni Generali",
  "Lavorazioni Metalliche",
  "Conversione Serrature",
  "Altro",
] as const;

// ── API Configuration ────────────────────────────────────────
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
