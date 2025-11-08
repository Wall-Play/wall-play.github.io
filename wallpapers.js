// Charger et afficher les wallpapers dynamiquement
class WallpaperManager {
    constructor() {
        this.packs = [];
        this.filteredPacks = [];
        this.currentIndex = 0;
        this.container = document.getElementById('wallpaper-gallery');
        this.initEventListeners();
    }

    async loadWallpapers() {
        try {
            const response = await fetch('wallpapers.json');
            const data = await response.json();
            this.packs = data.packs;
            this.filteredPacks = [...this.packs];
            this.renderCarousel();
            this.updateIndicators();
            this.updateCounter();
        } catch (error) {
            console.error('Erreur lors du chargement des wallpapers:', error);
            this.showError();
        }
    }

    initEventListeners() {
        // Navigation carrousel
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousPack());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextPack());

        // Filtres
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filterPacks(e.target.dataset.filter);
            });
        });

        // Recherche
        const searchInput = document.getElementById('search-wallpaper');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.searchPacks(e.target.value));
        }

        // Navigation clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousPack();
            if (e.key === 'ArrowRight') this.nextPack();
        });
    }

    renderCarousel() {
        if (!this.container) return;

        this.container.innerHTML = '';

        if (this.filteredPacks.length === 0) {
            this.container.innerHTML = `
                <div class="no-results">
                    <p style="color: var(--text-secondary); font-size: var(--font-lg);">
                        Aucun wallpaper trouvé
                    </p>
                </div>
            `;
            // Masquer les boutons de navigation
            this.toggleNavigationButtons(false);
            return;
        }

        // Afficher les boutons de navigation
        this.toggleNavigationButtons(true);

        this.filteredPacks.forEach((pack, index) => {
            const packCard = this.createPackCard(pack, index);
            this.container.appendChild(packCard);
        });

        this.showPack(this.currentIndex);
        this.initScrollAnimations();
    }

    toggleNavigationButtons(show) {
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        
        if (prevBtn) prevBtn.style.display = show ? 'flex' : 'none';
        if (nextBtn) nextBtn.style.display = show ? 'flex' : 'none';
    }

    createPackCard(pack, index) {
        const packContainer = document.createElement('div');
        packContainer.className = 'wallpaper-pack';
        packContainer.setAttribute('data-id', pack.id);
        packContainer.setAttribute('data-index', index);

        // Badge GRATUIT si applicable
        const freeBadge = pack.free ? 
            '<div class="free-badge">GRATUIT</div>' : '';

        // Créer les features PC
        const pcFeaturesList = pack.pc.features
            .map(feature => `<li>${feature}</li>`)
            .join('');

        // Créer les features Mobile
        const mobileFeaturesList = pack.mobile.features
            .map(feature => `<li>${feature}</li>`)
            .join('');

        packContainer.innerHTML = `
            ${freeBadge}
            <div class="pack-header">
                <h3 class="pack-title">${pack.title}</h3>
                <div class="pack-pricing">
                    <div class="individual-prices">
                        <span class="price-label">PC: <strong>${pack.pc.price}€</strong></span>
                        <span class="price-separator">•</span>
                        <span class="price-label">Mobile: <strong>${pack.mobile.price}€</strong></span>
                    </div>
                    <div class="pack-price">
                        <span class="pack-label">Pack Complet:</span>
                        <span class="pack-value">${pack.pack.price}€</span>
                        <span class="pack-discount">Économisez ${pack.pack.discount}€</span>
                    </div>
                </div>
            </div>
            
            <div class="pack-content">
                <!-- Version PC -->
                <div class="pack-version">
                    <div class="version-image-wrapper">
                        <img src="${pack.pc.image}" 
                             alt="${pack.title} - PC" 
                             class="wallpaper-image"
                             loading="lazy">
                        <div class="version-badge">VERSION PC</div>
                    </div>
                    <div class="version-info">
                        <h4>Version PC</h4>
                        <ul class="wallpaper-features">
                            ${pcFeaturesList}
                        </ul>
                    </div>
                </div>

                <!-- Version Mobile -->
                <div class="pack-version">
                    <div class="version-image-wrapper">
                        <img src="${pack.mobile.image}" 
                             alt="${pack.title} - Mobile" 
                             class="wallpaper-image"
                             loading="lazy">
                        <div class="version-badge">VERSION MOBILE</div>
                    </div>
                    <div class="version-info">
                        <h4>Version Mobile</h4>
                        <ul class="wallpaper-features">
                            ${mobileFeaturesList}
                        </ul>
                    </div>
                </div>
            </div>

            <div class="pack-actions">
                <a href="#contact" class="download-btn pack-btn">Commander le Pack Complet</a>
            </div>
        `;

        return packContainer;
    }

    showError() {
        if (!this.container) return;
        
        this.container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                <p style="color: var(--text-secondary); font-size: var(--font-lg);">
                    Impossible de charger les wallpapers. Veuillez réessayer plus tard.
                </p>
            </div>
        `;
    }

    showPack(index) {
        const packs = document.querySelectorAll('.wallpaper-pack');
        packs.forEach((pack, i) => {
            pack.classList.remove('active', 'prev', 'next');
            if (i === index) {
                pack.classList.add('active');
            } else if (i < index) {
                pack.classList.add('prev');
            } else {
                pack.classList.add('next');
            }
        });
    }

    nextPack() {
        if (this.currentIndex < this.filteredPacks.length - 1) {
            this.currentIndex++;
            this.showPack(this.currentIndex);
            this.updateIndicators();
            this.updateCounter();
        }
    }

    previousPack() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.showPack(this.currentIndex);
            this.updateIndicators();
            this.updateCounter();
        }
    }

    goToPack(index) {
        if (index >= 0 && index < this.filteredPacks.length) {
            this.currentIndex = index;
            this.showPack(this.currentIndex);
            this.updateIndicators();
            this.updateCounter();
        }
    }

    updateIndicators() {
        const indicatorsContainer = document.getElementById('carousel-indicators');
        if (!indicatorsContainer) return;

        indicatorsContainer.innerHTML = '';
        
        this.filteredPacks.forEach((pack, index) => {
            const dot = document.createElement('button');
            dot.className = 'indicator-dot';
            if (index === this.currentIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => this.goToPack(index));
            indicatorsContainer.appendChild(dot);
        });
    }

    updateCounter() {
        const currentEl = document.getElementById('current-pack');
        const totalEl = document.getElementById('total-packs');
        
        if (currentEl) {
            currentEl.textContent = this.filteredPacks.length === 0 ? 0 : this.currentIndex + 1;
        }
        if (totalEl) {
            totalEl.textContent = this.filteredPacks.length;
        }
    }

    filterPacks(filter) {
        this.currentIndex = 0;
        
        switch(filter) {
            case 'free':
                this.filteredPacks = this.packs.filter(p => p.free);
                break;
            case 'paid':
                this.filteredPacks = this.packs.filter(p => !p.free);
                break;
            default:
                this.filteredPacks = [...this.packs];
        }
        
        this.renderCarousel();
        this.updateIndicators();
        this.updateCounter();
    }

    searchPacks(query) {
        this.currentIndex = 0;
        const searchTerm = query.toLowerCase().trim();
        
        if (searchTerm === '') {
            this.filteredPacks = [...this.packs];
        } else {
            this.filteredPacks = this.packs.filter(pack => 
                pack.title.toLowerCase().includes(searchTerm) ||
                pack.id.toLowerCase().includes(searchTerm)
            );
        }
        
        this.renderCarousel();
        this.updateIndicators();
        this.updateCounter();
    }

    initScrollAnimations() {
        // Animations déjà gérées par les classes active/prev/next
    }

    // Méthodes utilitaires pour trier
    sortByDate(ascending = false) {
        this.packs.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return ascending ? dateA - dateB : dateB - dateA;
        });
        this.renderWallpapers();
    }

    sortByPrice(ascending = true) {
        this.packs.sort((a, b) => 
            ascending ? a.pack.price - b.pack.price : b.pack.price - a.pack.price
        );
        this.renderWallpapers();
    }

    filterFree() {
        const freePacks = this.packs.filter(p => p.free);
        this.renderFilteredPacks(freePacks);
    }

    renderFilteredPacks(packs) {
        const temp = this.packs;
        this.packs = packs;
        this.renderWallpapers();
        this.packs = temp;
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const wallpaperManager = new WallpaperManager();
    wallpaperManager.loadWallpapers();
    
    // Rendre accessible globalement si besoin
    window.wallpaperManager = wallpaperManager;
});

