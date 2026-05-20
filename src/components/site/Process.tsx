import { MessageSquare, Calendar, Sparkles } from "lucide-react";

const steps = [
  { n: "01", icon: MessageSquare, title: "Request a Quote", desc: "Send us your vehicle and the service you want. We'll respond fast with honest pricing." },
  { n: "02", icon: Calendar, title: "Schedule Appointment", desc: "Pick a date and time. We'll confirm and put you on the calendar." },
  { n: "03", icon: Sparkles, title: "We Come To You", desc: "Sit back. We bring everything to your driveway and hand it back looking brand new." },
];

export function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">The Process</div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Three steps. <span className="text-gradient-gold">Zero hassle.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 relative">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-surface p-8 shadow-card overflow-hidden">
              <div className="absolute -top-4 -right-4 text-7xl font-bold text-gold/10 font-display">{s.n}</div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold shadow-glow mb-5">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
