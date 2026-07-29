import type { CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n';

export type FormationEntry = CollectionEntry<'formations'>;

export function entryLocale(entry: FormationEntry): Locale | undefined {
  const locale = entry.id.split('/')[0]?.toLowerCase();
  return locale === 'fr-ca' || locale === 'en-ca' ? locale : undefined;
}

export function entrySlug(entry: FormationEntry): string {
  return entry.id
    .replace(/\.(md|mdx)$/, '')
    .split('/')
    .slice(1)
    .join('/')
    .replace(/\/index$/, '');
}

export function entryTitle(entry: FormationEntry): string {
  return entry.data.title || entry.id.split('/').at(-1)?.replace(/\.(md|mdx)$/, '').replaceAll('-', ' ') || 'Content';
}

export function entryDescription(entry: FormationEntry, locale: Locale): string {
  if (entry.data.description) return entry.data.description;

  return locale === 'fr-ca'
    ? 'Consultez les objectifs, modules et ressources de cette formation.'
    : 'Browse the objectives, modules, and resources for this training.';
}

export function isPublished(entry: FormationEntry): boolean {
  return entry.data.draft !== true && !['archive', 'archived'].includes(entry.data.status?.toLowerCase() ?? '');
}

export function catalogueEntries(entries: FormationEntry[], locale: Locale): FormationEntry[] {
  const localized = entries.filter(
    (entry) =>
      entryLocale(entry) === locale &&
      isPublished(entry) &&
      ['CourseIndex', 'Course'].includes(entry.data.type ?? ''),
  );
  const byCourse = new Map<string, FormationEntry>();

  for (const entry of localized) {
    const key = entry.data.course_id || entrySlug(entry).replace(/\/course$/, '');
    const current = byCourse.get(key);
    if (!current || entry.data.type === 'CourseIndex') byCourse.set(key, entry);
  }

  return [...byCourse.values()].sort((a, b) => entryTitle(a).localeCompare(entryTitle(b), locale));
}
