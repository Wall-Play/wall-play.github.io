# WallPlay - Site Web 🎮

Site web moderne pour WallPlay, plateforme dédiée aux wallpapers esport exclusifs avec design cyberpunk et carrousel interactif.

## ✨ Fonctionnalités

### 🎯 Navigation Interactive
- **Carrousel de wallpapers** avec navigation par flèches (⬅️ ➡️)
- **Navigation clavier** (touches fléchées)
- **Indicateurs de position** (dots cliquables)
- **Compteur** de packs (ex: 1 / 3)

### 🔍 Système de Filtres
- **Filtre "Tous"** : Affiche tous les packs
- **Filtre "Gratuit"** : Wallpapers gratuits uniquement
- **Filtre "Payant"** : Wallpapers payants uniquement
- **Barre de recherche** : Recherche en temps réel par titre/ID

### 📦 Affichage en Packs
Chaque pack contient :
- Version PC (côte à côte avec version Mobile)
- Version Mobile
- Prix individuels + Prix du pack complet
- Indication de l'économie réalisée

### 🎨 Design Esport
- **Style angulaire** avec coins coupés (clip-path)
- **Quadrillage de fond** animé
- **Effets néon** sur tous les éléments interactifs
- **Animations fluides** et transitions smooth
- **Badges animés** avec effet pulse

## 🎮 Structure du Projet

```
waza/
├── index.html              # Page principale
├── global.css              # Styles du site (design esport)
├── wallpapers.js           # Gestionnaire de carrousel et filtres
├── wallpapers.json         # Base de données des packs
├── README.md               # Documentation
├── EXEMPLE_AJOUT_WALLPAPER.md  # Guide d'ajout de wallpapers
└── images/
    ├── logo.png            # Logo navigation
    ├── logo-large.png      # Logo hero
    ├── logo-erlow.png      # Logo crédit Erlow
    ├── logo-wazakiss.png   # Logo crédit Wazakiss
    └── november-2025/
        ├── november-2025-pc.png
        └── november-2025-mobile.png
```

## 📝 Ajouter un Nouveau Pack de Wallpapers

Pour ajouter un nouveau pack, modifiez le fichier `wallpapers.json` :

```json
{
  "packs": [
    {
      "id": "december-2025",
      "title": "Wallpaper Décembre 2025",
      "date": "2025-12",
      "free": false,
      "pc": {
        "price": 10,
        "image": "images/december-2025/december-2025-pc.png",
        "features": [
          "Haute résolution optimisée pour PC",
          "Design exclusif esport",
          "Pseudo personnalisé inclus",
          "Format: 2560x1440 et plus"
        ]
      },
      "mobile": {
        "price": 5,
        "image": "images/december-2025/december-2025-mobile.png",
        "features": [
          "Optimisé pour smartphones",
          "Design exclusif esport",
          "Pseudo personnalisé inclus",
          "Format: 1080x1920 et plus"
        ]
      },
      "pack": {
        "price": 13,
        "discount": 2
      }
    }
  ]
}
```

### 📋 Champs du JSON :

#### Pack Principal
- **id** : Identifiant unique du pack (ex: "december-2025")
- **title** : Titre du pack
- **date** : Date au format YYYY-MM (pour tri)
- **free** : true/false - affiche le badge "GRATUIT"

#### Version PC
- **price** : Prix en euros
- **image** : Chemin vers l'image PC
- **features** : Liste des caractéristiques PC

#### Version Mobile
- **price** : Prix en euros
- **image** : Chemin vers l'image Mobile
- **features** : Liste des caractéristiques Mobile

#### Pack Complet
- **price** : Prix du pack complet
- **discount** : Économie réalisée (PC + Mobile - Pack)

> 💡 **Conseil** : Consultez `EXEMPLE_AJOUT_WALLPAPER.md` pour un guide détaillé avec exemples.

## 🎨 Personnalisation des Couleurs

Les couleurs principales sont définies dans `global.css` :

```css
:root {
    --primary-color: #96ed00;    /* Vert lime (couleur principale) */
    --secondary-color: #ff0055;  /* Rouge/Rose (badges, accents) */
    --dark-bg: #0a0a0a;         /* Fond noir */
    --card-bg: #1a1a1a;         /* Fond cartes */
    --text-primary: #ffffff;    /* Texte principal */
    --text-secondary: #b0b0b0;  /* Texte secondaire */
    --accent-gradient: linear-gradient(135deg, #96ed00 0%, #00b8ff 100%);
}
```

