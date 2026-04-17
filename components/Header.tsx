"use client";
import { useState, useEffect } from "react";
import { Menu, X, Stethoscope } from "lucide-react";

const navLinks = [
  { href: "#about", label: "О враче" },
  { href: "#services", label: "Услуги" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#video", label: "Видео" },
  { href: "#blog", label: "Блог" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-mint-600 font-semibold">
          <Stethoscope className="w-6 h-6" />
          <span className="text-sm md:text-base font-serif">Потёмина И.В.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-mint-600 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#booking" className="hidden md:block btn-primary text-sm">
          Записаться
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-gray-600 hover:text-mint-600"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-mint-600 font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#booking" className="btn-primary text-center mt-2" onClick={() => setOpen(false)}>
            Записаться
          </a>
        </div>
      )}
    </header>
  );
}
