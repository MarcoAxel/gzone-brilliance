import { Phone } from "lucide-react";

const PHONE = "(812) 606-0689";
const TEL = "tel:+18126060689";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight">
            G<span className="text-gradient-gold">Zone</span>
          </span>
          <span className="text-xs text-muted-foreground hidden sm:inline">Details</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#why" className="hover:text-foreground transition">Why Us</a>
          <a href="#gallery" className="hover:text-foreground transition">Gallery</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
          <a href="#quote" className="hover:text-foreground transition">Quote</a>
        </nav>
        <a
          href={TEL}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{PHONE}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
