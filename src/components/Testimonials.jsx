import { motion } from "framer-motion";

import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import user3 from "../assets/testimonials/user3.png";
import user4 from "../assets/testimonials/user4.png";

const testimonials = [
  {
    name: "Rahim",
    text: "অসাধারণ কাজ! খুবই প্রফেশনাল এক্সপেরিয়েন্স ছিল।",
    img: user1,
  },
  {
    name: "Karim",
    text: "ভিডিও কোয়ালিটি এবং স্টোরিটেলিং ছিল টপ-নচ।",
    img: user2,
  },
  {
    name: "Jamal",
    text: "Highly recommended for premium content!",
    img: user3,
  },
  {
    name: "Nafis",
    text: "They understand brand deeply.",
    img: user4,
  },
];

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="py-32 px-6 bg-transparent overflow-hidden">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        মতামত
      </h2>

      <div className="relative overflow-hidden">

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >

          {loop.map((t, i) => (
            <div
              key={i}
              className="
                relative
                w-[220px]
                aspect-[3/4]
                flex-shrink-0

                rounded-2xl
                p-6

                bg-white
                border border-black/5

                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                overflow-hidden
              "
            >

              {/* 🔥 Radial Glow */}
              <div className="
                absolute inset-0
                bg-[radial-gradient(circle_at_50%_30%,rgba(255,122,24,0.25),transparent_60%)]
                opacity-70
              " />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-between h-full text-center">

                {/* Top */}
                <div className="flex flex-col items-center gap-3">

                  <img
                    src={t.img}
                    alt={t.name}
                    className="
                      w-14 h-14 rounded-full
                      object-cover
                      border-2 border-white
                      shadow-md
                    "
                  />

                  <p className="text-sm text-slate-600 leading-relaxed px-2">
                    {t.text}
                  </p>

                </div>

                {/* Name */}
                <h4 className="text-sm font-semibold text-slate-900 mt-4">
                  {t.name}
                </h4>

              </div>
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}