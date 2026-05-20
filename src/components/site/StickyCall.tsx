import { Phone } from "lucide-react";

export function StickyCall() {
  return (
    <a
      href="tel:+18126060689"
      className="md:hidden fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-4 font-semibold text-primary-foreground shadow-glow active:scale-95 transition"
      aria-label="Call GZone Details"
    >
      <Phone className="h-5 w-5" />
      Call Now
    </a>
  );
}
