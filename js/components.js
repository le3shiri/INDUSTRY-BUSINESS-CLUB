/**
 * IBC Component System
 * Centralized reusable components for the Fluxence platform.
 */

const Components = {
    /**
     * Sidebar Component
     * @param {string} activePage - The ID or href of the active navigation item
     */
    renderSidebar: function (activePage = 'dashboard.html') {
        const sidebarHTML = `
            <div class="sidebar-header">
                <svg class="sidebar-logo" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" stroke="var(--primary-color)" stroke-width="6" />
                    <path d="M35 50L45 60L65 40" stroke="var(--text-primary)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0; letter-spacing: -0.5px;">Fluxence</h2>
            </div>

            <nav class="nav-links">
                <a href="dashboard.html" class="nav-item ${activePage === 'dashboard.html' ? 'active' : ''}"><i class="fas fa-home"></i> <span>Dashboard</span></a>
                <a href="search.html" class="nav-item ${activePage === 'search.html' ? 'active' : ''}"><i class="fas fa-search"></i> <span>Search</span></a>
                <a href="create-listing-step1.html" class="nav-item ${activePage === 'create-listing-step1.html' ? 'active' : ''}"><i class="fas fa-box-open"></i> <span>Sell Items</span></a>
                <a href="negotiations.html" class="nav-item ${activePage === 'negotiations.html' ? 'active' : ''}"><i class="fas fa-handshake"></i> <span>Deals</span></a>
                <a href="messages-hub.html" class="nav-item ${activePage === 'messages-hub.html' ? 'active' : ''}"><i class="fas fa-comment-alt"></i> <span>Messages</span></a>
                <a href="company-directory.html" class="nav-item ${activePage === 'company-directory.html' ? 'active' : ''}"><i class="fas fa-building"></i> <span>Companies</span></a>
                <a href="profile-settings.html" class="nav-item ${activePage === 'profile-settings.html' ? 'active' : ''}"><i class="fas fa-user-circle"></i> <span>Profile</span></a>
            </nav>

            <div style="margin-top: auto; padding: 1rem 1.5rem; border-top: 1px solid var(--border-color);">
                <a href="help-center.html" class="nav-item" style="color: var(--text-secondary); text-decoration: none; display: flex; align-items: center; gap: 0.75rem; font-size: 0.9rem;">
                    <i class="fas fa-question-circle"></i> <span>Help Center</span>
                </a>
            </div>

            <div class="user-profile-mini" onclick="window.location.href='index.html'">
                <div style="width: 40px; height: 40px; background: var(--primary-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary-color); font-weight: 700;">
                    AC
                </div>
                <div>
                    <p style="margin: 0; font-weight: 600; font-size: 0.9rem;">Acme Corp</p>
                    <p style="margin: 0; font-size: 0.75rem; color: var(--text-secondary);">Enterprise Plan</p>
                </div>
                <i class="fas fa-sign-out-alt" style="margin-left: auto; color: var(--text-secondary);"></i>
            </div>
        `;
        const container = document.getElementById('sidebar-container');
        if (container) {
            container.innerHTML = sidebarHTML;
            container.className = 'sidebar';
        }
    },

    /**
     * Footer Component
     */
    renderFooter: function () {
        const footerHTML = `
            <footer class="site-footer">
                <div class="footer-grid">
                    <div class="footer-col">
                        <div class="footer-logo">
                            <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="45" stroke="var(--primary-color)" stroke-width="8" />
                                <path d="M35 50L45 60L65 40" stroke="var(--pure-black)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Fluxence
                        </div>
                        <p class="text-secondary" style="font-size: 0.9rem;">The premium B2B marketplace for industrial procurement, raw materials, and machinery in North Africa.</p>
                    </div>
                    <div class="footer-col">
                        <h4 class="footer-title">Marketplace</h4>
                        <a href="search.html" class="footer-link">Search Materials</a>
                        <a href="search.html" class="footer-link">Find Machinery</a>
                        <a href="search.html" class="footer-link">Industrial Services</a>
                        <a href="register-step1.html" class="footer-link">Start Selling</a>
                    </div>
                    <div class="footer-col">
                        <h4 class="footer-title">Company</h4>
                        <a href="#" class="footer-link">About Us</a>
                        <a href="#" class="footer-link">Verified Sellers</a>
                        <a href="#" class="footer-link">Contact Support</a>
                        <a href="#" class="footer-link">Careers</a>
                    </div>
                    <div class="footer-col">
                        <h4 class="footer-title">Legal</h4>
                        <a href="#" class="footer-link">Terms of Service</a>
                        <a href="#" class="footer-link">Privacy Policy</a>
                        <a href="#" class="footer-link">Escrow Safety</a>
                        <a href="#" class="footer-link">Cookie Policy</a>
                    </div>
                </div>
                <div style="max-width: 1200px; margin: 3rem auto 0 auto; padding-top: 1.5rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <p class="text-muted" style="font-size: 0.85rem;">&copy; 2026 Fluxence (Industry Business Club). All rights reserved.</p>
                    <div style="display: flex; gap: 1.5rem; color: var(--text-secondary);">
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </footer>
        `;
        const container = document.getElementById('footer-container');
        if (container) {
            container.innerHTML = footerHTML;
        }
    },

    /**
     * Breadcrumbs Component
     * @param {Array} items - Array of {label, href} objects
     */
    renderBreadcrumbs: function (items = []) {
        let breadcrumbsHTML = `<nav class="breadcrumbs">`;
        items.forEach((item, index) => {
            if (index < items.length - 1) {
                breadcrumbsHTML += `<a href="${item.href}">${item.label}</a><span class="breadcrumb-sep"><i class="fas fa-chevron-right"></i></span>`;
            } else {
                breadcrumbsHTML += `<span style="color: var(--text-primary); font-weight: 600;">${item.label}</span>`;
            }
        });
        breadcrumbsHTML += `</nav>`;

        const container = document.getElementById('breadcrumbs-container');
        if (container) {
            container.innerHTML = breadcrumbsHTML;
        }
    },

    /**
     * Material Card Component
     */
    renderMaterialCard: function (data) {
        return `
            <article class="material-card" style="box-shadow: var(--shadow-sm); border-color: var(--border-color);">
                ${data.condition ? `<div class="condition-badge" style="background: var(--white); color: var(--text-primary); border: 1px solid var(--border-color);">${data.condition}</div>` : ''}
                <div class="card-img-container" style="background: var(--border-light);">
                    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--primary-color);">
                        <i class="fas ${data.icon || 'fa-box'} fa-3x"></i>
                    </div>
                </div>
                <div class="card-body">
                    <div class="rating">
                        <i class="fas fa-star"></i> <span>${data.rating || 'N/A'}</span>
                    </div>
                    <h3 class="card-title">${data.title}</h3>
                    <p class="card-desc">${data.description}</p>
                    <div class="card-meta" style="border-top: 1px solid var(--border-light);">
                        <div>
                            <div class="price">${data.price}</div>
                            <div class="qty">${data.unit || ''}</div>
                        </div>
                        <button class="btn btn-primary" style="width: auto; padding: 0.5rem 1.5rem;" onclick="window.location.href='${data.link || 'product-detail.html'}'">View Item</button>
                    </div>
                </div>
            </article>
        `;
    },

    /**
     * Skeleton Card Component
     * Used for loading states
     */
    renderSkeletonCard: function () {
        return `
            <article class="material-card skeleton" style="box-shadow: var(--shadow-sm); border-color: var(--border-color); overflow: hidden;">
                <div class="skeleton-shimmer" style="height: 160px; background: var(--border-light);"></div>
                <div class="card-body">
                    <div class="skeleton-shimmer" style="height: 12px; width: 40px; margin-bottom: 1rem;"></div>
                    <div class="skeleton-shimmer" style="height: 20px; width: 80%; margin-bottom: 0.5rem;"></div>
                    <div class="skeleton-shimmer" style="height: 14px; width: 100%; margin-bottom: 0.5rem;"></div>
                    <div class="skeleton-shimmer" style="height: 14px; width: 60%; margin-bottom: 1.5rem;"></div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 1rem;">
                        <div class="skeleton-shimmer" style="height: 24px; width: 100px;"></div>
                        <div class="skeleton-shimmer" style="height: 36px; width: 120px; border-radius: 8px;"></div>
                    </div>
                </div>
            </article>
        `;
    },

    /**
     * Global Command Palette
     */
    initCommandPalette: function () {
        const overlay = document.createElement('div');
        overlay.className = 'command-palette-overlay';
        overlay.id = 'command-palette';
        overlay.innerHTML = `
            <div class="command-palette-box">
                <div class="command-palette-header">
                    <i class="fas fa-terminal" style="color: var(--primary-color);"></i>
                    <input type="text" id="command-input" placeholder="Search pages, tools, or companies... (Esc to close)" autocomplete="off">
                </div>
                <div class="command-palette-results" id="command-results">
                    <div class="command-item" onclick="window.location.href='dashboard.html'"><i class="fas fa-home"></i> <span>Dashboard</span> <kbd>G + D</kbd></div>
                    <div class="command-item" onclick="window.location.href='search.html'"><i class="fas fa-search"></i> <span>Search Materials</span> <kbd>G + S</kbd></div>
                    <div class="command-item" onclick="window.location.href='negotiations.html'"><i class="fas fa-handshake"></i> <span>Active Deals</span> <kbd>G + N</kbd></div>
                    <div class="command-item" onclick="window.location.href='create-listing-step1.html'"><i class="fas fa-plus"></i> <span>Create New Listing</span> <kbd>C + L</kbd></div>
                    <div class="command-item" onclick="window.location.href='profile-settings.html'"><i class="fas fa-cog"></i> <span>Account Settings</span> <kbd>G + P</kbd></div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        const input = document.getElementById('command-input');

        window.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                overlay.classList.toggle('active');
                if (overlay.classList.contains('active')) input.focus();
            }
            if (e.key === 'Escape') overlay.classList.remove('active');
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });
    },

    /**
     * Negotiation Card Component
     */
    renderNegotiationCard: function (data) {
        const statusColors = {
            'Ongoing': 'var(--primary-color)',
            'Completed': 'var(--success-color)',
            'Offer Received': '#f59e0b',
            'Final Offer': '#6366f1'
        };
        const statusColor = statusColors[data.status] || '#94a3b8';

        return `
            <div class="negotiation-card shadow-box" style="border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <div style="width: 48px; height: 48px; background: var(--primary-light); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--primary-color); font-weight: 700;">
                            ${data.itemInitials || 'P'}
                        </div>
                        <div>
                            <h3 style="margin: 0; font-size: 1.1rem; font-weight: 700;">${data.title}</h3>
                            <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">${data.partnerType}: ${data.partnerName}</p>
                        </div>
                    </div>
                    <span class="status-badge" style="background: ${data.status === 'Completed' ? 'var(--primary-color)' : 'var(--text-primary)'}; color: var(--white); padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.75rem; font-weight: 700;">${data.status}</span>
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem; background: var(--border-light); padding: 1rem; border-radius: var(--radius-md);">
                    <div>
                        <small style="display: block; color: var(--text-secondary); margin-bottom: 0.25rem;">Last Bid</small>
                        <strong style="color: var(--text-primary);">${data.lastBid}</strong>
                    </div>
                    <div style="text-align: right;">
                        <small style="display: block; color: var(--text-secondary); margin-bottom: 0.25rem;">Updated</small>
                        <strong style="color: var(--text-primary);">${data.updated}</strong>
                    </div>
                </div>
                <button class="btn btn-secondary" style="width: 100%;" onclick="window.location.href='negotiation-room.html?id=${data.id}&role=${data.role}'">Open Room</button>
            </div>
        `;
    }
};

// Auto-initialize components if placeholders exist
document.addEventListener('DOMContentLoaded', () => {
    // Determine active page for sidebar
    const currentPath = window.location.pathname.split('/').pop() || 'dashboard.html';

    if (document.getElementById('sidebar-container')) {
        Components.renderSidebar(currentPath);
    }

    if (document.getElementById('footer-container')) {
        Components.renderFooter();
    }

    // Initialize Command Palette
    Components.initCommandPalette();
});
