/**
 * Identité du site.
 *
 * Ne contient que des informations validées par LabEvents.
 * Aucune donnée factuelle ne doit être ajoutée ici sans validation.
 */

export const site = {
  name: 'LabEvents',
  domain: 'labevents.nc',
  url: 'https://labevents.nc',
  lang: 'fr',
  locale: 'fr_NC',
  /** Zone d'implantation. Ne PAS en déduire une zone d'intervention. */
  region: 'Nouvelle-Calédonie',
} as const;

/**
 * Les deux activités de LabEvents.
 * LabEvents n'est pas une agence de communication généraliste : cette liste
 * ne doit pas être élargie (réseaux sociaux, print, marketing, etc.).
 */
export const activites = [
  {
    id: 'evenementiel',
    label: 'Événementiel',
    href: '/evenementiel',
    /** Libellé de « porte » validé pour l'accueil. */
    porte: 'Organiser un événement',
  },
  {
    id: 'sites-internet',
    label: 'Sites internet',
    href: '/sites-internet',
    porte: 'Créer votre site internet',
  },
] as const;

export type ActiviteId = (typeof activites)[number]['id'];
