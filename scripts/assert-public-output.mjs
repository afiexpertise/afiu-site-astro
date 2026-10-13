import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const source = resolve('src/content/formations');
const output = resolve('dist');
let violations = [];

async function visit(directory, checkSource) {
  if (!(await stat(directory).catch(() => undefined))?.isDirectory()) return;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) {
      await visit(file, checkSource);
      continue;
    }
    if (!entry.isFile()) continue;
    const path = file.replaceAll('\\', '/');
    if (checkSource && /\/(skills|assessments|rubrics|competency-map|activities|concepts)\//i.test(path)) {
      violations.push(`Private course folder was copied to public content: ${path}`);
    }
    if (checkSource && /\/(universities)\//.test(path) && entry.name !== 'course.md') {
      violations.push(`Non-course resource copied into public catalogue: ${path}`);
    }
    if (!checkSource && /\.(zip|key|pem|p12)$/i.test(entry.name)) {
      violations.push(`Restricted archive or key in public output: ${path}`);
    }
  }
}
await visit(source, true);
await visit(output, false);
if (violations.length) {
  for (const violation of violations) console.error(violation);
  process.exitCode = 1;
} else {
  console.log('Public-content boundary validated: courses only, no private Skills or ZIP assets.');
}
