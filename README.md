# WallPlay - Site Web

Site web pour WallPlay, dédié aux wallpapers esport exclusifs.

## 🎮 Structure du Projet

```
waza/
├── index.html          # Page principale
├── global.css          # Styles du site
├── wallpapers.js       # Gestionnaire de wallpapers
├── wallpapers.json     # Base de données des wallpapers
└── images/
    ├── logo.png
    ├── logo-large.png
    └── november-2025/
        ├── november-2025-pc.png
        └── november-2025-mobile.png
```

## 📝 Ajouter un Nouveau Wallpaper

Pour ajouter un nouveau wallpaper, modifiez simplement le fichier `wallpapers.json` :

```json
{
  "wallpapers": [
    {
      "id": "unique-id",
      "title": "Wallpaper Décembre 2025",
      "type": "Version PC",
      "price": 10,
      "image": "images/december-2025/december-2025-pc.png",
      "features": [
        "Haute résolution optimisée pour PC",
        "Design exclusif esport",
        "Pseudo personnalisé inclus",
        "Format: 2560x1440 et plus"
      ],
      "free": false,
      "date": "2025-12"
    }
  ]
}
```

### Champs du JSON :

- **id** : Identifiant unique (obligatoire)
- **title** : Titre du wallpaper (obligatoire)
- **type** : Type (Version PC / Version Mobile) (obligatoire)
- **price** : Prix en euros (obligatoire)
- **image** : Chemin vers l'image (obligatoire)
- **features** : Liste des caractéristiques (array)
- **free** : Gratuit (true/false) - affiche le badge "GRATUIT"
- **date** : Date au format YYYY-MM (pour tri)

## 🎨 Personnalisation des Couleurs

Les couleurs principales sont définies dans `global.css` :

```css
:root {
    --primary-color: #96ed00;    /* Vert lime */
    --secondary-color: #ff0055;  /* Rouge/Rose */
    --dark-bg: #0a0a0a;         /* Fond noir */
    --card-bg: #1a1a1a;         /* Fond cartes */
}
```

## 🚀 Fonctionnalités JavaScript

Le fichier `wallpapers.js` offre plusieurs méthodes utiles :

```javascript
// Filtrer par type
wallpaperManager.filterByType('PC');

// Trier par date (plus récent en premier)
wallpaperManager.sortByDate(false);

// Trier par prix
wallpaperManager.sortByPrice(true);
```

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints optimisés :
- Desktop : > 768px
- Mobile : ≤ 768px

## 🎯 Animations

- Smooth scroll entre les sections
- Animations au scroll (fade-in)
- Effets hover sur tous les boutons
- Badges animés (pulse)
- Quadrillage de fond dynamique

## 🔧 Technologies Utilisées

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox, Clip-path)
- JavaScript ES6+ (Classes, Fetch API, Async/Await)
- JSON pour les données

## 📄 Licence

© 2025 WallPlay - Tous droits réservés

