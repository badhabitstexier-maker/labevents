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

export function construireTitre(titrePage?: string): string {
  if (!titrePage) return seoDefauts.titreParDefaut;
  return `${titrePage} — ${site.name}`;
}
