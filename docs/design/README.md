# Direction graphique — références visuelles

## Fichier attendu

```
docs/design/labevents-direction-graphique-v1.png
```

> **⚠️ CE FICHIER EST ACTUELLEMENT MANQUANT DANS LE DÉPÔT.**
>
> La planche graphique V1 a bien été validée et transmise dans la
> conversation de cadrage du Lot −1, mais l'image n'était pas accessible
> comme fichier depuis l'environnement d'exécution : seul son rendu visuel
> l'était.
>
> Conformément à la doctrine du projet (aucune donnée inventée, aucun asset
> fabriqué), **aucune image de substitution n'a été générée**. Une planche
> reconstituée de mémoire ne serait pas la référence validée et deviendrait
> une source d'erreurs pour tous les lots suivants.
>
> **Action manuelle requise :** déposer le fichier PNG original à ce chemin
> exact, puis le commiter. Aucun autre changement n'est nécessaire : le nom
> du fichier est déjà référencé dans `CLAUDE.md`, dans `README.md` et dans
> l'en-tête de `src/styles/global.css`.

## Statut de la planche

La planche V1 est la **référence visuelle principale** du projet. Elle guide :

- la composition et la hiérarchie ;
- la typographie et l'échelle typographique ;
- la palette ;
- les espacements et le rythme vertical ;
- les boutons et le header ;
- le principe des deux portes (Événementiel / Sites internet) ;
- la présentation des réalisations et de l'écosystème nounou.nc ;
- le traitement des captures de sites ;
- la barre de réassurance ;
- le comportement responsive.

## Ce que la planche n'est PAS

**La planche n'est pas une source factuelle.**

- Elle ne doit pas être reproduite pixel par pixel : elle doit être traduite
  en interface web réelle, responsive, accessible et performante — plus
  respirante que la planche si nécessaire.
- Les photos et captures qui y figurent sont des **éléments de démonstration**.
  Elles ne doivent jamais être extraites de la planche pour servir de preuve
  sur le site.
- Les valeurs de remplissage qu'elle contient (notamment `XX XX XX` à la place
  du numéro de téléphone) sont des placeholders de maquette. Elles ne doivent
  jamais apparaître en production.
- Les fonctionnalités suggérées par les captures de `salonemploi.nc` ne valent
  pas description du site réel : seules les fonctions publiées et vérifiées sur
  le site en ligne peuvent être décrites.

## Ce qui a été extrait de la planche vers le code

Les éléments repris de la planche sont **des décisions de design**, pas des
faits, et ils vivent désormais dans les design tokens
(`src/styles/global.css`, bloc `@theme`) :

| Élément                | Valeur retenue                                  |
| ---------------------- | ----------------------------------------------- |
| Bleu nuit              | `#0F1B2D` (`--color-navy-900`)                   |
| Or                     | `#D4A23A` (`--color-gold-500`) — **à recaler**   |
| Blanc cassé            | `#F6F4F1` (`--color-paper-warm`)                 |
| Filets / bordures      | `#E6E8EB` (`--color-line`)                       |
| Texte foncé            | `#2B2F33` (`--color-ink`)                        |
| Titres                 | Space Grotesk SemiBold (600)                     |
| Textes / UI            | Inter                                            |
| Titre de section       | 40 px (`--text-2xl`)                             |
| Sous-titre / accent    | 24 px (`--text-lg`)                              |
| Texte d'intro / corps  | 16 px (`--text-sm`)                              |
| Texte secondaire       | 14 px (`--text-xs`)                              |

L'or est une **valeur de travail** : elle devra être recalée sur le logo
LabEvents définitif lorsque l'asset réel sera fourni. Un seul token est à
modifier.

## Autres assets

Les assets de production (logo, photos, captures) ne vivent pas ici mais
sous `public/brand/`, `public/images/` et `public/captures/`. Voir le
`README.md` à la racine.
