/**
 * IBC Admin Data Management
 * Handles everything via localStorage for a mock-backend experience.
 */

const AdminData = {
    // Keys for localStorage
    KEYS: {
        COMPANIES: 'ibc_admin_companies',
        USERS: 'ibc_admin_users',
        DEALS: 'ibc_admin_deals',
        KYC: 'ibc_admin_kyc',
        POSTS: 'ibc_admin_posts',
        LOGS: 'ibc_admin_logs',
        SETTINGS: 'ibc_admin_settings'
    },

    // Initial Seed Data
    SEED: {
        COMPANIES: [
            { id: 1, name: 'Acme Industrial Corp', ice: '001524388000045', industry: 'Manufacturing', status: 'verified', joined: 'Jan 12, 2026', revenue: '450k' },
            { id: 2, name: 'Atlas Mining Group', ice: '002294911000018', industry: 'Raw Materials', status: 'pending', joined: 'Feb 23, 2026', revenue: '--' },
            { id: 3, name: 'Safi Logistics SA', ice: '003112299000042', industry: 'Logistics', status: 'verified', joined: 'Feb 22, 2026', revenue: '120k' },
            { id: 4, name: 'Kenitra Metals', ice: '001994433000091', industry: 'Scrap Metal', status: 'suspended', joined: 'Feb 20, 2026', revenue: '0' }
        ],
        USERS: [
            { id: 1, name: 'Omar Alami', email: 'o.alami@atlasmining.ma', company: 'Atlas Mining Group', role: 'Purchasing Manager', lastOnline: '2m ago' },
            { id: 2, name: 'Yasmine Benani', email: 'yasmine@safilogistics.ma', company: 'Safi Logistics SA', role: 'Operations Lead', lastOnline: '1h ago' },
            { id: 3, name: 'Reda Hakimi', email: 'reda@buildit.ma', company: 'BuildIt SA', role: 'CEO', lastOnline: 'Yesterday' }
        ],
        DEALS: [
            { id: 1, title: '50 Tons of Portland Cement', buyer: 'Ciment Afrique', seller: 'Atlas Cement', value: '115,000 MAD', status: 'active' },
            { id: 2, title: 'Copper Wiring Scraps', buyer: 'RecycleMetals', seller: 'BuildIt SA', value: '45,000 MAD', status: 'verified' },
            { id: 3, title: 'Aluminum Blocks', buyer: 'MetalSource', seller: 'Casablanca Steel', value: '12,500 MAD', status: 'pending' }
        ],
        KYC: [
            { id: 1, company: 'Tangier Construction', docs: ['RC', 'RIB'], date: 'Feb 25, 2026', risk: 'LOW' },
            { id: 2, company: 'Marrakech Mining', docs: ['RC', 'Tax ID'], date: 'Feb 24, 2026', risk: 'MEDIUM' }
        ],
        POSTS: [
            {
                id: 1, seller: 'Atlas Cement', title: '100T Portland Cement CPJ45',
                category: 'Matériaux de construction', price: '2,500 MAD/T', date: 'Feb 25, 2026',
                status: 'pending', description: 'Ciment Portland de haute qualité CPJ45 en sacs de 50kg. Idéal pour structures béton armé.',
                quantity: 100, unit: 'tonne', moq: 20,
                location: 'Zone Industrielle, Casablanca', incoterm: 'EXW', lead_time: '48h',
                payment_terms: 'Virement / Chèque', offer_validity: '15 jours',
                images: ['cement1.jpg', 'cement2.jpg'], has_spec_sheet: true
            },
            {
                id: 2, seller: 'Kenitra Metals', title: 'Copper Scraps Millberry 5T',
                category: 'Déchets et Recyclage', price: '45,000 MAD', date: 'Feb 25, 2026',
                status: 'pending', description: 'Cuivre Millberry pur à 99%. Décapé et prêt pour fonderie industrielles.',
                quantity: 5, unit: 'tonne', moq: 1,
                location: 'Port de Kenitra', incoterm: 'FOB', lead_time: '1 semaine',
                payment_terms: 'Lettre de Crédit', offer_validity: '7 jours',
                images: ['copper1.jpg'], has_spec_sheet: false
            },
            {
                id: 3, seller: 'BuildIt SA', title: 'Pelle Hydraulique Caterpillar 320',
                category: 'Machines et équipements lourds', price: '850,000 MAD', date: 'Feb 24, 2026',
                status: 'approved', description: 'Modèle 2021, 3500 heures au compteur. Entretien certifié Caterpillar.',
                quantity: 1, unit: 'pièce', moq: 1,
                location: 'Tanger Automotive City', incoterm: 'EXW', lead_time: 'Immédiat',
                payment_terms: 'Leasing / Virement', offer_validity: '30 jours',
                images: ['tractor1.jpg'], has_spec_sheet: true
            }
        ],
        FLAGGED: [
            { id: 101, dealId: 1, participants: 'User A x User B', reason: 'Contact Info Sharing', snippet: 'Call me at 06...', risk: 'HIGH' },
            { id: 102, dealId: 3, participants: 'User C x User D', reason: 'Off-Platform Payment', snippet: 'Transfer to the RIB directly', risk: 'MEDIUM' }
        ],
        NEGOTIATIONS: {
            1: [
                { user: 'Ciment Afrique', action: 'Opened Negotiation', price: '120,000 MAD', time: 'Feb 24, 10:00', type: 'bid' },
                { user: 'Atlas Cement', type: 'message', message: 'Hello, is this price negotiable for a bulk order?', time: 'Feb 24, 11:05' },
                { user: 'Ciment Afrique', type: 'message', message: 'We can discuss. What volume are you looking at?', time: 'Feb 24, 11:30' },
                { user: 'Atlas Cement', action: 'Counter Offer', price: '118,000 MAD', time: 'Feb 24, 14:20', type: 'bid' },
                { user: 'Ciment Afrique', type: 'message', message: 'That is much better. Can you include transport?', time: 'Feb 24, 16:00' },
                { user: 'Atlas Cement', type: 'message', message: 'Transport is extra. My final proposal is below.', time: 'Feb 25, 08:30' },
                { user: 'Ciment Afrique', action: 'Counter Offer', price: '115,000 MAD', time: 'Feb 25, 09:15', type: 'bid' }
            ],
            2: [
                { user: 'RecycleMetals', action: 'Accepted Offer', price: '45,000 MAD', time: 'Feb 25, 11:00', type: 'bid' }
            ],
            3: [
                { user: 'User C', type: 'message', message: 'I want to pay outside the platform to avoid fees.', time: 'Feb 25, 14:00' },
                { user: 'User D', type: 'message', message: 'Transfer to the RIB directly: 00123...456', time: 'Feb 25, 14:05' }
            ]
        },
        LOGS: [
            { id: 1, message: 'Acme Corp placed a bid on "Steel Rebars"', time: 'Just now', type: 'info' },
            { id: 2, message: 'Deal Completed between Atlas and BuildIt', time: '14m ago', type: 'success' },
            { id: 3, message: 'Flagged Msg: Potential off-platform mention', time: '42m ago', type: 'error' }
        ],
        PAYMENTS: [
            { id: 'PAY-101', company: 'Acme Corp', amount: '25,000 MAD', date: 'Just now', status: 'completed', type: 'Credit' },
            { id: 'PAY-102', company: 'Safi Logistics', amount: '120,000 MAD', date: '2h ago', status: 'pending', type: 'Payout' },
            { id: 'PAY-103', company: 'Atlas Cement', amount: '8,500 MAD', date: '5h ago', status: 'failed', type: 'Fee' }
        ],
        RECENT_ACTIVITY: [
            { user: 'Omar Alami', action: 'Nouvelle inscription', time: '5m ago', type: 'signup' },
            { user: 'Acme Corp', action: 'Nouvelle annonce: Acier Barre', time: '12m ago', type: 'post' },
            { user: 'Atlas Cement', action: 'Offre d\'achat sur "Sable"', time: '25m ago', type: 'bid' },
            { user: 'Safi Logistics', action: 'Paiement de 4,500 MAD reçu', time: '1h ago', type: 'payment' }
        ],
        RANKINGS: {
            topSellers: [
                { name: 'Atlas Cement', deals: 42, volume: '1.2M MAD' },
                { name: 'Acme Industrial', deals: 38, volume: '950k MAD' },
                { name: 'BuildIt SA', deals: 25, volume: '450k MAD' }
            ],
            topCategories: [
                { name: 'BTP & Construction', growth: '+15%' },
                { name: 'Métaux & Mines', growth: '+8%' },
                { name: 'Énergie', growth: '+22%' }
            ]
        },
        INTELLIGENCE: {
            timeToClose: '3.4 Jours',
            conversionRate: '24.5%',
            avgBids: '5.2',
            topCategories: [
                { name: 'Matériaux BTP', value: '850,000 MAD', deals: 12, color: '#00B140' },
                { name: 'Matières premières', color: '#6366f1', value: '420,000 MAD', deals: 8 },
                { name: 'Machines Industrielles', color: '#1e293b', value: '1.2M MAD', deals: 3 }
            ],
            riskWatch: [
                { name: 'Kenitra Metals', flags: 14, status: 'suspended', risk: 'CRITIQUE' },
                { name: 'Atlas Mining Group', flags: 3, status: 'actif', risk: 'FAIBLE' },
                { name: 'Safi Logistics', flags: 0, status: 'actif', risk: 'AUCUN' }
            ],
            monthlyGmv: [400, 600, 800, 1200, 900, 2400],
            monthlyTransactions: [45, 52, 68, 85, 72, 110],
            newSignups: [12, 18, 25, 30, 22, 45]
        }
    },

    /**
     * Initialize data if not present
     */
    init: function () {
        if (!localStorage.getItem(this.KEYS.COMPANIES)) {
            localStorage.setItem(this.KEYS.COMPANIES, JSON.stringify(this.SEED.COMPANIES));
            localStorage.setItem(this.KEYS.USERS, JSON.stringify(this.SEED.USERS));
            localStorage.setItem(this.KEYS.DEALS, JSON.stringify(this.SEED.DEALS));
            localStorage.setItem(this.KEYS.KYC, JSON.stringify(this.SEED.KYC));
            localStorage.setItem(this.KEYS.POSTS, JSON.stringify(this.SEED.POSTS));
            localStorage.setItem(this.KEYS.LOGS, JSON.stringify(this.SEED.LOGS));
        }
    },

    // --- Data Getters ---
    getData: function (key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    },

    saveData: function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    // --- Specific Actions ---
    updateCompanyStatus: function (id, newStatus) {
        const companies = this.getData(this.KEYS.COMPANIES);
        const index = companies.findIndex(c => c.id == id);
        if (index !== -1) {
            companies[index].status = newStatus;
            this.saveData(this.KEYS.COMPANIES, companies);
            this.addLog(`Company #${id} status updated to ${newStatus}`, 'info');
        }
    },

    approveKYC: function (id) {
        const kyc = this.getData(this.KEYS.KYC);
        const request = kyc.find(r => r.id == id);
        if (request) {
            // Remove from KYC queue
            const newKyc = kyc.filter(r => r.id != id);
            this.saveData(this.KEYS.KYC, newKyc);

            // Log success
            this.addLog(`KYC verification for ${request.company} APPROVED`, 'success');

            // Optionally update company status in company list
            const companies = this.getData(this.KEYS.COMPANIES);
            const cIndex = companies.findIndex(c => c.name === request.company);
            if (cIndex !== -1) {
                companies[cIndex].status = 'verified';
                this.saveData(this.KEYS.COMPANIES, companies);
            }
        }
    },

    addLog: function (message, type = 'info') {
        const logs = this.getData(this.KEYS.LOGS);
        logs.unshift({ id: Date.now(), message, time: 'Just now', type });
        this.saveData(this.KEYS.LOGS, logs.slice(0, 50)); // Keep last 50
    },

    getStats: function () {
        const companies = this.getData(this.KEYS.COMPANIES);
        const deals = this.getData(this.KEYS.DEALS);
        const kyc = this.getData(this.KEYS.KYC);

        return {
            totalCompanies: companies.length,
            activeDeals: deals.length,
            pendingKyc: kyc.length,
            pendingPosts: this.getData(this.KEYS.POSTS).filter(p => p.status === 'pending').length,
            gmv: '2.4M', // Static mock for now
            avgTimeToClose: this.SEED.INTELLIGENCE.timeToClose,
            riskScore: 'LOW'
        };
    },

    getIntelligence: function () {
        return this.SEED.INTELLIGENCE;
    },

    updatePostStatus: function (id, status, remark = '') {
        const posts = this.getData(this.KEYS.POSTS);
        const index = posts.findIndex(p => p.id == id);
        if (index !== -1) {
            posts[index].status = status;
            if (remark) posts[index].remark = remark;
            this.saveData(this.KEYS.POSTS, posts);

            const msg = status === 'approved' ? `Post #${id} APPROVED` : `Post #${id} REJECTED: ${remark}`;
            this.addLog(msg, status === 'approved' ? 'success' : 'error');
        }
    },

    addIntervention: function (dealId, message) {
        // Since NEGOTIATIONS is currently in SEED (static for demo),
        // let's ensure we can persist new messages if needed. 
        // For now, we will add it to the active session data.
        if (!this.activeNegotiations) {
            this.activeNegotiations = JSON.parse(JSON.stringify(this.SEED.NEGOTIATIONS));
        }

        const timestamp = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

        if (this.activeNegotiations[dealId]) {
            this.activeNegotiations[dealId].push({
                user: 'SUPER ADMIN',
                action: 'Intervention',
                price: '--',
                time: timestamp,
                message: message
            });
        }

        this.addLog(`Admin intervened in deal #${dealId}: "${message}"`, 'warning');
        return this.activeNegotiations[dealId];
    }
};

// Auto-init
AdminData.init();
