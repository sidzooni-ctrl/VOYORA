/**
 * ==========================================================
 * VOYORA — Cute Dreamy Pastel 3D Travel Platform Core Engine
 * Pure Vanilla JavaScript (ES6+) • Zero External Frameworks
 * Pastel 3D Globe • Soft Tilt • 3D Coverflow Postcards • AI Ecosystem
 * ==========================================================
 */

'use strict';

// Master Central State Store
const voyoraState = {
  activeTab: 'home',
  favorites: JSON.parse(localStorage.getItem('voyora_favs') || '[]'),
  trips: JSON.parse(localStorage.getItem('voyora_trips') || '[]'),
  offlineTrips: JSON.parse(localStorage.getItem('voyora_offline_trips') || '[]'),
  isSimulatedOffline: false,
  activeTravelerId: 'user-1',
  activeCarouselIndex: 2, // Default center on Dubai
  currentTrip: null,
  previousTripSnapshot: null,
  chatLang: 'en',
  chatHistory: [],

  // Curated Postcard Destinations
  destinations: [
    {
      id: 'paris',
      name: 'Paris',
      country: 'France',
      flag: '🇫🇷',
      desc: 'City of light, pastel bakeries, Louvre art galleries and romantic Seine river walks.',
      price: '₹48,999',
      rating: 4.9,
      category: 'Culture',
      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      tag: '🌸 Romantic'
    },
    {
      id: 'tokyo',
      name: 'Tokyo',
      country: 'Japan',
      flag: '🇯🇵',
      desc: 'Cherry blossom gardens, historic Shinto shrines, matcha cafes, and neon skylines.',
      price: '₹56,499',
      rating: 4.9,
      category: 'Adventure',
      img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80',
      tag: '⛩️ Dreamy'
    },
    {
      id: 'dubai',
      name: 'Dubai',
      country: 'UAE',
      flag: '🇦🇪',
      desc: 'Golden sunset dunes, luxury private yachts, rooftop pools and modern architecture.',
      price: '₹39,999',
      rating: 4.8,
      category: 'Luxury',
      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      tag: '✨ Featured'
    },
    {
      id: 'bali',
      name: 'Bali',
      country: 'Indonesia',
      flag: '🇮🇩',
      desc: 'Emerald rice terraces, tranquil wellness retreats, surf coves and tropical cafes.',
      price: '₹32,999',
      rating: 4.8,
      category: 'Beaches',
      img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      tag: '🌴 Tropical'
    },
    {
      id: 'switzerland',
      name: 'Swiss Alps',
      country: 'Switzerland',
      flag: '🇨🇭',
      desc: 'Snowy alpine peaks, panoramic mountain trains, crystal lakes and cozy chalets.',
      price: '₹68,999',
      rating: 4.9,
      category: 'Mountains',
      img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
      tag: '🏔️ Alpine'
    },
    {
      id: 'newyork',
      name: 'New York',
      country: 'USA',
      flag: '🇺🇸',
      desc: 'Central Park autumn walks, Broadway theater lights, rooftop brunches and iconic museums.',
      price: '₹74,999',
      rating: 4.7,
      category: 'City',
      img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      tag: '🗽 Metropolis'
    },
    {
      id: 'maldives',
      name: 'Maldives',
      country: 'Maldives',
      flag: '🇲🇻',
      desc: 'Pastel turquoise lagoons, overwater wooden villas, coral gardens and sunset dolphin cruises.',
      price: '₹52,000',
      rating: 4.9,
      category: 'Luxury',
      img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      tag: '🏝️ Paradise'
    },
    {
      id: 'istanbul',
      name: 'Istanbul',
      country: 'Turkey',
      flag: '🇹🇷',
      desc: 'Bosphorus strait ferry cruises, colorful spice bazaars, Byzantine mosaics and Turkish tea.',
      price: '₹34,500',
      rating: 4.7,
      category: 'Culture',
      img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
      tag: '🕌 Heritage'
    }
  ],

  // Local Grassroots Business Network
  businesses: [
    {
      id: 'biz-1',
      name: 'Old Town Heritage Walking Guild',
      category: 'Guide',
      city: 'Mumbai',
      rating: 4.9,
      price: 650,
      desc: 'Architecture and colonial history stroll from Victoria Terminus to Gateway of India.',
      offer: '🎁 20% OFF on Morning Heritage Strolls',
      img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80'
    },
    {
      id: 'biz-2',
      name: 'Khau Galli Street Food Odyssey',
      category: 'Food Tour',
      city: 'Mumbai',
      rating: 4.8,
      price: 800,
      desc: 'Guided tasting of authentic Pav Bhaji, Pani Puri, Vada Pav, and regional desserts.',
      offer: '☕ Free Masala Chai & Kulfi Tasting',
      img: 'https://images.unsplash.com/photo-1601050690597-dfb528c6958f?w=600&q=80'
    },
    {
      id: 'biz-3',
      name: 'Seaside Heritage Homestay',
      category: 'Homestay',
      city: 'Goa',
      rating: 4.9,
      price: 2800,
      desc: 'Restored Portuguese villa near pristine beaches with homemade local breakfast.',
      offer: '🏷️ 15% OFF for stays over 2 nights',
      img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'
    }
  ],

  // Group Trip Collaboration State
  groupTrip: {
    name: 'Mumbai & Goa Pastel Getaway',
    code: 'VOYORA-MUM26',
    members: [
      { id: 'user-1', name: 'Aisha Sharma', role: 'Organizer', avatar: 'AS' },
      { id: 'user-2', name: 'Rohan Mehta', role: 'Traveler', avatar: 'RM' },
      { id: 'user-3', name: 'Priya Patel', role: 'Traveler', avatar: 'PP' },
      { id: 'user-4', name: 'Kabir Khan', role: 'Traveler', avatar: 'KK' }
    ],
    polls: [
      {
        id: 'poll-1',
        title: '🏖️ Saturday Morning Experience',
        options: [
          { id: 'o-1', label: 'Marine Drive & Chowpatty Beach Walk', votes: ['user-1', 'user-2', 'user-3'] },
          { id: 'o-2', label: 'Elephanta Rock-Cut Caves Ferry', votes: ['user-4'] },
          { id: 'o-3', label: 'Vintage Art & Pottery Workshop', votes: ['user-2'] }
        ]
      },
      {
        id: 'poll-2',
        title: '🍽️ Saturday Night Dinner Choice',
        options: [
          { id: 'o-4', label: 'Khau Galli Street Food Walk', votes: ['user-1', 'user-3', 'user-4'] },
          { id: 'o-5', label: 'Coastal Seafood Roof Deck', votes: ['user-2'] }
        ]
      }
    ]
  }
};

