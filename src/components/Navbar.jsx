import React, { useState, useEffect } from "react";
import loGo from "../assets/images/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll event to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-white/80 shadow-md py-2" : "bg-black/20 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
       
        <div className="flex items-center gap-2">
        <img
          src={loGo}
          alt="New Relief International Logo"
          className="h-12 w-12 object-contain"
        />
          <a
            href="/"
            className={`text-2xl font-bold ${
              scrolled ? "text-gray-800" : "text-white drop-shadow-md"
            }`}
          >
            New Relief International
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" label="Home" scrolled={scrolled} />
          <NavLink href="/about" label="About Us" scrolled={scrolled} />
          <NavLink href="/events" label="Events" scrolled={scrolled} />
          <NavLink href="/news" label="News" scrolled={scrolled} />
          <NavLink href="/live" label="Live" scrolled={scrolled} />
          <NavLink href="/gallery" label="Gallery" scrolled={scrolled} />
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/contact"
            className={`rounded-full px-6 py-2 font-medium transition-all ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white/90 text-blue-800 hover:bg-white"
            }`}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`${
              scrolled
                ? "text-gray-700 hover:text-gray-900"
                : "text-white drop-shadow-md hover:text-gray-200"
            } focus:outline-none`}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/" label="Home" />
            <MobileNavLink href="/about" label="About Us" />
            <MobileNavLink href="/events" label="Events" />
            <MobileNavLink href="/news" label="News" />
            <MobileNavLink href="/live" label="Live" />
            <MobileNavLink href="/gallery" label="Gallery" />
            <div className="pt-4 pb-2">
              <a
                href="/contact"
                className="block w-full text-center rounded-md px-3 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop navigation link component
const NavLink = ({ href, label, scrolled }) => {
  return (
    <a
      href={href}
      className={`font-medium tracking-wide ${
        scrolled
          ? "text-gray-700 hover:text-gray-900"
          : "text-white drop-shadow-md hover:text-gray-200"
      } transition-colors`}
    >
      {label}
    </a>
  );
};

// Mobile navigation link component
const MobileNavLink = ({ href, label }) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
    >
      {label}
    </a>
  );
};

export default Navbar;
