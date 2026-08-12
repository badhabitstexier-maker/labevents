# labevents.nc

Site officiel de **LabEvents**, activité basée en Nouvelle-Calédonie.

Le site présente deux activités distinctes : l'**événementiel** et la
**création de sites internet**. Il doit expliquer simplement, orienter
rapidement, montrer des preuves réelles et faciliter la prise de contact.

> **État du projet : Lot 1 — design system final et page d'accueil.**
> Les fondations techniques, le design system, l'en-tête, le pied de page et
> la véritable page d'accueil `/` sont en place. Les quatre autres routes
> (`/evenementiel`, `/sites-internet`, `/realisations`, `/contact`) sont
> présentes dans la navigation mais **pas encore construites** : elles font
> l'objet des lots suivants.

---

## Stack

| Élément      | Choix                                                          |
| ------------ | -------------------------------------------------------------- |
| Framework    | [Astro](https://astro.build) — génération statique par défaut   |
| Langage      | TypeScript, mode strict                                        |
| Styles       | Tailwind CSS 4, via le plugin Vite `@tailwindcss/vite`         |
| Typographies | Space Grotesk + Inter, auto-hébergées (`@fontsource-variable`)  |
| Sitemap      | `@astrojs/sitemap`                                             |

Aucun framework front (React, Vue, Svelte), aucun CMS, aucune librairie UI :
le site est statique et embarque très peu de JavaScript.

## Installation

Node.js >= 22.12.0 est requis (exigence d'Astro 7). La version cible est
épinglée dans `.nvmrc` et déclarée dans le champ `engines` de
`package.json`.

```bash
npm install
```

## Commandes

| Commande          | Effet                                                   |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Serveur de développement sur `http://localhost:4321`     |
| `npm run build`   | Build statique dans `dist/`                              |
| `npm run preview` | Prévisualise le build de production                      |
| `npm run check`   | Diagnostics Astro + vérification TypeScript              |

Avant de pousser : `npm run check && npm run build` doivent tous deux passer
sans erreur.

## Architecture

```
src/
  components/   Composants présentationnels (en-tête, pied de page,
                bloc-marque, bouton, section, portes d'activité…)
  layouts/      BaseLayout.astro — squelette HTML, métadonnées,
                en-tête et pied de page
  pages/        Routes (un fichier = une page)
  styles/       global.css — polices, design tokens, styles de base
  data/         Source unique des données du site
public/
  brand/        Logo, favicon, icônes
  images/       Photographies de réalisations
  captures/     Captures des sites réalisés
docs/
  design/       Planche graphique V1 et notes de direction graphique
```

### Pages prévues en V1

| Route             | Rôle                                                        |
| ----------------- | ----------------------------------------------------------- |
| `/`               | Comprendre les deux activités, s'orienter, voir des preuves  |
| `/evenementiel`   | L'activité événementielle et ses réalisations                |
| `/sites-internet` | L'offre de création de sites internet                        |
| `/realisations`   | Page de preuve : les projets réels                           |
| `/contact`        | Contact humain d'abord, formulaire simple ensuite            |

Aucune autre page (À propos, Tarifs, Blog…) n'est prévue en V1.

### Design tokens

Toutes les valeurs de design — couleurs, typographies, échelle typographique,
espacements, rayons, largeurs maximales, proportions de panneaux, ombres,
transitions, points de rupture — sont centralisées dans le bloc `@theme` de
`src/styles/global.css`.

L'échelle typographique mêle deux régimes : les **tailles de texte sont
fixes**, les **quatre plus grands titres sont fluides** (`clamp()`). Les
valeurs de la planche graphique en sont les maxima desktop. Un composant
écrit donc `text-4xl` une seule fois, sans variantes par point de rupture.

⚠️ Certains utilitaires Tailwind sont définis **en dur** et ne lisent pas le
thème : `max-w-prose` vaut `65ch` quel que soit `--container-prose`. La
longueur de ligne du projet s'appelle donc `--container-texte`
(`max-w-texte`, 640 px). Avant de nommer un token, vérifier qu'aucun
utilitaire Tailwind homonyme n'existe.

La **palette V1 est figée** : bleu nuit `#0F1B2D`, or `#D4A23A`, fond chaud
`#F6F4F1`, bordure `#E6E8EB`, texte `#2B2F33`, blanc `#FFFFFF`. Elle ne
change pas sans décision explicite.

Les palettes et échelles par défaut de Tailwind y sont volontairement remises
à zéro : **seules les valeurs LabEvents existent**. Une classe comme
`bg-sky-500` ou `shadow-2xl` ne produit donc rien. Un besoin non couvert par
un token est une décision de design, à ajouter au thème plutôt qu'à écrire en
dur dans un composant.

### Données

Les composants restent présentationnels et consomment `src/data/` :

- `site.ts` — identité du site et les deux activités ;
- `navigation.ts` — navigation et appels à l'action ;
- `contact.ts` — **source unique** des coordonnées ;
- `messages.ts` — formulations éditoriales validées ;
- `realisations.ts` — réalisations et trame d'étude de cas ;
- `seo.ts` — métadonnées par défaut.

Un numéro de téléphone ou une adresse e-mail ne doit jamais être écrit
ailleurs que dans `contact.ts`.

## Assets

`public/brand/`, `public/images/` et `public/captures/` sont **vides** : ils
n'accueillent que de vrais assets LabEvents (vrai logo, vraies photos de
réalisations, vraies captures des sites réalisés).

En conséquence, l'accueil ne contient **aucune photo ni capture**. Le
bloc-marque est un wordmark **typographique en HTML/CSS**
(`MarqueLabEvents.astro`), pas une image. Les emplacements visuels des deux
portes sont des **panneaux graphiques neutres** (`PanneauVisuel.astro`) :
un aplat de la palette et un pictogramme, assumés comme éléments graphiques
du site — jamais une image de démonstration qu'on pourrait prendre pour une
réalisation. Aucun favicon ni visuel Open Graph n'est produit tant qu'aucun
asset de marque réel n'existe.

Rien n'y est généré, et aucune image ne doit être extraite de la planche
graphique pour servir de preuve : les visuels de la planche sont des éléments
de démonstration.

La planche graphique validée est versionnée à
`docs/design/labevents-direction-graphique-v1.png`. C'est la référence
artistique de la V1 — composition, hiérarchie, typographies, palette,
espacements, boutons, header, traitement des réalisations. Ce n'est **pas**
une source d'assets ni de faits : ses photos et captures sont des éléments de
démonstration, jamais de vraies réalisations LabEvents. Voir
`docs/design/README.md`.

## Le fichier `CLAUDE.md`

`CLAUDE.md`, à la racine, est la **mémoire opérationnelle** du projet. Il
consigne les décisions déjà figées — architecture, positionnement, doctrine
factuelle, direction graphique, méthode de travail — pour qu'elles ne soient
pas rediscutées à chaque session de développement.

Deux règles en découlent :

1. **À lire avant toute contribution.** Il contient notamment la règle
   fondamentale du projet : *aucun fait inventé* — jamais de client, de
   témoignage, de fonctionnalité, de résultat, de chiffre, de prix, de photo
   ni de capture inventés. Une donnée manquante reste absente de l'interface,
   ou devient un `TODO` explicite dans les sources.
2. **Il ne se modifie pas silencieusement.** Toute évolution d'une décision
   existante doit être explicite dans la pull request.

## Contribution

Le projet avance par **lots courts, validés séparément** : une branche dédiée,
des commits propres, une pull request, puis un arrêt en attente de validation.
Aucune fusion automatique, aucun enchaînement automatique sur le lot suivant.