/* ==========================================================
   1. CUTE DREAMY PASTEL 3D GLOBE ENGINE
   ========================================================== */
class Globe3DEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = 440;
    this.height = this.canvas.height = 440;
    this.radius = 175;
    this.rotationY = 0;
    this.rotationX = 0.18;
    this.targetRotX = 0.18;
    this.targetRotY = 0;
    this.points = [];
    this.flightAngle = 0;
    this.cloudPoints = [];

    this.initPoints();
    this.initEvents();
    this.animate();
  }

  initPoints() {
    // Generate spherical dot matrix with pastel coordinates
    const numPoints = 680;
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      this.points.push({
        x: this.radius * Math.cos(theta) * Math.sin(phi),
        y: this.radius * Math.sin(theta) * Math.sin(phi),
        z: this.radius * Math.cos(phi),
        baseSize: Math.random() * 1.6 + 1.2,
        isLand: Math.sin(theta * 3) * Math.cos(phi * 2) > -0.2
      });
    }

    // Soft floating clouds on the globe sphere
    for (let c = 0; c < 12; c++) {
      const phi = Math.random() * Math.PI;
      const theta = Math.random() * Math.PI * 2;
      this.cloudPoints.push({
        x: (this.radius + 6) * Math.cos(theta) * Math.sin(phi),
        y: (this.radius + 6) * Math.sin(theta) * Math.sin(phi),
        z: (this.radius + 6) * Math.cos(phi),
        radius: Math.random() * 14 + 10
      });
    }

    // Cute Destination Hub City Markers
    this.cities = [
      { name: 'Paris', lat: 48.85, lon: 2.35, color: '#ff9fc5' },
      { name: 'Tokyo', lat: 35.67, lon: 139.65, color: '#c9b6ff' },
      { name: 'Dubai', lat: 25.20, lon: 55.27, color: '#ffcba4' },
      { name: 'New York', lat: 40.71, lon: -74.00, color: '#a9ddf7' },
      { name: 'Mumbai', lat: 19.07, lon: 72.87, color: '#b8e6d0' }
    ];
  }

  initEvents() {
    window.addEventListener('mousemove', (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      this.targetRotY += normX * 0.002;
      this.targetRotX = normY * 0.25;
    });
  }

  project(p, rotX, rotY) {
    let x1 = p.x * Math.cos(rotY) + p.z * Math.sin(rotY);
    let z1 = -p.x * Math.sin(rotY) + p.z * Math.cos(rotY);

    let y2 = p.y * Math.cos(rotX) - z1 * Math.sin(rotX);
    let z2 = p.y * Math.sin(rotX) + z1 * Math.cos(rotX);

    const fov = 400;
    const scale = fov / (fov + z2);

    return {
      x: this.width / 2 + x1 * scale,
      y: this.height / 2 + y2 * scale,
      z: z2,
      scale: scale,
      visible: z2 > -40
    };
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Auto rotate
    this.rotationY += 0.005;
    this.rotationX += (this.targetRotX - this.rotationX) * 0.05;

    // Pastel Sky Blue & Cream Ocean Gradient
    const oceanGrad = this.ctx.createRadialGradient(
      this.width / 2 - 30, this.height / 2 - 30, this.radius * 0.2,
      this.width / 2, this.height / 2, this.radius
    );
    oceanGrad.addColorStop(0, '#eaf7fd');
    oceanGrad.addColorStop(0.6, '#c6ecfd');
    oceanGrad.addColorStop(1, '#a1d8f5');

    this.ctx.beginPath();
    this.ctx.arc(this.width / 2, this.height / 2, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = oceanGrad;
    this.ctx.fill();

    // Soft Atmospheric Border
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = 'rgba(255, 214, 229, 0.6)';
    this.ctx.stroke();

    // Draw Spherical Pastel Dots (Land = Mint & Lavender, Water = White & Baby Blue)
    this.points.forEach(p => {
      const proj = this.project(p, this.rotationX, this.rotationY);
      if (proj.visible) {
        const alpha = Math.max(0.15, (proj.z + this.radius) / (2 * this.radius));
        this.ctx.beginPath();
        this.ctx.arc(proj.x, proj.y, p.baseSize * proj.scale, 0, Math.PI * 2);

        if (p.isLand) {
          this.ctx.fillStyle = `rgba(184, 230, 208, ${alpha * 0.9})`; // Pastel Mint
        } else {
          this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.6})`; // Soft White
        }
        this.ctx.fill();
      }
    });

    // Draw Soft Cloud Patches
    this.cloudPoints.forEach(c => {
      const proj = this.project(c, this.rotationX, this.rotationY);
      if (proj.visible && proj.z > 20) {
        const cloudGrad = this.ctx.createRadialGradient(proj.x, proj.y, 0, proj.x, proj.y, c.radius * proj.scale);
        cloudGrad.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
        cloudGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.ctx.beginPath();
        this.ctx.arc(proj.x, proj.y, c.radius * proj.scale, 0, Math.PI * 2);
        this.ctx.fillStyle = cloudGrad;
        this.ctx.fill();
      }
    });

    // Draw Cute Glowing City Nodes
    this.cities.forEach(city => {
      const phi = (90 - city.lat) * (Math.PI / 180);
      const theta = (city.lon + 180) * (Math.PI / 180);
      const p = {
        x: -(this.radius * Math.sin(phi) * Math.cos(theta)),
        y: -(this.radius * Math.cos(phi)),
        z: this.radius * Math.sin(phi) * Math.sin(theta)
      };
      const proj = this.project(p, this.rotationX, this.rotationY);
      if (proj.visible && proj.z > 0) {
        // Outer glow
        this.ctx.beginPath();
        this.ctx.arc(proj.x, proj.y, 7 * proj.scale, 0, Math.PI * 2);
        this.ctx.fillStyle = city.color;
        this.ctx.shadowColor = city.color;
        this.ctx.shadowBlur = 10;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;

        // Inner white dot
        this.ctx.beginPath();
        this.ctx.arc(proj.x, proj.y, 2.5 * proj.scale, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
      }
    });

    // Orbiting Cute Airplane Animation
    this.flightAngle += 0.016;
    const planeEl = document.getElementById('orbitingPlane');
    if (planeEl) {
      const rx = 240 * Math.cos(this.flightAngle);
      const ry = 80 * Math.sin(this.flightAngle);
      planeEl.style.transform = `translate(${rx}px, ${ry}px) rotate(${this.flightAngle * 57.3 + 90}deg)`;
    }

    requestAnimationFrame(() => this.animate());
  }
}

/* ==========================================================
   2. REUSABLE 3D MOUSE TILT ENGINE (SOFT SPRING EASING)
   ========================================================== */
class Vanilla3DTilt {
  static init() {
    const tiltElements = document.querySelectorAll('[data-tilt-3d]');
    tiltElements.forEach(el => {
      let bounds;
      let mouseX = 0, mouseY = 0;
      let isHovering = false;

      const updateTransform = () => {
        if (!isHovering) return;
        const xPct = (mouseX - bounds.left) / bounds.width - 0.5;
        const yPct = (mouseY - bounds.top) / bounds.height - 0.5;
        const maxRot = parseFloat(el.dataset.tiltMax || 10);
        const rotX = -yPct * maxRot;
        const rotY = xPct * maxRot;
        const tz = parseFloat(el.dataset.tiltZ || 20);

        el.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(${tz}px)`;
        requestAnimationFrame(updateTransform);
      };

      el.addEventListener('mouseenter', () => {
        isHovering = true;
        bounds = el.getBoundingClientRect();
        el.style.transition = 'transform 0.12s ease-out';
        requestAnimationFrame(updateTransform);
      });

      el.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      el.addEventListener('mouseleave', () => {
        isHovering = false;
        el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      });
    });
  }
}

