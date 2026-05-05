import { motion } from "framer-motion";
import useBirthday from "../hooks/useBirthday";
import BirthdayCard from "./BirthdayCard";

export default function Hero() {
  const person = useBirthday();
  const title = ["আমরা গল্প বলি,", "ভিজ্যুয়াল দিয়ে"];

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          {title.map((line, i) => (
            <motion.h1
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-4xl md:text-6xl font-semibold text-slate-900"
            >
              {line}
            </motion.h1>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-slate-600"
          >
            cinematic storytelling. modern visuals. meaningful impact.
          </motion.p>

          <button className="mt-6 px-6 py-2 rounded-full bg-[var(--color-primary)] text-white">
            ব্লগ পড়ুন
          </button>
        </div>

        {/* Empty right space */}
        <div />

      </div>

      {/* Birthday Card */}
      {person && (
        <div className="absolute bottom-6 right-6">
          <BirthdayCard person={person} />
        </div>
      )}
    </section>
  );
}