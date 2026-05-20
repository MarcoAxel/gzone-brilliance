import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Process } from "@/components/site/Process";
import { Quote } from "@/components/site/Quote";
import { Instagram } from "@/components/site/Instagram";
import { Footer } from "@/components/site/Footer";
import { StickyCall } from "@/components/site/StickyCall";

const title = "GZone Details — Premium Mobile Car Detailing in Bloomington, Indiana";
const description =
  "Premium mobile car detailing in Bloomington, IN. Interior & exterior detailing, graphene & ceramic coatings, odor removal, and headlight restoration. We come to you.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "mobile car detailing Bloomington Indiana, car detailing near Bloomington, graphene coating Bloomington IN, ceramic coating Bloomington, auto detailing Indiana" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDetailing",
          name: "GZone Details",
          description,
          telephone: "+1-812-606-0689",
          areaServed: "Bloomington, Indiana and surrounding areas",
          address: { "@type": "PostalAddress", addressLocality: "Bloomington", addressRegion: "IN", addressCountry: "US" },
          url: "/",
          sameAs: ["https://instagram.com/GZoneDetails"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Process />
        <Testimonials />
        <Quote />
        <Instagram />
      </main>
      <Footer />
      <StickyCall />
      <Toaster theme="dark" position="top-center" />
    </div>
  );
}
