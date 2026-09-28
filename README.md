# 🌍 VOYORA — Your World, Your Way.
> **AI-Powered Smart Tourism Ecosystem**  
> *Dynamic Itinerary Planning • Geospatial Smart Maps • AI Replanners • Local Business Hub • Group Travel • Guaranteed Offline Mode*

---

## 🚀 Overview

**VOYORA** is an AI-powered smart tourism platform engineered to make travel planning personalized, affordable, dynamic, sustainable, and convenient. Built for the **Smart India Hackathon (SIH)**, VOYORA bridges the gap between travelers, AI itinerary synthesis, grassroots tourism businesses, and collaborative group travel—with complete offline reliability.

---

## 🛠️ Technology Stack

VOYORA strictly adheres to the pure web standard:

* **HTML5** — Semantic, accessible SPA markup
* **CSS3** — Custom design system with Deep Navy (`#0a1628`), Vibrant Teal (`#0d9488`), Warm Gold (`#f59e0b`), Soft Beige (`#faf6f0`), glassmorphism, responsive grids, and CSS animations
* **Vanilla JavaScript (ES6+)** — Reactive central state store (`voyoraState`), dynamic SVG vector mapping, algorithmic budget optimizer, group voting consensus engine, and offline caching
* **PWA Ready** — `manifest.json` + `sw.js` (Service Worker) for standalone installability and offline asset caching

> ❌ **No heavy frameworks used** (Zero React, Next.js, Vue, Angular, TypeScript, Bootstrap, Tailwind, jQuery, etc.)

---

## 🌟 The 5 Major Features Added

### 1. 🗺️ VOYORA Smart Trip Map ("Your Journey on the Map")
* **Interactive Geospatial Canvas:** Vector-rendered interactive map with realistic coordinates for major Indian destinations (Mumbai, Goa, Kashmir, Rajasthan, Kerala, Bengaluru).
* **Multi-Category Pinning:** Hotels (🏨), Attractions (📍), Restaurants & Cafes (🍴/☕), Hidden Gems (🌿), and Activities (🎯).
* **Bidirectional Synchronization:**
  * Clicking an activity in the itinerary timeline pans and highlights the corresponding pin on the map.
  * Clicking a map pin opens a detailed preview drawer and scrolls to that activity in the timeline (or adds it to the trip).
* **Category & Day Filters:** Filter map points by day (Day 1, Day 2, Day 3) or by establishment category.

### 2. 🔄 "CHANGE MY PLAN" AI Replanner
* **Context-Aware Dynamic Modification:** Prominent inside the itinerary.
* **Quick Prompt Chips:** *Make it cheaper*, *Remove an activity*, *Add more food experiences*, *Add adventure*, *More relaxing*, *Less travel time*, *More hidden gems*, *Replace outdoor activities*.
* **Custom NLP Prompt Input:** Handles custom instructions such as *"I don't want museums. Give me local markets and street food."*
* **Visual Diff Comparison:** Displays **Original Plan ➔ AI Updated Plan** with itemized diff badges and AI conversational reasoning.
* **Undo Changes:** Snapshot recovery to restore prior plans seamlessly.

### 3. 📱 Offline Trip Mode (SIH Connectivity Solution)
* **One-Click Offline Caching:** **"Save Trip Offline"** stores complete day-by-day itineraries, hotel vouchers, restaurant recommendations, and emergency helplines (`1363`, `112`, `108`) directly in `localStorage`.
* **Live Status Indicators:** Navbar & footer pills dynamically toggle between **ONLINE 🟢** and **OFFLINE 🟠**.
* **Simulated Offline Testing:** Built-in simulation toggle to demonstrate 100% offline functionality during live hackathon judging.
* **Offline Trips Section:** Dedicated tab in *My Trips* showing all **🟢 Available Offline** itineraries.

### 4. 🏪 VOYORA Local Business Hub (Two-Sided Ecosystem)
* **Tourist Discovery:** Discover certified local guides, authentic homestays, cultural workshops (e.g., Warli art & pottery), and culinary food walks.
* **Special Offer Banners:** Highlighting promotional discounts (e.g., *🎁 20% OFF on Morning Heritage Strolls*).
* **Add to Trip Action:** Seamlessly inserts local experiences into the active itinerary.
* **Business Owner Dashboard:**
  * Real-time metrics: *Profile Views*, *Trip Adds*, *Favorites Saved*, *Offer Clicks*, *Inquiry Trends*.
  * Interactive Listing Manager: Form to register and publish hotels, homestays, food tours, or guide profiles.
  * Promotional Campaign Creator: Launch discount vouchers and special offers.

### 5. 👥 VOYORA Group Trip Planner ("PLAN TOGETHER")
* **Collaborative Group Workspace:** Create group trips and generate shareable invite codes (e.g., `VOYORA-MUM26`).
* **Traveler Roster:** Multi-traveler profile switcher (Aisha, Rohan, Priya, Kabir) for demonstration.
* **Live Visual Voting Center:** Real-time poll progress bars with duplicate-vote prevention across activities, food spots, stays, and day excursions.
* **AI Consensus Itinerary Generation:** VOYORA AI synthesizes group votes, per-person budget limits, and traveler counts into a balanced group itinerary.

---

## 🔥 "MAKE MY TRIP BETTER" AI Multi-Tier Optimizer

Inside the itinerary, **"✨ MAKE MY TRIP BETTER"** analyzes distance, weather, sustainability, and available activities to generate 3 parallel plans:
1. 💰 **BUDGET TIER:** Affordable homestays, local transport, free attractions (₹9,750).
2. ⚖️ **BALANCED TIER (Recommended):** Optimal balance of boutique stays, food walks, and curated gems (₹14,250).
3. ✨ **PREMIUM TIER:** 5-star heritage hotels, private cabs, exclusive yacht & fine-dining experiences (₹24,000).

---

## 🏆 SIH Presentation "WOW" Demo Flow

To demonstrate the full ecosystem live to judges:
1. Click **⚡ 1-Click SIH Live Demo** on the homepage or header.
2. The AI loads the **Mumbai 3-Day Trip (₹15,000 · Food + Culture + Photography)**.
3. Switch to the **Smart Map** tab to see bidirectional route mapping and pin previews.
4. Click **✨ MAKE MY TRIP BETTER** to compare Budget, Balanced, and Premium tiers.
5. Click **✨ CHANGE MY PLAN** and select *"Remove museum / relax pace"* to inspect live AI replanning diffs.
6. Navigate to the **Local Business Hub** and click *"+ Add to Trip"* on the *Khau Galli Food Tour*.
7. Open **Group Travel ("Plan Together")**, switch traveler profiles, and vote on polls.
8. Click **✨ Create Group Itinerary** to generate the consensus plan.
9. Click **📥 Save Trip Offline** and test the **OFFLINE 🟠** toggle to show instant offline accessibility.

---

## 📁 Repository Structure

```
VOYORA/
├── index.html        # Single-file complete application (HTML5, CSS3, Vanilla JS)
├── manifest.json     # PWA Web App Manifest
├── sw.js             # Service Worker for offline asset caching
└── README.md         # Architecture, Features & SIH Documentation
```

---

## 📜 License

Created with ❤️ for Smart India Hackathon (SIH) 2026.
**VOYORA — Your World, Your Way.**
