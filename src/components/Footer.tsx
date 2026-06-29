import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="dark-section bg-royal-deep border-t border-white/5 px-6 md:px-12 pt-20 pb-8 text-sm text-ivory/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/jalsutra_logo.png"
                alt="Jalsutra Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="mt-6 text-ivory/60 font-light italic max-w-sm text-xs leading-relaxed">
              Pure Drinking Water. Enriched with minerals, bottled in a fully automated, untouched
              environment. State-of-the-art purification system based in Kolkata, West Bengal.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-gold tracking-[0.2em] font-semibold text-xs mb-6 uppercase">
              Explore
            </p>
            <ul className="space-y-3 font-light text-xs">
              <li>
                <Link to="/" className="text-ivory/70 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ivory/70 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-ivory/70 hover:text-gold transition-colors">
                  Products & Sizes
                </Link>
              </li>
              <li>
                <Link
                  to="/waste-management"
                  className="text-ivory/70 hover:text-gold transition-colors"
                >
                  Waste Management
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ivory/70 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-gold tracking-[0.2em] font-semibold text-xs mb-6 uppercase">
              Contact & Legal
            </p>
            <ul className="space-y-3 font-light text-xs text-ivory/80">
              <li>
                <a href="tel:+919674341297" className="hover:text-gold transition-colors">
                  WhatsApp: +91 96743 41297
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jalsutra.co.in"
                  className="hover:text-gold transition-colors font-light"
                >
                  info@jalsutra.co.in
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/jalsutraofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/jalsutrawater/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li className="pt-2">
                <Link to="/privacy" className="text-gold font-medium hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-fade mt-16" />

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.62rem] uppercase tracking-[0.3em] text-ivory/40">
          <span>© 2026 Jyoti Commotrade Pvt. Ltd. All Rights Reserved.</span>
          <span>Crafted with absolute purity in Kolkata, India</span>
        </div>
      </div>
    </footer>
  );
}
