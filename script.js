/* ==========================================================
   VOYORA — Core Interactive & AI System
   Brand: Fresh Lilac (#A78BFA, #7C5CFC) + Butter Yellow (#FFD966)
   Pure Vanilla JavaScript (ES6+) • Zero Frameworks
   ========================================================== */

// Centralized Reactive State Store
const voyoraState = {
  activeTab: 'home',
  currentTrip: null,
  previousTripSnapshot: null,
  isSimulatedOffline: false,
  offlineTrips: JSON.parse(localStorage.getItem('voyora_offline_trips') || '[]'),
  chatLang: 'en',
  activeCarouselIndex: 0,

  // Curated Global Destinations for 3D Coverflow
  destinations: [
    {
      id: 'dest-paris',
      name: 'Paris',
      flag: '🇫🇷',
      tag: 'Cultural Heritage',
      desc: 'Historic boulevards, Louvre masterworks, and romantic Seine river cruises.',
      price: '₹48,999',
      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Montmartre']
    },
    {
      id: 'dest-tokyo',
      name: 'Tokyo',
      flag: '🇯🇵',
      tag: 'Urban Discovery',
      desc: 'Neon cityscape, historic shrines, Michelin street dining, and peaceful gardens.',
      price: '₹56,499',
      img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80',
      highlights: ['Shinjuku', 'Senso-ji Temple', 'Shibuya Crossing']
    },
    {
      id: 'dest-dubai',
      name: 'Dubai',
      flag: '🇦🇪',
      tag: 'Luxury Skyline',
      desc: 'Iconic architecture, sunset desert dunes, private yachts, and rooftop dining.',
      price: '₹39,999',
      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Marina']
    },
    {
      id: 'dest-bali',
      name: 'Bali',
      flag: '🇮🇩',
      tag: 'Tropical Escape',
      desc: 'Emerald rice terraces, cliffside ocean temples, and sunset beaches.',
      price: '₹32,999',
      img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      highlights: ['Ubud Terraces', 'Uluwatu Temple', 'Seminyak Beach']
    },
    {
      id: 'dest-swiss',
      name: 'Swiss Alps',
      flag: '🇨🇭',
      tag: 'Alpine Mountain',
      desc: 'Snow-capped peaks, panoramic alpine trains, and cozy mountain chalets.',
      price: '₹68,999',
      img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
      highlights: ['Zermatt', 'Jungfraujoch', 'Lake Geneva']
    },
    {
      id: 'dest-nyc',
      name: 'New York',
      flag: '🇺🇸',
      tag: 'Iconic Metropolis',
      desc: 'Broadway theaters, Central Park morning walks, and skyline observation decks.',
      price: '₹74,999',
      img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      highlights: ['Times Square', 'Central Park', 'Brooklyn Bridge']
    },
    {
      id: 'dest-maldives',
      name: 'Maldives',
      flag: '🇲🇻',
      tag: 'Island Serenity',
      desc: 'Overwater villas, crystalline lagoons, and vibrant coral reef diving.',
      price: '₹54,999',
      img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      highlights: ['Male Atoll', 'Overwater Villas', 'Reef Diving']
    },
    {
      id: 'dest-istanbul',
      name: 'Istanbul',
      flag: '🇹🇷',
      tag: 'Historic Crossroads',
      desc: 'Byzantine domes, Grand Bazaar spice stalls, and Bosphorus sunset ferries.',
      price: '₹41,999',
      img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
      highlights: ['Hagia Sophia', 'Bosphorus Cruise', 'Grand Bazaar']
    }
  ],

  // Local Grassroots Business Network
  businesses: [
    {
      id: 'biz-1',
      name: 'Heritage Guide Collective',
      category: 'Walking Tours',
      city: 'Mumbai',
      rating: 4.9,
      price: 650,
      desc: 'Verified architectural walking tours through historic districts with expert storytellers.',
      offer: '10% discount for VOYORA travelers',
      img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80'
    },
    {
      id: 'biz-2',
      name: 'Khau Galli Culinary Tour',
      category: 'Food Tour',
      city: 'Mumbai',
      rating: 4.8,
      price: 800,
      desc: 'Guided tasting of authentic regional street food and regional delicacies.',
      offer: 'Complimentary tasting dessert included',
      img: 'https://images.unsplash.com/photo-1601050690597-dfb528c6958f?w=600&q=80'
    },
    {
      id: 'biz-3',
      name: 'Seaside Heritage Homestay',
      category: 'Homestay',
      city: 'Goa',
      rating: 4.9,
      price: 2800,
      desc: 'Restored colonial villa near serene beaches with authentic local breakfast.',
      offer: '15% discount on stays over 2 nights',
      img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'
    }
  ],

  // Group Trip Collaboration State
  groupTrip: {
    name: 'Mumbai & Coastal Getaway',
    code: 'VOYORA-MUM26',
    members: [
      { id: 'user-1', name: 'Aisha Sharma', role: 'Organizer' },
      { id: 'user-2', name: 'Rohan Mehta', role: 'Traveler' },
      { id: 'user-3', name: 'Priya Patel', role: 'Traveler' },
      { id: 'user-4', name: 'Kabir Khan', role: 'Traveler' }
    ],
    polls: [
      {
        id: 'poll-1',
        title: 'Saturday Morning Activity',
        options: [
          { id: 'o-1', label: 'Marine Drive & Heritage Architecture Walk', votes: ['user-1', 'user-2', 'user-3'] },
          { id: 'o-2', label: 'Elephanta Rock-Cut Caves Ferry Tour', votes: ['user-4'] },
          { id: 'o-3', label: 'Artisan Pottery & Craft Workshop', votes: ['user-2'] }
        ]
      },
      {
        id: 'poll-2',
        title: 'Saturday Evening Dinner',
        options: [
          { id: 'o-4', label: 'Khau Galli Street Food Walk', votes: ['user-1', 'user-3', 'user-4'] },
          { id: 'o-5', label: 'Coastal Seafood Terrace', votes: ['user-2'] }
        ]
      }
    ]
  }
};

