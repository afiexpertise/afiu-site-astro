import release from '../generated/okf-skills.json';

export const okfRepository = 'afiexpertise/afiu-okf-knowledge';
export const okfCourseSource = (slug: string) =>
  `https://github.com/${okfRepository}/blob/main/universities/technique/courses/${slug}/course.md`;
export const okfReleasesUrl = `https://github.com/${okfRepository}/releases`;

export type SkillRole = 'apprenant' | 'formateur';

export function skillDownload(slug: string, role: SkillRole): string | null {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  if (!release.tag || !/^skills-[0-9a-f]{12}$/.test(release.tag)) return null;
  const key = `${slug}-${role}.zip`;
  const url = (release.packages as Record<string, string>)[key];
  const prefix = `https://github.com/${okfRepository}/releases/download/${release.tag}/`;
  return typeof url === 'string' && url === prefix + key ? url : null;
}

export function releaseVersion(): string | null {
  return release.revision ?? null;
}
