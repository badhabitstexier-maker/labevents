/**
 * Contenus validés de la page `/evenementiel` et visuels réels du Lot 5A.
 */

export interface RealisationEvenementielle {
  id: string;
  titre: string;
  image: string;
  alt: string;
  modeAffichage: 'cover' | 'contain';
}

export const etapesEvenementielles = [
  'Conception',
  'Préparation',
  'Mise en œuvre',
] as const;

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
    surtitre: 'Réalisations',
    titre: 'Quelques événements conçus et réalisés par LabEvents.',
  },
  contact: {
    titre: 'Vous préparez un événement ?',
    texte:
      'Parlons de votre projet, de votre public et de ce que vous souhaitez construire.',
    cta: 'Nous contacter',
  },
} as const;

export const realisationsEvenementielles: readonly RealisationEvenementielle[] = [
  {
    id: 'forum-emploi',
    titre: 'Forum de l’Emploi et de la Formation',
    image: '/images/evenementiel/acdet.jpg',
    alt: 'Espace d’exposition du Forum de l’Emploi et de la Formation',
    modeAffichage: 'cover',
  },
  {
    id: 'forum-immobilier',
    titre: 'Forum de l’Immobilier',
    image: '/images/evenementiel/forum-immobilier.jpg',
    alt: 'Espace de conférence du Forum de l’Immobilier',
    modeAffichage: 'cover',
  },
  {
    id: 'salon-electricite',
    titre: 'Salon de l’Électricité',
    image: '/images/evenementiel/salon-electricite.jpg',
    alt: 'Stand d’exposition du Salon de l’Électricité',
    modeAffichage: 'cover',
  },
  {
    id: 'reseaux-eau',
    titre: 'Salon des Réseaux d’Eau',
    image: '/images/evenementiel/reseaux-eau.jpg',
    alt: 'Équipements exposés au Salon des Réseaux d’Eau',
    modeAffichage: 'cover',
  },
  {
    id: 'job-dating',
    titre: 'Journée Job Dating de la Province Sud',
    image: '/images/evenementiel/job-dating.jpg',
    alt: 'Stands de la Journée Job Dating de la Province Sud',
    modeAffichage: 'cover',
  },
  {
    id: 'acdet',
    titre: 'Salon ACDET « Découverte des métiers et des formations »',
    image: '/images/evenementiel/forum-emploi.jpg',
    alt: 'Espace de présentation du salon ACDET',
    modeAffichage: 'cover',
  },
  {
    id: 'trophees-entreprises',
    titre: 'Trophées des Entreprises',
    image: '/images/evenementiel/trophees-entreprises.jpg',
    alt: 'Trophée présenté lors des Trophées des Entreprises',
    modeAffichage: 'cover',
  },
  {
    id: 'trophees-initiatives-publiques',
    titre: 'Trophées des Initiatives Publiques',
    image: '/images/evenementiel/trophees-initiatives-publiques.png',
    alt: 'Document graphique des Trophées des Initiatives Publiques',
    modeAffichage: 'contain',
  },
];
