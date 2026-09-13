# Agent d'accueil `labevents.nc` — définition versionnée

Ce dossier contient la **définition complète de l'assistant conversationnel du
site `labevents.nc`** : son comportement, ses faits et le format de ses
réponses. Il ne contient aucun code exécutable.

## Pourquoi cette définition vit dans le dépôt

> **Règle retenue le 13 septembre 2026.** Tout agent LabEvents a sa définition
> versionnée dans un dépôt — prompt système, base de connaissances, contrat de
> sortie, workflow exporté. **La plateforme d'exécution n'est qu'un moteur
> interchangeable.**

Elle prolonge l'arbitrage du 7 septembre 2026, qui écartait Dify, Flowise et
Langflow au motif que *« l'agent vit dans la plateforme, pas dans le dépôt »*.
Ce reproche vaut à l'identique pour n8n : un workflow monté à la souris et
jamais exporté n'existe que dans la base de données du prestataire — aucune
trace des changements, aucune relecture en PR, aucune sauvegarde, aucune
portabilité.

Et surtout aucune **réutilisation** : l'offre vise à proposer le même type
d'agent à plusieurs TPE. Un agent qui ne vit que dans sa plateforme n'est pas
un patron duplicable, c'est un travail à refaire chez chaque client.

## Les fichiers

| Fichier | Ce que c'est | Où il va |
| ------- | ------------ | -------- |
| `PROMPT-SYSTEME.md` | Le **comportement** : identité, périmètre, résistance aux détournements, style, quatre parcours de qualification, escalade, taxonomie fermée, garde-fous | Champ *system message* du nœud Agent |
| `BASE-CONNAISSANCES.md` | Les **faits**, et eux seuls : coordonnées, activités, références événementielles, offre exposant, et la liste explicite de ce que l'assistant ne sait pas | Base de connaissances / fichier joint à l'agent |
| `CONTRAT-SORTIE.json` | Le **squelette JSON** de toute réponse, extrait du §12 du prompt système | Schéma de la sortie structurée du nœud Agent |
| `WORKFLOW.json` | Le **montage** n8n exporté : nœuds, branchements, condition de déclenchement du mail d'escalade | Import dans n8n, puis recréer les credentials et renseigner le destinataire |
| `README.md` | Ce fichier | — |

**Le comportement et les faits sont séparés volontairement.** C'est cette
séparation qui empêche l'agent de vieillir mal : un fait daté se corrige dans
`BASE-CONNAISSANCES.md` sans jamais toucher au comportement.

`CONTRAT-SORTIE.json` est extrait du §12 de `PROMPT-SYSTEME.md` : le prompt en
porte la version qui fait foi pour le modèle, le fichier `.json` en porte la
version lisible par un outil. **Les deux se modifient ensemble** — un champ
ajouté ici doit l'être là.

## Où tourne l'agent

**Moteur retenu pour le premier montage : n8n**, sur l'essai gratuit de 14
jours ouvert le 11 septembre 2026.

L'hébergement définitif **n'est pas tranché** : VPS OVH auto-hébergé contre
n8n Cloud payant, arbitrage prévu en fin d'essai. Aucun montant n'a été relevé
à ce jour.

Le contenu de ce dossier ne dépend d'aucune de ces deux options. C'est
précisément son objet.

## Qui met à jour quoi, et à quelle fréquence

| Fichier | Fréquence attendue | Ce qui déclenche une mise à jour |
| ------- | ------------------ | -------------------------------- |
| `PROMPT-SYSTEME.md` | **Rare** | La méthode de qualification change, un garde-fou manque, une recette révèle un comportement à corriger |
| `BASE-CONNAISSANCES.md` | **Fréquente** | L'actualité change : une date d'événement est arrêtée, une édition est annoncée ou annulée, une coordonnée change, une référence devient citable |
| `CONTRAT-SORTIE.json` | **Rare**, et toujours avec le §12 du prompt | Un champ est ajouté, retiré ou renommé |
| `WORKFLOW.json` | **À chaque modification du montage** | Un nœud est ajouté, une condition change, une branche est créée |

