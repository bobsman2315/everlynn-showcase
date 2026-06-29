import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Droplet, HelpCircle, Package, ShieldCheck, ShoppingCart } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Jalsutra Products — Mineral Water Sizes & Pricing" },
      {
        name: "description",
        content:
          "Explore Jalsutra's packaged drinking water sizes: 20L jars, 5L jars, and bottles from 250ml to 2L. Clean mineral composition and pricing.",
      },
    ],
  }),
  component: ProductsPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import { type ReactNode } from "react";

function ProductsPage() {
  const products = [
    {
      size: "20 Ltr Jar",
      volume: "20,000 ml",
      price: "₹80 / Jar",
      useCase: "Homes, corporate offices, clinics, and school dispensers. Durable and robust.",
      badge: "Office & Home",
      image: "/jalsutra_20l_jar.png",
    },
    {
      size: "5 Ltr Jar",
      volume: "5,000 ml",
      price: "₹50 / Jar",
      useCase: "Small kitchen spaces, picnics, emergency storage, or table-top water setups.",
      badge: "Compact Bulk",
      image: "/jalsutra_5l_jar.png",
    },
    {
      size: "2 Ltr Bottle",
      volume: "2,000 ml",
      price: "₹30 / Bottle",
      useCase: "Long road trips, large dinner tables, and heavy daily fitness workouts.",
      badge: "Maximum Hydration",
      image: "/jalsutra_2l_bottle.png",
    },
    {
      size: "1.5 Ltr Bottle",
      volume: "1,500 ml",
      price: "₹25 / Bottle",
      useCase: "Perfect travel companion for families, hikers, and active fitness gym routines.",
      badge: "Extra Volume",
      image: "/jalsutra_turquoise_bottle.png",
    },
    {
      size: "1 Ltr Bottle (Pack of 8)",
      volume: "1,000 ml (8-Pack)",
      price: "₹120 / Pack",
      useCase:
        "Our flagship best seller. Reliable thirst-quencher for daily household requirements.",
      badge: "Reliable Daily Choice",
      image: "/jalsutra_1l_bottle.png",
    },
    {
      size: "500 ml Bottle",
      volume: "500 ml",
      price: "₹10 / Bottle",
      useCase: "Corporate seminars, executive board meetings, and pocket-sized quick hydration.",
      badge: "Meeting Room standard",
      image: "/jalsutra_small_bottle.png",
    },
    {
      size: "250 ml Bottle",
      volume: "250 ml",
      price: "₹6 / Bottle",
      useCase: "Bulk catering events, weddings, quick functions, and waste-reducing portion sizes.",
      badge: "Event Special",
      image: "/jalsutra_250ml_bottle.jpg",
    },
  ];

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background caustics */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-royal/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <Reveal>
          <div className="flex items-center gap-2 text-[0.68rem] tracking-[0.35em] uppercase text-gold mb-4 font-semibold">
            <span>Product Lineup</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <span className="text-ivory/50">Sizes & Specs</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-ivory">
            Our range of products <br />
            <em className="text-gold not-italic">designed to suite ones thirst.</em>
          </h1>
          <p className="mt-6 text-ivory/70 font-light text-sm md:text-base max-w-2xl leading-relaxed">
            At Jalsutra we produce water bottles in various sizes that are available at all stores
            across the state of West Bengal. Our bottles are enriched with essential minerals,
            providing plenty of hydration to support fitness workouts and help offset the effects of
            dehydration.
          </p>
        </Reveal>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-24">
          {products.map((p, i) => (
            <Reveal
              key={p.size}
              delay={i * 0.06}
              className="bg-card border border-border p-8 rounded-lg flex flex-col justify-between hover:border-gold/25 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-muted/40 mb-6 flex items-center justify-center p-4 border border-border/30 relative">
                  <img
                    src={p.image}
                    alt={p.size}
                    className="max-h-40 md:max-h-48 max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] px-3 py-1 border border-border rounded-full bg-muted text-foreground/70">
                    {p.badge}
                  </span>
                  <span className="text-gold font-semibold font-display text-lg">{p.price}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mb-2">{p.size}</h3>
                <div className="text-[0.62rem] uppercase tracking-[0.1em] text-ivory/40 font-light mb-4">
                  Volume: {p.volume}
                </div>
                <p className="text-ivory/60 font-light text-xs md:text-sm leading-relaxed mb-8">
                  {p.useCase}
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-gold tracking-widest hover:translate-x-1 transition-transform group-hover:text-gold-soft"
              >
                Request Quote <ShoppingCart size={14} />
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Specifications & Composition */}
        <div className="grid lg:grid-cols-12 gap-12 mt-20 md:mt-32 items-stretch">
          <Reveal className="lg:col-span-7 bg-card border border-white/5 p-8 md:p-12 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-ivory mb-6 flex items-center gap-3">
                <Droplet className="text-gold" /> Mineral Composition Details
              </h3>
              <p className="text-ivory/70 font-light text-xs md:text-sm leading-relaxed mb-8">
                Every bottle of Jalsutra undergoes systematic micro-filtering and ozonation. We
                balance the water chemistry to ensure it supports active body metabolism and acts as
                a premium table water.
              </p>

              {/* Composition table */}
              <div className="space-y-4 text-xs md:text-sm font-light">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-ivory/60">pH Range</span>
                  <span className="text-ivory font-medium">7.0 - 7.5 (Perfect Balance)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-ivory/60">TDS (Total Dissolved Solids)</span>
                  <span className="text-ivory font-medium">75 - 120 mg/L</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-ivory/60">Calcium (Ca)</span>
                  <span className="text-ivory font-medium">Added for bone health</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-ivory/60">Magnesium (Mg)</span>
                  <span className="text-ivory font-medium">Added for metabolic support</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ivory/60">Bicarbonate</span>
                  <span className="text-ivory font-medium">Naturally balanced</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-gold/80 font-medium border-t border-white/5 pt-8 mt-8">
              <ShieldCheck size={18} />
              <span>Tested & Approved in Accredited Food Safety Labs</span>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="dark-section lg:col-span-5 bg-royal-deep border border-border p-8 md:p-12 rounded-xl flex flex-col justify-between text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
            <div>
              <div className="w-12 h-12 bg-gold/10 border border-gold/25 rounded-full flex items-center justify-center text-gold mx-auto mb-6">
                <Package size={24} />
              </div>
              <h3 className="font-display text-3xl text-ivory mb-4">Pack of 8 Offer</h3>
              <p className="text-ivory/70 font-light text-xs md:text-sm leading-relaxed mb-6">
                Our 1 ltr bottles are packaged in heavy-duty shrink-wrapped cases of 8 bottles.
                Highly economical, convenient to transport, and ideal for stocking up the family
                refrigerator.
              </p>
            </div>
            <Link to="/contact" className="btn-gold w-full text-center py-4">
              Order 1L cases
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
