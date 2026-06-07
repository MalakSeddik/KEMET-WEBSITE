export default function OurStoryPage() {
  return (
    <div className="relative min-h-screen bg-parchment overflow-x-hidden">

      {/* Fixed grain texture */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      {/* Page content */}
      <div
        className="relative flex flex-col items-center px-6 py-20 md:py-24"
        style={{ zIndex: 1 }}
      >
        <div className="story-animate max-w-[720px] w-full">

          {/* ── Ornament ── */}
          <div className="text-center mb-12">
            <div className="story-ornament-line">
              <div
                className="w-1.5 h-1.5 shrink-0"
                style={{ background: "rgba(176,125,58,0.5)", transform: "rotate(45deg)" }}
              />
            </div>
            <p
              className="font-ui font-light uppercase tracking-[6px]"
              style={{ fontSize: "8px", color: "rgba(176,125,58,0.5)" }}
            >
              Our Story
            </p>
          </div>

          {/* ── Title ── */}
          <h1
            className="font-display font-light text-center text-ink mb-12 leading-none"
            style={{ fontSize: "clamp(40px, 8vw, 72px)", letterSpacing: "0.15em" }}
          >
            KEMET
          </h1>

          {/* ── Opening quote ── */}
          <p
            className="font-serif italic font-light text-center mb-14 px-4 leading-[1.65]"
            style={{ fontSize: "clamp(22px, 4vw, 32px)", color: "#7a5222" }}
          >
            &ldquo;I didn&rsquo;t start a business.<br />I made a promise.&rdquo;
          </p>

          {/* ── Mid rule ── */}
          <div
            className="w-12 h-px mx-auto mb-14"
            style={{ background: "rgba(176,125,58,0.35)" }}
          />

          {/* ── First paragraph — drop cap ── */}
          <p
            className="story-drop-cap font-light mb-9 text-left leading-[2]"
            style={{ fontSize: "clamp(18px, 2.5vw, 22px)", color: "#3a2410" }}
          >
            There is a word in the ancient Egyptian language that means
            everything to me. <em>Kemet</em> — the black land. The rich, dark soil
            left behind by the Nile after every flood. The land that gave life.
            The land that built one of the greatest civilizations the world has
            ever known. The land where I was born, and where every piece I make
            is born too.
          </p>

          {/* ── Second paragraph ── */}
          <p
            className="font-light mb-9 text-left leading-[2]"
            style={{ fontSize: "clamp(18px, 2.5vw, 22px)", color: "#3a2410" }}
          >
            I grew up watching things fall apart too quickly. Bags that cracked
            within months. Wallets that peeled before the year was out. Products
            that called themselves leather but were nothing more than plastic
            and glue dressed up in the right words. I got tired of it. Not just
            as a customer — as an Egyptian. Because I knew what our hands were
            capable of. I knew what real craft looked like. And I knew it
            deserved better than this.
          </p>

          {/* ── Pull quote ── */}
          <blockquote
            className="my-12"
            style={{ borderLeft: "2px solid rgba(176,125,58,0.4)", padding: "20px 0 20px 32px" }}
          >
            <p
              className="font-serif italic font-light leading-[1.65]"
              style={{ fontSize: "clamp(20px, 3vw, 27px)", color: "#7a5222" }}
            >
              Egypt taught the world how to build things that last thousands of
              years. I thought — why should a leather cover be any different?
            </p>
          </blockquote>

          {/* ── Third paragraph ── */}
          <p
            className="font-light mb-9 text-left leading-[2]"
            style={{ fontSize: "clamp(18px, 2.5vw, 22px)", color: "#3a2410" }}
          >
            So I started KEMET alone. No investors. No factory. No shortcuts.
            Just a dream, a set of tools, and a stubborn belief that someone
            had to make the real thing. Every hide I select by hand. Every
            stitch is placed with intention. Every edge is burnished until it
            is smooth enough to feel like it was always meant to be that way.
            There is no machine that can replicate what patience and care
            produce.
          </p>

          {/* ── Fourth paragraph ── */}
          <p
            className="font-light mb-9 text-left leading-[2]"
            style={{ fontSize: "clamp(18px, 2.5vw, 22px)", color: "#3a2410" }}
          >
            Full-grain leather — not genuine, not bonded, not faux. The top
            layer of the hide. The strongest part. The part that tells the
            truth about what it is, where it came from, and how it was made.
            It will scratch. It will darken. It will soften to the shape of
            your life. And ten years from now, it will still be with you —
            carrying the story of everywhere you have been.
          </p>

          {/* ── Centered closing line ── */}
          <p
            className="font-serif italic font-light text-center mb-9 leading-[2]"
            style={{ fontSize: "clamp(20px, 3vw, 26px)", color: "#5c3a1e" }}
          >
            That is not a product.<br />That is a companion.
          </p>

          {/* ── The Promise ── */}
          <div
            className="mt-14 pt-12 text-center"
            style={{ borderTop: "1px solid rgba(176,125,58,0.18)" }}
          >
            <p
              className="font-ui font-light uppercase tracking-[5px] mb-6"
              style={{ fontSize: "8px", color: "rgba(176,125,58,0.45)" }}
            >
              The Promise
            </p>
            <p
              className="font-serif italic font-light mx-auto mb-6 max-w-[560px] leading-[1.85]"
              style={{ fontSize: "clamp(18px, 3vw, 24px)", color: "#3a2410" }}
            >
              Every piece that leaves my hands carries the weight of a
              civilization that never settled for less than extraordinary.
              Neither will I. Neither will you — because you chose to buy
              something real in a world full of imitations.
            </p>
            <p
              className="font-serif italic font-light leading-[2]"
              style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "rgba(90,58,30,0.6)" }}
            >
              Welcome to KEMET.<br />
              Welcome to the black land.<br />
              Welcome to something that lasts.
            </p>
          </div>

          {/* ── Signature ── */}
          <div className="mt-14 text-right">
            <div
              className="ml-auto mb-3"
              style={{ width: "60px", height: "1px", background: "rgba(176,125,58,0.25)" }}
            />
            <span
              className="block font-display font-light tracking-[3px] mb-1"
              style={{ fontSize: "22px", color: "#7a5222" }}
            >
              Malak Hesham
            </span>
            <span
              className="font-ui font-light uppercase tracking-[3px]"
              style={{ fontSize: "8px", color: "rgba(176,125,58,0.4)" }}
            >
              Alexandria, Egypt · كيمت
            </span>
          </div>

          {/* ── Arabic close ── */}
          <div
            className="text-center mt-16 pt-10"
            style={{ borderTop: "1px solid rgba(176,125,58,0.1)" }}
          >
            <span
              className="block font-serif italic mb-2.5 tracking-[2px]"
              style={{ fontSize: "clamp(20px, 4vw, 28px)", color: "rgba(176,125,58,0.5)" }}
            >
              صُنع بأيدٍ مصرية · بكل فخر
            </span>
            <span
              className="font-ui font-light uppercase tracking-[4px]"
              style={{ fontSize: "9px", color: "rgba(176,125,58,0.3)" }}
            >
              Made by Egyptian hands · with pride
            </span>
          </div>

          {/* ── Bottom mark ── */}
          <div className="text-center mt-14">
            <p
              className="font-display font-light"
              style={{ fontSize: "32px", letterSpacing: "12px", textIndent: "12px", color: "rgba(176,125,58,0.22)" }}
            >
              KEMET
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