**Les faits sont arrêtés par Philippe, et par personne d'autre.** Un fait qui
n'est pas dans `BASE-CONNAISSANCES.md` ne doit pas être ajouté parce qu'il
paraît vrai : l'assistant a pour consigne de ne jamais compléter un fait par
déduction, et cette consigne ne vaut que si la base est tenue à la même
exigence.

Toute modification suit la règle du dépôt : branche dédiée, pull request,
aucune fusion de sa propre initiative.

## Ce que ce dossier ne contient pas

- **Le widget de chat** et son intégration aux pages du site.
- **Toute clé, tout identifiant, toute URL de webhook, toute adresse
  personnelle.** Ce dépôt est public : rien de tout cela n'y entrera jamais.

`WORKFLOW.json` est purgé avant chaque dépôt : identifiants de webhook,
identifiant d'instance n8n, adresse du destinataire des escalades. Le fichier
n'est donc **pas réimportable tel quel** — c'est voulu. Après import, il faut
recréer les deux credentials et renseigner le destinataire du nœud Gmail.

## Trois corrections dues avant toute mise en ligne

L'assistant renvoie les visiteurs vers des canaux publics. S'ils sont périmés,
il envoie les gens vers une information fausse avec l'autorité de la marque —
ce qui est pire que pas d'assistant du tout.

1. **`salonemploi.nc`** affiche encore « octobre 2026 », et le site est indexé.
2. **La page Facebook du salon** porte une couverture annonçant l'édition 2024
   annulée, et l'ancienne désignation de l'événement.
3. **`labevents.nc` lui-même** décrit `salonemploi.nc` comme le *« Site du
   Salon de l'Emploi & de la Formation 2026 »*. L'assistant vivra sur ce site :
   il se contredirait avec la page qui l'héberge, sous les yeux du même
   visiteur.

## État au 13 septembre 2026

L'agent est **monté et éprouvé**, mais **non publié** : il ne tourne que dans
l'éditeur n8n. Aucune URL n'est exposée.

Ce qui fonctionne, mesuré : les neuf cas de recette passent, dont le refus de
chiffrer, le maintien du vouvoiement face au tutoiement, le refus de confirmer
« depuis 2010 », la persistance des champs d'un tour à l'autre, et le
déclenchement du mail de synthèse en fin de qualification.

Huit corrections ont été portées au prompt au terme de cette recette : verrou
d'escalade séparé de la fin de qualification, refus de chiffrer explicite,
vouvoiement inconditionnel, règle de la donnée qualifiante, texte brut imposé,
valeurs fermées pour `nature_presence_souhaitee`, collecte d'un moyen de
contact avant toute promesse de rappel, et suppression de la contradiction
`null` / chaîne vide entre le §10 et le §12.

Coût mesuré : environ 14 000 tokens par tour de conversation, entrée comprise —
le prompt et la base sont renvoyés au modèle à chaque message.

Reste à traiter avant mise en ligne, en plus des trois corrections publiques
ci-dessus : le prospect qui déclenche une escalade puis s'en va sans laisser de
coordonnées ne produit aujourd'hui aucun mail, et la limitation de débit du
webhook n'est pas posée.

## Fiche de cadrage

Le raisonnement complet — arbitrages rendus, ce qui a été écarté et pourquoi,
balisage du montage n8n et recette de douze cas à faire passer avant mise en
ligne — vit dans la fiche **« Agent d'accueil labevents.nc — prompt, faits,
contrat de sortie »**, V11 du 13 septembre 2026, conservée hors de ce dépôt
dans la mémoire de travail LabEvents.

**En cas d'écart entre cette fiche et les fichiers de ce dossier, ce sont les
fichiers de ce dossier qui font foi** : c'est ici que la définition est
versionnée.
