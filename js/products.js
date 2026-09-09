/* ==========================================================================
   Pipex - Product Catalogue & Dynamic Filtering Engine
   ========================================================================== */

const PRODUCTS_DATA = [
  {
    id: 'prod-001',
    name: 'High-Density CPVC Hot & Cold Water Pipe 3/4"',
    category: 'pipes-fittings',
    categoryName: 'Pipes & Fittings',
    brand: 'supreme',
    price: 18.50,
    bulkPrice: '14.20 / meter (50+ meters)',
    rating: 4.9,
    reviewsCount: 128,
    badge: 'Bestseller',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/High-Density CPVC Hot & Cold Water Pipe.jpg',
    description: 'SDR 11 heavy-duty CPVC pipe engineered for high-pressure hot and cold water plumbing distribution. Corrosion-free, UV resistant, and non-toxic.',
    specs: {
      'Diameter': '3/4 inch (20mm)',
      'Material': 'Chlorinated Polyvinyl Chloride (CPVC)',
      'Pressure Rating': '28 kg/cm²',
      'Temp Range': 'Up to 93°C (200°F)',
      'Standard': 'ASTM D2846 / IS 15778'
    }
  },
  {
    id: 'prod-002',
    name: 'Chrome Waterfall Basin Mixer Tap',
    category: 'taps-faucets',
    categoryName: 'Taps & Faucets',
    brand: 'jaquar',
    price: 74.00,
    bulkPrice: '62.00 (10+ units)',
    rating: 4.8,
    reviewsCount: 94,
    badge: 'Contractor Choice',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/Chrome Waterfall Basin Mixer Tap.jpg',
    description: 'Single-lever solid brass wash basin faucet with multi-layer mirror chrome finish. Includes soft waterfall aerator and high-durability ceramic cartridge.',
    specs: {
      'Body Material': 'Solid Grade-A Brass',
      'Finish': 'Multi-Layer Mirror Chrome',
      'Cartridge': 'Sedal Ceramic Cartridge (500,000 cycles)',
      'Warranty': '10 Years Manufacturer Warranty'
    }
  },
  {
    id: 'prod-003',
    name: 'Thermostatic Dual Rainfall Shower System',
    category: 'sanitaryware',
    categoryName: 'Sanitaryware & Showers',
    brand: 'kohler',
    price: 245.00,
    bulkPrice: '210.00 (5+ units)',
    rating: 5.0,
    reviewsCount: 64,
    badge: 'Luxury',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/Thermostatic Dual Rainfall Shower System.jpg',
    description: 'Luxury exposed thermostatic shower column with 12-inch stainless steel rainfall head, multi-function hand shower, and anti-scald temperature lock at 38°C.',
    specs: {
      'Shower Head': '12-inch Ultra Thin Stainless Steel 304',
      'Thermostatic Valve': 'Precision Brass Thermostatic Cartridge',
      'Hose': '1.5m Anti-Twist Stainless Steel Hose',
      'Feature': '38°C Safety Lock & Easy-Clean Silicone Nozzles'
    }
  },
  {
    id: 'prod-004',
    name: 'Heavy Duty Brass Ball Valve 1" Female Thread',
    category: 'valves-connectors',
    categoryName: 'Valves & Connectors',
    brand: 'prince',
    price: 22.90,
    bulkPrice: '17.50 (25+ units)',
    rating: 4.7,
    reviewsCount: 156,
    badge: 'Bulk Disc',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/Heavy Duty Brass Ball Valve 1 Female Thread.jpg',
    description: 'Forged brass full-port water ball valve with vinyl-insulated heavy steel lever handle. Designed for industrial water lines and domestic plumbing.',
    specs: {
      'Size': '1 inch NPT / BSP',
      'Material': 'Forged Lead-Free Brass (CW617N)',
      'Working Pressure': 'PN25 / 360 PSI',
      'Seal': 'PTFE (Teflon) Ball Seats'
    }
  },
  {
    id: 'prod-005',
    name: 'Triple-Layer Anti-Bacterial Overhead Water Tank 1000L',
    category: 'water-storage',
    categoryName: 'Water Storage',
    brand: 'finolex',
    price: 195.00,
    bulkPrice: '165.00 (3+ units)',
    rating: 4.9,
    reviewsCount: 82,
    badge: 'Heavy Duty',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/Triple-Layer Anti-Bacterial Overhead Water Tank 1000L.jpg',
    description: '1000 Litres 100% virgin food-grade polyethylene water storage tank with UV-stabilized outer layer and anti-bacterial inner lining to keep water fresh.',
    specs: {
      'Capacity': '1000 Litres',
      'Layers': '3 Layer Insulation Structure',
      'Material': 'FDA Approved Virgin LLDPE',
      'Warranty': '10 Years Replacement Warranty'
    }
  },
  {
    id: 'prod-006',
    name: 'Modern Wall-Hung Ceramic Rimless Toilet',
    category: 'sanitaryware',
    categoryName: 'Sanitaryware & Showers',
    brand: 'cera',
    price: 189.00,
    bulkPrice: '158.00 (5+ units)',
    rating: 4.8,
    reviewsCount: 71,
    badge: 'Eco Save',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/Modern Wall-Hung Ceramic Rimless Toilet.jpg',
    description: 'Architectural rimless wall-hung toilet commode with soft-closing slim seat cover and dual flush eco-wash technology.',
    specs: {
      'Flushing System': 'Rimless Tornado Dual Flush (3L / 4.5L)',
      'Glaze': 'Nano-Clean Anti-Stain Ceramic Glaze',
      'Seat': 'Urea Soft-Closing Quick Release Seat',
      'Load Capacity': '400 kg Tested'
    }
  },
  {
    id: 'prod-007',
    name: 'Matte Black 5-Piece Bathroom Hardware Accessories Set',
    category: 'bathroom-accessories',
    categoryName: 'Bathroom Accessories',
    brand: 'hindware',
    price: 88.00,
    bulkPrice: '72.00 (10+ sets)',
    rating: 4.6,
    reviewsCount: 49,
    badge: 'Top Trend',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/Matte Black 5-Piece Bathroom Hardware Accessories Set.jpg',
    description: 'Complete 5-piece hardware set including 24" towel bar, toilet paper holder, robe hook, towel ring, and tumbler holder in electroplated matte black.',
    specs: {
      'Material': 'Stainless Steel 304 & Solid Zinc Alloy',
      'Finish': 'Electroplated Matte Black Finish',
      'Mounting': 'Concealed Screw Wall Anchor System'
    }
  },
  {
    id: 'prod-008',
    name: 'UPVC Pressure Pipe 90° Elbow Fitting 2"',
    category: 'pipes-fittings',
    categoryName: 'Pipes & Fittings',
    brand: 'astral',
    price: 4.50,
    bulkPrice: '3.20 (100+ units)',
    rating: 4.9,
    reviewsCount: 210,
    badge: 'Contractor Pick',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/cat_pipes_fittings.jpg',
    description: 'Heavy gauge Schedule 80 UPVC socket 90-degree elbow fitting for industrial process piping and irrigation water supply.',
    specs: {
      'Size': '2 inch (63mm socket)',
      'Material': 'Unplasticized Polyvinyl Chloride (UPVC)',
      'Rating': 'SCH 80 / 16 Bar',
      'Standard': 'ASTM D2467'
    }
  },
  {
    id: 'prod-009',
    name: 'Forged Brass Angle Valve with Flange 1/2"',
    category: 'valves-connectors',
    categoryName: 'Valves & Connectors',
    brand: 'prince',
    price: 14.20,
    bulkPrice: '11.00 (50+ units)',
    rating: 4.7,
    reviewsCount: 185,
    badge: 'Industrial Grade',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/cat_valves_connectors.jpg',
    description: 'Quarter-turn ceramic disc forged brass angle stop valve with chrome wall flange. Designed for geysers, wash basins, and cisterns.',
    specs: {
      'Size': '1/2 inch BSP Inlet/Outlet',
      'Material': 'Heavy Duty Forged Brass',
      'Finish': 'Mirror Chrome Plating',
      'Pressure': 'PN16 Tested'
    }
  },
  {
    id: 'prod-010',
    name: 'Single Lever Tall Body Basin Tap with Swivel Spout',
    category: 'taps-faucets',
    categoryName: 'Taps & Faucets',
    brand: 'jaquar',
    price: 89.00,
    bulkPrice: '75.00 (5+ units)',
    rating: 4.8,
    reviewsCount: 52,
    badge: 'New Arrival',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/cat_taps_faucets.jpg',
    description: 'High-rise countertop vessel basin mixer tap with 360-degree swivel spout and water-saving honeycomb aerator.',
    specs: {
      'Body Material': 'Solid Grade-A Brass',
      'Height': '310mm Tall Pillar Body',
      'Cartridge': 'Kerox Ceramic Cartridge 35mm',
      'Warranty': '10 Years Warranty'
    }
  },
  {
    id: 'prod-011',
    name: 'Commercial Multi-Branch Manifold Piping System',
    category: 'pipes-fittings',
    categoryName: 'Pipes & Fittings',
    brand: 'supreme',
    price: 135.00,
    bulkPrice: '112.00 (3+ units)',
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Engineered',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/Commercial Multi-Branch Manifold Piping System.jpg',
    description: 'Heavy duty modular supply distribution manifold with pressure balancing ports for multi-bathroom and commercial branch plumbing.',
    specs: {
      'Inlet Size': '1.25 inch / Outlet 3/4 inch',
      'Material': 'Virgin CPVC SDR 11',
      'Pressure Rating': '25 Bar Hydraulic Tested',
      'Application': 'Multi-Storey Water Distribution'
    }
  },
  {
    id: 'prod-012',
    name: 'Showroom Grade Sanitaryware Vanity & Basin Set',
    category: 'sanitaryware',
    categoryName: 'Sanitaryware & Showers',
    brand: 'kohler',
    price: 320.00,
    bulkPrice: '275.00 (2+ sets)',
    rating: 5.0,
    reviewsCount: 44,
    badge: 'Showroom Pick',
    badgeClass: 'badge-secondary',
    inStock: true,
    image: 'assets/images/Showroom Grade Sanitaryware Vanity & Basin Set.jpg',
    description: 'Architectural wall-mount vanity unit with seamless glazed ceramic wash basin and soft-close moisture-resistant storage cabinet.',
    specs: {
      'Dimensions': '800mm x 480mm x 520mm',
      'Material': 'Vitreous China + Marine Grade Board',
      'Glaze': 'Anti-Bacterial Nano Surface',
      'Mounting': 'Heavy Duty Concealed Bracket'
    }
  }
];