### 🎭 Échelle Typographique

Le site utilise une échelle de tailles cohérente :
- **XS** : 14px - Petits labels
- **SM** : 16px - Texte normal
- **MD** : 18px - Texte important
- **LG** : 20px - Sous-titres
- **XL** : 24px - Titres moyens
- **2XL** : 32px - Grands titres
- **3XL** : 40px - Titres de sections
- **4XL** : 48px - Titres principaux
- **5XL** : 64px - Hero

## 🚀 Utilisation du JavaScript

Le fichier `wallpapers.js` gère automatiquement :
- Chargement dynamique des packs depuis JSON
- Navigation dans le carrousel
- Filtrage par catégorie
- Recherche en temps réel
- Mise à jour des indicateurs

### Méthodes Disponibles

```javascript
// Accès global au manager
wallpaperManager

// Navigation manuelle
wallpaperManager.nextPack()        // Pack suivant
wallpaperManager.previousPack()    // Pack précédent
wallpaperManager.goToPack(2)       // Aller au pack 3 (index 2)

// Filtrage
wallpaperManager.filterPacks('free')   // Afficher gratuits
wallpaperManager.filterPacks('paid')   // Afficher payants
wallpaperManager.filterPacks('all')    // Afficher tous

// Recherche
wallpaperManager.searchPacks('novembre')  // Rechercher

// Tri
wallpaperManager.sortByDate(false)     // Trier par date (récent)
wallpaperManager.sortByPrice(true)     // Trier par prix (croissant)
```

## ⌨️ Raccourcis Clavier

- **← (Flèche gauche)** : Pack précédent
- **→ (Flèche droite)** : Pack suivant

## 📱 Responsive Design

Le site est 100% responsive avec breakpoints optimisés :

### Desktop (> 768px)
- Carrousel avec grandes flèches
- Filtres en ligne
- Packs en 2 colonnes (PC | Mobile)

### Mobile (≤ 768px)
- Flèches réduites
- Filtres empilés verticalement
- Packs en 1 colonne (empilés)
- Navigation tactile optimisée

## 🎯 Animations & Effets

### Interactions
- **Boutons CTA** : Effet de cercle expansif + flèche animée
- **Boutons Download** : Lumière qui traverse au hover
- **Navigation** : Scale + glow au hover
- **Badges** : Animation pulse continue
- **Cartes** : Lift effect + shadow dynamique

### Transitions
- Carrousel : Slide smooth avec fade
- Filtres : Mise à jour instantanée
- Recherche : Temps réel sans délai

### Fond
- **Quadrillage double couche** :
  - Petite grille : 50x50px (1px)
  - Grande grille : 250x250px (2px)
  - Couleur : #96ed00 avec opacité variable

## 🔧 Technologies Utilisées

### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : 
  - Variables CSS (thème)
  - Grid & Flexbox (layout)
  - Clip-path (formes angulaires)
  - Animations & Transitions
  - Media Queries (responsive)

### JavaScript
- **ES6+** : Classes, Arrow Functions
- **Fetch API** : Chargement asynchrone
- **DOM Manipulation** : Génération dynamique
- **Event Listeners** : Interactions utilisateur

### Données
- **JSON** : Base de données des packs
- **Lazy Loading** : Images chargées à la demande

## 👥 Crédits

### 💻 Développement
**Erlow** - Développement du site web  
🔗 [Site Web](https://erlinks.github.io/)

### 🎨 Design & Wallpapers
**Wazakiss** - Création des wallpapers  
🔗 [Twitter](https://x.com/WazaKissDesign)  
🔗 [Discord](https://discord.gg/SNvcaKK7yk)

## 📄 Licence

© 2025 WallPlay - Design Esport Exclusif  
Tous droits réservés

---

## 🚀 Démarrage Rapide

1. **Cloner le projet**
2. **Ajouter vos images** dans `images/votre-dossier/`
3. **Modifier** `wallpapers.json`
4. **Ouvrir** `index.html` dans un navigateur
5. **Profiter** ! 🎮

Pour plus de détails, consultez `EXEMPLE_AJOUT_WALLPAPER.md`

