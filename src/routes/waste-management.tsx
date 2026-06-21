import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Droplet, Recycle, Settings, ShieldAlert, Sparkles } from "lucide-react";

export const Route = createFileRoute("/waste-management")({
  head: () => ({
    meta: [
      { title: "Waste Water Management — Jalsutra Purity & Ecology" },
      {
        name: "description",
        content:
          "Details on Jalsutra's eco-friendly waste water management, recycling policies, and 11-stage filtration processes in Kolkata.",
      },
    ],
  }),
  component: WasteManagementPage,
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

function WasteManagementPage() {
  const steps = [
    {
      n: "01",
      t: "Sand Filtration",
      d: "Removes visible suspended particles, dust, and heavy silt from raw water.",
    },
    {
      n: "02",
      t: "Carbon Treatment",
      d: "Adsorbs chlorine, organic pesticides, and corrects bad odors/taste.",
    },
    {
      n: "03",
      t: "Softening",
      d: "Minimizes hardness, converting hard calcium/magnesium salts into soft, soluble salts.",
    },
    {
      n: "04",
      t: "Reverse Osmosis",
      d: "Forces water under pressure through semi-permeable membranes, stripping out dissolved solutes.",
    },
    {
      n: "05",
      t: "Mineralization",
      d: "Injects optimal mineral salts in specific amounts for maximum hydration benefit.",
    },
    {
      n: "06",
      t: "Ozonation Loop",
      d: "Sanitizes holding tanks continuously, protecting against airborne microorganisms.",
    },
  ];

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background ripples */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-royal/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <Reveal>
          <div className="flex items-center gap-2 text-[0.68rem] tracking-[0.35em] uppercase text-gold mb-4 font-semibold">
            <span>Sustainability</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <span className="text-ivory/50">Waste Water Management</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-ivory">
            Responsible purification. <br />
            <em className="text-gold not-italic">Ecology in balance.</em>
          </h1>
          <p className="mt-6 text-ivory/70 font-light text-sm md:text-base max-w-2xl leading-relaxed">
            At Jalsutra, our water goes through 11 stages of purification process and is packed and
            sealed in a 100% dust-free environment without any human intervention. We hold ourselves
            to strict environmental standards, ensuring that any waste water from processing is
            recycled responsibly.
          </p>
        </Reveal>

        {/* Section 1: The 11-Stage Context */}
        <div className="grid lg:grid-cols-12 gap-12 mt-16 md:mt-24 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal className="aspect-[16/10] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <img
                src="/jalsutra_factory.png"
                alt="Water filtration system pipelines"
                className="w-full h-full object-cover"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl text-ivory border-l-2 border-gold pl-4">
                Purification & Waste Recirculation
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-ivory/70 font-light leading-relaxed text-sm md:text-base">
                During the reverse osmosis and softening filtration stages, a proportion of input
                water becomes high-mineral concentrate (often referred to as reject water). Rather
                than discarding this, Jalsutra has engineered recirculating pipelines.
              </p>
              <p className="text-ivory/70 font-light leading-relaxed text-sm md:text-base mt-4">
                This water is redirected to secondary utility systems in our factory: sanitizing
                bottle crates, cleaning machinery exteriors, keeping factory grounds pristine, and
                powering the plant gardens. By maximizing reuse, we maintain one of the lowest
                water-waste ratios in the state.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Section 2: Core Filtration Stages Grid */}
        <div className="mt-20 md:mt-32">
          <Reveal className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-5xl text-ivory">
              Primary Filtration Steps
            </h3>
            <p className="text-xs text-gold uppercase tracking-[0.2em] mt-2 font-semibold">
              100% Automated Machinery
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {steps.map((s) => (
              <Reveal
                key={s.n}
                className="bg-card p-8 md:p-10 hover:bg-muted/50 transition-colors"
              >
                <div className="font-display text-3xl text-gold/25 font-bold mb-4">{s.n}</div>
                <h4 className="text-lg font-display text-ivory mb-2">{s.t}</h4>
                <p className="text-xs text-ivory/60 font-light leading-relaxed">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Section 3: Sustainability stats */}
        <div className="grid sm:grid-cols-3 gap-8 mt-20 md:mt-32">
          <Reveal className="bg-card border border-border p-8 rounded-lg text-center">
            <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold mx-auto mb-4">
              <Recycle size={20} />
            </div>
            <h4 className="text-2xl font-display text-ivory font-semibold">100% Recyclable</h4>
            <p className="text-xs text-ivory/50 mt-2 font-light">
              All Jalsutra PET bottles and jars are made from food-grade, fully recyclable plastics.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="bg-card border border-border p-8 rounded-lg text-center">
            <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold mx-auto mb-4">
              <Settings size={20} />
            </div>
            <h4 className="text-2xl font-display text-ivory font-semibold">Low Reject Rate</h4>
            <p className="text-xs text-ivory/50 mt-2 font-light">
              Advanced RO membranes allow us to retain over 70% of sourced water as pure mineral
              water.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="bg-card border border-border p-8 rounded-lg text-center">
            <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold mx-auto mb-4">
              <Sparkles size={20} />
            </div>
            <h4 className="text-2xl font-display text-ivory font-semibold">Zero Effluents</h4>
            <p className="text-xs text-ivory/50 mt-2 font-light">
              No chemical effluents are discharged. Our backwash cycles use organic neutralizing
              components.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
