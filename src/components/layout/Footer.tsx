import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

/* ── Social icons ─────────────────────────────────────────────────────────── */
function Instagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTok() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
    </svg>
  );
}

function YouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.56 3.5 12 3.5 12 3.5s-7.56 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.02 0 12 0 12s0 3.98.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.44 20.5 12 20.5 12 20.5s7.56 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.98 24 12 24 12s0-3.98-.5-5.81zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

/* ── Payment icons ────────────────────────────────────────────────────────── */
function VisaIcon() {
  return (
    <span className="inline-flex items-center justify-center border border-white/20 rounded px-2 py-1 font-ui text-[10px] font-bold tracking-widest text-white/70 bg-white/5 min-w-[40px]">
      VISA
    </span>
  );
}

function MastercardIcon() {
  return (
    <span className="inline-flex items-center justify-center border border-white/20 rounded px-1.5 py-1 bg-white/5 min-w-[40px]">
      <svg width="28" height="18" viewBox="0 0 38 24">
        <circle cx="14" cy="12" r="10" fill="#EB001B" opacity="0.8" />
        <circle cx="24" cy="12" r="10" fill="#F79E1B" opacity="0.8" />
        <path d="M19 5.93A10 10 0 0 1 24 12a10 10 0 0 1-5 6.07A10 10 0 0 1 14 12a10 10 0 0 1 5-6.07z" fill="#FF5F00" opacity="0.8" />
      </svg>
    </span>
  );
}

function FawryIcon() {
  return (
    <span className="inline-flex items-center justify-center border border-white/20 rounded px-2 py-1 font-ui text-[10px] font-bold tracking-wider text-[#F4A01C]/80 bg-white/5 min-w-[40px]">
      fawry
    </span>
  );
}

function ApplePayIcon() {
  return (
    <span className="inline-flex items-center justify-center border border-white/20 rounded px-2 py-1 bg-white/5 min-w-[40px]">
      <svg width="32" height="14" viewBox="0 0 60 26" fill="white" opacity="0.7">
        <path d="M11.5 3.5c-.8 1-2.1 1.8-3.3 1.7-.2-1.3.5-2.6 1.2-3.4C10.2.9 11.6.2 12.7.1c.1 1.3-.4 2.6-1.2 3.4zM12.7 5.3c-1.8-.1-3.4 1-4.2 1-1 0-2.4-.9-4-.9C2.4 5.5 0 7.4 0 11.3c0 2.4.9 5 2.1 6.6 1 1.4 1.9 2.6 3.2 2.6 1.3 0 1.9-.8 3.5-.8 1.6 0 2.1.8 3.6.8 1.4 0 2.3-1.3 3.2-2.6.6-.9 1-1.9 1.3-2.9-3.3-1.3-3.9-6 .4-7.5-.8-1.3-2.1-2.2-3.6-2.2z" />
        <path d="M24.5 1h2.8l-4.8 13.5H20l-4.8-13.5h2.9l3.2 9.9 3.2-9.9zM32 14.7c-2.6 0-4.4-1.8-4.4-4.4s1.8-4.4 4.4-4.4c2.6 0 4.4 1.8 4.4 4.4s-1.8 4.4-4.4 4.4zm0-7.1c-1.5 0-2.5 1.1-2.5 2.7s1 2.7 2.5 2.7 2.5-1.1 2.5-2.7-1-2.7-2.5-2.7zM45.8 6.1h1.8v8.4H45.8v-.9c-.6.7-1.5 1.1-2.6 1.1-2.3 0-4-1.8-4-4.4s1.7-4.4 4-4.4c1 0 1.9.4 2.6 1.1V6.1zm-2.2 6.7c1.5 0 2.4-1.1 2.4-2.7s-.9-2.7-2.4-2.7-2.4 1.1-2.4 2.7.9 2.7 2.4 2.7zM49 6.1h1.8v1c.5-.8 1.3-1.2 2.3-1.2.3 0 .5 0 .8.1v1.8c-.3-.1-.6-.2-.9-.2-1.2 0-2 .8-2 2.1v4.8H49V6.1zM59.4 6.1h-2.1V3.7h-1.8v2.4h-1.3v1.6h1.3v4.4c0 1.7.9 2.6 2.5 2.6.5 0 1-.1 1.4-.3v-1.6c-.3.1-.6.2-.9.2-.6 0-.9-.3-.9-1V7.7h2.1V6.1h-.3z" />
      </svg>
    </span>
  );
}

/* ── Footer ───────────────────────────────────────────────────────────────── */
export default function Footer() {
  const t = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-void text-parchment overflow-hidden">

      {/* Faded wordmark watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
      >
        <span
          className="font-display text-parchment whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 18vw, 18rem)", opacity: 0.03, letterSpacing: "0.15em" }}
        >
          KEMET
        </span>
      </div>

      {/* Main columns */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Shop */}
          <div>
            <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Shop</p>
            <ul className="space-y-3">
              {[
                { href: "/shop",                    label: "Shop All"    },
                { href: "/shop?category=wallets",   label: "Wallets"     },
                { href: "/shop?category=bags",      label: "Bags"        },
                { href: "/shop?category=belts",     label: "Belts"       },
                { href: "/shop?category=accessories",label: "Accessories" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="font-ui text-xs text-tan hover:text-parchment transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold mb-6">About</p>
            <ul className="space-y-3">
              {[
                { href: "/our-story",    label: "Our Story"    },
                { href: "/the-craft",    label: "The Craft"    },
                { href: "/leather-care", label: "Leather Care" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="font-ui text-xs text-tan hover:text-parchment transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Support</p>
            <ul className="space-y-3">
              {[
                { href: "/faq",              label: "FAQ"                },
                { href: "/shipping-returns", label: "Shipping & Returns" },
                { href: "/contact",          label: "Contact Us"         },
                { href: "/size-guide",       label: "Size Guide"         },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="font-ui text-xs text-tan hover:text-parchment transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Follow</p>
            <div className="flex flex-col gap-4">
              {[
                { href: "https://instagram.com/kemetleather", icon: <Instagram />, label: "Instagram" },
                { href: "https://tiktok.com/@kemetleather",   icon: <TikTok />,    label: "TikTok"    },
                { href: "https://youtube.com/@kemetleather",  icon: <YouTube />,   label: "YouTube"   },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-tan hover:text-parchment transition-colors group"
                >
                  <span className="group-hover:text-gold transition-colors">{icon}</span>
                  <span className="font-ui text-xs">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-tan/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            <VisaIcon />
            <MastercardIcon />
            <FawryIcon />
            <ApplePayIcon />
          </div>

          {/* Copyright */}
          <p className="font-ui text-[10px] tracking-[0.25em] uppercase text-tan/50 text-center">
            Made in Egypt &nbsp;·&nbsp; © {year} Kemet &nbsp;·&nbsp; All rights reserved
          </p>

          {/* Language */}
          <div className="flex items-center gap-2 font-ui text-[10px] tracking-widest text-tan/50">
            <Link href="/" locale="en" className="hover:text-tan transition-colors">EN</Link>
            <span>|</span>
            <Link href="/" locale="ar" className="hover:text-tan transition-colors">عر</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