/* ==========================================================
   3. 3D COVERFLOW DESTINATION CAROUSEL (TRAVEL POSTCARDS)
   ========================================================== */
class Destination3DCarousel {
  constructor() {
    this.track = document.getElementById('carouselTrack');
    this.destinations = voyoraState.destinations;
    this.currentIndex = voyoraState.activeCarouselIndex;
    if (!this.track) return;

    this.render();
    this.bindEvents();
  }

  render() {
    this.track.innerHTML = this.destinations.map((d, index) => `
      <div class="carousel-3d-card" data-index="${index}" onclick="carousel.setCenter(${index})">
        <img src="${d.img}" class="carousel-card-img" alt="${d.name}" loading="lazy">
        <span class="carousel-card-badge">${d.tag}</span>
        <div class="carousel-card-overlay">
          <div class="carousel-card-title">${d.name} ${d.flag}</div>
          <p class="carousel-card-desc">${d.desc}</p>
          <div class="carousel-card-footer">
            <div class="carousel-price">${d.price} <small>onwards</small></div>
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();quickPlanDestination('${d.name}')">Explore →</button>
          </div>
        </div>
      </div>
    `).join('');

    this.updateCardPositions();
  }

  updateCardPositions() {
    const cards = this.track.querySelectorAll('.carousel-3d-card');
    const total = cards.length;

    cards.forEach((card, i) => {
      let offset = i - this.currentIndex;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const absOffset = Math.abs(offset);
      const sign = Math.sign(offset);

      if (absOffset === 0) {
        card.style.transform = `translateX(0) translateZ(70px) rotateY(0deg) scale(1.05)`;
        card.style.zIndex = 30;
        card.style.opacity = 1;
        card.style.filter = 'none';
      } else if (absOffset <= 3) {
        const xOffset = sign * (absOffset * 185 + 50);
        const rotY = -sign * (22 + absOffset * 4);
        const zOffset = -absOffset * 65;
        const scale = Math.max(0.72, 1 - absOffset * 0.11);

        card.style.transform = `translateX(${xOffset}px) translateZ(${zOffset}px) rotateY(${rotY}deg) scale(${scale})`;
        card.style.zIndex = 20 - absOffset;
        card.style.opacity = Math.max(0.4, 1 - absOffset * 0.22);
        card.style.filter = `blur(${absOffset * 1.2}px)`;
      } else {
        card.style.transform = `translateX(${sign * 600}px) translateZ(-300px) scale(0.5)`;
        card.style.opacity = 0;
        card.style.pointerEvents = 'none';
      }
    });
  }

  setCenter(index) {
    this.currentIndex = index;
    voyoraState.activeCarouselIndex = index;
    this.updateCardPositions();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.destinations.length;
    this.updateCardPositions();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.destinations.length) % this.destinations.length;
    this.updateCardPositions();
  }

  bindEvents() {
    document.getElementById('carouselNextBtn')?.addEventListener('click', () => this.next());
    document.getElementById('carouselPrevBtn')?.addEventListener('click', () => this.prev());

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    });
  }
}

