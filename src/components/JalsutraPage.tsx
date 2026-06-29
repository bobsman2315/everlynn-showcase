import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  Layers,
  Send,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

const HERO_BG = "/jalsutra_hero_bg.png";
const BOTTLE_IMG = "/jalsutra_bottle.png";
const FACTORY_IMG = "/jalsutra_factory.png";

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

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[0.72rem] tracking-[0.35em] uppercase font-bold mb-6">
      <span className="text-gold">{num}</span>
      <span className="text-ivory/80">{label}</span>
    </div>
  );
}

function Hero() {
  const headline = "Pure water crafted with mathematical precision and mineral balance.";
  const words = headline.split(" ");
  return (
    <section
      id="top"
      className="dark-section relative min-h-screen w-full flex flex-col items-center justify-center py-28 md:py-36 overflow-hidden"
    >
      <img
        src={HERO_BG}
        alt="Jalsutra Purified Water Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030C1B]/80 via-[#030C1B]/60 to-[#030C1B]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030C1B_95%)]" />

      <div className="relative z-10 text-center px-6 max-w-6xl my-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2 border border-gold/40 rounded-full mb-6 bg-[#030C1B]/55 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[0.68rem] tracking-[0.4em] uppercase text-gold font-medium">
            Certified FSSAI & BIS Purity
          </span>
        </motion.div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.2rem] leading-[1.08] text-ivory max-w-5xl mx-auto">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {w.includes("precision") || w.includes("purity") ? (
                <em className="text-gold not-italic font-normal">{w}</em>
              ) : (
                w
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-6 text-ivory/80 tracking-[0.2em] text-xs sm:text-sm max-w-3xl mx-auto font-light leading-relaxed"
        >
          At Jalsutra, we produce a range of products: 20 ltr jars, 5 ltr jars, and bottles from
          250ml to 2 ltr. Enriched with essential minerals to support hydration and offset
          dehydration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/products" className="btn-gold">
            Explore Sizes
          </Link>
          <Link to="/contact" className="btn-outline">
            Get Custom Branding
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hidden md:flex">
        <span className="text-[0.6rem] tracking-[0.4em] uppercase text-ivory/50">Scroll</span>
        <div className="w-px h-10 bg-ivory/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-gold scroll-hint" />
        </div>
      </div>
    </section>
  );
}

