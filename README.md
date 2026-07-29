# AFIU — site Astro

Site public statique des formations AFIU, construit avec Astro 6 et le système visuel [Velocity](https://www.deployvelocity.com/).

## Responsabilités

- **OKF FR-CA** (`afiexpertise/afiu-okf-knowledge`) : source de vérité du contenu français canadien.
- **Dépôt de traduction** : source des contenus EN-CA validés; sa traduction et sa vérification sont externes à ce projet.
- **Ce dépôt Astro** : validation de structure, génération des routes et affichage public uniquement.

Le site ne modifie, ne traduit et ne réécrit aucun contenu pédagogique.

## Développement local

Prérequis : Node.js 22.12+ et pnpm 10.

```bash
pnpm install
pnpm dev
```

Une formation FR-CA minimale et un état de publication EN-CA sont inclus pour permettre un démarrage autonome. Pour utiliser des copies locales des sources :

```bash
pnpm sync:content -- --fr ../afiu-okf-knowledge --en ../afiu-okf-knowledge-en-ca
pnpm dev
```

Le synchroniseur importe les fichiers Markdown et MDX sous `universities/` en conservant leur arborescence.

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` :

1. récupère le dépôt FR-CA privé;
2. récupère le dépôt EN-CA lorsqu’il est configuré;
3. synchronise les contenus approuvés;
4. compile Astro en fichiers statiques;
5. déploie l’artifact sur GitHub Pages.

Configuration requise dans les paramètres du dépôt :

| Type | Nom | Valeur |
| --- | --- | --- |
| Secret Actions | `AFIU_OKF_TOKEN` | Jeton en lecture sur les dépôts OKF et de traduction |
| Variable Actions | `OKF_EN_REPOSITORY` | Dépôt EN-CA au format `organisation/depot` (optionnel tant qu’il n’existe pas) |

Dans **Settings → Pages**, choisir **GitHub Actions** comme source. Le dépôt OKF ou l’automatisation de traduction peut déclencher une republication avec l’événement `repository_dispatch` de type `okf-content-updated`.

## Commandes

| Commande | Fonction |
| --- | --- |
| `pnpm dev` | Serveur de développement |
| `pnpm sync:content` | Synchronisation des dépôts de contenu |
| `pnpm check` | Vérification Astro et TypeScript |
| `pnpm lint` | Analyse ESLint |
| `pnpm build` | Compilation statique |
| `pnpm validate` | Validation complète |

Les éléments du système visuel Velocity sont utilisés sous licence MIT; voir `THIRD_PARTY_NOTICES`.
