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

Configuration des paramètres du dépôt :

| Type | Nom | Valeur |
| --- | --- | --- |
| Secret Actions | `AFIU_OKF_TOKEN` | Jeton en lecture sur les dépôts OKF et de traduction (optionnel : requis pour synchroniser les sources distantes) |
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

## Catalogue interactif et téléchargements de Skills

- Les pages `/fr-ca/formations/` et `/fr-ca/parcours-assistants-ia/` présentent les cours sous forme de parcours filtrables (texte, spécialisation, disponibilité des Skills).
- Les groupes et l'ordre sont déduits directement de la section « Positionnement dans le cursus » ou de la section « Parcours » des `course.md` synchronisés depuis l'OKF. Aucune liste parallèle de cours n'est entretenue sur le site.
- Sur chaque fiche de cours, les Skills apprenant et formateur renvoient **uniquement** aux fichiers ZIP d'une Release publiée dans [l'OKF privé](https://github.com/afiexpertise/afiu-okf-knowledge/releases). Aucune archive n'est hébergée par Astro.
- `pnpm sync:skills` vérifie avec un jeton serveur `AFIU_OKF_TOKEN` les assets de la dernière Release. En cas d'absence de jeton, de Release ou de décalage de révision OKF, le site n'affiche **aucun** bouton de téléchargement non confirmé.
- `pnpm sync:content -- --fr <okf-path>` copie seulement les `course.md` destinés au catalogue public; il exclut les `SKILL.md`, contenus d'évaluation et supports internes, même lorsqu'ils existent dans l'OKF.
- Les formateurs qui téléchargent un ZIP doivent avoir accès au dépôt privé OKF dans GitHub. Aucun jeton de service n'est transmis au navigateur.
- Après une compilation publiée, le workflow OKF peut déclencher un nouveau déploiement Astro via `repository_dispatch` si le secret optionnel `AFIU_SITE_DISPATCH_TOKEN` est configuré côté OKF. Sinon, lancer un déploiement manuel du site.
- Les contenus `course.md` en statut draft restent repérables comme brouillons; les validations automatiques de packaging ne constituent pas une approbation pédagogique.

### Validation locale

```bash
pnpm install --frozen-lockfile
pnpm sync:content -- --fr ../afiu-okf-knowledge
AFIU_OKF_TOKEN=<read-only-github-token> pnpm sync:skills
pnpm validate
```

Le jeton dans cet exemple reste dans un environnement autorisé. Ne jamais le committer ni l'exposer dans un bundle frontal.
