import { Link } from "@/i18n/navigation";
import StickyNav from "./StickyNav";
import FaqAccordion from "./FaqAccordion";

const GRAIN  = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`;
const RULE   = "rgba(176,125,58,0.18)";
const RULE_L = "rgba(176,125,58,0.08)";
const SECT_BG = "rgba(245,234,216,0.3)";

/* ── Shared sub-components ─────────────────────────────────────────────────── */

function SecLabel({ children }: { children: string }) {
  return <div className="craft-sec-label">{children}</div>;
}

function SecHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-light text-ink mb-8 leading-[1.05]"
      style={{ fontSize: "clamp(28px, 4.5vw, 50px)", letterSpacing: "0.08em" }}
    >
      {children}
    </h2>
  );
}

function Prose({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <p
      className={`font-light mb-5 leading-[2] ${className}`}
      style={{ fontSize: "clamp(17px, 2vw, 20px)", color: "#3a2410", ...style }}
    >
      {children}
    </p>
  );
}

/* ── Data ──────────────────────────────────────────────────────────────────── */

const PATINA_STAGES = [
  { dot: "#e8cfa0", stage: "Brand New",  text: "Pale, firm, and raw. The hide is at its most honest and natural state." },
  { dot: "#d4a843", stage: "1–2 Months", text: "Hand oils begin working into the hide. First darkening. Leather starts to soften." },
  { dot: "#c9954c", stage: "6 Months",   text: "Rich amber tone develops. High-touch areas visibly deeper. Personality emerging." },
  { dot: "#8b4513", stage: "1 Year",     text: "Deep warm saddle brown. Unique to this owner and no one else on earth." },
  { dot: "#3a1a08", stage: "3+ Years",   text: "Near-black on edges and high-wear points. A piece with a full story." },
];

const CARE_CARDS = [
  { num: "01", icon: "🧹", title: "Clean Before Conditioning",   body: "Use a soft, slightly damp cloth to remove surface dust and dirt before applying anything. Never apply conditioner over grime — it seals it in. Work gently in small circular motions. Let the surface dry completely before the next step." },
  { num: "02", icon: "🫙", title: "Condition Every 3–6 Months",  body: "Apply a small amount of leather conditioner with a soft cloth. Work it in with gentle circular motions — less is more. Let it absorb for a few hours or overnight before using the piece. This keeps the hide supple and prevents cracking." },
  { num: "03", icon: "💧", title: "If It Gets Wet — Air Dry Only", body: "Pat away excess moisture with a dry cloth immediately. Then let it air dry naturally at room temperature — away from heaters, radiators, and direct sunlight. Never use a hairdryer. Heat destroys the hide's natural structure. Once dry, apply conditioner." },
  { num: "04", icon: "✋", title: "Embrace the Scratches",        body: "Minor surface scratches on full-grain leather are not damage — they are character. Rub your fingertip firmly over a light scratch and the heat from friction will push the oils back through the surface and fade it almost completely. This is the magic of real leather." },
  { num: "05", icon: "🌬", title: "Let It Breathe",               body: "Store your KEMET piece in the cloth dust bag it arrived in. Never seal it in plastic — leather needs air circulation to stay healthy. Keep it away from prolonged direct sunlight during storage to prevent uneven fading." },
  { num: "06", icon: "💛", title: "Use It Every Day",             body: "The oils from your hands are the best conditioner leather has ever known. A piece that is used daily develops a richer, more beautiful patina than one kept in a drawer. KEMET is made to be carried, touched, and lived with — not preserved." },
];

const CONDITIONERS = [
  { name: "Leather Honey",    desc: "Our top recommendation. Penetrates deeply, does not darken the leather significantly, and lasts a long time. A little goes a very long way." },
  { name: "Beeswax Cream",    desc: "Natural, gentle, and adds a subtle water-resistant finish. Great for everyday use. Brands like Otter Wax and Saphir Renovateur are excellent choices." },
  { name: "Neatsfoot Oil",    desc: "The most traditional leather conditioner — made from cattle bones. Very effective but will noticeably darken the leather. Apply sparingly and embrace the deeper colour." },
  { name: "Coconut Oil",      desc: "A decent emergency option if nothing else is available. Use very sparingly — too much can clog the pores of the leather and turn rancid over time." },
  { name: "Gum Tragacanth",   desc: "For the edges only — not the main surface. The same product used to burnish and seal cut edges during production. Can be reapplied to refresh any edges that start to roughen." },
];

const DO_ITEMS = [
  "Clean gently with a slightly damp cloth before conditioning",
  "Air dry naturally at room temperature if it gets wet",
  "Condition every 3–6 months with a quality leather conditioner",
  "Store in the cloth dust bag between uses",
  "Rub scratches firmly with your fingertip to fade them",
  "Embrace the patina — darkening means the leather is healthy",
  "Keep away from sharp metal edges and rough surfaces",
  "Use it every day — your hands are its best conditioner",
  "Apply conditioner after any exposure to rain or heavy moisture",
];

const DONT_ITEMS = [
  "Use a hairdryer, heater, or direct sunlight to dry the leather",
  "Clean with alcohol, acetone, or household cleaning products",
  "Apply olive oil, petroleum jelly, or baby wipes",
  "Store in a plastic bag or airtight container",
  "Machine wash or submerge in water",
  "Iron the leather directly — even with a cloth between",
  "Leave in a hot car — heat cracks and dries the hide permanently",
  "Apply conditioner over dirt without cleaning first",
  "Use too much conditioner — it clogs the pores of the leather",
];

const STORAGE_CARDS = [
  { icon: "🫧", title: "Breathable Bag",    text: "Use the cloth dust bag your KEMET piece arrived in. Natural fabric lets air circulate and prevents moisture buildup that causes mould and stiffness." },
  { icon: "🌑", title: "Away from Light",   text: "Prolonged direct sunlight causes uneven fading. Store in a dark cupboard or drawer. Brief sunlight is fine — even beneficial — but avoid constant exposure." },
  { icon: "💧", title: "Dry Environment",   text: "Humidity causes mould. Keep away from damp spaces — basements, bathrooms, or areas that flood. If storing long-term, include a silica gel packet in the bag." },
  { icon: "📐", title: "Maintain Shape",    text: "Do not stack heavy items on top of your leather piece. If storing the laptop cover empty for a long time, place a thin piece of card inside to maintain its form." },
];

/* ── Page ──────────────────────────────────────────────────────────────────── */

export default function LeatherCarePage() {
  return (
    <div className="relative overflow-x-hidden bg-bg text-ink">

      {/* Fixed grain */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ backgroundImage: GRAIN, zIndex: 0, opacity: 0.5 }}
      />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="-mt-16 bg-void flex flex-col items-center justify-center text-center px-8 relative overflow-hidden" style={{ minHeight: "70vh" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(176,125,58,0.1) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-[620px]">
          <p
            className="craft-fade-1 font-ui font-light uppercase mb-6"
            style={{ fontSize: "8px", letterSpacing: "7px", color: "rgba(201,149,76,0.5)" }}
          >
            KEMET · كيمت · Full-Grain Leather
          </p>
          <h1
            className="craft-fade-2 font-display font-light text-parchment leading-none mb-[22px]"
            style={{ fontSize: "clamp(48px, 10vw, 100px)", letterSpacing: "0.15em" }}
          >
            Leather Care
          </h1>
          <p
            className="craft-fade-3 font-serif italic font-light leading-[1.7]"
            style={{ fontSize: "clamp(16px, 2.5vw, 22px)", color: "rgba(201,149,76,0.55)" }}
          >
            Real leather is alive.<br />
            Treat it well and it will reward you for decades.
          </p>
        </div>
      </section>

      {/* ══ STICKY NAV ════════════════════════════════════════════════════════ */}
      <StickyNav />

      {/* ══ PATINA ════════════════════════════════════════════════════════════ */}
      <section id="patina" className="relative z-10 border-b scroll-reveal scroll-mt-130" style={{ borderColor: RULE_L }}>
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-[90px]">
          <SecLabel>The Beautiful Truth</SecLabel>
          <SecHeading>
            Your Piece Gets<br />Better with Time
          </SecHeading>

          <p
            className="font-serif italic font-light mb-12 leading-[1.65]"
            style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: "#b07d3a", maxWidth: "600px" }}
          >
            Most products age badly. Full-grain leather ages like fine wine —
            it deepens, softens, and develops a character that is entirely your own.
            This transformation is called the patina. It is not a flaw. It is the proof.
          </p>

          {/* Patina track */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0.5 mb-12">
            {PATINA_STAGES.map(({ dot, stage, text }) => (
              <div
                key={stage}
                className="px-4 py-7 text-center border transition-colors hover:bg-parchment/70 cursor-default"
                style={{ borderColor: RULE, background: "rgba(245,234,216,0.4)" }}
              >
                <div
                  className="w-[52px] h-[52px] rounded-full mx-auto mb-4 border border-tan/15 transition-transform hover:scale-110"
                  style={{ background: dot }}
                />
                <h4 className="font-ui text-[8px] tracking-[3px] uppercase text-tan mb-2.5 font-normal">{stage}</h4>
                <p className="text-[13px] leading-[1.75] font-light" style={{ color: "#5c3a1e" }}>{text}</p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote style={{ borderLeft: "2px solid rgba(176,125,58,0.35)", padding: "16px 0 16px 28px", maxWidth: "560px" }}>
            <p className="font-serif italic font-light leading-[1.65]" style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: "#b07d3a" }}>
              No two pieces age the same way.<br />
              Yours will be unlike anyone else&rsquo;s on earth.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ══ CARE STEPS ════════════════════════════════════════════════════════ */}
      <section id="steps" className="relative z-10 border-b scroll-reveal scroll-mt-130" style={{ background: SECT_BG, borderColor: RULE_L }}>
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-[90px]">
          <SecLabel>The Routine</SecLabel>
          <SecHeading>
            Six Steps to a<br />Lifetime of Beauty
          </SecHeading>
          <Prose>
            Full-grain leather needs very little — but that little matters enormously.
            Follow these steps and your KEMET piece will outlast everything else you own.
          </Prose>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 mt-10">
            {CARE_CARDS.map(({ num, icon, title, body }) => (
              <div
                key={num}
                className="relative overflow-hidden px-7 py-8 care-hover-card cursor-default"
              >
                {/* Ghost number */}
                <span
                  className="absolute top-4 right-5 font-display font-light leading-none select-none"
                  style={{ fontSize: "52px", color: "rgba(176,125,58,0.1)" }}
                >
                  {num}
                </span>
                <span className="block text-[22px] mb-3.5 relative">{icon}</span>
                <h3
                  className="font-display font-normal text-ink mb-3 relative"
                  style={{ fontSize: "18px", letterSpacing: "2px" }}
                >
                  {title}
                </h3>
                <p className="text-[15px] leading-[1.85] font-light relative" style={{ color: "#5c3a1e" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONDITIONERS ══════════════════════════════════════════════════════ */}
      <section id="conditioner" className="relative z-10 border-b scroll-reveal scroll-mt-130" style={{ borderColor: RULE_L }}>
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-[90px]">
          <SecLabel>What to Use</SecLabel>
          <SecHeading>
            Choosing the Right<br />Conditioner
          </SecHeading>
          <Prose style={{ maxWidth: "680px" }}>
            Not all conditioners are equal. Some will darken your leather significantly.
            Others will do nothing at all. Here is what works — and what to look for.
          </Prose>

          <div className="flex flex-col mt-8">
            {CONDITIONERS.map(({ name, desc }) => (
              <div
                key={name}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b hover:bg-tan/[0.03] transition-colors"
                style={{ borderColor: RULE_L }}
              >
                <div
                  className="py-[18px] md:pr-5 md:border-r flex items-center"
                  style={{ borderColor: RULE_L }}
                >
                  <h4
                    className="font-display font-normal text-tan"
                    style={{ fontSize: "14px", letterSpacing: "1.5px" }}
                  >
                    {name}
                  </h4>
                </div>
                <div className="py-[18px] md:pl-5 font-light leading-[1.8] flex items-center" style={{ fontSize: "14px", color: "#5c3a1e" }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>

          {/* Warn box */}
          <div className="mt-7 px-6 py-5" style={{ borderLeft: "3px solid #7a2010", background: "rgba(122,32,16,0.05)" }}>
            <p className="font-light leading-[1.8]" style={{ fontSize: "15px", color: "#3a2410" }}>
              <strong style={{ color: "#7a2010" }}>Never use:</strong>{" "}
              baby wipes, olive oil (goes rancid), petroleum jelly (Vaseline), alcohol, acetone,
              household cleaners, or any product not specifically designed for leather. These strip
              the natural oils and can permanently damage the hide.
            </p>
          </div>
        </div>
      </section>

      {/* ══ DO & DON'T ════════════════════════════════════════════════════════ */}
      <section id="do-dont" className="relative z-10 border-b scroll-reveal scroll-mt-130" style={{ background: SECT_BG, borderColor: RULE_L }}>
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-[90px]">
          <SecLabel>The Rules</SecLabel>
          <SecHeading>Do &amp; Don&rsquo;t</SecHeading>
          <Prose style={{ maxWidth: "680px" }}>
            Simple rules that will make the difference between a piece that lasts ten years
            and one that lasts ten months.
          </Prose>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-10">
            {/* Do */}
            <div className="px-7 py-8" style={{ background: "rgba(45,80,32,0.06)", border: "1px solid rgba(45,80,32,0.15)" }}>
              <h3
                className="font-display font-medium mb-5 flex items-center gap-2.5"
                style={{ fontSize: "16px", letterSpacing: "3px", color: "#2d5020" }}
              >
                ✓ &nbsp;Do This
              </h3>
              <ul className="list-none flex flex-col">
                {DO_ITEMS.map((item) => (
                  <li key={item} className="care-do-item">{item}</li>
                ))}
              </ul>
            </div>

            {/* Don't */}
            <div className="px-7 py-8" style={{ background: "rgba(122,32,16,0.05)", border: "1px solid rgba(122,32,16,0.12)" }}>
              <h3
                className="font-display font-medium mb-5 flex items-center gap-2.5"
                style={{ fontSize: "16px", letterSpacing: "3px", color: "#7a2010" }}
              >
                ✕ &nbsp;Never Do This
              </h3>
              <ul className="list-none flex flex-col">
                {DONT_ITEMS.map((item) => (
                  <li key={item} className="care-dont-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STORAGE ═══════════════════════════════════════════════════════════ */}
      <section id="storage" className="relative z-10 border-b scroll-reveal scroll-mt-130" style={{ borderColor: RULE_L }}>
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-[90px]">
          <SecLabel>Between Uses</SecLabel>
          <SecHeading>
            Storing Your<br />KEMET Piece
          </SecHeading>
          <Prose style={{ maxWidth: "680px" }}>
            When not in use, how you store your piece matters. Follow these four
            principles and it will be in perfect condition whenever you reach for it.
          </Prose>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 my-9">
            {STORAGE_CARDS.map(({ icon, title, text }) => (
              <div
                key={title}
                className="px-[22px] py-7 text-center care-hover-card cursor-default"
              >
                <span className="block text-[26px] mb-3.5">{icon}</span>
                <h4
                  className="font-display font-normal text-ink mb-2.5"
                  style={{ fontSize: "14px", letterSpacing: "2px" }}
                >
                  {title}
                </h4>
                <p className="text-[13px] leading-[1.75] font-light" style={{ color: "#5c3a1e" }}>{text}</p>
              </div>
            ))}
          </div>

          {/* KEMET note */}
          <div className="care-kemet-note">
            <p className="font-serif italic font-light leading-[1.75]" style={{ fontSize: "17px", color: "#3a2410" }}>
              The cloth dust bag included with every KEMET order is not packaging —{" "}
              <strong style={{ color: "#b07d3a", fontStyle: "normal" }}>it is part of the product.</strong>{" "}
              Keep it. Use it. Your leather will thank you.
            </p>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section id="faq" className="relative z-10 border-b scroll-reveal scroll-mt-130" style={{ background: SECT_BG, borderColor: RULE_L }}>
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-[90px]">
          <SecLabel>Questions</SecLabel>
          <SecHeading>Frequently Asked</SecHeading>
          <FaqAccordion />
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════════════════════════ */}
      <div className="relative z-10 bg-void px-6 md:px-10 py-20 text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(176,125,58,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative z-10">
          <span
            className="block font-ui font-light uppercase mb-5"
            style={{ fontSize: "8px", letterSpacing: "6px", color: "rgba(201,149,76,0.4)" }}
          >
            Every piece deserves care
          </span>
          <p
            className="font-serif italic font-light mx-auto mb-9 leading-[1.7] text-parchment"
            style={{ fontSize: "clamp(18px, 3vw, 28px)", maxWidth: "560px" }}
          >
            You chose something real.<br />
            Now make it last a lifetime.
          </p>
          <Link
            href="/shop"
            className="inline-block font-ui font-normal uppercase bg-tan text-ink px-12 py-[18px] transition-colors hover:bg-gold"
            style={{ fontSize: "10px", letterSpacing: "5px" }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

    </div>
  );
}