/* ==========================================================
   1. 3D GLOBE CANVAS ENGINE
   ========================================================== */
class Globe3DEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = 440;
    this.height = this.canvas.height = 440;
    this.radius = 175;
    
    this.baseRotationY = 0;
    this.rotationX = 0.16;
    this.targetRotX = 0.16;
    this.targetRotY = 0;
    this.smoothMouseX = 0;
    this.smoothMouseY = 0;
    
    this.points = [];
    this.flightAngle = 0;
    this.cloudPoints = [];

    this.initPoints();
    this.initEvents();
    this.animate();
  }

  initPoints() {
    // Generate spherical dot matrix
    const numPoints = 680;
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      this.points.push({
        x: this.radius * Math.cos(theta) * Math.sin(phi),
        y: this.radius * Math.sin(theta) * Math.sin(phi),
        z: this.radius * Math.cos(phi),
        baseSize: Math.random() * 1.5 + 1.2,
        isLand: Math.sin(theta * 3) * Math.cos(phi * 2) > -0.2
      });
    }

    // Soft clouds on the globe sphere
    for (let c = 0; c < 10; c++) {
      const phi = Math.random() * Math.PI;
      const theta = Math.random() * Math.PI * 2;
      this.cloudPoints.push({
        x: (this.radius + 6) * Math.cos(theta) * Math.sin(phi),
        y: (this.radius + 6) * Math.sin(theta) * Math.sin(phi),
        z: (this.radius + 6) * Math.cos(phi),
        radius: Math.random() * 14 + 10
      });
    }

    // Destination Hub City Markers (Butter Yellow with Glow)
    this.cities = [
      { name: 'Paris', lat: 48.85, lon: 2.35, color: '#ffd966' },
      { name: 'Tokyo', lat: 35.67, lon: 139.65, color: '#ffd966' },
      { name: 'Dubai', lat: 25.20, lon: 55.27, color: '#ffd966' },
      { name: 'New York', lat: 40.71, lon: -74.00, color: '#ffd966' },
      { name: 'Mumbai', lat: 19.07, lon: 72.87, color: '#ffd966' }
    ];
  }

  initEvents() {
    window.addEventListener('mousemove', (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      // Fixed: Bounded rotation instead of accumulation
      this.targetRotY = normX * 0.28;
      this.targetRotX = normY * 0.22;
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

    // Continuous smooth auto-rotation
    this.baseRotationY += 0.004;

    // Smooth spring interpolation for mouse interaction
    this.smoothMouseX += (this.targetRotY - this.smoothMouseX) * 0.06;
    this.smoothMouseY += (this.targetRotX - this.smoothMouseY) * 0.06;

    const currentRotY = this.baseRotationY + this.smoothMouseX;
    const currentRotX = this.rotationX + this.smoothMouseY;

    // Soft Sky Blue Ocean Gradient
    const oceanGrad = this.ctx.createRadialGradient(
      this.width / 2 - 30, this.height / 2 - 30, this.radius * 0.2,
      this.width / 2, this.height / 2, this.radius
    );
    oceanGrad.addColorStop(0, '#eaf6fd');
    oceanGrad.addColorStop(0.5, '#c5eafb');
    oceanGrad.addColorStop(1, '#8ed6f8');

    this.ctx.beginPath();
    this.ctx.arc(this.width / 2, this.height / 2, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = oceanGrad;
    this.ctx.fill();

    // Fresh Lilac Atmospheric Border
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = 'rgba(167, 139, 250, 0.45)';
    this.ctx.stroke();

    // Draw Spherical Dots (Land = Fresh Mint #72D6B0, Water = Soft White)
    this.points.forEach(p => {
      const proj = this.project(p, currentRotX, currentRotY);
      if (proj.visible) {
        const alpha = Math.max(0.15, (proj.z + this.radius) / (2 * this.radius));
        this.ctx.beginPath();
        this.ctx.arc(proj.x, proj.y, p.baseSize * proj.scale, 0, Math.PI * 2);

        if (p.isLand) {
          this.ctx.fillStyle = `rgba(114, 214, 176, ${alpha * 0.95})`; // Fresh Mint
        } else {
          this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.65})`; // Soft White
        }
        this.ctx.fill();
      }
    });

    // Draw Soft Cloud Patches
    this.cloudPoints.forEach(c => {
      const proj = this.project(c, currentRotX, currentRotY);
      if (proj.visible && proj.z > 20) {
        const cloudGrad = this.ctx.createRadialGradient(proj.x, proj.y, 0, proj.x, proj.y, c.radius * proj.scale);
        cloudGrad.addColorStop(0, 'rgba(255, 255, 255, 0.65)');
        cloudGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.ctx.beginPath();
        this.ctx.arc(proj.x, proj.y, c.radius * proj.scale, 0, Math.PI * 2);
        this.ctx.fillStyle = cloudGrad;
        this.ctx.fill();
      }
    });

    // Draw Butter-Yellow Glowing City Nodes
    this.cities.forEach(city => {
      const phi = (90 - city.lat) * (Math.PI / 180);
      const theta = (city.lon + 180) * (Math.PI / 180);
      const p = {
        x: -(this.radius * Math.sin(phi) * Math.cos(theta)),
        y: -(this.radius * Math.cos(phi)),
        z: this.radius * Math.sin(phi) * Math.sin(theta)
      };
      const proj = this.project(p, currentRotX, currentRotY);
      if (proj.visible && proj.z > 0) {
        // Outer butter-yellow glow
        this.ctx.beginPath();
        this.ctx.arc(proj.x, proj.y, 6.5 * proj.scale, 0, Math.PI * 2);
        this.ctx.fillStyle = city.color;
        this.ctx.shadowColor = 'rgba(255, 217, 102, 0.85)';
        this.ctx.shadowBlur = 10;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;

        // Inner white core
        this.ctx.beginPath();
        this.ctx.arc(proj.x, proj.y, 2.5 * proj.scale, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
      }
    });

    // Orbiting Airplane
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
   2. 3D MOUSE TILT ENGINE (EFFICIENT & PERFORMANT)
   ========================================================== */
class Vanilla3DTilt {
  static init() {
    const tiltElements = document.querySelectorAll('[data-tilt-3d]');
    tiltElements.forEach(el => {
      let bounds = null;
      let isTicking = false;
      let mouseX = 0, mouseY = 0;

      const updateTransform = () => {
        if (!bounds) return;
        const xPct = (mouseX - bounds.left) / bounds.width - 0.5;
        const yPct = (mouseY - bounds.top) / bounds.height - 0.5;
        const maxRot = parseFloat(el.dataset.tiltMax || 10);
        const rotX = -yPct * maxRot;
        const rotY = xPct * maxRot;
        const tz = parseFloat(el.dataset.tiltZ || 20);

        el.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(${tz}px)`;
        isTicking = false;
      };

      el.addEventListener('mouseenter', () => {
        bounds = el.getBoundingClientRect();
        el.style.transition = 'transform 0.12s ease-out';
      });

      el.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!isTicking) {
          isTicking = true;
          requestAnimationFrame(updateTransform);
        }
      });

      el.addEventListener('mouseleave', () => {
        bounds = null;
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
    const total = this.destinations.length;

    cards.forEach((card, index) => {
      let offset = index - this.currentIndex;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const absOffset = Math.abs(offset);

      if (offset === 0) {
        // Active Center Card
        card.style.transform = 'translateX(0) translateZ(80px) rotateY(0deg) scale(1.05)';
        card.style.zIndex = '30';
        card.style.opacity = '1';
        card.style.filter = 'none';
      } else if (offset === 1) {
        // Right flank 1
        card.style.transform = 'translateX(240px) translateZ(-40px) rotateY(-22deg) scale(0.9)';
        card.style.zIndex = '20';
        card.style.opacity = '0.9';
        card.style.filter = 'brightness(0.96)';
      } else if (offset === -1) {
        // Left flank 1
        card.style.transform = 'translateX(-240px) translateZ(-40px) rotateY(22deg) scale(0.9)';
        card.style.zIndex = '20';
        card.style.opacity = '0.9';
        card.style.filter = 'brightness(0.96)';
      } else if (offset === 2) {
        // Right flank 2
        card.style.transform = 'translateX(430px) translateZ(-140px) rotateY(-36deg) scale(0.78)';
        card.style.zIndex = '10';
        card.style.opacity = '0.65';
        card.style.filter = 'brightness(0.9)';
      } else if (offset === -2) {
        // Left flank 2
        card.style.transform = 'translateX(-430px) translateZ(-140px) rotateY(36deg) scale(0.78)';
        card.style.zIndex = '10';
        card.style.opacity = '0.65';
        card.style.filter = 'brightness(0.9)';
      } else {
        // Hidden distant cards
        card.style.transform = `translateX(${offset * 260}px) translateZ(-280px) rotateY(${offset > 0 ? -45 : 45}deg) scale(0.6)`;
        card.style.zIndex = '1';
        card.style.opacity = '0';
        card.style.filter = 'brightness(0.8)';
      }
    });
  }

  setCenter(index) {
    this.currentIndex = index;
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
   4. INTERACTIVE WORLD ROUTE MAP
   ========================================================== */
class InteractiveWorldMap {
  static init() {
    const nodes = document.querySelectorAll('.map-city-node');
    const popover = document.getElementById('mapPopover');
    if (!popover) return;

    const cityData = {
      mumbai: { name: 'Mumbai', country: 'India 🇮🇳', highlights: 'Gateway of India, Marine Drive, Khau Galli Street Food', price: '₹15,000' },
      dubai: { name: 'Dubai', country: 'UAE 🇦🇪', highlights: 'Burj Khalifa, Desert Safaris, Marina Yacht Cruises', price: '₹39,999' },
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

        const titleEl = document.getElementById('mapPopoverTitle');
        const descEl = document.getElementById('mapPopoverDesc');
        const priceEl = document.getElementById('mapPopoverPrice');

        if (titleEl) titleEl.textContent = `${info.name}, ${info.country}`;
        if (descEl) descEl.textContent = info.highlights;
        if (priceEl) priceEl.textContent = `Starting from ${info.price}`;
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
      const parent = featuredBg.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = (window.innerHeight - rect.top) * 0.06;
          featuredBg.style.transform = `translateY(${offset - 30}px)`;
        }
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
      <h2 style="font-size:1.75rem;margin-bottom:8px">Create Your Personalized Itinerary</h2>
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
            <option value="Culinary">Food & Culture Discovery</option>
          </select>
        </div>
      </div>

      <button class="btn btn-primary btn-block" onclick="executeTripGeneration()">Generate Itinerary</button>
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
  showToast(`VOYORA AI is crafting your ${dest} trip...`, 'info');

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
          date: 'Day 1 · Arrival & Highlights',
          items: [
            { time: '09:30 AM', title: `Iconic Landmarks of ${dest}`, cost: 'Free Entry', desc: 'Orientation stroll and historic photography.' },
            { time: '01:30 PM', title: 'Authentic Local Tasting Tour', cost: '₹850', desc: 'Curated tasting at verified grassroots restaurants.' },
            { time: '06:00 PM', title: 'Sunset Promenade Walk', cost: 'Free', desc: 'Sunset ocean breeze and skyline views.' }
          ]
        },
        {
          day: 2,
          date: 'Day 2 · Heritage & Local Discoveries',
          items: [
            { time: '10:00 AM', title: 'Historic Old Quarter & Artisan Guild', cost: '₹400', desc: 'Guided walk through traditional craft bazaars.' },
            { time: '03:30 PM', title: 'Scenic Viewpoint & Tea Experience', cost: '₹500', desc: 'Lesser-known serene spot away from tourist crowds.' },
            { time: '08:00 PM', title: 'Rooftop Panoramic Dining', cost: '₹1,200', desc: 'Evening dinner overlooking the illuminated city.' }
          ]
        }
      ]
    };

    openItineraryModal();
  }, 1000);
}

