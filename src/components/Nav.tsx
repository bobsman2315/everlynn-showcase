import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/waste-management", label: "Waste Mgt" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between backdrop-blur-md bg-[#030C1B]/60 border-b border-white/5">
      <Link to="/" className="flex items-center gap-3 z-50">
        <img
          src="/jalsutra_logo.png"
          alt="Jalsutra Logo"
          className="h-8 md:h-10 w-auto object-contain"
        />
        <span className="font-display text-xl md:text-2xl font-bold tracking-wider text-ivory">
          JALSUTRA
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-[0.72rem] tracking-[0.25em] uppercase">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeProps={{ className: "text-gold font-medium border-b border-gold/40 pb-0.5" }}
            inactiveProps={{ className: "text-ivory/80 hover:text-gold" }}
            className="transition-all duration-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Order Button */}
      <div className="hidden md:block">
        <Link
          to="/contact"
          className="text-[0.72rem] tracking-[0.25em] uppercase text-gold border-b border-gold/20 hover:border-gold pb-1 transition-all"
        >
          Inquire Now
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 text-ivory p-1 focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#030C1B] z-40 flex flex-col justify-center px-10 gap-8"
          >
            <div className="flex flex-col gap-6 text-xl tracking-[0.2em] uppercase font-display">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  activeProps={{
                    className: "text-gold font-semibold border-b border-white/10 pb-2",
                  }}
                  inactiveProps={{
                    className: "text-ivory hover:text-gold border-b border-white/5 pb-2",
                  }}
                  className="transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-gold text-center py-4 w-full mt-6"
            >
              Get Bulk Pricing
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Helper to support AnimatePresence imports cleanly in this file
import { motion, AnimatePresence } from "framer-motion";
