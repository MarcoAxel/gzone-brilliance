import { Phone, Instagram, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-bold">
              G<span className="text-gradient-gold">Zone</span> Details
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Premium mobile car detailing in Bloomington, Indiana.
              Showroom finishes delivered to your driveway.
            </p>
            <a href="tel:+18126060689" className="mt-5 inline-flex items-center gap-2 text-foreground hover:text-gold transition">
              <Phone className="h-4 w-4 text-gold" />
              <span className="font-semibold">(812) 606-0689</span>
            </a>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Navigate</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition">Services</a></li>
              <li><a href="#why" className="hover:text-foreground transition">Why Us</a></li>
              <li><a href="#gallery" className="hover:text-foreground transition">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-foreground transition">Reviews</a></li>
              <li><a href="#quote" className="hover:text-foreground transition">Get a Quote</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Connect</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gold" />
                <span>Bloomington, IN<br />& surrounding areas</span>
              </li>
              <li>
                <a href="https://instagram.com/GZoneDetails" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition">
                  <Instagram className="h-4 w-4 text-gold" /> @GZoneDetails
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} GZone Details. All rights reserved.</div>
          <div>Mobile Car Detailing in Bloomington, Indiana</div>
        </div>
      </div>
    </footer>
  );
}
