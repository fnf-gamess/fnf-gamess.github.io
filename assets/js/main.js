document.addEventListener('DOMContentLoaded', () => {
    // Init Lucide
    if (window.lucide) {
        lucide.createIcons();
    }
    // Lazy Loader for Game Thumbnails
    const lazyImages = document.querySelectorAll('.lazy-thumb');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-thumb');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Initialize Favorites
    updateFavButtonState();
    renderFavoritesPage();

    // Search Logic – navigate to /search/ page with ?q= param
    if (searchInput) {
        // Ensure search tray exists
        let searchResults = document.getElementById('searchResults');
        if (!searchResults) {
            searchResults = document.createElement('div');
            searchResults.id = 'searchResults';
            searchResults.className = 'search-results-tray';
            searchInput.parentNode.appendChild(searchResults);
        }

        const triggerSearch = (query) => {
            const q = query.trim();
            if (!q) return;

            if (window.location.pathname.includes('/search/') && typeof window.setSearch === 'function') {
                window.setSearch(q);
                return;
            }

            let searchUrl = '/search/index.html?q=' + encodeURIComponent(q);
            if (window.location.protocol === 'file:') {
                const pathParts = window.location.pathname.split('/');
                const rootIdx = pathParts.findIndex(p => p.includes('fnf__'));
                if (rootIdx !== -1) {
                    searchUrl = window.location.pathname.substring(0, window.location.pathname.indexOf(pathParts[rootIdx])) + pathParts[rootIdx] + '/search/index.html?q=' + encodeURIComponent(q);
                }
            }
            window.location.href = searchUrl;
        };

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                triggerSearch(searchInput.value);
            }
        });

        // Premium Suggestions Logic
        searchInput.addEventListener('input', function () {
            const q = this.value.trim().toLowerCase();

            // If on arcade page, sync local filter
            if (window.location.pathname.includes('/fnf-mods') && typeof arcSearch !== 'undefined') {
                arcSearch = q;
                if (typeof arcadeRender === 'function') arcadeRender();
            }

            if (!q) {
                searchResults.classList.remove('active');
                return;
            }

            // Filter Logic
            const pageMatches = (typeof FNF_GAMES_DATA !== 'undefined')
                ? FNF_GAMES_DATA.filter(g => g.title.toLowerCase().includes(q)).slice(0, 5)
                : [];

            const arcadeMatches = (typeof ARCADE_MODS !== 'undefined')
                ? ARCADE_MODS.filter(m => m.name.toLowerCase().includes(q)).slice(0, 5)
                : [];

            if (pageMatches.length === 0 && arcadeMatches.length === 0) {
                searchResults.innerHTML = '<div class="search-no-results">No matches found</div>';
            } else {
                let html = '';
                if (pageMatches.length > 0) {
                    html += '<div class="search-results-header"><i data-lucide="monitor" style="width:14px;height:14px;"></i> GAME PAGES</div>';
                    pageMatches.forEach(g => {
                        html += `
                                <a href="${g.slug}" class="search-result-item">
                                    <img src="${g.thumb}" alt="${g.title}" class="search-result-thumb" onerror="this.src='/assets/images/fnf.webp'">
                                    <div class="search-result-info">
                                        <span class="search-result-name">${g.title}</span>
                                    </div>
                                </a>
                            `;
                    });
                }
                if (arcadeMatches.length > 0) {
                    html += '<div class="search-results-header" style="color:var(--accent-blue);"><i data-lucide="grid" style="width:14px;height:14px;"></i> ARCADE MODS</div>';
                    arcadeMatches.forEach(m => {
                        const clickAction = window.location.pathname.includes('/fnf-mods')
                            ? `arcadePlay("${m.embed}", "${m.name}");`
                            : `window.location.href="/fnf-mods/index.html?play=${encodeURIComponent(m.embed)}"`;
                        html += `
                                <div class="search-result-item" style="cursor:pointer" onclick='${clickAction} document.getElementById("searchResults").classList.remove("active");'>
                                    <img src="${m.image || '/assets/images/fnf.webp'}" alt="${m.name}" class="search-result-thumb">
                                    <div class="search-result-info">
                                        <span class="search-result-name">${m.name}</span>
                                    </div>
                                </div>
                            `;
                    });
                }
                searchResults.innerHTML = html;
                if (window.lucide) lucide.createIcons();
            }
            searchResults.classList.add('active');
        });

        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });
    }

    // Sidebar Toggle
    const sidebar = document.querySelector('.sidebar-nav');
    const toggleBtns = document.querySelectorAll('.sidebar-toggle');
    const body = document.body;

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            body.classList.toggle('sidebar-collapsed');

            // Mobile active state
            if (window.innerWidth <= 992) {
                sidebar.classList.toggle('active');
            }

            // Persist state
            const isCollapsed = sidebar.classList.contains('collapsed');
            localStorage.setItem('sidebarCollapsed', isCollapsed);
        });
    });

    // Restore Sidebar State
    if (localStorage.getItem('sidebarCollapsed') === 'true') {
        sidebar?.classList.add('collapsed');
        body.classList.add('sidebar-collapsed');
    }

    // Lazy Loading for Sidebar Icons/Thumbnails if needed

    // Micro-animations for buttons
    const buttons = document.querySelectorAll('.btn-play');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            btn.style.setProperty('--x', `${x}px`);
            btn.style.setProperty('--y', `${y}px`);
        });
    });

    renderDynamicGrids();
});

