# CLAUDE.md — mémoire opérationnelle du projet LabEvents

Ce fichier est la **mémoire pérenne** du chantier `labevents.nc`. Il consigne
les décisions produit, éditoriales, graphiques et techniques **déjà figées**,
afin qu'elles ne soient pas rediscutées à chaque session.

Ce n'est pas un duplicata du `README.md` : le README s'adresse aux humains qui
installent et font tourner le projet, ce fichier s'adresse aux sessions de
travail (humaines ou assistées) qui doivent produire du code conforme.

> **Règle de mise à jour.** Ce document est vivant mais contrôlé.
> Il évolue quand une nouvelle décision durable est validée. Mais :
> ne jamais modifier silencieusement une décision existante ; ne jamais
> remplacer une règle du projet par une préférence du modèle ; ne jamais
> inscrire une hypothèse comme décision. Toute modification substantielle
> doit apparaître explicitement dans la PR et dans le compte rendu de lot.

---

## A. Projet

- **LabEvents**, activité basée en **Nouvelle-Calédonie**.
- Site officiel à venir : **`labevents.nc`**.
- **Deux activités, et deux seulement :**
  1. **Événementiel** — activité historique ;
  2. **Création de sites internet** — nouvelle activité à lancer.

**LabEvents n'est pas une agence de communication généraliste.** Ne jamais
présenter le périmètre comme incluant indistinctement réseaux sociaux, print,
communication, marketing, branding, etc. Le site doit rester lisible et
concentré sur deux savoir-faire clairement identifiés.

**Logique générale du site :**
expliquer simplement → orienter rapidement → montrer des preuves réelles →
faciliter la prise de contact.

Le site doit donner l'impression d'un **studio qui montre son travail**, pas
d'une agence qui passe de longues pages à expliquer qu'elle est créative.

**Objectifs de la V1 :** présenter LabEvents et ses deux activités,
crédibiliser par des réalisations réelles, soutenir l'événementiel, lancer
commercialement l'offre Web et contribuer à générer les premiers prospects.
L'offre Web n'attend pas d'être industrialisée pour être présentée : la V1
doit produire les premiers clients qui permettront d'affiner le produit.

---

## B. Architecture V1 (figée)

| Route             | Rôle                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------ |
| `/`               | Faire comprendre immédiatement les deux activités, orienter, afficher très tôt des preuves. |
| `/evenementiel`   | Présenter l'activité historique, ce que LabEvents organise, des réalisations, générer des contacts. |
| `/sites-internet` | Page commerciale de l'offre Web : expliquer simplement, rassurer, générer le premier prospect. |
| `/realisations`   | Page centrale de preuve : projets réels, pas de promesse non étayée.                        |
| `/contact`        | Contact humain d'abord (téléphone, rencontre), formulaire simple en second.                 |

Navigation : Accueil · Événementiel · Sites internet · Réalisations · Contact.

**Ne PAS ajouter en V1** (sans décision explicite ultérieure) : À propos,
Tarifs, Maintenance, SEO, Modules, Blog.

**Pas de `web.labevents.nc` en V1.** L'activité Sites internet est intégrée au
site principal à `labevents.nc/sites-internet`. Un futur passage vers un
sous-domaine ou une marque autonome reste possible, mais ce n'est pas le sujet
de la V1.

---

## C. Éditorial et positionnement

### Accueil — hero retenu

- Titre : **« Que pouvons-nous faire pour vous ? »**
- Sous-titre : **« Deux expertises pour vos projets professionnels, en
  Nouvelle-Calédonie. »**

Le hero contient deux CTA directs :

- **Organiser un événement** → `/evenementiel`
- **Créer un site internet** → `/sites-internet`

Ne pas chercher à inventer une grande promesse abstraite commune aux deux
métiers.

### Offre Sites internet

- Promesse : **« Votre site internet. On s'occupe de tout. »**
- Accompagnement : **« Vous connaissez votre métier. Nous nous occupons du web. »**
- Engagement : **« Votre site professionnel, prêt en une semaine. »**

⚠️ Le délai d'une semaine vaut pour **un projet standard disposant des
informations nécessaires**. Ne jamais le transformer en engagement absolu sur
un dossier incomplet ou un projet sur mesure.

**Cible :** artisans, TPE, petits commerces, indépendants, petites structures
calédoniennes. Le problème client typique n'est pas « quel framework
choisir ? » mais « je sais qu'il me faudrait un site, mais je n'ai ni le
temps, ni les compétences, ni forcément les textes et les photos ».

**Principes produit :** le client n'a pas à choisir un CMS, un nombre de
pages, une technologie, un hébergement, une architecture technique, des
paramètres SEO, un design system ni une liste de modules. LabEvents prend en
charge la conception. Si le client a des contenus, LabEvents les améliore ;
sinon, LabEvents l'accompagne dans leur création **à partir d'informations
réelles fournies par le client** — jamais inventées.

