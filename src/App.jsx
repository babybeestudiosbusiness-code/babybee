import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* 🌈 GLOBAL BACKGROUND */}
      <div className="
        fixed inset-0 -z-10
        bg-gradient-to-br
        from-white
        via-[var(--color-surface)]
        to-orange-50
      " />

      {/* 🟠 GLOBAL GLOW */}
      <div className="
        fixed -z-10
        w-[700px] h-[700px]
        bg-[var(--color-primary)]/20
        blur-[160px] rounded-full
        top-1/4 left-1/2 -translate-x-1/2
      " />

      <Header />

      {/* 🔥 ROUTED CONTENT */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </main>

    </div>
  );
}