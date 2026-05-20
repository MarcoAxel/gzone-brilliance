import exterior from "@/assets/service-exterior.jpg";
import interior from "@/assets/service-interior.jpg";
import coating from "@/assets/service-coating.jpg";
import { ArrowUpRight, Sparkles, Car, Shield, Wind, Lightbulb, Droplets } from "lucide-react";

const services = [
  {
    title: "Interior Detailing",
    desc: "Deep vacuum, shampoo, leather conditioning, and steam sanitization. Every crevice handled.",
    price: "From $150",
    img: interior,
    icon: Car,
  },
  {
    title: "Exterior Detailing",
    desc: "Hand wash, decontamination, clay bar, and a slick hand-applied wax for a deep mirror gloss.",
    price: "From $120",
    img: exterior,
    icon: Sparkles,
  },
  {
    title: "Graphene Coating",
    desc: "Next-gen graphene protection — extreme gloss, hydrophobics, and years of paint defense.",
    price: "From $599",
    img: coating,
    icon: Shield,
    featured: true,
  },
  {
    title: "Ceramic Coating",
    desc: "Long-lasting ceramic sealant that locks in shine and shields against UV, bird droppings, and grime.",
    price: "From $399",
    img: coating,
    icon: Droplets,
  },
  {
    title: "Odor Removal",
    desc: "Ozone treatment + enzymatic cleaning to fully eliminate smoke, pet, and food odors at the source.",
    price: "From $99",
    img: interior,
    icon: Wind,
  },
  {
    title: "Headlight Restoration",
    desc: "Restore foggy, yellowed lenses to crystal clarity. Brighter nights. Safer drives.",
    price: "From $89",
    img: exterior,
    icon: Lightbulb,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">Our Services</div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Detailing that protects, <br />
            <span className="text-gradient-gold">restores, and elevates.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a quick refresh to multi-year ceramic and graphene protection — every package
            uses premium products and is performed by hand at your location.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl border bg-surface shadow-card transition hover:-translate-y-1 hover:border-gold/50 ${
                s.featured ? "border-gold/60 shadow-glow" : "border-border"
              }`}
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={620}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold shadow-glow">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                {s.featured && (
                  <span className="absolute top-4 right-4 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    Most Popular
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <span className="text-sm font-medium text-gold">{s.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <a
                  href="#quote"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-gold transition"
                >
                  Book this service
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