### Page `/sites-internet` — structure retenue au Lot 2

La page commerciale suit un parcours simple :

1. hero avec la promesse, l'accompagnement, le délai standard et les CTA ;
2. problème client : besoin d'être présent sur internet, manque de temps pour
   s'en occuper ;
3. prise en charge de la conception à partir d'informations réelles ;
4. processus en quatre étapes : expliquer l'activité → préparation du site →
   vérification et ajustements → mise en ligne ;
5. cadrage explicite du délai d'une semaine ;
6. rappel des cibles : artisans, TPE, petits commerces, indépendants ;
7. projet sur mesure cadré séparément ;
8. contact humain prioritaire, « Commencer en ligne » secondaire.

Le détail éditorial appliqué est consigné dans
`docs/decisions/2026-08-12-lot2-sites-internet.md` et centralisé dans
`src/data/messages.ts`. Aucun configurateur, prix, nombre de pages, catalogue
de modules ou promesse SEO n'est ajouté.

### Page `/sites-internet` — validations complémentaires du Lot 5C

Philippe a explicitement validé le 13 août 2026 l'affichage des quatre
prestations suivantes et de leurs formulations centralisées dans
`src/data/messages.ts` : **Design responsive**, **Texte & contenus**,
**Référencement local** et **Performance**. Le bloc « Ce que vous obtenez » et
ses trois formulations y sont également validés. « Référencement local » ne
constitue pas une promesse de position ou de classement Google, qui reste
interdite.

### CTA

- **CTA principal : contact humain.** « Parlons de votre projet » /
  « Appelez-nous ». Téléphone et rencontre restent prioritaires partout.
- **CTA secondaire : « Commencer en ligne »**, qui mène vers un formulaire de
  contact simple. Pas de configurateur, pas de cahier des charges automatisé.

### Interdits d'affichage en V1

Le modèle économique est encore en validation commerciale. **Ne rien afficher**
de ce qui suit : prix, « à partir de », montant d'abonnement, formules
Bronze/Silver/Gold, catalogue tarifé de modules, nombre de pages vendu comme
produit, promesse de position Google, témoignages, chiffres commerciaux non
vérifiés.

Les formulations éditoriales validées sont centralisées dans
`src/data/messages.ts`.

---

## D. Doctrine factuelle — règle fondamentale

**Aucun fait inventé. Jamais.**

Ne jamais inventer : un client · un témoignage · une citation · une
réalisation · une fonctionnalité · un résultat · un chiffre · une
certification · une qualification · une assurance · une garantie · une
ancienneté · un prix · une adresse · un numéro de téléphone · un horaire ·
une zone d'intervention · un service · une photographie · une capture de site.

Ne jamais transformer une information plausible en information présentée comme
réelle.

**Si une donnée manque, deux options seulement :**

1. elle reste **absente de l'interface publique** ; ou
2. elle est matérialisée **dans les sources** par un `TODO` ou un placeholder
   technique explicite.

**Ne jamais publier** un placeholder du type `XX XX XX`, `Lorem ipsum`,
`Client LabEvents`, `150 clients` comme s'il s'agissait d'une vraie
information.

### Doctrine IA

L'IA est un outil de production légitime : code, organisation, rédaction
générique, propositions, reformulations. Mais elle ne doit **jamais** inventer
une donnée spécifique à LabEvents ou à un client — expérience, certifications,
qualifications, assurances, garanties, prix, prestations, résultats,
témoignages.

### Comment la doctrine est appliquée dans le code

- `src/data/contact.ts` — **source unique** des coordonnées. Chaque champ non
  fourni vaut `null`. Aucun numéro, e-mail ou adresse ne doit être écrit
  ailleurs. Les composants doivent gérer l'absence en **ne rendant rien**.
- `src/data/realisations.ts` — les mentions factuelles validées (`titre`, `url`,
  `nature`) peuvent être citées ; le drapeau `publiable` protège uniquement
  l'étude de cas détaillée (`besoin`, `realise`, `resultat`) ; les captures ont
  leur garde-fou distinct `capturesValidees`.
- `src/components/BarreReassurance.astro` — ne rend le bloc téléphone que si
  le numéro existe réellement.

---

## E. Doctrine visuelle des preuves

**Preuves réelles uniquement : vraies photos, vraies captures, vrais assets.**

Pour l'événementiel : de **vraies photos** de réalisations LabEvents. Éviter
les banques d'images, les réunions corporate fictives, et l'imagerie de carte
postale (lagons, cocotiers, plages, paysages touristiques utilisés seulement
pour dire « Nouvelle-Calédonie »). L'identité locale vient des projets, des
lieux et des personnes réels.

