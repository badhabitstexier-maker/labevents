/**
 * Formulations éditoriales validées.
 *
 * Ce fichier centralise les phrases de positionnement ARRÊTÉES avec LabEvents.
 * Elles ne doivent pas être reformulées librement d'une page à l'autre.
 *
 * Aucune promesse chiffrée, aucun prix, aucun résultat commercial ici :
 * le modèle économique n'est pas figé et rien de tel n'est affiché en V1.
 */

/** Hero de la page d'accueil. */
export const accueil = {
  titre: 'Que pouvons-nous faire pour vous ?',
  sousTitre: 'Deux expertises pour vos projets professionnels, en Nouvelle-Calédonie.',
} as const;

/**
 * Sections de la page d'accueil — formulations arrêtées (Lot 1).
 *
 * Validation factuelle LabEvents du 12 août 2026 :
 * - les réalisations digitales présentées sur l'accueil (`salonemploi.nc` et
 *   l'écosystème `nounou.nc`) ont bien été conçues en Nouvelle-Calédonie ;
 * - la formulation du bloc « territoire » décrit bien l'activité réelle de
 *   LabEvents.
 *
 * Aucune de ces phrases n'est une promesse chiffrée, un résultat, un
 * témoignage ni une qualification. Elles ne doivent pas être réécrites
 * librement d'une session à l'autre.
 */
export const sectionsAccueil = {
  expertises: {
    titre: 'Deux expertises.',
    /**
     * Les deux lignes ci-dessous ne sont PAS une nouvelle promesse : ce sont
     * les deux moitiés du sous-titre validé du hero, énoncées séparément
     * sous chaque porte. Ne pas y ajouter de prestation, de périmètre ni de
     * qualification qui n'y figure pas — LabEvents n'est pas une agence de
     * communication généraliste.
     */
    evenementiel: 'Nous concevons et organisons vos événements professionnels.',
    sitesInternet: 'Nous créons votre site internet.',
    cartes: {
      evenementiel: 'Des événements professionnels bien pensés et bien réalisés.',
      sitesInternet: 'Des sites efficaces, performants et pensés pour vos objectifs.',
    },
  },
  realisations: {
    titre: 'Nos réalisations parlent pour nous.',
    chapo:
      'Nous ne montrons pas des maquettes, mais des réalisations réelles, conçues en Nouvelle-Calédonie.',
  },
  territoire: {
    titre: 'LabEvents, en Nouvelle-Calédonie.',
    texte:
      'Nous accompagnons les entreprises et les organisations du territoire, de la conception à la mise en œuvre.',
  },
  contact: {
    titre: 'Parlons de votre projet.',
    texte:
      'Un événement à organiser, un site à créer ? Le plus simple, c’est d’en parler.',
  },
} as const;

/** Positionnement de l'offre de création de sites internet. */
export const offreWeb = {
  promesse: 'Votre site internet. On s’occupe de tout.',
  accompagnement: 'Vous connaissez votre métier. Nous nous occupons du web.',
  /**
   * Engagement de délai. S'entend pour un projet standard disposant des
   * informations nécessaires — ne jamais le présenter comme un engagement
   * inconditionnel sur un dossier incomplet ou un projet sur mesure.
   */
  engagementDelai: 'Votre site professionnel, prêt en une semaine.',
} as const;

/**
 * Page commerciale `/sites-internet` — Lot 2.
 *
 * Le contenu reste volontairement simple : il explique le problème client,
 * le déroulé, la prise en charge par LabEvents et les limites de l'engagement
 * d'une semaine. Aucun prix, aucune formule, aucun volume de pages, aucune
 * promesse de classement ni fonctionnalité métier non validée.
 */