// Game Control Functions
function toggleFullscreen() {
    const container = document.getElementById('gameFrame') || document.getElementById('arcadeBox');
    if (!container) return;

    if (!document.fullscreenElement) {
        container.requestFullscreen().catch(err => {
            if (typeof showToast !== 'undefined') {
                showToast(`Fullscreen failed: ${err.message}`);
            } else {
                alert(`Error: ${err.message}`);
            }
        });
    } else {
        document.exitFullscreen();
    }
}

function toggleExpand() {
    document.body.classList.toggle('expanded-mode');
}

function toggleFavorite() {
    const rawPath = window.location.pathname;
    // Normalize path: ensure it starts with / and ends with / (remove index.html)
    let path = rawPath.replace(/\/index\.html$/, '/');
    if (!path.startsWith('/')) path = '/' + path;

    // Find in FNF_GAMES_DATA
    let gameData = null;
    if (typeof FNF_GAMES_DATA !== 'undefined') {
        gameData = FNF_GAMES_DATA.find(g => {
            const slug = g.slug.replace(/\/index\.html$/, '/');
            return slug === path;
        });
    }

    let title = document.querySelector('h1')?.innerText || 'FNF Game';
    let thumb = '/assets/images/fnf.webp';

    if (gameData) {
        title = gameData.title;
        thumb = gameData.thumb;
    } else {
        // Fallback to existing schema logic if not in data
        try {
            const schemaScript = document.querySelector('script[type="application/ld+json"]');
            if (schemaScript) {
                const schemaData = JSON.parse(schemaScript.innerText);
                if (schemaData.image) {
                    thumb = schemaData.image;
                    // Normalize thumb if it's a full URL to this domain
                    if (thumb.includes('fnf-games.online')) {
                        thumb = thumb.substring(thumb.indexOf('/assets/images/'));
                    }
                }
            }
        } catch (e) {
            console.error("Error parsing schema for thumb", e);
        }
    }

    let favorites = JSON.parse(localStorage.getItem('fnf_favorites') || '[]');
    const index = favorites.findIndex(f => f.path === rawPath); // Keep using rawPath for the link consistency

    if (index > -1) {
        favorites.splice(index, 1);
        showToast("Removed from favorites ❤️");
    } else {
        favorites.push({ path: rawPath, title, thumb, url: window.location.href });
        showToast("Added to favorites ❤️");
    }

    localStorage.setItem('fnf_favorites', JSON.stringify(favorites));
    updateFavButtonState();
}

// Toast Notification System
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <i data-lucide="check-circle" style="color: var(--accent-blue);"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);

    // Auto remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function updateFavButtonState() {
    const favBtn = document.getElementById('favBtn');
    if (!favBtn) return;

    const path = window.location.pathname;
    const favorites = JSON.parse(localStorage.getItem('fnf_favorites') || '[]');
    const isFav = favorites.some(f => f.path === path);

    if (isFav) {
        favBtn.classList.add('active');
        favBtn.innerHTML = '<i data-lucide="heart"></i> Favorited';
    } else {
        favBtn.classList.remove('active');
        favBtn.innerHTML = '<i data-lucide="heart"></i> Favorite';
    }
    if (window.lucide) lucide.createIcons();
}

function renderFavoritesPage() {
    const grid = document.getElementById('favoritesGrid');
    if (!grid) return;

    const favorites = JSON.parse(localStorage.getItem('fnf_favorites') || '[]');

    if (favorites.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">You haven\'t added any favorites yet.</p>';
        return;
    }

    grid.innerHTML = favorites.map(game => `
        <div class="game-card">
            <a href="${game.path}">
                <img src="${game.thumb}" class="game-thumb" onerror="this.onerror=null; this.src='/assets/images/fnf.webp'">
                <div class="game-info">
                    <div class="game-title">${game.title}</div>
                </div>
            </a>
        </div>
    `).join('');
}

function rateGame(type) {
    alert(`Thank you for rating! (${type})`);
}

function reportGame() {
    alert('Thank you for your report. We will review it shortly.');
}

async function shareGame() {
    const url = window.location.href;
    try {
        await navigator.clipboard.writeText(url);
        showToast("Link copied to clipboard!");
    } catch (err) {
        console.error('Share failed:', err);
    }
}

function showToast(message) {
    // Remove existing toast if any
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <i data-lucide="check-circle" style="width: 18px; height: 18px; color: var(--accent-blue);"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    // Init icon
    if (window.lucide) {
        lucide.createIcons({
            attrs: {
                class: 'lucide'
            },
            nameAttr: 'data-lucide'
        });
    }

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);

    // Auto remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    const isLight = body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    // Update Icon
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.setAttribute('data-lucide', isLight ? 'sun' : 'moon');
        if (window.lucide) {
            lucide.createIcons();
        }
    }
}

