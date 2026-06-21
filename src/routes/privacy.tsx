import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Jalsutra Packaged Drinking Water" },
      {
        name: "description",
        content: "Privacy policy and data protection terms for Jalsutra users.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground/80 font-light py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest hover:text-gold-soft mb-12 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
            <Shield size={24} />
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-ivory">Privacy Policy</h1>
        </div>

        <p className="text-xs text-ivory/40 uppercase tracking-[0.2em] mb-12">
          Last Updated: June 16, 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed border-t border-white/5 pt-10">
          <section className="space-y-3">
            <h2 className="font-display text-2xl text-ivory">1. Introduction</h2>
            <p>
              Welcome to Jalsutra (managed by Jyoti Commotrade Pvt. Ltd.). We are committed to
              protecting your personal data and respecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard your information when you visit our
              website at{" "}
              <a href="https://jalsutra.co.in" className="text-gold hover:underline">
                jalsutra.co.in
              </a>{" "}
              or submit contact and bulk ordering queries to us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-ivory">2. Information We Collect</h2>
            <p>
              When you submit an inquiry form on our website, we may collect the following details:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name</li>
              <li>Phone Number / WhatsApp Contact</li>
              <li>Email Address</li>
              <li>Company Name (if applicable)</li>
              <li>Inquiry details, order volume, and custom message requirements</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-ivory">3. How We Use Your Information</h2>
            <p>
              We use your information strictly to fulfill your business inquiry and provide customer
              support, specifically:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                To prepare custom quotes for bulk water jars, bottles, or co-branding packages.
              </li>
              <li>To contact you regarding delivery arrangements or business contracts.</li>
              <li>To coordinate custom label designs for corporate branding clients.</li>
              <li>To comply with regulatory audit requirements under FSSAI and BIS.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-ivory">4. Data Sharing & Security</h2>
            <p>
              We do not sell, rent, or trade your personal data to third parties. We restrict access
              to your information to authorized staff and production managers at Jyoti Commotrade
              Pvt. Ltd. who require the data to coordinate deliveries and billing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-ivory">5. Cookies</h2>
            <p>
              Our website uses minimal cookies necessary for website performance and rendering our
              premium visuals. We do not run invasive tracking or third-party marketing cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-ivory">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how your data is handled,
              please reach out to us at:
            </p>
            <p className="mt-2 text-ivory font-normal">
              Jyoti Commotrade Pvt. Ltd.
              <br />
              Bhatenda, Khalpar, Khamar, Rajarhat, Kolkata - 700 135
              <br />
              Email:{" "}
              <a href="mailto:info@jalsutra.co.in" className="text-gold hover:underline">
                info@jalsutra.co.in
              </a>{" "}
              /{" "}
              <a href="mailto:jyoticommotrade@gmail.com" className="text-gold hover:underline">
                jyoticommotrade@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
