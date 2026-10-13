import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';

const args = process.argv.slice(2);
function argument(name) {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

/**
 * Public Astro catalogue imports only course definitions. Private OKF modules,
 * trainer Skills, exams, assessments, rubrics and internal knowledge must never
 * be copied into the public site's content collection.
 */
async function copyPublicCourses(sourceRoot, locale) {
  const source = resolve(sourceRoot);
  const universities = join(source, 'universities');
  const destination = resolve('src', 'content', 'formations', locale, 'universities');

  if (!(await stat(universities).catch(() => undefined))?.isDirectory()) {
    throw new Error(`The ${locale} source does not contain an universities directory: ${universities}`);
  }
  const coursePaths = [];
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const current = join(directory, entry.name);
      if (entry.isDirectory()) {
        await walk(current);
      } else if (entry.isFile() && entry.name === 'course.md') {
        const relative = current.slice(universities.length + 1).replaceAll('\\', '/');
        if (/^[^/]+\/courses\/[^/]+\/course\.md$/.test(relative)) {
          coursePaths.push({ current, relative });
        }
      }
    }
  }
  await walk(universities);
  if (coursePaths.length === 0) throw new Error(`No course.md files found in ${source}`);

  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  for (const { current, relative } of coursePaths) {
    const output = join(destination, relative);
    await mkdir(resolve(output, '..'), { recursive: true });
    await cp(current, output);
  }
  console.log(`Synced ${coursePaths.length} public ${locale} course definitions from ${basename(source)}. No private resources copied.`);
}

const sources = [['--fr', 'fr-ca'], ['--en', 'en-ca']];
let count = 0;
for (const [flag, locale] of sources) {
  const source = argument(flag);
  if (source) {
    await copyPublicCourses(source, locale);
    count++;
  }
}
if (count === 0) {
  console.log('No OKF source supplied. Using bundled public course snapshot (may be stale).');
}