Pour le Web : de **vraies captures** des sites réalisés. Elles peuvent être
présentées proprement (desktop, mobile, recadrages, compositions, légère
profondeur graphique), mais **ne jamais recréer une fausse interface** pour
remplir une maquette.

Ne jamais extraire une photo ou une capture de la planche graphique pour
l'utiliser comme preuve. Si le fichier original réel correspondant n'existe
pas, l'image est **non autorisée en production**.

### Assets réels disponibles au 13 août 2026

Les assets suivants ont été fournis et sont autorisés en production :

- visuel d'accueil événementiel :
  `public/images/accueil/accueil-evenementiel.jpg` ;
- photos événementielles réelles : `public/images/evenementiel/` ;
- captures Web réelles :
  - `public/images/web/salonemploi-desktop.png` ;
  - `public/images/web/salonemploi-mobile.png` ;
  - `public/images/web/nounou-home.png` ;
  - `public/images/web/nounou-devoirs.png` ;
  - `public/images/web/nounou-pet.png` ;
  - `public/images/web/nounou-gardiennage.png` ;
  - `public/images/web/nounou-services.png`.

Les mockups définitifs fournis et leurs compositions validées sont conservés
dans `public/images/web/mockups/` :

- `mockup-portable-telephone-source.png` — source portable noir + téléphone ;
- `mockup-ecran-bureau-telephone-source.png` — source écran argenté + téléphone ;
- `salonemploi-portable-telephone.png` — composite avec les captures réelles
  desktop et mobile de `salonemploi.nc` ;
- `nounou-ecran-bureau-telephone.png` — composite avec la capture desktop et
  une capture mobile réelle de `nounou.nc` ;
- `nounou-mobile-390.png` — capture réelle de `nounou.nc` réalisée dans un
  viewport mobile de 390 px pour le téléphone du composite.

`salonemploi-mobile.png` est la capture validée montrant : **« DEUX UNIVERS
COMPLÉMENTAIRES / UNIVERS 1 / HALL EMPLOI »**. Les fichiers PNG sources sont
conservés et leur contenu ne doit pas être modifié.

Au Lot 5D.1, les cinq captures réelles de l'écosystème `nounou.nc` sont
présentées dans un châssis de laptop unique construit en HTML/CSS par
`src/components/MockupLaptop.astro`. Ce châssis est un élément décoratif de
présentation : il ne modifie, ne redessine et ne remplace aucune capture.

---

## F. Réalisations digitales connues

### salonemploi.nc

Site du **Salon de l'Emploi & de la Formation 2026**, événement **organisé par
LabEvents**. LabEvents réalise également le site associé.

⚠️ **Règle de description :** lors de la présentation publique, ne décrire que
les fonctionnalités **réellement publiées ET réellement vérifiées** au moment
de la mise en ligne de `labevents.nc`. Ne jamais reprendre une fonction depuis
une roadmap, une ancienne maquette, un document commercial, une préproduction
obsolète ou la planche graphique. La formulation doit être contrôlée à partir
du vrai site.

Philippe a validé le 13 août 2026 la publication de l'étude de cas suivante :

- **Le besoin :** « Promouvoir le salon et faciliter l’accès à l’information
  pour les exposants et les visiteurs. »
- **Ce que LabEvents a réalisé :** « Conception du site, arborescence,
  intégration, design, rédaction des contenus et version responsive. »
- **Le résultat :** « Un site unique pour présenter l’événement, les
  exposants, les offres, le programme et les informations pratiques. »

Ces rubriques ont été confirmées comme réellement publiées sur
`salonemploi.nc`. La réalisation vaut donc `statut: 'verifie'` et
`publiable: true` dans `src/data/realisations.ts`.

### Écosystème nounou.nc

LabEvents a conçu, mis en ligne et exploite un écosystème constitué de **cinq
sites** :

| Site                     | Activité         |
| ------------------------ | ---------------- |
| `nounou.nc`              | Garde d'enfants  |
| `devoirs.nounou.nc`      | Aide aux devoirs |
| `pet.nounou.nc`          | Garde d'animaux  |
| `gardiennage.nounou.nc`  | Gardiennage      |
| `services.nounou.nc`     | Services         |

- Formulation **autorisée** : « un écosystème de cinq sites ».
- Formulation **interdite** : « cinq domaines » — les quatre verticales
  complémentaires sont des **sous-domaines** de `nounou.nc`.
- **Ne pas préciser davantage la nature de `services.nounou.nc`** sans
  validation factuelle.

Philippe a également validé au Lot 5D.1 les formulations du bandeau de
l'écosystème :

- « Un même écosystème, cinq sites complémentaires conçus pour répondre à
  différents besoins du quotidien. »