function StoryHome() {
  return (
    <section className="py-20 md:py-36 px-6 md:px-12 bg-royal-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto font-light">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel num="I." label="The Origin" />
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-2xl">
                The Sanskrit formula for <em className="text-gold not-italic">absolute purity.</em>
              </h2>
            </Reveal>
            <Reveal
              delay={0.2}
              className="mt-8 space-y-6 text-ivory/70 leading-relaxed text-sm md:text-base max-w-xl"
            >
              <p>
                In Sanskrit literature, <span className="text-gold font-semibold">Sutra</span> is
                defined as a set of rules or a formula. At Jalsutra, we keep our products true to
                their name: water crafted according to a perfect formula of health.
              </p>
              <p>
                Our fully automated, hands-free production eliminates human error, delivering
                healthy hydration to households and businesses across West Bengal.
              </p>
            </Reveal>

            <Reveal
              delay={0.3}
              className="mt-8 flex gap-8 items-center border-t border-border pt-8"
            >
              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-gold tracking-widest hover:text-gold-soft transition-colors"
                >
                  Our full story <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <Reveal
              delay={0.3}
              className="w-full max-w-[380px] aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-2xl relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
              <img
                src={BOTTLE_IMG}
                alt="Jalsutra Premium Bottled Water"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const featured = [
    {
      size: "20 Ltr Jar",
      desc: "Best for offices & homes. Heavy duty, reusable container.",
      price: "₹80 / Jar",
      image: "/jalsutra_20l_jar.png",
    },
    {
      size: "1 Ltr Bottle (Pack of 8)",
      desc: "Flagship retail option. Mineral enriched, perfect for fitness.",
      price: "₹120 / Pack",
      image: "/jalsutra_1l_bottle.png",
    },
    {
      size: "250 ml Bottle",
      desc: "Event size. Best for boardrooms, catering and weddings.",
      price: "₹6 / Bottle",
      image: "/jalsutra_250ml_bottle.jpg",
    },
  ];

  return (
    <section className="py-20 md:py-36 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <Reveal>
            <SectionLabel num="II." label="Products Overview" />
            <h2 className="font-display text-4xl md:text-6xl leading-[1.1]">
              Hydration for <em className="text-gold not-italic">every scenario.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-4 md:mt-0">
            <Link to="/products" className="btn-gold py-3 px-6 text-xs">
              View All 7 Sizes
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <Reveal
              key={p.size}
              delay={i * 0.08}
              className="bg-card border border-border p-8 rounded-lg flex flex-col justify-between hover:border-gold/30 hover:shadow-md shadow-sm transition-all duration-300"
            >
              <div>
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-muted/40 mb-6 flex items-center justify-center p-4 border border-border/30 relative">
                  <img
                    src={p.image}
                    alt={p.size}
                    className="max-h-40 md:max-h-48 max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-gold font-semibold font-display text-lg mb-4 block">
                  {p.price}
                </span>
                <h3 className="font-display text-2xl mb-2 text-ivory">{p.size}</h3>
                <p className="text-ivory/60 font-light text-xs md:text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>
              <Link
                to="/products"
                className="text-xs text-gold/80 hover:text-gold uppercase tracking-widest font-semibold flex items-center gap-1"
              >
                Details <ArrowRight size={12} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



function FactoryHome() {
  const stats = [
    { value: "50,000+", label: "Daily Bottles Produced" },
    { value: "11 Stages", label: "Purification Loop" },
    { value: "100%", label: "Untouched by Human Hand" },
  ];

  return (
    <section className="py-20 md:py-36 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto font-light">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel num="III." label="Industrial Capacity" />
              <h2 className="font-display text-4xl md:text-6xl leading-[1.1] mb-6">
                One of Eastern India's <em className="text-gold not-italic">largest facilities.</em>
              </h2>
              <p className="text-ivory/70 leading-relaxed text-sm md:text-base max-w-xl">
                Our plant in Rajarhat is equipped with fully integrated, state-of-the-art automatic
                rinsing, filling, capping, and labelling machinery. By designing the plant as a
                completely enclosed environment, we remove all variables that lead to biological or
                chemical contamination.
              </p>
              <Link
                to="/waste-management"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-gold tracking-widest hover:text-gold-soft mt-8 transition-colors"
              >
                Filtration & Waste Water Info <ArrowRight size={14} />
              </Link>
            </Reveal>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((s, idx) => (
                <Reveal key={s.label} delay={idx * 0.1} className="border-t border-gold/30 pt-6">
                  <div className="font-display text-2xl md:text-3xl text-gold font-semibold">
                    {s.value}
                  </div>
                  <div className="text-[0.6rem] uppercase tracking-[0.2em] text-ivory/50 mt-2 leading-relaxed">
                    {s.label}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal
              delay={0.2}
              className="aspect-[16/10] overflow-hidden rounded-xl border border-border shadow-2xl"
            >
              <img
                src={FACTORY_IMG}
                alt="Jalsutra Automated Water Bottling Plant"
                className="w-full h-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactHome() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "1L Bottles",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Query Submitted!", {
        description: `Thank you ${formData.name}. We will get back to you shortly.`,
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        product: "1L Bottles",
        message: "",
      });
    }, 1200);
  };

  return (
    <section className="py-20 md:py-36 px-6 md:px-12 bg-royal-deep relative">
      <div className="max-w-7xl mx-auto font-light">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Reveal>
                <SectionLabel num="IV." label="Order & Inquire" />
                <h2 className="font-display text-4xl md:text-6xl leading-[1.1] mb-6">
                  Ready to partner <br />
                  with <em className="text-gold not-italic">Jalsutra?</em>
                </h2>
                <p className="text-ivory/60 leading-relaxed text-sm md:text-base max-w-sm mb-10">
                  Whether you need bulk 20L jars for your corporate facility, retail packaging
                  orders, or customized co-branded bottles for an upcoming event, our
                  representatives are ready to assist.
                </p>
              </Reveal>

              <Reveal className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/25 flex items-center justify-center text-gold">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[0.62rem] tracking-[0.2em] uppercase text-ivory/40">
                      WhatsApp or Call
                    </p>
                    <a
                      href="tel:+919674341297"
                      className="text-sm text-ivory hover:text-gold transition-colors font-medium mt-0.5 block"
                    >
                      +91 96743 41297
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/25 flex items-center justify-center text-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[0.62rem] tracking-[0.2em] uppercase text-ivory/40">
                      Inquiry Email
                    </p>
                    <a
                      href="mailto:info@jalsutra.co.in"
                      className="text-sm text-ivory hover:text-gold transition-colors font-medium mt-0.5 block"
                    >
                      info@jalsutra.co.in
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-2xl relative">
              <h3 className="font-display text-2xl md:text-3xl text-ivory mb-2">Request a Quote</h3>
              <p className="text-xs text-ivory/50 mb-8">
                Fill out the quick questionnaire below and we will send a customized proposal.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs uppercase tracking-[0.2em] text-ivory/60 font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Indrasish"
                      className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-xs uppercase tracking-[0.2em] text-ivory/60 font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 09674341297"
                      className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.2em] text-ivory/60 font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. company@gmail.com"
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold justify-center py-4 rounded disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-ink border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Inquiry <Send size={14} />
                    </span>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialsHome() {
  const credentials = [
    { title: "FSSAI License", desc: "Approved food grade manufacturing." },
    { title: "BIS Quality", desc: "IS 14543 certification for safety." },
    { title: "ISO Compliance", desc: "International food safety standard." },
    { title: "Lab Verified", desc: "Tested chemical & biological purity." },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.08}
              className="bg-card border border-border rounded-lg p-6 hover:border-gold/30 shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold mx-auto mb-4 text-sm font-display">
                ✦
              </div>
              <h4 className="text-base font-display text-ivory mb-2">{c.title}</h4>
              <p className="text-xs text-ivory/50 font-light leading-relaxed">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function JalsutraPage() {
  return (
    <>
      <Hero />
      <StoryHome />
      <ProductsPreview />
      <FactoryHome />
      <CredentialsHome />
      <ContactHome />
    </>
  );
}
