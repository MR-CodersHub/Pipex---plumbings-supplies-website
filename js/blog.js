/* ==========================================================================
   Pipex - Blog & Technical Guides Engine with Full Interactive Reader
   ========================================================================== */

const BLOG_POSTS = [
  {
    id: 'post-1',
    title: 'CPVC vs UPVC vs PVC Pipes: Ultimate Contractor Selection Guide 2026',
    category: 'Pipe Selection',
    date: 'August 10, 2026',
    readTime: '6 min read',
    author: 'Eng. Marcus Vance',
    authorRole: 'Senior MEP Systems Consultant',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    summary: 'A detailed breakdown of temperature tolerances, pressure ratings, and chemical resistance for selecting the correct piping system for residential and commercial projects.',
    fullContentHtml: `
      <div class="blog-modal-body">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem; flex-wrap:wrap;">
          <span class="badge badge-blue">Pipe Selection</span>
          <span style="font-size:0.85rem; color:var(--text-muted);">📅 August 10, 2026 • ⏱️ 6 min read</span>
        </div>
        
        <h2 style="font-size: clamp(1.4rem, 4vw, 2rem); color: var(--text-primary); margin-bottom: 1.25rem; line-height: 1.3;">
          CPVC vs UPVC vs PVC Pipes: Ultimate Contractor Selection Guide 2026
        </h2>

        <div style="display:flex; align-items:center; gap:0.85rem; padding:0.85rem 1rem; background:var(--bg-surface-tint); border-radius:var(--radius-md); margin-bottom:1.75rem;">
          <div style="width:42px; height:42px; border-radius:50%; background:var(--accent-blue); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.1rem;">MV</div>
          <div>
            <div style="font-weight:700; color:var(--text-primary); font-size:0.95rem;">Eng. Marcus Vance</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">Senior MEP Systems Consultant at Pipex Technical Desk</div>
          </div>
        </div>

        <div style="border-radius:var(--radius-lg); overflow:hidden; margin-bottom:2rem; box-shadow:var(--shadow-subtle);">
          <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=80" alt="CPVC vs UPVC Pipes" style="width:100%; height:320px; object-fit:cover;" />
        </div>

        <div style="font-size:1.02rem; line-height:1.75; color:var(--text-secondary);">
          <p style="margin-bottom:1.25rem;">
            Selecting the wrong polymer pipe for building water infrastructure is one of the most expensive plumbing mistakes in modern construction. Thermal expansion fatigue, joint solvent incompatibility, and chemical degradation can cause premature ruptures within years of handover.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">1. Understanding CPVC (Chlorinated Polyvinyl Chloride)</h3>
          <p style="margin-bottom:1rem;">
            CPVC is homopolymer PVC that has undergone a specialized chlorination reaction. This extra chlorine alters the molecule's chemical stability, increasing its glass transition temperature and fire resistance substantially.
          </p>
          <ul style="margin-left:1.5rem; margin-bottom:1.5rem; display:flex; flex-direction:column; gap:0.5rem;">
            <li><strong>Max Working Temperature:</strong> Up to 93°C (200°F) continuous working pressure.</li>
            <li><strong>Primary Use:</strong> Domestic hot & cold potable water distribution, solar water heater loops, commercial boilers.</li>
            <li><strong>Jointing Method:</strong> CPVC One-Step or Two-Step Heavy Duty Solvent Cement.</li>
          </ul>

          <div style="background:var(--accent-blue-light); border-left:4px solid var(--accent-blue); padding:1.25rem; border-radius:0 var(--radius-md) var(--radius-md) 0; margin-bottom:2rem;">
            <strong style="color:var(--accent-blue); display:block; margin-bottom:0.35rem;">💡 Contractor Pro-Tip:</strong>
            Never use standard clear PVC solvent on CPVC lines. CPVC requires high-viscosity THF-based solvent cement certified to ASTM F493 to ensure full chemical fusion.
          </div>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">2. Understanding UPVC (Unplasticized Polyvinyl Chloride)</h3>
          <p style="margin-bottom:1rem;">
            UPVC contains zero plasticizers, making it extremely rigid, UV-resistant, and cost-efficient for cold water transfer and vertical rainwater downspouts.
          </p>
          <ul style="margin-left:1.5rem; margin-bottom:1.5rem; display:flex; flex-direction:column; gap:0.5rem;">
            <li><strong>Max Working Temperature:</strong> Up to 60°C (140°F) for cold water only.</li>
            <li><strong>Primary Use:</strong> Cold water main supply lines, exterior riser pipes, municipal connections, borewell drops.</li>
            <li><strong>Pressure Ratings:</strong> Schedule 40 & Schedule 80 rated for up to 330 PSI depending on diameter.</li>
          </ul>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">3. Summary Comparison Table</h3>
          <div style="overflow-x:auto; -webkit-overflow-scrolling:touch; margin-bottom:2rem; border-radius:var(--radius-md); box-shadow:var(--shadow-subtle);">
            <table style="width:100%; min-width:500px; border-collapse:collapse; background:var(--bg-surface);">
              <thead>
                <tr style="background:var(--accent-blue); color:#fff; text-align:left;">
                  <th style="padding:0.75rem 1rem;">Feature</th>
                  <th style="padding:0.75rem 1rem;">CPVC (ASTM D2846)</th>
                  <th style="padding:0.75rem 1rem;">UPVC (ASTM D1785)</th>
                  <th style="padding:0.75rem 1rem;">Standard PVC</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border-subtle);">
                  <td style="padding:0.75rem 1rem; font-weight:700;">Hot Water Suitability</td>
                  <td style="padding:0.75rem 1rem; color:var(--accent-green); font-weight:700;">Excellent (93°C)</td>
                  <td style="padding:0.75rem 1rem; color:var(--accent-red);">No (Cold Only)</td>
                  <td style="padding:0.75rem 1rem; color:var(--accent-red);">No</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-subtle);">
                  <td style="padding:0.75rem 1rem; font-weight:700;">Potable Safe (NSF 61)</td>
                  <td style="padding:0.75rem 1rem; color:var(--accent-green); font-weight:700;">100% Certified</td>
                  <td style="padding:0.75rem 1rem; color:var(--accent-green); font-weight:700;">100% Certified</td>
                  <td style="padding:0.75rem 1rem; color:var(--accent-amber);">Varies by Brand</td>
                </tr>
                <tr>
                  <td style="padding:0.75rem 1rem; font-weight:700;">UV Resistance</td>
                  <td style="padding:0.75rem 1rem;">High</td>
                  <td style="padding:0.75rem 1rem; color:var(--accent-green); font-weight:700;">Very High</td>
                  <td style="padding:0.75rem 1rem; color:var(--accent-amber);">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="background:var(--bg-surface-tint); padding:1.75rem; border-radius:var(--radius-lg); text-align:center; margin-top:2.5rem;">
            <h4 style="color:var(--text-primary); margin-bottom:0.5rem; font-size:1.2rem;">Ready to Source Certified Pipes & Fittings?</h4>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1.25rem;">Pipex carries ready depot stock of Supreme, Astral, Prince, and Finolex pipes with factory test certificates.</p>
            <div class="flex flex-center gap-3 flex-wrap">
              <a href="products.html?category=pipes-fittings" class="btn btn-primary">Browse Pipe Catalogue →</a>
              <a href="contact.html" class="btn btn-secondary">Submit BOQ for Trade Rates</a>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'post-2',
    title: 'How to Choose the Right Faucet Finish: Chrome vs Matte Black vs Brushed Brass',
    category: 'Bathroom Design',
    date: 'August 04, 2026',
    readTime: '4 min read',
    author: 'Elena Rostova',
    authorRole: 'Architectural Interior Specialist',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    summary: 'Explore durability, maintenance tips, and aesthetic pairings for modern bathroom taps and faucet finishes in high-use settings.',
    fullContentHtml: `
      <div class="blog-modal-body">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem; flex-wrap:wrap;">
          <span class="badge badge-green">Bathroom Design</span>
          <span style="font-size:0.85rem; color:var(--text-muted);">📅 August 04, 2026 • ⏱️ 4 min read</span>
        </div>
        
        <h2 style="font-size: clamp(1.4rem, 4vw, 2rem); color: var(--text-primary); margin-bottom: 1.25rem; line-height: 1.3;">
          How to Choose the Right Faucet Finish: Chrome vs Matte Black vs Brushed Brass
        </h2>

        <div style="display:flex; align-items:center; gap:0.85rem; padding:0.85rem 1rem; background:var(--bg-surface-tint); border-radius:var(--radius-md); margin-bottom:1.75rem;">
          <div style="width:42px; height:42px; border-radius:50%; background:var(--accent-green); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.1rem;">ER</div>
          <div>
            <div style="font-weight:700; color:var(--text-primary); font-size:0.95rem;">Elena Rostova</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">Architectural Interior Specialist at Pipex Showroom</div>
          </div>
        </div>

        <div style="border-radius:var(--radius-lg); overflow:hidden; margin-bottom:2rem; box-shadow:var(--shadow-subtle);">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80" alt="Faucet Finishes" style="width:100%; height:320px; object-fit:cover;" />
        </div>

        <div style="font-size:1.02rem; line-height:1.75; color:var(--text-secondary);">
          <p style="margin-bottom:1.25rem;">
            When designing a bathroom or kitchen, faucet finishes define the architectural atmosphere. However, beyond visual appeal, physical vapor deposition (PVD) coating longevity, water spot visibility, and resistance to alkaline hard water determine true satisfaction over time.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">1. Polished Chrome: The Timeless Workhorse</h3>
          <p style="margin-bottom:1rem;">
            Triple-plated polished chrome remains the global benchmark for hotels and high-traffic commercial washrooms. Its electroplated micro-layer provides exceptional scratch resistance and matches virtually all ceramic sanitaryware.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">2. Matte Black: Minimalist Contemporary Luxury</h3>
          <p style="margin-bottom:1rem;">
            High-grade electro-deposition or PVD matte black resists fingerprints and oil residues. It creates stark, dramatic contrast against white marble countertops and subway tiles.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">3. Brushed Brass & Warm Gold</h3>
          <p style="margin-bottom:1.5rem;">
            Brushed brass hides water drops effortlessly compared to glossy metals. Look for PVD gold coatings with minimum 10-year anti-tarnish warranties.
          </p>

          <div style="background:var(--bg-surface-tint); padding:1.75rem; border-radius:var(--radius-lg); text-align:center; margin-top:2.5rem;">
            <h4 style="color:var(--text-primary); margin-bottom:0.5rem; font-size:1.2rem;">Inspect Live Tap Displays in Our Showroom</h4>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1.25rem;">Visit our 15,000 sq.ft showroom to test water flow and inspect Jaquar, Kohler, and Grohe finishes.</p>
            <div class="flex flex-center gap-3 flex-wrap">
              <a href="products.html?category=taps-faucets" class="btn btn-primary">View Faucet Collection →</a>
              <a href="contact.html" class="btn btn-secondary">Showroom Directions</a>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'post-3',
    title: 'Calculating Overhead Water Storage Tank Capacity for Multi-Story Buildings',
    category: 'Water Storage',
    date: 'July 28, 2026',
    readTime: '8 min read',
    author: 'David Sterling',
    authorRole: 'Head of Mechanical Supply Logistics',
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
    summary: 'Step-by-step engineering formula for estimating daily water consumption, peak demand factor, and reserve requirements for apartments and hotels.',
    fullContentHtml: `
      <div class="blog-modal-body">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem; flex-wrap:wrap;">
          <span class="badge badge-amber">Water Storage</span>
          <span style="font-size:0.85rem; color:var(--text-muted);">📅 July 28, 2026 • ⏱️ 8 min read</span>
        </div>
        
        <h2 style="font-size: clamp(1.4rem, 4vw, 2rem); color: var(--text-primary); margin-bottom: 1.25rem; line-height: 1.3;">
          Calculating Overhead Water Storage Tank Capacity for Multi-Story Buildings
        </h2>

        <div style="display:flex; align-items:center; gap:0.85rem; padding:0.85rem 1rem; background:var(--bg-surface-tint); border-radius:var(--radius-md); margin-bottom:1.75rem;">
          <div style="width:42px; height:42px; border-radius:50%; background:var(--accent-amber); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.1rem;">DS</div>
          <div>
            <div style="font-weight:700; color:var(--text-primary); font-size:0.95rem;">David Sterling</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">Head of Mechanical Supply Logistics at Pipex</div>
          </div>
        </div>

        <div style="border-radius:var(--radius-lg); overflow:hidden; margin-bottom:2rem; box-shadow:var(--shadow-subtle);">
          <img src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1000&q=80" alt="Water Storage Tanks" style="width:100%; height:320px; object-fit:cover;" />
        </div>

        <div style="font-size:1.02rem; line-height:1.75; color:var(--text-secondary);">
          <p style="margin-bottom:1.25rem;">
            Under-sizing overhead water tanks results in frequent pump dry-runs and water outages, while over-sizing adds dangerous deadweight to roof structural slabs. Here is the standard MEP design calculation formula.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">The Universal Sizing Formula:</h3>
          <div style="background:rgba(0,102,204,0.08); border-left:4px solid var(--accent-blue); padding:1.25rem; border-radius:0 var(--radius-md) var(--radius-md) 0; margin-bottom:1.5rem; font-family:monospace; font-size:1.1rem; color:var(--text-primary);">
            Total Daily Volume (Liters) = Number of Occupants × Per Capita Consumption (LPCD)
          </div>

          <ul style="margin-left:1.5rem; margin-bottom:1.5rem; display:flex; flex-direction:column; gap:0.5rem;">
            <li><strong>Residential Apartments:</strong> 135 to 150 Liters per person/day (IS 1172 Standard).</li>
            <li><strong>Hotels & Guest Houses:</strong> 180 to 220 Liters per guest/day.</li>
            <li><strong>Commercial Office Complexes:</strong> 45 Liters per employee/day.</li>
          </ul>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">Tank Layering & Thermal Protection</h3>
          <p style="margin-bottom:1.5rem;">
            In sunny or high-temperature regions, always specify <strong>4-Layer Foam Insulated Tanks</strong>. The middle polyurethane micro-foam layer shields water from absorbing radiant rooftop heat, keeping tap water refreshingly cool even in 45°C ambient summers.
          </p>

          <div style="background:var(--bg-surface-tint); padding:1.75rem; border-radius:var(--radius-lg); text-align:center; margin-top:2.5rem;">
            <h4 style="color:var(--text-primary); margin-bottom:0.5rem; font-size:1.2rem;">Order 500L to 5000L Overhead Water Tanks</h4>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1.25rem;">Factory direct delivery with crane unloading available for contractors across the district.</p>
            <div class="flex flex-center gap-3 flex-wrap">
              <a href="products.html?category=water-storage" class="btn btn-primary">Browse Water Tanks →</a>
              <a href="contact.html" class="btn btn-secondary">Request Delivery Quote</a>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'post-4',
    title: 'Top 5 Valve Types Used in Commercial Plumbing & Their Specific Functions',
    category: 'Plumbing Tips',
    date: 'July 19, 2026',
    readTime: '5 min read',
    author: 'Eng. Marcus Vance',
    authorRole: 'Senior MEP Systems Consultant',
    image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=800&q=80',
    summary: 'Comparing Ball Valves, Gate Valves, Check Valves, Pressure Reducing Valves (PRV), and Butterfly Valves in commercial pressure lines.',
    fullContentHtml: `
      <div class="blog-modal-body">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem; flex-wrap:wrap;">
          <span class="badge badge-blue">Plumbing Tips</span>
          <span style="font-size:0.85rem; color:var(--text-muted);">📅 July 19, 2026 • ⏱️ 5 min read</span>
        </div>
        
        <h2 style="font-size: clamp(1.4rem, 4vw, 2rem); color: var(--text-primary); margin-bottom: 1.25rem; line-height: 1.3;">
          Top 5 Valve Types Used in Commercial Plumbing & Their Specific Functions
        </h2>

        <div style="border-radius:var(--radius-lg); overflow:hidden; margin-bottom:2rem; box-shadow:var(--shadow-subtle);">
          <img src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1000&q=80" alt="Valves in Plumbing" style="width:100%; height:320px; object-fit:cover;" />
        </div>

        <div style="font-size:1.02rem; line-height:1.75; color:var(--text-secondary);">
          <p style="margin-bottom:1.25rem;">
            Commercial plumbing networks rely on specialized control valves to isolate branches, regulate pressure surges, and prevent dangerous backflow into municipal water mains.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">1. Full-Bore Brass Ball Valves</h3>
          <p style="margin-bottom:1rem;">
            Best for quick 1/4-turn shutoff with near-zero friction loss. The internal chrome-plated brass sphere rotates to create an airtight seal against PTFE teflon seats.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">2. Pressure Reducing Valves (PRV)</h3>
          <p style="margin-bottom:1rem;">
            Installed on lower floors of skyscrapers where gravity water head exceeds 65 PSI. PRVs step down high pressure to protect domestic appliances, flexible hoses, and mixer cartridges.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">3. Non-Return Check Valves (NRV)</h3>
          <p style="margin-bottom:1.5rem;">
            Installed on pump discharge lines to prevent backflow and preserve pump priming during shut-off cycles.
          </p>

          <div style="background:var(--bg-surface-tint); padding:1.75rem; border-radius:var(--radius-lg); text-align:center; margin-top:2.5rem;">
            <h4 style="color:var(--text-primary); margin-bottom:0.5rem; font-size:1.2rem;">Wholesale Valve Cases Available at Pipex</h4>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1.25rem;">Heavy duty brass and cast bronze valves in 1/2" up to 4" flange connections.</p>
            <a href="products.html?category=valves-connectors" class="btn btn-primary">Browse Valve Inventory →</a>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'post-5',
    title: 'Preventing Water Hammer & Pressure Surges in Domestic Pipe Systems',
    category: 'Plumbing Tips',
    date: 'July 12, 2026',
    readTime: '5 min read',
    author: 'Samira Patel',
    authorRole: 'Hydraulic Systems Engineer',
    image: 'assets/images/hero_plumbing.jpg',
    summary: 'Learn why water hammer occurs when quick-closing valves shut, and how installing water hammer arrestors protects fittings from rupture.',
    fullContentHtml: `
      <div class="blog-modal-body">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem; flex-wrap:wrap;">
          <span class="badge badge-blue">Plumbing Tips</span>
          <span style="font-size:0.85rem; color:var(--text-muted);">📅 July 12, 2026 • ⏱️ 5 min read</span>
        </div>
        
        <h2 style="font-size: clamp(1.4rem, 4vw, 2rem); color: var(--text-primary); margin-bottom: 1.25rem; line-height: 1.3;">
          Preventing Water Hammer & Pressure Surges in Domestic Pipe Systems
        </h2>

        <div style="border-radius:var(--radius-lg); overflow:hidden; margin-bottom:2rem; box-shadow:var(--shadow-subtle);">
          <img src="assets/images/hero_plumbing.jpg" alt="Water Hammer Prevention" style="width:100%; height:320px; object-fit:cover;" />
        </div>

        <div style="font-size:1.02rem; line-height:1.75; color:var(--text-secondary);">
          <p style="margin-bottom:1.25rem;">
            That loud thumping or clanging sound heard inside walls when a washing machine solenoid closes or a mixer lever is shut is known as hydraulic shock or <strong>water hammer</strong>.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">Why Water Hammer Destroys Pipe Joints:</h3>
          <p style="margin-bottom:1rem;">
            Water is virtually incompressible. When water traveling at 2-3 meters per second is abruptly halted by a valve, the kinetic energy transforms into an instantaneous shockwave traveling back through the pipe at supersonic speeds, creating pressure spikes 4x to 8x normal working pressure.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">The Solution: Mechanical Piston Arrestors</h3>
          <p style="margin-bottom:1.5rem;">
            Install stainless steel or brass water hammer arrestors containing a gas-pressurized piston chamber close to washing machine outlets, dishwasher valves, and high-pressure rainfall shower thermostatic valves.
          </p>

          <div style="background:var(--bg-surface-tint); padding:1.75rem; border-radius:var(--radius-lg); text-align:center; margin-top:2.5rem;">
            <h4 style="color:var(--text-primary); margin-bottom:0.5rem; font-size:1.2rem;">Need Pressure Relief & Arrestor Hardware?</h4>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1.25rem;">Consult our trade desk to calculate flow velocity and arrestor sizing.</p>
            <a href="contact.html" class="btn btn-primary">Contact Trade Desk →</a>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'post-6',
    title: 'Contractor Procurement Checklist: Sourcing Materials for Large Housing Projects',
    category: 'Contractor Advice',
    date: 'July 02, 2026',
    readTime: '7 min read',
    author: 'David Sterling',
    authorRole: 'Head of Mechanical Supply Logistics',
    image: 'assets/images/contractor_warehouse.jpg',
    summary: 'Best practices for managing Bill of Quantities (BOQ), batch ordering, staggered jobsite deliveries, and quality compliance testing.',
    fullContentHtml: `
      <div class="blog-modal-body">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem; flex-wrap:wrap;">
          <span class="badge badge-red">Contractor Advice</span>
          <span style="font-size:0.85rem; color:var(--text-muted);">📅 July 02, 2026 • ⏱️ 7 min read</span>
        </div>
        
        <h2 style="font-size: clamp(1.4rem, 4vw, 2rem); color: var(--text-primary); margin-bottom: 1.25rem; line-height: 1.3;">
          Contractor Procurement Checklist: Sourcing Materials for Large Housing Projects
        </h2>

        <div style="border-radius:var(--radius-lg); overflow:hidden; margin-bottom:2rem; box-shadow:var(--shadow-subtle);">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80" alt="Contractor Procurement" style="width:100%; height:320px; object-fit:cover;" />
        </div>

        <div style="font-size:1.02rem; line-height:1.75; color:var(--text-secondary);">
          <p style="margin-bottom:1.25rem;">
            Procuring thousands of pipe lengths, fittings, valves, and bathroom sets across multi-phase residential housing requires rigorous tracking, standard batch quality checks, and staggered jobsite delivery schedules.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">1. Lock Wholesale Pricing with BOQ Estimation</h3>
          <p style="margin-bottom:1rem;">
            Submit your complete Bill of Quantities before foundation pouring. This locks wholesale tier rates, shielding your budget against mid-project resin price increases.
          </p>

          <h3 style="color:var(--text-primary); font-size:1.35rem; margin-top:2rem; margin-bottom:0.75rem;">2. Stagger Deliveries to Prevent Jobsite Damage</h3>
          <p style="margin-bottom:1.5rem;">
            Never store delicate ceramic sanitaryware and luxury brass tapware on dusty early-stage construction slabs. Arrange milestone-based dispatch (Phase 1: Underground drainage, Phase 2: Internal risers, Phase 3: Final trim & sanitaryware).
          </p>

          <div style="background:var(--bg-surface-tint); padding:1.75rem; border-radius:var(--radius-lg); text-align:center; margin-top:2.5rem;">
            <h4 style="color:var(--text-primary); margin-bottom:0.5rem; font-size:1.2rem;">Partner with Pipex for Dedicated Project Supply</h4>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1.25rem;">Dedicated account manager, credit payment terms, and scheduled crane deliveries.</p>
            <div class="flex flex-center gap-3 flex-wrap">
              <a href="contact.html" class="btn btn-primary">Submit BOQ for Volume Rates →</a>
              <a href="services.html" class="btn btn-secondary">Explore Trade Services</a>
            </div>
          </div>
        </div>
      </div>
    `
  }
];

// Helper to open the full blog detail modal
function openBlogModal(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0];
  
  let modal = document.getElementById('blog-reader-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'blog-reader-modal';
    modal.innerHTML = `
      <div class="modal-container" style="max-width: 850px; max-height: 90vh; overflow-y: auto; padding: 0;">
        <button class="modal-close" onclick="closeBlogModal()" style="top: 1rem; right: 1rem; z-index: 10;">✕</button>
        <div id="blog-reader-content"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBlogModal();
    });
  }

  const contentWrap = document.getElementById('blog-reader-content');
  if (contentWrap) {
    contentWrap.innerHTML = post.fullContentHtml;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
  const modal = document.getElementById('blog-reader-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = '';
}

// Global keyboard support for closing modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBlogModal();
  }
});

