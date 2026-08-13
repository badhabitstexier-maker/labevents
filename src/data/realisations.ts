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
 * Le champ `publiable` protège uniquement l'ÉTUDE DE CAS détaillée. Les faits
 * de base déjà validés (`titre`, `url`, `nature`) peuvent être cités même si
 * `publiable` vaut `false`. Les captures disposent d'un garde-fou distinct :
 * `capturesValidees`.
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
  /** Garde-fou de l'étude de cas détaillée uniquement. */
  publiable: boolean;
  etudeDeCas: EtudeDeCas;
  /**
   * Captures d'écran RÉELLES ou composites validés (chemins publics).
   * Ne jamais recréer une fausse interface, ne jamais extraire une image
   * de la planche graphique pour la faire passer pour une capture.
   */
  captures: readonly string[];
  /**
   * Garde-fou visuel distinct de `publiable` : une capture n'est rendue que
   * si son fichier est réel ET que ce drapeau a été explicitement validé.
   */
  capturesValidees: boolean;
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
    {
      url: 'https://nounou.nc',
      label: 'nounou.nc',
      activite: 'Garde d’enfants',
      capture: '/images/web/nounou-home.png',
      largeurCapture: 2742,
      hauteurCapture: 1662,
    },
    {
      url: 'https://devoirs.nounou.nc',
      label: 'devoirs.nounou.nc',
      activite: 'Aide aux devoirs',
      capture: '/images/web/nounou-devoirs.png',
      largeurCapture: 2744,
      hauteurCapture: 1648,
    },
    {
      url: 'https://pet.nounou.nc',
      label: 'pet.nounou.nc',
      activite: 'Garde d’animaux',
      capture: '/images/web/nounou-pet.png',
      largeurCapture: 2746,
      hauteurCapture: 1664,
    },
    {
      url: 'https://gardiennage.nounou.nc',
      label: 'gardiennage.nounou.nc',
      activite: 'Gardiennage',
      capture: '/images/web/nounou-gardiennage.png',
      largeurCapture: 2734,
      hauteurCapture: 1662,
    },
    {
      // Ne pas préciser davantage la nature de ce site sans validation factuelle.
      url: 'https://services.nounou.nc',
      label: 'services.nounou.nc',
      activite: 'Services',
      capture: '/images/web/nounou-services.png',
      largeurCapture: 2744,
      hauteurCapture: 1440,
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
    captures: ['/images/web/mockups/salonemploi-portable-telephone.png'],
    capturesValidees: true,
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
    captures: [
      '/images/web/nounou-home.png',
      '/images/web/nounou-devoirs.png',
      '/images/web/nounou-pet.png',
      '/images/web/nounou-gardiennage.png',
      '/images/web/nounou-services.png',
    ],
    capturesValidees: true,
  },
];

/** Études de cas détaillées réellement affichables aujourd'hui. */
export const realisationsPubliables = realisations.filter((r) => r.publiable);

/**
 * Portée exacte du drapeau `publiable`.
 *
 * Deux niveaux d'information coexistent pour une même réalisation :
 *
 *  1. LA MENTION FACTUELLE — `titre`, `url`, `nature`. Ces champs ne
 *     contiennent que des faits déjà validés dans `CLAUDE.md` § F. Ils sont
 *     affichables indépendamment de l'état de l'étude de cas.
 *
 *  2. L'ÉTUDE DE CAS — `besoin`, `realise`, `resultat`. Ces blocs relèvent
 *     d'une rédaction à contrôler sur le site réellement en ligne. C'est
 *     précisément ce que `publiable` protège.
 *
 * Les CAPTURES ont leur propre garde-fou (`capturesValidees`) afin qu'un
 * fichier ajouté dans `captures` ne devienne jamais public par accident.
 */
export function etudeDeCasAffichable(realisation: Realisation): boolean {
  if (!realisation.publiable) return false;
  const { besoin, realise, resultat } = realisation.etudeDeCas;
  return besoin !== null || realise !== null || resultat !== null;
}

/** Première capture publiable, ou `null` tant qu'elle n'est pas validée. */
export function premiereCaptureAffichable(realisation: Realisation): string | null {
  if (!realisation.capturesValidees) return null;
  return realisation.captures[0] ?? null;
}

/** Retrouve une réalisation par son identifiant. */
export function realisationParId(id: string): Realisation | undefined {
  return realisations.find((realisation) => realisation.id === id);
}
