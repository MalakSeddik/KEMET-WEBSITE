"use client";

import { Link } from "@/i18n/navigation";

type Props = {
  headline: string;
  tagline:  string;
  cta:      string;
  /** URL of a leather texture photo — swap in Cloudinary URL when ready */
  bgImage?: string;
  /** URL of a background video (mp4) — takes priority over bgImage */
  bgVideo?: string;
};

export default function Hero({ headline, tagline, cta, bgImage, bgVideo }: Props) {
  return (
    <section className="relative -mt-16 min-h-screen flex flex-col items-center overflow-hidden">

      {/* ── Background ── */}
      {bgVideo ? (
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
        />
      ) : bgImage ? (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        /* Leather-texture fallback gradient */
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, #2C1A09 0%, #0E0805 55%)," +
              "radial-gradient(ellipse at 80% 30%, #1A0E06 0%, #080604 70%)",
          }}
        />
      )}

      {/* ── Grain texture ── */}
      <div className="grain-overlay" />

      {/* ── Warm parchment overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom," +
            "rgba(8,6,4,0.55) 0%," +
            "rgba(26,15,5,0.35) 35%," +
            "rgba(176,125,58,0.15) 65%," +
            "rgba(8,6,4,0.75) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto w-full">

        {/* Eyebrow */}
        <p
          className="hero-tagline font-ui text-[10px] tracking-[0.5em] uppercase text-gold mb-8"
          style={{ animationDelay: "0.6s" }}
        >
          Handcrafted in Egypt · Est. 2026
        </p>

        {/* Wordmark */}
        <h1 className="hero-wordmark font-display text-7xl md:text-9xl text-parchment leading-none mb-2">
          {headline}
        </h1>

        {/* Decorative rule */}
        <div className="hero-rule h-px w-24 bg-gold mx-auto my-8 origin-center" />

        {/* Tagline */}
        <p className="hero-tagline font-serif italic text-xl md:text-2xl text-parchment/80 leading-relaxed mb-12">
          {tagline}
        </p>

        {/* CTA */}
        <div className="hero-cta">
          <Link
            href="/shop"
            className="inline-block font-ui text-xs tracking-[0.3em] uppercase text-parchment border border-gold px-10 py-4 hover:bg-gold hover:text-void transition-all duration-300"
          >
            {cta}
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="hero-cta relative z-10 pb-8 flex flex-col items-center gap-2" style={{ animationDelay: "2.4s" }}>
        <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-gold/60">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
