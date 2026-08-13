# Audit du Lot 6B

Date : 13 août 2026. Branche : `codex/lot-6b-finitions-techniques`.

## Statut

Le périmètre SEO, Open Graph, liens, accessibilité élémentaire et performances
est implémenté. Le lot n'est pas déclaré terminé : le favicon nécessite encore
un arbitrage de Philippe. Le logo validé est un mot-symbole horizontal sans
pictogramme autonome ; sa réduction fidèle devient illisible à 16 et 32 px.
Aucun monogramme n'a été inventé et aucune balise favicon n'est activée.

Prévisualisation préparée :
`docs/audits/lot-6b/favicon-proposition-mot-symbole.png`.

## Métadonnées validées

| Route | Titre | Description | Canonique |
| --- | --- | --- | --- |
| `/` | `LabEvents \| Événementiel et sites web en Nouvelle-Calédonie` | `LabEvents conçoit vos événements et crée votre site internet en Nouvelle-Calédonie, avec un accompagnement local de la conception à la mise en ligne.` | `https://labevents.nc/` |
| `/evenementiel` | `Organisation d’événements en Nouvelle-Calédonie \| LabEvents` | `LabEvents conçoit et organise salons, forums et événements professionnels en Nouvelle-Calédonie, de la stratégie à la coordination opérationnelle.` | `https://labevents.nc/evenementiel` |
| `/sites-internet` | `Création de sites internet en Nouvelle-Calédonie \| LabEvents` | `LabEvents crée des sites internet clairs et adaptés aux artisans, TPE et commerces de Nouvelle-Calédonie. Votre site standard prêt en une semaine.` | `https://labevents.nc/sites-internet` |
| `/realisations` | `Réalisations événementielles et web \| LabEvents` | `Découvrez les événements, sites internet et plateformes conçus par LabEvents en Nouvelle-Calédonie, dont salonemploi.nc et l’écosystème nounou.nc.` | `https://labevents.nc/realisations` |
| `/contact` | `Contacter LabEvents \| Nouvelle-Calédonie` | `Parlez-nous de votre projet événementiel ou de votre site internet. Contactez LabEvents par formulaire, téléphone ou e-mail.` | `https://labevents.nc/contact` |

Chaque page émet une seule occurrence de `title`, description, canonical,
Open Graph et Twitter Card. Les cartes utilisent le PNG 1200 × 630 commun
`public/brand/labevents-open-graph.png` (41 741 octets), `og:type=website`,
`og:site_name=LabEvents`, `og:locale=fr_FR` et
`twitter:card=summary_large_image`. Aucun compte Twitter/X n'est déclaré.

## Liens

- destinations internes uniques : `/`, `/evenementiel`, `/sites-internet`,
  `/realisations`, `/contact` et l'ancre d'évitement `#contenu` ;
- destinations externes : `salonemploi.nc` et les cinq sites de l'écosystème
  `nounou.nc` ; les six répondent en HTTP 200 ;
- coordonnées : `tel:+687773647` et `mailto:contact@labevents.nc`, issues
  exclusivement de `src/data/contact.ts` ;
- tous les liens `target="_blank"` comportent `rel="noopener noreferrer"` ;
- aucun `href="#"`, bouton sans action, domaine de préproduction ou route
  interne cassée n'a été trouvé ;
- correction objective : le logo du footer est désormais un lien nommé vers
  l'accueil, comme celui du header.

## Accessibilité élémentaire

- un H1 unique sur chacune des cinq pages, sans modification de leur texte ;
- ordre de titres cohérent et landmarks `header`, `nav`, `main`, `footer` ;
- lien d'évitement vers `#contenu` ;
- textes alternatifs présents, SVG décoratifs ignorés et dimensions d'images
  déclarées ;
- menu mobile vérifié à 390 px : nom accessible, `aria-expanded`, fermeture
  par Échap et retour du focus au bouton ;
- formulaire Web3Forms intact : chaque champ possède un label, les champs
  requis sont identifiés, et le conteneur de statut est `aria-live="polite"`
  avec `aria-atomic="true"` ;
- styles `:focus-visible` globaux conservés et contrastes principaux mesurés :
  texte/fond blanc 13,49:1, texte atténué/fond blanc 6,00:1,
  blanc/bleu nuit 17,28:1 et or/bleu nuit 7,43:1 ;
- aucun débordement horizontal, image cassée, piège clavier ou erreur console
  constaté à 390 et 1440 px.

Cet audit limité ne constitue pas une déclaration de conformité WCAG complète.
Il ne remplace pas une revue avec technologies d'assistance réelles.

## Images et performances

Les originaux validés restent intacts. Six dérivés PNG sans recadrage servent
uniquement aux vignettes ; les dimensions déclarées ont été mises à jour pour
préserver la stabilité visuelle.

| Capture | Original | Dérivé servi | Réduction |
| --- | ---: | ---: | ---: |
| `nounou-gardiennage.png` | 6 023 618 o | 797 089 o | 86,8 % |
| `nounou-services.png` | 4 927 442 o | 627 319 o | 87,3 % |
| `nounou-pet.png` | 4 266 097 o | 618 322 o | 85,5 % |
| `nounou-home.png` | 4 035 596 o | 518 050 o | 87,2 % |
| `nounou-devoirs.png` | 3 878 217 o | 524 103 o | 86,5 % |
| `salonemploi-desktop.png` | 1 884 906 o | 463 813 o | 75,4 % |
| **Total** | **25 015 876 o** | **3 548 696 o** | **85,8 %** |

Les images principales utiles au LCP conservent `fetchpriority="high"`. Les
images sous la ligne de flottaison restent en chargement différé. Les quatre
fichiers de polices latin/latin-ext restent auto-hébergés ; le JavaScript de
page généré pèse 2 487 octets.

Lighthouse n'a pas pu être exécuté : le binaire n'est pas présent dans le
projet ni dans l'environnement fourni, et le lot interdit l'ajout d'une
dépendance. La recette navigateur de production a donc porté sur les deux
largeurs demandées, les ressources, les erreurs console et la stabilité.

## Indexation et contrôles

`robots.txt` autorise l'indexation et référence
`https://labevents.nc/sitemap.xml`. Ce sitemap contient exclusivement les cinq
routes publiques V1. Le build de production génère cinq pages statiques.

- `npm run check` : réussi, 0 erreur, 0 avertissement, 0 indication ;
- `npm run build` : réussi, 5 pages générées ;
- `git diff --check` : réussi.

La logique Web3Forms, les H1 visibles, les textes, les compositions, les
espacements, les couleurs, les boutons, les mockups et les règles responsive du
Lot 6A restent intacts. `package-lock.json` est exclu.
