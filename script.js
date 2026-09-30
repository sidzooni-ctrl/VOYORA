/**
 * ==========================================================
 * VOYORA — Premium Immersive 3D Travel Platform Core Engine
 * Pure Vanilla JavaScript (ES6+) • Zero External Frameworks
 * 3D Globe Engine • 3D Mouse Tilt • 3D Coverflow • Full Ecosystem
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

  // Curated Destinations
  destinations: [
    {
      id: 'paris',
      name: 'Paris',
      country: 'France',
      flag: '🇫🇷',
      desc: 'City of light, haute cuisine, iconic art museums and romantic Seine promenades.',
      price: '₹48,999',
      rating: 4.9,
      category: 'Culture',
      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      tag: 'Romantic'
    },
    {
      id: 'tokyo',
      name: 'Tokyo',
      country: 'Japan',
      flag: '🇯🇵',
      desc: 'Futuristic neon skyline, historic Shinto shrines, Michelin dining, and cherry blossoms.',
      price: '₹56,499',
      rating: 4.9,
      category: 'Adventure',
      img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80',
      tag: 'Futuristic'
    },
    {
      id: 'dubai',
      name: 'Dubai',
      country: 'UAE',
      flag: '🇦🇪',
      desc: 'Architectural marvels, luxury desert safaris, private yachts and world-class shopping.',
      price: '₹39,999',
      rating: 4.8,
      category: 'Luxury',
      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      tag: 'Featured'
    },
    {
      id: 'bali',
      name: 'Bali',
      country: 'Indonesia',
      flag: '🇮🇩',
      desc: 'Emerald rice terraces, sacred sea temples, surf beaches and tranquil wellness retreats.',
      price: '₹32,999',
      rating: 4.8,
      category: 'Beaches',
      img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      tag: 'Tropical'
    },
    {
      id: 'switzerland',
      name: 'Swiss Alps',
      country: 'Switzerland',
      flag: '🇨🇭',
      desc: 'Pristine glacier peaks, panoramic mountain trains, crystalline lakes and alpine chalets.',
      price: '₹68,999',
      rating: 4.9,
      category: 'Mountains',
      img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
      tag: 'Alpine'
    },
    {
      id: 'newyork',
      name: 'New York',
      country: 'USA',
      flag: '🇺🇸',
      desc: 'Broadway glamour, Central Park autumn strolls, skyline rooftops and iconic museums.',
      price: '₹74,999',
      rating: 4.7,
      category: 'City',
      img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      tag: 'Metropolis'
    },
    {
      id: 'maldives',
      name: 'Maldives',
      country: 'Maldives',
      flag: '🇲🇻',
      desc: 'Overwater villas perched above turquoise lagoons, coral reef diving and private sandbanks.',
      price: '₹52,000',
      rating: 4.9,
      category: 'Luxury',
      img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      tag: 'Island Paradise'
    },
    {
      id: 'istanbul',
      name: 'Istanbul',
      country: 'Turkey',
      flag: '🇹🇷',
      desc: 'Where East meets West along the Bosphorus strait, Byzantine basilicas and grand bazaars.',
      price: '₹34,500',
      rating: 4.7,
      category: 'Culture',
      img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
      tag: 'Historic'
    }
  ],

  // Local Grassroots Business Partners
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
    name: 'Mumbai & Goa Weekend Trip',
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
   1. 3D INTERACTIVE GLOBE CANVAS ENGINE
   ========================================================== */
