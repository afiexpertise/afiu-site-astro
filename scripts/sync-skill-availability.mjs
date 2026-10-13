import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const repository = 'afiexpertise/afiu-okf-knowledge';
const output = resolve('src/generated/okf-skills.json');
const token = process.env.AFIU_OKF_TOKEN || process.env.OKF_TOKEN || '';
const blank = { repository, tag: null, revision: null, packages: {}, checkedAt: null };
let catalogue = blank;

if (token) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}/releases/latest`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'AFIU-Astro-Static-Build',
      },
    });
    if (response.ok) {
      const release = await response.json();
      const tag = release.tag_name;
      if (!/^skills-[0-9a-f]{12}$/.test(tag)) throw new Error('Unexpected OKF release tag format');
      const assets = {};
      for (const asset of release.assets ?? []) {
        const name = asset.name;
        const url = asset.browser_download_url;
        if (
          /^(?:[a-z0-9]+(?:-[a-z0-9]+)*)-(?:apprenant|formateur)\.zip$/.test(name) &&
          typeof url === 'string' &&
          url.startsWith(`https://github.com/${repository}/releases/download/${tag}/`)
        ) {
          assets[name] = url;
        }
      }
      catalogue = {
        repository,
        tag,
        revision: tag.slice(7),
        packages: assets,
        checkedAt: new Date().toISOString(),
      };
      console.log(`OKF release ${tag}: ${Object.keys(assets).length} verified ZIP assets.`);
    } else {
      console.warn(`No verified OKF release (HTTP ${response.status}); download links remain unavailable.`);
    }
  } catch (error) {
    console.warn(`Could not verify OKF package assets: ${error.message}. No links will be shown.`);
  }
} else {
  console.log('No AFIU_OKF_TOKEN: OKF releases cannot be verified. Downloads hidden.');
}
await mkdir(dirname(output), { recursive: true });
await writeFile(output, JSON.stringify(catalogue, null, 2) + '\n', 'utf8');
