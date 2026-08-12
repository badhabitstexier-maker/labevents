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
   * `null` tant qu'un vrai visuel LabEvents n'a pas été fourni : aucune image
   * générée ou empruntée ne doit être utilisée.
   */
  imageParDefaut: null as string | null, // TODO(assets): visuel OG réel
} as const;

/**
 * Métadonnées de la page d'accueil — arrêtées mot pour mot (Lot 1).
 *
 * Le titre est utilisé tel quel, sans suffixe : il nomme déjà la marque, les
 * deux activités et le territoire. Aucune promesse de positionnement, aucun
 * superlatif, aucun chiffre.
 */
export const seoAccueil = {
  titre: 'LabEvents — Événementiel & sites internet en Nouvelle-Calédonie',
  description:
    'LabEvents conçoit et organise vos événements professionnels et crée votre site internet en Nouvelle-Calédonie.',
} as const;

/** Métadonnées de la page commerciale Sites internet — Lot 2. */
export const seoSitesInternet = {
  titre: 'Création de sites internet en Nouvelle-Calédonie — LabEvents',
  description:
    'LabEvents conçoit votre site internet en Nouvelle-Calédonie. Pour un projet standard, délai d’une semaine dès réception des informations nécessaires.',
} as const;

/** Métadonnées de la page centrale de preuve — Lot 3. */
export const seoRealisations = {
  titre: 'Réalisations — LabEvents',
  description:
    'Découvrez les réalisations digitales de LabEvents en Nouvelle-Calédonie : salonemploi.nc et l’écosystème de cinq sites nounou.nc.',
} as const;

export function construireTitre(titrePage?: string): string {
  if (!titrePage) return seoDefauts.titreParDefaut;
  return `${titrePage} — ${site.name}`;
}
