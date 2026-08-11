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
