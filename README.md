# 🌍 VOYORA — Your world, your way.
> **Premium, Immersive 3D AI-Powered Tourism Platform**  
> *Interactive 3D Globe • CSS 3D Coverflow • Depth Layering • 3D Tilt Mechanics • Geospatial World Map • AI Replanner • Guaranteed Offline Mode*

---

## ✨ Overview

**VOYORA** is a next-generation 3D smart travel platform designed to make travel planning personalized, affordable, dynamic, sustainable, and convenient. Built with modern 2026 travel-tech startup aesthetics (Apple-level cleanliness + futuristic travel technology + immersive 3D + glass UI), VOYORA combines interactive spatial computing with full AI trip planning and offline reliability.

---

## 🛠️ Technology Stack

VOYORA strictly adheres to pure frontend web standards:

* **HTML5** — Semantic, accessible, high-performance structure
* **CSS3** — CSS perspective (`perspective: 1200px`), 3D transforms (`rotateX`, `rotateY`, `translateZ`, `scale`), depth layering, glassmorphism (`backdrop-filter: blur()`), realistic ambient glow, and smooth animations
* **Vanilla JavaScript (ES6+)** — Pure JS 3D Globe Canvas Engine, requestAnimationFrame 3D tilt calculations, 3D Coverflow Carousel math, interactive SVG route trajectories, animated number counters, and centralized reactive state store (`voyoraState`)
* **PWA Ready** — `manifest.json` + `sw.js` (Service Worker) for standalone installability and offline asset caching

> ❌ **Zero heavy frameworks used** (No React, Vue, Angular, Bootstrap, Tailwind, jQuery, etc.)

---

## 🌟 3D Visual & Interactive Highlights

### 1. 🌐 Interactive 3D Globe & Floating Destination Badges
* **Spherical Dot Matrix Engine:** Canvas-rendered 3D rotating globe with latitude/longitude matrix and atmospheric glow.
* **Cursor-Reactive Parallax:** Real-time 3D tilt responsive to cursor position across the hero viewport.
* **Hub City Markers:** Glowing geographic nodes for Paris, Tokyo, Dubai, New York, and Mumbai.
* **Orbiting Airplane & Floating Badges:** Interactive floating destination badges (`Paris 🇫🇷`, `Tokyo 🇯🇵`, `Dubai 🇦🇪`, `Bali 🇮🇩`, `Switzerland 🇨🇭`) positioned in 3D space with depth layering.

### 2. 🎴 3D Mouse Tilt Experience (`Vanilla3DTilt`)
* Reusable, hardware-accelerated 3D mouse tilt applied across search panels, experience cards, statistics, and featured trip cards.
* Computes dynamic `rotateX()`, `rotateY()`, and `translateZ()` coordinates relative to card bounds with smooth ease-out interpolation.

### 3. 🎡 3D Coverflow Destination Carousel
* Spatial 3D coverflow carousel featuring Paris, Tokyo, Dubai, Bali, Swiss Alps, New York, Maldives, and Istanbul.
* Smooth JavaScript 3D math: active center card (`scale: 1.05`, `translateZ: 80px`), flanked cards with graduated angle rotation (`rotateY`) and depth fading.
* Keyboard arrow navigation, prev/next controls, and click-to-center support.

### 4. 🧭 3D Travel Experience Tiles
* Multi-depth interactive category cards for **✈️ Adventure & Treks**, **🌊 Beach Escapes**, **🏔️ Mountain Journeys**, and **🏙️ City Exploration**.
* Image scale & icon elevation on 3D hover using `translateZ()`.

### 5. 🗺️ Interactive World Route Map
* Stylized dark vector world map with pulsating city nodes.
* Animated curved flight arcs (`stroke-dasharray` flow).
* Hover popover cards showing flight highlights, weather, and instant trip builder shortcuts.

### 6. 📊 Travel in Numbers (Animated Counters)
* `IntersectionObserver`-powered smooth count-up animations for **120+ Destinations**, **50K+ Travellers**, **500+ Experiences**, and **4.9/5 Rating**.

### 7. 🏙️ Featured Trip 3D Parallax (Dubai)
* Full-width cinematic parallax imagery with floating glass statistics card (5 Days / 4 Nights, ₹39,999 onwards).

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
├── style.css         # 3D CSS3 styles, perspective, glassmorphism, responsive grid
├── script.js         # Vanilla JS 3D Globe, Tilt Engine, Coverflow, AI ecosystem
├── manifest.json     # PWA Web App Manifest
├── sw.js             # Service Worker for offline caching
└── README.md         # Architecture, 3D Features & SIH Documentation
```

---

## 📜 Commit Information

* **Commit 3:** *feat: complete 3D immersive redesign of VOYORA with 3D Globe, Coverflow carousel, 3D mouse tilt, and dark futuristic glassmorphism*
* **Repository:** [https://github.com/sidzooni-ctrl/VOYORA](https://github.com/sidzooni-ctrl/VOYORA)

Created with ❤️ for Smart India Hackathon (SIH) 2026.  
**VOYORA — Your world, your way.**
