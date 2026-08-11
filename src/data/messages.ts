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
