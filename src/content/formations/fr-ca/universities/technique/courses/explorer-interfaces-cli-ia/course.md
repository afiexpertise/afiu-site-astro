---
type: Course
title: "Gabarit — Utiliser un assistant IA en ligne de commande"
language: fr-CA
version: "2.0"
status: draft
okf_version: "0.1"
course_id: afiu-tech-ia-interfaces-cli
university: technique
duration_minutes: 210
level: avancé
audience:
  - collaborateurs
canadian_competencies:
  - CN1
  - CN2
  - CN3
  - CN4
  - CN5
  - CN6
afi_competencies:
  - IA-130
  - IA-240
  - IA-320
  - IA-420
  - IA-460
  - IA-510
  - IA-610
  - IA-620
---

# Résumé

Gabarit pédagogique commun aux clients CLI IA. Il ne constitue plus un module produit autonome; chaque environnement dispose de sa propre déclinaison.

Le cours s'inscrit dans le fil rouge du cursus : **une demande reçue par courriel ouvre une tâche que le collaborateur doit conduire de bout en bout avec l'aide de l'assistant IA**.

# Positionnement dans le cursus

- **Parcours :** Cursus IA orienté tâches
- **Produit :** Tronc commun
- **Ordre :** Gabarit CLI
- **Durée :** 210 minutes
- **Rôle :** Gabarit conceptuel partagé; les formations effectives sont GitHub Copilot CLI, Codex CLI, Claude Code CLI et Vibe CLI.

# Compétences couvertes

- **IA-130 — Comprendre le fonctionnement général d’un orchestrateur IA**
- **IA-240 — Identifier objectif, contexte, attentes et sources**
- **IA-320 — Évaluer la qualité d’une réponse**
- **IA-420 — Utiliser le Context Engineering**
- **IA-460 — Utiliser les contraintes**
- **IA-510 — Collaborer avec l’IA**
- **IA-610 — Protéger les données**
- **IA-620 — Gérer les risques associés à l’IA**

# Objectifs pédagogiques

1. Comprendre ce que change une interface CLI dans la collaboration avec l'IA.
2. Définir le contexte de projet accessible à l'agent.
3. Contrôler commandes, fichiers et permissions.
4. Faire planifier, exécuter, tester et vérifier une modification.
5. Comparer l'usage du CLI avec une interface Web ou dédiée.

# Répartition pédagogique

| Bloc | Durée | Part | Finalité |
| --- | ---: | ---: | --- |
| Théorie et démonstration guidée | 63 min | 30 % | Comprendre les concepts, capacités, limites et règles d'usage |
| Expérimentation personnelle du fil rouge | 126 min | 60 % | Réaliser concrètement une partie de la tâche avec l'assistant |
| Réflexion et questions de groupe | 21 min | 10 % | Mettre en commun les observations et discuter des choix de travail |

# Agenda — théorie

- Session CLI, répertoire courant et contexte local.
- Accès aux fichiers, au shell et aux outils.
- Permissions, approbations et principe du moindre privilège.
- Planification, exécution, tests et inspection des changements.
- Traçabilité et reprise d'une session.

# Fil rouge — expérimentation personnelle

**État entrant :** Une tâche technique ou de développement nécessite un travail direct dans l'environnement local.

1. Ouvrir le client CLI dans un projet de démonstration.
2. Faire inspecter le contexte sans modification.
3. Demander un plan avant toute action.
4. Autoriser une modification limitée, lancer les tests et inspecter le diff.
5. Reprendre la session et finaliser uniquement après validation.

**État sortant :** Le participant sait encadrer le travail d'un agent CLI et contrôler ce qu'il peut lire, modifier et exécuter.

# Réflexion et questions de groupe

- **Quel niveau d'accès local est acceptable?**
- **Quelles commandes doivent exiger une approbation explicite?**
- **Quand le terminal est-il préférable à l'interface Web?**

# Validation

Le participant doit pouvoir expliquer ce qu'il a confié à l'IA, identifier les sources utilisées, vérifier le résultat produit et déterminer si la tâche peut progresser vers l'étape suivante.

# Préalables

Modules 1 à 3 ou expérience équivalente; connaissances de base du terminal recommandées.
