/**
 * RÉALISATIONS — structure de données et faits connus.
 *
 * ⚠️ DOCTRINE FACTUELLE ⚠️
 * Ce fichier ne contient QUE des informations vérifiées et validées.
 * Les blocs rédactionnels d'étude de cas (`besoin`, `realise`, `resultat`)
 * valent `null` tant que leur contenu n'a pas été contrôlé sur le vrai site.
 *
 * Interdits absolus : inventer un client, une fonctionnalité, un résultat,
 * un chiffre, un témoignage, une capture d'écran.
 *
 * Le champ `publiable` est un garde-fou : une réalisation ne doit pas être
 * rendue publique tant qu'il vaut `false`.
 */

export type StatutRealisation =
  /** Le contenu a été vérifié sur le site réel, il peut être publié. */
  | 'verifie'
  /** Les faits de base sont connus, le contenu d'étude de cas reste à vérifier. */
  | 'a-verifier';

export interface EtudeDeCas {
  /** Le besoin exprimé. À rédiger à partir d'éléments réels. */
  besoin: string | null;
  /** Ce que LabEvents a réalisé. Prestations réellement effectuées. */
  realise: string | null;
  /**
   * Le résultat. UNIQUEMENT un fait vérifiable.
   * Une appréciation (« un site moderne et évolutif ») n'est pas un résultat :
   * en l'absence de fait objectif, laisser `null`.
   */
  resultat: string | null;
}

export interface Realisation {
  id: string;
  /** Nom du projet tel qu'il sera affiché. */
  titre: string;
  /** URL publique du site, si le site est en ligne. */
  url: string | null;
  /** Courte qualification factuelle du projet. */
  nature: string;
  statut: StatutRealisation;
  /** Garde-fou : ne rien afficher publiquement tant que `false`. */
  publiable: boolean;
  etudeDeCas: EtudeDeCas;
  /**
   * Captures d'écran RÉELLES du site (chemins sous /captures/).
   * Ne jamais recréer une fausse interface, ne jamais extraire une image
   * de la planche graphique pour la faire passer pour une capture.
   */
  captures: readonly string[];
}

/**
 * Écosystème nounou.nc — conçu, mis en ligne et exploité par LabEvents.
 *
 * Formulation autorisée : « un écosystème de cinq sites ».
 * Formulation INTERDITE : « cinq domaines » — les quatre verticales
 * complémentaires sont des sous-domaines de nounou.nc.
 */
export const ecosystemeNounou = {
  id: 'nounou-nc',
  titre: 'nounou.nc',
  formulation: 'un écosystème de cinq sites',
  sites: [
    { url: 'https://nounou.nc', label: 'nounou.nc', activite: 'Garde d’enfants' },
    {
      url: 'https://devoirs.nounou.nc',
      label: 'devoirs.nounou.nc',
      activite: 'Aide aux devoirs',
    },
    {
      url: 'https://pet.nounou.nc',
      label: 'pet.nounou.nc',
      activite: 'Garde d’animaux',
    },
    {
      url: 'https://gardiennage.nounou.nc',
      label: 'gardiennage.nounou.nc',
      activite: 'Gardiennage',
    },
    {
      // Ne pas préciser davantage la nature de ce site sans validation factuelle.
      url: 'https://services.nounou.nc',
      label: 'services.nounou.nc',
      activite: 'Services',
    },
  ],
} as const;

export const realisations: readonly Realisation[] = [
  {
    id: 'salonemploi-nc',
    titre: 'salonemploi.nc',
    url: 'https://salonemploi.nc',
    nature:
      'Site du Salon de l’Emploi & de la Formation 2026, événement organisé par LabEvents.',
    statut: 'a-verifier',
    publiable: false,
    etudeDeCas: {
      // TODO(verification): rédiger à partir du site RÉELLEMENT EN LIGNE au
      // moment de la mise en ligne de labevents.nc. Ne jamais reprendre une
      // fonctionnalité depuis une roadmap, une maquette, un document
      // commercial, une préproduction ou la planche graphique.
      besoin: null,
      realise: null,
      resultat: null,
    },
    captures: [], // TODO(assets): vraies captures du site à fournir
  },
  {
    id: 'nounou-nc',
    titre: 'nounou.nc',
    url: 'https://nounou.nc',
    nature:
      'Écosystème de cinq sites conçu, mis en ligne et exploité par LabEvents.',
    statut: 'a-verifier',
    publiable: false,
    etudeDeCas: {
      // TODO(verification): à rédiger à partir des sites réels.
      besoin: null,
      realise: null,
      resultat: null,
    },
    captures: [], // TODO(assets): vraies captures des sites à fournir
  },
];

/** Réalisations réellement affichables aujourd'hui. */
export const realisationsPubliables = realisations.filter((r) => r.publiable);
