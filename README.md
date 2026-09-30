# 🌸 VOYORA ✦ Your world, your way.
> **Cute, Dreamy & Premium Pastel 3D AI-Powered Tourism Platform**  
> *Dreamy Pastel 3D Globe • Postcard 3D Coverflow • Soft Eased 3D Tilt • Pastel Flight Route Map • AI Replanner • Guaranteed Offline Mode*

---

## ✨ Overview

**VOYORA** is a cute, dreamy, yet deeply premium AI-powered 3D travel platform designed to make travel planning personalized, affordable, dynamic, sustainable, and utterly delightful. 

Crafted with a **cute pastel 3D aesthetic** (*dreamy travel app + soft 3D + luxury UI + pastel colors + cute details + cinematic depth*), VOYORA feels like a digital travel diary brought to life in three dimensions — without any dark cyberpunk or aggressive neon tones.

---

## 🎨 Cute Pastel Color Palette (60-30-10 Rule)

* **60% Base / Background:** Cream & Cloud White (`#FFF9F5` / `#FFFFFF` / `#FFFDF9`)
* **15% Primary Accent:** Soft Lavender / Lilac (`#F8F1FF` / `#C9B6FF` / `#E8DEFF`)
* **10% Secondary Accent:** Pastel Pink & Blush (`#FF9FC5` / `#FFD6E5` / `#FFE6EE`)
* **5% Sky Accent:** Baby Sky Blue (`#A9DDF7` / `#D4F0FD`)
* **5% Warm Accent:** Warm Peach (`#FFCBA4` / `#FFE5D3`)
* **5% Fresh Accent:** Soft Mint Green (`#B8E6D0` / `#DCF7E9`)
* **Typography:** Soft Dark Plum (`#302A3A`) & Muted Plum-Grey (`#766D7C`) for luxury contrast without harsh pure blacks.

---

## 🛠️ Technology Stack

VOYORA strictly adheres to pure frontend web standards:

* **HTML5** — Semantic, accessible, high-performance structure
* **CSS3** — CSS perspective (`perspective: 1200px`), 3D transforms (`rotateX`, `rotateY`, `translateZ`, `scale`), depth layering, soft pill glassmorphism (`backdrop-filter: blur(16px)`), dreamy ambient drop shadows, soft floating blob animations, and responsive layout
* **Vanilla JavaScript (ES6+)** — Dreamy Pastel 3D Globe Canvas Engine, requestAnimationFrame soft-spring 3D tilt calculations, 3D Postcard Coverflow Carousel, interactive pastel SVG flight arcs, animated number counters, and centralized reactive state store (`voyoraState`)
* **PWA Ready** — `manifest.json` + `sw.js` (Service Worker) for standalone installability and offline asset caching

> ❌ **Zero heavy frameworks used** (No React, Vue, Angular, Bootstrap, Tailwind, jQuery, etc.)

---

## 🌸 3D Visual & Interactive Highlights

### 1. 🌐 Dreamy Pastel 3D Globe
* **Pastel Canvas Spherical Engine:** Soft sky-blue ocean globe (`#eaf7fd` to `#a1d8f5`) with pastel mint (`#B8E6D0`) landmass matrices and soft blush city glow pins.
* **Atmospheric Cloud Layer & Flight Ring:** Fluffy pastel cloud drifts with an orbital flight ring and rotating miniature airplane leaving a soft dotted lavender vapor trail.
* **Soft Floating Drop Shadow & Ambient Parallax:** Interactive 3D tilt responsive to cursor movements across the hero section.
* **Floating Destination Postcards:** Interactive floating destination badges (`Paris 🥐`, `Tokyo 🌸`, `Dubai 🐪`, `Bali 🌴`, `Switzerland 🏔️`) floating with dreamy hover elevation.

### 2. 🎴 Soft-Spring 3D Mouse Tilt (`Vanilla3DTilt`)
* Reusable, hardware-accelerated 3D mouse tilt with soft spring easing applied across search panels, experience cards, statistics, and featured trip cards.
* Computes dynamic `rotateX()`, `rotateY()`, and `translateZ()` coordinates with gentle ease-out interpolation.

