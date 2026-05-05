import { useState } from "react";
import logo from "../assets/logo.svg";
import fb from "../assets/icons/facebook.png";
import ig from "../assets/icons/instagram.png";
import ln from "../assets/icons/linkedin.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const socials = [
    { icon: fb, label: "Facebook", link: "https://facebook.com/babybeefx" },
    { icon: ig, label: "Instagram", link: "https://instagram.com/babybee.agency" },
    { icon: ln, label: "LinkedIn", link: "https://linkedin.com/company/babybeelimited" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5">

      <div className="flex items-center justify-between px-6 py-3 relative">

        {/* LEFT NAV */}
        <nav className="hidden md:flex gap-6 text-sm text-slate-700 font-medium">
          <button onClick={() => scrollTo("home")} className="hover:text-black transition">
            হোম
          </button>
          <button onClick={() => scrollTo("blog")} className="hover:text-black transition">
            ব্লগ
          </button>
          <button onClick={() => scrollTo("team")} className="hover:text-black transition">
            টিম
          </button>
        </nav>

        {/* MOBILE LOGO */}
        <img
          src={logo}
          className="h-7 md:hidden cursor-pointer"
          onClick={() => scrollTo("home")}
        />

        {/* CENTER LOGO */}
        <img
          src={logo}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 h-8 cursor-pointer"
          onClick={() => scrollTo("home")}
        />

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* SOCIAL PILLS */}
          <div className="hidden md:flex gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex items-center gap-2
                  px-4 py-1.5 rounded-full

                  bg-[var(--color-surface)]
                  border border-black/5

                  text-sm text-slate-700

                  transition-all duration-300

                  hover:-translate-y-[2px]
                  hover:bg-white
                  hover:shadow-[0_10px_30px_rgba(255,122,24,0.25)]
                "
              >
                {/* ICON */}
                <img
                  src={s.icon}
                  className="
                    w-4 h-4
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />

                {/* LABEL */}
                <span className="
                  hidden lg:inline
                  transition
                  group-hover:text-black
                ">
                  {s.label}
                </span>
              </a>
            ))}
          </div>

          {/* MOBILE MENU */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl text-slate-800"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm text-slate-700">
          <button onClick={() => scrollTo("home")} className="text-left">
            হোম
          </button>
          <button onClick={() => scrollTo("blog")} className="text-left">
            ব্লগ
          </button>
          <button onClick={() => scrollTo("team")} className="text-left">
            টিম
          </button>
        </div>
      )}

    </header>
  );
}