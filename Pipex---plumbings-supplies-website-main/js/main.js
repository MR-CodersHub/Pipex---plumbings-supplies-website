/* ==========================================================================
   Pipex - Main Interactive Application Logic
   ========================================================================== */

// Immediate execution to prevent flash of wrong theme/dir
(function() {
  const savedTheme = localStorage.getItem('plumbpro_theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  const savedDir = localStorage.getItem('plumbpro_dir') || 'ltr';
  if (savedDir === 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initHeader();
  initDrawersAndModals();
  initSearch();
  initFormValidation();
  initNewsletter();
  updateCartBadge();
  renderCartDrawer();
});

// Header Sticky Scroll Effect
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Drawer & Modal Controller
function initDrawersAndModals() {
  // Mobile Nav Drawer Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileDrawerClose && mobileDrawer) {
    mobileDrawerClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Quote / Cart Drawer Toggle
  const cartTriggers = document.querySelectorAll('.cart-trigger');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartClose = document.getElementById('cart-drawer-close');

  cartTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cartOverlay) {
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (cartClose && cartOverlay) {
    cartClose.addEventListener('click', () => {
      cartOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) {
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

// Global Toast Notifications
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span style="display:flex; align-items:center;">${type === 'success' ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'}</span>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Quick View Modal Popup
function openQuickView(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const modalOverlay = document.getElementById('quickview-modal');
  const modalContainer = document.getElementById('quickview-content');

  if (!modalOverlay || !modalContainer) return;

  let specsHTML = Object.entries(prod.specs).map(([key, val]) => `
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 0.5rem 0; font-weight: 600; color: var(--text-primary); width: 40%; font-size: 0.85rem;">${key}</td>
      <td style="padding: 0.5rem 0; color: var(--text-secondary); font-size: 0.85rem;">${val}</td>
    </tr>
  `).join('');

  modalContainer.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2.5rem 2rem;">
      <div style="background: var(--bg-surface-tint); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; align-items: center; justify-content: center;">
        <img src="${prod.image}" alt="${prod.name}" style="max-height: 280px; object-fit: contain;" />
      </div>
      <div>
        <div class="badge ${prod.badgeClass}" style="margin-bottom: 0.5rem;">${prod.badge}</div>
        <div style="font-size: 0.8rem; font-weight:700; color: var(--accent-blue); text-transform: uppercase;">${prod.brand}</div>
        <h3 style="margin-top: 0.25rem; margin-bottom: 0.5rem;">${prod.name}</h3>
        <div style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">$${prod.price.toFixed(2)}</div>
        <div style="font-size: 0.85rem; color: var(--accent-green); font-weight: 600; margin-bottom: 1rem;">Contractor Bulk Rate: ${prod.bulkPrice}</div>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem;">${prod.description}</p>
        
        <h5 style="margin-bottom: 0.5rem; font-size: 0.95rem;">Technical Specifications:</h5>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
          <tbody>${specsHTML}</tbody>
        </table>

        <div style="display: flex; gap: 1rem; align-items: center;">
          <input type="number" id="modal-qty" value="10" min="1" style="width: 70px; padding: 0.6rem; border-radius: var(--radius-md); border: 1.5px solid var(--border-color); text-align: center; font-weight: 700;" />
          <button class="btn btn-primary" onclick="addToQuoteCart('${prod.id}', parseInt(document.getElementById('modal-qty').value)); closeQuickView();" style="flex-grow: 1;">+ Add to Bulk Quote</button>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modalOverlay = document.getElementById('quickview-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Search Modal Functionality
function initSearch() {
  const searchBtns = document.querySelectorAll('.search-trigger');
  const searchModal = document.getElementById('search-modal');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('global-search-input');
  const searchResults = document.getElementById('global-search-results');

  searchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (searchModal) {
        searchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (searchInput) searchInput.focus();
      }
    });
  });

  if (searchClose && searchModal) {
    searchClose.addEventListener('click', () => {
      searchModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        searchResults.innerHTML = '<p style="text-align:center; color: var(--text-muted); padding: 2rem;">Type to search pipes, fittings, faucets, valves, water tanks...</p>';
        return;
      }

      const filtered = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) || 
        p.categoryName.toLowerCase().includes(q)
      );

      if (filtered.length === 0) {
        searchResults.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 2rem;">No plumbing materials found matching "${q}".</p>`;
      } else {
        searchResults.innerHTML = filtered.map(p => `
          <div style="display:flex; align-items:center; justify-content:space-between; padding: 0.85rem; border-bottom: 1px solid var(--border-subtle); cursor:pointer;" onclick="openQuickView('${p.id}'); closeSearchModal();">
            <div style="display:flex; align-items:center; gap: 1rem;">
              <img src="${p.image}" style="width: 45px; height: 45px; object-fit:contain; border-radius:6px; background:var(--bg-surface-tint);" />
              <div>
                <div style="font-weight:700; font-size:0.9rem; color:var(--text-primary);">${p.name}</div>
                <div style="font-size:0.75rem; color:var(--accent-blue); font-weight:600;">${p.brand} • ${p.categoryName}</div>
              </div>
            </div>
            <div style="font-weight:800; color:var(--text-primary); font-size:0.95rem;">$${p.price.toFixed(2)}</div>
          </div>
        `).join('');
      }
    });
  }
}

function closeSearchModal() {
  const searchModal = document.getElementById('search-modal');
  if (searchModal) {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Form Validation Handlers
function initFormValidation() {
  const contactForm = document.getElementById('store-enquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('input-name')?.value;
      const phone = document.getElementById('input-phone')?.value;
      const email = document.getElementById('input-email')?.value;

      if (!name || !phone || !email) {
        showToast('Please fill out all required fields.', 'info');
        return;
      }

      showToast('Thank you! Your quotation enquiry has been sent to our sales team.', 'success');
      contactForm.reset();
    });
  }

  const quoteForm = document.getElementById('cart-submit-quote');
  if (quoteForm) {
    quoteForm.addEventListener('click', () => {
      if (cartItems.length === 0) {
        showToast('Please add products to your quote list first.', 'info');
        return;
      }
      showToast('Bulk Quotation Request submitted! A sales representative will contact you with wholesale pricing within 2 hours.', 'success');
      cartItems = [];
      updateCartStorage();
      const cartOverlay = document.getElementById('cart-drawer-overlay');
      if (cartOverlay) cartOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
}

// Newsletter Subscription Logic
function initNewsletter() {
  // Role selector pills
  document.querySelectorAll('.newsletter-role-pill').forEach(pill => {
    pill.addEventListener('click', function() {
      const container = this.closest('.newsletter-role-select');
      if (container) {
        container.querySelectorAll('.newsletter-role-pill').forEach(p => p.classList.remove('active'));
      }
      this.classList.add('active');
      const radio = this.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Newsletter form submission
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('.newsletter-input');
      if (!emailInput || !emailInput.value.trim() || !emailInput.value.includes('@')) {
        showToast('Please enter a valid business email address.', 'info');
        return;
      }

      showToast('🎉 Subscribed! Your 10% wholesale discount code & monthly price index have been sent to your inbox.', 'success');
      form.reset();
      const firstPill = form.querySelector('.newsletter-role-pill');
      if (firstPill) firstPill.click();
    });
  });
}

// Theme Controller (Light / Dark Mode)
function initTheme() {
  const savedTheme = localStorage.getItem('plumbpro_theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  applyTheme(savedTheme);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('plumbpro_theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  updateThemeIcons(theme);
}

function updateThemeIcons(theme) {
  const moonSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  const sunSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.innerHTML = theme === 'dark' ? sunSvg : moonSvg;
    btn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
}

// RTL (Right-to-Left) Controller
function initRTL() {
  const savedDir = localStorage.getItem('plumbpro_dir') || 'ltr';
  applyDir(savedDir);

  document.querySelectorAll('.rtl-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDir(newDir);
      localStorage.setItem('plumbpro_dir', newDir);
    });
  });
}

function applyDir(dir) {
  if (dir === 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.removeAttribute('dir');
  }
  updateRTLButtons(dir);
}

function updateRTLButtons(dir) {
  document.querySelectorAll('.rtl-toggle').forEach(btn => {
    if (dir === 'rtl') {
      btn.classList.add('active');
      btn.innerHTML = `<span>LTR</span>`;
      btn.title = 'Switch to LTR (Left-to-Right)';
    } else {
      btn.classList.remove('active');
      btn.innerHTML = `<span>RTL</span>`;
      btn.title = 'Switch to RTL (Right-to-Left)';
    }
  });
}