- « Une identité commune » ;
- « Des parcours adaptés à chaque service » ;
- « Une conception, une mise en ligne et une exploitation assurées par
  LabEvents ».

---

## G. Trame des études de cas

Toute réalisation importante suit cette trame :

1. **Le besoin**
2. **Ce que LabEvents a réalisé**
3. **Le résultat**
4. **Voir le projet**

⚠️ Le bloc **Résultat** ne contient **qu'un fait vérifiable**.
« Un site moderne, clair et évolutif » est une **appréciation**, pas un
résultat — formulation interdite. Si aucun résultat objectif n'est disponible,
**ne rien inventer** : laisser le bloc vide.

---

## H. Direction graphique (figée)

**Sobre · contemporaine · locale · concrète · premium.**

Le blanc / très clair reste **largement majoritaire**. Le site doit respirer.

Principes : beaucoup d'espace blanc · grille claire · grandes respirations
verticales · forte hiérarchie typographique · grands visuels réels · peu
d'éléments décoratifs · composition éditoriale · peu de petites cartes
répétitives · études de cas généreuses · interfaces simples.

**Typographies** — Titres : Space Grotesk SemiBold (600). Textes, navigation,
UI : Inter.

**Palette V1 — FIGÉE.** Six valeurs de référence, reprises de la planche
graphique validée :

| Rôle                   | Valeur    | Token                 |
| ---------------------- | --------- | --------------------- |
| Bleu nuit              | `#0F1B2D` | `--color-navy-900`    |
| Or                     | `#D4A23A` | `--color-gold-500`    |
| Fond chaud             | `#F6F4F1` | `--color-paper-warm`  |
| Bordure / gris clair   | `#E6E8EB` | `--color-line`        |
| Texte                  | `#2B2F33` | `--color-ink`         |
| Blanc                  | `#FFFFFF` | `--color-paper`       |

L'or `#D4A23A` est une **valeur définitive**, pas une valeur de travail : le
logo fourni ne remet pas en cause cet arbitrage. La palette ne doit pas être
modifiée autrement que par une décision explicite.

**À proscrire** : gradients violet/bleu façon produit IA · glassmorphism ·
grosses formes 3D · ordinateurs flottants · robots · symbolique IA ·
animations décoratives constantes · multiplication d'icônes · grosses ombres ·
cartes très arrondies partout · surcharge visuelle · esthétique générique de
startup ou d'agence digitale.

**Les deux portes** (Événementiel / Sites internet) doivent rester très
lisibles : préférer un grand panneau visuel + un libellé séparé ou très
lisible, plutôt qu'un long texte blanc superposé à une photo chargée. Sur
mobile, les deux portes s'empilent proprement.

**Header en place** : logo LabEvents + navigation (Accueil, Événementiel,
Sites internet, Réalisations, Contact) + CTA « Parlons de votre projet ».
Pas de « À propos ». Desktop : navigation horizontale sobre. Mobile :
navigation compacte, accessible et réellement utilisable.

**Logo LabEvents** : le vrai logo fourni par l'utilisateur est conservé dans
`public/brand/labevents-logo.png`. Il est utilisé sans redessin ni
interprétation dans le header et le footer via
`src/components/MarqueLabEvents.astro`. Le favicon, les icônes navigateur et
l'image Open Graph restent à produire séparément.

**Barre de réassurance** : composant capable d'afficher « Appelez-nous —
[vrai numéro] » et « Un interlocuteur local ». Le numéro validé au Lot 4 vient
exclusivement de `src/data/contact.ts` ; le composant ne doit rien afficher
s’il manque, et jamais `XX XX XX`.

**Design tokens** : toutes les valeurs sont centralisées dans le bloc `@theme`
de `src/styles/global.css`. **Ne pas disperser de couleurs, tailles ou
espacements arbitraires dans les composants.** Les espaces de noms Tailwind
par défaut (`--color-*`, `--text-*`, `--font-*`, `--radius-*`, `--shadow-*`,
`--breakpoint-*`) sont volontairement remis à zéro : seules les valeurs
LabEvents existent, `bg-sky-500` ou `shadow-2xl` n'existent pas.

**Échelle typographique (arbitré au Lot 1)** : les tailles de **texte**
restent **fixes** — un texte de lecture qui rétrécit sur petit écran perd en
lisibilité. Les **quatre plus grands titres** (`--text-xl` à `--text-4xl`)
sont **fluides** en `clamp()`. Les valeurs de la planche restent les maxima
desktop (40 px pour un titre de section, 72 px pour le hero) ; le minimum est
la valeur mobile. Un composant écrit donc `text-4xl` **une seule fois**, sans
empiler `text-2xl md:text-3xl lg:text-4xl`.

