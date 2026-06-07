import { Link } from "@/i18n/navigation";

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`;
const RULE_COLOR = "rgba(176,125,58,0.18)";

/* ── Shared sub-components ─────────────────────────────────────────────────── */

function SecLabel({ children }: { children: string }) {
  return <div className="craft-sec-label">{children}</div>;
}

function SecHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-light text-ink mb-8 leading-[1.05]"
      style={{ fontSize: "clamp(28px, 5vw, 52px)", letterSpacing: "0.08em" }}
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
      className={`font-light mb-6 leading-[2] ${className}`}
      style={{ fontSize: "clamp(17px, 2vw, 21px)", color: "#3a2410", ...style }}
    >
      {children}
    </p>
  );
}

function PhotoPlaceholder({
  label,
  className = "",
  style,
}: {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`bg-void relative overflow-hidden flex items-center justify-center ${className}`}
      style={style}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(-45deg, rgba(176,125,58,0.04) 0px, rgba(176,125,58,0.04) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <p
        className="relative z-10 font-ui text-center px-6"
        style={{ fontSize: "8px", letterSpacing: "4px", textTransform: "uppercase", color: "rgba(201,149,76,0.3)" }}
      >
        {label}
      </p>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────────── */

export default function TheCraftPage() {
  return (
    <div className="relative overflow-x-hidden bg-bg text-ink">

      {/* Fixed grain texture */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ backgroundImage: GRAIN, zIndex: 0, opacity: 0.5 }}
      />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="-mt-16 min-h-screen bg-void flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">

        {/* BG leather-texture placeholder — swap for real photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,11,8,0.55) 0%, rgba(14,11,8,0.3) 50%, rgba(14,11,8,0.85) 100%)," +
              "repeating-linear-gradient(45deg, rgba(176,125,58,0.03) 0px, rgba(176,125,58,0.03) 1px, transparent 1px, transparent 12px)",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(176,125,58,0.1) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-[640px]">
          <p
            className="craft-fade-1 font-ui font-light uppercase mb-7"
            style={{ fontSize: "8px", letterSpacing: "7px", color: "rgba(201,149,76,0.55)" }}
          >
            KEMET · كيمت · Egyptian Leather Craft
          </p>
          <h1
            className="craft-fade-2 font-display font-light text-parchment leading-none mb-6"
            style={{ fontSize: "clamp(56px, 12vw, 120px)", letterSpacing: "0.15em" }}
          >
            The Craft
          </h1>
          <p
            className="craft-fade-3 font-serif italic font-light leading-[1.7]"
            style={{ fontSize: "clamp(17px, 2.5vw, 24px)", color: "rgba(201,149,76,0.6)" }}
          >
            Every piece begins as an animal that lived.<br />
            It ends as something that will outlast us both.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="craft-fade-4 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div
            className="w-px h-12 craft-scroll-line"
            style={{ background: "linear-gradient(to bottom, #b07d3a, transparent)" }}
          />
          <span
            className="font-ui uppercase tracking-[4px]"
            style={{ fontSize: "7px", color: "rgba(201,149,76,0.35)" }}
          >
            Read the process
          </span>
        </div>
      </section>

      {/* ══ 01 · THE MATERIAL ═════════════════════════════════════════════════ */}
      <section
        className="relative z-10 border-b scroll-reveal"
        style={{ borderColor: RULE_COLOR }}
      >
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div>
              <SecLabel>01 · The Material</SecLabel>
              <SecHeading>Where It Begins</SecHeading>
              <Prose>
                Not all leather is the same. Most of what the world calls leather
                was never really leather at all — bonded scraps, painted plastic,
                material that looks the part for six months before it betrays you.
              </Prose>
              <Prose>
                At KEMET we use only{" "}
                <em style={{ color: "#b07d3a" }}>full-grain leather</em>. The top layer of the
                hide. The part that faced the world. It carries the natural grain,
                the marks, the character of the animal it came from. We do not sand
                it down. We do not paint over it. We do not hide what it is.
              </Prose>
              <Prose>
                We source our hides from trusted tanneries, selecting each one by
                hand — feeling the weight, the temper, the way it bends. If it
                doesn&rsquo;t feel right, it doesn&rsquo;t become a KEMET piece.
              </Prose>
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/craft-hides.jpg"
                alt="Full-grain leather hides hanging in the workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 02 · TANNING ══════════════════════════════════════════════════════ */}
      <section
        className="relative z-10 border-b scroll-reveal"
        style={{ background: "rgba(245,234,216,0.35)", borderColor: RULE_COLOR }}
      >
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/craft-tanning.jpg"
                alt="Vegetable tanning process — hide in natural light"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <SecLabel>02 · The Process</SecLabel>
              <SecHeading>
                Vegetable-Tanned.<br />Always.
              </SecHeading>
              <Prose>
                Chrome tanning takes two days. It produces soft, uniform leather
                that looks identical from hide to hide. It is the method that built
                the fast-fashion leather industry.
              </Prose>
              <Prose style={{ fontStyle: "italic", color: "#b07d3a" }}>
                We don&rsquo;t use it.
              </Prose>
              <Prose>
                Vegetable tanning takes weeks. It uses natural tannins extracted
                from tree bark — oak, chestnut, mimosa — the same method used by
                craftsmen for thousands of years. The leather comes out firm,
                honest, and alive. It smells like earth. It feels like something
                real. And over time, it deepens into a patina that belongs
                only to you.
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 03 · THE CUTTING ══════════════════════════════════════════════════ */}
      <section
        className="relative z-10 border-b scroll-reveal"
        style={{ borderColor: RULE_COLOR }}
      >
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-24">
          <SecLabel>03 · The Cutting</SecLabel>
          <SecHeading>Every Cut Is a Decision</SecHeading>

          <div className="w-full my-10 overflow-hidden" style={{ aspectRatio: "16 / 7" }}>
            <img
              src="/images/craft-cutting.jpg"
              alt="Hands cutting leather with a blade"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-[680px] mt-10">
            <Prose>
              A hide is not uniform. The back is dense and strong. The belly is
              softer and more pliable. The shoulders have a different grain from
              the rump. A craftsman who knows their material knows where to cut —
              and where not to.
            </Prose>
            <Prose>
              Every KEMET laptop cover is cut from the best sections of the hide.
              The pieces are traced, marked, and cut by hand with a sharp blade
              and a steady eye. No laser cutters. No die presses. The cut
              determines the integrity of everything that follows.
            </Prose>
          </div>
        </div>
      </section>

      {/* ══ 04 · THE STITCH ═══════════════════════════════════════════════════ */}
      <section
        className="relative z-10 border-b scroll-reveal"
        style={{ background: "rgba(245,234,216,0.35)", borderColor: RULE_COLOR }}
      >
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div>
              <SecLabel>04 · The Stitching</SecLabel>
              <SecHeading>The Saddle Stitch</SecHeading>
              <Prose>
                Machines stitch with one thread through a loop. If that thread
                breaks anywhere along the seam, the whole thing unravels.
              </Prose>

              {/* Pull quote */}
              <blockquote
                className="my-10"
                style={{ borderLeft: "2px solid rgba(176,125,58,0.35)", padding: "16px 0 16px 28px" }}
              >
                <p
                  className="font-serif italic font-light leading-[1.65]"
                  style={{ fontSize: "clamp(19px, 2.5vw, 26px)", color: "#b07d3a" }}
                >
                  We use the saddle stitch — two needles, two threads, passing
                  through each hole from opposite sides simultaneously. If one
                  thread breaks, the other holds.
                </p>
              </blockquote>

              <Prose>
                It is the oldest and strongest stitch in leather craft. It takes
                longer. It is worth every minute. Every stitch hole is punched by
                hand with a pricking iron. Every stitch is pulled to the same
                tension. The result is a seam that will not fail before the
                leather does.
              </Prose>
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/craft-stitch.jpg"
                alt="Saddle stitch close-up with two needles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 05 · THE EDGES ════════════════════════════════════════════════════ */}
      <section
        className="relative z-10 border-b scroll-reveal"
        style={{ borderColor: RULE_COLOR }}
      >
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/craft-edges.jpg"
                alt="Burnished leather edge close-up"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <SecLabel>05 · The Finishing</SecLabel>
              <SecHeading>
                The Detail That Separates<br />Craft from Manufacturing
              </SecHeading>
              <Prose>
                Run your finger along the edge of a cheap leather good. You will
                feel roughness, exposed fibre, sometimes a thin strip of paint
                applied to hide what lies beneath.
              </Prose>
              <Prose>
                Run your finger along the edge of a KEMET piece. You will feel
                something smooth, rounded, and intentional — because every edge
                is bevelled, sanded through multiple grits, treated with gum
                tragacanth, and burnished by hand until it is sealed and polished.
              </Prose>
              <Prose style={{ fontStyle: "italic", color: "#b07d3a" }}>
                This takes time. Most manufacturers skip it entirely.
                We consider it non-negotiable.
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 06 · THE STAMP ════════════════════════════════════════════════════ */}
      <section
        className="relative z-10 border-b scroll-reveal"
        style={{ background: "rgba(245,234,216,0.35)", borderColor: RULE_COLOR }}
      >
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-24">
          <SecLabel>06 · The Mark</SecLabel>
          <SecHeading>The KEMET Stamp</SecHeading>

          <div className="flex items-center gap-12 flex-wrap mt-10 mb-10">

            {/* Stamp mark */}
            <div
              className="w-[140px] h-[140px] rounded-full border-2 border-tan/40 flex items-center justify-center shrink-0"
              style={{ boxShadow: "0 0 0 6px rgba(176,125,58,0.08)" }}
            >
              <div className="w-[118px] h-[118px] rounded-full border border-tan/20 flex flex-col items-center justify-center gap-1">
                <span
                  className="font-display font-normal text-tan tracking-[3px]"
                  style={{ fontSize: "22px" }}
                >
                  KEMET
                </span>
                <div className="w-9 h-px bg-tan/30" />
                <span className="font-ui text-[6px] tracking-[2px] uppercase text-tan/50">Handmade</span>
                <span className="font-ui text-[6px] tracking-[2px] uppercase text-tan/50">Egypt · كيمت</span>
              </div>
            </div>

            <div className="max-w-[520px]">
              <Prose>
                Before a piece leaves our hands, it receives the KEMET stamp —
                pressed into the leather with a custom brass die, leaving a
                permanent impression of who made it and where it came from.
              </Prose>
              <Prose>
                This mark is our signature. Our accountability. Our promise that
                what you hold is the real thing — made by{" "}
                <em style={{ color: "#b07d3a" }}>Malak Hesham</em>,
                by hand, in Egypt.
              </Prose>
            </div>
          </div>

          <div className="w-full overflow-hidden" style={{ aspectRatio: "16 / 7" }}>
            <img
              src="/images/craft-stamp.jpg"
              alt="Brass KEMET stamp being pressed into leather"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══ 07 · THE PATINA ═══════════════════════════════════════════════════ */}
      <section
        className="relative z-10 border-b scroll-reveal"
        style={{ borderColor: RULE_COLOR }}
      >
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-24">
          <SecLabel>07 · The Life of the Piece</SecLabel>
          <SecHeading>It Gets Better</SecHeading>

          <Prose className="text-center mx-auto mb-12" style={{ maxWidth: "660px" }}>
            Most products deteriorate from the moment you use them.
            Full-grain leather does the opposite.
          </Prose>

          {/* Patina track — 5 stages */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0.5 my-10">
            {[
              { dot: "#e8cfa0", stage: "Brand New",  text: "Pale, firm, raw. The leather is at its most honest and natural state." },
              { dot: "#d4a843", stage: "1–2 Months", text: "Hand oils begin working in. First darkening. The leather starts softening." },
              { dot: "#c9954c", stage: "6 Months",   text: "Rich amber tone. High-touch areas visibly deeper. Personality emerging." },
              { dot: "#8b4513", stage: "1 Year",     text: "Deep warm saddle brown. Unique to this owner and no one else on earth." },
              { dot: "#3a1a08", stage: "3+ Years",   text: "Near-black on edges and high-wear points. A piece with a full story." },
            ].map(({ dot, stage, text }) => (
              <div
                key={stage}
                className="px-4 py-7 text-center border transition-colors hover:bg-parchment/70"
                style={{ borderColor: RULE_COLOR, background: "rgba(245,234,216,0.4)" }}
              >
                <div
                  className="w-11 h-11 rounded-full mx-auto mb-3.5 border border-tan/20"
                  style={{ background: dot }}
                />
                <h4 className="font-ui text-[8px] tracking-[3px] uppercase text-tan mb-2 font-normal">
                  {stage}
                </h4>
                <p className="text-[13px] leading-[1.7] font-light" style={{ color: "#5c3a1e" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Closing pull quote */}
          <div
            className="mt-10 max-w-[600px] mx-auto text-center pt-8"
            style={{ borderTop: "1px solid rgba(176,125,58,0.25)" }}
          >
            <p
              className="font-serif font-light leading-[1.85]"
              style={{ fontSize: "clamp(17px, 2vw, 21px)", color: "#3a2410" }}
            >
              The oils from your hands work into the hide. Sunlight deepens the colour.
              The areas you touch most darken first. Over months and years, your KEMET piece
              develops a patina — a visual record of your life with it.
            </p>
            <p
              className="font-serif italic font-light mt-6 leading-[1.85]"
              style={{ fontSize: "clamp(17px, 2vw, 21px)", color: "#b07d3a" }}
            >
              No two pieces age the same way.<br />
              Yours will be unlike anyone else&rsquo;s on earth.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PROMISE BANNER ════════════════════════════════════════════════════ */}
      <div className="relative z-10 bg-void px-6 md:px-10 py-20 text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(176,125,58,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative z-10">
          <span
            className="block font-ui font-light uppercase mb-6"
            style={{ fontSize: "8px", letterSpacing: "6px", color: "rgba(201,149,76,0.4)" }}
          >
            You now know how it is made
          </span>
          <p
            className="font-serif italic font-light mx-auto mb-10 leading-[1.7] text-parchment"
            style={{ fontSize: "clamp(20px, 3.5vw, 32px)", maxWidth: "640px" }}
          >
            You know what goes into it.<br />
            You know why it costs what it costs.<br />
            You know it is the real thing.
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
