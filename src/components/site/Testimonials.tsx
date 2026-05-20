import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Jared M.",
    location: "Bloomington, IN",
    text: "Brought my truck back to life. The graphene coating is absolutely insane — water just rolls right off. Worth every penny.",
  },
  {
    name: "Sarah K.",
    location: "Ellettsville, IN",
    text: "They came right to my driveway. My SUV looks better than the day I bought it. Smelled brand new inside. Highly recommend.",
  },
  {
    name: "Marcus T.",
    location: "Bloomington, IN",
    text: "Hands down the most thorough detail I've ever paid for. Professional, on time, and the results speak for themselves.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">Reviews</div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Trusted by drivers <br />
            <span className="text-gradient-gold">across Bloomington.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="relative rounded-2xl border border-border bg-background p-8 shadow-card">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
