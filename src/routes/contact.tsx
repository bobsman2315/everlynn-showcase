import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Jalsutra — Bulk Booking & Co-Branding Inquiries" },
      {
        name: "description",
        content:
          "Contact Jalsutra at 09674341297 or info@jalsutra.co.in. Bulk jar ordering, wedding booking, and corporate co-branding quotes.",
      },
    ],
  }),
  component: ContactPage,
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-3 text-ivory/90 hover:text-gold transition-colors font-display text-lg md:text-xl"
      >
        <span>{question}</span>
        <ChevronDown
          size={18}
          className={`text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs md:text-sm text-ivory/60 font-light leading-relaxed pt-2 pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "Co-Branding",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Query Received!", {
        description: `Thank you, ${formData.name}. Our sales agent will reach out within 2 hours.`,
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        inquiryType: "Co-Branding",
        quantity: "",
        message: "",
      });
    }, 1200);
  };

  const faqs = [
    {
      q: "Where does Jalsutra distribute water?",
      a: "Our distribution network spans all retail stores, grocery chains, and corporate facilities across the state of West Bengal. For bulk jars and co-branding, we offer direct factory delivery in Kolkata, Howrah, Hooghly, and surrounding Rajarhat districts.",
    },
    {
      q: "What is your co-branding service (USP)?",
      a: "We specialize in printing and packaging custom-labeled water bottles. We work directly with hotels, weddings, private exhibitions, and corporate seminars to design bottle labels matching your brand color and logo, providing an elevated premium touch for your guests.",
    },
    {
      q: "Is Jalsutra water certified for safety?",
      a: "Yes. Our water is certified under the Bureau of Indian Standards (BIS) IS 14543 quality scheme and holds a valid Food Safety and Standards Authority of India (FSSAI) license. Every batch is lab tested for composition purity.",
    },
    {
      q: "What is the minimum volume for co-branded orders?",
      a: "For custom labeled bottles (250ml, 500ml, or 1L), our minimum batch run is 500 bottles. We offer discount tiers for corporate monthly packages or wedding events.",
    },
    {
      q: "Are the 20L jars chemical-washed before refills?",
      a: "Every returned 20L jar undergoes a thorough 14-stage sanitization process using eco-friendly heat sterilization and automated scrubbing lines before refilling, ensuring zero residue and pristine water.",
    },
  ];

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <Reveal>
          <div className="flex items-center gap-2 text-[0.68rem] tracking-[0.35em] uppercase text-gold mb-4 font-semibold">
            <span>Corporate Queries</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <span className="text-ivory/50">Contact Us</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-ivory">
            Partner with <em className="text-gold not-italic">Jalsutra.</em>
          </h1>
          <p className="mt-6 text-ivory/70 font-light text-sm md:text-base max-w-2xl leading-relaxed">
            Have bulk order requirements for your company? Planning a wedding or event and need
            custom co-branded bottles? Our customer relations desk is here to help.
          </p>
        </Reveal>

        {/* Contact Info and Form Grid */}
        <div className="grid lg:grid-cols-12 gap-16 mt-16 md:mt-24 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-10">
            <Reveal className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl text-ivory border-l-2 border-gold pl-4">
                Reach Us Directly
              </h2>
              <p className="text-ivory/60 font-light text-xs md:text-sm leading-relaxed">
                Contact our head office at Rajarhat, Kolkata. Feel free to call us or drop an email
                for corporate distribution dealership inquiries.
              </p>
            </Reveal>

            <Reveal className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/25 flex items-center justify-center text-gold">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.2em] uppercase text-ivory/40">
                    Call or WhatsApp
                  </p>
                  <a
                    href="tel:+919674341297"
                    className="text-base text-ivory hover:text-gold transition-colors font-light mt-0.5 block"
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
                  <div className="flex flex-col text-sm text-ivory font-light mt-0.5">
                    <a
                      href="mailto:info@jalsutra.co.in"
                      className="hover:text-gold transition-colors"
                    >
                      info@jalsutra.co.in
                    </a>
                    <a
                      href="mailto:jyoticommotrade@gmail.com"
                      className="hover:text-gold transition-colors mt-0.5"
                    >
                      jyoticommotrade@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/25 flex items-center justify-center text-gold">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.2em] uppercase text-ivory/40">
                    Factory / Corporate Office
                  </p>
                  <p className="text-xs text-ivory/70 font-light mt-1 max-w-[280px] leading-relaxed">
                    Jyoti Commotrade Pvt. Ltd.
                    <br />
                    Bhatenda, Khalpar, Khamar, Rajarhat, Kolkata - 700 135 (Near Rajarhat Charmatha
                    Industrial Area)
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="bg-card border border-white/5 p-6 rounded-lg">
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-2">
                Dealership Queries
              </h4>
              <p className="text-xs text-ivory/50 font-light leading-relaxed">
                We are actively expanding our distribution footprint in North and South 24 Parganas,
                Hooghly, and Medinipur. Reach out directly to receive our retail dealer profit
                structure sheets.
              </p>
            </Reveal>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <Reveal className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-2xl relative">
              <h3 className="font-display text-2xl md:text-3xl text-ivory mb-2">Submit a Ticket</h3>
              <p className="text-xs text-ivory/50 font-light mb-8">
                Send us details of your requirements, and a customer manager will reply promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs uppercase tracking-[0.2em] text-ivory/60 font-medium"
                    >
                      Full Name
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
                      WhatsApp / Phone
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

                <div className="grid sm:grid-cols-2 gap-6">
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
                      placeholder="e.g. client@gmail.com"
                      className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="inquiryType"
                      className="text-xs uppercase tracking-[0.2em] text-ivory/60 font-medium"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold/50 appearance-none cursor-pointer"
                    >
                      <option value="Co-Branding">Custom Co-Branded Labeling</option>
                      <option value="Bulk 20L Jars">Bulk 20L Jars (Home/Office)</option>
                      <option value="Bottle Supply">Packaged Water Bottles Supply</option>
                      <option value="Dealership">Retail Dealership Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="quantity"
                    className="text-xs uppercase tracking-[0.2em] text-ivory/60 font-medium"
                  >
                    Expected Volume / Quantity (e.g. Jars/Month or Event Bottles)
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 50 jars per week / 800 bottles for wedding"
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold/50"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-[0.2em] text-ivory/60 font-medium"
                  >
                    Message / Specific Delivery Requirements
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe delivery frequency, locations, custom design themes, or timelines..."
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold/50 resize-none"
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
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Ticket <Send size={14} />
                    </span>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 md:mt-36">
          <Reveal className="text-center mb-12">
            <span className="text-[0.62rem] tracking-[0.3em] uppercase text-gold font-semibold flex items-center justify-center gap-2">
              <HelpCircle size={14} /> Knowledge Base
            </span>
            <h3 className="font-display text-3xl md:text-5xl text-ivory mt-2">
              Frequently Asked Questions
            </h3>
          </Reveal>

          <Reveal className="max-w-4xl mx-auto bg-card border border-white/5 rounded-xl p-8 md:p-12 space-y-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