/* ==========================================================
   4. CUTE PASTEL WORLD ROUTE MAP
   ========================================================== */
class InteractiveWorldMap {
  static init() {
    const nodes = document.querySelectorAll('.map-city-node');
    const popover = document.getElementById('mapPopover');
    if (!popover) return;

    const cityData = {
      mumbai: { name: 'Mumbai', country: 'India 🇮🇳', highlights: 'Gateway of India, Marine Drive, Khau Galli Street Food', price: '₹15,000' },
      dubai: { name: 'Dubai', country: 'UAE 🇦🇪', highlights: 'Burj Khalifa, Sunset Sand Safaris, Marina Yacht Cruises', price: '₹39,999' },
      paris: { name: 'Paris', country: 'France 🇫🇷', highlights: 'Eiffel Tower, Louvre Museum, Seine River Promenade', price: '₹48,999' },
      tokyo: { name: 'Tokyo', country: 'Japan 🇯🇵', highlights: 'Shibuya Crossing, Mount Fuji, Cherry Blossom Gardens', price: '₹56,499' },
      newyork: { name: 'New York', country: 'USA 🇺🇸', highlights: 'Central Park, Broadway Theaters, Times Square', price: '₹74,999' },
      singapore: { name: 'Singapore', country: 'Singapore 🇸🇬', highlights: 'Marina Bay Sands, Gardens by the Bay, Night Safari', price: '₹36,000' },
      bali: { name: 'Bali', country: 'Indonesia 🇮🇩', highlights: 'Ubud Rice Terraces, Uluwatu Sea Temple, Surf Beaches', price: '₹32,999' }
    };

    nodes.forEach(node => {
      node.addEventListener('mouseenter', () => {
        const cityKey = node.dataset.city;
        const info = cityData[cityKey];
        if (!info) return;

        document.getElementById('mapPopoverTitle').textContent = `${info.name}, ${info.country}`;
        document.getElementById('mapPopoverDesc').textContent = info.highlights;
        document.getElementById('mapPopoverPrice').textContent = `Starting from ${info.price}`;
        popover.classList.add('active');
      });
    });
  }
}

/* ==========================================================
   5. ANIMATED NUMBERS (STATISTICS OBSERVER)
   ========================================================== */
function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target || 0);
        const duration = 1800;
        const startTime = performance.now();
        const isDecimal = target % 1 !== 0;

        const countUp = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = target * easeOut;

          el.textContent = isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal).toLocaleString('en-IN');

          if (progress < 1) {
            requestAnimationFrame(countUp);
          } else {
            el.textContent = isDecimal ? target.toFixed(1) + '/5' : target.toLocaleString('en-IN') + '+';
          }
        };

        requestAnimationFrame(countUp);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(n => observer.observe(n));
}

/* ==========================================================
   6. SCROLL PARALLAX & NAVBAR CONTROLLER
   ========================================================== */
function initScrollParallax() {
  const navbar = document.getElementById('navbar');
  const featuredBg = document.getElementById('featuredBg');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 24);
    }

    if (featuredBg) {
      const rect = featuredBg.parentElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (window.innerHeight - rect.top) * 0.06;
        featuredBg.style.transform = `translateY(${offset - 30}px)`;
      }
    }
  }, { passive: true });
}

/* ==========================================================
   7. AI TRIP GENERATOR & ITINERARY CORE
   ========================================================== */
function generateTripFromHero() {
  const dest = document.getElementById('heroSearchDest')?.value.trim() || 'Dubai';
  const travelers = document.getElementById('heroSearchTravelers')?.value || '2';
  const budget = parseInt(document.getElementById('heroSearchBudget')?.value || '35000');

  openTripPlannerModal(dest, budget, travelers);
}

function quickPlanDestination(destName) {
  openTripPlannerModal(destName, 40000, 2);
}

function openTripPlannerModal(preDest = 'Dubai', preBudget = 35000, preTravelers = 2) {
  const html = `
    <div class="preserve-3d">
      <div class="section-tag" style="margin-bottom:12px">VOYORA AI Planner ✦</div>
      <h2 style="font-size:1.75rem;margin-bottom:8px">Create Your Dreamy 3D Journey</h2>
      <p class="text-muted" style="margin-bottom:24px">AI evaluates real-time routes, accommodations, budget, and local experiences.</p>

      <div class="search-input-group" style="margin-bottom:16px">
        <label>Destination City</label>
        <div class="search-input-box">
          <input type="text" id="modalPlanDest" value="${preDest}" placeholder="e.g. Mumbai, Dubai, Paris, Tokyo">
        </div>
      </div>

      <div class="search-3d-grid" style="grid-template-columns:1fr 1fr;margin-bottom:16px">
        <div class="search-input-group">
          <label>Travelers</label>
          <div class="search-input-box">
            <select id="modalPlanTravelers">
              <option value="1" ${preTravelers == 1 ? 'selected' : ''}>1 Solo Explorer</option>
              <option value="2" ${preTravelers == 2 ? 'selected' : ''}>2 Duo Travelers</option>
              <option value="4" ${preTravelers == 4 ? 'selected' : ''}>4 Friends Group</option>
            </select>
          </div>
        </div>
        <div class="search-input-group">
          <label>Estimated Budget (₹)</label>
          <div class="search-input-box">
            <input type="number" id="modalPlanBudget" value="${preBudget}">
          </div>
        </div>
      </div>

      <div class="search-input-group" style="margin-bottom:24px">
        <label>Travel Style & Pace</label>
        <div class="search-input-box">
          <select id="modalPlanStyle">
            <option value="Balanced" selected>Balanced Explorer 🌿 (Recommended)</option>
            <option value="Budget">Budget Backpacking 🎒</option>
            <option value="Luxury">Luxury & Comfort ✨</option>
            <option value="Culinary">Food & Culture Odyssey 🍲</option>
          </select>
        </div>
      </div>

      <button class="btn btn-primary btn-block" onclick="executeTripGeneration()">✨ Generate Dreamy Itinerary</button>
    </div>
  `;
  openModal(html);
}

