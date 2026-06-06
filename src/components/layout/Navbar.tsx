"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import CartBadge from "./CartBadge";
import KemetLogo from "./KemetLogo";

const navLinks = [
  { href: "/shop",          key: "shop"        },
  { href: "/the-craft",     key: "theCraft"    },
  { href: "/our-story",     key: "ourStory"    },
  { href: "/leather-care",  key: "leatherCare" },
] as const;

export default function Navbar() {
  const t        = useTranslations("nav");
  const locale   = useLocale();
  const pathname = usePathname();

  const [scrolled,    setScrolled]    = useState(false);
  const [drawerOpen,  setDrawerOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      {/* ── Main bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-void shadow-md" : "bg-transparent"
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center">

          {/* Logo — left */}
          <Link href="/" className="text-parchment hover:text-gold transition-colors shrink-0">
            <KemetLogo />
          </Link>

          {/* Nav links — absolutely centered */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10">
            {navLinks.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className={`font-ui text-[11px] tracking-[0.18em] uppercase transition-colors hover:text-gold ${
                  pathname === href ? "text-gold" : "text-parchment"
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Right — language + cart + hamburger */}
          <div className="ml-auto flex items-center gap-5">
            {/* Language toggle */}
            <div className="hidden md:flex items-center gap-2 font-ui text-[11px] tracking-widest">
              <Link
                href={pathname}
                locale="en"
                className={`transition-colors ${
                  locale === "en" ? "text-parchment" : "text-tan hover:text-parchment"
                }`}
              >
                EN
              </Link>
              <span className="text-tan/40 select-none">|</span>
              <Link
                href={pathname}
                locale="ar"
                className={`transition-colors ${
                  locale === "ar" ? "text-parchment" : "text-tan hover:text-parchment"
                }`}
              >
                عر
              </Link>
            </div>

            <CartBadge />

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden text-parchment hover:text-gold transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer backdrop ── */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Mobile drawer ── */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-void z-50 flex flex-col transform transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-tan/20 shrink-0">
          <Link
            href="/"
            className="text-parchment"
            onClick={() => setDrawerOpen(false)}
          >
            <KemetLogo />
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-parchment hover:text-gold transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 px-6 py-10 flex flex-col gap-7">
          {navLinks.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setDrawerOpen(false)}
              className={`font-ui text-xs tracking-[0.2em] uppercase transition-colors hover:text-gold ${
                pathname === href ? "text-gold" : "text-parchment"
              }`}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Drawer footer — language + cart */}
        <div className="px-6 py-8 border-t border-tan/20 flex items-center justify-between">
          <div className="flex items-center gap-3 font-ui text-xs tracking-widest">
            <Link
              href={pathname}
              locale="en"
              onClick={() => setDrawerOpen(false)}
              className={locale === "en" ? "text-parchment" : "text-tan"}
            >
              EN
            </Link>
            <span className="text-tan/40">|</span>
            <Link
              href={pathname}
              locale="ar"
              onClick={() => setDrawerOpen(false)}
              className={locale === "ar" ? "text-parchment" : "text-tan"}
            >
              عر
            </Link>
          </div>
          <CartBadge />
        </div>
      </aside>
    </>
  );
}