// State & Filters
let cartItems = JSON.parse(localStorage.getItem('plumbpro_quote_cart')) || [
  { id: 'prod-001', name: 'High-Density CPVC Hot & Cold Water Pipe 3/4"', price: 18.50, qty: 50, image: 'assets/images/High-Density CPVC Hot & Cold Water Pipe.jpg' },
  { id: 'prod-004', name: 'Heavy Duty Brass Ball Valve 1" Female Thread', price: 22.90, qty: 10, image: 'assets/images/Heavy Duty Brass Ball Valve 1 Female Thread.jpg' }
];

function updateCartStorage() {
  localStorage.setItem('plumbpro_quote_cart', JSON.stringify(cartItems));
  renderCartDrawer();
  updateCartBadge();
}

function addToQuoteCart(productId, qty = 1) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const existing = cartItems.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cartItems.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      qty: qty,
      image: prod.image
    });
  }

  updateCartStorage();
  showToast(`Added ${qty}x "${prod.name}" to Bulk Quote Cart!`, 'success');
}

function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.id !== productId);
  updateCartStorage();
  showToast('Item removed from quotation list.', 'info');
}

function updateCartQuantity(productId, delta) {
  const item = cartItems.find(i => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(productId);
    } else {
      updateCartStorage();
    }
  }
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const totalCount = cartItems.reduce((acc, i) => acc + i.qty, 0);
  badges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? 'flex' : 'none';
  });
}

