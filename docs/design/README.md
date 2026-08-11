# Direction graphique — références visuelles

## La planche V1

```
docs/design/labevents-direction-graphique-v1.png
```

Le fichier est **présent dans le dépôt** : PNG, 1086 × 1448, RGB.

C'est la planche validée, transmise en pièce jointe. Elle n'a été ni
redessinée, ni recadrée, ni redimensionnée. La pièce jointe d'origine étant
au format WebP, elle a été décodée puis réencodée en PNG sans perte : les
pixels du fichier versionné sont identiques à ceux de la pièce jointe.

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
| Or                     | `#D4A23A` (`--color-gold-500`)                   |
| Fond chaud             | `#F6F4F1` (`--color-paper-warm`)                 |
| Filets / bordures      | `#E6E8EB` (`--color-line`)                       |
| Texte foncé            | `#2B2F33` (`--color-ink`)                        |
| Blanc                  | `#FFFFFF` (`--color-paper`)                      |
| Titres                 | Space Grotesk SemiBold (600)                     |
| Textes / UI            | Inter                                            |
| Titre de section       | 40 px (`--text-2xl`)                             |
| Sous-titre / accent    | 24 px (`--text-lg`)                              |
| Texte d'intro / corps  | 16 px (`--text-sm`)                              |
| Texte secondaire       | 14 px (`--text-xs`)                              |

**Cette palette est figée pour la V1.** L'or `#D4A23A` est une valeur
définitive : aucun recalage sur un futur logo n'est attendu. Aucun logo
LabEvents actualisé n'est un prérequis du Lot 1 — la proposition graphique
de la planche fait référence. Toute évolution de la palette relève d'une
décision explicite.

## Autres assets

Les assets de production (logo, photos, captures) ne vivent pas ici mais
sous `public/brand/`, `public/images/` et `public/captures/`. Voir le
`README.md` à la racine.