function openItineraryModal() {
  const t = voyoraState.currentTrip;
  if (!t) return;

  const html = `
    <div class="preserve-3d" style="max-width:740px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <span class="section-tag" style="margin:0">AI Generated Plan</span>
        <button class="btn btn-secondary btn-sm" onclick="saveTripOffline()">Save Offline</button>
      </div>
      <h2 style="font-size:2rem;margin-bottom:4px">${t.destination} · ${t.days} Days (${t.style})</h2>
      <p class="text-muted" style="margin-bottom:24px">Total Budget: ₹${t.budget.toLocaleString('en-IN')} · ${t.travelers} Travelers</p>

      <div style="display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap">
        <button class="btn btn-primary btn-sm" onclick="openChangeMyPlanModal()">Change My Plan</button>
        <button class="btn btn-secondary btn-sm" onclick="openMakeTripBetterModal()">Optimize Tiers</button>
        <button class="btn btn-secondary btn-sm" onclick="openLocalHubModal()">Local Hub</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:18px;margin-bottom:24px">
        ${t.planDays.map(d => `
          <div class="glass-card" style="padding:22px">
            <h3 style="font-size:1.15rem;color:var(--primary-dark);margin-bottom:14px">${d.date}</h3>
            <div style="display:flex;flex-direction:column;gap:12px">
              ${d.items.map(it => `
                <div style="display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:10px;border-bottom:1px solid var(--primary-light)">
                  <div>
                    <div style="font-size:0.8rem;color:var(--primary-dark);font-weight:700">${it.time}</div>
                    <div style="font-weight:700;color:var(--text-heading)">${it.title}</div>
                    <div style="font-size:0.85rem;color:var(--text-muted)">${it.desc}</div>
                  </div>
                  <div style="font-weight:700;color:var(--primary-dark);font-size:0.88rem">${it.cost}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div style="font-size:1.2rem;font-weight:800;color:var(--text-heading)">Total: ₹${t.costs.total.toLocaleString('en-IN')}</div>
        <button class="btn btn-primary" onclick="showToast('Itinerary saved to My Trips!','success');closeModal()">Confirm & Save Trip</button>
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
      <h2 style="font-size:1.6rem;margin-bottom:8px">What would you like to modify?</h2>
      <p class="text-muted" style="margin-bottom:20px">Select an optimization rule or enter natural language instructions.</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px">
        <button class="btn btn-secondary btn-sm" onclick="applyReplan('Make it cheaper (under budget)')">Make it cheaper</button>
        <button class="btn btn-secondary btn-sm" onclick="applyReplan('Remove museum / relax pace')">Remove museum</button>
        <button class="btn btn-secondary btn-sm" onclick="applyReplan('Add more food walks')">Add local food tour</button>
        <button class="btn btn-secondary btn-sm" onclick="applyReplan('Add adventure activity')">Add adventure activity</button>
      </div>

      <div class="search-input-group" style="margin-bottom:20px">
        <label>Custom Instruction</label>
        <div class="search-input-box">
          <input type="text" id="customReplanText" placeholder="e.g. 'Remove museums, add local food walks and sunset viewpoints.'">
        </div>
      </div>

      <button class="btn btn-primary btn-block" onclick="applyReplan(document.getElementById('customReplanText')?.value)">Modify Itinerary</button>
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
      <div class="glass-card" style="padding:18px;border-color:var(--fresh-mint);background:var(--bg-surface-warm)">
        <div style="font-size:0.8rem;color:#12724e;font-weight:700;margin-bottom:6px">✓ AI UPDATED PLAN APPLIED</div>
        <div style="font-size:0.88rem;color:var(--text-heading);margin-bottom:10px"><strong>VOYORA AI:</strong> "Done! Replaced standard museum with an authentic artisan market. Travel time reduced by 20 mins."</div>
        <div style="display:flex;gap:10px">
          <button class="btn btn-secondary btn-sm" onclick="undoReplan()">Undo Changes</button>
          <button class="btn btn-primary btn-sm" onclick="openItineraryModal()">View Updated Plan</button>
        </div>
      </div>
    `;
  }
}

function undoReplan() {
  if (voyoraState.previousTripSnapshot) {
    voyoraState.currentTrip = JSON.parse(JSON.stringify(voyoraState.previousTripSnapshot));
    showToast('Plan reverted to previous snapshot', 'info');
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
      <h2 style="font-size:1.8rem;margin-bottom:8px">Optimize Your Trip Tiers</h2>
      <p class="text-muted" style="margin-bottom:24px">Compare 3 parallel strategies tailored for your destination:</p>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
        <div class="glass-card" style="padding:22px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="font-size:0.8rem;color:var(--sky-blue);font-weight:700">BUDGET TIER</div>
            <h3 style="font-size:1.2rem;margin:6px 0">Smart Saver</h3>
            <p class="text-muted" style="font-size:0.8rem">Homestays, public metro passes, free iconic landmarks.</p>
            <div style="font-size:1.4rem;font-weight:800;color:var(--text-heading);margin:12px 0">₹${Math.round(base * 0.65).toLocaleString('en-IN')}</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="switchTier('Budget', ${Math.round(base * 0.65)})">Use Budget</button>
        </div>

        <div class="glass-card" style="padding:22px;border-color:var(--primary-brand);display:flex;flex-direction:column;justify-content:space-between;background:var(--bg-surface-lilac)">
          <div>
            <div style="font-size:0.8rem;color:var(--primary-dark);font-weight:700">BALANCED TIER</div>
            <h3 style="font-size:1.2rem;margin:6px 0">Optimal Explorer</h3>
            <p class="text-muted" style="font-size:0.8rem">Boutique hotel, curated food walks, hidden local spots.</p>
            <div style="font-size:1.4rem;font-weight:800;color:var(--primary-dark);margin:12px 0">₹${Math.round(base * 0.95).toLocaleString('en-IN')}</div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="switchTier('Balanced', ${Math.round(base * 0.95)})">Use Balanced</button>
        </div>

        <div class="glass-card" style="padding:22px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="font-size:0.8rem;color:var(--primary-dark);font-weight:700">PREMIUM TIER</div>
            <h3 style="font-size:1.2rem;margin:6px 0">Luxury Comfort</h3>
            <p class="text-muted" style="font-size:0.8rem">Heritage 5-star hotel, private AC cab, rooftop dining.</p>
            <div style="font-size:1.4rem;font-weight:800;color:var(--text-heading);margin:12px 0">₹${Math.round(base * 1.6).toLocaleString('en-IN')}</div>
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
    showToast(`Switched to ${tierName} Plan (₹${cost.toLocaleString('en-IN')})`, 'success');
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
      <h2 style="font-size:1.8rem;margin-bottom:8px">VOYORA Local Business Network</h2>
      <p class="text-muted" style="margin-bottom:20px">Empowering certified local guides, authentic homestays, and culinary artisans.</p>

      <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:20px">
        ${voyoraState.businesses.map(b => `
          <div class="glass-card" style="padding:16px;display:flex;gap:16px;align-items:center">
            <img src="${b.img}" style="width:90px;height:75px;object-fit:cover;border-radius:14px" alt="${b.name}">
            <div style="flex:1">
              <div style="font-size:0.75rem;color:var(--primary-dark);font-weight:700">${b.category} · ${b.city}</div>
              <div style="font-weight:700;color:var(--text-heading)">${b.name}</div>
              <div style="font-size:0.8rem;color:var(--text-muted)">${b.desc}</div>
              <div style="font-size:0.8rem;color:var(--primary-dark);font-weight:600">${b.offer}</div>
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
  showToast(`"${bizName}" added to active itinerary!`, 'success');
  closeModal();
}

function openGroupPlannerModal() {
  const group = voyoraState.groupTrip;
  const html = `
    <div style="max-width:680px">
      <span class="section-tag" style="margin-bottom:10px">Group Travel Planner</span>
      <h2 style="font-size:1.8rem;margin-bottom:4px">Group Travel Workspace</h2>
      <p class="text-muted" style="margin-bottom:16px">Invite Code: <strong>${group.code}</strong> (Share with friends)</p>

      <div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap">
        ${group.members.map(m => `
          <div style="padding:6px 14px;border-radius:20px;background:var(--bg-surface-lilac);border:1.5px solid var(--primary-light);font-size:0.85rem;font-weight:600;color:var(--text-heading)">
            ${m.name}
          </div>
        `).join('')}
      </div>

      <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:20px">
        ${group.polls.map(poll => `
          <div class="glass-card" style="padding:18px">
            <h4 style="font-size:1.05rem;color:var(--primary-dark);margin-bottom:12px">${poll.title}</h4>
            <div style="display:flex;flex-direction:column;gap:8px">
              ${poll.options.map(opt => `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:var(--bg-surface-warm);border-radius:12px;border:1px solid var(--primary-light)">
                  <span style="font-size:0.9rem;font-weight:600;color:var(--text-heading)">${opt.label}</span>
                  <div style="display:flex;align-items:center;gap:10px">
                    <span style="font-weight:700;color:var(--primary-dark);font-size:0.85rem">${opt.votes.length} votes</span>
                    <button class="btn btn-secondary btn-sm" style="padding:4px 12px;font-size:0.75rem" onclick="showToast('Vote registered!','success')">Vote</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <button class="btn btn-primary btn-block" onclick="createGroupItinerary()">Synthesize Group Plan</button>
    </div>
  `;
  openModal(html);
}

function createGroupItinerary() {
  closeModal();
  showToast('AI Consensus Itinerary generated from group votes!', 'success');
  executeTripGeneration();
}

/* ==========================================================
   11. OFFLINE TRIP MODE
   ========================================================== */
function initNetworkWatcher() {
  const updateStatus = (isOnline) => {
    const isConnected = isOnline && !voyoraState.isSimulatedOffline;
    const pill = document.getElementById('networkPill');
    const text = document.getElementById('networkText');
    if (!pill || !text) return;

    if (isConnected) {
      pill.classList.remove('offline');
      text.textContent = 'ONLINE';
    } else {
      pill.classList.add('offline');
      text.textContent = 'OFFLINE';
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
    if (text) text.textContent = 'ONLINE';
    showToast('Network Connected', 'info');
  } else {
    pill?.classList.add('offline');
    if (text) text.textContent = 'OFFLINE';
    showToast('Simulated Offline Mode Active: Loaded from LocalStorage', 'warning');
  }
}

function saveTripOffline() {
  if (!voyoraState.currentTrip) executeTripGeneration();
  const t = voyoraState.currentTrip;
  if (!t) return;
  t.offlineSaved = true;
  voyoraState.offlineTrips.push(t);
  localStorage.setItem('voyora_offline_trips', JSON.stringify(voyoraState.offlineTrips));

  showToast('Trip saved to storage for offline access.', 'success');
}

/* ==========================================================
   12. MULTILINGUAL AI TRAVEL ASSISTANT
   ========================================================== */
function openAiAssistantModal() {
  const html = `
    <div style="max-width:640px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <span class="section-tag" style="margin:0">Travel Co-Pilot</span>
        <select id="chatLangSelect" onchange="voyoraState.chatLang=this.value" style="background:#ffffff;color:var(--text-heading);border:1.5px solid var(--primary-light);padding:5px 12px;border-radius:14px;font-size:0.82rem;font-weight:600">
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="mr">मराठी</option>
        </select>
      </div>
      <h2 style="font-size:1.6rem;margin-bottom:6px">VOYORA Travel Assistant</h2>
      <p class="text-muted" style="margin-bottom:16px">Ask about destinations, sights, weather, budgets, or route shortcuts.</p>

      <div id="aiChatBox" style="height:260px;overflow-y:auto;background:var(--bg-surface-warm);border:1.5px solid var(--primary-light);border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        <div style="align-self:flex-start;background:#ffffff;border:1px solid var(--primary-light);color:var(--text-heading);padding:10px 16px;border-radius:14px;font-size:0.9rem;max-width:85%;font-weight:500">
          Hello! I am VOYORA AI. How can I assist with your journey today?
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
    <div style="align-self:flex-end;background:var(--primary-dark);color:#ffffff;font-weight:600;padding:10px 16px;border-radius:14px;font-size:0.9rem;max-width:85%">
      ${text}
    </div>
  `;
  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    let reply = "I recommend exploring the historic quarter in the morning and visiting local culinary markets in the evening.";
    if (voyoraState.chatLang === 'hi') reply = "मैं सुबह पुराने ऐतिहासिक क्षेत्र का भ्रमण करने और शाम को स्थानीय बाज़ारों का आनंद लेने की सलाह देता हूँ।";
    if (voyoraState.chatLang === 'mr') reply = "मी सकाळी ऐतिहासिक भागाची सैर करण्याची आणि संध्याकाळी स्थानिक खाद्यपदार्थांचा आस्वाद घेण्याची शिफारस करतो.";

    chatBox.innerHTML += `
      <div style="align-self:flex-start;background:#ffffff;border:1px solid var(--primary-light);color:var(--text-heading);padding:10px 16px;border-radius:14px;font-size:0.9rem;max-width:85%;font-weight:500">
        ${reply}
      </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}

/* ==========================================================
   13. MODAL & TOAST UI HELPERS
   ========================================================== */
function openModal(htmlContent) {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  if (!overlay || !content) return;

  content.innerHTML = `
    <button class="modal-close-btn" onclick="closeModal()" aria-label="Close Modal">✕</button>
    ${htmlContent}
  `;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-3d toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(60px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  if (nav) {
    nav.classList.toggle('active');
  }
}

/* ==========================================================
   INITIALIZATION LIFECYCLE
   ========================================================== */
let globeEngine;
let carousel;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize 3D Globe
  globeEngine = new Globe3DEngine('globeCanvas');

  // 2. Initialize 3D Mouse Tilt
  Vanilla3DTilt.init();

  // 3. Initialize 3D Coverflow Carousel
  carousel = new Destination3DCarousel();

  // 4. Initialize Interactive World Map
  InteractiveWorldMap.init();

  // 5. Initialize Animated Statistics
  initAnimatedCounters();

  // 6. Initialize Scroll Parallax & Sticky Navbar
  initScrollParallax();

  // 7. Initialize Network Status Watcher
  initNetworkWatcher();

  // Close modal on escape key or backdrop click
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const overlay = document.getElementById('modalOverlay');
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
});
