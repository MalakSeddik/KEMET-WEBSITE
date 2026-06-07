"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "#patina",      label: "The Patina"   },
  { href: "#steps",       label: "Care Steps"   },
  { href: "#conditioner", label: "Conditioners" },
  { href: "#do-dont",     label: "Do & Don't"   },
  { href: "#storage",     label: "Storage"      },
  { href: "#faq",         label: "FAQ"          },
];

export default function StickyNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const update = () => {
      const mid = window.scrollY + 140;
      let current = "";
      NAV_ITEMS.forEach(({ href }) => {
        const el = document.getElementById(href.slice(1));
        if (el && el.offsetTop <= mid) current = href.slice(1);
      });
      setActive(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav
      className="sticky z-40 overflow-x-auto"
      style={{
        top: "64px",
        background: "rgba(253,248,240,0.96)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(176,125,58,0.18)",
      }}
    >
      <div className="max-w-[1060px] mx-auto flex px-6 md:px-8">
        {NAV_ITEMS.map(({ href, label }) => {
          const id = href.slice(1);
          const isActive = active === id;
          return (
            <a
              key={href}
              href={href}
              className="font-ui font-normal uppercase whitespace-nowrap transition-colors duration-300"
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                padding: "16px",
                borderBottom: `2px solid ${isActive ? "#b07d3a" : "transparent"}`,
                color: isActive ? "#b07d3a" : "rgba(176,125,58,0.4)",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
