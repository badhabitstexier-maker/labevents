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
  sousTitre:
    'LabEvents conçoit et organise vos événements professionnels et crée votre site internet, en Nouvelle-Calédonie.',
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
 * promesse de référencement ni fonctionnalité métier non validée.
 */
export const pageSitesInternet = {
  surtitre: 'Sites internet',
  probleme: {
    titre: 'Vous savez qu’il faudrait être présent sur internet.',
    texte: 'Vous n’avez pas le temps de vous en occuper.',
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
    surtitre: 'Projets réels',
    titre: 'Deux réalisations digitales',
  },
  contact: {
    titre: 'Parlons de votre projet.',
    texte:
      'Un événement à organiser, un site à créer ? Le plus simple, c’est d’en parler.',
  },
} as const;
