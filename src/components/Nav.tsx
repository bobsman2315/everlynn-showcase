import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/waste-management", label: "Waste Mgt" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 px-6 md:px-12 flex items-center justify-between transition-all duration-300 backdrop-blur-md bg-white/95 border-b border-border shadow-sm ${
        isScrolled ? "py-3 md:py-4" : "py-4 md:py-5"
      }`}
    >
      <Link to="/" className="flex items-center gap-3 z-50">
        <img
          src="/jalsutra_logo.png"
          alt="Jalsutra Logo"
          className="h-12 md:h-16 w-auto object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-[0.72rem] tracking-[0.25em] uppercase">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeProps={{ className: "text-gold font-semibold border-b border-gold/40 pb-0.5" }}
            inactiveProps={{ className: "text-foreground/80 hover:text-gold" }}
            className="transition-all duration-300 font-medium"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Order Button */}
      <div className="hidden md:block">
        <Link
          to="/contact"
          className="text-[0.72rem] tracking-[0.25em] uppercase text-gold border-b border-gold/20 hover:border-gold pb-1 transition-all font-medium"
        >
          Inquire Now
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 text-foreground p-1 focus:outline-none"
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
            className="fixed inset-0 bg-background z-40 flex flex-col justify-center px-10 gap-8"
          >
            <div className="flex flex-col gap-6 text-xl tracking-[0.2em] uppercase font-display">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  activeProps={{
                    className: "text-gold font-semibold border-b border-border pb-2",
                  }}
                  inactiveProps={{
                    className: "text-foreground hover:text-gold border-b border-border/40 pb-2",
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
