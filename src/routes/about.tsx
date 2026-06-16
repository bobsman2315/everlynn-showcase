import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Compass, Eye, ShieldCheck, Landmark } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jalsutra — Our Purity Formula & Story" },
      {
        name: "description",
        content:
          "Learn about Jalsutra, managed by Jyoti Commotrade. Sanskrit origins, mission, vision, and state-of-the-art water purification.",
      },
    ],
  }),
  component: AboutPage,
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

function AboutPage() {
  return (
    <div className="py-16 md:py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-royal/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb / Title */}
        <Reveal>
          <div className="flex items-center gap-2 text-[0.68rem] tracking-[0.35em] uppercase text-gold mb-4 font-semibold">
            <span>Corporate Profile</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <span className="text-ivory/50">About Us</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-ivory max-w-4xl">
            Pure water guided by the <br />
            <em className="text-gold not-italic">Sanskrit formula of health.</em>
          </h1>
        </Reveal>

        {/* Section 1: The Sanskrit Meaning */}
        <div className="grid lg:grid-cols-12 gap-12 mt-16 md:mt-24 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl text-ivory border-l-2 border-gold pl-4">
                What does Jalsutra mean?
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-ivory/70 font-light leading-relaxed text-sm md:text-base">
                In ancient Sanskrit literature, <strong>Sutra</strong> is defined as a set of rules,
                or a formula. At Jalsutra, we have taken utmost care to keep our product true to its
                name. We present you with the purest drinking water, crafted to conform to a perfect
                formula of health.
              </p>
              <p className="text-ivory/70 font-light leading-relaxed text-sm md:text-base mt-4">
                Our water is sourced from highly monitored, deep geological layers and goes through
                a rigorous purification process. The final product is untouched by human hands,
                ensuring that the natural minerals are preserved and harmful elements are completely
                removed.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 bg-card border border-white/5 p-8 md:p-10 rounded-xl">
            <Reveal className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-gold/10 border border-gold/30 rounded-lg flex items-center justify-center text-gold">
                  <Landmark size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ivory">Jyoti Commotrade</h3>
                  <p className="text-xs text-ivory/60 mt-1 font-light">
                    Managed under the registered banner of Jyoti Commotrade Pvt. Ltd., representing
                    trust in Eastern India.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-gold/10 border border-gold/30 rounded-lg flex items-center justify-center text-gold">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ivory">Largest Project</h3>
                  <p className="text-xs text-ivory/60 mt-1 font-light">
                    One of the largest automated Packaged Drinking Water manufacturing units in West
                    Bengal.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 md:mt-32">
          <Reveal className="bg-card/45 backdrop-blur-md p-10 md:p-14 border border-white/5 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-gold mb-8">
                <Compass size={24} />
              </div>
              <h3 className="font-display text-3xl text-ivory mb-4">Our Mission</h3>
              <p className="text-ivory/70 font-light text-sm md:text-base leading-relaxed">
                To serve society by bringing the purest, healthiest drinking water to every
                consumer. Through fully automated, state-of-the-art technology, we eliminate human
                error and supply clean water that offsets dehydration, promotes fitness, and acts as
                a must-have item in every family refrigerator.
              </p>
            </div>
            <div className="text-[0.62rem] uppercase tracking-[0.2em] text-gold mt-12 font-medium">
              Purity First • Everyday
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="bg-card/45 backdrop-blur-md p-10 md:p-14 border border-white/5 rounded-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-gold mb-8">
                <Eye size={24} />
              </div>
              <h3 className="font-display text-3xl text-ivory mb-4">Our Vision</h3>
              <p className="text-ivory/70 font-light text-sm md:text-base leading-relaxed">
                To establish Jalsutra as the leading symbol of trustworthy hydration, quality
                co-branding, and environmental stewardship in Eastern India. We aim to continually
                innovate our bottling and waste management systems, preserving natural water
                resources for generations to come.
              </p>
            </div>
            <div className="text-[0.62rem] uppercase tracking-[0.2em] text-gold mt-12 font-medium">
              Innovation • Preservation
            </div>
          </Reveal>
        </div>

        {/* Section 3: Plant Scale & Automation */}
        <div className="mt-20 md:mt-32 rounded-xl overflow-hidden border border-white/5 bg-[#051329] p-8 md:p-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#030C1B] to-transparent z-10" />
          <img
            src="/jalsutra_factory.png"
            alt="Bottling factory automation machinery"
            className="absolute inset-0 w-full h-full object-cover object-right opacity-30 z-0"
          />
          <div className="relative z-20 max-w-xl">
            <Reveal>
              <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold font-semibold">
                Industrial Excellence
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-ivory mt-4 leading-tight">
                Fully automated, untouched production designs.
              </h2>
              <p className="text-ivory/75 font-light text-sm md:text-base leading-relaxed mt-6">
                Our indigenous bottling layouts remove the factor of human error entirely. Spanning
                several acres near the Rajarhat Industrial Area, we operate high-capacity rinsing,
                filling, capping, and sealing stations inside a strictly sterile cleanroom
                environment.
              </p>
              <div className="mt-8 flex gap-4">
                <Link to="/products" className="btn-gold py-3 px-6 text-xs">
                  View Our Catalog
                </Link>
                <Link to="/contact" className="btn-outline py-3 px-6 text-xs">
                  Contact Plant Manager
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
