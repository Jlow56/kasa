# 🏡 Kasa - Refonte d’une plateforme de location immobilière

Refonte complète de l’application **Kasa**, codée il y a plus de 10 ans, désormais propulsée par une stack JavaScript moderne (**React**, **Vite**, **SCSS**).  
Le but principal du projet est de **maîtriser React**, le **routage avec React Router**, les **composants dynamiques**, les **props**, les **hooks**, et **l’état** dans une application web front-end.

---

## 📚 Objectifs pédagogiques

- Mettre en œuvre le **routage** dans une application React
- Créer des **composants dynamiques et réutilisables**
- Utiliser **SCSS** pour structurer le style
- Appliquer les bonnes pratiques de **gestion d’état**, **props**, et **comportement conditionnel**
- Gérer une **navigation sans erreur** avec React Router (`Navigate`, `useParams`, gestion de 404)

---

## ⚙️ Stack technique

- 🔧 **Vite.js** — Initialisation et bundling rapide
- ⚛️ **React** — Composants et gestion d’état
- 📁 **React Router DOM** — Navigation entre les pages
- 🎨 **SCSS** — Styling modulaire et structuré
- 📄 **Données JSON locales** — Simulation de base de données

---

## 🚀 Installation

```bash
# Clone le repo
git clone https://github.com/Jlow56/kasa.git

# Va dans le dossier du projet
cd kasa

# Installe les dépendances
npm install

# Lance l'application
npm run dev

## 🖼️ Pages et Composants

| Page             | URL                    | Fonctionnalité principale                                      |
|------------------|------------------------|----------------------------------------------------------------|
| Accueil          | `/`                    | Affiche la liste des logements via le composant `Card`         |
| À propos         | `/a-propos`            | Contenu dynamique dans des `Collapse` avec animation           |
| Détail logement  | `/fiche-logement/:id`  | Détails d’un logement (slideshow, tags, rating, etc.)          |
| Page 404         | `*`                    | Affiche une page d’erreur personnalisée                        |

---

## 📁 Architecture simplifiée

```bash
src/
├── assets/          # Images, logo, icônes
├── components/      # Header, Footer, Card, Banner, Collapse, Slideshow, etc.
├── data/            # logements.json
├── pages/           # Home.jsx, About.jsx, Housing.jsx, Error404.jsx
├── router/          # index.jsx
├── styles/          # SCSS globaux et par composants
├── App.jsx
└── main.jsx