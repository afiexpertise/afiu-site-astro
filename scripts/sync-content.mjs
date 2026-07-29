import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';

const args = process.argv.slice(2);

function argument(name) {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

async function copyMarkdownTree(sourceRoot, locale) {
  const source = resolve(sourceRoot);
  const universities = join(source, 'universities');
  const destination = resolve('src', 'content', 'formations', locale, 'universities');

  if (!(await stat(universities).catch(() => undefined))?.isDirectory()) {
    throw new Error(`The ${locale} source does not contain an universities directory: ${universities}`);
  }

  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });

  let copied = 0;
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const current = join(directory, entry.name);
      if (entry.isDirectory()) {
        await walk(current);
      } else if (entry.isFile() && ['.md', '.mdx'].some((extension) => entry.name.endsWith(extension))) {
        const relative = current.slice(universities.length + 1);
        const output = join(destination, relative);
        await mkdir(resolve(output, '..'), { recursive: true });
        await cp(current, output);
        copied += 1;
      }
    }
  }

  await walk(universities);
  console.log(`Synced ${copied} ${locale} content files from ${basename(source)}.`);
}

const sources = [
  ['--fr', 'fr-ca'],
  ['--en', 'en-ca'],
];
let synchronized = 0;

for (const [flag, locale] of sources) {
  const source = argument(flag);
  if (source) {
    await copyMarkdownTree(source, locale);
    synchronized += 1;
  }
}

if (synchronized === 0) {
  console.log('No source path supplied. Use --fr <path> and/or --en <path>.');
}
