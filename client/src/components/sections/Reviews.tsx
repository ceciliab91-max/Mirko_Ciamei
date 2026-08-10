import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";
import Card from "../ui/Card";
import { TESTIMONIALS } from "../../lib/constants";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Show 1 on mobile, 2 on tablet, 3 on desktop
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-dark-border"
        }`}
      />
    ));
  };

  return (
    <section id="recensioni" className="py-20 lg:py-28 bg-dark-surface relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent-red-light text-sm font-semibold tracking-widest uppercase mb-3">
            Recensioni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            Cosa Dicono i{" "}
            <span className="text-accent-red-light">Clienti</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            La soddisfazione dei nostri clienti è la migliore garanzia.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent mx-auto mt-6" />
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-dark-card border border-dark-border rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent-red transition-all duration-300 cursor-pointer hidden md:flex"
            aria-label="Recensione precedente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-dark-card border border-dark-border rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent-red transition-all duration-300 cursor-pointer hidden md:flex"
            aria-label="Recensione successiva"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Track */}
          <div className="overflow-hidden mx-0 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {TESTIMONIALS.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <Card hover={false} className="h-full relative">
                    {/* Quote Icon */}
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-dark-border opacity-50" />

                    {/* Rating */}
                    <div className="flex items-center gap-0.5 mb-4">
                      {renderStars(review.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
                      "{review.text}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-dark-border">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-text-primary text-sm">
                            {review.name}
                          </span>
                          {review.verified && (
                            <CheckCircle2 className="w-4 h-4 text-success" />
                          )}
                        </div>
                        <span className="text-xs text-text-muted">
                          {review.service}
                        </span>
                      </div>
                      <span className="text-xs text-text-muted">{review.date}</span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? "w-8 bg-accent-red"
                  : "w-2 bg-dark-border hover:bg-chrome-dark"
              }`}
              aria-label={`Vai alla recensione ${i + 1}`}
            />
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-dark-card border border-dark-border">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <div className="h-6 w-px bg-dark-border" />
            <span className="text-text-primary font-bold">4.9/5</span>
            <span className="text-text-muted text-sm">su 120+ recensioni</span>
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
