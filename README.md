# ✈️ VOYORA ✦ Your world, your way.
> **Fresh Lilac & Butter Yellow 3D AI-Powered Tourism Platform**  
> *Fresh 3D Globe • Postcard 3D Coverflow • Soft Eased 3D Tilt • Geospatial Route Map • AI Replanner • Guaranteed Offline Mode*

---

## ✨ Overview

**VOYORA** is a fresh, modern, and distinctively branded AI-powered 3D travel platform designed to make travel planning personalized, affordable, dynamic, sustainable, and memorable.

Built around a signature **Lilac + Butter Yellow** brand identity with fresh mint and sky-blue accents, VOYORA combines an editorial travel aesthetic with interactive spatial computing and full AI itinerary replanning.

---

## 🎨 Core Color Palette & Balance

| Role | Color | Hex Code | Balance |
| :--- | :--- | :--- | :--- |
| **Main Background** | Warm Ivory / Soft Cream | `#FFFDF7` | **~50%** |
| **Primary Brand** | Fresh Lilac | `#A78BFA` | **~20%** |
| **Primary Dark** | Rich Deep Lilac | `#7C5CFC` | **~10%** |
| **Signature Accent** | Butter Yellow | `#FFD966` | **~8%** |
| **Secondary Accent** | Fresh Mint | `#72D6B0` | **~5%** |
| **Travel Accent** | Fresh Sky Blue | `#73C8F4` | **~4%** |
| **Small Warm Accent** | Fresh Coral | `#FF8A7A` | **~3%** |
| **Major Headings** | Deep Plum | `#29213D` | — |
| **Secondary Text** | Plum-Grey Muted | `#6F687D` | — |
| **Surfaces & Cards** | Pure White / Glass | `#FFFFFF` | — |

---

## ✨ Selective Gradients

* **Primary Gradient:** `linear-gradient(135deg, #A78BFA 0%, #7C5CFC 100%)`
* **Fresh Travel Gradient:** `linear-gradient(135deg, #73C8F4 0%, #A78BFA 100%)`
* **Sunshine Gradient:** `linear-gradient(135deg, #FFD966 0%, #FFB86B 100%)`
* **Soft Dreamy Gradient:** `linear-gradient(135deg, #A78BFA 0%, #73C8F4 100%)`

---

## 🛠️ Technology Stack

VOYORA strictly adheres to pure frontend web standards:

* **HTML5** — Semantic, accessible, high-performance structure
* **CSS3** — CSS perspective (`perspective: 1200px`), 3D transforms (`rotateX`, `rotateY`, `translateZ`, `scale`), depth layering, warm glassmorphism (`backdrop-filter: blur(20px)`), subtle ambient lighting blobs, and responsive grid layout
* **Vanilla JavaScript (ES6+)** — Fresh 3D Globe Canvas Engine, requestAnimationFrame soft-spring 3D tilt calculations, 3D Postcard Coverflow Carousel, interactive SVG route trajectories, animated number counters, and centralized reactive state store (`voyoraState`)
* **PWA Ready** — `manifest.json` + `sw.js` (Service Worker) for standalone installability and offline asset caching

> ❌ **Zero heavy frameworks used** (No React, Vue, Angular, Bootstrap, Tailwind, jQuery, etc.)

---

## 🌟 3D Visual & Interactive Highlights

### 1. 🌐 Fresh 3D Globe (`Globe3DEngine`)
* **Spherical Dot Matrix:** Soft sky-blue ocean globe (`#eaf6fd` to `#8ed6f8`) with fresh mint (`#72D6B0`) landmass matrices and lilac atmospheric haze.
* **Tiny Butter-Yellow Hub Pins:** Glowing city pins for Paris, Tokyo, Dubai, New York, and Mumbai.
* **Orbiting Airplane & Floating Badges:** Interactive floating destination badges (`Paris 🥐`, `Tokyo 🌸`, `Dubai 🐪`, `Bali 🌴`, `Switzerland 🏔️`) in ivory glass with lilac borders and butter-yellow details.

### 2. 🎴 Soft-Spring 3D Mouse Tilt (`Vanilla3DTilt`)
* Reusable, hardware-accelerated 3D mouse tilt with smooth ease-out spring interpolation across search panels, experience cards, statistics, and featured trip cards.

### 3. 💌 Postcard 3D Coverflow Destination Carousel
* Spatial 3D coverflow carousel featuring Paris, Tokyo, Dubai, Bali, Swiss Alps, New York, Maldives, and Istanbul styled as luxury travel postcards with butter-yellow stamp tags and smooth perspective rotation (`rotateY`).

### 4. 🧭 3D Travel Experience Tiles
* Multi-depth interactive category cards for **✈️ Adventure & Treks**, **🌊 Beach Escapes**, **🏔️ Mountain Journeys**, and **🏙️ City Exploration**.

### 5. 🗺️ Warm Ivory World Route Map
* Stylized ivory vector world map with lilac flight trajectory curves (`stroke-dasharray` flow) and butter-yellow pulsing destination pins.

### 6. 📊 Travel in Numbers (Animated Counters)
* `IntersectionObserver`-powered smooth count-up animations for **120+ Destinations**, **50K+ Happy Explorers**, **500+ Curated Trips**, and **4.9/5 Rating ✦**.

### 7. 🏙️ Featured Journey 3D Parallax (Dubai)
* Full-width cinematic parallax imagery with floating glass statistics card (5 Days / 4 Nights, ₹39,999 onwards).

---

## 🚀 Complete VOYORA AI Ecosystem

* **✨ AI Trip Planner:** 7-step customizable wizard balancing routes, budgets, accommodation styles, and curated local activities.
* **🔄 "CHANGE MY PLAN" Dynamic Replanner:** Rule-based instant adjustments with natural language input, rule chips, **Original Plan ➔ AI Updated Plan** diff comparisons, and instant snapshot undo.
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
├── style.css         # Lilac + Butter Yellow 3D CSS3 styles, glassmorphism, responsive grid
├── script.js         # Vanilla JS 3D Globe, Tilt Engine, Coverflow, AI ecosystem
├── manifest.json     # PWA Web App Manifest
├── sw.js             # Service Worker for offline caching
└── README.md         # Architecture, Brand Design System & Technical Documentation
```

---

## 📜 Commit History

* **Commit 1:** *Initial commit*
* **Commit 2:** *feat: complete AI-powered tourism platform with trip generator, dynamic replanner, 3-tier optimizer, local business hub, group planner, and offline mode*
* **Commit 3:** *feat: complete 3D immersive redesign of VOYORA with 3D Globe, Coverflow carousel, and 3D mouse tilt*
* **Commit 4:** *feat: upgrade VOYORA to cute dreamy pastel 3D travel platform*
* **Commit 5:** *refactor(ui): streamline hero CTA actions and clean landing page*
* **Commit 6:** *feat: dark dreamy pastel 3D travel redesign*
* **Commit 7:** *feat: brand color identity upgrade to fresh Lilac (#A78BFA, #7C5CFC) and Butter Yellow (#FFD966) with warm ivory (#FFFDF7) and mint/sky-blue accents*
* **Repository:** [https://github.com/sidzooni-ctrl/VOYORA](https://github.com/sidzooni-ctrl/VOYORA)

**VOYORA — Your world, your way. ✈️**
