import baExt from "@/assets/ba-exterior.jpg";
import baInt from "@/assets/ba-interior.jpg";
import baLight from "@/assets/ba-headlight.jpg";

const shots = [
  { src: baExt, label: "Paint Correction & Coating" },
  { src: baInt, label: "Full Interior Restoration" },
  { src: baLight, label: "Headlight Restoration" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">Before & After</div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Real cars. <br />
            <span className="text-gradient-gold">Real transformations.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {shots.map((s, i) => (
            <figure
              key={s.label}
              className={`group relative overflow-hidden rounded-2xl border border-border shadow-card ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                width={1280}
                height={800}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-1">
                  Before / After
                </div>
                <div className="text-lg font-semibold">{s.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