function initBlogEngine() {
  const grid = document.getElementById('blog-posts-grid');
  const searchInput = document.getElementById('blog-search-input');
  const catButtons = document.querySelectorAll('.blog-cat-btn');

  if (!grid) return;

  function renderPosts(posts) {
    if (posts.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-muted);">No plumbing articles found matching your criteria.</div>';
      return;
    }

    grid.innerHTML = posts.map(p => `
      <div class="card" style="display:flex; flex-direction:column; padding:0; overflow:hidden; border-radius: var(--radius-lg); cursor:pointer; height:100%; box-shadow:var(--shadow-card);" onclick="openBlogModal('${p.id}')">
        <div style="height: 200px; width:100%; overflow:hidden; position:relative; flex-shrink:0;">
          <img src="${p.image}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover; display:block; transition: var(--transition-normal);" />
          <span class="blog-badge" style="position:absolute; top: 1rem; left: 1rem;">${p.category}</span>
        </div>
        <div style="padding: 1.5rem; display:flex; flex-direction:column; flex-grow:1;">
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; display:flex; gap: 0.75rem;">
            <span>📅 ${p.date}</span>
            <span>⏱️ ${p.readTime}</span>
          </div>
          <h4 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 0.75rem; line-height: 1.35; min-height: 2.9rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${p.title}</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem; flex-grow:1; line-height:1.55; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${p.summary}</p>
          <div class="blog-card-footer">
            <span class="blog-author">By ${p.author}</span>
            <button onclick="event.stopPropagation(); openBlogModal('${p.id}')" class="btn btn-sm btn-secondary blog-read-btn">Read Guide →</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderPosts(BLOG_POSTS);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = BLOG_POSTS.filter(p => p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
      renderPosts(filtered);
    });
  }

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('btn-primary'));
      catButtons.forEach(b => b.classList.add('btn-secondary'));
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');

      const cat = btn.getAttribute('data-category');
      if (cat === 'all') {
        renderPosts(BLOG_POSTS);
      } else {
        renderPosts(BLOG_POSTS.filter(p => p.category.toLowerCase() === cat.toLowerCase()));
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initBlogEngine);
