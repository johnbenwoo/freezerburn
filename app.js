// Service Logos as SVG icons
const serviceLogo = {
    // Streaming
    netflix: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 4v16l6-8 6 8V4" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    disney: `<svg viewBox="0 0 24 24" fill="none"><text x="4" y="18" font-family="Arial" font-weight="bold" font-size="16" fill="#fff">D+</text></svg>`,
    hbo: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 18V6l4 6 4-6v12M16 6v12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    prime: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 12c4 4 12 4 16 0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><path d="M17 8l2 2 2-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

    // Fitness
    gym: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 12h12M4 9v6M20 9v6M2 10v4M22 10v4" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    peloton: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#fff" stroke-width="2"/><path d="M12 8v8M8 12h8" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
    calm: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M12 7v5l3 3" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,

    // Food & Delivery
    doordash: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="16" height="12" rx="2" stroke="#fff" stroke-width="2"/><path d="M8 10h8M8 14h4" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
    hellofresh: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l9 6v12H3V9l9-6z" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="14" r="3" stroke="#fff" stroke-width="2"/></svg>`,
    instacart: `<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="20" r="2" fill="#fff"/><circle cx="17" cy="20" r="2" fill="#fff"/><path d="M4 4h2l3 12h10l2-8H8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

    // Auto
    carwash: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 11l1-6h12l1 6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><rect x="3" y="11" width="18" height="7" rx="2" stroke="#fff" stroke-width="2"/><circle cx="7" cy="15" r="1" fill="#fff"/><circle cx="17" cy="15" r="1" fill="#fff"/></svg>`,
    aaa: `<svg viewBox="0 0 24 24" fill="none"><text x="3" y="17" font-family="Arial" font-weight="bold" font-size="12" fill="#fff">AAA</text></svg>`,

    // Software
    adobe: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20L12 4l8 16H4z" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>`,
    chatgpt: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M8 12h8M12 8v8" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
    dropbox: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 6L6 10l6 4-6 4 6-4 6 4-6-4 6-4-6 4-6-4 6-4z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    canva: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M8 14c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,

    // Learning
    masterclass: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="12" rx="2" stroke="#fff" stroke-width="2"/><path d="M10 10l4 2-4 2v-4z" fill="#fff"/><path d="M8 20h8" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
    duolingo: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="7" stroke="#fff" stroke-width="2"/><circle cx="10" cy="9" r="1.5" fill="#fff"/><circle cx="14" cy="9" r="1.5" fill="#fff"/><path d="M9 13c1.5 1.5 4.5 1.5 6 0" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    nyt: `<svg viewBox="0 0 24 24" fill="none"><text x="2" y="17" font-family="Times" font-weight="bold" font-size="14" fill="#fff">NYT</text></svg>`,

    // Gaming
    gamepass: `<svg viewBox="0 0 24 24" fill="none"><circle cx="8" cy="10" r="6" stroke="#fff" stroke-width="2"/><circle cx="16" cy="14" r="6" stroke="#fff" stroke-width="2"/></svg>`,
    psplus: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5v14" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`,

    // News
    athletic: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2"/><path d="M12 7v10M7 12h10" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
    wsj: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" stroke="#fff" stroke-width="2"/><path d="M7 8h10M7 12h10M7 16h6" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>`,

    // Lifestyle
    barkbox: `<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="9" r="2" fill="#fff"/><circle cx="15" cy="9" r="2" fill="#fff"/><ellipse cx="12" cy="14" rx="4" ry="3" stroke="#fff" stroke-width="2"/><path d="M10 16c1 1 3 1 4 0" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    ipsy: `<svg viewBox="0 0 24 24" fill="none"><rect x="6" y="4" width="12" height="16" rx="2" stroke="#fff" stroke-width="2"/><circle cx="12" cy="10" r="3" stroke="#fff" stroke-width="2"/></svg>`,
};

// Subscription categories
const categories = [
    { id: 'streaming', name: 'Streaming', icon: '📺' },
    { id: 'fitness', name: 'Fitness & Wellness', icon: '💪' },
    { id: 'food', name: 'Food & Delivery', icon: '🍔' },
    { id: 'auto', name: 'Auto & Transport', icon: '🚗' },
    { id: 'software', name: 'Software & AI', icon: '💻' },
    { id: 'learning', name: 'Learning', icon: '📚' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'news', name: 'News & Media', icon: '📰' },
    { id: 'lifestyle', name: 'Lifestyle', icon: '✨' },
];

// All services data
const services = [
    // Streaming
    { id: 'netflix', name: 'Netflix', price: 15.49, color: '#e50914', billingDay: 15, category: 'streaming',
      upcomingContent: [{ title: 'Stranger Things S5', date: 'Mar 2025', type: 'Series' }] },
    { id: 'disney', name: 'Disney+', price: 13.99, color: '#113ccf', billingDay: 8, category: 'streaming',
      upcomingContent: [{ title: 'Andor S2', date: 'Apr 2025', type: 'Series' }] },
    { id: 'hbo', name: 'Max', price: 15.99, color: '#b829dd', billingDay: 22, category: 'streaming',
      upcomingContent: [{ title: 'The Last of Us S2', date: 'Apr 2025', type: 'Series' }] },
    { id: 'prime', name: 'Prime Video', price: 8.99, color: '#00a8e1', billingDay: 1, category: 'streaming',
      upcomingContent: [{ title: 'Fallout S2', date: 'Apr 2025', type: 'Series' }] },

    // Fitness
    { id: 'gym', name: 'Planet Fitness', price: 24.99, color: '#7b2d8e', billingDay: 1, category: 'fitness',
      upcomingContent: [{ title: 'Summer shape-up', date: 'Jun-Aug', type: 'Season' }] },
    { id: 'peloton', name: 'Peloton', price: 44.00, color: '#df1c2f', billingDay: 5, category: 'fitness',
      upcomingContent: [{ title: 'New Year programs', date: 'Jan', type: 'Program' }] },
    { id: 'calm', name: 'Calm', price: 14.99, color: '#4a90d9', billingDay: 12, category: 'fitness',
      upcomingContent: [{ title: 'Sleep stories', date: 'Ongoing', type: 'Content' }] },

    // Food
    { id: 'doordash', name: 'DashPass', price: 9.99, color: '#ff3008', billingDay: 10, category: 'food',
      upcomingContent: [{ title: 'Free delivery', date: 'Always', type: 'Perk' }] },
    { id: 'hellofresh', name: 'HelloFresh', price: 59.99, color: '#99c341', billingDay: 18, category: 'food',
      upcomingContent: [{ title: 'Weekly recipes', date: 'Weekly', type: 'Meals' }] },
    { id: 'instacart', name: 'Instacart+', price: 9.99, color: '#43b02a', billingDay: 7, category: 'food',
      upcomingContent: [{ title: 'Free delivery $35+', date: 'Always', type: 'Perk' }] },

    // Auto
    { id: 'carwash', name: 'Wash Club', price: 29.99, color: '#2196f3', billingDay: 1, category: 'auto',
      upcomingContent: [{ title: 'Unlimited washes', date: 'Year-round', type: 'Perk' }] },
    { id: 'aaa', name: 'AAA', price: 12.50, color: '#003087', billingDay: 15, category: 'auto',
      upcomingContent: [{ title: 'Roadside assist', date: 'Always', type: 'Service' }] },

    // Software
    { id: 'adobe', name: 'Adobe CC', price: 54.99, color: '#ff0000', billingDay: 20, category: 'software',
      upcomingContent: [{ title: 'AI features', date: 'Quarterly', type: 'Update' }] },
    { id: 'chatgpt', name: 'ChatGPT Plus', price: 20.00, color: '#10a37f', billingDay: 3, category: 'software',
      upcomingContent: [{ title: 'GPT-5', date: 'TBA', type: 'Model' }] },
    { id: 'dropbox', name: 'Dropbox Plus', price: 11.99, color: '#0061ff', billingDay: 25, category: 'software',
      upcomingContent: [{ title: '2TB storage', date: 'Always', type: 'Perk' }] },
    { id: 'canva', name: 'Canva Pro', price: 12.99, color: '#00c4cc', billingDay: 8, category: 'software',
      upcomingContent: [{ title: 'New templates', date: 'Monthly', type: 'Content' }] },

    // Learning
    { id: 'masterclass', name: 'MasterClass', price: 10.00, color: '#1a1a1a', billingDay: 15, category: 'learning',
      upcomingContent: [{ title: 'New instructors', date: 'Monthly', type: 'Class' }] },
    { id: 'duolingo', name: 'Duolingo Plus', price: 6.99, color: '#58cc02', billingDay: 12, category: 'learning',
      upcomingContent: [{ title: 'New courses', date: 'Ongoing', type: 'Course' }] },
    { id: 'nyt', name: 'NY Times', price: 17.00, color: '#000000', billingDay: 1, category: 'news',
      upcomingContent: [{ title: 'Daily news', date: 'Daily', type: 'News' }] },

    // Gaming
    { id: 'gamepass', name: 'Xbox Game Pass', price: 16.99, color: '#107c10', billingDay: 22, category: 'gaming',
      upcomingContent: [{ title: 'Day one releases', date: 'Ongoing', type: 'Games' }] },
    { id: 'psplus', name: 'PS Plus', price: 17.99, color: '#003087', billingDay: 5, category: 'gaming',
      upcomingContent: [{ title: 'Monthly games', date: 'Monthly', type: 'Games' }] },

    // News
    { id: 'athletic', name: 'The Athletic', price: 9.99, color: '#ff5722', billingDay: 10, category: 'news',
      upcomingContent: [{ title: 'Sports coverage', date: 'Daily', type: 'News' }] },
    { id: 'wsj', name: 'WSJ', price: 12.99, color: '#0274b6', billingDay: 18, category: 'news',
      upcomingContent: [{ title: 'Market analysis', date: 'Daily', type: 'News' }] },

    // Lifestyle
    { id: 'barkbox', name: 'BarkBox', price: 29.00, color: '#00bcd4', billingDay: 8, category: 'lifestyle',
      upcomingContent: [{ title: 'Monthly toys', date: 'Monthly', type: 'Box' }] },
    { id: 'ipsy', name: 'Ipsy', price: 14.00, color: '#ff69b4', billingDay: 1, category: 'lifestyle',
      upcomingContent: [{ title: 'Beauty bag', date: 'Monthly', type: 'Box' }] },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// State
const state = {
    subscriptions: {},
    virtualCards: {},
    currentView: 'calendar',
    expandedService: null,
    activeCategory: 'all'
};

// Initialize subscriptions with sample data
services.forEach(service => {
    // Default some services to certain months based on seasonality
    if (service.id === 'gym') {
        state.subscriptions[service.id] = [0, 1, 2, 3, 4, 5]; // Jan-Jun
    } else if (service.id === 'carwash') {
        state.subscriptions[service.id] = [3, 4, 5, 6, 7, 8]; // Apr-Sep (nice weather)
    } else if (service.id === 'hellofresh') {
        state.subscriptions[service.id] = [0, 1, 2, 9, 10, 11]; // Cold months
    } else if (service.category === 'streaming') {
        state.subscriptions[service.id] = [0, 1, 10, 11]; // Winter binge
    } else {
        // Random selection
        state.subscriptions[service.id] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].filter(() => Math.random() > 0.5);
    }
});

// Generate virtual card data
services.forEach(service => {
    state.virtualCards[service.id] = {
        number: generateCardNumber(),
        expiry: generateExpiry(),
        cvv: generateCVV(),
        frozen: !state.subscriptions[service.id].includes(getCurrentMonth())
    };
});

function generateCardNumber() {
    const groups = [];
    for (let i = 0; i < 4; i++) {
        groups.push(Math.floor(1000 + Math.random() * 9000).toString());
    }
    return groups.join(' ');
}

function generateExpiry() {
    const month = Math.floor(1 + Math.random() * 12).toString().padStart(2, '0');
    const year = (new Date().getFullYear() + 2).toString().slice(-2);
    return `${month}/${year}`;
}

function generateCVV() {
    return Math.floor(100 + Math.random() * 900).toString();
}

function getCurrentMonth() {
    return new Date().getMonth();
}

function getCurrentDay() {
    return new Date().getDate();
}

// Get filtered services
function getFilteredServices() {
    if (state.activeCategory === 'all') return services;
    return services.filter(s => s.category === state.activeCategory);
}

// Render category tabs
function renderCategoryTabs() {
    const container = document.getElementById('category-tabs');
    let html = `<button class="category-tab ${state.activeCategory === 'all' ? 'active' : ''}" onclick="setCategory('all')">All</button>`;

    categories.forEach(cat => {
        const count = services.filter(s => s.category === cat.id).length;
        html += `
            <button class="category-tab ${state.activeCategory === cat.id ? 'active' : ''}" onclick="setCategory('${cat.id}')">
                <span class="category-icon">${cat.icon}</span>
                ${cat.name}
                <span class="category-count">${count}</span>
            </button>
        `;
    });

    container.innerHTML = html;
}

function setCategory(categoryId) {
    state.activeCategory = categoryId;
    state.expandedService = null;
    renderCategoryTabs();
    renderCalendar();
    renderHeatmap();
    renderCards();
}

// Render calendar
function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    const currentMonth = getCurrentMonth();
    const filteredServices = getFilteredServices();

    let headerHTML = '<div class="calendar-row header"><div></div>';
    months.forEach(month => {
        headerHTML += `<div class="month-label">${month}</div>`;
    });
    headerHTML += '</div>';

    let rowsHTML = '';
    filteredServices.forEach(service => {
        const isExpanded = state.expandedService === service.id;
        const category = categories.find(c => c.id === service.category);

        rowsHTML += `
            <div class="calendar-row ${isExpanded ? 'expanded' : ''}" data-service="${service.id}">
                <div class="service-label" onclick="toggleServiceExpand('${service.id}')" style="color: ${service.color}">
                    <div class="service-icon" style="background: ${service.color}">${serviceLogo[service.id] || `<span style="font-size:14px">${category?.icon || '📦'}</span>`}</div>
                    <div>
                        <div class="service-name">${service.name}</div>
                        <div class="service-price">$${service.price}/mo</div>
                    </div>
                    <svg class="expand-indicator" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
        `;

        months.forEach((month, index) => {
            const isActive = state.subscriptions[service.id].includes(index);
            const isCurrent = index === currentMonth;
            rowsHTML += `
                <div class="month-cell ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}"
                     style="color: ${service.color}"
                     onclick="toggleMonth('${service.id}', ${index})"
                     data-month="${index}">
                </div>
            `;
        });

        rowsHTML += '</div>';

        // Expandable content row
        rowsHTML += `
            <div class="row-content ${isExpanded ? 'open' : ''}" data-service-content="${service.id}" style="--row-color: ${service.color}">
                <div class="row-content-inner">
                    ${service.upcomingContent.map(content => `
                        <div class="row-content-item">
                            <span class="row-content-title">${content.title}</span>
                            <div class="row-content-meta">
                                <span class="row-content-date">${content.date}</span>
                                <span class="row-content-type">${content.type}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    grid.innerHTML = headerHTML + rowsHTML;
}

// Render heatmap
function renderHeatmap() {
    const grid = document.getElementById('heatmap-grid');
    const currentMonth = getCurrentMonth();
    const filteredServices = getFilteredServices();

    const monthlyTotals = months.map((_, index) => {
        let total = 0;
        let count = 0;
        filteredServices.forEach(service => {
            if (state.subscriptions[service.id].includes(index)) {
                total += service.price;
                count++;
            }
        });
        return { total, count };
    });

    const maxTotal = Math.max(...monthlyTotals.map(m => m.total));

    function getHeatColor(total) {
        if (total === 0) return 'var(--bg-tertiary)';
        const intensity = total / maxTotal;
        if (intensity < 0.33) return 'rgba(34, 197, 94, 0.6)';
        if (intensity < 0.66) return 'rgba(245, 158, 11, 0.6)';
        return 'rgba(239, 68, 68, 0.6)';
    }

    let html = '<div class="heatmap-months">';
    months.forEach((month, index) => {
        const { total, count } = monthlyTotals[index];
        const isCurrent = index === currentMonth;
        html += `
            <div class="heatmap-month">
                <span class="heatmap-month-label">${month}</span>
                <div class="heatmap-cell ${isCurrent ? 'current' : ''}"
                     style="background: ${getHeatColor(total)}"
                     onclick="showMonthDetails(${index})">
                    <span class="heatmap-amount">$${total.toFixed(0)}</span>
                    <span class="heatmap-services">${count} sub${count !== 1 ? 's' : ''}</span>
                </div>
            </div>
        `;
    });
    html += '</div>';

    html += `
        <div class="heatmap-legend">
            <div class="heatmap-legend-item">
                <div class="heatmap-legend-color" style="background: rgba(34, 197, 94, 0.6)"></div>
                <span>Low</span>
            </div>
            <div class="heatmap-legend-item">
                <div class="heatmap-legend-color" style="background: rgba(245, 158, 11, 0.6)"></div>
                <span>Medium</span>
            </div>
            <div class="heatmap-legend-item">
                <div class="heatmap-legend-color" style="background: rgba(239, 68, 68, 0.6)"></div>
                <span>High</span>
            </div>
        </div>
    `;

    grid.innerHTML = html;
}

function toggleServiceExpand(serviceId) {
    if (state.expandedService === serviceId) {
        state.expandedService = null;
    } else {
        state.expandedService = serviceId;
    }
    renderCalendar();
}

// Render virtual cards
function renderCards() {
    const grid = document.getElementById('cards-grid');
    const currentMonth = getCurrentMonth();
    const currentDay = getCurrentDay();
    const filteredServices = getFilteredServices();

    // Sort: active first, frozen last
    const sortedServices = [...filteredServices].sort((a, b) => {
        const aFrozen = state.virtualCards[a.id].frozen ? 1 : 0;
        const bFrozen = state.virtualCards[b.id].frozen ? 1 : 0;
        return aFrozen - bFrozen;
    });

    let cardsHTML = '';
    sortedServices.forEach(service => {
        const card = state.virtualCards[service.id];
        const isFrozen = card.frozen;
        const numberGroups = card.number.split(' ');
        const category = categories.find(c => c.id === service.category);

        const daysUntilBilling = service.billingDay - currentDay;
        let billingStatus = '';
        let billingClass = '';

        if (isFrozen) {
            billingStatus = `<strong>Card frozen</strong> — charges declined`;
            billingClass = 'frozen-info';
        } else if (daysUntilBilling > 0 && daysUntilBilling <= 5) {
            billingStatus = `<strong>${daysUntilBilling} day${daysUntilBilling > 1 ? 's' : ''}</strong> until billing`;
            billingClass = '';
        } else {
            billingStatus = `Next billing: <strong>${months[currentMonth]} ${service.billingDay}</strong>`;
            billingClass = 'safe';
        }

        cardsHTML += `
            <div class="virtual-card ${isFrozen ? 'frozen' : ''}" data-service="${service.id}" style="--card-color: ${service.color}">
                <div class="card-header">
                    <div class="card-service">
                        <div class="card-service-icon" style="background: ${service.color}">${serviceLogo[service.id] || `<span style="font-size:14px">${category?.icon || '📦'}</span>`}</div>
                        <div class="card-service-info">
                            <h3>${service.name}</h3>
                            <div class="price">$${service.price}/mo</div>
                        </div>
                    </div>
                    <div class="card-status ${isFrozen ? 'frozen' : 'active'}">
                        <span class="card-status-dot"></span>
                        ${isFrozen ? 'Frozen' : 'Active'}
                    </div>
                </div>

                <div class="card-visual" style="color: ${service.color}">
                    <div class="card-chip"></div>
                    <div class="card-number">
                        <span>${numberGroups[0]}</span>
                        <span>${numberGroups[1]}</span>
                        <span>${numberGroups[2]}</span>
                        <span class="last-four">${numberGroups[3]}</span>
                    </div>
                    <div class="card-details">
                        <div class="card-detail">
                            <span class="card-detail-label">Expires</span>
                            <span class="card-detail-value">${card.expiry}</span>
                        </div>
                        <div class="card-detail">
                            <span class="card-detail-label">CVV</span>
                            <span class="card-detail-value">${card.cvv}</span>
                        </div>
                        <div class="card-detail">
                            <span class="card-detail-label">Limit</span>
                            <span class="card-detail-value">$${service.price}</span>
                        </div>
                    </div>
                </div>

                <div class="billing-info ${billingClass}">
                    <svg class="billing-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span class="billing-text">${billingStatus}</span>
                </div>

                <div class="copy-buttons">
                    <button class="copy-btn" onclick="copyToClipboard('${card.number.replace(/ /g, '')}', this)">
                        <span class="copy-btn-label">Card Number</span>
                        <span class="copy-btn-value">•••• ${numberGroups[3]}</span>
                    </button>
                    <button class="copy-btn" onclick="copyToClipboard('${card.expiry}', this)">
                        <span class="copy-btn-label">Expiry</span>
                        <span class="copy-btn-value">${card.expiry}</span>
                    </button>
                    <button class="copy-btn" onclick="copyToClipboard('${card.cvv}', this)">
                        <span class="copy-btn-label">CVV</span>
                        <span class="copy-btn-value">${card.cvv}</span>
                    </button>
                </div>

                <div class="card-actions">
                    <button class="card-btn ${isFrozen ? 'success' : 'danger'}" onclick="toggleFreeze('${service.id}')">
                        ${isFrozen ?
                            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg> Unfreeze' :
                            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5z"/></svg> Freeze'}
                    </button>
                    <button class="card-btn secondary" onclick="openServiceModal('${service.id}')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                        </svg>
                        Settings
                    </button>
                </div>
            </div>
        `;
    });

    grid.innerHTML = cardsHTML;
}

function getOrdinal(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

function toggleMonth(serviceId, monthIndex) {
    const subs = state.subscriptions[serviceId];
    const index = subs.indexOf(monthIndex);

    if (index > -1) {
        subs.splice(index, 1);
    } else {
        subs.push(monthIndex);
        subs.sort((a, b) => a - b);
    }

    const currentMonth = getCurrentMonth();
    state.virtualCards[serviceId].frozen = !subs.includes(currentMonth);

    renderCalendar();
    renderHeatmap();
    renderCards();
    updateStats();
    showToast(`${services.find(s => s.id === serviceId).name} updated`);
}

function toggleFreeze(serviceId) {
    const card = state.virtualCards[serviceId];
    card.frozen = !card.frozen;
    renderCards();
    showToast(`Card ${card.frozen ? 'frozen' : 'unfrozen'} for ${services.find(s => s.id === serviceId).name}`);
}

async function copyToClipboard(text, button) {
    try {
        await navigator.clipboard.writeText(text);
        button.classList.add('copied');
        showToast('Copied to clipboard!');
        setTimeout(() => button.classList.remove('copied'), 2000);
    } catch (err) {
        showToast('Failed to copy');
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 2500);
}

function updateStats() {
    const currentMonth = getCurrentMonth();

    let fullYearCost = 0;
    let actualCost = 0;

    services.forEach(service => {
        fullYearCost += service.price * 12;
        actualCost += service.price * state.subscriptions[service.id].length;
    });

    const savings = fullYearCost - actualCost;
    document.getElementById('monthly-savings').textContent = `$${savings.toFixed(0)}`;

    let activeCount = 0;
    services.forEach(service => {
        if (state.subscriptions[service.id].includes(currentMonth)) {
            activeCount++;
        }
    });
    document.getElementById('active-services').textContent = activeCount;
}

function switchView(view) {
    state.currentView = view;
    const calendarGrid = document.getElementById('calendar-grid');
    const heatmapGrid = document.getElementById('heatmap-grid');

    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    if (view === 'calendar') {
        calendarGrid.classList.remove('hidden');
        heatmapGrid.classList.remove('active');
    } else {
        calendarGrid.classList.add('hidden');
        heatmapGrid.classList.add('active');
    }
}

function showMonthDetails(monthIndex) {
    const filteredServices = getFilteredServices();
    const activeServices = filteredServices.filter(s => state.subscriptions[s.id].includes(monthIndex));
    const total = activeServices.reduce((sum, s) => sum + s.price, 0);
    showToast(`${months[monthIndex]}: $${total.toFixed(2)} for ${activeServices.length} subscription${activeServices.length !== 1 ? 's' : ''}`);
}

function openServiceModal(serviceId) {
    const service = services.find(s => s.id === serviceId);
    const card = state.virtualCards[serviceId];
    const activeMonths = state.subscriptions[serviceId];
    const category = categories.find(c => c.id === service.category);

    const yearlySpend = service.price * activeMonths.length;
    const yearlySavings = service.price * (12 - activeMonths.length);

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-service-icon" style="background: ${service.color}">${serviceLogo[service.id] || `<span style="font-size:20px">${category?.icon || '📦'}</span>`}</div>
            <div class="modal-title">
                <h2>${service.name}</h2>
                <p>$${service.price}/month · Bills on the ${service.billingDay}${getOrdinal(service.billingDay)}</p>
            </div>
        </div>

        <div class="modal-section">
            <h3>Active Months</h3>
            <div class="modal-months">
                ${months.map((month, index) => `
                    <div class="modal-month ${activeMonths.includes(index) ? 'active' : ''}"
                         style="color: ${service.color}"
                         onclick="toggleMonthFromModal('${serviceId}', ${index}, this)">
                        ${month}
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>Yearly Summary</h3>
            <div class="modal-stats">
                <div class="modal-stat">
                    <div class="modal-stat-value" style="color: ${service.color}">${activeMonths.length}</div>
                    <div class="modal-stat-label">Months Active</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-value">$${yearlySpend.toFixed(2)}</div>
                    <div class="modal-stat-label">Yearly Spend</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-value" style="color: var(--accent-success)">$${yearlySavings.toFixed(2)}</div>
                    <div class="modal-stat-label">Yearly Savings</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-value">$${service.price}</div>
                    <div class="modal-stat-label">Card Limit/Mo</div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('modal-overlay').classList.add('active');
}

function toggleMonthFromModal(serviceId, monthIndex, element) {
    toggleMonth(serviceId, monthIndex);
    element.classList.toggle('active');
    openServiceModal(serviceId);
}

// Event listeners
document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal-overlay').classList.remove('active');
});

document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.getElementById('modal-overlay').classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('modal-overlay').classList.remove('active');
    }
});

document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
});

// Initialize
renderCategoryTabs();
renderCalendar();
renderHeatmap();
renderCards();
updateStats();
