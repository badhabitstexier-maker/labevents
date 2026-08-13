# labevents.nc

Site officiel de **LabEvents**, activité basée en Nouvelle-Calédonie.

Le site présente deux activités distinctes : l'**événementiel** et la
**création de sites internet**. Il doit expliquer simplement, orienter
rapidement, montrer des preuves réelles et faciliter la prise de contact.

> **État du projet : Lot 6A fusionné, Lot 6B implémenté hors favicon.**
> Les fondations techniques, le design system, l'en-tête, le pied de page,
> l'accueil `/`, les pages `/sites-internet`, `/realisations`,
> `/evenementiel` et `/contact` sont en place. Le formulaire de contact
> statique utilise toujours Web3Forms et requiert une clé publique
> d'environnement. Les assets visuels réels sont intégrés. Le Lot 6B finalise
> les métadonnées, l'image Open Graph, les liens, l'accessibilité élémentaire
> et des optimisations d'images ciblées. Le favicon reste en attente d'un
> arbitrage, le logo validé ne comportant pas de symbole autonome lisible à
> petite taille.

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

### Tester le formulaire de contact

Le formulaire `/contact` utilise Web3Forms côté client. Copiez
`.env.example` vers `.env`, puis renseignez une clé Web3Forms valide :

```bash
cp .env.example .env
# Dans .env : PUBLIC_WEB3FORMS_ACCESS_KEY=votre_cle
npm run dev
```

Le fichier `.env` reste ignoré par Git. Sans cette variable, la page reste
consultable et le formulaire affiche proprement son message d'échec lors
d'une tentative d'envoi ; aucune clé de remplacement n'est embarquée.

Pour la mise en ligne, `PUBLIC_WEB3FORMS_ACCESS_KEY` doit être configurée dans
les variables d'environnement de l'hébergement avant le build de production.
Sa vraie valeur ne doit jamais être commitée ni versionnée dans Git. Le build
statique l'injecte ensuite dans le HTML du formulaire : elle est donc visible
côté client dans les fichiers générés, ce qui est attendu pour cette clé
publique Web3Forms.

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
  decisions/    Validations et décisions complémentaires tracées par lot
```

### Pages prévues en V1

| Route             | Rôle                                                        |
| ----------------- | ----------------------------------------------------------- |
| `/`               | Comprendre les deux activités, s'orienter, voir des preuves  |
| `/evenementiel`   | L'activité événementielle et ses réalisations                |
| `/sites-internet` | L'offre de création de sites internet                        |
| `/realisations`   | Page de preuve construite : les projets réels                |
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

Le numéro de téléphone et l'adresse e-mail validés ne doivent jamais être
écrits ailleurs que dans `contact.ts`.

## Assets

`public/brand/` et `public/images/` accueillent uniquement les assets réels
fournis et validés : le logo LabEvents, les photos événementielles, les
captures Web et les deux composites de mockups. La homepage, les pages
`/evenementiel`, `/sites-internet` et `/realisations` utilisent désormais ces
visuels. Les chemins et validations exacts sont inventoriés dans `CLAUDE.md`.

Le visuel Open Graph par défaut est produit depuis le vrai logo et l'identité
figée, sans génération IA. Le favicon n'est pas activé : le mot-symbole validé
ne contient pas de pictogramme autonome lisible à 16 ou 32 px. Une proposition
de contrôle est conservée dans `docs/audits/lot-6b/` pour arbitrage ; aucun
monogramme de remplacement n'est inventé.

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

Les décisions complémentaires validées pendant les revues sont consignées
sous `docs/decisions/` et ne peuvent jamais contredire `CLAUDE.md`.

## Contribution

Le projet avance par **lots courts, validés séparément** : une branche dédiée,
des commits propres, une pull request, puis un arrêt en attente de validation.
Aucune fusion automatique, aucun enchaînement automatique sur le lot suivant.
