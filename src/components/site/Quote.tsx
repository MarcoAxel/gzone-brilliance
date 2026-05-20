import { useState } from "react";
import { toast } from "sonner";
import { Send, Phone } from "lucide-react";

export function Quote() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Quote request sent! We'll text you back within the hour.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  const field =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition";

  return (
    <section id="quote" className="relative py-24 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">Free Quote</div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Get your vehicle <br />
              looking <span className="text-gradient-gold">brand new.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Fill out the form and we'll send you a personalized quote — usually within the hour.
              Prefer to talk? Call or text us anytime.
            </p>
            <a
              href="tel:+18126060689"
              className="mt-6 inline-flex items-center gap-2 text-foreground hover:text-gold transition"
            >
              <Phone className="h-5 w-5 text-gold" />
              <span className="text-xl font-semibold">(812) 606-0689</span>
            </a>
            <div className="mt-8 hairline" />
            <p className="mt-6 text-sm text-muted-foreground">
              Serving Bloomington, Ellettsville, Bedford, Nashville, Spencer, and surrounding Monroe County areas.
            </p>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-background p-6 sm:p-8 shadow-card">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Name</label>
                <input required name="name" className={field} placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone</label>
                <input required type="tel" name="phone" className={field} placeholder="(812) 555-0123" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Vehicle Type</label>
                <input required name="vehicle" className={field} placeholder="2022 Toyota 4Runner" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Service Needed</label>
                <select required name="service" className={field} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Interior Detailing</option>
                  <option>Exterior Detailing</option>
                  <option>Full Interior + Exterior</option>
                  <option>Graphene Coating</option>
                  <option>Ceramic Coating</option>
                  <option>Odor Removal</option>
                  <option>Headlight Restoration</option>
                  <option>Not sure — recommend something</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Preferred Date</label>
                <input type="date" name="date" className={field} />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
                <textarea name="message" rows={4} className={field} placeholder="Tell us about your vehicle's condition or anything specific you'd like addressed." />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send My Free Quote"}
              <Send className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              We typically respond within the hour during business hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