function executeTripGeneration() {
  const dest = document.getElementById('modalPlanDest')?.value.trim() || 'Dubai';
  const budget = parseInt(document.getElementById('modalPlanBudget')?.value || '40000');
  const travelers = parseInt(document.getElementById('modalPlanTravelers')?.value || '2');
  const style = document.getElementById('modalPlanStyle')?.value || 'Balanced';

  closeModal();
  showToast(`VOYORA AI is crafting your ${dest} trip... 🌸`, 'info');

  setTimeout(() => {
    voyoraState.currentTrip = {
      id: 'trip-' + Date.now(),
      destination: dest,
      budget,
      travelers,
      style,
      days: 3,
      costs: {
        accommodation: Math.round(budget * 0.4),
        food: Math.round(budget * 0.25),
        transit: Math.round(budget * 0.15),
        activities: Math.round(budget * 0.15),
        misc: Math.round(budget * 0.05),
        total: budget
      },
      planDays: [
        {
          day: 1,
          date: 'Day 1 · Arrival & Iconic Highlights',
          items: [
            { time: '09:30 AM', title: `Iconic Highlights of ${dest}`, cost: 'Free Entry', desc: 'Orientation stroll and golden hour photography.' },
            { time: '01:30 PM', title: 'Authentic Local Tasting Tour', cost: '₹850', desc: 'Curated tasting at verified grassroots restaurants.' },
            { time: '06:00 PM', title: 'Sunset Promenade Walk', cost: 'Free', desc: 'Sunset ocean breeze and pastel skyline views.' }
          ]
        },
        {
          day: 2,
          date: 'Day 2 · Heritage & Hidden Gems',
          items: [
            { time: '10:00 AM', title: 'Historic Old Quarter & Artisan Guild', cost: '₹400', desc: 'Guided stroll through ancient spice and craft bazaars.' },
            { time: '03:30 PM', title: 'Hidden Viewpoint & Tea Masterclass', cost: '₹500', desc: 'Lesser-known serene spot away from tourist crowds.' },
            { time: '08:00 PM', title: 'Rooftop Skyline Dining', cost: '₹1,200', desc: 'Panoramic evening dinner overlooking the illuminated city.' }
          ]
        }
      ]
    };

    openItineraryModal();
  }, 1200);
}

