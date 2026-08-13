/**
 * Métadonnées SEO par défaut.
 *
 * Chaque page peut surcharger titre / description / image via les props du
 * layout. Aucune promesse de positionnement Google ne doit apparaître ici
 * ni ailleurs sur le site.
 */

import { site } from './site';
import { accueil } from './messages';

export const seoDefauts = {
  /** Suffixe appliqué aux titres de pages internes. */
  suffixeTitre: `${site.name} — ${site.region}`,
  titreParDefaut: `${site.name} — Événementiel et création de sites internet`,
  descriptionParDefaut: accueil.sousTitre,
  /**
   * Image Open Graph par défaut.
   * Composition produite au Lot 6B exclusivement depuis le vrai logo et les
   * éléments d'identité validés, sans image générée ni empruntée.
   */
  imageParDefaut: '/brand/labevents-open-graph.png',
} as const;

/**
 * Métadonnées de la page d'accueil — arrêtées mot pour mot (Lot 1).
 *
 * Le titre est utilisé tel quel, sans suffixe : il nomme déjà la marque, les
 * deux activités et le territoire. Aucune promesse de positionnement, aucun
 * superlatif, aucun chiffre.
 */
export const seoAccueil = {
  titre: 'LabEvents | Événementiel et sites web en Nouvelle-Calédonie',
  description:
    'LabEvents conçoit vos événements et crée votre site internet en Nouvelle-Calédonie, avec un accompagnement local de la conception à la mise en ligne.',
} as const;

/** Métadonnées de la page commerciale Sites internet — Lot 2. */
export const seoSitesInternet = {
  titre: 'Création de sites internet en Nouvelle-Calédonie | LabEvents',
  description:
    'LabEvents crée des sites internet clairs et adaptés aux artisans, TPE et commerces de Nouvelle-Calédonie. Votre site standard prêt en une semaine.',
} as const;

/** Métadonnées de la page centrale de preuve — Lot 3. */
export const seoRealisations = {
  titre: 'Réalisations événementielles et web | LabEvents',
  description:
    'Découvrez les événements, sites internet et plateformes conçus par LabEvents en Nouvelle-Calédonie, dont salonemploi.nc et l’écosystème nounou.nc.',
} as const;

/** Métadonnées de la page Événementiel — Lot 4. */
export const seoEvenementiel = {
  titre: 'Organisation d’événements en Nouvelle-Calédonie | LabEvents',
  description:
    'LabEvents conçoit et organise salons, forums et événements professionnels en Nouvelle-Calédonie, de la stratégie à la coordination opérationnelle.',
} as const;

/** Métadonnées de la page Contact — Lot 4. */
export const seoContact = {
  titre: 'Contacter LabEvents | Nouvelle-Calédonie',
  description:
    'Parlez-nous de votre projet événementiel ou de votre site internet. Contactez LabEvents par formulaire, téléphone ou e-mail.',
} as const;

export function construireTitre(titrePage?: string): string {
  if (!titrePage) return seoDefauts.titreParDefaut;
  return `${titrePage} — ${site.name}`;
}
