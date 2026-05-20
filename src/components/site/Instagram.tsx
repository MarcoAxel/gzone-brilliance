import { Instagram as IgIcon } from "lucide-react";
import ex from "@/assets/service-exterior.jpg";
import inte from "@/assets/service-interior.jpg";
import co from "@/assets/service-coating.jpg";
import ba from "@/assets/ba-exterior.jpg";

const tiles = [ex, inte, co, ba];

export function Instagram() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">@GZoneDetails</div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              See our latest <br />
              <span className="text-gradient-gold">transformations.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              We post fresh details, before/afters, and behind-the-scenes weekly.
              Give us a follow and see what we can do for your ride.
            </p>
            <a
              href="https://instagram.com/GZoneDetails"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition"
            >
              <IgIcon className="h-4 w-4" />
              Follow @GZoneDetails
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {tiles.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/GZoneDetails"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl border border-border"
              >
                <img src={src} alt="Instagram preview" loading="lazy" width={600} height={600} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition flex items-center justify-center">
                  <IgIcon className="h-8 w-8 text-foreground opacity-0 group-hover:opacity-100 transition" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
