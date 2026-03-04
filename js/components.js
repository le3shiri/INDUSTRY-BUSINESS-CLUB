/**
 * IBC Component System
 * Centralized reusable components for the Fluxence platform.
 */

const Components = {
    // Shared path helpers
    getPathContext: function () {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        const isAdmin = path.includes('/admin/');
        return { path, page, isAdmin };
    },

    /**
     * User Sidebar Component
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
                    <div class="sidebar-group-title">Dashboard</div>
                    <a href="dashboard.html" class="nav-item ${activePage === 'dashboard.html' ? 'active' : ''}"><i class="fas fa-home"></i> <span>Dashboard</span></a>
    
                    <div class="sidebar-group-title">Marketplace</div>
                    <a href="search.html" class="nav-item ${activePage === 'search.html' ? 'active' : ''}"><i class="fas fa-search"></i> <span>Search Items</span></a>
                    <a href="create-listing.html" class="nav-item ${activePage === 'create-listing.html' ? 'active' : ''}"><i class="fas fa-plus-circle"></i> <span>New Listing</span></a>
                    
                    <div class="sidebar-group-title">Transactions</div>
                    <a href="negotiations.html" class="nav-item ${activePage === 'negotiations.html' ? 'active' : ''}"><i class="fas fa-handshake"></i> <span>Active Deals</span></a>
                    <a href="order-tracking.html" class="nav-item ${activePage === 'order-tracking.html' ? 'active' : ''}"><i class="fas fa-truck-ramp-box"></i> <span>Order Tracking</span></a>
    
                    <div class="sidebar-group-title">Communication</div>
                    <a href="support-tickets.html" class="nav-item ${activePage === 'support-tickets.html' ? 'active' : ''}"><i class="fas fa-ticket-alt"></i> <span>Support Tickets</span></a>
                    <a href="notifications.html" class="nav-item ${activePage === 'notifications.html' ? 'active' : ''}"><i class="fas fa-bell"></i> <span>Notifications</span></a>
                    
                    <div class="sidebar-group-title">Account</div>
                    <a href="account-settings.html" class="nav-item ${activePage === 'account-settings.html' ? 'active' : ''}"><i class="fas fa-user-cog"></i> <span>Account Settings</span></a>
                </nav>
    
                <div style="margin-top: auto; padding: 1rem 1.5rem; border-top: 1px solid var(--border-color);">
                    <div class="sidebar-group-title" style="margin-left: 0; margin-bottom: 0.5rem; padding-left: 0;">Support</div>
                    <a href="help-center.html" class="nav-item" style="color: var(--text-secondary); text-decoration: none; display: flex; align-items: center; gap: 0.75rem; font-size: 0.9rem; padding-left: 0;">
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
     * Admin Sidebar Component
     * @param {string} activePage - The ID or href of the active navigation item
     */
    renderAdminSidebar: function (activePage = 'admin-dashboard.html') {
        const sidebarHTML = `
            <div class="sidebar-header" style="padding: 1.5rem 1.25rem;">
                <svg class="sidebar-logo" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" stroke="var(--primary-color)" stroke-width="6" />
                    <path d="M35 50L45 60L65 40" stroke="var(--text-primary)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div style="display: flex; flex-direction: column;">
                    <h2 style="font-size: 1rem; font-weight: 800; color: var(--text-primary); margin: 0; letter-spacing: -0.5px; line-height: 1;">Fluxence</h2>
                    <span style="color: var(--primary-color); font-size: 0.6rem; font-weight: 700; text-transform: uppercase; margin-top: 2px;">Admin Console</span>
                </div>
            </div>

            <nav class="nav-links">
                
                <!-- DROPDOWN: DASHBOARD -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-home"></i> <span>Tableau de bord</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-dashboard.html" class="nav-item ${activePage.includes('admin-dashboard') ? 'active' : ''}">Overview</a>
                    <a href="admin-intelligence.html" class="nav-item ${activePage.includes('admin-intelligence') ? 'active' : ''}">Statistiques</a>
                    <a href="admin-activity.html" class="nav-item ${activePage.includes('admin-activity') ? 'active' : ''}">Activité récente</a>
                </div>

                <!-- DROPDOWN: UTILISATEURS -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-users"></i> <span>Utilisateurs</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-users.html" class="nav-item ${activePage.includes('admin-users') ? 'active' : ''}">Liste des utilisateurs</a>
                    <a href="admin-companies.html" class="nav-item ${activePage.includes('admin-companies') ? 'active' : ''}">Entreprises</a>
                    <a href="admin-kyc.html" class="nav-item ${activePage.includes('admin-kyc') ? 'active' : ''}">Vérification KYC</a>
                    <a href="admin-suspended.html" class="nav-item ${activePage.includes('admin-suspended') ? 'active' : ''}">Comptes suspendus</a>
                    <a href="admin-settings.html" class="nav-item">Permissions / Rôles</a>
                </div>

                <!-- DROPDOWN: VENDEURS -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-store"></i> <span>Gestion Vendeurs</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-sellers.html" class="nav-item ${activePage.includes('admin-sellers') ? 'active' : ''}">Liste des vendeurs</a>
                    <a href="admin-seller-requests.html" class="nav-item ${activePage.includes('admin-seller-requests') ? 'active' : ''}">Demandes d'inscription</a>
                    <a href="admin-company-verification.html" class="nav-item ${activePage.includes('admin-company-verification') ? 'active' : ''}">Vérification entreprise</a>
                    <a href="admin-posts.html" class="nav-item ${activePage.includes('admin-posts') ? 'active' : ''}">Stocks publiés</a>
                    <a href="admin-revenue.html" class="nav-item ${activePage.includes('admin-revenue') ? 'active' : ''}">Historique ventes</a>
                </div>

                <!-- DROPDOWN: ACHETEURS -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-shopping-cart"></i> <span>Gestion Acheteurs</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-buyers.html" class="nav-item ${activePage.includes('admin-buyers') ? 'active' : ''}">Liste des acheteurs</a>
                    <a href="admin-buyer-history.html" class="nav-item ${activePage.includes('admin-buyer-history') ? 'active' : ''}">Historique achats</a>
                </div>

                <!-- DROPDOWN: PRODUITS -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-boxes"></i> <span>Produits & Stocks</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-all-stocks.html" class="nav-item ${activePage.includes('admin-all-stocks') ? 'active' : ''}">Tous les stocks</a>
                    <a href="admin-add-stock.html" class="nav-item ${activePage.includes('admin-add-stock') ? 'active' : ''}">Ajouter stock (Admin)</a>
                    <a href="admin-validate-posts.html" class="nav-item ${activePage.includes('admin-validate-posts') ? 'active' : ''}">Validation annonces</a>
                    <a href="admin-refused-posts.html" class="nav-item ${activePage.includes('admin-refused-posts') ? 'active' : ''}">Annonces refusées</a>
                    <a href="admin-reported-posts.html" class="nav-item ${activePage.includes('admin-reported-posts') ? 'active' : ''}">Annonces signalées</a>
                </div>

                <!-- DROPDOWN: TRANSACTIONS -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-handshake"></i> <span>Transactions</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-active-deals.html" class="nav-item ${activePage.includes('admin-active-deals') ? 'active' : ''}">Deals en cours</a>
                    <a href="admin-validated-deals.html" class="nav-item ${activePage.includes('admin-validated-deals') ? 'active' : ''}">Deals validés</a>
                    <a href="admin-cancelled-deals.html" class="nav-item ${activePage.includes('admin-cancelled-deals') ? 'active' : ''}">Deals annulés</a>
                    <a href="admin-transactions.html" class="nav-item ${activePage.includes('admin-transactions') ? 'active' : ''}">Historique transactions</a>
                </div>

                <!-- DROPDOWN: OFFRES -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-comments-dollar"></i> <span>Gestion Offres</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-offers-sent.html" class="nav-item ${activePage.includes('admin-offers-sent') ? 'active' : ''}">Offres envoyées</a>
                    <a href="admin-offers-accepted.html" class="nav-item ${activePage.includes('admin-offers-accepted') ? 'active' : ''}">Offres acceptées</a>
                    <a href="admin-offers-refused.html" class="nav-item ${activePage.includes('admin-offers-refused') ? 'active' : ''}">Offres refusées</a>
                </div>

                <!-- DROPDOWN: PAIEMENTS -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-credit-card"></i> <span>Finance</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-received-payments.html" class="nav-item ${activePage.includes('admin-received-payments') ? 'active' : ''}">Paiements reçus</a>
                    <a href="admin-pending-payments.html" class="nav-item ${activePage.includes('admin-pending-payments') ? 'active' : ''}">Paiements en attente</a>
                    <a href="admin-seller-payouts.html" class="nav-item ${activePage.includes('admin-seller-payouts') ? 'active' : ''}">Reversement vendeurs</a>
                    <a href="admin-commissions.html" class="nav-item ${activePage.includes('admin-commissions') ? 'active' : ''}">Commissions</a>
                </div>

                <!-- DROPDOWN: LOGISTIQUE -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-truck"></i> <span>Logistique</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-shipments.html" class="nav-item ${activePage.includes('admin-shipments') ? 'active' : ''}">Expéditions</a>
                    <a href="admin-delivery-tracking.html" class="nav-item ${activePage.includes('admin-delivery-tracking') ? 'active' : ''}">Suivi livraison</a>
                </div>

                <!-- DROPDOWN: FACTURATION -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-file-invoice"></i> <span>Facturation</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-customer-invoices.html" class="nav-item ${activePage.includes('admin-customer-invoices') ? 'active' : ''}">Factures clients</a>
                    <a href="admin-seller-invoices.html" class="nav-item ${activePage.includes('admin-seller-invoices') ? 'active' : ''}">Factures vendeurs</a>
                    <a href="admin-invoice-generation.html" class="nav-item ${activePage.includes('admin-invoice-generation') ? 'active' : ''}">Génération facture</a>
                    <a href="admin-billing-history.html" class="nav-item ${activePage.includes('admin-billing-history') ? 'active' : ''}">Historique</a>
                </div>

                <!-- DROPDOWN: LITIGES & SUPPORT -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-exclamation-triangle"></i> <span>Litiges & support</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-claims.html" class="nav-item ${activePage.includes('admin-claims') ? 'active' : ''}">Réclamations</a>
                    <a href="admin-mediation.html" class="nav-item ${activePage.includes('admin-mediation') ? 'active' : ''}">Médiation</a>
                    <a href="admin-support-tickets.html" class="nav-item ${activePage.includes('admin-support-tickets') ? 'active' : ''}">Tickets support</a>
                    <a href="admin-messages.html" class="nav-item ${activePage.includes('admin-messages') ? 'active' : ''}">Messages utilisateurs</a>
                </div>

                <!-- DROPDOWN: CATALOGUE -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-tag"></i> <span>Catalogue</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-categories.html" class="nav-item ${activePage.includes('admin-categories') ? 'active' : ''}">Catégories</a>
                    <a href="admin-subcategories.html" class="nav-item ${activePage.includes('admin-subcategories') ? 'active' : ''}">Sous catégories</a>
                    <a href="admin-product-types.html" class="nav-item ${activePage.includes('admin-product-types') ? 'active' : ''}">Types produits</a>
                    <a href="admin-units.html" class="nav-item ${activePage.includes('admin-units') ? 'active' : ''}">Unités de mesure</a>
                </div>

                <!-- DROPDOWN: PARAMETRES -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-cog"></i> <span>Paramètres</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-settings.html" class="nav-item ${activePage.includes('admin-settings') ? 'active' : ''}">Configuration plateforme</a>
                    <a href="admin-roles.html" class="nav-item ${activePage.includes('admin-roles') ? 'active' : ''}">Permissions & Rôles</a>
                    <a href="admin-commission-settings.html" class="nav-item ${activePage.includes('admin-commission-settings') ? 'active' : ''}">Commissions</a>
                    <a href="admin-payment-methods.html" class="nav-item ${activePage.includes('admin-payment-methods') ? 'active' : ''}">Modes de paiement</a>
                    <a href="admin-notifications.html" class="nav-item ${activePage.includes('admin-notifications') ? 'active' : ''}">Notifications</a>
                    <a href="admin-legal.html" class="nav-item ${activePage.includes('admin-legal') ? 'active' : ''}">CGU / Politique</a>
                </div>

                <!-- DROPDOWN: SECURITE -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-shield-halved"></i> <span>Sécurité</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-security-logs.html" class="nav-item ${activePage.includes('admin-security-logs') ? 'active' : ''}">Logs système</a>
                    <a href="admin-security-suspicious.html" class="nav-item ${activePage.includes('admin-security-suspicious') ? 'active' : ''}">Activité suspecte</a>
                    <a href="admin-security-fraud.html" class="nav-item ${activePage.includes('admin-security-fraud') ? 'active' : ''}">Tentatives fraude</a>
                </div>

                <!-- DROPDOWN: NOTIFICATIONS ADMIN -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-bell"></i> <span>Notifications admin</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-notif-center.html" class="nav-item ${activePage.includes('admin-notif-center') ? 'active' : ''}">Centre notifications</a>
                    <a href="admin-platform-alerts.html" class="nav-item ${activePage.includes('admin-platform-alerts') ? 'active' : ''}">Alertes plateforme</a>
                </div>

                <!-- DROPDOWN: RAPPORTS -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-chart-bar"></i> <span>Rapports</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-report-sales.html" class="nav-item ${activePage.includes('admin-report-sales') ? 'active' : ''}">Rapport ventes</a>
                    <a href="admin-report-commissions.html" class="nav-item ${activePage.includes('admin-report-commissions') ? 'active' : ''}">Rapport commissions</a>
                    <a href="admin-report-users.html" class="nav-item ${activePage.includes('admin-report-users') ? 'active' : ''}">Rapport utilisateurs</a>
                    <a href="admin-export-data.html" class="nav-item ${activePage.includes('admin-export-data') ? 'active' : ''}">Export données</a>
                </div>

                <!-- DROPDOWN: ANALYTICS -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-chart-line"></i> <span>Analytics</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-analytics-sales.html" class="nav-item ${activePage.includes('admin-analytics-sales') ? 'active' : ''}">Ventes plateforme</a>
                    <a href="admin-analytics-sellers.html" class="nav-item ${activePage.includes('admin-analytics-sellers') ? 'active' : ''}">Performance vendeurs</a>
                    <a href="admin-analytics-products.html" class="nav-item ${activePage.includes('admin-analytics-products') ? 'active' : ''}">Produits populaires</a>
                    <a href="admin-analytics-activity.html" class="nav-item ${activePage.includes('admin-analytics-activity') ? 'active' : ''}">Activité utilisateurs</a>
                </div>

                <!-- DROPDOWN: FICHIERS -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-file-shield"></i> <span>Gestion Fichiers</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-docs-kyc.html" class="nav-item ${activePage.includes('admin-docs-kyc') ? 'active' : ''}">Documents KYC</a>
                    <a href="admin-docs-company.html" class="nav-item ${activePage.includes('admin-docs-company') ? 'active' : ''}">Documents entreprises</a>
                    <a href="admin-docs-products.html" class="nav-item ${activePage.includes('admin-docs-products') ? 'active' : ''}">Documents produits</a>
                </div>

                <!-- DROPDOWN: ACCES -->
                <div class="nav-item nav-item-dropdown-trigger open" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('active')">
                    <div style="display: flex; align-items: center; gap: 0.85rem;"><i class="fas fa-key"></i> <span>Gestion accès</span></div>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="nav-dropdown active">
                    <a href="admin-invite-links.html" class="nav-item ${activePage.includes('admin-invite-links') ? 'active' : ''}">Liens d’invitation</a>
                    <a href="admin-invites-sent.html" class="nav-item ${activePage.includes('admin-invites-sent') ? 'active' : ''}">Invitations envoyées</a>
                    <a href="admin-invited-users.html" class="nav-item ${activePage.includes('admin-invited-users') ? 'active' : ''}">Utilisateurs invités</a>
                    <a href="admin-invites-expired.html" class="nav-item ${activePage.includes('admin-invites-expired') ? 'active' : ''}">Invitations expirées</a>
                </div>

            </nav>

            <div style="margin-top: auto; padding-bottom: 0.5rem; background: var(--white); border-top: 1px solid var(--border-color);">
                <a href="${activePage.startsWith('admin-') ? '../' : ''}dashboard.html" class="nav-item" style="font-size: 0.8rem; opacity: 0.7;">
                    <i class="fas fa-reply-all" style="font-size: 0.75rem;"></i> <span>Portail Client</span>
                </a>
                
                <div class="user-profile-mini" style="margin: 0.5rem 1rem 1rem 1rem; padding: 0.75rem; background: var(--border-light); border-radius: 12px; border-top: none;">
                    <div style="width: 32px; height: 32px; background: var(--primary-color); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--white); font-weight: 800; font-size: 0.8rem; box-shadow: 0 4px 12px rgba(0, 177, 64, 0.2);">
                        AD
                    </div>
                    <div style="overflow: hidden;">
                        <p style="margin: 0; font-weight: 700; font-size: 0.8rem; color: var(--text-primary);">Super Admin</p>
                        <p style="margin: 0; font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Root Access</p>
                    </div>
                </div>
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
    // Determine active page
    const { page, isAdmin } = Components.getPathContext();

    if (document.getElementById('sidebar-container')) {
        if (isAdmin || page.startsWith('admin-')) {
            Components.renderAdminSidebar(page);
            // Update badges
            if (typeof AdminData !== 'undefined') {
                const stats = AdminData.getStats();
                const postsBadge = document.getElementById('pending-posts-badge');
                if (postsBadge && stats.pendingPosts > 0) {
                    postsBadge.textContent = stats.pendingPosts;
                    postsBadge.style.display = 'flex';
                }
            }
        } else {
            Components.renderSidebar(page);
        }
    }

    if (document.getElementById('footer-container')) {
        Components.renderFooter();
    }

    // Initialize Components
});
