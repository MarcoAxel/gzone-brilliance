import heroCar from "@/assets/hero-car.jpg";
import { Phone, ArrowRight, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroCar}
          alt="Freshly detailed luxury black car"
          width={1920}
          height={1280}
          className="h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-gold-soft mb-6">
            <MapPin className="h-3.5 w-3.5" />
            Mobile Service • We Come To You • Bloomington, IN
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Premium Mobile <br />
            Car Detailing in <br />
            <span className="text-gradient-gold">Bloomington, Indiana</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Showroom-quality interior and exterior detailing, graphene coatings, and
            paint protection — delivered to your driveway. Pro-grade products. Obsessive attention to detail.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+18126060689"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-7 py-4 font-semibold text-foreground hover:bg-surface-elevated transition"
            >
              <Phone className="h-4 w-4" />
              Call (812) 606-0689
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold" />
              5-Star Rated
            </div>
            <div className="h-4 w-px bg-border" />
            <div>Locally Owned</div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="hidden sm:block">Pro-Grade Products</div>
          </div>
        </div>
      </div>
    </section>
  );
}
