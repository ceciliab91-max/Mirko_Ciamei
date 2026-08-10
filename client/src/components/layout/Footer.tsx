import { ArrowUp, Phone, Mail, Clock, MapPin } from "lucide-react";
import {
  PHONE_NUMBER,
  PHONE_NUMBER_RAW,
  EMAIL_ADDRESS,
  WORKING_HOURS,
  NAV_LINKS,
} from "../../lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-surface border-t border-dark-border relative">
      {/* Back to Top */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-accent-red hover:bg-accent-red-light rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          aria-label="Torna in cima"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-accent-red/40 bg-dark-card shadow-md">
                <img
                  src="/logo.svg"
                  alt="MC Servizi Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-black tracking-wider text-text-primary">
                MC SERVIZI
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Competenza, affidabilità e soluzioni su misura per la sicurezza
              della tua casa e della tua attività.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent-red-light transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {PHONE_NUMBER}
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent-red-light transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {EMAIL_ADDRESS}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Navigazione
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-200 hover:pl-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Working Hours */}
          <div>
            <h4 className="text-text-primary font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent-red" />
              Orari
            </h4>
            <ul className="space-y-3">
              {WORKING_HOURS.map((item) => (
                <li key={item.day} className="flex justify-between text-sm">
                  <span className="text-text-secondary">
                    {item.day}
                  </span>
                  <span className="text-text-primary font-medium">
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Area Map */}
          <div>
            <h4 className="text-text-primary font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-red" />
              Zona Operativa
            </h4>
            <div className="rounded-xl overflow-hidden border border-dark-border h-40">
              <iframe
                title="Zona operativa MC Servizi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.52340348785!2d12.395912!3d41.9027835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%20Capital!5e0!3m2!1sen!2sit!4v1700000000000"
                className="w-full h-full border-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="section-divider mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} MC Servizi — Tutti i diritti riservati</p>
          <div className="flex items-center gap-4">
            <span>P.IVA: XXXXXXXXXXXXXXX</span>
            <span className="text-dark-border">|</span>
            <a href="#" className="hover:text-text-secondary transition-colors">
              Privacy Policy
            </a>
            <span className="text-dark-border">|</span>
            <a href="#" className="hover:text-text-secondary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
