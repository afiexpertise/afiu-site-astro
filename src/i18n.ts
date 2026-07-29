export const locales = ['fr-ca', 'en-ca'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr-ca';

export const messages = {
  'fr-ca': {
    language: 'Français',
    alternateLanguage: 'English',
    navHome: 'Accueil',
    navTraining: 'Formations',
    browse: 'Consulter les formations',
    sourceBadge: 'Contenu validé · Source OKF',
    heroTitle: 'Développer les compétences de demain.',
    heroDescription:
      'Accédez aux formations, modules et ressources pédagogiques AFIU dans une expérience rapide, accessible et bilingue.',
    featuredTitle: 'Formations disponibles',
    featuredDescription: 'Des parcours structurés, maintenus dans la source de vérité OKF.',
    trainingTitle: 'Catalogue des formations',
    trainingDescription: 'Explorez les parcours de formation et leurs contenus pédagogiques.',
    emptyTitle: 'Contenu à venir',
    emptyDescription: 'Les contenus validés seront publiés ici dès leur disponibilité.',
    duration: 'Durée',
    minutes: 'min',
    updatedFrom: 'Publié depuis la source OKF',
    backToTraining: 'Toutes les formations',
    skip: 'Aller au contenu',
    footer: 'Contenus de formation AFIU. Affichage statique propulsé par Astro.',
    notFound: 'Page introuvable',
    notFoundDescription: 'La page demandée n’existe pas ou a été déplacée.',
    backHome: 'Retour à l’accueil',
  },
  'en-ca': {
    language: 'English',
    alternateLanguage: 'Français',
    navHome: 'Home',
    navTraining: 'Training',
    browse: 'Browse training',
    sourceBadge: 'Validated content · OKF source',
    heroTitle: 'Build the skills of tomorrow.',
    heroDescription:
      'Access AFIU training, modules, and learning resources through a fast, accessible, bilingual experience.',
    featuredTitle: 'Available training',
    featuredDescription: 'Structured learning paths maintained in the OKF source of truth.',
    trainingTitle: 'Training catalogue',
    trainingDescription: 'Explore training paths and their learning content.',
    emptyTitle: 'Content coming soon',
    emptyDescription: 'Validated content will be published here as soon as it is available.',
    duration: 'Duration',
    minutes: 'min',
    updatedFrom: 'Published from the OKF source',
    backToTraining: 'All training',
    skip: 'Skip to content',
    footer: 'AFIU training content. Static presentation powered by Astro.',
    notFound: 'Page not found',
    notFoundDescription: 'The requested page does not exist or has moved.',
    backHome: 'Back to home',
  },
} as const;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function t(locale: Locale) {
  return messages[locale];
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}` || '/';
}