export const pageSitesInternet = {
  surtitre: 'Sites internet',
  probleme: {
    titre: 'Vous savez qu’il faudrait être présent sur internet.',
    texte: 'Vous n’avez pas le temps de vous en occuper.',
    reperes: [
      'Vous manquez de temps.',
      'Le web semble complexe.',
      'Vous cherchez un accompagnement local et simple.',
    ],
  },
  priseEnCharge: {
    titre: 'Vous nous expliquez votre activité. Nous nous occupons du site.',
    texte:
      'À partir des informations réelles que vous nous fournissez, nous prenons en charge la conception du site. Si vous avez déjà des contenus, nous les améliorons ; sinon, nous vous accompagnons pour les préparer.',
  },
  processus: {
    titre: 'Comment ça se passe ?',
    etapes: [
      'Vous nous expliquez votre activité.',
      'Nous préparons votre site.',
      'Vous vérifiez, nous ajustons.',
      'Votre site est en ligne.',
    ],
  },
  delai: {
    titre: 'Une semaine, pour quel projet ?',
    texte:
      'Cet engagement concerne un projet standard, à partir du moment où nous disposons des informations nécessaires.',
  },
  cible: {
    titre: 'Une offre pensée pour les petites structures calédoniennes.',
    items: ['Artisans', 'TPE', 'Petits commerces', 'Indépendants'],
  },
  prestations: [
    {
      titre: 'Design responsive',
      texte: 'Un site adapté à tous les écrans.',
    },
    {
      titre: 'Texte & contenus',
      texte: 'Des contenus clairs, structurés et travaillés avec vous.',
    },
    {
      titre: 'Référencement local',
      texte: 'Un site préparé pour être trouvé en Nouvelle-Calédonie.',
    },
    {
      titre: 'Performance',
      texte: 'Un site rapide, sécurisé et fiable.',
    },
  ],
  obtention: {
    titre: 'Ce que vous obtenez.',
    items: [
      {
        titre: 'Site vitrine professionnel',
        texte: 'Un site clair et adapté à votre activité.',
      },
      {
        titre: 'Contenus accompagnés',
        texte: 'Textes, images et structure préparés avec vous.',
      },
      {
        titre: 'Interlocuteur local',
        texte: 'Un contact unique pour suivre votre projet.',
      },
    ],
  },
  surMesure: {
    titre: 'Votre projet ne rentre pas dans une case ?',
    texte:
      'Un projet sur mesure est cadré séparément. Le plus simple est d’en parler.',
  },
} as const;

/**
 * Trame obligatoire des études de cas.
 * Le bloc « résultat » n'accueille qu'un fait vérifiable, jamais une
 * appréciation (« un site moderne, clair et évolutif » est interdit).
 */
export const etudeDeCas = {
  besoin: 'Le besoin',
  realise: 'Ce que LabEvents a réalisé',
  resultat: 'Le résultat',
  lien: 'Voir le projet',
} as const;

/** Formulations validées de la page centrale de preuve — Lot 3. */
export const pageRealisations = {
  surtitre: 'Réalisations',
  titre: 'Nos réalisations parlent pour nous.',
  introduction:
    'Nous ne montrons pas des maquettes, mais des réalisations réelles, conçues en Nouvelle-Calédonie.',
  projets: {
    surtitre: 'Sélection de réalisations',
    titre: 'Quelques projets conçus et réalisés par LabEvents',
  },
  contact: {
    titre: 'Parlons de votre projet.',
    texte:
      'Un événement à organiser, un site à créer ? Le plus simple, c’est d’en parler.',
  },
} as const;

/** Formulations validées de la page de contact — Lot 4. */
export const pageContact = {
  titre: 'Parlons de votre projet.',
  introduction:
    'Un événement à organiser, un site à créer ? Le plus simple, c’est d’en parler.',
  coordonnees: {
    titre: 'Contactez LabEvents',
    texte: 'Un interlocuteur local pour échanger directement sur votre projet.',
  },
  formulaire: {
    titre: 'Ou écrivez-nous',
    consentement:
      'J’accepte que les informations transmises soient utilisées par LabEvents pour répondre à ma demande.',
    bouton: 'Envoyer ma demande',
    boutonEnvoi: 'Envoi en cours…',
    succes: {
      titre: 'Votre message a bien été envoyé.',
      texte: 'Nous avons reçu votre demande et reviendrons vers vous.',
    },
    erreur: {
      titre: 'Votre message n’a pas pu être envoyé.',
      texte: 'Vous pouvez réessayer ou nous contacter directement au',
    },
  },
} as const;
