/**
 * COORDONNÉES LABEVENTS — SOURCE UNIQUE.
 *
 * ⚠️ DOCTRINE FACTUELLE DU PROJET ⚠️
 * Aucune coordonnée ne doit être inventée, ni « plausible », ni recopiée
 * depuis la planche graphique (qui contient des placeholders de démonstration
 * du type « XX XX XX »).
 *
 * Tant qu'une donnée n'a pas été fournie par LabEvents, elle vaut `null`.
 * Les composants DOIVENT gérer l'absence en n'affichant rien du tout.
 * Il ne doit jamais y avoir de valeur de remplissage en production.
 *
 * Aucun numéro de téléphone, e-mail ou adresse ne doit être écrit ailleurs
 * que dans ce fichier.
 */

export interface Coordonnees {
  /** Numéro tel qu'affiché à l'écran. */
  telephoneAffiche: string | null;
  /** Numéro au format utilisable dans `tel:`. */
  telephoneLien: string | null;
  /** Adresse e-mail de contact. */
  email: string | null;
  /** Adresse postale / lieu de rencontre. TODO : fournie par LabEvents. */
  adresse: string | null;
  /** Horaires de joignabilité. TODO : fournis par LabEvents. */
  horaires: string | null;
}

export const coordonnees: Coordonnees = {
  telephoneAffiche: '77 36 47',
  telephoneLien: '773647',
  email: 'contact@labevents.nc',
  adresse: null, // TODO(labevents): à fournir, ou à laisser absente
  horaires: null, // TODO(labevents): à fournir, ou à laisser absente
};

/** Le téléphone n'est affichable que si les DEUX champs sont renseignés. */
export const telephoneDisponible =
  coordonnees.telephoneAffiche !== null && coordonnees.telephoneLien !== null;

export const emailDisponible = coordonnees.email !== null;

/**
 * Éléments de réassurance.
 * `Un interlocuteur local` est un engagement de service validé, non un
 * chiffre ni une qualification : il est affichable en l'état.
 */
export const reassurance = {
  interlocuteurLocal: 'Un interlocuteur local',
  /** Préfixe du bloc téléphone. Le numéro vient de `coordonnees`. */
  appelezNousPrefixe: 'Appelez-nous',
} as const;
