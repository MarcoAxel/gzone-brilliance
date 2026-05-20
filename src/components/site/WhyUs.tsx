import { Truck, Eye, Beaker, Award, ShieldCheck, MapPin } from "lucide-react";

const items = [
  { icon: Truck, title: "Mobile Convenience", desc: "We bring the full detail bay to your home or office." },
  { icon: Eye, title: "Obsessive Attention", desc: "Every panel, seam, and stitch. We don't cut corners." },
  { icon: Beaker, title: "Premium Products", desc: "Pro-grade graphene, ceramic, and finishing chemicals only." },
  { icon: Award, title: "Professional Results", desc: "Showroom finish — backed by experience and technique." },
  { icon: ShieldCheck, title: "Protection That Lasts", desc: "Coatings engineered for years, not weeks." },
  { icon: MapPin, title: "Locally Owned", desc: "Proudly serving Bloomington, IN and surrounding areas." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">Why GZone</div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Built on craftsmanship. <br />
            <span className="text-gradient-gold">Driven by results.</span>
          </h2>
        </div>
        <div className="grid gap-px bg-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="bg-background p-8 hover:bg-surface transition group">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold shadow-glow mb-5 group-hover:scale-110 transition">
                <it.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
