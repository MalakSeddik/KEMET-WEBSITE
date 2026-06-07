"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "My leather has scratched. Is it damaged?",
    a: "No — and this is one of the most important things to understand about full-grain leather. Light surface scratches are not damage. They are part of the material's character. Rub the scratch firmly with a clean fingertip for 30 seconds — the heat and friction push the natural oils back through the surface and the scratch fades significantly or disappears entirely. Deep cuts are different, but minor scratches are a feature, not a flaw.",
  },
  {
    q: "My piece got wet in the rain. What do I do?",
    a: "Act quickly but calmly. Pat away the surface moisture with a dry, clean cloth — do not rub. Then set the piece somewhere with good airflow at room temperature and let it dry completely on its own. This may take several hours. Once fully dry, apply a thin coat of leather conditioner to replenish the oils that the water stripped. Never use a hairdryer or heater to speed up the process — heat is far more damaging to leather than water.",
  },
  {
    q: "The leather is darkening. Is something wrong?",
    a: "Nothing is wrong — this is exactly what vegetable-tanned full-grain leather is supposed to do. The darkening you are seeing is the beginning of your patina. The oils from your hands, exposure to light, and the natural ageing of the tannins all contribute to a gradual, beautiful deepening of the colour. This process is unique to real leather. It is the proof that what you have is authentic. Embrace it.",
  },
  {
    q: "How often should I condition my leather?",
    a: "For a piece used daily — like a laptop cover that you carry every day — condition it every 3 to 4 months. If you live in a very dry or very cold climate, you may want to condition slightly more often. If the leather starts to feel stiff or looks slightly dry and dull, that is its way of telling you it is time. For pieces used occasionally, conditioning twice a year is sufficient. Always use less than you think you need — you can always add more, but over-conditioning clogs the leather's pores.",
  },
  {
    q: "Can I clean a stain off my leather?",
    a: "It depends on the stain. For most dirt and surface marks — act quickly, blot (never rub) with a clean damp cloth, then air dry and condition. For oil or grease stains — blot immediately, then apply a small amount of cornstarch or talcum powder to absorb the oil, leave for several hours, then brush off gently. For ink stains — these are extremely difficult to remove from leather without causing further damage; consult a professional leather cleaner. For very old or deep stains — over time, the natural darkening of the patina will often absorb and hide lighter stains beautifully.",
  },
  {
    q: "Will my leather cover protect my laptop from water?",
    a: "Full-grain vegetable-tanned leather has a natural resistance to light moisture — a few rain drops or a brief splash will bead on the surface if the leather is well-conditioned. However, it is not waterproof and should not be submerged or left in heavy rain for extended periods. The leather itself will recover from getting wet, but your laptop inside may not. For heavy rain situations, carry an additional waterproof sleeve or bag. Regular conditioning with a beeswax-based product significantly improves the leather's water resistance over time.",
  },
  {
    q: "How do I care for the stitching and edges?",
    a: "The saddle stitch used on every KEMET piece is extremely durable and requires no special care. Avoid catching the thread on sharp objects. If a stitch ever comes loose over time, it can be re-stitched by any competent leather craftsman — the waxed thread we use is available at leather supply shops. For the burnished edges, they are sealed and should remain smooth with normal use. If an edge starts to roughen after years of heavy use, it can be re-burnished with gum tragacanth and a wooden slicker — contact us and we will guide you through it.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-8">
      {FAQS.map((faq, i) => (
        <div key={i} style={{ borderBottom: "1px solid rgba(176,125,58,0.08)" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full bg-transparent border-none py-[22px] flex justify-between items-center gap-5 text-left cursor-pointer group"
          >
            <span
              className="font-display font-normal text-ink group-hover:text-tan transition-colors duration-300"
              style={{ fontSize: "16px", letterSpacing: "1.5px" }}
            >
              {faq.q}
            </span>
            <span
              className="font-ui shrink-0 leading-none transition-transform duration-300"
              style={{
                fontSize: "18px",
                color: "rgba(176,125,58,0.5)",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: open === i ? "500px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
          >
            <p
              className="font-light leading-[1.9] pb-6"
              style={{ fontSize: "16px", color: "#5c3a1e" }}
            >
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
