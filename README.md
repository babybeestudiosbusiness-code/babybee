# 🐝 BabyBee Blog — Creative Studio Website

A modern, premium website built for **BabyBee Studios**, focused on cinematic storytelling, motion visuals, and brand-driven content.

---

## 🚀 Live Preview

> (Add your Vercel link here after deployment)

---

## ✨ Features

* 🎬 **Cinematic Hero Section** with animated headline
* 🧠 **Brand Story Timeline UI**
* 👥 **Team Section** with circular profiles
* 📝 **Dynamic Blog System** (React Router)
* 🎨 **Global Gradient + Glow Background System**
* 📱 **Fully Responsive (Mobile + Desktop)**
* ⚡ **Smooth Animations (Framer Motion)**
* 🧊 **Modern UI (Glass / Soft Depth Design)**

---

## 🛠 Tech Stack

* **React (Vite)**
* **Tailwind CSS v4**
* **Framer Motion**
* **React Router DOM**
* **Vercel (Deployment)**

---

## 📁 Project Structure

```
babybee-blog/
├── public/
│   └── team/             # Team images
├── src/
│   ├── components/      # UI components
│   ├── pages/           # Pages (Home, Blog)
│   ├── data/            # Static data (team, blog)
│   ├── hooks/           # Custom hooks
│   └── assets/          # Images & icons
├── index.css            # Tailwind v4 + theme
├── postcss.config.js    # Tailwind config
├── vite.config.js
├── vercel.json          # Routing fix
└── package.json
```

---

## ⚙️ Setup & Run Locally

```bash
npm install
npm run dev
```

---

## 🏗 Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment (Vercel)

1. Push project to GitHub
2. Import project in Vercel
3. Set:

   * Build Command: `npm run build`
   * Output Directory: `dist`
4. Deploy 🚀

---

## 🔁 Routing Fix (Important)

SPA routing is handled via:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 🧠 Key Learnings

* Tailwind v4 requires **PostCSS plugin setup**
* Production build (`4173`) != dev (`5173`)
* Asset handling differs between `/src` and `/public`
* React Router needs rewrite config in deployment

---

## 📌 Future Improvements

* 🔍 SEO optimization (meta tags, OG)
* 🖼 Image optimization (WebP, lazy loading)
* 📊 Analytics integration
* 🌍 Multi-language support

---

## 👨‍💻 Author

**Sakib Salim**
Video Editor & Visual Storyteller
Founder of BabyBee Studios

---

## 📄 License

This project is for portfolio & educational use.
