import {
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  User,
  PhoneCall,
  Mail,
  Loader2,
} from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useContactForm } from "../../hooks/useContactForm";
import {
  PHONE_NUMBER,
  PHONE_NUMBER_RAW,
  WHATSAPP_URL,
  SERVICE_OPTIONS,
  WORKING_HOURS,
} from "../../lib/constants";

export default function Contact() {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  const inputClasses = (hasError: boolean) =>
    `w-full bg-dark border ${
      hasError ? "border-accent-red" : "border-dark-border focus:border-accent-red-light"
    } rounded-xl px-4 py-3 text-text-primary placeholder-text-muted text-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-accent-red-light/30`;

  return (
    <section id="contatti" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent-red-light text-sm font-semibold tracking-widest uppercase mb-3">
            Contattaci
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            Richiedi un{" "}
            <span className="text-accent-red-light">Preventivo</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Compila il modulo o contattaci direttamente. Rispondiamo entro 30
            minuti durante l'orario lavorativo.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <Card hover={false} className="p-6 sm:p-8">
              {isSuccess ? (
                /* Success State */
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    Messaggio Inviato!
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Grazie per averci contattato. Ti risponderemo il prima
                    possibile.
                  </p>
                  <Button variant="secondary" onClick={resetForm}>
                    Invia un altro messaggio
                  </Button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-accent-red" />
                    Modulo di Contatto
                  </h3>

                  {submitError && (
                    <div className="mb-6 p-4 rounded-xl bg-accent-red/10 border border-accent-red/30 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-accent-red-light flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-accent-red-light">
                        {submitError}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-text-secondary mb-1.5"
                      >
                        Nome e Cognome *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Mario Rossi"
                          className={`${inputClasses(!!errors.name)} pl-10`}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-xs text-accent-red-light">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-text-secondary mb-1.5"
                      >
                        Telefono *
                      </label>
                      <div className="relative">
                        <PhoneCall className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+39 333 123 4567"
                          className={`${inputClasses(!!errors.phone)} pl-10`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-accent-red-light">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mb-5">
                    <label
                      htmlFor="contact-service"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Servizio Richiesto *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClasses(!!errors.service)} cursor-pointer`}
                    >
                      <option value="">Seleziona un servizio...</option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-accent-red-light">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Messaggio *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descrivi il tuo problema o la tua richiesta..."
                      rows={4}
                      className={`${inputClasses(!!errors.message)} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-accent-red-light">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={
                      isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )
                    }
                  >
                    {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Right: Quick Contact Cards (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Phone Card */}
            <Card hover={false} className="p-6 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-red-subtle border border-accent-red/20 flex items-center justify-center group-hover:bg-accent-red/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-accent-red-light" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">Chiama Direttamente</h4>
                  <p className="text-xs text-text-muted">
                    Risposta immediata
                  </p>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Per richiedere informazioni o parlare direttamente con un artigiano qualificato.
              </p>
              <Button
                variant="primary"
                href={`tel:${PHONE_NUMBER_RAW}`}
                icon={<PhoneCall className="w-4 h-4" />}
                className="w-full"
              >
                {PHONE_NUMBER}
              </Button>
            </Card>

            {/* WhatsApp Card */}
            <Card hover={false} className="p-6 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-whatsapp/10 border border-whatsapp/20 flex items-center justify-center group-hover:bg-whatsapp/20 transition-colors duration-300">
                  <MessageCircle className="w-6 h-6 text-whatsapp" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">Chat WhatsApp</h4>
                  <p className="text-xs text-text-muted">
                    Rispondiamo in pochi minuti
                  </p>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Inviaci foto del problema o richiedi un preventivo veloce via
                WhatsApp. Servizio comodo e rapido.
              </p>
              <Button
                variant="whatsapp"
                href={WHATSAPP_URL}
                icon={<MessageCircle className="w-4 h-4" />}
                className="w-full"
              >
                Chatta su WhatsApp
              </Button>
            </Card>

            {/* Working Hours Card */}
            <Card hover={false} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-accent-red" />
                <h4 className="font-bold text-text-primary">Orari di Lavoro</h4>
              </div>
              <ul className="space-y-3">
                {WORKING_HOURS.map((item) => (
                  <li
                    key={item.day}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-text-secondary">
                      {item.day}
                    </span>
                    <span className="text-text-primary font-medium">
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
