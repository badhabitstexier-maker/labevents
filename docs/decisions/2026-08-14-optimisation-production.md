# Validation du correctif d’optimisation — 14 août 2026

## Périmètre

Le correctif a été appliqué sur la dernière version validée du site, sans
modifier la composition ni réintroduire les anciennes pages.

- conversion des images affichées en variantes WebP responsives ;
- conservation des sources PNG/JPEG validées ;
- ajout de `srcset` et `sizes` sur les photos, captures et mockups ;
- liens internes normalisés avec slash final ;
- amélioration du contraste des petits textes dorés et des zones tactiles du
  pied de page ;
- maintien du formulaire Web3Forms, des métadonnées Open Graph et du favicon.

## Recette

`astro check` et `astro build` passent sans erreur, avertissement ni diagnostic.
Le build contient cinq pages, 34 attributs `srcset`, aucune ressource locale
manquante et aucune image vide.

La recette sur `https://preprod.labevents.nc/` a couvert :

- l’accueil et ses deux mockups ;
- la version actuelle de la page Sites internet et ses captures ;
- la galerie complète de la page Événementiel ;
- les mockups et les cinq sites `nounou.nc` de la page Réalisations ;
- la configuration du formulaire de Contact ;
- le chargement effectif des variantes WebP dans Chrome.

## Décision

Philippe a validé la préproduction et autorisé la mise en production le
14 août 2026. Le paquet de production doit provenir de ce même build et inclure
`deploy/production/.htaccess`. Il ne doit pas être remplacé par le paquet de
préproduction, qui exclut volontairement ce fichier.
