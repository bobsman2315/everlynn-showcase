import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { CustomCursor } from "@/components/CustomCursor";

const BOTTLE_1 = "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=1200&q=80";
const BOTTLE_2 = "https://images.unsplash.com/photo-1606168094336-48f8b0c5cc59?w=1200&q=80";
const BOTTLE_3 = "https://images.unsplash.com/photo-1612447687331-c5b9416a2c4d?w=1200&q=80";
const WATER_BG = "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920&q=80";
const WATER_STORY = "https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?w=1920&q=80";
const TEAM = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80";
const VIDEO = "/__l5e/assets-v1/e9494ac5-e1b3-4dd5-9a9d-7243395fb8b5/hero-water.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between backdrop-blur-sm bg-[#06101F]/30">
      <a href="#top" className="font-display text-xl tracking-[0.3em] text-ivory">
        EVER<span className="text-gold">LYNN</span>
      </a>
      <nav className="hidden md:flex items-center gap-10 text-[0.7rem] tracking-[0.25em] uppercase text-ivory/70">
        <a href="#story" className="hover:text-gold transition-colors">Story</a>
        <a href="#bottle" className="hover:text-gold transition-colors">Bottle</a>
        <a href="#mission" className="hover:text-gold transition-colors">Mission</a>
        <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
      </nav>
      <a href="#cta" className="text-[0.7rem] tracking-[0.25em] uppercase text-gold border-b border-gold/40 pb-1">Order</a>
    </header>
  );
}

