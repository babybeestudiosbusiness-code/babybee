import fb from "../assets/icons/facebook.png";
import ig from "../assets/icons/instagram.png";
import ln from "../assets/icons/linkedin.png";
import wa from "../assets/icons/whatsapp.png";

export default function Footer() {

  // 🔥 Smooth scroll (same as header)
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    {
      icon: fb,
      label: "Facebook",
      link: "https://facebook.com/babybeefx",
    },
    {
      icon: ig,
      label: "Instagram",
      link: "https://instagram.com/babybee.agency",
    },
    {
      icon: ln,
      label: "LinkedIn",
      link: "https://linkedin.com/company/babybeelimited",
    },
  ];

  return (
    <footer className="relative mt-32 px-6 pb-10">

      {/* 🟠 Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[var(--color-primary)]/10 blur-[140px] rounded-full" />
      </div>

      <div className="
        relative z-10
        max-w-6xl mx-auto

        p-10 md:p-12
        rounded-3xl

        bg-white/80
        backdrop-blur-xl

        border border-black/5
        shadow-[0_20px_60px_rgba(0,0,0,0.06)]
      ">

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              BabyBee Studios
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Strategy-driven creative studio focused on video,
              motion and storytelling.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-slate-600">
              <p>📍 Mohammadpur, Dhaka</p>

              <a href="mailto:hello@babybeestudios.com" className="block hover:text-black">
                📧 hello@babybeestudios.com
              </a>

              <a href="tel:+8801962162892" className="block hover:text-black">
                📞 +880 1962 162892
              </a>

              <a
                href="https://wa.me/8801962162892"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black"
              >
                <img src={wa} className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* 🔗 NAVIGATION (FIXED) */}
          <div>
            <h4 className="text-slate-900 font-medium mb-4">
              নেভিগেশন
            </h4>

            <ul className="space-y-2 text-sm text-slate-600">

              <li>
                <button onClick={() => scrollTo("home")} className="hover:text-black transition">
                  হোম
                </button>
              </li>

              <li>
                <button onClick={() => scrollTo("blog")} className="hover:text-black transition">
                  ব্লগ
                </button>
              </li>

              <li>
                <button onClick={() => scrollTo("team")} className="hover:text-black transition">
                  টিম
                </button>
              </li>

            </ul>
          </div>

          {/* 📩 CONTACT FORM (WORKING) */}
          <div>
            <h4 className="text-slate-900 font-medium mb-4">
              যোগাযোগ
            </h4>

            <form
              action="https://formsubmit.co/home.babybeestudios@gmail.com"
              method="POST"
              className="flex flex-col gap-3"
            >

              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Redirect after submit */}
              <input type="hidden" name="_next" value="https://babybee-agency.vercel.app" />

              <input
                type="text"
                name="name"
                placeholder="নাম"
                required
                className="
                  bg-white border border-black/10
                  p-2.5 rounded-lg text-sm
                  focus:outline-none
                  focus:border-[var(--color-primary)]
                "
              />

              <input
                type="email"
                name="email"
                placeholder="ইমেইল"
                required
                className="
                  bg-white border border-black/10
                  p-2.5 rounded-lg text-sm
                  focus:outline-none
                  focus:border-[var(--color-primary)]
                "
              />

              <textarea
                name="message"
                placeholder="আপনার মেসেজ"
                rows="3"
                required
                className="
                  bg-white border border-black/10
                  p-2.5 rounded-lg text-sm
                  focus:outline-none
                  focus:border-[var(--color-primary)]
                "
              />

              <button
                type="submit"
                className="
                  mt-2 py-2.5 rounded-full
                  bg-[var(--color-primary)]
                  text-white text-sm font-medium

                  hover:shadow-[0_0_20px_rgba(255,122,24,0.35)]
                  hover:scale-[1.03]
                  transition
                "
              >
                পাঠান
              </button>

            </form>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="
          mt-12 pt-6
          border-t border-black/5

          flex flex-col md:flex-row
          items-center justify-between gap-4
        ">

          <p className="text-xs text-slate-500">
            © 2026 BabyBee Studios
          </p>

          {/* SOCIALS */}
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  px-3 py-1.5
                  rounded-full

                  bg-white
                  border border-black/5

                  text-sm text-slate-600

                  hover:bg-[var(--color-primary)]/10
                  hover:text-black
                  transition
                "
              >
                <img src={s.icon} className="w-4 h-4" />
                <span className="hidden sm:inline">{s.label}</span>
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
