/**
 * Contenus validés de la page `/evenementiel` — Lot 4.
 *
 * Les emplacements photo restent explicitement vides jusqu’à la fourniture
 * et la validation de vrais assets LabEvents. Aucun texte alternatif n’est
 * inventé pour une image qui n’existe pas.
 */

export interface RealisationEvenementielle {
  id: string;
  titre: string;
  image: string | null;
  alt: string | null;
}

export const pageEvenementiel = {
  hero: {
    surtitre: 'Événementiel',
    titre: 'Des événements conçus pour créer des rencontres.',
    texte:
      'LabEvents conçoit et organise des événements BtoB et BtoC en Nouvelle-Calédonie, de la préparation à la mise en œuvre.',
    cta: 'Parlons de votre événement',
  },
  positionnement: {
    titre: 'De l’idée à l’événement.',
    paragraphes: [
      'Un événement ne se résume pas au jour J.',
      'Nous accompagnons sa conception, sa préparation et sa mise en œuvre, avec un même objectif : construire un dispositif clair, cohérent et adapté à son public.',
    ],
  },
  publics: [
    {
      titre: 'Événements BtoB',
      texte:
        'Des rendez-vous conçus pour réunir entreprises, professionnels, institutions et partenaires autour d’un secteur, d’un enjeu ou d’une communauté.',
    },
    {
      titre: 'Événements BtoC',
      texte:
        'Des événements destinés à accueillir, informer et mettre en relation le grand public avec des entreprises, des institutions ou des professionnels.',
    },
  ],
  realisations: {
    surtitre: 'Sélection de réalisations',
    titre: 'Quelques événements conçus et réalisés par LabEvents',
  },
  contact: {
    titre: 'Vous préparez un événement ?',
    texte:
      'Parlons de votre projet, de votre public et de ce que vous souhaitez construire.',
    cta: 'Nous contacter',
  },
} as const;

export const realisationsEvenementielles: readonly RealisationEvenementielle[] = [
  'Forum de l’Emploi et de la Formation',
  'Forum de l’Immobilier',
  'Salon de l’Électricité',
  'Salon des Réseaux d’Eau',
  'Journée Job Dating de la Province Sud',
  'Salon ACDET « Découverte des métiers et des formations »',
  'Trophées des Entreprises',
  'Trophées des Initiatives Publiques',
].map((titre, index) => ({
  id: `evenement-${index + 1}`,
  titre,
  image: null,
  alt: null,
}));