**Héros intérieurs (validé au Lot 6A)** : le H1 intérieur standard reprend
`text-3xl`, comme sur `/sites-internet` et `/realisations`. La homepage reste
une exception assumée. Chaque hero conserve sa composition propre ; le filet
vertical doré du bloc éditorial d’`/evenementiel` est un choix validé et ne
doit pas être déplacé, raccourci ou généralisé aux autres pages.

⚠️ **Noms de tokens et utilitaires Tailwind en dur.** L'espace de noms
`--container-*` n'est pas remis à zéro, et certains utilitaires Tailwind sont
définis **en dur**, sans lire le thème : `max-w-prose` vaut `65ch` quoi qu'on
mette dans `--container-prose`. Le token de longueur de ligne s'appelle donc
`--container-texte` (utilitaire `max-w-texte`, 640 px). Avant de nommer un
token, vérifier qu'aucun utilitaire Tailwind homonyme n'existe déjà — sinon
le token est silencieusement ignoré.

---

## I. Référence graphique

```
docs/design/labevents-direction-graphique-v1.png
```

Cette planche est **la référence visuelle de la V1** pour la composition, la
hiérarchie, la palette, la typographie, le rythme, les boutons, le header, le
principe des deux portes, la présentation des réalisations et de l'écosystème
nounou.nc, le traitement des captures, la barre de réassurance et le
responsive.

**Mais elle n'est PAS une source d'assets ni de faits :**

- ne pas la reproduire pixel par pixel — la traduire en interface réelle,
  responsive, accessible, performante, plus respirante si nécessaire ;
- ses photos et captures sont des **éléments de démonstration**, pas de vrais
  assets LabEvents ;
- ses valeurs de remplissage (`XX XX XX`) ne doivent jamais être publiées ;
- les fonctionnalités que suggèrent ses captures ne valent pas description du
  site réel.

**Le fichier est présent dans le dépôt** (1086 × 1448, PNG). Il constitue la
référence artistique durable de la V1.

Voir `docs/design/README.md`, qui consigne aussi les valeurs extraites de la
planche vers les design tokens.

---

## J. Stack technique