function openItineraryModal() {
  const t = voyoraState.currentTrip;
  if (!t) return;

  const html = `
    <div class="preserve-3d" style="max-width:740px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <span class="section-tag" style="margin:0">AI Generated Plan ✦</span>
        <button class="btn btn-secondary btn-sm" onclick="saveTripOffline()">📥 Save Offline</button>
      </div>
      <h2 style="font-size:2rem;margin-bottom:4px">${t.destination} · ${t.days} Days (${t.style})</h2>
      <p class="text-muted" style="margin-bottom:24px">Total Budget: ₹${t.budget.toLocaleString('en-IN')} · ${t.travelers} Travelers</p>

      <div style="display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap">
        <button class="btn btn-primary btn-sm" onclick="openChangeMyPlanModal()">✨ Change My Plan</button>
        <button class="btn btn-secondary btn-sm" onclick="openMakeTripBetterModal()">✨ Make Trip Better</button>
        <button class="btn btn-secondary btn-sm" onclick="openLocalHubModal()">🏪 Local Hub</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:18px;margin-bottom:24px">
        ${t.planDays.map(d => `
          <div class="glass-card" style="padding:22px">
            <h3 style="font-size:1.15rem;color:#7957db;margin-bottom:14px">${d.date}</h3>
            <div style="display:flex;flex-direction:column;gap:12px">
              ${d.items.map(it => `
                <div style="display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:10px;border-bottom:1px solid rgba(201,182,255,0.25)">
                  <div>
                    <div style="font-size:0.8rem;color:#d1568c;font-weight:700">${it.time}</div>
                    <div style="font-weight:700;color:var(--text-main)">${it.title}</div>
                    <div style="font-size:0.85rem;color:var(--text-muted)">${it.desc}</div>
                  </div>
                  <div style="font-weight:700;color:#e58742;font-size:0.88rem">${it.cost}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div style="font-size:1.2rem;font-weight:800;color:var(--text-main)">Total: ₹${t.costs.total.toLocaleString('en-IN')}</div>
        <button class="btn btn-primary" onclick="showToast('Itinerary saved to My Trips! 🧳','success');closeModal()">Confirm & Save Trip</button>
      </div>
    </div>
  `;
  openModal(html);
}

/* ==========================================================
   8. "CHANGE MY PLAN" REPLANNER WITH DIFF & UNDO
   ========================================================== */
function openChangeMyPlanModal() {
  const html = `
    <div style="max-width:640px">
      <span class="section-tag" style="margin-bottom:10px">VOYORA AI Replanner ✦</span>
      <h2 style="font-size:1.6rem;margin-bottom:8px">What would you like to change?</h2>
      <p class="text-muted" style="margin-bottom:20px">Select an optimization rule or tell VOYORA AI in your own words.</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px">
        <button class="btn btn-secondary btn-sm" onclick="applyReplan('Make it cheaper (under budget)')">💸 Make it cheaper</button>
        <button class="btn btn-secondary btn-sm" onclick="applyReplan('Remove museum / relax pace')">❌ Remove museum</button>
        <button class="btn btn-secondary btn-sm" onclick="applyReplan('Add more food walks')">🍲 Add local food tour</button>
        <button class="btn btn-secondary btn-sm" onclick="applyReplan('Add adventure activity')">🏄 Add adventure</button>
      </div>

      <div class="search-input-group" style="margin-bottom:20px">
        <label>Custom NLP AI Instruction</label>
        <div class="search-input-box">
          <input type="text" id="customReplanText" placeholder="e.g. 'I don\\'t want museums. Give me local street markets.'">
        </div>
      </div>

      <button class="btn btn-primary btn-block" onclick="applyReplan(document.getElementById('customReplanText').value)">Modify Itinerary</button>
      <div id="replanDiffBox" style="margin-top:20px"></div>
    </div>
  `;
  openModal(html);
}

function applyReplan(promptText) {
  if (!promptText) return;
  const t = voyoraState.currentTrip;
  if (!t) return;

  voyoraState.previousTripSnapshot = JSON.parse(JSON.stringify(t));

  t.planDays[0].items[0] = {
    time: '09:30 AM',
    title: 'Historic Artisan Bazaar & Spice Market',
    cost: '₹150',
    desc: 'Replaced traditional museum with authentic local artisan craft stalls.'
  };

  const diffBox = document.getElementById('replanDiffBox');
  if (diffBox) {
    diffBox.innerHTML = `
      <div class="glass-card" style="padding:18px;border-color:var(--mint);background:rgba(255,255,255,0.95)">
        <div style="font-size:0.8rem;color:#1b6845;font-weight:700;margin-bottom:6px">✓ AI UPDATED PLAN APPLIED</div>
        <div style="font-size:0.88rem;color:var(--text-main);margin-bottom:10px"><strong>VOYORA AI:</strong> "Done! I've removed the conventional museum and replaced it with an authentic local cultural market. Travel time reduced by 20 mins."</div>
        <div style="display:flex;gap:10px">
          <button class="btn btn-secondary btn-sm" onclick="undoReplan()">↩ Undo Changes</button>
          <button class="btn btn-primary btn-sm" onclick="openItineraryModal()">View Updated Plan</button>
        </div>
      </div>
    `;
  }
}

function undoReplan() {
  if (voyoraState.previousTripSnapshot) {
    voyoraState.currentTrip = JSON.parse(JSON.stringify(voyoraState.previousTripSnapshot));
    showToast('Plan reverted to previous snapshot ↩', 'info');
    openItineraryModal();
  }
}

/* ==========================================================
   9. "MAKE MY TRIP BETTER" 3-TIER ENGINE
   ========================================================== */
function openMakeTripBetterModal() {
  const t = voyoraState.currentTrip || { budget: 35000 };
  const base = t.budget;

  const html = `
    <div style="max-width:760px">
      <span class="section-tag" style="margin-bottom:10px">Multi-Tier AI Optimizer ✦</span>
      <h2 style="font-size:1.8rem;margin-bottom:8px">✨ Make My Trip Better</h2>
      <p class="text-muted" style="margin-bottom:24px">3 parallel strategies tailored for your journey:</p>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
        <div class="glass-card" style="padding:22px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="font-size:0.8rem;color:#1599db;font-weight:700">💰 BUDGET TIER</div>
            <h3 style="font-size:1.2rem;margin:6px 0">Smart Saver</h3>
            <p class="text-muted" style="font-size:0.8rem">Homestays, public metro passes, free iconic landmarks.</p>
            <div style="font-size:1.4rem;font-weight:800;color:var(--text-main);margin:12px 0">₹${Math.round(base * 0.65).toLocaleString('en-IN')}</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="switchTier('Budget', ${Math.round(base * 0.65)})">Use Budget</button>
        </div>

        <div class="glass-card" style="padding:22px;border-color:var(--pink-primary);display:flex;flex-direction:column;justify-content:space-between;background:rgba(255,249,245,0.95)">
          <div>
            <div style="font-size:0.8rem;color:#d1568c;font-weight:700">⚖️ BALANCED</div>
            <h3 style="font-size:1.2rem;margin:6px 0">Optimal Explorer</h3>
            <p class="text-muted" style="font-size:0.8rem">Boutique 3-star hotel, food walk, curated hidden gems.</p>
            <div style="font-size:1.4rem;font-weight:800;color:#d1568c;margin:12px 0">₹${Math.round(base * 0.95).toLocaleString('en-IN')}</div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="switchTier('Balanced', ${Math.round(base * 0.95)})">Use Balanced</button>
        </div>

        <div class="glass-card" style="padding:22px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="font-size:0.8rem;color:#e58742;font-weight:700">✨ PREMIUM TIER</div>
            <h3 style="font-size:1.2rem;margin:6px 0">Luxury Comfort</h3>
            <p class="text-muted" style="font-size:0.8rem">Heritage 5-star hotel, private AC cab, fine dining.</p>
            <div style="font-size:1.4rem;font-weight:800;color:#e58742;margin:12px 0">₹${Math.round(base * 1.6).toLocaleString('en-IN')}</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="switchTier('Luxury', ${Math.round(base * 1.6)})">Use Luxury</button>
        </div>
      </div>
    </div>
  `;
  openModal(html);
}

function switchTier(tierName, cost) {
  if (voyoraState.currentTrip) {
    voyoraState.currentTrip.style = tierName;
    voyoraState.currentTrip.budget = cost;
    voyoraState.currentTrip.costs.total = cost;
    showToast(`Switched to ${tierName} Plan (₹${cost.toLocaleString('en-IN')}) ✨`, 'success');
    openItineraryModal();
  }
}

/* ==========================================================
   10. LOCAL BUSINESS HUB & GROUP TRAVEL
   ========================================================== */
function openLocalHubModal() {
  const html = `
    <div style="max-width:700px">
      <span class="section-tag" style="margin-bottom:10px">Grassroots Tourism Hub ✦</span>
      <h2 style="font-size:1.8rem;margin-bottom:8px">🏪 VOYORA Local Business Network</h2>
      <p class="text-muted" style="margin-bottom:20px">Empowering certified local guides, authentic homestays, and culinary artisans.</p>

      <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:20px">
        ${voyoraState.businesses.map(b => `
          <div class="glass-card" style="padding:16px;display:flex;gap:16px;align-items:center">
            <img src="${b.img}" style="width:90px;height:75px;object-fit:cover;border-radius:14px" alt="${b.name}">
            <div style="flex:1">
              <div style="font-size:0.75rem;color:#7957db;font-weight:700">${b.category} · ${b.city}</div>
              <div style="font-weight:700;color:var(--text-main)">${b.name}</div>
              <div style="font-size:0.8rem;color:var(--text-muted)">${b.desc}</div>
              <div style="font-size:0.8rem;color:#e58742;font-weight:600">${b.offer}</div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="addBizToTrip('${b.name}')">+ Add</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  openModal(html);
}

function addBizToTrip(bizName) {
  showToast(`"${bizName}" added to active itinerary! 🏪✨`, 'success');
  closeModal();
}

function openGroupPlannerModal() {
  const group = voyoraState.groupTrip;
  const html = `
    <div style="max-width:680px">
      <span class="section-tag" style="margin-bottom:10px">Plan Together 👥</span>
      <h2 style="font-size:1.8rem;margin-bottom:4px">Group Travel Workspace</h2>
      <p class="text-muted" style="margin-bottom:16px">Invite Code: <strong>${group.code}</strong> (Share with friends)</p>

      <div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap">
        ${group.members.map(m => `
          <div style="padding:6px 14px;border-radius:20px;background:rgba(255,255,255,0.9);border:1.5px solid var(--lavender-light);font-size:0.85rem;font-weight:600">
            👤 ${m.name}
          </div>
        `).join('')}
      </div>

      <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:20px">
        ${group.polls.map(poll => `
          <div class="glass-card" style="padding:18px">
            <h4 style="font-size:1.05rem;color:#7957db;margin-bottom:12px">${poll.title}</h4>
            <div style="display:flex;flex-direction:column;gap:8px">
              ${poll.options.map(opt => `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:rgba(255,255,255,0.7);border-radius:12px;border:1px solid var(--lavender-light)">
                  <span style="font-size:0.9rem;font-weight:600">${opt.label}</span>
                  <div style="display:flex;align-items:center;gap:10px">
                    <span style="font-weight:700;color:#d1568c;font-size:0.85rem">${opt.votes.length} votes</span>
                    <button class="btn btn-secondary btn-sm" style="padding:4px 12px;font-size:0.75rem" onclick="showToast('Vote registered! 🗳️','success')">Vote</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <button class="btn btn-primary btn-block" onclick="createGroupItinerary()">✨ Synthesize Consensus Group Plan</button>
    </div>
  `;
  openModal(html);
}

function createGroupItinerary() {
  closeModal();
  showToast('AI Consensus Itinerary generated from group votes! 👥🎉', 'success');
  executeTripGeneration();
}

/* ==========================================================
   11. OFFLINE TRIP MODE (SIH SOLUTION)
   ========================================================== */
function initNetworkWatcher() {
  const updateStatus = (isOnline) => {
    const isConnected = isOnline && !voyoraState.isSimulatedOffline;
    const pill = document.getElementById('networkPill');
    const text = document.getElementById('networkText');
    if (!pill || !text) return;

    if (isConnected) {
      pill.classList.remove('offline');
      text.textContent = 'ONLINE 🟢';
    } else {
      pill.classList.add('offline');
      text.textContent = 'OFFLINE 🟠';
    }
  };

  window.addEventListener('online', () => updateStatus(true));
  window.addEventListener('offline', () => updateStatus(false));
  updateStatus(navigator.onLine);
}

function toggleOfflineSimulation() {
  voyoraState.isSimulatedOffline = !voyoraState.isSimulatedOffline;
  const isOnline = navigator.onLine && !voyoraState.isSimulatedOffline;
  const pill = document.getElementById('networkPill');
  const text = document.getElementById('networkText');

  if (isOnline) {
    pill?.classList.remove('offline');
    if (text) text.textContent = 'ONLINE 🟢';
    showToast('Network Connected 🌐', 'info');
  } else {
    pill?.classList.add('offline');
    if (text) text.textContent = 'OFFLINE 🟠';
    showToast('Simulated Offline Mode Active: Testing LocalStorage 📱', 'warning');
  }
}

function saveTripOffline() {
  if (!voyoraState.currentTrip) executeTripGeneration();
  const t = voyoraState.currentTrip;
  t.offlineSaved = true;
  voyoraState.offlineTrips.push(t);
  localStorage.setItem('voyora_offline_trips', JSON.stringify(voyoraState.offlineTrips));

  showToast('Trip saved to LocalStorage for complete Offline Mode! 📱🟢', 'success');
}

/* ==========================================================
   12. MULTILINGUAL AI TRAVEL ASSISTANT
   ========================================================== */
function openAiAssistantModal() {
  const html = `
    <div style="max-width:640px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <span class="section-tag" style="margin:0">24/7 Travel Co-Pilot ✦</span>
        <select id="chatLangSelect" onchange="voyoraState.chatLang=this.value" style="background:var(--white);color:var(--text-main);border:1.5px solid var(--lavender-light);padding:5px 12px;border-radius:14px;font-size:0.82rem;font-weight:600">
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="mr">मराठी</option>
        </select>
      </div>
      <h2 style="font-size:1.6rem;margin-bottom:6px">VOYORA Multilingual AI</h2>
      <p class="text-muted" style="margin-bottom:16px">Ask about local sights, weather, budgets, or route shortcuts.</p>

      <div id="aiChatBox" style="height:260px;overflow-y:auto;background:rgba(255,255,255,0.75);border:1.5px solid var(--lavender-light);border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        <div style="align-self:flex-start;background:rgba(201,182,255,0.25);color:var(--text-main);padding:10px 16px;border-radius:14px;font-size:0.9rem;max-width:85%;font-weight:500">
          Namaste! 🙏 I am VOYORA AI. How can I assist with your journey today?
        </div>
      </div>

      <div class="search-input-box" style="display:flex;gap:8px">
        <input type="text" id="aiChatInput" placeholder="Ask anything about travel..." onkeypress="if(event.key==='Enter')sendAiMessage()">
        <button class="btn btn-primary btn-sm" onclick="sendAiMessage()">Send</button>
      </div>
    </div>
  `;
  openModal(html);
}

function sendAiMessage() {
  const input = document.getElementById('aiChatInput');
  const chatBox = document.getElementById('aiChatBox');
  const text = input?.value.trim();
  if (!text || !chatBox) return;

  chatBox.innerHTML += `
    <div style="align-self:flex-end;background:linear-gradient(135deg,#ff9fc5,#ffcba4);color:#302a3a;font-weight:700;padding:10px 16px;border-radius:14px;font-size:0.9rem;max-width:85%">
      ${text}
    </div>
  `;
  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    let reply = "I recommend exploring the old town quarter and visiting local culinary markets in the evening! 🌸";
    if (voyoraState.chatLang === 'hi') reply = "मैं पुराने शहर के सांस्कृतिक बाज़ार और शाम को स्ट्रीट फूड का आनंद लेने की सलाह देता हूँ! 🌸";
    if (voyoraState.chatLang === 'mr') reply = "मी जुन्या ऐतिहासिक भागातील बाजारपेठा आणि संध्याकाळच्या स्थानिक खाद्यपदार्थांचा आस्वाद घेण्याची शिफारस करतो! 🌸";

    chatBox.innerHTML += `
      <div style="align-self:flex-start;background:rgba(201,182,255,0.25);color:var(--text-main);padding:10px 16px;border-radius:14px;font-size:0.9rem;max-width:85%;font-weight:500">
        ${reply}
      </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

/* ==========================================================
   13. 1-CLICK SIH LIVE PRESENTATION DEMO LOADER
   ========================================================== */
function launchSihPresentationDemo() {
  showToast('🏆 Launching SIH 3D Live Presentation Preset...', 'info');
  setTimeout(() => {
    voyoraState.currentTrip = {
      id: 'trip-sih-mumbai',
      destination: 'Mumbai',
      budget: 15000,
      travelers: 2,
      style: 'Balanced',
      days: 3,
      costs: {
        accommodation: 5800,
        food: 3600,
        transit: 2100,
        activities: 2500,
        misc: 1000,
        total: 15000
      },
      planDays: [
        {
          day: 1,
          date: 'Day 1 · Gateway of India & Colaba Heritage Walk',
          items: [
            { time: '09:00 AM', title: 'Gateway of India & Arabian Sea Stroll', cost: 'Free', desc: '1924 basalt historic monument and sea breeze.' },
            { time: '01:30 PM', title: 'Khau Galli Street Food Odyssey', cost: '₹350', desc: 'Pav Bhaji & Vada Pav culinary tasting.' },
            { time: '06:00 PM', title: 'Marine Drive Queen\'s Necklace Sunset', cost: 'Free', desc: 'Iconic 3.6 km crescent golden hour walk.' }
          ]
        },
        {
          day: 2,
          date: 'Day 2 · Elephanta Island & Sacred Banganga Tank',
          items: [
            { time: '09:30 AM', title: 'Elephanta Rock-Cut Caves Ferry', cost: '₹600', desc: 'UNESCO 5th-century island shrines.' },
            { time: '04:00 PM', title: 'Banganga Ancient Sacred Tank', cost: 'Free', desc: '12th-century tranquil hidden reservoir.' }
          ]
        }
      ]
    };
    openItineraryModal();
    showToast('Mumbai 3-Day Preset Loaded with 3D Smart Maps & Replanner! 🌸✨', 'success');
  }, 1000);
}

/* ==========================================================
   MODAL & TOAST UI HELPERS
   ========================================================== */
function openModal(html) {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  if (!overlay || !content) return;

  content.innerHTML = `<button class="modal-close-btn" onclick="closeModal()">✕</button>` + html;
  overlay.classList.add('active');
  Vanilla3DTilt.init();
}

function closeModal() {
  document.getElementById('modalOverlay')?.classList.remove('active');
}

function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-3d';
  toast.innerHTML = `<span>${type === 'success' ? '✓' : '✦'}</span><span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function toggleMobileNav() {
  document.getElementById('mobileNav')?.classList.toggle('active');
}

/* ==========================================================
   INITIALIZATION
   ========================================================== */
let carousel;

window.addEventListener('DOMContentLoaded', () => {
  // Initialize Pastel 3D Globe
  new Globe3DEngine('globeCanvas');

  // Initialize Soft 3D Tilt System
  Vanilla3DTilt.init();

  // Initialize 3D Destination Carousel
  carousel = new Destination3DCarousel();

  // Initialize Interactive World Map
  InteractiveWorldMap.init();

  // Initialize Animated Counters
  initAnimatedCounters();

  // Initialize Scroll Parallax & Navbar Controller
  initScrollParallax();

  // Initialize Offline Network Watcher
  initNetworkWatcher();

  // Modal overlay click outside to close
  document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeModal();
  });

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Service Worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW note:', err));
  }
});