class Globe3DEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = 480;
    this.height = this.canvas.height = 480;
    this.radius = 190;
    this.rotationY = 0;
    this.rotationX = 0.2;
    this.targetRotX = 0.2;
    this.targetRotY = 0;
    this.points = [];
    this.flightAngle = 0;

    this.initPoints();
    this.initEvents();
    this.animate();
  }

  initPoints() {
    // Generate spherical dot matrix representation of Earth
    const numPoints = 650;
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      this.points.push({
        x: this.radius * Math.cos(theta) * Math.sin(phi),
        y: this.radius * Math.sin(theta) * Math.sin(phi),
        z: this.radius * Math.cos(phi),
        baseSize: Math.random() * 1.5 + 1.2
      });
    }

    // Key Hub City Markers on 3D Sphere
    this.cities = [
      { name: 'Paris', lat: 48.85, lon: 2.35, color: '#4dd8ff' },
      { name: 'Tokyo', lat: 35.67, lon: 139.65, color: '#5b8cff' },
      { name: 'Dubai', lat: 25.20, lon: 55.27, color: '#f59e0b' },
      { name: 'New York', lat: 40.71, lon: -74.00, color: '#8b5cf6' },
      { name: 'Mumbai', lat: 19.07, lon: 72.87, color: '#10b981' }
    ];
  }

  initEvents() {
    window.addEventListener('mousemove', (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      this.targetRotY += normX * 0.002;
      this.targetRotX = normY * 0.3;
    });
  }

  project(p, rotX, rotY) {
    // Rotate Y
    let x1 = p.x * Math.cos(rotY) + p.z * Math.sin(rotY);
    let z1 = -p.x * Math.sin(rotY) + p.z * Math.cos(rotY);

    // Rotate X
    let y2 = p.y * Math.cos(rotX) - z1 * Math.sin(rotX);
    let z2 = p.y * Math.sin(rotX) + z1 * Math.cos(rotX);

    // Perspective factor
    const fov = 400;
    const scale = fov / (fov + z2);

    return {
      x: this.width / 2 + x1 * scale,
      y: this.height / 2 + y2 * scale,
      z: z2,
      scale: scale,
      visible: z2 > -50
    };
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Auto rotate
    this.rotationY += 0.006;
    this.rotationX += (this.targetRotX - this.rotationX) * 0.05;

    // Outer Glow Background
    const glowGrad = this.ctx.createRadialGradient(
      this.width / 2, this.height / 2, this.radius * 0.7,
      this.width / 2, this.height / 2, this.radius * 1.15
    );
    glowGrad.addColorStop(0, 'rgba(7, 17, 31, 0.9)');
    glowGrad.addColorStop(0.85, 'rgba(13, 30, 52, 0.95)');
    glowGrad.addColorStop(1, 'rgba(77, 216, 255, 0.3)');

    this.ctx.beginPath();
    this.ctx.arc(this.width / 2, this.height / 2, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = glowGrad;
    this.ctx.fill();

    // Draw Spherical Points
    this.points.forEach(p => {
      const proj = this.project(p, this.rotationX, this.rotationY);
      if (proj.visible) {
        const alpha = Math.max(0.1, (proj.z + this.radius) / (2 * this.radius));
        this.ctx.beginPath();
        this.ctx.arc(proj.x, proj.y, p.baseSize * proj.scale, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(77, 216, 255, ${alpha * 0.75})`;
        this.ctx.fill();
      }
    });

    // Draw City Nodes
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
        this.ctx.beginPath();
        this.ctx.arc(proj.x, proj.y, 4.5 * proj.scale, 0, Math.PI * 2);
        this.ctx.fillStyle = city.color;
        this.ctx.shadowColor = city.color;
        this.ctx.shadowBlur = 12;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      }
    });

    // Orbiting Airplane Animation
    this.flightAngle += 0.018;
    const planeEl = document.getElementById('orbitingPlane');
    if (planeEl) {
      const rx = 260 * Math.cos(this.flightAngle);
      const ry = 90 * Math.sin(this.flightAngle);
      planeEl.style.transform = `translate(${rx}px, ${ry}px) rotate(${this.flightAngle * 57.3 + 90}deg)`;
    }

    requestAnimationFrame(() => this.animate());
  }
}

/* ==========================================================
   2. REUSABLE 3D MOUSE TILT ENGINE
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
        const maxRot = parseFloat(el.dataset.tiltMax || 14);
        const rotX = -yPct * maxRot;
        const rotY = xPct * maxRot;
        const tz = parseFloat(el.dataset.tiltZ || 30);

        el.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(${tz}px)`;
        requestAnimationFrame(updateTransform);
      };

      el.addEventListener('mouseenter', () => {
        isHovering = true;
        bounds = el.getBoundingClientRect();
        el.style.transition = 'transform 0.1s ease-out';
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
   3. 3D COVERFLOW DESTINATION CAROUSEL
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
      // Handle wrapping
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const absOffset = Math.abs(offset);
      const sign = Math.sign(offset);

      if (absOffset === 0) {
        // Center Card
        card.style.transform = `translateX(0) translateZ(80px) rotateY(0deg) scale(1.05)`;
        card.style.zIndex = 30;
        card.style.opacity = 1;
        card.style.filter = 'none';
      } else if (absOffset <= 3) {
        const xOffset = sign * (absOffset * 190 + 60);
        const rotY = -sign * (25 + absOffset * 4);
        const zOffset = -absOffset * 70;
        const scale = Math.max(0.7, 1 - absOffset * 0.12);

        card.style.transform = `translateX(${xOffset}px) translateZ(${zOffset}px) rotateY(${rotY}deg) scale(${scale})`;
        card.style.zIndex = 20 - absOffset;
        card.style.opacity = Math.max(0.35, 1 - absOffset * 0.25);
        card.style.filter = `blur(${absOffset * 1.5}px) brightness(${1 - absOffset * 0.15})`;
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

    // Keyboard Arrow Navigation
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    });
  }
}

/* ==========================================================
   4. INTERACTIVE WORLD ROUTE MAP
   ========================================================== */
class InteractiveWorldMap {
  static init() {
    const nodes = document.querySelectorAll('.map-city-node');
    const popover = document.getElementById('mapPopover');
    if (!popover) return;

    const cityData = {
      mumbai: { name: 'Mumbai', country: 'India 🇮🇳', highlights: 'Gateway of India, Marine Drive, Street Food Walks', price: '₹15,000' },
      dubai: { name: 'Dubai', country: 'UAE 🇦🇪', highlights: 'Burj Khalifa, Desert Safaris, Marina Cruises', price: '₹39,999' },
      paris: { name: 'Paris', country: 'France 🇫🇷', highlights: 'Eiffel Tower, Louvre Museum, Seine River Cruise', price: '₹48,999' },
      tokyo: { name: 'Tokyo', country: 'Japan 🇯🇵', highlights: 'Shibuya Crossing, Mount Fuji, Akihabara', price: '₹56,499' },
      newyork: { name: 'New York', country: 'USA 🇺🇸', highlights: 'Times Square, Central Park, Broadway', price: '₹74,999' },
      singapore: { name: 'Singapore', country: 'Singapore 🇸🇬', highlights: 'Marina Bay Sands, Gardens by the Bay', price: '₹36,000' },
      london: { name: 'London', country: 'UK 🇬🇧', highlights: 'Big Ben, London Eye, Thames Heritage Stroll', price: '₹52,000' }
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
          // Ease-out cubic
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

    // Navbar shrink
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 30);
    }

    // Featured trip parallax
    if (featuredBg) {
      const rect = featuredBg.parentElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (window.innerHeight - rect.top) * 0.08;
        featuredBg.style.transform = `translateY(${offset - 40}px)`;
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
      <div class="section-tag" style="margin-bottom:12px">VOYORA AI Planner</div>
      <h2 style="font-size:1.75rem;margin-bottom:8px">Synthesize Your Custom 3D Itinerary</h2>
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
            <option value="Balanced" selected>Balanced Explorer (Recommended)</option>
            <option value="Budget">Budget Backpacking</option>
            <option value="Luxury">Luxury & Comfort</option>
            <option value="Culinary">Food & Culture Focus</option>
          </select>
        </div>
      </div>

      <button class="btn btn-ai btn-block" onclick="executeTripGeneration()">✨ Generate 3D AI Itinerary</button>
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
  showToast(`VOYORA AI is crafting your ${dest} journey... 🚀`, 'info');

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
          date: 'Day 1 · Arrival & Iconic Landmarks',
          items: [
            { time: '09:30 AM', title: `Iconic Highlights of ${dest}`, cost: 'Free Entry', desc: 'Panoramic orientation tour and landmark photography.' },
            { time: '01:30 PM', title: 'Authentic Local Tasting Tour', cost: '₹850', desc: 'Curated tasting at verified grassroots restaurants.' },
            { time: '06:00 PM', title: 'Golden Hour Sunset Promenade', cost: 'Free', desc: 'Sunset ocean walk and architectural views.' }
          ]
        },
        {
          day: 2,
          date: 'Day 2 · Heritage, Culture & Hidden Gems',
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
      <div class="flex-between" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <span class="section-tag" style="margin:0">AI Generated Plan</span>
        <button class="btn btn-secondary btn-sm" onclick="saveTripOffline()">📥 Save Offline</button>
      </div>
      <h2 style="font-size:2rem;margin-bottom:4px">${t.destination} · ${t.days} Days (${t.style})</h2>
      <p class="text-muted" style="margin-bottom:24px">Total Budget: ₹${t.budget.toLocaleString('en-IN')} · ${t.travelers} Travelers</p>

      <div style="display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap">
        <button class="btn btn-ai btn-sm" onclick="openChangeMyPlanModal()">✨ Change My Plan</button>
        <button class="btn btn-secondary btn-sm" onclick="openMakeTripBetterModal()">✨ Make Trip Better</button>
        <button class="btn btn-secondary btn-sm" onclick="openLocalHubModal()">🏪 Local Hub</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:20px;margin-bottom:24px">
        ${t.planDays.map(d => `
          <div class="glass-card" style="padding:20px">
            <h3 style="font-size:1.15rem;color:var(--cyan);margin-bottom:12px">${d.date}</h3>
            <div style="display:flex;flex-direction:column;gap:12px">
              ${d.items.map(it => `
                <div style="display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.06)">
                  <div>
                    <div style="font-size:0.8rem;color:var(--cyan);font-weight:700">${it.time}</div>
                    <div style="font-weight:700;color:#fff">${it.title}</div>
                    <div style="font-size:0.85rem;color:var(--text-muted)">${it.desc}</div>
                  </div>
                  <div style="font-weight:700;color:var(--gold);font-size:0.88rem">${it.cost}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="flex-between" style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-size:1.2rem;font-weight:800;color:var(--cyan)">Total: ₹${t.costs.total.toLocaleString('en-IN')}</div>
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
      <span class="section-tag" style="margin-bottom:10px">VOYORA AI Replanner</span>
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

      <button class="btn btn-ai btn-block" onclick="applyReplan(document.getElementById('customReplanText').value)">Modify Itinerary</button>
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

  // Modify item
  t.planDays[0].items[0] = {
    time: '09:30 AM',
    title: 'Historic Artisan Bazaar & Spice Market',
    cost: '₹150',
    desc: 'Replaced traditional museum with authentic local artisan craft stalls.'
  };

  const diffBox = document.getElementById('replanDiffBox');
  if (diffBox) {
    diffBox.innerHTML = `
      <div class="glass-card" style="padding:16px;border-color:var(--emerald)">
        <div style="font-size:0.8rem;color:var(--emerald);font-weight:700;margin-bottom:6px">✓ AI UPDATED PLAN APPLIED</div>
        <div style="font-size:0.88rem;color:#fff;margin-bottom:8px"><strong>VOYORA AI:</strong> "Done! I've removed the conventional museum and replaced it with an authentic local cultural market. Travel time reduced by 20 mins."</div>
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
      <span class="section-tag" style="margin-bottom:10px">Multi-Tier AI Optimizer</span>
      <h2 style="font-size:1.8rem;margin-bottom:8px">✨ Make My Trip Better</h2>
      <p class="text-muted" style="margin-bottom:24px">3 parallel strategies tailored for your journey:</p>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
        <div class="glass-card" style="padding:20px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="font-size:0.8rem;color:var(--cyan);font-weight:700">💰 BUDGET TIER</div>
            <h3 style="font-size:1.2rem;margin:6px 0">Smart Saver</h3>
            <p class="text-muted" style="font-size:0.8rem">Homestays, public metro passes, free iconic landmarks.</p>
            <div style="font-size:1.4rem;font-weight:800;color:#fff;margin:12px 0">₹${Math.round(base * 0.65).toLocaleString('en-IN')}</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="switchTier('Budget', ${Math.round(base * 0.65)})">Use Budget</button>
        </div>

        <div class="glass-card" style="padding:20px;border-color:var(--cyan);display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="font-size:0.8rem;color:var(--cyan);font-weight:700">⚖️ BALANCED</div>
            <h3 style="font-size:1.2rem;margin:6px 0">Optimal Explorer</h3>
            <p class="text-muted" style="font-size:0.8rem">Boutique 3-star hotel, food walk, curated hidden gems.</p>
            <div style="font-size:1.4rem;font-weight:800;color:var(--cyan);margin:12px 0">₹${Math.round(base * 0.95).toLocaleString('en-IN')}</div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="switchTier('Balanced', ${Math.round(base * 0.95)})">Use Balanced</button>
        </div>

        <div class="glass-card" style="padding:20px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="font-size:0.8rem;color:var(--gold);font-weight:700">✨ PREMIUM TIER</div>
            <h3 style="font-size:1.2rem;margin:6px 0">Luxury Comfort</h3>
            <p class="text-muted" style="font-size:0.8rem">Heritage 5-star hotel, private AC cab, fine dining.</p>
            <div style="font-size:1.4rem;font-weight:800;color:var(--gold);margin:12px 0">₹${Math.round(base * 1.6).toLocaleString('en-IN')}</div>
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
      <span class="section-tag" style="margin-bottom:10px">Grassroots Tourism Hub</span>
      <h2 style="font-size:1.8rem;margin-bottom:8px">🏪 VOYORA Local Business Network</h2>
      <p class="text-muted" style="margin-bottom:20px">Empowering certified local guides, authentic homestays, and culinary artisans.</p>

      <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:20px">
        ${voyoraState.businesses.map(b => `
          <div class="glass-card" style="padding:16px;display:flex;gap:16px;align-items:center">
            <img src="${b.img}" style="width:90px;height:75px;object-fit:cover;border-radius:12px" alt="${b.name}">
            <div style="flex:1">
              <div style="font-size:0.75rem;color:var(--cyan);font-weight:700">${b.category} · ${b.city}</div>
              <div style="font-weight:700;color:#fff">${b.name}</div>
              <div style="font-size:0.8rem;color:var(--text-muted)">${b.desc}</div>
              <div style="font-size:0.8rem;color:var(--gold);font-weight:600">${b.offer}</div>
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
      <span class="section-tag" style="margin-bottom:10px">Plan Together</span>
      <h2 style="font-size:1.8rem;margin-bottom:4px">👥 Group Travel Workspace</h2>
      <p class="text-muted" style="margin-bottom:16px">Invite Code: <strong>${group.code}</strong> (Share with friends)</p>

      <div style="display:flex;gap:10px;margin-bottom:20px">
        ${group.members.map(m => `
          <div style="padding:6px 14px;border-radius:20px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem">
            👤 ${m.name}
          </div>
        `).join('')}
      </div>

      <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:20px">
        ${group.polls.map(poll => `
          <div class="glass-card" style="padding:16px">
            <h4 style="font-size:1.05rem;color:var(--cyan);margin-bottom:10px">${poll.title}</h4>
            <div style="display:flex;flex-direction:column;gap:8px">
              ${poll.options.map(opt => `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:rgba(255,255,255,0.04);border-radius:8px">
                  <span style="font-size:0.9rem">${opt.label}</span>
                  <div style="display:flex;align-items:center;gap:10px">
                    <span style="font-weight:700;color:var(--cyan);font-size:0.85rem">${opt.votes.length} votes</span>
                    <button class="btn btn-secondary btn-sm" style="padding:3px 10px;font-size:0.75rem" onclick="showToast('Vote registered! 🗳️','success')">Vote</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <button class="btn btn-ai btn-block" onclick="createGroupItinerary()">✨ Synthesize Consensus Group Plan</button>
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
      <div class="flex-between" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <span class="section-tag" style="margin:0">24/7 Travel Co-Pilot</span>
        <select id="chatLangSelect" onchange="voyoraState.chatLang=this.value" style="background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.2);padding:4px 10px;border-radius:12px;font-size:0.8rem">
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="mr">मराठी</option>
        </select>
      </div>
      <h2 style="font-size:1.6rem;margin-bottom:8px">VOYORA Multilingual AI</h2>
      <p class="text-muted" style="margin-bottom:16px">Ask about local sights, weather, budgets, or route shortcuts.</p>

      <div id="aiChatBox" style="height:260px;overflow-y:auto;background:rgba(0,0,0,0.3);border-radius:16px;padding:16px;display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        <div style="align-self:flex-start;background:rgba(255,255,255,0.08);padding:10px 16px;border-radius:14px;font-size:0.9rem;max-width:85%">
          Namaste! 🙏 I am VOYORA AI. How can I assist with your journey today?
        </div>
      </div>

      <div class="search-input-box" style="display:flex;gap:8px">
        <input type="text" id="aiChatInput" placeholder="Ask anything about travel..." onkeypress="if(event.key==='Enter')sendAiMessage()">
        <button class="btn btn-ai btn-sm" onclick="sendAiMessage()">Send</button>
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
    <div style="align-self:flex-end;background:linear-gradient(135deg,var(--cyan),var(--blue));color:#000;font-weight:600;padding:10px 16px;border-radius:14px;font-size:0.9rem;max-width:85%">
      ${text}
    </div>
  `;
  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    let reply = "I recommend exploring the old town quarter and visiting local culinary markets in the evening!";
    if (voyoraState.chatLang === 'hi') reply = "मैं पुराने शहर के सांस्कृतिक बाज़ार और शाम को स्ट्रीट फूड का आनंद लेने की सलाह देता हूँ!";
    if (voyoraState.chatLang === 'mr') reply = "मी जुन्या ऐतिहासिक भागातील बाजारपेठा आणि संध्याकाळच्या स्थानिक खाद्यपदार्थांचा आस्वाद घेण्याची शिफारस करतो!";

    chatBox.innerHTML += `
      <div style="align-self:flex-start;background:rgba(255,255,255,0.08);padding:10px 16px;border-radius:14px;font-size:0.9rem;max-width:85%">
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
    showToast('Mumbai 3-Day Preset Loaded with 3D Smart Maps & Replanner! ✨', 'success');
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
  // Initialize 3D Globe
  new Globe3DEngine('globeCanvas');

  // Initialize 3D Tilt System
  Vanilla3DTilt.init();

  // Initialize 3D Destination Carousel
  carousel = new Destination3DCarousel();

  // Initialize Interactive World Map
  InteractiveWorldMap.init();

  // Initialize Animated Counters
  initAnimatedCounters();

  // Initialize Scroll Parallax & Navbar Shrink
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
