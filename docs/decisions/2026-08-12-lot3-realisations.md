# Lot 3 — page `/realisations`

Date : 12 août 2026

Ce document consigne le périmètre appliqué à la page Réalisations. Il complète `CLAUDE.md` sans modifier les décisions produit ou la doctrine factuelle déjà figées.

## Objectif

La page `/realisations` est la page de preuve du site LabEvents. Elle doit présenter des projets réels de façon éditoriale, généreuse et sobre, sans inventer de contenu pour remplir une étude de cas ou un emplacement visuel.

## Contenu public autorisé au Lot 3

Deux réalisations digitales déjà établies sont présentées :

- `salonemploi.nc` — uniquement avec les faits validés présents dans `src/data/realisations.ts` ;
- l'écosystème `nounou.nc` — avec la formulation « un écosystème de cinq sites » et la liste des cinq sites / activités déjà validée.

Le hero réutilise les formulations déjà validées au Lot 1 : « Nos réalisations parlent pour nous. » et « Nous ne montrons pas des maquettes, mais des réalisations réelles, conçues en Nouvelle-Calédonie. »

## Études de cas et captures

Les études de cas détaillées restent protégées par `publiable`. Tant que `besoin`, `realise` et `resultat` ne sont pas vérifiés et explicitement publiables, ces blocs ne sont pas rendus.

Les captures restent protégées séparément par `capturesValidees`. Tant qu'aucune vraie capture n'est fournie et validée, la page Réalisations reste volontairement éditoriale : aucun faux écran, aucune interface recréée, aucun placeholder présenté comme preuve.

Lorsque de vraies captures seront disponibles, les composants existants pourront les afficher sans modifier la doctrine de la page.

## Structure retenue

1. Hero Réalisations.
2. Mise en avant `salonemploi.nc`.
3. Mise en avant de l'écosystème `nounou.nc` et de ses cinq sites.
4. Bloc final de prise de contact.

## Interdits maintenus

Aucun témoignage, résultat, chiffre, fonctionnalité, capture, photo, client, prix ou qualification non vérifié. Aucun contenu provenant d'une maquette, d'une roadmap, d'une préproduction ou de la planche graphique ne peut être transformé en preuve publique.

## Hors Lot 3

La collecte / validation de vraies captures, la rédaction des études de cas détaillées, les pages `/evenementiel` et `/contact`, l'hébergement et le déploiement restent hors Lot 3.
