import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { NAV_LINKS, PHONE_NUMBER_RAW } from "../../lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-dark-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="MC Servizi - Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-accent-red/40 bg-dark-card shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-accent-red group-hover:shadow-accent-red/20">
              <img
                src="/logo.svg"
                alt="MC Servizi Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-text-primary leading-tight">
                MC SERVIZI
              </span>
              <span className="text-[9px] font-medium tracking-[0.2em] text-chrome-light uppercase leading-tight hidden sm:block">
                Sicurezza & Soluzioni
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 rounded-lg hover:bg-dark-card relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-red transition-all duration-300 group-hover:w-2/3 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Main CTA */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="sm"
              href={`tel:${PHONE_NUMBER_RAW}`}
              icon={<Phone className="w-4 h-4" />}
            >
              Contattaci Ora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="p-2 rounded-lg bg-accent-red text-white shadow-md"
              aria-label="Chiama Ora"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-dark-card transition-colors"
              aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-dark/98 backdrop-blur-lg z-40 lg:hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Menu di navigazione"
        >
          <nav className="flex flex-col p-6 gap-2">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-4 text-lg font-medium text-text-secondary hover:text-text-primary hover:bg-dark-card rounded-xl transition-all duration-200 border border-transparent hover:border-dark-border"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-dark-border">
              <Button
                variant="primary"
                size="lg"
                href={`tel:${PHONE_NUMBER_RAW}`}
                icon={<Phone className="w-5 h-5" />}
                className="w-full"
              >
                Contattaci Ora
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