// Random Game Feature

function playRandomGame() {
    // Only pick from individual game pages as per user request
    const targets = [];

    if (typeof FNF_GAMES_DATA !== 'undefined') {
        FNF_GAMES_DATA.forEach(game => {
            // Only include games with a valid slug (link)
            if (game.slug && game.slug !== '/') {
                targets.push(game.slug);
            }
        });
    }

    if (targets.length === 0) return;

    // Pick one randomly
    const pick = targets[Math.floor(Math.random() * targets.length)];

    // Redirect
    window.location.href = pick;
}

// Initial Theme Check & State Sync
(function () {
    const savedTheme = localStorage.getItem('theme');
    // Force dark mode on mobile (width <= 992)
    if (savedTheme === 'light' && window.innerWidth > 992) {
        document.body.classList.add('light-mode');
    }
})();

// Lucide re-sync for dynamic icons
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('light-mode')) {
        const icon = document.getElementById('themeIcon');
        if (icon) icon.setAttribute('data-lucide', 'sun');
        if (window.lucide) lucide.createIcons();
    }
});

// Global Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Exit Expand Mode
        if (document.body.classList.contains('expanded-mode')) {
            document.body.classList.remove('expanded-mode');
        }
        // Exit Fullscreen
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
});

// Dynamic Grid Rendering Logic
function renderDynamicGrids() {
    if (typeof FNF_GAMES_DATA === 'undefined') return;

    // Helper to escape HTML to prevent XSS
    const escapeHtml = (str) => {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };

    // We want the newest games first (assuming appended to bottom of list)
    let gamesList = [...FNF_GAMES_DATA].reverse();

    // Filter out the current page to avoid self-linking
    const currentPath = window.location.pathname;
    gamesList = gamesList.filter(game => {
        let path1 = game.slug.replace(/\/index\.html$/, '/');
        let path2 = currentPath.replace(/\/index\.html$/, '/');
        if (path1 === '' && game.slug === '/') path1 = '/';
        if (path2 === '') path2 = '/';
        return path1 !== path2;
    });

    const sideGrid = document.querySelector('.hero-side-grid-alt');
    // Select the primary game grid on the page, avoiding the favorites grid which has its own logic
    const bottomGrid = document.querySelector('.game-grid:not(#favoritesGrid)');
    const categoryContainer = document.getElementById('category-games');
    const currentCategory = categoryContainer?.dataset.category;

    let sideGames = [];
    let bottomGames = [];

    // Apply category filtering if on a category page
    if (currentCategory) {
        gamesList = gamesList.filter(game => {
            if (currentCategory === 'New') {
                return game.isNew === true;
            }
            if (currentCategory === 'Hot') {
                return game.isHot === true;
            }
            if (!game.categories) return false;
            // Support both direct category match and "Special" categories like Popular/New/Hot
            if (currentCategory === 'Popular') {
                // For now we just show all if no specific property exists, 
                // or we could add 'popular: true' etc to the data later.
                return true;
            }
            return game.categories.includes(currentCategory);
        });
    }

    if (sideGrid) {
        // Take up to 8 for the side grid
        sideGames = gamesList.slice(0, 8);
        bottomGames = gamesList.slice(8);

        if (sideGames.length > 0) {
            sideGrid.innerHTML = sideGames.map(game => {
                const slugAlt = game.slug.replace(/\//g, '') || 'fnf';
                return `
                <a href="${game.slug}" class="hero-game-card">
                    <img width="120" height="120" src="${game.thumb}" alt="${escapeHtml(slugAlt)}" onerror="this.onerror=null; this.src='/assets/images/fnf.webp'">
                </a>
            `}).join('');
        }
    } else {
        // No side grid exists, everything overflows to the bottom grid
        bottomGames = gamesList;
    }

    // --- Show All / Limited Games logic (No Pagination) ---
    const pageGames = bottomGames.slice(0, 24); 

    if (bottomGrid && pageGames.length > 0) {
        bottomGrid.innerHTML = pageGames.map(game => {
            const slugAlt = game.slug.replace(/\//g, '') || 'fnf';
            // Use the first category as the display label
            const displayCat = (game.categories && game.categories.length > 0) ? game.categories[0] : '';
            return `
            <div class="game-card">
                <a href="${game.slug}">
                    <img width="300" height="170" src="${game.thumb}" alt="${escapeHtml(slugAlt)}" class="game-thumb" loading="lazy" onerror="this.onerror=null; this.src='/assets/images/fnf.webp'">
                    <div class="game-info">
                        ${displayCat ? `<span class="game-cat">${escapeHtml(displayCat)}</span>` : ''}
                        <div class="game-title">${escapeHtml(game.title)}</div>
                    </div>
                </a>
            </div>
        `}).join('');
    }

    // Hide pagination container if it exists
    const paginationContainer = document.getElementById('paginationContainer');
    if (paginationContainer) {
        paginationContainer.style.display = 'none';
    }
}