- **Astro** (statique par défaut, `output: 'static'`)
- **TypeScript strict**
- **Tailwind CSS 4** via le plugin Vite `@tailwindcss/vite` (l'intégration
  `@astrojs/tailwind` n'existe plus pour Tailwind 4)
- **Polices auto-hébergées** via `@fontsource-variable/*` : aucun appel à
  Google Fonts ou à un CDN externe, ni au build ni au runtime. Les
  déclarations `@font-face` sont écrites à la main dans
  `src/styles/global.css` pour ne livrer que les sous-ensembles latin et
  latin-ext.
- **`@astrojs/sitemap`** pour le sitemap.

**Ne pas installer** React, Vue, Svelte, un CMS ou une librairie UI lourde
sans nécessité technique démontrée. Toute dépendance structurante
supplémentaire doit être justifiée **avant** installation.

**Priorités :** simplicité · performance · maintenabilité · peu de JavaScript ·
architecture claire · composants réutilisables · données centralisées.

**Performance :** génération statique, JavaScript minimal, images optimisées,
lazy-loading hors contenu critique, pas de dépendances lourdes, CLS limité,
pas de vidéo autoplay lourde, privilégier les fonctions natives d'Astro.

**Accessibilité :** HTML sémantique · navigation clavier · focus visibles
(jamais supprimer l'`outline` défini dans `global.css`) · contrastes
suffisants · structure de titres correcte · `aria` uniquement lorsque
nécessaire · `prefers-reduced-motion` respecté.

**SEO technique :** `<title>`, meta description, viewport, Open Graph et
canonique sont gérés par `src/components/BaseHead.astro`, surchargeables page
par page. Pas de stratégie SEO rédigée à ce stade. **Ne jamais promettre un
classement Google.**

---

## K. Structure du projet

```
src/
  components/   composants présentationnels (BaseHead, BarreReassurance…)
  layouts/      BaseLayout.astro — squelette HTML + métadonnées
  pages/        routes Astro (une page = un fichier)
  styles/       global.css — polices, design tokens (@theme), styles de base
  data/         source unique des données (voir ci-dessous)
public/
  brand/        logo, favicon, icônes — vrais assets uniquement
  images/       photos réelles de réalisations
  captures/     captures réelles des sites réalisés
docs/
  design/       planche graphique V1 + notes de direction graphique
  decisions/    validations et décisions complémentaires tracées par lot
```

**Couche données (`src/data/`)** — les composants restent autant que possible
**présentationnels** ; ils consomment ces modules et n'inventent rien :

| Fichier            | Contenu                                                        |
| ------------------ | -------------------------------------------------------------- |
| `site.ts`          | Identité du site, les deux activités et leurs libellés de porte |
| `navigation.ts`    | Navigation principale, CTA principal et secondaire              |
| `contact.ts`       | **Source unique** des coordonnées (`null` si non fournies)      |
| `messages.ts`      | Formulations éditoriales validées                               |
| `realisations.ts`  | Réalisations, trame d'étude de cas, drapeau `publiable`         |
| `seo.ts`           | Métadonnées SEO par défaut                                      |

Alias TypeScript disponibles : `@/*`, `@components/*`, `@layouts/*`,
`@data/*`, `@styles/*`.

---

## L. UX et responsive

Le site est **réellement pensé pour mobile**, pas seulement empilé depuis une
maquette desktop.

- header compact ; grandes zones tactiles ; CTA contact accessible ;
- texte lisible ; pas de texte important sur image complexe ;
- **aucun débordement horizontal** ; visuels correctement recadrés ;
- rythme vertical adapté.

Recette responsive minimale : **petit mobile · mobile standard · tablette ·
desktop · grand desktop**. Points de rupture définis dans les tokens :
`xs` 375 · `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536.

---

## M. Git et méthode de travail

- **Travail par lots courts, validés séparément.**
- Une **branche dédiée** par lot, des **commits propres**, une **PR**.
- **Ne jamais pousser une évolution fonctionnelle directement sur la branche
  principale.**
- **Ne fusionner aucune PR** de sa propre initiative.
- **Ne jamais enchaîner automatiquement sur le lot suivant** : s'arrêter à la
  fin de chaque lot et rendre un compte rendu.
- Ne pas créer d'autre dépôt ; ne travailler que dans `labevents`.
- Ne pas remettre en cause les décisions produit figées dans ce document,
  sauf contradiction technique réelle et importante — auquel cas l'exposer
  explicitement plutôt que de trancher seul.

**Vérification documentaire obligatoire.** À chaque nouveau développement ou
lot, vérifier avant la finalisation de la PR si `CLAUDE.md` ou `README.md`
contient une information devenue obsolète. Toute évolution de l'état des lots,
des assets, des contenus validés, de l'architecture ou des prochaines étapes
doit être documentée dans la même PR. Une PR de développement ne doit pas être
considérée comme terminée tant que cette vérification documentaire n'a pas été
faite.

---

## N. Découpage en lots

| Étape                         | Contenu                                            | État       |
| ----------------------------- | -------------------------------------------------- | ---------- |
| **Lot −1**                    | Initialisation technique et documentaire           | ✅ fait    |
| **Lot 1**                     | Design system final + Accueil                      | ✅ fait    |
| **Lot 2**                     | `/sites-internet`                                  | ✅ fait    |
| **Lot 3**                     | `/realisations`                                    | ✅ fait    |
| **Lot 4**                     | `/evenementiel` + `/contact`                       | ✅ fait    |
| **Audit technique préalable** | Validation du socle avant les assets visuels       | ✅ fait    |
| **Lot 5A**                    | Intégration des photos événementielles réelles     | ✅ fait — PR #9 fusionnée  |
| **Lot 5A.1**                  | Refonte visuelle de `/evenementiel`                | ✅ fait — PR #10 fusionnée |
| **Lot 5B**                    | Refonte finale de la HP, captures Web et vrai logo | ✅ fait — PR #11 fusionnée |
| **Lot 5C.3**                  | Correction finale et recette de `/sites-internet`   | ✅ fait — PR #12 fusionnée |
| **Lot 5D**                    | Finition visuelle de `/realisations`               | ✅ fait — PR #14 fusionnée |
| **Lot 5D.1**                  | Rapprochement fidèle de la maquette `/realisations` | ✅ fait — PR #14 fusionnée |
| **Lot 5E**                    | Refonte visuelle finale de `/contact`              | ✅ fait — PR #15 fusionnée |
| **Lot 6A**                    | Harmonisation visuelle transversale                | ✅ implémenté — PR brouillon à valider |
| **Lot 6**                     | Recette finale et préparation de la mise en ligne  | à venir    |

### État actuel des pages

- la homepage `/` est terminée ;
- `/evenementiel` est terminée et validée sur desktop et mobile ;
- `/contact` est fonctionnelle avec Web3Forms et sa refonte visuelle du Lot 5E
  est fusionnée ;
- `/sites-internet` est finalisée au Lot 5C.3 ;
- `/realisations` est finalisée au Lot 5D.1 avec l'étude de cas validée de
  `salonemploi.nc`, les vraies captures et les cinq châssis de laptops ; la
  PR #14 est fusionnée.

**Lot −1 livré :** projet Astro à la racine, TypeScript strict, Tailwind 4,
design tokens, polices auto-hébergées, couche données, SEO technique,
accessibilité de base, arborescence d'assets, documentation.

**Lot 1 livré :** design system finalisé (échelle typographique fluide pour
les grands titres, proportions de panneaux, filet de focus), composant de
marque, en-tête définitif avec navigation mobile accessible, pied de page,
véritable page d'accueil `/` en neuf sections, composants réutilisables
(`Section`, `Bouton`, `MarqueLabEvents`, `PorteActivite`, `PanneauVisuel`,
`MiseEnAvantRealisation`, `EcosystemeNounou`, `EnTeteSite`, `PiedDePage`),
métadonnées SEO de l'accueil. La page de vérification technique temporaire a
été **intégralement remplacée**.

La homepage a ensuite été finalisée au Lot 5B avec le vrai logo, les photos et
les captures Web réelles décrites en section E.

**Lot 2 livré :** page commerciale `/sites-internet`, structurée autour de la
promesse « Votre site internet. On s'occupe de tout. », du processus en quatre
étapes, du cadrage explicite du délai d'une semaine pour un projet standard,
des cibles retenues, du traitement séparé du sur-mesure et des CTA vers le
contact. Les textes vivent dans `src/data/messages.ts` et les métadonnées dans
`src/data/seo.ts`. Aucun prix, configurateur, volume de pages, promesse SEO,
fonctionnalité métier inventée n'est ajouté. Le Lot 5C a complété cette base
éditoriale par une composition visuelle utilisant les captures Web réelles.

**Lot 3 livré :** page centrale de preuve `/realisations`, avec son hero,
la présentation factuelle de `salonemploi.nc`, l'écosystème de cinq sites
`nounou.nc` et le CTA final vers `/contact`. La page consomme exclusivement
`src/data/realisations.ts` et applique les garde-fous `publiable` et
`capturesValidees`. Les contenus besoin / réalisé / résultat restent absents
tant qu'ils ne sont pas validés. Sa finition visuelle avec les vraies captures
a été réalisée au Lot 5D. Le détail du périmètre initial est consigné dans
`docs/decisions/2026-08-12-lot3-realisations.md`.

**Lot 4 livré :** page `/evenementiel` avec le positionnement BtoB / BtoC,
les huit réalisations événementielles validées ; page `/contact` donnant la
priorité au téléphone et à l’e-mail validés, puis formulaire statique
Web3Forms avec validation native, états accessibles, honeypot et gestion
d’erreur. La clé publique est fournie uniquement par
`PUBLIC_WEB3FORMS_ACCESS_KEY`. Les photos réelles ont été intégrées au Lot 5A
et la refonte visuelle de `/evenementiel` a été validée au Lot 5A.1.

**Audit technique préalable validé :** recette technique et de cohérence des cinq routes V1,
contrôle du build statique, du sitemap, de `robots.txt`, des métadonnées, des
liens internes, des formulaires et des garde-fous factuels. La documentation
de production précise désormais que `PUBLIC_WEB3FORMS_ACCESS_KEY` doit être
configurée dans l'environnement d'hébergement avant le build, sans jamais être
versionnée. Les réserves relatives aux vrais assets et aux études de cas
étaient alors encore ouvertes. Le verdict de cette étape était : **socle V1
techniquement validé avant intégration des assets visuels**.

**Lot 5A terminé — PR #9 fusionnée :** les photos événementielles réelles ont
été intégrées depuis `public/images/evenementiel/`.

**Lot 5A.1 terminé — PR #10 fusionnée :** `/evenementiel` a été refondue puis
validée sur desktop et mobile.

**Lot 5B terminé — PR #11 fusionnée :** la homepage a reçu sa finition
visuelle, les vraies captures Web, le visuel d'accueil événementiel et le vrai
logo LabEvents utilisé dans le header et le footer.

**Lot 5C.3 terminé — PR #12 fusionnée :** `/sites-internet` utilise les deux
mockups PNG définitifs fournis par Philippe. Seules les zones vertes de leurs
écrans ont été remplacées par les captures réelles de `salonemploi.nc` et
`nounou.nc`, sans redessin des appareils ni modification du périmètre
éditorial validé. Le H1 mobile est séparé en deux groupes lisibles et la page
a été recettée du hero au footer sur mobile et desktop.

**Lot 5D et correctif 5D.1 terminés — PR #14 fusionnée :** `/realisations` reprend la
composition éditoriale finale avec son hero en deux colonnes, son bandeau
chaud, le mockup validé
`/images/web/mockups/salonemploi-portable-telephone.png`, les cinq captures
réelles de l'écosystème `nounou.nc`, le bloc de principes et le CTA final.
Le correctif 5D.1 rétablit les trois blocs explicatifs validés de
`salonemploi.nc`, rapproche le hero de la maquette, place les cinq captures
`nounou.nc` dans le composant partagé `MockupLaptop.astro` et recompose le
bandeau factuel de l'écosystème. Les captures restent
`capturesValidees: true`. `salonemploi.nc` est `publiable: true` ;
`nounou.nc` reste `publiable: false` avec ses trois champs détaillés à `null`.

**Lot 5E terminé — PR #15 fusionnée :** `/contact` reprend la
composition finale validée : hero clair avec motif de courbes décoratif,
bandeau bleu nuit donnant la priorité aux coordonnées, grande carte à deux
colonnes pour l’accompagnement et le formulaire, puis bandeau de trois repères.
Le header et le footer globaux restent inchangés. Le téléphone et l’e-mail
proviennent toujours exclusivement de `src/data/contact.ts` et restent soumis
aux garde-fous de disponibilité.

Le formulaire conserve Web3Forms, ses champs, ses attributs, sa validation
native, son consentement, son honeypot, ses retours accessibles et sa logique
d’envoi. Les trois repères inférieurs retenus sont :

- « Un premier échange » — « Échangeons sur votre besoin et les prochaines
  étapes. » ;
- « Une demande orientée » — « Précisez s’il s’agit d’un événement,
  d’un site internet ou d’une autre demande. » ;
- « Vos informations » — « Les informations transmises sont utilisées
  pour répondre à votre demande. »

La branche du Lot 5E a été resynchronisée avec le `main` contenant la PR #14.
Les apports documentaires et éditoriaux des deux lots sont conservés et la
recette complète a été rejouée avant la fusion de la PR #15.

**Lot 6A implémenté — PR brouillon à valider :** quatre corrections ciblées
harmonisent les hauteurs des boutons et des héros de `/realisations`,
`/contact`, `/sites-internet` et `/evenementiel`, sans refonte générale ni
modification de contenu.

---

## O. Points ouverts (à ce jour non tranchés)

Ces points sont **volontairement laissés ouverts**. Ne pas les trancher seul,
ne pas les combler par une invention.

1. ~~**Planche graphique**~~ — **CLOS.** Le fichier est dans le dépôt à
   `docs/design/labevents-direction-graphique-v1.png` (voir section I).
2. **Logo LabEvents** — **CLOS au Lot 5B.** Le vrai logo fourni par
   l'utilisateur est conservé dans `public/brand/labevents-logo.png` et rendu
   dans le header et le footer via `MarqueLabEvents.astro`, sans redessin ni
   interprétation. **Restent ouverts uniquement :** le favicon, les icônes
   navigateur et l'image Open Graph. `seoDefauts.imageParDefaut` vaut toujours
   `null` et aucune balise `og:image` n'est émise.
3. **Coordonnées** — le téléphone `77 36 47` et l’e-mail
   `contact@labevents.nc` ont été fournis au Lot 4. L’adresse et les horaires
   restent inconnus et valent `null` dans `src/data/contact.ts`.
4. ~~**Photos événementiel et captures des sites**~~ — **CLOS aux Lots 5A,
   5B et 5D.** Les assets réels disponibles sont inventoriés en section E et
   leur intégration finale dans `/realisations` est terminée.
5. **Contenu de l'étude de cas** `nounou.nc` — à rédiger après vérification
   sur les sites réels ; `publiable: false` en attendant. Le contenu de
   `salonemploi.nc` est clos et publiable depuis le Lot 5D.1.
6. ~~**Formulaire de contact**~~ — **CLOS au Lot 4.** Envoi côté client via
   Web3Forms, sans backend LabEvents. La clé publique n’est jamais versionnée
   et provient de `PUBLIC_WEB3FORMS_ACCESS_KEY`.
7. **Hébergement et déploiement** — non décidés. Aucune configuration de
   plateforme n'a été ajoutée.
8. ~~**Échelle typographique fluide**~~ — **CLOS au Lot 1.** Arbitrage :
   **fluide pour les grands titres, fixe pour le texte** (voir section H).
   Les quatre plus grandes tailles passent en `clamp()`, centralisées dans
   les tokens ; les tailles de lecture ne bougent pas.
9. **Indicateur de focus sur fond clair** — l'or `#D4A23A` ne mesure
   qu'environ 2,3:1 sur blanc, sous le seuil de 3:1 attendu d'un indicateur
   de focus. Le Lot 1 lui adjoint un filet bleu nuit (`--shadow-focus`) pour
   rester lisible sur fond clair, **sans modifier la palette**. Si un jour
   une couleur de focus dédiée est souhaitée, c'est une décision explicite.

---

## P. Prochaines étapes

1. validation de la PR brouillon du Lot 6A ;
2. finition globale du header et du footer ;
3. favicon et Open Graph ;
4. suite du Lot 6 — recette globale ;
5. préparation de la mise en production.
