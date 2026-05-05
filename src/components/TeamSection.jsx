import { team } from "../data/team";

export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-6 text-center">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-16">
        আমাদের টিম
      </h2>

      {/* Grid */}
      <div className="
        max-w-6xl mx-auto
        grid grid-cols-2 md:grid-cols-3 gap-10
      ">

        {team.map((m, i) => (
          <div
            key={i}
            className="
              group
              flex flex-col items-center
              transition
            "
          >

            {/* IMAGE WRAPPER */}
            <div className="
              w-28 h-28 md:w-32 md:h-32
              rounded-full
              overflow-hidden

              bg-slate-100
              border border-black/5

              shadow-sm
              group-hover:shadow-lg
              transition
            ">

              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                onError={(e) => {
                  e.target.src = "/fallback-avatar.png"; // optional fallback
                }}
                className="
                  w-full h-full
                  object-cover
                  transition duration-300
                  group-hover:scale-105
                "
              />
            </div>

            {/* NAME */}
            <h3 className="mt-5 font-medium text-slate-900">
              {m.name}
            </h3>

            {/* ROLE */}
            <p className="text-sm text-slate-500">
              {m.role}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}