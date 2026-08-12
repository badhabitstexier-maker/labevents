# Lot 4 — pages `/evenementiel` et `/contact`

Date : 12 août 2026

Ce document consigne le périmètre éditorial, factuel et technique du Lot 4.
Il complète `CLAUDE.md` sans modifier les décisions produit déjà figées.

## Page Événementiel

La page présente le positionnement événementiel BtoB et BtoC validé, sans le
transformer en catalogue de prestations. Elle affiche uniquement les huit
réalisations nommées et validées pour ce lot, sans année, client, lieu,
chiffre, résultat ni descriptif de prestation.

Chaque réalisation possède dans `src/data/evenementiel.ts` des champs
`image` et `alt` à `null`. En attendant de vraies photos validées, la page
affiche une surface graphique neutre sans libellé public. Elle n’utilise ni
photo de stock, ni image générée, ni simulation de photo.

## Page Contact

Le téléphone `77 36 47` (lié au format international `+687773647`) et l’e-mail
`contact@labevents.nc`, fournis pour ce lot, deviennent les seules coordonnées
publiques et sont centralisés dans `src/data/contact.ts`. Ils précèdent le
formulaire et bénéficient d’une hiérarchie visuelle plus forte. Aucune adresse
ni aucun horaire n’est ajouté.

Le formulaire reste statique et envoie côté client vers Web3Forms. Il utilise
la variable `PUBLIC_WEB3FORMS_ACCESS_KEY`, documentée dans `.env.example`, et
n’embarque aucune vraie clé. Il applique la validation HTML native, empêche
les doubles soumissions, expose un état d’envoi, conserve les retours sur
`/contact`, fournit des messages succès / erreur dans une région `aria-live`
et inclut le honeypot `botcheck` sans captcha visible.

## Éléments restant ouverts

Les huit photos événementielles et leurs textes alternatifs réels restent à
fournir et à valider. Le test d’envoi réel Web3Forms nécessite une clé valide
dans un fichier `.env` local non versionné.
