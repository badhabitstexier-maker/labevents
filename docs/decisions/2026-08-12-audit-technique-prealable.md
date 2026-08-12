# Audit technique préalable — socle V1

Date : 12 août 2026

Ce document consigne l'audit technique réalisé après le Lot −1 et les Lots 1
à 4, avant l'intégration des assets visuels réels. Il complète
`CLAUDE.md` sans modifier les décisions produit, éditoriales, factuelles ou
visuelles déjà validées.

## Périmètre contrôlé

La recette couvre les cinq routes de l'architecture V1 : `/`,
`/evenementiel`, `/sites-internet`, `/realisations` et `/contact`.

Les contrôles automatisés ont porté sur :

- l'installation reproductible, les diagnostics Astro / TypeScript et le
  build statique ;
- la réponse HTTP des cinq routes depuis le serveur de prévisualisation ;
- les liens internes, les titres de document, les descriptions, les URL
  canoniques, les métadonnées Open Graph de base et la langue du document ;
- la présence d'un seul `h1` par page et l'association des libellés aux champs
  du formulaire ;
- `robots.txt`, le sitemap et ses cinq URL ;
- la centralisation des coordonnées, l'absence de secret versionné et
  l'exclusion des fichiers `.env` par Git ;
- le comportement contrôlé du formulaire lorsque la clé Web3Forms est absente.

## Corrections documentaires de l'audit

- le statut du projet dans le `README.md` consigne l'audit technique préalable ;
- la documentation précise que `PUBLIC_WEB3FORMS_ACCESS_KEY` doit être
  configurée dans l'environnement d'hébergement avant le build de production ;
- la mémoire du projet enregistre la validation technique du socle avant les
  assets, sans présenter la recette finale comme achevée.

## Réserves non bloquantes

Les vrais assets de marque, le favicon, l'éventuelle image Open Graph, les
photos événementielles avec leurs textes alternatifs et les captures de
réalisations digitales restent à fournir par LabEvents. Les surfaces neutres
validées et les garde-fous `publiable` / `capturesValidees` sont conservés :
aucun faux asset ni contenu factuel n'a été créé pour les remplacer.

Les études de cas détaillées restent également absentes tant que leurs faits
n'ont pas été vérifiés et validés.

## Verdict technique

Le **socle V1 est techniquement validé avant intégration des assets visuels**.
Ce verdict ne signifie pas que le site est prêt à être publié dans son état
visuel actuel. Le Lot 5 doit produire et intégrer les assets visuels réels ; le
Lot 6 assurera ensuite la recette finale et la préparation de la mise en ligne.

La disponibilité distante des sites externes n'a pas pu être confirmée depuis
l'environnement de recette, dont le proxy refuse les connexions sortantes.
Leurs URL HTTPS ont en revanche été contrôlées dans les sources.

## À valider par LabEvents

- fournir et valider les vrais assets de marque ;
- fournir et valider le favicon et l'éventuelle image Open Graph ;
- fournir et valider les vraies photos événementielles et leurs textes
  alternatifs ;
- fournir et valider les vraies captures des réalisations digitales ;
- vérifier les faits puis valider les contenus détaillés des études de cas ;
- configurer `PUBLIC_WEB3FORMS_ACCESS_KEY` sur l'hébergement au moment du
  déploiement.
