# Lot 3 — page `/realisations`

Date : 12 août 2026

Ce document consigne le périmètre éditorial, factuel et visuel appliqué à la
page centrale de preuve. Il complète `CLAUDE.md` sans modifier les décisions
produit déjà figées.

## Objectif

La page `/realisations` présente uniquement des projets réels de LabEvents.
Elle fonctionne comme une composition éditoriale sobre, sans avoir besoin de
simuler des preuves visuelles absentes.

## Structure livrée

1. Hero « Réalisations » et « Nos réalisations parlent pour nous. » ;
2. rappel que les projets montrés sont des réalisations réelles conçues en
   Nouvelle-Calédonie ;
3. présentation factuelle de `salonemploi.nc` à partir de
   `src/data/realisations.ts` ;
4. présentation de `nounou.nc` comme « un écosystème de cinq sites », avec
   les cinq sites et leurs activités validées ;
5. CTA final vers `/contact`, sans construire cette route qui relève du Lot 4.

## Garde-fous appliqués

- `publiable` protège l'affichage des contenus détaillés besoin / réalisé /
  résultat ; tous sont actuellement absents de l'interface ;
- `capturesValidees` protège l'affichage des captures ; aucune capture n'est
  actuellement rendue ;
- aucun faux écran, mockup, placeholder visuel ou image générée n'est ajouté ;
- aucune fonctionnalité, aucun résultat et aucun chiffre ne sont déduits ou
  inventés ;
- la formulation « cinq domaines » n'est pas utilisée et
  `services.nounou.nc` reste qualifié uniquement par « Services ».

## Données et SEO

Les contenus propres à la page sont centralisés dans
`src/data/messages.ts`. Les métadonnées sont centralisées dans
`src/data/seo.ts` avec le titre « Réalisations — LabEvents » et la description
validée du Lot 3.

## Éléments hors Lot 3

La page `/contact`, la page `/evenementiel`, la rédaction future des études
de cas, l'ajout de captures réelles et la recette globale restent dans leurs
lots ou points ouverts respectifs.
