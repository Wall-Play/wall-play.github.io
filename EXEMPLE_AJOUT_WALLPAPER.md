# 📝 Comment Ajouter un Nouveau Pack de Wallpapers

## Étape 1 : Préparer les Images

Placez vos nouvelles images dans le dossier `images/` :

```
images/
└── december-2025/           ← Nouveau dossier
    ├── december-2025-pc.png
    └── december-2025-mobile.png
```

## Étape 2 : Modifier wallpapers.json

Ouvrez le fichier `wallpapers.json` et ajoutez votre nouveau pack dans l'array :

```json
{
  "packs": [
    {
      "id": "november-2025",
      "title": "Wallpaper Novembre 2025",
      "date": "2025-11",
      "free": true,
      "pc": {
        "price": 10,
        "image": "images/november-2025/november-2025-pc.png",
        "features": [
          "Haute résolution optimisée pour PC",
          "Design exclusif esport",
          "Pseudo personnalisé inclus",
          "Format: 2560x1440 et plus"
        ]
      },
      "mobile": {
        "price": 5,
        "image": "images/november-2025/november-2025-mobile.png",
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
    },
    
    // ⬇️ AJOUTER ICI VOS NOUVEAUX PACKS ⬇️
    
    {
      "id": "december-2025",
      "title": "Wallpaper Décembre 2025",
      "date": "2025-12",
      "free": false,
      "pc": {
        "price": 10,
        "image": "images/december-2025/december-2025-pc.png",
        "features": [
          "Design exclusif Gentle Mates",
          "Résolution 4K optimisée",
          "Pseudo personnalisé inclus",
          "Formats multiples disponibles"
        ]
      },
      "mobile": {
        "price": 5,
        "image": "images/december-2025/december-2025-mobile.png",
        "features": [
          "Design exclusif Gentle Mates",
          "Optimisé pour smartphones",
          "Pseudo personnalisé inclus",
          "Format Full HD+"
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

## Étape 3 : C'est Tout ! 🎉

Actualisez votre navigateur et les nouveaux wallpapers apparaîtront automatiquement !

---

## 💡 Astuces

### Badge "GRATUIT"

Pour afficher le badge rouge "GRATUIT" :
```json
"free": true
```

Pour ne pas l'afficher :
```json
"free": false
```

### Ordre d'Affichage

Les packs apparaissent dans l'ordre du fichier JSON.
Pour les trier, réorganisez-les dans le fichier.

### ID Unique

Chaque pack DOIT avoir un `id` unique.
Format recommandé : `mois-annee`
Exemples :
- `january-2026`
- `february-2026`
- `gentle-mates-special`

### Prix du Pack

Le prix du pack doit être calculé :
```json
"pack": {
  "price": 13,        // Prix total du pack
  "discount": 2       // Économie (PC + Mobile - Pack)
}
```
Exemple : PC (10€) + Mobile (5€) = 15€
Pack à 13€ = 2€ d'économie

### Features

Ajoutez autant de caractéristiques que vous voulez pour chaque version :
```json
"pc": {
  "features": [
    "Caractéristique 1",
    "Caractéristique 2",
    "Caractéristique 3"
  ]
},
"mobile": {
  "features": [
    "Caractéristique 1",
    "Caractéristique 2",
    "Caractéristique 3"
  ]
}
```

---

## 🎨 Exemple Complet : Collection Karmine Corp

```json
{
  "id": "karmine-corp-2026",
  "title": "Collection Karmine Corp 2026",
  "date": "2026-01",
  "free": false,
  "pc": {
    "price": 12,
    "image": "images/karmine-corp-2026/karmine-corp-pc.png",
    "features": [
      "Design exclusif Karmine Corp",
      "Résolution 4K (3840x2160)",
      "Pseudo personnalisé",
      "Logo KC intégré",
      "Édition limitée"
    ]
  },
  "mobile": {
    "price": 6,
    "image": "images/karmine-corp-2026/karmine-corp-mobile.png",
    "features": [
      "Design exclusif Karmine Corp",
      "Format Full HD+",
      "Pseudo personnalisé",
      "Logo KC intégré",
      "Édition limitée"
    ]
  },
  "pack": {
    "price": 15,
    "discount": 3
  }
}
```

---

## ⚠️ Points Importants

1. **Toujours vérifier la syntaxe JSON** (virgules, guillemets, crochets)
2. **Tester les chemins d'images** avant de publier
3. **Utiliser des ID uniques** pour chaque pack
4. **Respecter le format de date** : `"YYYY-MM"`
5. **Chaque pack doit avoir PC ET Mobile** - les deux versions sont affichées ensemble
6. **Calculer correctement la réduction** : `(prix PC + prix Mobile) - prix pack`

---

## 🔧 Dépannage

### Les wallpapers ne s'affichent pas ?

1. Vérifiez la syntaxe JSON sur [JSONLint](https://jsonlint.com/)
2. Vérifiez que les chemins d'images sont corrects
3. Ouvrez la console du navigateur (F12) pour voir les erreurs

### L'image ne charge pas ?

- Vérifiez le chemin : `"images/dossier/fichier.png"`
- Vérifiez l'orthographe du nom de fichier
- Assurez-vous que l'image existe dans le dossier

