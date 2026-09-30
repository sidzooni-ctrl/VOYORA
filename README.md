# 🌌 VOYORA ✦ Your world, your way.
> **Dark Dreamy Pastel 3D AI-Powered Tourism Platform**  
> *Dark Dreamy 3D Globe • Postcard 3D Coverflow • Soft Eased 3D Tilt • Pastel Flight Route Map • AI Replanner • Guaranteed Offline Mode*

---

## ✨ Overview

**VOYORA** is a dark dreamy pastel AI-powered 3D travel platform designed to make travel planning personalized, affordable, dynamic, sustainable, and utterly captivating.

Crafted with a **Dark Dreamy Pastel 3D Travel aesthetic** (*deep midnight/plum palette + soft glowing pastel accents + luxury dark translucent glass + cinematic 3D depth*), VOYORA evokes a magical sunset-to-night travel atmosphere without looking cyberpunk or overly neon.

---

## 🎨 Color Palette & Design Balance

| Component | Color | Hex Code | Balance |
| :--- | :--- | :--- | :--- |
| **Main Background** | Deep Plum / Midnight | `#241B35` | ~45% |
| **Secondary Background** | Dark Purple Surfaces | `#30264A` | ~20% |
| **Card Glass** | Translucent Dark Glass | `rgba(255, 255, 255, 0.08)` | — |
| **Primary Accent** | Rich Lavender | `#9B8AFB` | ~15% |
| **Soft Lavender** | Lilac Haze | `#B79CFF` | — |
| **Pastel Pink** | Sunset Blush | `#F48FB1` | ~10% |
| **Pastel Sky Blue** | Twilight Horizon | `#79CFF2` | ~5% |
| **Pastel Peach / Mint** | Sunrise Gold & Mint | `#FF9A8B` / `#A8E6CF` | ~5% |
| **Headings & Highlights** | Warm Cream & Soft White | `#FFF4EA` / `#F8F7FF` | — |
| **Muted Text** | Soft Lilac Muted | `#C0B8D8` | — |

### ✨ Signature Gradients
* **Lavender ➔ Pink:** `linear-gradient(135deg, #9B8AFB 0%, #F48FB1 100%)`
* **Sky Blue ➔ Lavender:** `linear-gradient(135deg, #79CFF2 0%, #B79CFF 100%)`
* **Pink ➔ Peach:** `linear-gradient(135deg, #F48FB1 0%, #FF9A8B 100%)`

---

## 🛠️ Technology Stack

VOYORA strictly adheres to pure frontend web standards:

* **HTML5** — Semantic, accessible, high-performance structure
* **CSS3** — CSS perspective (`perspective: 1200px`), 3D transforms (`rotateX`, `rotateY`, `translateZ`, `scale`), depth layering, dark glassmorphism (`backdrop-filter: blur(20px)`), soft ambient glowing blobs, and responsive layout
* **Vanilla JavaScript (ES6+)** — Dark Dreamy 3D Globe Canvas Engine, requestAnimationFrame soft-spring 3D tilt calculations, 3D Postcard Coverflow Carousel, interactive pastel SVG flight arcs, animated number counters, and centralized reactive state store (`voyoraState`)
* **PWA Ready** — `manifest.json` + `sw.js` (Service Worker) for standalone installability and offline asset caching

> ❌ **Zero heavy frameworks used** (No React, Vue, Angular, Bootstrap, Tailwind, jQuery, etc.)

---

## 🌌 3D Visual & Interactive Highlights

### 1. 🌐 Dark Dreamy 3D Globe with Pastel Lighting
* **Canvas Spherical Engine:** Deep purple-midnight ocean globe (`#382a5c` to `#18112b`) with pastel lavender (`#B79CFF`) and mint (`#A8E6CF`) landmass matrices and glowing city pins.
* **Atmospheric Lighting:** Soft lavender and pink atmospheric haze with an orbital flight ring and rotating miniature airplane.
* **Floating Destination Postcards:** Interactive floating destination badges (`Paris 🥐`, `Tokyo 🌸`, `Dubai 🐪`, `Bali 🌴`, `Switzerland 🏔️`) in dark translucent glass.