### 3. 💌 Postcard 3D Coverflow Destination Carousel
* Spatial 3D coverflow carousel featuring Paris, Tokyo, Dubai, Bali, Swiss Alps, New York, Maldives, and Istanbul styled as luxury travel postcards with cute pastel destination badges.
* Smooth JavaScript 3D math: active center card (`scale: 1.05`, `translateZ: 80px`), flanked cards with graduated angle rotation (`rotateY`) and soft dreamy shadows.
* Keyboard arrow navigation, prev/next controls, and click-to-center support.

### 4. 👒 Pastel 3D Travel Experience Tiles
* Multi-depth interactive category cards for **✈️ Adventure & Treks**, **🌊 Beach Escapes**, **🏔️ Mountain Journeys**, and **🏙️ City Exploration**.
* Image scale & icon elevation on 3D hover using `translateZ()`.

### 5. 🗺️ Pastel World Route Map
* Stylized cream & pastel vector world map with pulsating mint/blush city nodes.
* Animated curved flight arcs (`stroke-dasharray` flow in soft lilac).
* Dreamy hover popover cards showing flight highlights, weather, and instant trip builder shortcuts.

### 6. 📊 Dreamy Travel in Numbers (Animated Counters)
* `IntersectionObserver`-powered smooth count-up animations for **120+ Destinations**, **50K+ Happy Explorers**, **500+ Curated Trips**, and **4.9/5 Rating ✦**.

### 7. 🏙️ Featured Trip 3D Parallax (Dubai)
* Full-width cinematic imagery with floating pastel glass statistics card (5 Days / 4 Nights, ₹39,999 onwards).

---

## 🚀 Complete VOYORA AI Ecosystem

* **✨ AI Trip Planner:** 7-step customizable wizard balancing routes, budgets, accommodation styles, and local activities.
* **🔄 "CHANGE MY PLAN" AI Replanner:** Dynamic itinerary restructuring with natural language input, rule chips, **Original Plan ➔ AI Updated Plan** diff comparisons, and instant snapshot undo.
* **✨ "MAKE MY TRIP BETTER" 3-Tier Engine:** Evaluates routes to generate **💰 Budget Tier**, **⚖️ Balanced Tier**, and **✨ Premium Tier** options.
* **🏪 Local Business Hub:** Two-sided ecosystem empowering grassroots tour guides, certified homestays, Warli art workshops, and street food tours.
* **👥 Group Travel Planner ("PLAN TOGETHER"):** Multi-traveler workspace with unique invite codes (e.g. `VOYORA-MUM26`), live voting progress bars with duplicate protection, and AI group consensus itinerary generation.
* **📱 Guaranteed Offline Trip Mode:** One-click caching to `localStorage` with live network indicators (**ONLINE 🟢** / **OFFLINE 🟠**) and simulation toggle for hackathon judging.
* **💬 Multilingual AI Travel Assistant:** Context-aware companion supporting English, Hindi (हिन्दी), and Marathi (मराठी).
* **⚡ 1-Click SIH Live Presentation Demo:** Instant pre-loaded Mumbai 3-Day showcase preset.

---

## 📁 Repository Structure

```
VOYORA/
├── index.html        # Semantic HTML5 single-page application
├── style.css         # Dreamy pastel 3D CSS3 styles, glassmorphism, floating shadows
├── script.js         # Vanilla JS Dreamy 3D Globe, Tilt Engine, Coverflow, AI ecosystem
├── manifest.json     # PWA Web App Manifest
├── sw.js             # Service Worker for offline caching
└── README.md         # Architecture, 3D Design System & SIH Documentation
```

---

## 📜 Commit Information

* **Commit 1:** *Initial commit*
* **Commit 2:** *feat: complete AI-powered tourism platform with trip generator, dynamic replanner, 3-tier optimizer, local business hub, group planner, and offline mode*
* **Commit 3:** *feat: complete 3D immersive redesign of VOYORA with 3D Globe, Coverflow carousel, 3D mouse tilt, and dark futuristic glassmorphism*
* **Commit 4:** *feat: upgrade VOYORA to cute dreamy pastel 3D travel platform with soft pastel palette, floating cards, and dreamy 3D globe*
* **Repository:** [https://github.com/sidzooni-ctrl/VOYORA](https://github.com/sidzooni-ctrl/VOYORA)

Created with ❤️ for Smart India Hackathon (SIH) 2026.  
**VOYORA — Your world, your way. 🌸**
