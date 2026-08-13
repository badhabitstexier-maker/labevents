/**
 * Navigation et appels à l'action — source unique.
 *
 * Architecture V1 figée : cinq pages, pas de « À propos », pas de « Tarifs »,
 * pas de « Blog ». Toute page supplémentaire nécessite une décision explicite.
 */

export interface LienNavigation {
  label: string;
  href: string;
}

export const navigationPrincipale: readonly LienNavigation[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Événementiel', href: '/evenementiel' },
  { label: 'Sites internet', href: '/sites-internet' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Contact', href: '/contact' },
] as const;

/**
 * CTA principal : contact humain. Il reste prioritaire partout sur le site.
 * Le téléphone et la rencontre passent avant le formulaire.
 */
export const ctaPrincipal = {
  label: 'Parlons de votre projet',
  href: '/contact',
} as const;

/**
 * CTA secondaire. En V1 il mène directement à la section du formulaire
 * complet de la page Contact.
 */
export const ctaSecondaire = {
  label: 'Décrire mon projet',
  href: '/contact#formulaire-contact',
} as const;

/** Accès directs aux deux activités depuis le hero de l'accueil. */
export const ctaAccueilEvenementiel = {
  label: 'Organiser un événement',
  href: '/evenementiel',
} as const;

export const ctaAccueilSitesInternet = {
  label: 'Créer un site internet',
  href: '/sites-internet',
} as const;
