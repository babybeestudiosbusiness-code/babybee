import { motion } from "framer-motion";

const timeline = [
  {
    year: "Jan 2025",
    text: "একটি ছোট কিন্তু ক্লিয়ার ভিশন নিয়ে BabyBee Studios-এর যাত্রা শুরু।",
  },
  {
    year: "Early 2025",
    text: "সোশ্যাল মিডিয়া ভিডিও, মোশন গ্রাফিক্স ও প্রোমো কনটেন্ট দিয়ে ছোট প্রজেক্টে কাজ শুরু।",
  },
  {
    year: "Mid 2025",
    text: "সার্ভিস প্রোভাইডার থেকে স্ট্র্যাটেজিক ক্রিয়েটিভ পার্টনারে রূপান্তর।",
  },
  {
    year: "Growth Phase",
    text: "ফুড ব্র্যান্ড ও স্টার্টআপের সাথে কাজ করে ইউনিক ভিজ্যুয়াল আইডেন্টিটি তৈরি।",
  },
  {
    year: "Late 2025",
    text: "সম্পূর্ণ রিব্র্যান্ডিং — নতুন লোগো, অরেঞ্জ কালার সিস্টেম।",
  },
  {
    year: "2026",
    text: "৫০+ প্রজেক্ট ও ১৫+ ক্লায়েন্ট নিয়ে শক্তিশালী পজিশনে প্রতিষ্ঠিত।",
  },
];

export default function BrandStory() {
  return (
    <section className="py-24 px-4 md:px-6 bg-[var(--color-surface)]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          আমাদের যাত্রা
        </h2>

        <div className="relative">

          {/* Line */}
          <div className="
            absolute top-0 h-full w-[2px]
            bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent

            left-5 md:left-1/2
            md:-translate-x-1/2
          " />

          <div className="flex flex-col gap-12">

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`
                  relative flex

                  pl-12
                  md:pl-0

                  ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}
                `}
              >

                {/* Card */}
                <div className="
                  w-full md:w-[45%]
                  p-5 md:p-6
                  rounded-2xl

                  bg-transparent
                  border border-black/5
                  shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                ">
                  <p className="text-xs text-[var(--color-primary)] font-semibold mb-2">
                    {item.year}
                  </p>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Dot */}
                <div className="
                  absolute top-2
                  w-3.5 h-3.5
                  bg-transparent
                  rounded-full
                  border-4 border-white
                  shadow

                  left-5
                  -translate-x-1/2

                  md:left-1/2
                " />

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}