function renderCartDrawer() {
  const drawerBody = document.getElementById('cart-drawer-items');
  const drawerTotal = document.getElementById('cart-drawer-total');
  if (!drawerBody) return;

  if (cartItems.length === 0) {
    drawerBody.innerHTML = `
      <div style="text-align:center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="margin-bottom: 1rem; display:flex; justify-content:center;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
        </div>
        <h4>Your Bulk Quote List is Empty</h4>
        <p style="font-size: 0.9rem; margin-top: 0.5rem;">Browse products and click "Add to Bulk Quote" to request contractor pricing.</p>
      </div>
    `;
    if (drawerTotal) drawerTotal.textContent = '$0.00';
    return;
  }

  let total = 0;
  drawerBody.innerHTML = cartItems.map(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    return `
      <div style="display:flex; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--border-subtle); align-items:center;">
        <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: contain; border-radius: var(--radius-sm); background: var(--bg-surface-tint); padding: 4px;" />
        <div style="flex-grow: 1;">
          <h5 style="font-size: 0.9rem; margin-bottom: 0.25rem; color: var(--text-primary); line-height:1.3;">${item.name}</h5>
          <div style="font-size: 0.85rem; color: var(--accent-blue); font-weight: 700;">$${item.price.toFixed(2)} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight:400;">est. unit</span></div>
          <div style="display:flex; align-items:center; gap: 0.5rem; margin-top: 0.5rem;">
            <button onclick="updateCartQuantity('${item.id}', -1)" style="background:var(--bg-surface-tint); width:24px; height:24px; border-radius:4px; font-weight:700;">-</button>
            <span style="font-weight:700; font-size: 0.9rem;">${item.qty}</span>
            <button onclick="updateCartQuantity('${item.id}', 1)" style="background:var(--bg-surface-tint); width:24px; height:24px; border-radius:4px; font-weight:700;">+</button>
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight: 800; color: var(--text-primary); font-size: 0.95rem;">$${itemTotal.toFixed(2)}</div>
          <button onclick="removeFromCart('${item.id}')" style="color: var(--accent-red); font-size: 0.75rem; margin-top: 0.5rem; text-decoration: underline;">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  if (drawerTotal) drawerTotal.textContent = `$${total.toFixed(2)}`;
}

// Render dynamic product card
function createProductCardHTML(p) {
  return `
    <div class="product-card" data-category="${p.category}" data-brand="${p.brand.toLowerCase()}" data-price="${p.price}">
      <div class="product-img-wrap">
        <div class="product-badges">
          <span class="badge ${p.badgeClass}" style="font-size:0.62rem; padding:0.18rem 0.5rem;">${p.badge}</span>
        </div>
        <img src="${p.image}" alt="${p.name}" loading="lazy" style="width:100%; height:100%; object-fit:cover;" />
        <div class="product-actions-floating">
          <button class="action-btn" onclick="openQuickView('${p.id}')" title="Quick View" aria-label="Quick View" style="width:30px; height:30px;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
        </div>
      </div>
      <div class="product-content">
        <div class="product-brand">${p.brand.charAt(0).toUpperCase() + p.brand.slice(1)}</div>
        <h4 class="product-name" style="-webkit-line-clamp:2; display:-webkit-box; -webkit-box-orient:vertical; overflow:hidden;">${p.name}</h4>
        <div class="product-rating">
          <span>★</span><span>${p.rating}</span>
          <span style="color: var(--text-muted); font-size: 0.68rem;">(${p.reviewsCount})</span>
        </div>
        <div class="product-price-wrap">
          <div class="product-price">
            <span class="price-main">$${p.price.toFixed(2)}</span>
            <span class="price-bulk" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:110px;">Bulk: ${p.bulkPrice}</span>
          </div>
          <button class="btn btn-primary" style="font-size:0.7rem; padding:0.38rem 0.65rem; white-space:nowrap; flex-shrink:0;" onclick="addToQuoteCart('${p.id}', 1)">+ Quote</button>
        </div>
      </div>
    </div>
  `;
}
