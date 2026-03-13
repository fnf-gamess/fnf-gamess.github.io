// search.js - Client-side search engine for FNF Games
(function () {
    const searchInput = document.getElementById('searchPageInput');
    const clearBtn = document.getElementById('clearBtn');
    const resultsGrid = document.getElementById('searchResultsGrid');
    const popularGrid = document.getElementById('popularGrid');
    const searchStats = document.getElementById('searchStats');
    const resultsCount = document.getElementById('resultsCount');
    const queryLabel = document.getElementById('queryLabel');
    const searchEmpty = document.getElementById('searchEmpty');
    const searchDefault = document.getElementById('searchDefault');
    const searchPagination = document.getElementById('searchPagination');

    if (!searchInput) return; // Only run on search page

    // Sync header search box
    const headerSearch = document.getElementById('searchInput');

    // ─── Popular games (shown when no query) ─────────────────────────────────
    const POPULAR_SLUGS = [
        '/'
    ];

    function renderPopular() {
        const popular = POPULAR_SLUGS.map(s => FNF_GAMES_DATA.find(g => g.slug === s)).filter(Boolean);
        if (!popularGrid) return;
        popularGrid.innerHTML = popular.map(game => renderCard(game)).join('');
        if (window.lucide) lucide.createIcons();
    }

    // ─── Card template ────────────────────────────────────────────────────────
    function renderCard(item) {
        const isArcade = !item.slug;
        const title = isArcade ? item.name : item.title;
        const thumb = isArcade ? (item.image || '/assets/images/fnf.webp') : item.thumb;
        const link = isArcade ? `/fnf-mods/index.html?play=${encodeURIComponent(item.embed)}` : item.slug;
        const category = isArcade ? 'Arcade Mod' : '';

        const slugSafe = title.toLowerCase().replace(/[^a-z0-9]/g, '-');

        return `
        <a href="${link}" class="search-result-card">
            <div class="src-thumb-wrap">
                <img src="${thumb}" alt="${escapeHtml(slugSafe)}" loading="lazy" onerror="this.src='/assets/images/fnf.webp'">
            </div>
            <div class="src-info">
                <div class="src-category">${category}</div>
                <h3 class="src-title">${escapeHtml(title)}</h3>
            </div>
        </a>`;
    }

    // ─── Search logic ─────────────────────────────────────────────────────────
    function performSearch(query) {
        query = query.trim().toLowerCase();

        if (query.length < 1) {
            showDefault();
            return;
        }

        const mainResults = FNF_GAMES_DATA.filter(game => {
            return (
                game.title.toLowerCase().includes(query) ||
                game.description.toLowerCase().includes(query) ||
                game.categories.some(c => c.toLowerCase().includes(query)) ||
                game.tags.some(t => t.toLowerCase().includes(query))
            );
        });

        const arcadeResults = (typeof ARCADE_MODS !== 'undefined' ? ARCADE_MODS : []).filter(mod => {
            return mod.name.toLowerCase().includes(query);
        }).map(mod => ({
            title: mod.name,
            slug: `/fnf-mods/index.html?play=${encodeURIComponent(mod.embed)}`,
            description: "Play this mod instantly in the FNF Arcade without page reloads.",
            categories: ["FNF Arcade"],
            tags: [],
            thumb: mod.image || '/assets/images/fnf.webp'
        }));

        const results = [...mainResults, ...arcadeResults];

        // Update URL for shareability & SEO
        const url = new URL(window.location);
        url.searchParams.set('q', query);
        window.history.replaceState({}, '', url);

        // Update page title dynamically
        document.title = `Search: "${query}" – FNF Games`;
        document.getElementById('pageTitle')?.setAttribute('content', `Search: "${query}" – FNF Games`);

        showResults(results, query);
    }

    let currentResults = [];
    let currentPage = 1;
    const ITEMS_PER_PAGE = 18;

    function showResults(results, query) {
        searchDefault.style.display = 'none';
        searchEmpty.style.display = 'none';
        searchStats.style.display = 'flex';
        queryLabel.textContent = query;

        if (results.length === 0) {
            resultsGrid.innerHTML = '';
            searchStats.style.display = 'none';
            searchEmpty.style.display = 'flex';
            if (searchPagination) searchPagination.style.display = 'none';
            return;
        }

        resultsCount.textContent = `${results.length} result${results.length !== 1 ? 's' : ''}`;
        currentResults = results;
        currentPage = 1;
        renderPage();
    }

    function renderPage() {
        const totalPages = Math.ceil(currentResults.length / ITEMS_PER_PAGE);
        if (currentPage < 1) currentPage = 1;
        if (currentPage > totalPages) currentPage = totalPages;

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const pageResults = currentResults.slice(startIndex, endIndex);

        resultsGrid.innerHTML = pageResults.map(game => renderCard(game)).join('');
        if (window.lucide) lucide.createIcons();

        if (searchPagination) {
            if (totalPages <= 1) {
                searchPagination.style.display = 'none';
            } else {
                searchPagination.style.display = 'flex';
                let paginationHTML = '';
                const btnStyle = 'padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; border: none; transition: all 0.2s;';

                if (currentPage > 1) {
                    paginationHTML += `<button style="${btnStyle} background: var(--card-bg); color: var(--text-color);" onmouseover="this.style.background='var(--hover-bg)'" onmouseout="this.style.background='var(--card-bg)'" onclick="window.changeSearchPage(${currentPage - 1})">Prev</button>`;
                }

                let startPage = Math.max(1, currentPage - 2);
                let endPage = Math.min(totalPages, startPage + 4);
                if (endPage - startPage < 4) {
                    startPage = Math.max(1, endPage - 4);
                }

                for (let i = startPage; i <= endPage; i++) {
                    if (i === currentPage) {
                        paginationHTML += `<button style="${btnStyle} background: linear-gradient(135deg, var(--accent-blue), var(--accent-pink)); color: white;">${i}</button>`;
                    } else {
                        paginationHTML += `<button style="${btnStyle} background: var(--card-bg); color: var(--text-color);" onmouseover="this.style.background='var(--hover-bg)'" onmouseout="this.style.background='var(--card-bg)'" onclick="window.changeSearchPage(${i})">${i}</button>`;
                    }
                }

                if (currentPage < totalPages) {
                    paginationHTML += `<button style="${btnStyle} background: var(--card-bg); color: var(--text-color);" onmouseover="this.style.background='var(--hover-bg)'" onmouseout="this.style.background='var(--card-bg)'" onclick="window.changeSearchPage(${currentPage + 1})">Next</button>`;
                }

                searchPagination.innerHTML = paginationHTML;
            }
        }
    }

    window.changeSearchPage = function (page) {
        currentPage = page;
        renderPage();
        document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    function showDefault() {
        searchStats.style.display = 'none';
        searchEmpty.style.display = 'none';
        resultsGrid.innerHTML = '';
        searchDefault.style.display = 'block';

        // Clear URL
        const url = new URL(window.location);
        url.searchParams.delete('q');
        window.history.replaceState({}, '', url);
        document.title = 'Search FNF Games – Find Your Favorite Mod';
    }

    // ─── Clear button ─────────────────────────────────────────────────────────
    clearBtn?.addEventListener('click', () => {
        searchInput.value = '';
        if (headerSearch) headerSearch.value = '';
        clearBtn.style.display = 'none';
        showDefault();
        searchInput.focus();
    });

    // ─── Input events ─────────────────────────────────────────────────────────
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const val = e.target.value;
        if (headerSearch) headerSearch.value = val;
        clearBtn.style.display = val.length > 0 ? 'flex' : 'none';

        debounceTimer = setTimeout(() => {
            performSearch(val);
        }, 200);
    });

    // Keep header input in sync
    if (headerSearch) {
        headerSearch.addEventListener('input', (e) => {
            searchInput.value = e.target.value;
            searchInput.dispatchEvent(new Event('input'));
        });
    }

    // ─── On load: read ?q= from URL ───────────────────────────────────────────
    function init() {
        renderPopular();

        const params = new URLSearchParams(window.location.search);
        const q = params.get('q') || '';
        if (q) {
            searchInput.value = q;
            if (headerSearch) headerSearch.value = q;
            clearBtn.style.display = 'flex';
            performSearch(q);
        } else {
            showDefault();
        }
    }

    init();

    // ─── Expose setSearch for chips ───────────────────────────────────────────
    window.setSearch = function (query) {
        searchInput.value = query;
        if (headerSearch) headerSearch.value = query;
        clearBtn.style.display = query.length > 0 ? 'flex' : 'none';
        performSearch(query);
        searchInput.focus();
    };

    // ─── Helper ───────────────────────────────────────────────────────────────
    function escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
})();