### 2. 🎴 Soft-Spring 3D Mouse Tilt (`Vanilla3DTilt`)
* Reusable, hardware-accelerated 3D mouse tilt with soft spring easing applied across search panels, experience cards, statistics, and featured trip cards.

### 3. 💌 Postcard 3D Coverflow Destination Carousel
* Spatial 3D coverflow carousel featuring Paris, Tokyo, Dubai, Bali, Swiss Alps, New York, Maldives, and Istanbul styled as luxury travel postcards with dark translucent glass and glowing price tags.

### 4. 🧭 Dark Pastel 3D Travel Experience Tiles
* Multi-depth interactive category cards for **✈️ Adventure & Treks**, **🌊 Beach Escapes**, **🏔️ Mountain Journeys**, and **🏙️ City Exploration**.

### 5. 🗺️ Dark Dreamy World Route Map
* Stylized dark purple vector world map with pulsating pastel city nodes and glowing flight trajectories.

### 6. 📊 Travel in Numbers (Animated Counters)
* `IntersectionObserver`-powered smooth count-up animations for **120+ Destinations**, **50K+ Happy Explorers**, **500+ Curated Trips**, and **4.9/5 Rating ✦**.

### 7. 🏙️ Featured Journey 3D Parallax (Dubai)
* Full-width cinematic imagery with floating dark glass statistics card (5 Days / 4 Nights, ₹39,999 onwards).

---

## 🚀 Complete VOYORA AI Ecosystem

* **✨ AI Trip Planner:** 7-step customizable wizard balancing routes, budgets, accommodation styles, and local activities.
* **🔄 "CHANGE MY PLAN" AI Replanner:** Dynamic itinerary restructuring with natural language input, rule chips, **Original Plan ➔ AI Updated Plan** diff comparisons, and instant snapshot undo.
* **✨ "MAKE MY TRIP BETTER" 3-Tier Engine:** Evaluates routes to generate **💰 Budget Tier**, **⚖️ Balanced Tier**, and **✨ Premium Tier** options.
* **🏪 Local Business Hub:** Two-sided ecosystem empowering grassroots tour guides, certified homestays, Warli art workshops, and street food tours.
* **👥 Group Travel Planner ("PLAN TOGETHER"):** Multi-traveler workspace with unique invite codes (e.g. `VOYORA-MUM26`), live voting progress bars with duplicate protection, and AI group consensus itinerary generation.
* **📱 Guaranteed Offline Trip Mode:** One-click caching to `localStorage` with live network indicators (**ONLINE 🟢** / **OFFLINE 🟠**) and simulation toggle.
* **💬 Multilingual AI Travel Assistant:** Context-aware companion supporting English, Hindi (हिन्दी), and Marathi (मराठी).

---

## 📁 Repository Structure

```
VOYORA/
├── index.html        # Semantic HTML5 single-page application
├── style.css         # Dark Dreamy Pastel 3D CSS3 styles, glassmorphism, glowing depth
├── script.js         # Vanilla JS Dark 3D Globe, Tilt Engine, Coverflow, AI ecosystem
├── manifest.json     # PWA Web App Manifest
├── sw.js             # Service Worker for offline caching
└── README.md         # Architecture, 3D Design System & Technical Documentation
```

---

## 📜 Commit History

* **Commit 1:** *Initial commit*
* **Commit 2:** *feat: complete AI-powered tourism platform with trip generator, dynamic replanner, 3-tier optimizer, local business hub, group planner, and offline mode*
* **Commit 3:** *feat: complete 3D immersive redesign of VOYORA with 3D Globe, Coverflow carousel, and 3D mouse tilt*
* **Commit 4:** *feat: upgrade VOYORA to cute dreamy pastel 3D travel platform*
* **Commit 5:** *refactor(ui): streamline hero CTA actions and clean landing page*
* **Commit 6:** *feat: dark dreamy pastel 3D travel redesign with #241B35 background, #30264A surfaces, and glowing pastel lavender/pink/sky blue accents*
* **Repository:** [https://github.com/sidzooni-ctrl/VOYORA](https://github.com/sidzooni-ctrl/VOYORA)

**VOYORA — Your world, your way. 🌌**