function Hero() {
  const headline = "Crafting trusted experiences through innovation, purity, and timeless excellence.";
  const words = headline.split(" ");
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={WATER_BG}
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-royal-deep/80 via-royal-deep/70 to-royal-deep" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#06101F_85%)]" />

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2 border border-gold/40 rounded-full mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[0.65rem] tracking-[0.4em] uppercase text-gold">Every Drop, A Promise of Purity</span>
        </motion.div>

        <h1 className="font-display text-[2.5rem] md:text-7xl lg:text-[5.5rem] leading-[1.05] text-ivory max-w-5xl mx-auto">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {w === "purity," || w === "purity" ? <em className="text-gold not-italic font-light">{w}</em> : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}
          className="mt-8 text-ivory/70 tracking-[0.3em] text-xs uppercase"
        >
          Excellence in Every Experience
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#bottle" className="btn-gold">Explore Everlynn</a>
          <a href="#story" className="btn-outline">Our Story</a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[0.6rem] tracking-[0.4em] uppercase text-ivory/50">Scroll</span>
        <div className="w-px h-12 bg-ivory/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-gold scroll-hint" />
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.35em] uppercase">
      <span className="text-gold">{num}</span>
      <span className="gold-line" />
      <span className="text-ivory/60">{label}</span>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Source", d: "Naturally drawn from protected mineral springs, untouched and pristine." },
    { n: "02", t: "Purified", d: "Multi-stage filtration with precision mineral balancing for perfect harmony." },
    { n: "03", t: "Sealed", d: "Sealed at source with engineered precision — purity preserved, always." },
  ];
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 bg-royal-deep relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel num="I." label="The Process" />
          <h2 className="mt-8 font-display text-5xl md:text-7xl max-w-3xl leading-[1.05]">
            What makes <em className="text-gold not-italic">Everlynn</em> pure?
          </h2>
        </Reveal>

        <div className="mt-24 grid md:grid-cols-3 gap-px bg-border">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.15} className="bg-royal-deep p-10 md:p-14">
              <div className="font-display text-7xl text-gold/30 mb-8">{s.n}</div>
              <h3 className="text-3xl mb-4">{s.t}</h3>
              <p className="text-ivory/60 leading-relaxed font-light">{s.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-20 grid md:grid-cols-3 gap-6">
          {[BOTTLE_1, BOTTLE_2, BOTTLE_3].map((src, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden">
              <img src={src} alt="Everlynn mineral water" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 bg-ink">
      <div className="max-w-7xl mx-auto">
        <Reveal><SectionLabel num="II." label="The Difference" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Everlynn vs. <em className="text-ivory/30 not-italic">the ordinary.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-px bg-border items-stretch">
          <Reveal className="bg-ink p-10 md:p-16">
            <p className="eyebrow text-ivory/40">Traditional Water</p>
            <ul className="mt-10 space-y-6 text-ivory/50 font-light">
              {["Inconsistent mineral content", "Mass-produced packaging", "Unclear sourcing", "No social commitment"].map((x) => (
                <li key={x} className="flex items-start gap-4 border-b border-ivory/5 pb-6">
                  <span className="text-ivory/30 text-xl">×</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="bg-card p-10 md:p-16 border-l border-gold/20">
            <p className="eyebrow">Everlynn</p>
            <ul className="mt-10 space-y-6 font-light">
              {["pH-balanced mineral precision", "Premium architectural packaging", "Single-source transparency", "Funds children's wellness"].map((x) => (
                <li key={x} className="flex items-start gap-4 border-b border-gold/10 pb-6">
                  <span className="text-gold text-xl">◆</span>
                  <span className="text-ivory">{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-20 flex justify-center">
          <img src={BOTTLE_2} alt="Everlynn premium bottle" className="max-h-[600px] object-contain float-bottle" />
        </Reveal>
      </div>
    </section>
  );
}

function BottleReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="bottle" ref={ref} className="py-32 md:py-44 px-6 md:px-12 bg-royal-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal><SectionLabel num="III." label="The Object" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl">
            Designed for <em className="text-gold not-italic">purity.</em><br />
            Built for elegance.
          </h2>
        </Reveal>

        <div className="mt-24 grid md:grid-cols-12 gap-8 items-center">
          <motion.div style={{ y }} className="md:col-span-5">
            <img src={BOTTLE_1} alt="Everlynn glass bottle" className="w-full aspect-[3/4] object-cover" />
          </motion.div>

          <div className="md:col-span-4 md:col-start-7 space-y-8">
            <Reveal>
              <p className="text-lg md:text-xl text-ivory/70 font-light leading-relaxed">
                Each Everlynn bottle is a study in restraint — sculpted glass, deliberate weight, light catching the surface like still water at dawn.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-ivory/60 font-light leading-relaxed">
                Every detail — from the weighted base to the gold-pressed cap — exists to honour what's inside. Nothing decorative. Nothing accidental.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="pt-6 border-t border-gold/20 grid grid-cols-3 gap-4 text-xs uppercase tracking-[0.2em] text-ivory/50">
                <div><div className="text-gold text-2xl font-display normal-case tracking-normal mb-2">750ml</div>Volume</div>
                <div><div className="text-gold text-2xl font-display normal-case tracking-normal mb-2">7.4</div>pH Balance</div>
                <div><div className="text-gold text-2xl font-display normal-case tracking-normal mb-2">100%</div>Recyclable</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { t: "No Contaminants", d: "Triple-tested for absolute purity from source to seal." },
    { t: "Mineral Precision", d: "pH-balanced for optimal hydration and natural taste." },
    { t: "Premium Sourcing", d: "Sustainably extracted, responsibly bottled at origin." },
    { t: "Purpose-Driven", d: "A portion of every sale funds children's wellness." },
  ];
  const icons = ["◇", "◈", "◆", "✦"];
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 bg-ink">
      <div className="max-w-7xl mx-auto">
        <Reveal><SectionLabel num="IV." label="The Standard" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Built different. <em className="text-gold not-italic">By design.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.1} className="bg-ink p-10 group hover:bg-card transition-colors duration-500">
              <div className="text-3xl text-gold mb-8 group-hover:scale-110 transition-transform duration-500">{icons[i]}</div>
              <h3 className="text-2xl mb-4 font-display">{f.t}</h3>
              <p className="text-ivory/55 font-light text-sm leading-relaxed">{f.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Performance() {
  const rows = [
    { t: "Third-Party Lab Tested", d: "Independently verified by accredited laboratories. Every batch, every bottle.", img: BOTTLE_3, tag: "Certified" },
    { t: "Full Composition Transparency", d: "Complete mineral breakdown printed on every label. Nothing hidden.", img: BOTTLE_1, tag: "Transparent" },
    { t: "Available Everywhere", d: "Distributed across premium hospitality, retail, and direct-to-door delivery.", img: BOTTLE_2, tag: "Nationwide" },
  ];
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 bg-royal-deep">
      <div className="max-w-7xl mx-auto">
        <Reveal><SectionLabel num="V." label="Engineered" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Engineered for <em className="text-gold not-italic">performance.</em>
          </h2>
        </Reveal>

        <div className="mt-24 space-y-px bg-border">
          {rows.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.1} className="bg-royal-deep">
              <div className={`grid md:grid-cols-2 gap-12 items-center py-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.img} alt={r.t} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="eyebrow">{r.tag}</span>
                  <h3 className="mt-4 font-display text-4xl md:text-5xl leading-tight">{r.t}</h3>
                  <p className="mt-6 text-ivory/60 font-light leading-relaxed max-w-md">{r.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative py-40 md:py-56 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={WATER_STORY} alt="Water" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-royal-deep/85" />
      </div>
      <div className="relative max-w-5xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow">VI. — Our Story</span>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="mt-10 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-ivory">
            "Mollveris was born from a simple belief — true excellence comes from the perfect <em className="text-gold not-italic">balance of care, trust, and innovation.</em>"
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-12 max-w-2xl mx-auto text-ivory/65 font-light leading-relaxed">
            What began as one founder's pursuit of integrity has become a house dedicated to redefining premium living. Everlynn is the first chapter — a luxury mineral water crafted not just to be consumed, but to be experienced.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 inline-flex flex-col items-center">
            <span className="font-display text-2xl text-gold">Sahil Suman Sahoo</span>
            <span className="mt-1 text-[0.65rem] tracking-[0.35em] uppercase text-ivory/50">Founder, Mollveris Global</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section id="mission" className="py-32 md:py-40 px-6 md:px-12 bg-royal-deep">
      <div className="max-w-7xl mx-auto">
        <Reveal><SectionLabel num="VII." label="Compass" /></Reveal>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Reveal className="bg-card p-12 md:p-16 border border-gold/15">
            <span className="eyebrow">Mission</span>
            <p className="mt-8 font-display text-2xl md:text-3xl leading-snug text-ivory">
              To deliver exceptional products and experiences crafted with precision, trust, and innovation — redefining premium living across every industry we serve.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="bg-card p-12 md:p-16 border border-gold/15">
            <span className="eyebrow">Vision</span>
            <p className="mt-8 font-display text-2xl md:text-3xl leading-snug text-ivory">
              To establish Mollveris as a world-class symbol of excellence, luxury, and trusted innovation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GiveBack() {
  const stats = [
    { v: "5,000+", l: "Lives Touched" },
    { v: "₹10", l: "From Every Bottle" },
    { v: "100%", l: "Certified Partner" },
  ];
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 bg-ink">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <SectionLabel num="VIII." label="Social Mission" />
          <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[1.05]">
            Buy pure. <em className="text-gold not-italic">Give back.</em>
          </h2>
          <p className="mt-8 text-ivory/65 font-light leading-relaxed max-w-md">
            A portion of every Everlynn sale funds wellness initiatives and children's development programs — because true luxury is what it leaves behind.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.l} className="border-t border-gold/30 pt-5">
                <div className="font-display text-3xl md:text-4xl text-gold">{s.v}</div>
                <div className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-ivory/50">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={TEAM} alt="Community" className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Credentials() {
  const items = ["FSSAI Certified", "BIS Quality Standard", "Lab Tested Purity", "ISO Compliant"];
  return (
    <section className="py-24 px-6 md:px-12 bg-royal-deep border-y border-gold/15">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="eyebrow text-center">Verified Credentials</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {items.map((label, i) => (
            <Reveal key={label} delay={i * 0.08} className="bg-royal-deep p-10 text-center">
              <div className="w-14 h-14 mx-auto border border-gold/50 rounded-full flex items-center justify-center text-gold text-xl">
                ✦
              </div>
              <p className="mt-5 text-[0.7rem] tracking-[0.25em] uppercase text-ivory/80">{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative py-40 md:py-56 px-6 md:px-12 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.18),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow">IX. — The Invitation</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-5xl md:text-8xl leading-[1] text-ivory">
            Ready to experience <em className="text-gold not-italic">purity?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-ivory/65 font-light text-lg max-w-xl mx-auto">
            Step into a world where every drop is a promise.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-gold">Order Now</a>
            <a href="#contact" className="btn-outline">Contact Us</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-royal-deep border-t border-gold/15 px-6 md:px-12 pt-24 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl tracking-[0.3em]">EVER<span className="text-gold">LYNN</span></div>
            <p className="mt-6 text-ivory/55 font-light italic max-w-sm">
              Every Drop, A Promise of Purity.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow">Explore</p>
            <ul className="mt-6 space-y-3 text-ivory/70 font-light text-sm">
              <li><a href="#top" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#bottle" className="hover:text-gold transition-colors">Products</a></li>
              <li><a href="#mission" className="hover:text-gold transition-colors">Mission</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 text-ivory/70 font-light text-sm">
              <li><a href="mailto:Mollverisglobal@gmail.com" className="hover:text-gold transition-colors">Mollverisglobal@gmail.com</a></li>
              <li><a href="tel:+918658536355" className="hover:text-gold transition-colors">+91 86585 36355</a></li>
              <li className="text-ivory/40">Mollveris Global Private Limited</li>
            </ul>
          </div>
        </div>

        <div className="divider-fade mt-16" />

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] uppercase tracking-[0.3em] text-ivory/40">
          <span>© 2025 Mollveris Global Private Limited</span>
          <span>Crafted with precision in India</span>
        </div>
      </div>
    </footer>
  );
}

export default function EverlynnPage() {
  return (
    <div className="grain bg-background text-ivory">
      <CustomCursor />
      <Nav />
      <Hero />
      <HowItWorks />
      <Comparison />
      <BottleReveal />
      <Features />
      <Performance />
      <Story />
      <MissionVision />
      <GiveBack />
      <Credentials />
      <CTA />
      <Footer />
    </div>
  );
}
